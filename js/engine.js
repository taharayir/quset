/* ═══════════════════════════════════════
   NEON QUEST — Engine & Render
   ═══════════════════════════════════════ */

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
const DEF={
  name:'Hero',cls:null,level:1,xp:0,gold:0,hp:100,maxHp:100,mana:50,maxMana:50,
  streak:0,lastDate:null,
  stats:{str:0,end:0,spd:0,int:0,cre:0,log:0,dis:0,wis:0,com:0,lea:0,fin:0,eng:0,foc:0,cha:0,res:0},
  ownedItems:[],equippedItems:{weapon:null,armor:null,helmet:null,ring:null,necklace:null,boots:null,wings:null,aura:null},
  activePet:null,achievements:[],customQuests:[],
  completedToday:[],completedWeekly:[],completedMonthly:[],
  bossHp:300,bossMaxHp:300,bossIdx:0,bossesKilled:0,
  challengeDate:null,challengeDone:false,boosts:{},activityLog:[],
  allQuestsDay:0,totalGold:0,totalXp:0,totalQuests:0,skillPoints:0,
};
let P=JSON.parse(localStorage.getItem('nq_v1')||'null');
if(!P){P=JSON.parse(JSON.stringify(DEF))}
else{for(const k in DEF)if(!(k in P))P[k]=JSON.parse(JSON.stringify(DEF[k]))}
function save(){localStorage.setItem('nq_v1',JSON.stringify(P))}
function today(){return new Date().toDateString()}

// INIT SKILL SELECT
(function(){
  const sel=document.getElementById('qStat');
  Object.entries(GD.STATS).forEach(([k,v])=>{
    const o=document.createElement('option');o.value=k;o.textContent=v.icon+' '+v.fa;sel.appendChild(o);
  });
})();

// DAILY RESET
function checkReset(){
  const t=today();
  if(P.lastDate&&P.lastDate!==t){
    const yd=new Date();yd.setDate(yd.getDate()-1);
    P.streak=P.lastDate===yd.toDateString()?P.streak+1:0;
    if(P.bossHp<=0){
      const ni=Math.min(P.bossIdx+1,GD.BOSSES.length-1);
      if(ni>P.bossIdx)P.bossIdx=ni;
      const b=GD.BOSSES[P.bossIdx];P.bossHp=b.hp;P.bossMaxHp=b.hp;
    }
    P.activityLog.push(P.completedToday.length);
    if(P.activityLog.length>30)P.activityLog.shift();
    P.completedToday=[];P.challengeDate=null;P.challengeDone=false;
  }
  save();
}

// QUEST COMPLETE
function completeQuest(id,type){
  const key=id+'_'+type;
  const arr=type==='weekly'?P.completedWeekly:type==='monthly'?P.completedMonthly:P.completedToday;
  if(arr.includes(key)){showToast('قبلاً انجام دادی!','red');return}
  const allQ=[...GD.QUESTS.daily,...GD.QUESTS.weekly,...GD.QUESTS.monthly,...Object.values(GD.CLASS_QUESTS).flat(),...P.customQuests];
  const q=allQ.find(x=>x.id===id);if(!q)return;
  let xp=q.xp,gold=q.gold;
  const sm=P.streak>=30?1.5:P.streak>=7?1.2:P.streak>=3?1.1:1;
  xp=Math.round(xp*sm);
  if(P.cls&&GD.CLASSES[P.cls]?.bonusStat===q.stat)xp=Math.round(xp*1.2);
  P.ownedItems.forEach(iid=>{
    const it=GD.SHOP_ITEMS.find(x=>x.id===iid);if(!it)return;
    if(it.stat===q.stat||it.stat==='all')xp=Math.round(xp*(1+it.bonusPct));
  });
  if(P.activePet){
    const pet=GD.PETS.find(x=>x.id===P.activePet);
    if(pet){if(pet.stat==='xp'||pet.stat==='all')xp=Math.round(xp*(1+pet.val));if(pet.stat==='gold')gold+=pet.val;}
  }
  const now=Date.now();
  if(P.boosts.boost_xp&&P.boosts.boost_xp>now)xp*=2;
  if(P.boosts.boost_gold&&P.boosts.boost_gold>now)gold*=2;
  if(P.boosts.boost_xp5&&P.boosts.boost_xp5>now)xp*=5;
  xp=Math.round(xp);gold=Math.round(gold);
  P.xp+=xp;P.gold+=gold;P.totalGold+=gold;P.totalXp+=xp;P.totalQuests++;
  P.stats[q.stat]=(P.stats[q.stat]||0)+2;
  arr.push(key);P.lastDate=today();
  if(P.bossHp>0){
    P.bossHp-=xp;
    if(P.bossHp<=0){
      P.bossHp=0;const b=GD.BOSSES[Math.min(P.bossIdx,GD.BOSSES.length-1)];
      P.gold+=b.reward.gold;P.xp+=b.reward.xp;P.bossesKilled++;
      setTimeout(()=>showBossDefeated(b),700);
    } else {
      const c=document.getElementById('bossCard');
      c.style.animation='none';void c.offsetWidth;c.style.animation='bShake .4s ease';
    }
  }
  const allDone=GD.QUESTS.daily.every(q=>P.completedToday.includes(q.id+'_daily'));
  if(allDone){P.allQuestsDay++;launchConfetti(50);showToast('🏆 همه مأموریت‌ها!','gold')}
  checkLevelUp();checkAch();save();renderAll();
  showXpFloat('+'+xp+' XP');showToast('✅ +'+xp+' XP  +'+gold+' 🪙','green');
  updateAvatarCanvas();
}

