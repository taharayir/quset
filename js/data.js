/* ═══════════════════════════════════════
   NEON QUEST — Game Data
   ═══════════════════════════════════════ */

const GD = {
  XP_PER_LEVEL: l => Math.floor(100 * Math.pow(1.15, l-1)),
  
  TITLES: [
    {min:1,max:3,t:'Rookie',fa:'تازه‌کار'},{min:4,max:6,t:'Warrior',fa:'جنگجو'},
    {min:7,max:10,t:'Champion',fa:'قهرمان'},{min:11,max:15,t:'Knight',fa:'شوالیه'},
    {min:16,max:20,t:'Legend',fa:'افسانه'},{min:21,max:30,t:'Mythic',fa:'اسطوره'},
    {min:31,max:40,t:'Immortal',fa:'جاودان'},{min:41,max:50,t:'God',fa:'خدا'},
  ],

  CLASSES: {
    // COMBAT
    warrior:    {name:'Warrior',    icon:'⚔️', branch:'Combat',   color:'#e85d5d', bonusStat:'str', avatar:'⚔️', desc:'جنگجوی فیزیکی'},
    knight:     {name:'Knight',     icon:'🛡️', branch:'Combat',   color:'#5b8dee', bonusStat:'end', avatar:'🛡️', desc:'شوالیه دفاعی'},
    berserker:  {name:'Berserker',  icon:'🪓', branch:'Combat',   color:'#ff6b35', bonusStat:'str', avatar:'🪓', desc:'جنگجوی دیوانه'},
    paladin:    {name:'Paladin',    icon:'✝️', branch:'Combat',   color:'#f0c040', bonusStat:'dis', avatar:'⚜️', desc:'جنگجوی مقدس'},
    gladiator:  {name:'Gladiator', icon:'🏟️', branch:'Combat',   color:'#ff8c42', bonusStat:'str', avatar:'🏟️', desc:'مبارز آرنا'},
    // KNOWLEDGE
    scholar:    {name:'Scholar',    icon:'📚', branch:'Knowledge',color:'#5b8dee', bonusStat:'int', avatar:'🧙', desc:'دانشمند کتابخوان'},
    engineer:   {name:'Engineer',  icon:'⚙️', branch:'Knowledge',color:'#ff8c42', bonusStat:'eng', avatar:'🤖', desc:'مهندس سیستم'},
    programmer: {name:'Programmer',icon:'💻', branch:'Knowledge',color:'#3dd9c5', bonusStat:'eng', avatar:'👨‍💻',desc:'برنامه‌نویس'},
    scientist:  {name:'Scientist',  icon:'🔬', branch:'Knowledge',color:'#9b6dff', bonusStat:'log', avatar:'🧪', desc:'دانشمند'},
    researcher: {name:'Researcher',icon:'🔭', branch:'Knowledge',color:'#5b8dee', bonusStat:'int', avatar:'🔭', desc:'محقق'},
    // SHADOW
    assassin:   {name:'Assassin',  icon:'🗡️', branch:'Shadow',   color:'#ff6b9d', bonusStat:'spd', avatar:'🗡️', desc:'قاتل خاموش'},
    ninja:      {name:'Ninja',      icon:'🥷', branch:'Shadow',   color:'#454860', bonusStat:'spd', avatar:'🥷', desc:'نینجا'},
    hunter:     {name:'Hunter',     icon:'🏹', branch:'Shadow',   color:'#4caf7d', bonusStat:'foc', avatar:'🏹', desc:'شکارچی'},
    ranger:     {name:'Ranger',     icon:'🌲', branch:'Shadow',   color:'#4caf7d', bonusStat:'end', avatar:'🌲', desc:'گشت‌زن'},
    spy:        {name:'Spy',        icon:'🕵️', branch:'Shadow',   color:'#9b6dff', bonusStat:'cha', avatar:'🕵️', desc:'جاسوس'},
    // SPIRITUAL
    monk:       {name:'Monk',       icon:'🔮', branch:'Spiritual',color:'#9b6dff', bonusStat:'wis', avatar:'🧘', desc:'مدیتیشن‌کار'},
    druid:      {name:'Druid',      icon:'🌿', branch:'Spiritual',color:'#4caf7d', bonusStat:'res', avatar:'🌿', desc:'طبیعت‌گرا'},
    priest:     {name:'Priest',     icon:'🕊️', branch:'Spiritual',color:'#f0c040', bonusStat:'wis', avatar:'🕊️', desc:'کشیش'},
    sage:       {name:'Sage',       icon:'📜', branch:'Spiritual',color:'#3dd9c5', bonusStat:'wis', avatar:'📜', desc:'خردمند'},
    oracle:     {name:'Oracle',     icon:'👁️', branch:'Spiritual',color:'#ff6b9d', bonusStat:'foc', avatar:'👁️', desc:'پیشگو'},
  },

  STATS: {
    str: {name:'Strength',    fa:'قدرت',      icon:'⚔️', color:'#e85d5d'},
    end: {name:'Endurance',   fa:'استقامت',   icon:'🛡️', color:'#5b8dee'},
    spd: {name:'Speed',       fa:'سرعت',      icon:'⚡', color:'#f0c040'},
    int: {name:'Intelligence',fa:'هوش',        icon:'📚', color:'#9b6dff'},
    cre: {name:'Creativity',  fa:'خلاقیت',    icon:'🎨', color:'#ff6b9d'},
    log: {name:'Logic',       fa:'منطق',      icon:'🔢', color:'#3dd9c5'},
    dis: {name:'Discipline',  fa:'انضباط',    icon:'⏰', color:'#ff8c42'},
    wis: {name:'Wisdom',      fa:'خرد',       icon:'🔮', color:'#9b6dff'},
    com: {name:'Communication',fa:'ارتباط',   icon:'🗣️', color:'#3dd9c5'},
    lea: {name:'Leadership',  fa:'رهبری',     icon:'👑', color:'#f0c040'},
    fin: {name:'Finance',     fa:'مالی',      icon:'💰', color:'#f0c040'},
    eng: {name:'Engineering', fa:'مهندسی',    icon:'⚙️', color:'#ff8c42'},
    foc: {name:'Focus',       fa:'تمرکز',     icon:'🎯', color:'#3dd9c5'},
    cha: {name:'Charisma',    fa:'جذابیت',    icon:'✨', color:'#ff6b9d'},
    res: {name:'Resilience',  fa:'تاب‌آوری',  icon:'💎', color:'#5b8dee'},
  },

  BOSSES: [
    {name:'Lazy Goblin',      icon:'👺', level:5,  hp:300,  reward:{gold:80,  xp:150}},
    {name:'Time Thief',       icon:'⏳', level:10, hp:600,  reward:{gold:150, xp:300}},
    {name:'Distraction Beast',icon:'📱', level:15, hp:1000, reward:{gold:250, xp:500}},
    {name:'Doom Scroller',    icon:'📜', level:20, hp:1500, reward:{gold:400, xp:800}},
    {name:'Burnout Titan',    icon:'🔥', level:25, hp:2200, reward:{gold:600, xp:1200}},
    {name:'Fear Dragon',      icon:'😱', level:30, hp:3000, reward:{gold:900, xp:1800}},
    {name:'Shadow King',      icon:'👤', level:35, hp:4000, reward:{gold:1200,xp:2500}},
    {name:'Void Emperor',     icon:'🌑', level:40, hp:5500, reward:{gold:1600,xp:3500}},
    {name:'Chrono Lord',      icon:'🕰️', level:45, hp:7000, reward:{gold:2200,xp:5000}},
    {name:'Neon Overmind',    icon:'🌐', level:50, hp:9999, reward:{gold:3000,xp:7000}},
  ],

  WORLD_ZONES: [
    {name:'Starter Village', icon:'🏘️', level:1,  color:'#4caf7d', desc:'محل شروع'},
    {name:'Green Forest',    icon:'🌲', level:6,  color:'#2e7d32', desc:'جنگل سبز'},
    {name:'Crystal Mountains',icon:'💎',level:11, color:'#3dd9c5', desc:'کوه‌های کریستال'},
    {name:'Ancient Desert',  icon:'🏜️', level:16, color:'#ff8c42', desc:'صحرای باستانی'},
    {name:'Frozen Kingdom',  icon:'❄️', level:21, color:'#5b8dee', desc:'پادشاهی یخ'},
    {name:'Sky Islands',     icon:'☁️', level:26, color:'#9b6dff', desc:'جزایر آسمانی'},
    {name:'Cyber City',      icon:'🌆', level:31, color:'#ff6b9d', desc:'شهر سایبری'},
    {name:'Dark Dimension',  icon:'🌑', level:36, color:'#454860', desc:'بعد تاریکی'},
    {name:'Dragon Realm',    icon:'🐉', level:41, color:'#e85d5d', desc:'سرزمین اژدها'},
    {name:'Neon Empire',     icon:'🌐', level:46, color:'#3dd9c5', desc:'امپراتوری نئون'},
  ],

  DAILY_CHALLENGES: [
    {title:'همه مأموریت‌های روزانه رو کامل کن',reward:{xp:100,gold:60},icon:'🏆'},
    {title:'۵ مأموریت پشت‌سرهم انجام بده',reward:{xp:70,gold:40},icon:'⚡'},
    {title:'بدون گوشی ۲ ساعت کار کن',reward:{xp:80,gold:45},icon:'📵'},
    {title:'قبل از ۷ صبح بیدار شو',reward:{xp:60,gold:35},icon:'🌅'},
    {title:'۸ لیوان آب بنوش',reward:{xp:40,gold:20},icon:'💧'},
    {title:'یه مهارت جدید یاد بگیر',reward:{xp:90,gold:55},icon:'🚀'},
    {title:'۱ ساعت بدون وقفه تمرکز کن',reward:{xp:75,gold:42},icon:'🎯'},
    {title:'با یه نفر درباره هدفت صحبت کن',reward:{xp:50,gold:28},icon:'🗣️'},
    {title:'قبل از خواب ۱۰ دقیقه مرور کن',reward:{xp:45,gold:25},icon:'📖'},
    {title:'امروز هیچ وقتی هدر نده',reward:{xp:120,gold:70},icon:'⏰'},
  ],

  ACHIEVEMENTS: [
    {id:'first',    name:'اولین قدم',    desc:'اولین مأموریت',      icon:'🌱', c:p=>p.totalQuests>=1},
    {id:'q10',     name:'ده‌گانه',      desc:'10 مأموریت',         icon:'⚔️', c:p=>p.totalQuests>=10},
    {id:'q50',     name:'پنجاه‌گانه',  desc:'50 مأموریت',         icon:'💪', c:p=>p.totalQuests>=50},
    {id:'q100',    name:'صدگانه',       desc:'100 مأموریت',        icon:'🏆', c:p=>p.totalQuests>=100},
    {id:'s3',      name:'آتش!',          desc:'۳ روز streak',      icon:'🔥', c:p=>p.streak>=3},
    {id:'s7',      name:'هفته‌ای',      desc:'۷ روز streak',      icon:'🌟', c:p=>p.streak>=7},
    {id:'s30',     name:'ماهانه',       desc:'۳۰ روز streak',     icon:'💎', c:p=>p.streak>=30},
    {id:'s100',    name:'صد روزه',      desc:'۱۰۰ روز streak',    icon:'👑', c:p=>p.streak>=100},
    {id:'lv5',     name:'Warrior',       desc:'Level 5',            icon:'⚔️', c:p=>p.level>=5},
    {id:'lv10',    name:'Champion',      desc:'Level 10',           icon:'🏅', c:p=>p.level>=10},
    {id:'lv20',    name:'Legend',        desc:'Level 20',           icon:'🌌', c:p=>p.level>=20},
    {id:'lv30',    name:'Immortal',      desc:'Level 30',           icon:'♾️', c:p=>p.level>=30},
    {id:'lv50',    name:'GOD',           desc:'Level 50',           icon:'🌐', c:p=>p.level>=50},
    {id:'g500',    name:'ثروتمند',      desc:'500 Gold',           icon:'🪙', c:p=>p.totalGold>=500},
    {id:'g5000',   name:'میلیونر',      desc:'5000 Gold',          icon:'💰', c:p=>p.totalGold>=5000},
    {id:'b1',      name:'قاتل باس',     desc:'اولین باس',          icon:'💀', c:p=>p.bossesKilled>=1},
    {id:'b5',      name:'شکارچی باس',   desc:'5 باس',              icon:'🏹', c:p=>p.bossesKilled>=5},
    {id:'b10',     name:'نابودگر باس',  desc:'10 باس',             icon:'⚡', c:p=>p.bossesKilled>=10},
    {id:'pet1',    name:'دوستدار حیوان',desc:'اولین پت',           icon:'🐾', c:p=>p.activePet!==null},
    {id:'shop10',  name:'خریدار بزرگ',  desc:'10 آیتم خرید',      icon:'🛒', c:p=>p.ownedItems.length>=10},
    {id:'all',     name:'کامل‌گرا',     desc:'همه مأموریت‌های روزانه',icon:'✅',c:p=>p.allQuestsDay>=1},
    {id:'str50',   name:'غول',           desc:'STR 50',             icon:'💪', c:p=>(p.stats.str||0)>=50},
    {id:'int50',   name:'نابغه',         desc:'INT 50',             icon:'🧠', c:p=>(p.stats.int||0)>=50},
    {id:'eng50',   name:'تکنولوژیست',   desc:'ENG 50',             icon:'🤖', c:p=>(p.stats.eng||0)>=50},
    {id:'allstat10',name:'همه‌جانبه',   desc:'همه مهارت‌ها ≥10',   icon:'🎯', c:p=>Object.values(p.stats).every(v=>v>=10)},
  ],
};

