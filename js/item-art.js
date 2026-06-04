/* ═══════════════════════════════════════
   NEON QUEST — Item Art (SVG)
   هر آیتم یک SVG اختصاصی نئونی دارد
   ═══════════════════════════════════════ */

const ITEM_ART = {};

// ───────── WEAPONS ─────────

ITEM_ART['iron_sword'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-iron"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="ig1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#aab4c0"/><stop offset="100%" stop-color="#6a7580"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0a0e1a"/>
  <line x1="40" y1="12" x2="40" y2="58" stroke="url(#ig1)" stroke-width="5" stroke-linecap="round" filter="url(#glow-iron)"/>
  <line x1="40" y1="12" x2="38" y2="18" stroke="#c8d0d8" stroke-width="2"/>
  <polygon points="40,10 37,22 43,22" fill="#c8d0d8" filter="url(#glow-iron)"/>
  <rect x="30" y="55" width="20" height="4" rx="2" fill="#888ea0"/>
  <rect x="37" y="59" width="6" height="10" rx="3" fill="#6a7580"/>
  <circle cx="40" cy="68" r="2.5" fill="#aab4c0"/>
</svg>`;

ITEM_ART['steel_sword'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-steel"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="sg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e0e8f0"/><stop offset="50%" stop-color="#5b8dee"/><stop offset="100%" stop-color="#3060cc"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#08101e"/>
  <line x1="40" y1="10" x2="40" y2="56" stroke="url(#sg1)" stroke-width="6" stroke-linecap="round" filter="url(#glow-steel)"/>
  <line x1="40" y1="10" x2="38" y2="16" stroke="#fff" stroke-width="1.5" opacity="0.7"/>
  <polygon points="40,8 36,20 44,20" fill="#e0e8f0" filter="url(#glow-steel)"/>
  <ellipse cx="40" cy="56" rx="11" ry="3" fill="#3060cc" opacity="0.5"/>
  <rect x="29" y="53" width="22" height="5" rx="2.5" fill="#3060cc"/>
  <rect x="37" y="58" width="6" height="11" rx="3" fill="#1a3a8a"/>
  <circle cx="40" cy="68" r="3" fill="#5b8dee" filter="url(#glow-steel)"/>
  <line x1="36" y1="20" x2="44" y2="20" stroke="#5b8dee" stroke-width="1" opacity="0.8"/>
</svg>`;

ITEM_ART['crystal_sword'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-cry"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="40%" stop-color="#3dd9c5"/><stop offset="100%" stop-color="#9b6dff"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#070d18"/>
  <polygon points="40,7 36,22 44,22" fill="white" opacity="0.9" filter="url(#glow-cry)"/>
  <line x1="40" y1="8" x2="40" y2="55" stroke="url(#cg1)" stroke-width="5" stroke-linecap="round" filter="url(#glow-cry)"/>
  <line x1="37" y1="15" x2="43" y2="15" stroke="white" stroke-width="1" opacity="0.6"/>
  <line x1="36" y1="25" x2="44" y2="25" stroke="#3dd9c5" stroke-width="1" opacity="0.6"/>
  <line x1="37" y1="35" x2="43" y2="35" stroke="#9b6dff" stroke-width="1" opacity="0.5"/>
  <rect x="28" y="52" width="24" height="5" rx="2.5" fill="#9b6dff" filter="url(#glow-cry)"/>
  <rect x="37" y="57" width="6" height="10" rx="3" fill="#5b0ea6"/>
  <circle cx="40" cy="67" r="3.5" fill="#3dd9c5" filter="url(#glow-cry)"/>
  <circle cx="40" cy="30" r="12" fill="none" stroke="#3dd9c5" stroke-width="0.5" opacity="0.3"/>
</svg>`;

ITEM_ART['plasma_blade'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-plasma"><feGaussianBlur stdDeviation="3.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="pg1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="30%" stop-color="#00d4ff"/><stop offset="100%" stop-color="#0050aa"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#050e1a"/>
  <ellipse cx="40" cy="30" rx="4" ry="25" fill="url(#pg1)" filter="url(#glow-plasma)"/>
  <ellipse cx="40" cy="30" rx="2" ry="23" fill="white" opacity="0.5"/>
  <rect x="28" y="52" width="24" height="5" rx="2.5" fill="#0088cc"/>
  <rect x="37" y="57" width="6" height="11" rx="3" fill="#004477"/>
  <circle cx="40" cy="68" r="3" fill="#00d4ff" filter="url(#glow-plasma)"/>
  <circle cx="40" cy="7" r="5" fill="white" opacity="0.9" filter="url(#glow-plasma)"/>
  <ellipse cx="40" cy="32" rx="10" ry="8" fill="none" stroke="#00d4ff" stroke-width="0.5" opacity="0.4"/>
</svg>`;

ITEM_ART['neon_katana'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-nk"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="nkg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff"/><stop offset="20%" stop-color="#f0c040"/><stop offset="70%" stop-color="#ff8c42"/><stop offset="100%" stop-color="#e85d5d"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0c0806"/>
  <line x1="40" y1="8" x2="42" y2="58" stroke="url(#nkg)" stroke-width="3" stroke-linecap="round" filter="url(#glow-nk)"/>
  <line x1="40" y1="8" x2="38" y2="58" stroke="url(#nkg)" stroke-width="1.5" opacity="0.5"/>
  <rect x="30" y="55" width="20" height="4" rx="2" fill="#cc8800" filter="url(#glow-nk)"/>
  <rect x="34" y="59" width="12" height="3" rx="1.5" fill="#8b0000" opacity="0.6"/>
  <rect x="37" y="62" width="6" height="9" rx="3" fill="#2a1000"/>
  <circle cx="40" cy="71" r="2.5" fill="#f0c040" filter="url(#glow-nk)"/>
  <line x1="32" y1="20" x2="36" y2="20" stroke="#f0c040" stroke-width="1" opacity="0.7"/>
  <line x1="32" y1="30" x2="36" y2="30" stroke="#ff8c42" stroke-width="0.8" opacity="0.6"/>
</svg>`;

ITEM_ART['quantum_saber'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-qs"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="qsg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff"/><stop offset="20%" stop-color="#b44fff"/><stop offset="70%" stop-color="#ff2d78"/><stop offset="100%" stop-color="#7700cc"/></linearGradient>
    <radialGradient id="qsr"><stop offset="0%" stop-color="#ff2d78" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#100518"/>
  <ellipse cx="40" cy="35" rx="18" ry="18" fill="url(#qsr)"/>
  <line x1="40" y1="8" x2="40" y2="56" stroke="url(#qsg)" stroke-width="5" stroke-linecap="round" filter="url(#glow-qs)"/>
  <line x1="40" y1="8" x2="40" y2="56" stroke="white" stroke-width="1.5" opacity="0.6"/>
  <circle cx="40" cy="8" r="6" fill="#ff2d78" filter="url(#glow-qs)"/>
  <line x1="26" y1="54" x2="54" y2="54" stroke="#b44fff" stroke-width="4" stroke-linecap="round" filter="url(#glow-qs)"/>
  <rect x="37" y="58" width="6" height="10" rx="3" fill="#2d0050"/>
  <circle cx="40" cy="67" r="3.5" fill="#b44fff" filter="url(#glow-qs)"/>
  <circle cx="40" cy="35" r="20" fill="none" stroke="#b44fff" stroke-width="0.5" opacity="0.3"/>
  <circle cx="40" cy="35" r="14" fill="none" stroke="#ff2d78" stroke-width="0.5" opacity="0.2"/>
</svg>`;

ITEM_ART['void_blade'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-vb"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="vbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="30%" stop-color="#6600ff"/><stop offset="70%" stop-color="#000080"/><stop offset="100%" stop-color="#000010"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#030308"/>
  <polygon points="40,8 36,55 44,55" fill="url(#vbg)" filter="url(#glow-vb)"/>
  <polygon points="40,8 38,30 42,30" fill="white" opacity="0.5"/>
  <line x1="24" y1="53" x2="56" y2="53" stroke="#6600ff" stroke-width="5" stroke-linecap="round" filter="url(#glow-vb)"/>
  <rect x="37" y="58" width="6" height="11" rx="3" fill="#10001a"/>
  <circle cx="40" cy="68" r="4" fill="#6600ff" filter="url(#glow-vb)"/>
  <circle cx="40" cy="68" r="2" fill="white"/>
  <circle cx="40" cy="25" r="22" fill="none" stroke="#6600ff" stroke-width="0.5" stroke-dasharray="3,4" opacity="0.4"/>
  <circle cx="40" cy="68" r="8" fill="none" stroke="#6600ff" stroke-width="0.5" opacity="0.3"/>
</svg>`;

// ───────── ARMOR ─────────

ITEM_ART['leather_armor'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-la"><feGaussianBlur stdDeviation="1.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="lag" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7a5c3a"/><stop offset="100%" stop-color="#4a3020"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0e0a06"/>
  <path d="M22,28 C22,20 30,14 40,14 C50,14 58,20 58,28 L58,58 C58,62 54,66 50,66 L30,66 C26,66 22,62 22,58 Z" fill="url(#lag)"/>
  <path d="M22,28 C22,20 30,14 40,14 C50,14 58,20 58,28" fill="none" stroke="#a07840" stroke-width="2.5"/>
  <line x1="40" y1="14" x2="40" y2="66" stroke="#a07840" stroke-width="1.5" opacity="0.5"/>
  <line x1="30" y1="28" x2="50" y2="28" stroke="#a07840" stroke-width="1.5" opacity="0.5"/>
  <line x1="28" y1="42" x2="52" y2="42" stroke="#a07840" stroke-width="1" opacity="0.4"/>
  <circle cx="40" cy="38" r="5" fill="#8a5030" stroke="#c08050" stroke-width="1.5" filter="url(#glow-la)"/>
</svg>`;

ITEM_ART['iron_armor'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-ia"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="iag" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a0aab8"/><stop offset="100%" stop-color="#5a6070"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#090c12"/>
  <path d="M20,26 C20,18 29,12 40,12 C51,12 60,18 60,26 L60,60 C60,64 56,68 52,68 L28,68 C24,68 20,64 20,60 Z" fill="url(#iag)"/>
  <path d="M20,26 C20,18 29,12 40,12 C51,12 60,18 60,26" fill="none" stroke="#c8d0d8" stroke-width="3"/>
  <line x1="40" y1="12" x2="40" y2="68" stroke="#8a90a0" stroke-width="2" opacity="0.5"/>
  <line x1="28" y1="40" x2="52" y2="40" stroke="#8a90a0" stroke-width="2" opacity="0.5"/>
  <rect x="34" y="34" width="12" height="12" rx="2" fill="#6a7080" stroke="#a0aab8" stroke-width="1.5" filter="url(#glow-ia)"/>
  <line x1="28" y1="26" x2="52" y2="26" stroke="#c8d0d8" stroke-width="1" opacity="0.6"/>
</svg>`;

ITEM_ART['cyber_armor'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-ca"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="cag" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a2a3a"/><stop offset="100%" stop-color="#0a1520"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#060d16"/>
  <path d="M18,24 C18,16 28,10 40,10 C52,10 62,16 62,24 L62,62 C62,66 58,70 54,70 L26,70 C22,70 18,66 18,62 Z" fill="url(#cag)" stroke="#00d4ff" stroke-width="1"/>
  <path d="M18,24 C18,16 28,10 40,10 C52,10 62,16 62,24" fill="none" stroke="#00d4ff" stroke-width="2.5" filter="url(#glow-ca)"/>
  <line x1="40" y1="10" x2="40" y2="70" stroke="#00d4ff" stroke-width="1" opacity="0.6" filter="url(#glow-ca)"/>
  <line x1="26" y1="40" x2="54" y2="40" stroke="#00d4ff" stroke-width="1" opacity="0.5"/>
  <rect x="32" y="32" width="16" height="16" rx="3" fill="none" stroke="#00d4ff" stroke-width="1.5" filter="url(#glow-ca)"/>
  <circle cx="40" cy="40" r="4" fill="#00d4ff" opacity="0.5" filter="url(#glow-ca)"/>
  <line x1="28" y1="22" x2="36" y2="22" stroke="#00d4ff" stroke-width="1" opacity="0.7"/>
  <line x1="44" y1="22" x2="52" y2="22" stroke="#00d4ff" stroke-width="1" opacity="0.7"/>
</svg>`;

ITEM_ART['neon_suit'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-ns"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="nsg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a0a2e"/><stop offset="100%" stop-color="#0a0518"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#04020c"/>
  <path d="M16,22 C16,14 27,8 40,8 C53,8 64,14 64,22 L64,64 C64,68 60,72 56,72 L24,72 C20,72 16,68 16,64 Z" fill="url(#nsg)" stroke="#b44fff" stroke-width="1.5" filter="url(#glow-ns)"/>
  <path d="M16,22 C16,14 27,8 40,8 C53,8 64,14 64,22" fill="none" stroke="#ff2d78" stroke-width="3" filter="url(#glow-ns)"/>
  <line x1="40" y1="8" x2="40" y2="72" stroke="#b44fff" stroke-width="1.5" filter="url(#glow-ns)"/>
  <line x1="24" y1="44" x2="56" y2="44" stroke="#b44fff" stroke-width="1" opacity="0.7"/>
  <polygon points="40,30 34,40 40,38 46,40" fill="#ff2d78" opacity="0.8" filter="url(#glow-ns)"/>
  <circle cx="40" cy="40" r="10" fill="none" stroke="#b44fff" stroke-width="1" opacity="0.5"/>
  <circle cx="40" cy="40" r="5" fill="#b44fff" opacity="0.3" filter="url(#glow-ns)"/>
  <line x1="22" y1="20" x2="38" y2="20" stroke="#ff2d78" stroke-width="1.5" opacity="0.8"/>
  <line x1="42" y1="20" x2="58" y2="20" stroke="#ff2d78" stroke-width="1.5" opacity="0.8"/>
</svg>`;

ITEM_ART['quantum_suit'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-qsu"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="qsug" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#001a00"/><stop offset="100%" stop-color="#000510"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#020a04"/>
  <path d="M14,20 C14,12 26,6 40,6 C54,6 66,12 66,20 L66,66 C66,70 62,74 58,74 L22,74 C18,74 14,70 14,66 Z" fill="url(#qsug)" stroke="#00ffcc" stroke-width="1.5" filter="url(#glow-qsu)"/>
  <path d="M14,20 C14,12 26,6 40,6 C54,6 66,12 66,20" fill="none" stroke="#00ffcc" stroke-width="3" filter="url(#glow-qsu)"/>
  <line x1="40" y1="6" x2="40" y2="74" stroke="#00ffcc" stroke-width="1.5" filter="url(#glow-qsu)"/>
  <circle cx="40" cy="40" r="16" fill="none" stroke="#00ffcc" stroke-width="1" opacity="0.5"/>
  <circle cx="40" cy="40" r="8" fill="none" stroke="#00ffcc" stroke-width="1" opacity="0.7" filter="url(#glow-qsu)"/>
  <circle cx="40" cy="40" r="3" fill="#00ffcc" filter="url(#glow-qsu)"/>
  <line x1="24" y1="40" x2="32" y2="40" stroke="#00ffcc" stroke-width="1.5" filter="url(#glow-qsu)"/>
  <line x1="48" y1="40" x2="56" y2="40" stroke="#00ffcc" stroke-width="1.5" filter="url(#glow-qsu)"/>
  <line x1="40" y1="24" x2="40" y2="32" stroke="#00ffcc" stroke-width="1.5" filter="url(#glow-qsu)"/>
  <line x1="40" y1="48" x2="40" y2="56" stroke="#00ffcc" stroke-width="1.5" filter="url(#glow-qsu)"/>
</svg>`;

// ───────── HELMETS ─────────

ITEM_ART['iron_helmet'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ihg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a0aab8"/><stop offset="100%" stop-color="#505860"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#08090f"/>
  <path d="M20,48 C20,28 28,18 40,18 C52,18 60,28 60,48" fill="url(#ihg)" stroke="#c0c8d0" stroke-width="2"/>
  <rect x="18" y="46" width="44" height="8" rx="2" fill="#8090a0"/>
  <rect x="22" y="48" width="36" height="4" rx="1" fill="#a0b0c0" opacity="0.5"/>
  <line x1="36" y1="18" x2="44" y2="18" stroke="#c0c8d0" stroke-width="2"/>
  <rect x="35" y="36" width="10" height="8" rx="1" fill="#5a6070" stroke="#909aa8" stroke-width="1"/>
</svg>`;

ITEM_ART['wizard_hat'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-wh"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="whg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2a1860"/><stop offset="100%" stop-color="#180c40"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#08060e"/>
  <polygon points="40,8 25,58 55,58" fill="url(#whg)" stroke="#9b6dff" stroke-width="2" filter="url(#glow-wh)"/>
  <ellipse cx="40" cy="58" rx="22" ry="6" fill="#3a2070" stroke="#9b6dff" stroke-width="1.5" filter="url(#glow-wh)"/>
  <circle cx="33" cy="30" r="2" fill="#f0c040" filter="url(#glow-wh)"/>
  <circle cx="46" cy="42" r="1.5" fill="#ff6b9d" filter="url(#glow-wh)"/>
  <circle cx="38" cy="50" r="1" fill="#3dd9c5" filter="url(#glow-wh)"/>
  <line x1="30" y1="55" x2="50" y2="55" stroke="#9b6dff" stroke-width="1" opacity="0.6"/>
</svg>`;

ITEM_ART['cyber_visor'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-cv"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="cvg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#001a2a"/><stop offset="50%" stop-color="#003044"/><stop offset="100%" stop-color="#001a2a"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#050d14"/>
  <path d="M12,35 C12,28 20,22 30,22 L50,22 C60,22 68,28 68,35 L68,45 C68,52 60,58 50,58 L30,58 C20,58 12,52 12,45 Z" fill="url(#cvg)" stroke="#00d4ff" stroke-width="1.5"/>
  <line x1="12" y1="40" x2="68" y2="40" stroke="#00d4ff" stroke-width="2" filter="url(#glow-cv)"/>
  <rect x="20" y="28" width="16" height="14" rx="3" fill="#002233" stroke="#00d4ff" stroke-width="1" filter="url(#glow-cv)"/>
  <rect x="44" y="28" width="16" height="14" rx="3" fill="#002233" stroke="#00d4ff" stroke-width="1" filter="url(#glow-cv)"/>
  <rect x="36" y="36" width="8" height="3" rx="1" fill="#00aacc" filter="url(#glow-cv)"/>
  <circle cx="28" cy="35" r="4" fill="#00d4ff" opacity="0.3" filter="url(#glow-cv)"/>
  <circle cx="52" cy="35" r="4" fill="#00d4ff" opacity="0.3" filter="url(#glow-cv)"/>
</svg>`;

ITEM_ART['neon_crown'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-nc"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="ncg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#2a1800"/><stop offset="50%" stop-color="#4a2800"/><stop offset="100%" stop-color="#2a1800"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0c0800"/>
  <polygon points="14,60 20,32 32,48 40,22 48,48 60,32 66,60" fill="url(#ncg)" stroke="#f0c040" stroke-width="2" filter="url(#glow-nc)"/>
  <rect x="14" y="58" width="52" height="8" rx="2" fill="#3a2000" stroke="#f0c040" stroke-width="1.5" filter="url(#glow-nc)"/>
  <circle cx="40" cy="22" r="5" fill="#f0c040" filter="url(#glow-nc)"/>
  <circle cx="20" cy="32" r="3.5" fill="#ff6b9d" filter="url(#glow-nc)"/>
  <circle cx="60" cy="32" r="3.5" fill="#ff6b9d" filter="url(#glow-nc)"/>
  <circle cx="14" cy="60" r="3" fill="#f0c040" filter="url(#glow-nc)"/>
  <circle cx="66" cy="60" r="3" fill="#f0c040" filter="url(#glow-nc)"/>
  <circle cx="40" cy="62" r="3" fill="#3dd9c5" filter="url(#glow-nc)"/>
</svg>`;

// ───────── BOOTS ─────────

ITEM_ART['leather_boots'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7a5c3a"/><stop offset="100%" stop-color="#4a3020"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0e0a06"/>
  <path d="M22,18 L22,56 C22,60 26,64 32,65 L58,65 C62,65 64,63 64,60 L64,56 C64,52 60,50 56,50 L44,50 L44,18 Z" fill="url(#lbg)" stroke="#a07840" stroke-width="1.5"/>
  <line x1="30" y1="30" x2="44" y2="30" stroke="#a07840" stroke-width="1" opacity="0.5"/>
  <line x1="28" y1="40" x2="44" y2="40" stroke="#c09860" stroke-width="1.5" opacity="0.6"/>
  <line x1="30" y1="50" x2="44" y2="50" stroke="#a07840" stroke-width="1" opacity="0.5"/>
</svg>`;

ITEM_ART['running_shoes'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-rs"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="rsg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2a3a6a"/><stop offset="100%" stop-color="#1a2050"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#08091a"/>
  <path d="M18,20 L18,55 C18,59 22,63 28,64 L60,64 C64,64 66,62 66,59 L66,55 C66,51 62,49 58,49 L46,49 L46,20 Z" fill="url(#rsg)" stroke="#5b8dee" stroke-width="1.5"/>
  <line x1="26" y1="35" x2="46" y2="35" stroke="#5b8dee" stroke-width="2.5" stroke-dasharray="5,4" stroke-linecap="round" filter="url(#glow-rs)"/>
  <line x1="24" y1="45" x2="46" y2="45" stroke="#5b8dee" stroke-width="2.5" stroke-dasharray="5,4" stroke-linecap="round" filter="url(#glow-rs)"/>
  <rect x="18" y="60" width="48" height="4" rx="2" fill="#3050a0" filter="url(#glow-rs)"/>
</svg>`;

ITEM_ART['cyber_boots'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-cb"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="cbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0a1a2a"/><stop offset="100%" stop-color="#050d16"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#04090e"/>
  <path d="M16,18 L16,54 C16,58 20,62 26,63 L60,63 C64,63 66,61 66,58 L66,54 C66,50 62,48 58,48 L46,48 L46,18 Z" fill="url(#cbg)" stroke="#00d4ff" stroke-width="1.5"/>
  <line x1="22" y1="30" x2="46" y2="30" stroke="#00d4ff" stroke-width="2" filter="url(#glow-cb)"/>
  <line x1="20" y1="42" x2="46" y2="42" stroke="#00d4ff" stroke-width="2" filter="url(#glow-cb)"/>
  <rect x="34" y="24" width="12" height="4" rx="2" fill="#00d4ff" opacity="0.4"/>
  <rect x="16" y="59" width="50" height="4" rx="2" fill="#004455" stroke="#00d4ff" stroke-width="1" filter="url(#glow-cb)"/>
  <circle cx="55" cy="55" r="3" fill="#00d4ff" opacity="0.5" filter="url(#glow-cb)"/>
</svg>`;

ITEM_ART['neon_boots'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-nb"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="nbg" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#0d0020"/><stop offset="100%" stop-color="#1a0030"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#030008"/>
  <path d="M14,16 L14,53 C14,57 18,61 24,62 L62,62 C66,62 68,60 68,57 L68,53 C68,49 64,47 60,47 L48,47 L48,16 Z" fill="url(#nbg)" stroke="#b44fff" stroke-width="1.5" filter="url(#glow-nb)"/>
  <line x1="20" y1="28" x2="48" y2="28" stroke="#ff2d78" stroke-width="2.5" filter="url(#glow-nb)"/>
  <line x1="18" y1="40" x2="48" y2="40" stroke="#b44fff" stroke-width="2.5" filter="url(#glow-nb)"/>
  <rect x="14" y="58" width="54" height="4" rx="2" fill="#300050" stroke="#b44fff" stroke-width="1" filter="url(#glow-nb)"/>
  <circle cx="56" cy="54" r="4" fill="#b44fff" opacity="0.6" filter="url(#glow-nb)"/>
  <line x1="56" y1="50" x2="56" y2="58" stroke="#ff2d78" stroke-width="1" filter="url(#glow-nb)"/>
</svg>`;

// ───────── RINGS ─────────

ITEM_ART['iron_ring'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="irg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#a0aab8"/><stop offset="100%" stop-color="#5a6070"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#08090f"/>
  <circle cx="40" cy="40" r="20" fill="none" stroke="url(#irg)" stroke-width="8"/>
  <circle cx="40" cy="40" r="20" fill="none" stroke="white" stroke-width="1" opacity="0.2"/>
</svg>`;

ITEM_ART['mage_ring'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-mr"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="mrg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6a00cc"/><stop offset="100%" stop-color="#3a007a"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#080010"/>
  <circle cx="40" cy="40" r="20" fill="none" stroke="url(#mrg)" stroke-width="7" filter="url(#glow-mr)"/>
  <circle cx="40" cy="20" r="6" fill="#9b6dff" filter="url(#glow-mr)"/>
  <circle cx="40" cy="20" r="3" fill="white" opacity="0.8"/>
</svg>`;

ITEM_ART['neon_ring'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-nr"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="nrg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00ffcc"/><stop offset="50%" stop-color="#00aaff"/><stop offset="100%" stop-color="#6600ff"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#020810"/>
  <circle cx="40" cy="40" r="22" fill="none" stroke="url(#nrg)" stroke-width="6" filter="url(#glow-nr)"/>
  <circle cx="40" cy="40" r="18" fill="none" stroke="url(#nrg)" stroke-width="1" opacity="0.5"/>
  <circle cx="40" cy="18" r="5" fill="#00ffcc" filter="url(#glow-nr)"/>
</svg>`;

ITEM_ART['god_ring'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-gr"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="grg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f0c040"/><stop offset="50%" stop-color="#ff8c00"/><stop offset="100%" stop-color="#cc6600"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0a0600"/>
  <circle cx="40" cy="40" r="22" fill="none" stroke="url(#grg)" stroke-width="7" filter="url(#glow-gr)"/>
  <circle cx="40" cy="40" r="22" fill="none" stroke="white" stroke-width="1" opacity="0.2"/>
  <polygon points="40,17 42,23 48,23 43,27 45,33 40,29 35,33 37,27 32,23 38,23" fill="#f0c040" filter="url(#glow-gr)"/>
</svg>`;

// ───────── NECKLACES ─────────

ITEM_ART['bone_neck'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0c0a08"/>
  <path d="M20,25 C20,25 30,20 40,20 C50,20 60,25 60,25" fill="none" stroke="#d0c0b0" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M20,25 L25,55" stroke="#c0b0a0" stroke-width="2" stroke-linecap="round"/>
  <path d="M60,25 L55,55" stroke="#c0b0a0" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="40" cy="58" rx="10" ry="7" fill="#8a7060" stroke="#c0b0a0" stroke-width="1.5"/>
</svg>`;

ITEM_ART['power_neck'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-pn"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="png" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b44fff"/><stop offset="100%" stop-color="#6600cc"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0a0414"/>
  <path d="M18,22 C18,22 28,16 40,16 C52,16 62,22 62,22" fill="none" stroke="#9b6dff" stroke-width="2.5" stroke-linecap="round" filter="url(#glow-pn)"/>
  <path d="M18,22 L22,52" stroke="#9b6dff" stroke-width="2" stroke-linecap="round" filter="url(#glow-pn)"/>
  <path d="M62,22 L58,52" stroke="#9b6dff" stroke-width="2" stroke-linecap="round" filter="url(#glow-pn)"/>
  <polygon points="40,50 34,60 40,57 46,60" fill="url(#png)" filter="url(#glow-pn)"/>
  <circle cx="40" cy="60" r="7" fill="url(#png)" filter="url(#glow-pn)"/>
  <circle cx="40" cy="60" r="3" fill="white" opacity="0.8"/>
</svg>`;

ITEM_ART['neon_neck'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-nn"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="nng" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00ffcc"/><stop offset="100%" stop-color="#0080ff"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#020810"/>
  <path d="M16,20 C16,20 26,14 40,14 C54,14 64,20 64,20" fill="none" stroke="#00ffcc" stroke-width="2.5" stroke-linecap="round" filter="url(#glow-nn)"/>
  <path d="M16,20 L20,52" stroke="#00aaff" stroke-width="2" stroke-linecap="round" filter="url(#glow-nn)"/>
  <path d="M64,20 L60,52" stroke="#00aaff" stroke-width="2" stroke-linecap="round" filter="url(#glow-nn)"/>
  <circle cx="40" cy="62" r="10" fill="none" stroke="url(#nng)" stroke-width="3" filter="url(#glow-nn)"/>
  <circle cx="40" cy="62" r="5" fill="url(#nng)" filter="url(#glow-nn)"/>
  <circle cx="40" cy="62" r="2" fill="white"/>
</svg>`;

// ───────── WINGS ─────────

ITEM_ART['angel_wings'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-aw"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="awg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="white"/><stop offset="100%" stop-color="#e0e8ff"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#090a14"/>
  <path d="M40,40 C30,30 10,25 12,40 C14,52 30,54 40,50" fill="url(#awg)" opacity="0.85" filter="url(#glow-aw)"/>
  <path d="M40,40 C50,30 70,25 68,40 C66,52 50,54 40,50" fill="url(#awg)" opacity="0.85" filter="url(#glow-aw)"/>
  <line x1="40" y1="40" x2="40" y2="70" stroke="#c0c8ff" stroke-width="3" stroke-linecap="round"/>
  <path d="M40,40 C30,35 14,32 14,40" fill="none" stroke="white" stroke-width="1" opacity="0.6"/>
  <path d="M40,40 C50,35 66,32 66,40" fill="none" stroke="white" stroke-width="1" opacity="0.6"/>
</svg>`;

ITEM_ART['dragon_wings'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-dw"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="dwg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e85d5d"/><stop offset="100%" stop-color="#700000"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0c0404"/>
  <path d="M40,42 C28,28 10,18 8,36 C6,50 26,56 40,52" fill="url(#dwg)" opacity="0.9" filter="url(#glow-dw)"/>
  <path d="M40,42 C52,28 70,18 72,36 C74,50 54,56 40,52" fill="url(#dwg)" opacity="0.9" filter="url(#glow-dw)"/>
  <line x1="40" y1="42" x2="40" y2="72" stroke="#cc2222" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M40,42 C27,32 12,22 9,36" fill="none" stroke="#ff6666" stroke-width="1.5" opacity="0.7" filter="url(#glow-dw)"/>
  <path d="M40,42 C53,32 68,22 71,36" fill="none" stroke="#ff6666" stroke-width="1.5" opacity="0.7" filter="url(#glow-dw)"/>
  <line x1="28" y1="38" x2="22" y2="30" stroke="#ff6666" stroke-width="1" opacity="0.5"/>
  <line x1="52" y1="38" x2="58" y2="30" stroke="#ff6666" stroke-width="1" opacity="0.5"/>
</svg>`;

ITEM_ART['neon_wings'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-nw"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="nwgl" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#b44fff"/><stop offset="100%" stop-color="#00ffcc"/></linearGradient>
    <linearGradient id="nwgr" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#00ffcc"/><stop offset="100%" stop-color="#b44fff"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#030810"/>
  <path d="M40,40 C26,24 6,14 4,34 C2,50 24,58 40,52" fill="none" stroke="url(#nwgl)" stroke-width="3" filter="url(#glow-nw)"/>
  <path d="M40,40 C54,24 74,14 76,34 C78,50 56,58 40,52" fill="none" stroke="url(#nwgr)" stroke-width="3" filter="url(#glow-nw)"/>
  <path d="M40,40 C28,28 12,18 8,35" fill="none" stroke="#b44fff" stroke-width="1.5" opacity="0.6" filter="url(#glow-nw)"/>
  <path d="M40,40 C52,28 68,18 72,35" fill="none" stroke="#00ffcc" stroke-width="1.5" opacity="0.6" filter="url(#glow-nw)"/>
  <path d="M40,40 C30,32 16,24 12,37" fill="none" stroke="#ff2d78" stroke-width="1" opacity="0.5" filter="url(#glow-nw)"/>
  <path d="M40,40 C50,32 64,24 68,37" fill="none" stroke="#ff2d78" stroke-width="1" opacity="0.5" filter="url(#glow-nw)"/>
  <line x1="40" y1="40" x2="40" y2="72" stroke="#b44fff" stroke-width="3" stroke-linecap="round" filter="url(#glow-nw)"/>
  <circle cx="40" cy="40" r="5" fill="#b44fff" opacity="0.5" filter="url(#glow-nw)"/>
</svg>`;

// ───────── AURAS ─────────

ITEM_ART['fire_aura'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-fa"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="fag"><stop offset="0%" stop-color="#ff8c42" stop-opacity="0.5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0e0400"/>
  <circle cx="40" cy="40" r="28" fill="url(#fag)"/>
  <path d="M40,65 C28,58 22,48 28,38 C32,30 38,28 36,20 C42,26 44,32 40,40 C46,34 48,24 44,16 C52,24 54,38 48,46 C52,42 56,36 54,28 C60,38 58,52 40,65 Z" fill="#ff6b35" filter="url(#glow-fa)"/>
  <circle cx="40" cy="42" r="8" fill="#f0c040" opacity="0.6" filter="url(#glow-fa)"/>
</svg>`;

ITEM_ART['ice_aura'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-ia2"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="iag2"><stop offset="0%" stop-color="#3dd9c5" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#010d10"/>
  <circle cx="40" cy="40" r="28" fill="url(#iag2)"/>
  <line x1="40" y1="14" x2="40" y2="66" stroke="#3dd9c5" stroke-width="2.5" filter="url(#glow-ia2)"/>
  <line x1="14" y1="40" x2="66" y2="40" stroke="#3dd9c5" stroke-width="2.5" filter="url(#glow-ia2)"/>
  <line x1="21" y1="21" x2="59" y2="59" stroke="#3dd9c5" stroke-width="2.5" filter="url(#glow-ia2)"/>
  <line x1="59" y1="21" x2="21" y2="59" stroke="#3dd9c5" stroke-width="2.5" filter="url(#glow-ia2)"/>
  <circle cx="40" cy="40" r="6" fill="white" opacity="0.8" filter="url(#glow-ia2)"/>
  <circle cx="40" cy="40" r="20" fill="none" stroke="#3dd9c5" stroke-width="1" opacity="0.4"/>
</svg>`;

ITEM_ART['neon_aura'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-na"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="nag2"><stop offset="0%" stop-color="#b44fff" stop-opacity="0.6"/><stop offset="60%" stop-color="#00ffcc" stop-opacity="0.2"/><stop offset="100%" stop-color="transparent"/></radialGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#030510"/>
  <circle cx="40" cy="40" r="30" fill="url(#nag2)" filter="url(#glow-na)"/>
  <circle cx="40" cy="40" r="28" fill="none" stroke="#b44fff" stroke-width="2" filter="url(#glow-na)"/>
  <circle cx="40" cy="40" r="20" fill="none" stroke="#ff2d78" stroke-width="1.5" filter="url(#glow-na)"/>
  <circle cx="40" cy="40" r="12" fill="none" stroke="#00ffcc" stroke-width="1.5" filter="url(#glow-na)"/>
  <circle cx="40" cy="40" r="5" fill="#00ffcc" filter="url(#glow-na)"/>
  <circle cx="40" cy="40" r="2.5" fill="white"/>
</svg>`;

// ───────── BOOSTS ─────────

ITEM_ART['xp_boost'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-xb"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="xbg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f0c040"/><stop offset="100%" stop-color="#ff8c00"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0c0800"/>
  <polygon points="40,12 46,30 66,30 50,44 56,64 40,52 24,64 30,44 14,30 34,30" fill="url(#xbg)" filter="url(#glow-xb)"/>
  <text x="40" y="43" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="monospace">x2</text>
</svg>`;

ITEM_ART['gold_boost'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-gb2"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="gbg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f0c040"/><stop offset="100%" stop-color="#cc9900"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#0a0800"/>
  <circle cx="40" cy="40" r="28" fill="url(#gbg2)" filter="url(#glow-gb2)"/>
  <circle cx="40" cy="40" r="22" fill="#cc8800"/>
  <text x="40" y="46" text-anchor="middle" fill="#f0c040" font-size="22" font-weight="900" font-family="monospace">🪙</text>
  <text x="40" y="58" text-anchor="middle" fill="white" font-size="8" font-weight="bold" font-family="monospace">x2</text>
</svg>`;

ITEM_ART['hp_potion'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-hp"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="hpg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff6b9d"/><stop offset="100%" stop-color="#cc0044"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#100208"/>
  <rect x="35" y="14" width="10" height="10" rx="2" fill="#880022"/>
  <path d="M28,24 C22,28 18,34 18,44 C18,56 28,66 40,66 C52,66 62,56 62,44 C62,34 58,28 52,24 Z" fill="url(#hpg)" filter="url(#glow-hp)"/>
  <circle cx="40" cy="44" r="14" fill="#ff6b9d" opacity="0.3" filter="url(#glow-hp)"/>
  <text x="40" y="49" text-anchor="middle" fill="white" font-size="20" font-weight="900">+</text>
</svg>`;

ITEM_ART['mega_xp'] = `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow-mx"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="mxg"><stop offset="0%" stop-color="#ffffff"/><stop offset="40%" stop-color="#b44fff"/><stop offset="100%" stop-color="#300060"/></radialGradient>
  </defs>
  <rect x="0" y="0" width="80" height="80" rx="12" fill="#060010"/>
  <circle cx="40" cy="40" r="30" fill="url(#mxg)" filter="url(#glow-mx)"/>
  <text x="40" y="36" text-anchor="middle" fill="white" font-size="10" font-weight="bold" font-family="monospace">XP</text>
  <text x="40" y="52" text-anchor="middle" fill="#f0c040" font-size="18" font-weight="900" font-family="monospace">x5</text>
</svg>`;

// ─── Helper: get SVG art for an item, fallback to emoji wrapper ───
function getItemArt(itemId, icon, size = 56) {
  if (ITEM_ART[itemId]) {
    return `<div style="width:${size}px;height:${size}px;flex-shrink:0">${ITEM_ART[itemId]}</div>`;
  }
  // Fallback: styled emoji
  return `<div style="width:${size}px;height:${size}px;display:flex;align-items:center;justify-content:center;font-size:${size*0.5}px;flex-shrink:0">${icon}</div>`;
}