function checkLevelUp(){
  const need=GD.XP_PER_LEVEL(P.level);
  if(P.xp>=need){
    P.xp-=need;P.level++;P.skillPoints++;
    P.hp=Math.min(P.maxHp,P.hp+20);P.mana=Math.min(P.maxMana,P.mana+5);
    const boss=GD.BOSSES.find(b=>b.level===P.level);
    if(boss){P.bossIdx=GD.BOSSES.indexOf(boss);P.bossHp=boss.hp;P.bossMaxHp=boss.hp;setTimeout(()=>showToast('👾 باس جدید: '+boss.name+'!','red'),1200)}
    if(P.level===5&&!P.cls)setTimeout(()=>openClassModal(),800);
    showLevelUp();checkLevelUp();
  }
}

function checkAch(){
  GD.ACHIEVEMENTS.forEach(a=>{
    if(!P.achievements.includes(a.id)&&a.c(P)){
      P.achievements.push(a.id);
      setTimeout(()=>{showToast('🏆 '+a.name,'gold');launchConfetti(25)},400);
    }
  });
}

function buyItem(id){
  const it=GD.SHOP_ITEMS.find(x=>x.id===id);if(!it)return;
  if(P.ownedItems.includes(id)&&it.cat!=='boost'){showToast('قبلاً داری!','red');return}
  if(P.gold<it.price){showToast('Gold کم داری! 💸','red');return}
  P.gold-=it.price;
  if(it.stat==='hp'){P.maxHp+=it.hp||10;P.hp=Math.min(P.hp+(it.hp||10),P.maxHp)}
  if(it.stat==='hp_pot'){P.hp=Math.min(P.hp+50,P.maxHp)}
  if(it.stat==='boost_xp'){P.boosts.boost_xp=Date.now()+86400000}
  if(it.stat==='boost_gold'){P.boosts.boost_gold=Date.now()+86400000}
  if(it.stat==='boost_xp5'){P.boosts.boost_xp5=Date.now()+3600000}
  if(it.cat!=='boost')P.ownedItems.push(id);
  checkAch();save();renderAll();
  showToast('🎁 '+it.name+' خریداری شد!','gold');launchConfetti(20);
}

function equipItem(id){
  const it=GD.SHOP_ITEMS.find(x=>x.id===id);if(!it||!it.slot)return;
  if(!P.ownedItems.includes(id)){showToast('اول بخر!','red');return}
  P.equippedItems[it.slot]=P.equippedItems[it.slot]===id?null:id;
  save();renderAll();updateAvatarCanvas();
  showToast(P.equippedItems[it.slot]?'✅ '+it.name+' تجهیز شد':'تجهیز برداشته شد','blue');
}

function activatePet(id){
  const pet=GD.PETS.find(x=>x.id===id);if(!pet)return;
  if(P.level<pet.req){showToast('Level '+pet.req+' نیاز داری!','red');return}
  P.activePet=P.activePet===id?null:id;
  save();renderAll();
  showToast(P.activePet?'🐾 '+pet.name+' فعال شد':'پت غیرفعال شد','blue');
}

function completeChallenge(){
  if(P.challengeDone&&P.challengeDate===today()){showToast('امروز انجام دادی!','red');return}
  const ch=GD.DAILY_CHALLENGES[new Date().getDate()%GD.DAILY_CHALLENGES.length];
  P.xp+=ch.reward.xp;P.gold+=ch.reward.gold;P.totalGold+=ch.reward.gold;
  P.challengeDate=today();P.challengeDone=true;
  checkLevelUp();checkAch();save();renderAll();
  showToast('🎯 +'+ch.reward.xp+' XP +'+ch.reward.gold+' 🪙','gold');launchConfetti(35);
  document.getElementById('chBtn').disabled=true;document.getElementById('chBtn').textContent='✓ Done';
}

function selectClass(cls){
  P.cls=cls;save();closeModal('classModal');renderAll();updateAvatarCanvas();
  showToast('✅ '+GD.CLASSES[cls].name+' selected!','blue');launchConfetti(30);
}

function saveName(){
  const v=document.getElementById('nameInput').value.trim();
  if(!v){showToast('اسم خالیه!','red');return}
  P.name=v;save();renderAll();showToast('✅ ذخیره شد','green');
}

function addCustomQuest(){
  const title=document.getElementById('qTitle').value.trim();
  const type=document.getElementById('qType').value;
  const stat=document.getElementById('qStat').value;
  const xp=parseInt(document.getElementById('qXp').value)||25;
  const gold=parseInt(document.getElementById('qGold').value)||12;
  if(!title){showToast('اسم خالیه!','red');return}
  P.customQuests.push({id:'cust_'+Date.now(),title,xp,gold,stat,type});
  save();closeModal('questModal');renderAll();showToast('✅ مأموریت اضافه شد!','green');
  document.getElementById('qTitle').value='';
}

function confirmReset(){if(confirm('RESET ALL DATA? این عمل برگشت‌پذیر نیست!')){localStorage.removeItem('nq_v1');location.reload()}}