// ═══════════════════════════════════════
// NEON QUEST — ITEMS, PETS, QUESTS
// ═══════════════════════════════════════

// SHOP ITEMS
GD.SHOP_ITEMS = [
  // WEAPONS
  {id:'iron_sword',   name:'Iron Sword',    icon:'⚔️',  cat:'weapon', rarity:'common',   price:80,   stat:'str', bonusPct:.10, slot:'weapon', atk:15},
  {id:'steel_sword',  name:'Steel Sword',   icon:'🗡️',  cat:'weapon', rarity:'rare',     price:180,  stat:'str', bonusPct:.15, slot:'weapon', atk:25},
  {id:'crystal_sword',name:'Crystal Sword', icon:'💠',  cat:'weapon', rarity:'epic',     price:350,  stat:'all', bonusPct:.20, slot:'weapon', atk:40},
  {id:'plasma_blade', name:'Plasma Blade',  icon:'🔵',  cat:'weapon', rarity:'epic',     price:500,  stat:'eng', bonusPct:.25, slot:'weapon', atk:55},
  {id:'neon_katana',  name:'Neon Katana',   icon:'⚡',  cat:'weapon', rarity:'legendary',price:900,  stat:'all', bonusPct:.35, slot:'weapon', atk:80},
  {id:'quantum_saber',name:'Quantum Saber', icon:'🌐',  cat:'weapon', rarity:'mythic',   price:2000, stat:'all', bonusPct:.50, slot:'weapon', atk:120},
  {id:'void_blade',   name:'Void Blade',    icon:'🌑',  cat:'weapon', rarity:'mythic',   price:3000, stat:'all', bonusPct:.60, slot:'weapon', atk:150},
  // ARMOR
  {id:'leather_armor',name:'Leather Armor', icon:'🥋',  cat:'armor',  rarity:'common',   price:60,   stat:'hp',  bonusPct:0,   slot:'armor',  hp:15},
  {id:'iron_armor',   name:'Iron Armor',    icon:'🛡️',  cat:'armor',  rarity:'rare',     price:150,  stat:'hp',  bonusPct:0,   slot:'armor',  hp:30},
  {id:'cyber_armor',  name:'Cyber Armor',   icon:'🤖',  cat:'armor',  rarity:'epic',     price:350,  stat:'hp',  bonusPct:0,   slot:'armor',  hp:60},
  {id:'neon_suit',    name:'Neon Suit',     icon:'💜',  cat:'armor',  rarity:'legendary',price:800,  stat:'all', bonusPct:.15, slot:'armor',  hp:100},
  {id:'quantum_suit', name:'Quantum Suit',  icon:'🌐',  cat:'armor',  rarity:'mythic',   price:2500, stat:'all', bonusPct:.25, slot:'armor',  hp:200},
  // HELMETS
  {id:'iron_helmet',  name:'Iron Helmet',   icon:'⛑️',  cat:'helmet', rarity:'common',   price:50,   stat:'end', bonusPct:.08, slot:'helmet'},
  {id:'wizard_hat',   name:'Wizard Hat',    icon:'🎩',  cat:'helmet', rarity:'rare',     price:120,  stat:'int', bonusPct:.12, slot:'helmet'},
  {id:'cyber_visor',  name:'Cyber Visor',   icon:'🥽',  cat:'helmet', rarity:'epic',     price:300,  stat:'foc', bonusPct:.20, slot:'helmet'},
  {id:'neon_crown',   name:'Neon Crown',    icon:'👑',  cat:'helmet', rarity:'legendary',price:700,  stat:'all', bonusPct:.25, slot:'helmet'},
  // BOOTS
  {id:'leather_boots',name:'Leather Boots', icon:'👞',  cat:'boots',  rarity:'common',   price:40,   stat:'spd', bonusPct:.08, slot:'boots'},
  {id:'running_shoes',name:'Running Shoes', icon:'👟',  cat:'boots',  rarity:'rare',     price:130,  stat:'str', bonusPct:.15, slot:'boots'},
  {id:'cyber_boots',  name:'Cyber Boots',   icon:'🥾',  cat:'boots',  rarity:'epic',     price:280,  stat:'spd', bonusPct:.22, slot:'boots'},
  {id:'neon_boots',   name:'Neon Boots',    icon:'⚡',  cat:'boots',  rarity:'legendary',price:650,  stat:'all', bonusPct:.20, slot:'boots'},
  // RINGS
  {id:'iron_ring',    name:'Iron Ring',     icon:'💍',  cat:'ring',   rarity:'common',   price:70,   stat:'str', bonusPct:.08, slot:'ring'},
  {id:'mage_ring',    name:'Mage Ring',     icon:'💎',  cat:'ring',   rarity:'rare',     price:160,  stat:'int', bonusPct:.14, slot:'ring'},
  {id:'neon_ring',    name:'Neon Ring',     icon:'🌀',  cat:'ring',   rarity:'epic',     price:340,  stat:'all', bonusPct:.18, slot:'ring'},
  {id:'god_ring',     name:'Ring of Gods',  icon:'⚜️',  cat:'ring',   rarity:'legendary',price:900,  stat:'all', bonusPct:.30, slot:'ring'},
  // NECKLACES
  {id:'bone_neck',    name:'Bone Necklace', icon:'📿',  cat:'necklace',rarity:'common',  price:55,   stat:'vit', bonusPct:.08, slot:'necklace'},
  {id:'power_neck',   name:'Necklace of Power',icon:'🔮',cat:'necklace',rarity:'epic',  price:320,  stat:'all', bonusPct:.18, slot:'necklace'},
  {id:'neon_neck',    name:'Neon Necklace', icon:'🌐',  cat:'necklace',rarity:'legendary',price:750, stat:'all', bonusPct:.28, slot:'necklace'},
  // WINGS
  {id:'angel_wings',  name:'Angel Wings',   icon:'🕊️',  cat:'wings',  rarity:'epic',     price:600,  stat:'spd', bonusPct:.20, slot:'wings'},
  {id:'dragon_wings', name:'Dragon Wings',  icon:'🐉',  cat:'wings',  rarity:'legendary',price:1200, stat:'all', bonusPct:.30, slot:'wings'},
  {id:'neon_wings',   name:'Neon Wings',    icon:'⚡',  cat:'wings',  rarity:'mythic',   price:2800, stat:'all', bonusPct:.45, slot:'wings'},
  // AURAS
  {id:'fire_aura',    name:'Fire Aura',     icon:'🔥',  cat:'aura',   rarity:'rare',     price:200,  stat:'str', bonusPct:.12, slot:'aura'},
  {id:'ice_aura',     name:'Ice Aura',      icon:'❄️',  cat:'aura',   rarity:'epic',     price:450,  stat:'wis', bonusPct:.20, slot:'aura'},
  {id:'neon_aura',    name:'Neon Aura',     icon:'🌐',  cat:'aura',   rarity:'mythic',   price:3000, stat:'all', bonusPct:.50, slot:'aura'},
  // BOOSTS
  {id:'xp_boost',     name:'XP x2',         icon:'⭐',  cat:'boost',  rarity:'common',   price:50,   stat:'boost_xp'},
  {id:'gold_boost',   name:'Gold x2',        icon:'🪙',  cat:'boost',  rarity:'common',   price:50,   stat:'boost_gold'},
  {id:'hp_potion',    name:'HP Potion',      icon:'🧪',  cat:'boost',  rarity:'common',   price:30,   stat:'hp_pot'},
  {id:'mega_xp',      name:'XP x5 (1hr)',    icon:'💫',  cat:'boost',  rarity:'rare',     price:150,  stat:'boost_xp5'},
];

// PETS (50)
GD.PETS = [
  // COMMON
  {id:'cat',    name:'Cat',     icon:'🐱', rarity:'common',   req:1,  bonus:'+3 Gold/quest',  stat:'gold', val:3},
  {id:'dog',    name:'Dog',     icon:'🐶', rarity:'common',   req:1,  bonus:'+3 Gold/quest',  stat:'gold', val:3},
  {id:'rabbit', name:'Rabbit',  icon:'🐰', rarity:'common',   req:1,  bonus:'+5% XP',         stat:'xp',   val:.05},
  {id:'mouse',  name:'Mouse',   icon:'🐭', rarity:'common',   req:2,  bonus:'+2 Gold/quest',  stat:'gold', val:2},
  {id:'bird',   name:'Bird',    icon:'🐦', rarity:'common',   req:2,  bonus:'+4% XP',         stat:'xp',   val:.04},
  {id:'turtle', name:'Turtle',  icon:'🐢', rarity:'common',   req:3,  bonus:'+5 HP',          stat:'hp',   val:5},
  {id:'frog',   name:'Frog',    icon:'🐸', rarity:'common',   req:3,  bonus:'+3% XP',         stat:'xp',   val:.03},
  {id:'hamster',name:'Hamster', icon:'🐹', rarity:'common',   req:4,  bonus:'+4 Gold/quest',  stat:'gold', val:4},
  {id:'fish',   name:'Fish',    icon:'🐟', rarity:'common',   req:4,  bonus:'+4% XP',         stat:'xp',   val:.04},
  {id:'snake',  name:'Snake',   icon:'🐍', rarity:'common',   req:5,  bonus:'+6 Gold/quest',  stat:'gold', val:6},
  // RARE
  {id:'wolf',   name:'Wolf',    icon:'🐺', rarity:'rare',     req:5,  bonus:'+8 Gold/quest',  stat:'gold', val:8},
  {id:'tiger',  name:'Tiger',   icon:'🐯', rarity:'rare',     req:6,  bonus:'+10% XP ورزش',  stat:'xp_str',val:.10},
  {id:'eagle',  name:'Eagle',   icon:'🦅', rarity:'rare',     req:7,  bonus:'+8% همه XP',     stat:'xp',   val:.08},
  {id:'panther',name:'Panther', icon:'🐆', rarity:'rare',     req:8,  bonus:'+10 Gold/quest', stat:'gold', val:10},
  {id:'bear',   name:'Bear',    icon:'🐻', rarity:'rare',     req:9,  bonus:'+20 Max HP',     stat:'hp',   val:20},
  {id:'lion',   name:'Lion',    icon:'🦁', rarity:'rare',     req:10, bonus:'+12% XP',        stat:'xp',   val:.12},
  {id:'fox',    name:'Fox',     icon:'🦊', rarity:'rare',     req:10, bonus:'+10 Gold/quest', stat:'gold', val:10},
  {id:'deer',   name:'Deer',    icon:'🦌', rarity:'rare',     req:11, bonus:'+9% XP',         stat:'xp',   val:.09},
  {id:'owl',    name:'Owl',     icon:'🦉', rarity:'rare',     req:12, bonus:'+10% XP INT',    stat:'xp_int',val:.10},
  {id:'shark',  name:'Shark',   icon:'🦈', rarity:'rare',     req:13, bonus:'+15 Gold/quest', stat:'gold', val:15},
  // EPIC
  {id:'phoenix',name:'Phoenix', icon:'🦅', rarity:'epic',     req:14, bonus:'+15% همه XP',   stat:'xp',   val:.15},
  {id:'griffin',name:'Griffin', icon:'🦁', rarity:'epic',     req:15, bonus:'+20% XP',        stat:'xp',   val:.20},
  {id:'hydra',  name:'Hydra',   icon:'🐉', rarity:'epic',     req:16, bonus:'+18 Gold/quest', stat:'gold', val:18},
  {id:'kraken', name:'Kraken',  icon:'🦑', rarity:'epic',     req:17, bonus:'+50 Max HP',     stat:'hp',   val:50},
  {id:'unicorn',name:'Unicorn', icon:'🦄', rarity:'epic',     req:18, bonus:'+20% XP',        stat:'xp',   val:.20},
  {id:'cerberus',name:'Cerberus',icon:'🐕',rarity:'epic',     req:19, bonus:'+25 Gold/quest', stat:'gold', val:25},
  {id:'manticore',name:'Manticore',icon:'🦁',rarity:'epic',   req:20, bonus:'+22% XP',        stat:'xp',   val:.22},
  {id:'chimera',name:'Chimera', icon:'🔥', rarity:'epic',     req:21, bonus:'+25% XP STR',    stat:'xp_str',val:.25},
  {id:'basilisk',name:'Basilisk',icon:'🐍',rarity:'epic',     req:22, bonus:'+30 Gold/quest', stat:'gold', val:30},
  {id:'wyvern', name:'Wyvern',  icon:'🐲', rarity:'epic',     req:23, bonus:'+25% همه XP',   stat:'xp',   val:.25},
  // LEGENDARY
  {id:'ice_dragon',  name:'Ice Dragon',   icon:'🐉', rarity:'legendary', req:25, bonus:'+30% همه XP',   stat:'xp', val:.30},
  {id:'fire_dragon', name:'Fire Dragon',  icon:'🔥', rarity:'legendary', req:28, bonus:'+35 Gold/quest',stat:'gold',val:35},
  {id:'thunder_dragon',name:'Thunder Dragon',icon:'⚡',rarity:'legendary',req:30,bonus:'+35% همه XP',  stat:'xp', val:.35},
  {id:'void_dragon', name:'Void Dragon',  icon:'🌑', rarity:'legendary', req:33, bonus:'+40% همه XP',   stat:'xp', val:.40},
  {id:'leviathan',   name:'Leviathan',    icon:'🌊', rarity:'legendary', req:35, bonus:'+50 Gold/quest',stat:'gold',val:50},
  {id:'behemoth',    name:'Behemoth',     icon:'🦛', rarity:'legendary', req:37, bonus:'+100 Max HP',   stat:'hp', val:100},
  {id:'titan',       name:'Titan',        icon:'⚜️', rarity:'legendary', req:39, bonus:'+45% همه XP',   stat:'xp', val:.45},
  {id:'ancient_phoenix',name:'Ancient Phoenix',icon:'🌟',rarity:'legendary',req:40,bonus:'+50% همه XP', stat:'xp', val:.50},
  {id:'eldritch',    name:'Eldritch',     icon:'🌀', rarity:'legendary', req:42, bonus:'+70 Gold/quest',stat:'gold',val:70},
  {id:'dragon_god',  name:'Dragon God',   icon:'🏯', rarity:'legendary', req:45, bonus:'+55% همه XP',   stat:'xp', val:.55},
  // MYTHIC
  {id:'neon_dragon',   name:'Neon Dragon',   icon:'🌐', rarity:'mythic', req:46, bonus:'+60% همه XP',   stat:'xp',  val:.60},
  {id:'cosmic_wolf',   name:'Cosmic Wolf',   icon:'🌌', rarity:'mythic', req:47, bonus:'+80 Gold/quest',stat:'gold',val:80},
  {id:'star_phoenix',  name:'Star Phoenix',  icon:'💫', rarity:'mythic', req:48, bonus:'+70% همه XP',   stat:'xp',  val:.70},
  {id:'quantum_beast', name:'Quantum Beast', icon:'🔮', rarity:'mythic', req:49, bonus:'+100 Gold/quest',stat:'gold',val:100},
  {id:'void_serpent',  name:'Void Serpent',  icon:'🌑', rarity:'mythic', req:50, bonus:'+80% همه XP',   stat:'xp',  val:.80},
  {id:'time_wolf',     name:'Time Wolf',     icon:'⏰', rarity:'mythic', req:50, bonus:'+200 Max HP',    stat:'hp',  val:200},
  {id:'infinity_cat',  name:'Infinity Cat',  icon:'♾️', rarity:'mythic', req:50, bonus:'x2 همه چیز',    stat:'all', val:1.0},
  {id:'neon_god',      name:'Neon God',      icon:'🌟', rarity:'mythic', req:50, bonus:'+100% همه XP',  stat:'xp',  val:1.0},
  {id:'cyber_hydra',   name:'Cyber Hydra',   icon:'💠', rarity:'mythic', req:50, bonus:'+150 Gold/quest',stat:'gold',val:150},
  {id:'omega_dragon',  name:'OMEGA DRAGON',  icon:'🌐', rarity:'mythic', req:50, bonus:'GOD MODE',       stat:'all', val:2.0},
];