// ═══ THREE.JS AVATAR ═══
let scene,camera,renderer,avatar3DParts={};
function init3D(){
  if(typeof THREE==='undefined')return;
  const canvas=document.getElementById('avatarCanvas');
  scene=new THREE.Scene();
  camera=new THREE.PerspectiveCamera(50,canvas.clientWidth/canvas.clientHeight,0.1,100);
  camera.position.set(0,0.5,3.5);
  renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
  renderer.setSize(canvas.clientWidth,canvas.clientHeight,false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.shadowMap.enabled=true;
  // Lights
  const ambL=new THREE.AmbientLight(0x334466,0.6);scene.add(ambL);
  const dirL=new THREE.DirectionalLight(0x00d4ff,1.2);dirL.position.set(2,4,3);dirL.castShadow=true;scene.add(dirL);
  const purL=new THREE.PointLight(0xb44fff,0.8,10);purL.position.set(-2,2,2);scene.add(purL);
  const pinkL=new THREE.PointLight(0xff2d78,0.5,8);pinkL.position.set(2,-1,3);scene.add(pinkL);
  // Character body group
  const group=new THREE.Group();scene.add(group);avatar3DParts.group=group;
  // HEAD
  const headGeo=new THREE.SphereGeometry(0.32,16,16);
  const headMat=new THREE.MeshStandardMaterial({color:0xf5c5a3,roughness:0.6,metalness:0.1});
  const head=new THREE.Mesh(headGeo,headMat);head.position.y=1.05;head.castShadow=true;group.add(head);avatar3DParts.head=head;
  // EYES
  const eyeGeo=new THREE.SphereGeometry(0.06,8,8);
  const eyeMat=new THREE.MeshStandardMaterial({color:0x111122,emissive:0x0044ff,emissiveIntensity:0.5});
  const eyeL=new THREE.Mesh(eyeGeo,eyeMat);eyeL.position.set(-0.12,1.1,0.28);group.add(eyeL);
  const eyeR=new THREE.Mesh(eyeGeo,eyeMat);eyeR.position.set(0.12,1.1,0.28);group.add(eyeR);
  // BODY
  const bodyGeo=new THREE.CylinderGeometry(0.22,0.28,0.65,12);
  const bodyMat=new THREE.MeshStandardMaterial({color:0x1e2235,roughness:0.4,metalness:0.6,envMapIntensity:0.8});
  const body=new THREE.Mesh(bodyGeo,bodyMat);body.position.y=0.44;body.castShadow=true;group.add(body);avatar3DParts.body=body;
  // ARMS
  const armGeo=new THREE.CylinderGeometry(0.07,0.07,0.5,8);
  const armL=new THREE.Mesh(armGeo,bodyMat);armL.position.set(-0.35,0.5,0);armL.rotation.z=Math.PI/8;group.add(armL);avatar3DParts.armL=armL;
  const armR=new THREE.Mesh(armGeo,bodyMat);armR.position.set(0.35,0.5,0);armR.rotation.z=-Math.PI/8;group.add(armR);avatar3DParts.armR=armR;
  // LEGS
  const legGeo=new THREE.CylinderGeometry(0.09,0.07,0.55,8);
  const legMat=new THREE.MeshStandardMaterial({color:0x0d1020,roughness:0.5,metalness:0.4});
  const legL=new THREE.Mesh(legGeo,legMat);legL.position.set(-0.14,0,0);group.add(legL);
  const legR=new THREE.Mesh(legGeo,legMat);legR.position.set(0.14,0,0);group.add(legR);
  // AURA RING
  const auraGeo=new THREE.TorusGeometry(0.55,0.02,8,32);
  const auraMat=new THREE.MeshStandardMaterial({color:0x00d4ff,emissive:0x00d4ff,emissiveIntensity:1.5,transparent:true,opacity:0.7});
  const aura=new THREE.Mesh(auraGeo,auraMat);aura.position.y=0.5;aura.rotation.x=Math.PI/2;group.add(aura);avatar3DParts.aura=aura;
  // GROUND SHADOW CIRCLE
  const shadowGeo=new THREE.CircleGeometry(0.4,32);
  const shadowMat=new THREE.MeshBasicMaterial({color:0x000000,transparent:true,opacity:0.3});
  const shadowMesh=new THREE.Mesh(shadowGeo,shadowMat);shadowMesh.rotation.x=-Math.PI/2;shadowMesh.position.y=-0.27;group.add(shadowMesh);
  // WEAPON placeholder
  const weaponGeo=new THREE.BoxGeometry(0.06,0.6,0.04);
  const weaponMat=new THREE.MeshStandardMaterial({color:0x888888,metalness:0.9,roughness:0.1});
  const weapon=new THREE.Mesh(weaponGeo,weaponMat);weapon.position.set(0.55,0.5,-0.05);weapon.rotation.z=0.3;group.add(weapon);avatar3DParts.weapon=weapon;
  // GRID FLOOR
  const gridH=new THREE.GridHelper(4,20,0x00d4ff,0x111428);gridH.position.y=-0.27;gridH.material.opacity=0.15;gridH.material.transparent=true;scene.add(gridH);
  // PARTICLES in scene
  const partGeo=new THREE.BufferGeometry();
  const partCount=60;const positions=new Float32Array(partCount*3);
  for(let i=0;i<partCount*3;i++)positions[i]=(Math.random()-0.5)*4;
  partGeo.setAttribute('position',new THREE.BufferAttribute(positions,3));
  const partMat=new THREE.PointsMaterial({color:0x00d4ff,size:0.04,transparent:true,opacity:0.6});
  const particles=new THREE.Points(partGeo,partMat);scene.add(particles);avatar3DParts.particles=particles;
  // Animate
  let t=0;
  function animate(){
    requestAnimationFrame(animate);t+=0.016;
    if(avatar3DParts.group){group.rotation.y=Math.sin(t*0.3)*0.2+t*0.004}
    if(avatar3DParts.aura){aura.rotation.z=t*1.5;auraMat.emissiveIntensity=1.2+Math.sin(t*2)*0.4}
    if(avatar3DParts.head){head.position.y=1.05+Math.sin(t*1.2)*0.02}
    if(avatar3DParts.particles){particles.rotation.y=t*0.1;particles.rotation.x=t*0.05}
    renderer.render(scene,camera);
  }
  animate();
}

function updateAvatarCanvas(){
  if(!avatar3DParts.body)return;
  const ci=P.cls?GD.CLASSES[P.cls]:null;
  // change body color based on class
  const clsColors={warrior:0xff2020,knight:0x2060ff,berserker:0xff6000,paladin:0xffcc00,gladiator:0xff8800,scholar:0x4080ff,engineer:0xff8000,programmer:0x00ccaa,scientist:0x8844ff,researcher:0x2288ff,assassin:0xff2266,ninja:0x334455,hunter:0x44aa44,ranger:0x226622,spy:0x8833cc,monk:0x9944ff,druid:0x22aa44,priest:0xffee66,sage:0x33bbcc,oracle:0xff44aa};
  if(ci&&avatar3DParts.body){
    const c=clsColors[P.cls]||0x1e2235;avatar3DParts.body.material.color.setHex(c);
    avatar3DParts.armL.material.color.setHex(c);avatar3DParts.armR.material.color.setHex(c);
  }
  // aura color by level
  const aC=P.level>=40?0xff2d78:P.level>=30?0xffcc00:P.level>=20?0xb44fff:P.level>=10?0x00ffcc:0x00d4ff;
  if(avatar3DParts.aura){avatar3DParts.aura.material.color.setHex(aC);avatar3DParts.aura.material.emissive.setHex(aC)}
  // weapon visibility
  if(avatar3DParts.weapon){
    const we=P.equippedItems.weapon?GD.SHOP_ITEMS.find(x=>x.id===P.equippedItems.weapon):null;
    avatar3DParts.weapon.visible=!!we;
    if(we){const wC=we.rarity==='mythic'?0xff2d78:we.rarity==='legendary'?0xffcc00:we.rarity==='epic'?0xb44fff:we.rarity==='rare'?0x4f9fff:0x888888;avatar3DParts.weapon.material.color.setHex(wC);avatar3DParts.weapon.material.emissive.setHex(wC);avatar3DParts.weapon.material.emissiveIntensity=0.5}
  }
}

// ═══ RENDER ═══
let curQTab='daily',curShopTab='weapon',curInvTab='all',curTreeStat='str',curPetFilter='all';

function renderAll(){renderTopbar();renderDash();renderQuests();renderTree();renderMap();renderInventory();renderShop();renderPets();renderProfile()}

function renderTopbar(){
  document.getElementById('topLvl').textContent=P.level;
  document.getElementById('topStreak').textContent='🔥 '+P.streak;
  document.getElementById('topGold').textContent=P.gold;
}

function renderDash(){
  const ci=P.cls?GD.CLASSES[P.cls]:null;
  document.getElementById('pcName').textContent=P.name;
  document.getElementById('pcGold').textContent=P.gold+' 🪙';
  document.getElementById('pcTitle').textContent=getTitle(P.level).t+' — '+getTitle(P.level).fa;
  const cb=document.getElementById('pcClassBadge');
  if(ci)cb.innerHTML=`<span class="pc-class-neon" style="color:${ci.color};border-color:${ci.color}25;background:${ci.color}10" onclick="openClassModal()">${ci.icon} ${ci.name}</span>`;
  else cb.innerHTML=`<span class="pc-class-neon" style="color:var(--text3);border-color:var(--border)" onclick="openClassModal()">SELECT CLASS ←</span>`;
  document.getElementById('hpBar').style.width=(P.hp/P.maxHp*100)+'%';document.getElementById('hpTxt').textContent=P.hp+'/'+P.maxHp;
  const need=GD.XP_PER_LEVEL(P.level);document.getElementById('xpBar').style.width=Math.min(100,P.xp/need*100)+'%';document.getElementById('xpTxt').textContent=P.xp+'/'+need;
  document.getElementById('manaBar').style.width=(P.mana/P.maxMana*100)+'%';document.getElementById('manaTxt').textContent=P.mana+'/'+P.maxMana;
  // stats
  const maxS=Math.max(1,...Object.values(P.stats));let totalPow=0;
  const sg=document.getElementById('statsGrid');
  sg.innerHTML=Object.entries(GD.STATS).map(([k,v])=>{
    const val=P.stats[k]||0;totalPow+=val;const pct=Math.round(val/Math.max(50,maxS)*100);
    return`<div class="stat-c" onclick="showStatModal('${k}')" style="border-color:${v.color}22">
      <div class="stat-glow" style="background:radial-gradient(circle at 50% 0%,${v.color}15,transparent)"></div>
      <div class="s-icon">${v.icon}</div>
      <div class="s-bar-w"><div class="s-bar-f" style="width:${pct}%;background:${v.color}"></div></div>
      <div class="s-val" style="color:${v.color}">${val}</div>
      <div class="s-nm">${v.name.toUpperCase().slice(0,3)}</div>
    </div>`;
  }).join('');
  document.getElementById('totalPow').textContent='Power: '+totalPow;
  // boss
  const boss=GD.BOSSES[Math.min(P.bossIdx,GD.BOSSES.length-1)];
  document.getElementById('bossEm').textContent=boss.icon;document.getElementById('bossName').textContent=boss.name;
  document.getElementById('bossSub').textContent='Level '+boss.level+' Boss';
  const bpct=Math.max(0,P.bossHp/P.bossMaxHp*100);
  document.getElementById('bossHpF').style.width=bpct+'%';document.getElementById('bossHpTxt').textContent=Math.max(0,P.bossHp)+'/'+P.bossMaxHp;
  const ring=document.getElementById('bossRingPath');if(ring)ring.style.strokeDashoffset=213.6-(213.6*bpct/100);
  document.getElementById('bossDmg').textContent=P.bossHp<=0?'✅ Defeated! فردا باس جدید':'هر مأموریت = ضربه 💥';
  // challenge
  const ch=GD.DAILY_CHALLENGES[new Date().getDate()%GD.DAILY_CHALLENGES.length];
  const cdone=P.challengeDone&&P.challengeDate===today();
  document.getElementById('chIcon').textContent=ch.icon;document.getElementById('chNm').textContent=ch.title;
  document.getElementById('chRw').textContent='+'+ch.reward.xp+' XP  +'+ch.reward.gold+' 🪙';
  const cb2=document.getElementById('chBtn');cb2.disabled=cdone;cb2.textContent=cdone?'✓ Done':'انجام';
  // achievements
  document.getElementById('achCount').textContent=P.achievements.length+'/'+GD.ACHIEVEMENTS.length;
  document.getElementById('achScroll').innerHTML=GD.ACHIEVEMENTS.map(a=>{
    const u=P.achievements.includes(a.id)||a.c(P);
    return`<div class="ach-item ${u?'unlocked':'locked'}"><div class="ach-em">${a.icon}</div><div class="ach-nm">${a.name}</div><div class="ach-dc">${a.desc}</div></div>`;
  }).join('');
}

function renderQuests(){
  const d=new Date();const days=['یکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه','شنبه'];
  document.getElementById('qDate').textContent=days[d.getDay()]+' '+d.getDate();
  document.getElementById('skillPts').textContent='💎 '+P.skillPoints+' pts';
  const total=GD.QUESTS.daily.length;const done=GD.QUESTS.daily.filter(q=>P.completedToday.includes(q.id+'_daily')).length;
  const pct=total>0?Math.round(done/total*100):0;
  const ring=document.getElementById('qRing');if(ring)ring.style.strokeDashoffset=125.6-(125.6*pct/100);
  document.getElementById('qRingTxt').textContent=pct+'%';
  let quests=[];
  if(curQTab==='daily')quests=GD.QUESTS.daily;
  else if(curQTab==='weekly')quests=GD.QUESTS.weekly;
  else if(curQTab==='monthly')quests=GD.QUESTS.monthly;
  else if(curQTab==='class')quests=P.cls?GD.CLASS_QUESTS[P.cls]||[]:[];
  else quests=P.customQuests;
  const arr=curQTab==='weekly'?P.completedWeekly:curQTab==='monthly'?P.completedMonthly:P.completedToday;
  if(!quests.length){document.getElementById('questList').innerHTML=`<div style="color:var(--text3);font-size:11px;text-align:center;padding:18px">${curQTab==='class'&&!P.cls?'ابتدا کلاس انتخاب کن!':'خالی'}</div>`;return}
  document.getElementById('questList').innerHTML=quests.map(q=>{
    const key=q.id+'_'+curQTab;const isDone=arr.includes(key);const si=GD.STATS[q.stat];
    return`<div class="qi ${isDone?'done':''}" onclick="completeQuest('${q.id}','${curQTab}');addRipple(event,this)">
      <div class="qchk">${isDone?'✓':''}</div>
      <div class="qcont">
        <div class="qtit">${q.title}</div>
        <div class="qrws">
          <span class="rtag rx">+${q.xp} XP</span>
          <span class="rtag rg">+${q.gold} 🪙</span>
          <span class="rtag rs" style="color:${si?.color||'var(--purple)'}">${si?.icon||''} ${si?.name||q.stat}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

function renderTree(){
  // tabs
  const tt=document.getElementById('treeTabs');
  if(!tt.children.length){
    Object.entries(GD.STATS).forEach(([k,v])=>{
      const btn=document.createElement('button');btn.className='ttab'+(k==='str'?' active':'');
      btn.textContent=v.icon+' '+v.fa;btn.onclick=()=>switchTree(k,btn);tt.appendChild(btn);
    });
  }
  const st=curTreeStat;const si=GD.STATS[st];const val=P.stats[st]||0;
  // generate 5 nodes per stat
  const nodes=[
    {req:5,name:st.toUpperCase()+' Apprentice',icon:si.icon,bonus:'+5% XP'},
    {req:10,name:st.toUpperCase()+' Adept',icon:'⚡',bonus:'+10% XP'},
    {req:20,name:st.toUpperCase()+' Expert',icon:'💫',bonus:'+20% XP'},
    {req:35,name:st.toUpperCase()+' Master',icon:'🌟',bonus:'+35% XP'},
    {req:50,name:st.toUpperCase()+' GOD',icon:'👑',bonus:'x2 همه'},
  ];
  document.getElementById('treeWrap').innerHTML=nodes.map((n,i)=>{
    const u=val>=n.req;const conn=i<nodes.length-1?`<div class="tree-conn" style="background:${u?si.color:'var(--border)'};${u?'box-shadow:0 0 4px '+si.color:''}"></div>`:''
    return`<div class="tree-node ${u?'unlocked':'locked'}" style="${u?'border-color:'+si.color+'33':''}">
      ${u?`<div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,${si.color},transparent)"></div>`:''}
      <div class="tn-h">
        <div class="tn-ic">${n.icon}</div>
        <div class="tn-in"><div class="tn-nm">${n.name}</div><div class="tn-ds" style="color:${si.color}">${n.bonus}</div></div>
        <div class="tn-rq" style="${u?'color:var(--neon-green);border-color:rgba(57,255,20,.3);':''}">${u?'✓ UNLOCKED':n.req+' '+si.name}</div>
      </div>
    </div>${conn}`;
  }).join('');
}

function renderMap(){
  document.getElementById('mapLevel').textContent='Level '+P.level;
  let curIdx=0;GD.WORLD_ZONES.forEach((z,i)=>{if(P.level>=z.level)curIdx=i});
  document.getElementById('mapPath').innerHTML=GD.WORLD_ZONES.map((z,i)=>{
    const u=P.level>=z.level;const isCur=i===curIdx;const cls=isCur?'current':u?'unlocked':'locked';
    const lineL=i>0?`<div class="zone-line ${P.level>=GD.WORLD_ZONES[i-1].level?'done':''}"></div>`:'';
    const lineR=i<GD.WORLD_ZONES.length-1?`<div class="zone-line ${u?'done':''}"></div>`:'';
    const isEven=i%2===1;
    return`<div class="map-zone-row">${isEven?lineR:lineL}
      <div class="zone-dot-w">
        <div class="zone-dot ${cls}" style="${isCur?'border-color:'+z.color+';box-shadow:0 0 16px '+z.color+'66':''}">
          <span style="filter:${u?'none':'grayscale(1)'}">${z.icon}</span>
        </div>
        <div class="zone-lbl ${cls}">${z.name}</div>
      </div>
      ${isEven?lineL:lineR}
      <div class="zone-side">
        <div class="zone-sn" style="color:${isCur?z.color:u?'var(--text)':'var(--text3)'}">${z.name}</div>
        <div class="zone-sr">${u?'🔓 Lv.'+z.level:'🔒 Lv.'+z.level+' needed'}</div>
      </div>
    </div>`;
  }).join('');
}

function renderInventory(){
  const items=P.ownedItems.map(id=>GD.SHOP_ITEMS.find(x=>x.id===id)).filter(Boolean);
  const filtered=curInvTab==='all'?items:items.filter(x=>x.slot===curInvTab||x.cat===curInvTab);
  document.getElementById('invCount').textContent=P.ownedItems.length+' آیتم';
  document.getElementById('invGrid').innerHTML=filtered.length===0
    ?`<div style="grid-column:span 3;color:var(--text3);font-size:11px;text-align:center;padding:20px">خالی!</div>`
    :filtered.map(it=>{
      const eq=Object.values(P.equippedItems).includes(it.id);
      const RC={common:'var(--common)',rare:'var(--rare)',epic:'var(--epic)',legendary:'var(--legendary)',mythic:'var(--mythic)'};
      const art=typeof getItemArt!=='undefined'?getItemArt(it.id,it.icon,52):`<div class="inv-icon">${it.icon}</div>`;
      return`<div class="inv-slot rar-border ${it.rarity} ${eq?'equipped':''}" onclick="openItemDetail('${it.id}')">
        ${eq?'<div class="inv-eq-badge">EQ</div>':''} 
        <div class="inv-art">${art}</div>
        <div class="inv-nm">${it.name}</div>
        <div class="inv-rar ${it.rarity}" style="color:${RC[it.rarity]}">${it.rarity.toUpperCase()}</div>
      </div>`;
    }).join('');
  // equipped slots
  const slots=[{k:'weapon',l:'⚔️'},{k:'armor',l:'🛡️'},{k:'helmet',l:'⛑️'},{k:'ring',l:'💍'},{k:'necklace',l:'📿'},{k:'boots',l:'👟'},{k:'wings',l:'🕊️'},{k:'aura',l:'✨'}];
  document.getElementById('eqSlots').innerHTML=slots.map(s=>{
    const eid=P.equippedItems[s.k];const it=eid?GD.SHOP_ITEMS.find(x=>x.id===eid):null;
    return`<div class="inv-slot ${eid?'':' empty'}" style="min-height:56px" onclick="${eid?`openItemDetail('${eid}')`:''}">
      <div class="inv-icon" style="font-size:18px">${it?it.icon:s.l}</div>
      ${it?`<div class="inv-nm" style="font-size:7px">${it.name.split(' ')[0]}</div>`:''}
    </div>`;
  }).join('');
}

function renderShop(){
  document.getElementById('shopGold').textContent=P.gold;
  const items=GD.SHOP_ITEMS.filter(x=>x.cat===curShopTab);
  const RC={common:'var(--common)',rare:'var(--rare)',epic:'var(--epic)',legendary:'var(--legendary)',mythic:'var(--mythic)'};
  document.getElementById('shopGrid').innerHTML=items.map(it=>{
    const owned=P.ownedItems.includes(it.id)&&it.cat!=='boost';const cant=P.gold<it.price&&!owned;
    const art=typeof getItemArt!=='undefined'?getItemArt(it.id,it.icon,64):`<div class="shop-ico-em">${it.icon}</div>`;
    return`<div class="shop-item ${owned?'owned':''} ${cant?'cant':''}" onclick="buyItem('${it.id}')">
      ${owned?'<div class="shop-own-badge">✓ OWNED</div>':''} 
      <div class="shop-rl ${it.rarity}"></div>
      <div class="shop-art">${art}</div>
      <div class="shop-nm">${it.name}</div>
      <div class="shop-rar-lbl" style="color:${RC[it.rarity]};font-size:7px;font-family:Orbitron,monospace;letter-spacing:.5px;margin-bottom:3px">${it.rarity.toUpperCase()}</div>
      <div class="shop-bn">${it.bonus}</div>
      <div class="shop-pr">${owned?'✓ Owned':'🪙 '+it.price}</div>
    </div>`;
  }).join('');
}

function renderPets(){
  const active=P.activePet?GD.PETS.find(x=>x.id===P.activePet):null;
  document.getElementById('activePetLbl').textContent=active?active.icon+' '+active.name:'بدون پت';
  const pets=curPetFilter==='all'?GD.PETS:GD.PETS.filter(x=>x.rarity===curPetFilter);
  const RC={common:'var(--common)',rare:'var(--rare)',epic:'var(--epic)',legendary:'var(--legendary)',mythic:'var(--mythic)'};
  document.getElementById('petsGrid').innerHTML=pets.map(pet=>{
    const locked=P.level<pet.req;const isAct=P.activePet===pet.id;
    return`<div class="pet-c ${isAct?'pet-active':''} ${locked?'pet-locked':''}" onclick="activatePet('${pet.id}')">
      ${isAct?'<div class="pet-act-b">ACTIVE ✓</div>':''}
      <span class="pet-ico">${pet.icon}</span>
      <div class="pet-nm">${pet.name}</div>
      <div class="pet-rar" style="color:${RC[pet.rarity]}">${pet.rarity.toUpperCase()}</div>
      <div class="pet-bn">${pet.bonus}</div>
      <div class="pet-rq">${locked?'🔒 Lv.'+pet.req:'🔓 Lv.'+pet.req}</div>
    </div>`;
  }).join('');
}

function renderProfile(){
  const ci=P.cls?GD.CLASSES[P.cls]:null;
  document.getElementById('nameInput').value=P.name;
  document.getElementById('profCls').textContent=ci?ci.icon+' '+ci.name:'NO CLASS';
  document.getElementById('profTit').textContent=getTitle(P.level).t.toUpperCase();
  document.getElementById('profAv').textContent=ci?ci.avatar:'⚔️';
  document.getElementById('statsFullGrid').innerHTML=[
    {v:P.level,l:'LEVEL',c:'var(--neon-blue)'},{v:P.xp,l:'XP',c:'var(--neon-purple)'},{v:P.gold,l:'GOLD',c:'var(--gold)'},
    {v:P.streak,l:'STREAK 🔥',c:'var(--neon-orange)'},{v:P.totalQuests,l:'QUESTS',c:'var(--neon-green)'},{v:P.achievements.length,l:'ACHIEV.',c:'var(--neon-pink)'},
    {v:P.bossesKilled,l:'BOSSES',c:'var(--red)'},{v:P.ownedItems.length,l:'ITEMS',c:'var(--neon-cyan)'},{v:P.skillPoints,l:'SKILL PTS',c:'var(--gold)'},
  ].map(s=>`<div class="sf-c"><div class="sf-v" style="color:${s.c}">${s.v}</div><div class="sf-l">${s.l}</div></div>`).join('');
  const log=[...P.activityLog].slice(-14);const mx=Math.max(1,...log);
  document.getElementById('actChart').innerHTML=log.map(v=>`<div class="act-bar ${v>0?'has':''}" style="height:${Math.max(2,Math.round(v/mx*46))}px"></div>`).join('');
}

// CLASS MODAL
function renderClassModal(){
  const branches={};
  Object.entries(GD.CLASSES).forEach(([id,c])=>{if(!branches[c.branch])branches[c.branch]=[];branches[c.branch].push({id,...c})});
  document.getElementById('classGrid').innerHTML=Object.entries(branches).map(([branch,classes])=>
    `<div class="class-branch"><div class="branch-title">${branch.toUpperCase()}</div><div class="class-opts">${
      classes.map(c=>`<div class="class-opt" onclick="selectClass('${c.id}')">
        <div class="class-opt-glow" style="background:radial-gradient(circle at 50% 0%,${c.color}20,transparent)"></div>
        <div class="co-icon">${c.icon}</div>
        <div class="co-nm" style="color:${c.color}">${c.name}</div>
        <div class="co-bn">${c.desc}</div>
      </div>`).join('')
    }</div></div>`).join('');
}

function showStatModal(stat){
  const si=GD.STATS[stat];const val=P.stats[stat]||0;
  document.getElementById('statModalContent').innerHTML=`
    <div style="text-align:center;padding:6px 0 12px">
      <div style="font-size:36px;margin-bottom:5px;filter:drop-shadow(0 0 10px ${si.color})">${si.icon}</div>
      <div style="font-family:'Orbitron',monospace;font-size:14px;color:${si.color};margin-bottom:2px;text-shadow:0 0 8px ${si.color}">${si.name.toUpperCase()}</div>
      <div style="font-size:28px;font-weight:900;color:${si.color};font-family:'Orbitron',monospace">${val}</div>
      <div style="font-size:10px;color:var(--text3);margin-top:3px">${si.fa}</div>
    </div>
    <div style="background:var(--bg3);border:1px solid ${si.color}33;border-radius:10px;padding:10px;margin-bottom:10px;font-size:11px;color:var(--neon-cyan)">
      💡 این مهارت از طریق مأموریت‌های مرتبط افزایش پیدا می‌کنه
    </div>
    <button class="btn-c" onclick="closeModal('statModal')" style="width:100%">بستن</button>`;
  openModal('statModal');
}

function openItemDetail(id){
  const it=GD.SHOP_ITEMS.find(x=>x.id===id);if(!it)return;
  const RC={common:'var(--common)',rare:'var(--rare)',epic:'var(--epic)',legendary:'var(--legendary)',mythic:'var(--mythic)'};
  const eq=Object.values(P.equippedItems).includes(id);
  document.getElementById('itemModalContent').innerHTML=`
    <div class="idet">
      <div class="idet-icon-art">${typeof getItemArt!=='undefined'?getItemArt(it.id,it.icon,80):'<span style="font-size:64px">'+it.icon+'</span>'}</div>
      <div class="idet-nm">${it.name}</div>
      <div class="idet-rar" style="color:${RC[it.rarity]};text-shadow:0 0 6px ${RC[it.rarity]}">${it.rarity.toUpperCase()}</div>
      <div class="idet-stats">
        <div class="ids-row"><span class="ids-l">Bonus</span><span class="ids-v" style="color:var(--neon-cyan)">${it.bonus}</span></div>
        <div class="ids-row"><span class="ids-l">Price</span><span class="ids-v" style="color:var(--gold);font-family:'Orbitron',monospace">🪙 ${it.price}</span></div>
        ${it.atk?`<div class="ids-row"><span class="ids-l">ATK</span><span class="ids-v" style="color:var(--red)">+${it.atk}</span></div>`:''}
        ${it.hp?`<div class="ids-row"><span class="ids-l">HP</span><span class="ids-v" style="color:var(--neon-green)">+${it.hp}</span></div>`:''}
      </div>
      ${it.slot?`<button class="btn-p" onclick="equipItem('${id}');closeModal('itemModal')" style="width:100%;margin-bottom:7px">${eq?'UNEQUIP ✕':'EQUIP ✓'}</button>`:''}
      <button class="btn-c" onclick="closeModal('itemModal')" style="width:100%">بستن</button>
    </div>`;
  openModal('itemModal');
}

function showLevelUp(){
  document.getElementById('luNum').textContent=P.level;
  const t=getTitle(P.level);document.getElementById('luSub').textContent=t.t.toUpperCase()+' — '+t.fa;
  document.getElementById('luRws').innerHTML=`<div class="lu-rw">+1 💎 SKILL PT</div><div class="lu-rw">+20 ❤️ HP</div>`;
  openModal('luModal');launchConfetti(60);
}

function showBossDefeated(boss){
  document.getElementById('bdIco').textContent=boss.icon;
  document.getElementById('bdNm').textContent=boss.name+' DEFEATED!';
  document.getElementById('bdRw').textContent='+'+boss.reward.gold+' 🪙  +'+boss.reward.xp+' XP';
  openModal('bdModal');launchConfetti(70);
}

// TABS
function switchQTab(t,b){curQTab=t;document.querySelectorAll('.qtab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderQuests()}
function switchShopTab(t,b){curShopTab=t;document.querySelectorAll('.shop-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderShop()}
function switchInvTab(t,b){curInvTab=t;document.querySelectorAll('.inv-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderInventory()}
function switchTree(k,b){curTreeStat=k;document.querySelectorAll('.ttab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderTree()}
function switchPetFilter(f,b){curPetFilter=f;document.querySelectorAll('.pf-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderPets()}

function goPage(id,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');btn.classList.add('active');
  if(id==='shop')renderShop();if(id==='profile')renderProfile();
  if(id==='map')renderMap();if(id==='skilltree')renderTree();
  if(id==='inventory')renderInventory();if(id==='pets')renderPets();
}

function openModal(id){document.getElementById(id).classList.add('open')}
function closeModal(id){document.getElementById(id).classList.remove('open')}
function openClassModal(){renderClassModal();openModal('classModal')}
function openQuestModal(){openModal('questModal')}

function getTitle(l){return GD.TITLES.find(x=>l>=x.min&&l<=x.max)||GD.TITLES[GD.TITLES.length-1]}

function showToast(msg,type='green'){
  const c=document.getElementById('toastC');const el=document.createElement('div');
  el.className='toast '+type;el.textContent=msg;c.appendChild(el);setTimeout(()=>el.remove(),2700);
}
function showXpFloat(text){
  const c=document.getElementById('xpFC');const el=document.createElement('div');
  el.className='xp-f';el.textContent=text;el.style.left=(20+Math.random()*60)+'%';el.style.top='40%';
  c.appendChild(el);setTimeout(()=>el.remove(),1400);
}
function launchConfetti(n=30){
  const cols=['#f0c040','#00d4ff','#b44fff','#ff2d78','#00ffcc','#ff6b35','#39ff14'];
  for(let i=0;i<n;i++){
    const el=document.createElement('div');el.className='confetti-p';
    const sz=5+Math.random()*8;
    el.style.cssText=`left:${10+Math.random()*80}%;top:${10+Math.random()*40}%;width:${sz}px;height:${sz}px;background:${cols[Math.floor(Math.random()*cols.length)]};--d:${1+Math.random()*.8}s;--ty:${140+Math.random()*120}px;--tx:${-60+Math.random()*120}px;--r:${360+Math.random()*360}deg;animation-delay:${Math.random()*.25}s;border-radius:${Math.random()>.5?'50%':'2px'}`;
    document.body.appendChild(el);setTimeout(()=>el.remove(),2200);
  }
}
function addRipple(e,el){
  const r=document.createElement('span');const rect=el.getBoundingClientRect();
  const sz=Math.max(rect.width,rect.height);r.className='ripple';
  r.style.width=r.style.height=sz+'px';r.style.left=(e.clientX-rect.left-sz/2)+'px';r.style.top=(e.clientY-rect.top-sz/2)+'px';
  el.appendChild(r);setTimeout(()=>r.remove(),700);
}

// CHALLENGE TIMER
function startTimer(){
  const el=document.getElementById('chTimer');
  function tick(){const now=new Date();const end=new Date();end.setHours(23,59,59,999);const d=end-now;const h=String(Math.floor(d/3600000)).padStart(2,'0');const m=String(Math.floor(d%3600000/60000)).padStart(2,'0');const s=String(Math.floor(d%60000/1000)).padStart(2,'0');el.textContent='⏰ '+h+':'+m+':'+s}
  tick();setInterval(tick,1000);
}

// BOSS SHAKE
const bss=document.createElement('style');bss.textContent='@keyframes bShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-5px)}40%{transform:translateX(5px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}}';document.head.appendChild(bss);

// BG PARTICLES
(function(){
  const cv=document.getElementById('bgCanvas');if(!cv)return;
  const ctx=cv.getContext('2d');let W,H,pts=[];
  function resize(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight}
  resize();window.addEventListener('resize',resize);
  const COLS=['rgba(0,212,255,','rgba(180,79,255,','rgba(255,45,120,','rgba(0,255,204,','rgba(240,192,64,'];
  class Pt{constructor(){this.reset()}reset(){this.x=Math.random()*W;this.y=Math.random()*H;this.vx=(Math.random()-.5)*.2;this.vy=-Math.random()*.25-.05;this.r=Math.random()*1.2+.2;this.col=COLS[Math.floor(Math.random()*COLS.length)];this.a=Math.random()*.25+.03;this.life=0;this.ml=300+Math.random()*600}update(){this.x+=this.vx;this.y+=this.vy;this.life++;if(this.life>this.ml||this.y<-5||this.x<-5||this.x>W+5){this.reset();this.y=H+5}}draw(){const f=this.life<50?this.life/50:this.life>this.ml-50?(this.ml-this.life)/50:1;ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle=this.col+(this.a*f)+')';ctx.fill()}}
  for(let i=0;i<80;i++){const p=new Pt();p.life=Math.random()*p.ml;pts.push(p)}
  function loop(){ctx.clearRect(0,0,W,H);pts.forEach(p=>{p.update();p.draw()});requestAnimationFrame(loop)}loop();
})();

// CLOSE MODALS
document.querySelectorAll('.modal-overlay').forEach(el=>{
  el.addEventListener('click',function(e){if(e.target===this){const safe=['luModal','bdModal'];if(!safe.includes(this.id))closeModal(this.id)}});
});

// LOAD THREE.JS
(function loadThree(){
  const s=document.createElement('script');
  s.src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  s.onload=()=>{init3D();updateAvatarCanvas()};
  s.onerror=()=>{const c=document.getElementById('avatarCanvas');if(c)c.style.background='var(--bg3)';};
  document.head.appendChild(s);
})();

// PWA HINT
if(!window.matchMedia('(display-mode: standalone)').matches){
  setTimeout(()=>showToast('💡 Safari → Share → Add to Home Screen','purple'),4000);
}

// INIT
checkReset();renderAll();startTimer();