// QUESTS
GD.QUESTS = {
  daily: [
    {id:'d1',title:'ورزش ۳۰ دقیقه 🏃',xp:25,gold:12,stat:'str'},
    {id:'d2',title:'مطالعه ۲۰ صفحه 📚',xp:20,gold:10,stat:'int'},
    {id:'d3',title:'۸ لیوان آب 💧',xp:10,gold:5,stat:'res'},
    {id:'d4',title:'۱۵ دقیقه زبان 🌍',xp:15,gold:8,stat:'com'},
    {id:'d5',title:'مدیتیشن ۲۰ دقیقه 🧘',xp:18,gold:9,stat:'wis'},
    {id:'d6',title:'کدنویسی ۱ ساعت 💻',xp:30,gold:15,stat:'eng'},
    {id:'d7',title:'خواب ۷ ساعت 😴',xp:12,gold:6,stat:'res'},
    {id:'d8',title:'پیاده‌روی ۲۰ دقیقه 🚶',xp:14,gold:7,stat:'end'},
    {id:'d9',title:'یادداشت اهداف ✍️',xp:10,gold:5,stat:'dis'},
    {id:'d10',title:'تمرکز بدون گوشی ۱ ساعت 📵',xp:22,gold:11,stat:'foc'},
  ],
  weekly: [
    {id:'w1',title:'اتمام یک پروژه 🚀',xp:120,gold:60,stat:'eng'},
    {id:'w2',title:'خواندن یک کتاب 📖',xp:100,gold:50,stat:'int'},
    {id:'w3',title:'۵ روز ورزش متوالی 💪',xp:110,gold:55,stat:'str'},
    {id:'w4',title:'مدیریت بودجه هفتگی 💰',xp:80,gold:40,stat:'fin'},
    {id:'w5',title:'یادگیری مهارت جدید 🎯',xp:130,gold:65,stat:'cre'},
  ],
  monthly: [
    {id:'m1',title:'اتمام دوره آموزشی 🎓',xp:400,gold:200,stat:'int'},
    {id:'m2',title:'کاهش ۲ کیلو وزن ⚖️',xp:350,gold:180,stat:'str'},
    {id:'m3',title:'۳۰ روز streak 🔥',xp:500,gold:250,stat:'dis'},
    {id:'m4',title:'ساخت پروژه بزرگ 🏗️',xp:450,gold:220,stat:'eng'},
  ],
};

// CLASS-SPECIFIC QUESTS
GD.CLASS_QUESTS = {
  programmer: [
    {id:'cq_p1',title:'۳۰ دقیقه کدنویسی ⚙️',xp:35,gold:18,stat:'eng'},
    {id:'cq_p2',title:'رفع یک باگ 🐛',xp:40,gold:20,stat:'log'},
    {id:'cq_p3',title:'مطالعه مستندات 📋',xp:25,gold:12,stat:'int'},
    {id:'cq_p4',title:'حل مسئله الگوریتمی 🧩',xp:45,gold:22,stat:'log'},
    {id:'cq_p5',title:'یادگیری مفهوم جدید 🚀',xp:30,gold:15,stat:'cre'},
    {id:'cq_p6',title:'انتشار کد روی GitHub 📤',xp:50,gold:25,stat:'eng'},
    {id:'cq_p7',title:'Code Review انجام بده 👀',xp:35,gold:18,stat:'log'},
  ],
  warrior: [
    {id:'cq_w1',title:'وزنه‌برداری ۴۵ دقیقه 🏋️',xp:40,gold:20,stat:'str'},
    {id:'cq_w2',title:'دویدن ۵ کیلومتر 🏃',xp:45,gold:22,stat:'end'},
    {id:'cq_w3',title:'شنا ۲۰ دقیقه 🏊',xp:35,gold:18,stat:'str'},
    {id:'cq_w4',title:'تمرین رزمی ۳۰ دقیقه 🥋',xp:40,gold:20,stat:'spd'},
  ],
  scholar: [
    {id:'cq_s1',title:'خلاصه‌نویسی ۳ صفحه ✍️',xp:28,gold:14,stat:'int'},
    {id:'cq_s2',title:'مطالعه مقاله علمی 🔬',xp:35,gold:18,stat:'int'},
    {id:'cq_s3',title:'یادداشت ذهنی Mind Map 🗺️',xp:25,gold:12,stat:'cre'},
    {id:'cq_s4',title:'حل ۵ مسئله ریاضی 📐',xp:40,gold:20,stat:'log'},
  ],
  monk: [
    {id:'cq_m1',title:'مدیتیشن ۳۰ دقیقه 🧘',xp:32,gold:16,stat:'wis'},
    {id:'cq_m2',title:'یوگا صبحگاهی 🌅',xp:28,gold:14,stat:'res'},
    {id:'cq_m3',title:'تنفس عمیق ۱۰ دقیقه 🌬️',xp:20,gold:10,stat:'foc'},
  ],
  engineer: [
    {id:'cq_e1',title:'طراحی سیستم ۱ ساعت 🏗️',xp:45,gold:22,stat:'eng'},
    {id:'cq_e2',title:'بهینه‌سازی کد ⚡',xp:40,gold:20,stat:'log'},
    {id:'cq_e3',title:'مطالعه معماری نرم‌افزار 📐',xp:35,gold:18,stat:'int'},
  ],
  merchant: [
    {id:'cq_mer1',title:'ثبت هزینه‌های روزانه 💰',xp:22,gold:12,stat:'fin'},
    {id:'cq_mer2',title:'پس‌انداز امروز 🏦',xp:28,gold:14,stat:'fin'},
    {id:'cq_mer3',title:'تحلیل بازار ۳۰ دقیقه 📊',xp:35,gold:18,stat:'lea'},
  ],
};