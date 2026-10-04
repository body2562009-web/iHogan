/* iHogan site - plain JS, no build. Edit TEXT, LINKS and TRACKS below. */
const KICK = 'ihogan';
const YT_UPLOADS = 'UU-J3IEv2nO-2TNY9S9NkDoA'; // uploads playlist of the YouTube channel
const LINKS = [
  ['kick','KICK','kick.com/ihogan','https://kick.com/ihogan','#53fc18'],
  ['youtube','YOUTUBE','@ihogan_07','https://www.youtube.com/@ihogan_07','#ff0033'],
  ['tiktok','TIKTOK','@ihogan_07','https://www.tiktok.com/@ihogan_07','#25f4ee'],
  ['instagram','INSTAGRAM','@ihogan07','https://www.instagram.com/ihogan07','#e1306c'],
  ['facebook','FACEBOOK','ihoganofficial','https://www.facebook.com/ihoganofficial/','#1877f2'],
  ['discord','DISCORD','discord.gg/PjpssKHsT','https://discord.gg/PjpssKHsT','#5865f2'],
  ['whatsapp','WHATSAPP','Official channel','https://www.whatsapp.com/channel/0029Vb8VWEG8kyyDgQoBmH1G','#25d366'],
  ['instapay','INSTAPAY','InstaPay','https://ipn.eg/S/miido07/instapay/1HpfIB','#a855f7']
];
const TRACKS = [
  { src:'track1.mp3', t:{ en:'El Joker x Haram - Rakam 1 Da Mesh Enta', ar:'الجوكر مع هرم - رقم ١ ده مش إنت' } },
  { src:'track2.mp3', t:{ en:'Marwan Pablo - Barbary', ar:'مروان بابلو - بربري' } }
];
const TEXT = {
  en:{dir:'ltr',nav:['The Creator','Channels','Videos'],watchLive:'Watch Live',
    kick:'GAMER · CONTENT CREATOR',sub:'LIVE ON KICK',
    rot:['Strong gameplay · clean editing','From hype moments to chill streams','New content every day','A community that is always on'],
    watch:'Watch on Kick',all:'All Channels',scroll:'SCROLL',
    liveTag:'STREAM',liveStat:'LIVE ON KICK',liveBtn:'Watch the stream',liveNote:'Press play to open the stream. If he is offline, the player will show it.',open:'Open on Kick',
    vTag:'VIDEOS',vT:'LATEST ON YOUTUBE',vS:'The newest uploads from the channel, updated automatically.',vLoad:'Loading videos...',vErr:'Could not load the videos right now.',vAll:'Open the YouTube channel',
    chA:'EVERY CHANNEL.',chB:'ONE PLACE.',chS:'Pick your platform and join the community.',
    act:{kick:'Watch live',youtube:'Subscribe',tiktok:'Follow',instagram:'Follow',facebook:'Follow',discord:'Join server',whatsapp:'Join channel',instapay:'Support'},
    abTag:'WHO IS',abT:'IHOGAN',
    abB:"I'm iHogan, a gamer and content creator building a community full of energy. Strong gameplay, clean editing and a fun vibe. From hype moments to chill streams, I bring fire content on every platform. Join in, follow the journey, and let's level up together.",
    creds:[['+5','PLATFORMS'],['DAILY','CONTENT'],['24/7','COMMUNITY'],['KICK','LIVE ON']],
    tags:['GAMING','CONTENT CREATOR','KICK','YOUTUBE','DAILY CONTENT','COMMUNITY'],
    mq:['IHOGAN','GAMING','LIVE ON KICK','DAILY CONTENT','24/7 COMMUNITY'],
    cTag:'THE COMMUNITY',cT:'JOIN THE COMMUNITY',cB:'Hop in the Discord and follow the WhatsApp channel for go-live alerts and everything iHogan.',
    dP:'Real-time chat, go-live pings and giveaways with the squad.',wP:'Follow the official channel so you never miss a go-live.',dC:'Join Discord',wC:'WhatsApp Channel',
    foot:'See you in the next stream.',rights:'© 2026 iHogan · All rights reserved',top:'Back to top',music:'Music'},
  ar:{dir:'rtl',nav:['من هو','القنوات','الفيديوهات'],watchLive:'شوف اللايف',
    kick:'لاعب · صانع محتوى',sub:'لايف على Kick',
    rot:['جيم بلاي قوي · مونتاج نظيف','من اللحظات الحماسية إلى الستريمات الهادية','محتوى جديد كل يوم','مجتمع واقف معاك على طول'],
    watch:'شوفني على Kick',all:'كل القنوات',scroll:'انزل تحت',
    liveTag:'البث',liveStat:'لايف على Kick',liveBtn:'شاهد البث',liveNote:'اضغط تشغيل لفتح البث. لو مش لايف، المشغل هيوضح.',open:'افتح Kick',
    vTag:'فيديوهات',vT:'أحدث فيديوهات اليوتيوب',vS:'آخر الفيديوهات من القناة، بتتحدث أوتوماتيك.',vLoad:'بنحمّل الفيديوهات...',vErr:'مقدرناش نحمّل الفيديوهات دلوقتي.',vAll:'افتح قناة اليوتيوب',
    chA:'كل القنوات،',chB:'في مكان واحد.',chS:'اختار منصتك وانضم للمجتمع.',
    act:{kick:'شاهد',youtube:'اشترك',tiktok:'تابع',instagram:'تابع',facebook:'تابع',discord:'انضم للسيرفر',whatsapp:'انضم للقناة',instapay:'ادعم'},
    abTag:'مين هو',abT:'iHogan',
    abB:'أنا iHogan — لاعب وصانع محتوى ببني مجتمع مليان حماس، جيم بلاي قوي، مونتاج نظيف، وأجواء ممتعة. من اللحظات الحماسية إلى الستريمات الهادية، بقدم محتوى نار على كل المنصات. انضم، تابع الرحلة، ويلا نرفع المستوى سوا.',
    creds:[['+5','منصات'],['Daily','محتوى'],['24/7','مجتمع'],['كيك','لايف على']],
    tags:['جيمنج','صانع محتوى','كيك','يوتيوب','محتوى يومي','مجتمع'],
    mq:['iHogan','جيمنج','لايف على كيك','محتوى يومي','مجتمع 24/7'],
    cTag:'المجتمع',cT:'انضم للمجتمع',cB:'خش سيرفر الديسكورد وتابع قناة الواتساب عشان يوصلك كل لايف وأخبار iHogan أول بأول.',
    dP:'شات لايف، تنبيهات أول ما البث يبدأ، وجوايز مع العيلة.',wP:'تابع القناة الرسمية عشان عمرك ما تفوّت لايف.',dC:'ادخل الديسكورد',wC:'قناة الواتساب',
    foot:'نشوفكم في الستريم الجاي.',rights:'© 2026 iHogan · كل الحقوق محفوظة',top:'ارجع فوق',music:'الموسيقى'}
};
const S = (p,v='0 0 24 24',x='fill="currentColor"') => `<svg viewBox="${v}" ${x} aria-hidden="true"><path d="${p}"/></svg>`;
const IC = {
  kick:S('M0 0h8v8h4V4h4V0h8v12h-4v4h4v12h-8v-4h-4v-4H8v8H0V0z','0 0 32 32'),
  youtube:S('M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.500 0-9.400.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.800 3 3 0 0 0 2.100 2.100c1.900.5 9.400.5 9.400.5s7.500 0 9.400-.5a3 3 0 0 0 2.100-2.100A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.800zM9.600 15.600V8.400l6.300 3.600-6.300 3.600z'),
  tiktok:S('M19.300 6.700a6.300 6.300 0 0 1-3.600-1.100V15a5.800 5.800 0 1 1-5-5.700v3.100a2.800 2.800 0 1 0 2 2.700V2h3a4 4 0 0 0 3.600 3.600v3z'),
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.500" cy="6.500" r="1" fill="currentColor" stroke="none"/></svg>',
  facebook:S('M13.500 22v-8h2.700l.4-3.200h-3.100V8.800c0-.9.3-1.500 1.600-1.500h1.700V4.400c-.3 0-1.300-.1-2.400-.1-2.400 0-4.100 1.500-4.100 4.200v2.300H7.500V14h2.800v8h3.200z'),
  discord:S('M20 4.500A17 17 0 0 0 15.800 3l-.2.400a13 13 0 0 1 3.700 1.900 13 13 0 0 0-14.600 0A13 13 0 0 1 8.400 3.400L8.200 3A17 17 0 0 0 4 4.500C1.500 8 .8 11.400 1.100 14.700a17 17 0 0 0 5.300 2.700l.4-.6a11 11 0 0 1-1.700-.8l.4-.3a12 12 0 0 0 10.900 0l.4.300a11 11 0 0 1-1.700.8l.4.600a17 17 0 0 0 5.300-2.700c.4-3.900-.6-7.200-2.800-10.200zM8.500 13c-1 0-1.800-.9-1.800-2s.8-2 1.800-2 1.800.9 1.800 2-.8 2-1.800 2zm7 0c-1 0-1.800-.9-1.800-2s.8-2 1.800-2 1.800.9 1.800 2-.8 2-1.800 2z'),
  whatsapp:S('M17.500 14.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.100-.2.2-.3.2-.6.1-.3-.1-1.300-.5-2.500-1.500-.9-.8-1.500-1.800-1.700-2.100-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5 0-.1-.7-1.600-.9-2.200-.2-.6-.5-.5-.7-.5H7.700c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.500s1.100 2.900 1.200 3.100c.2.2 2.100 3.300 5.200 4.600.7.3 1.300.5 1.700.6.7.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.2-.7.2-1.300.2-1.400-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.600 15L2 22l5.200-1.400A10 10 0 1 0 12 2zm0 18.300a8.200 8.200 0 0 1-4.200-1.200l-.3-.2-3 .8.8-3-.2-.3A8.300 8.300 0 1 1 12 20.300z'),
  instapay:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h15a3 3 0 0 1 3 3v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7zm0 0 12-3v3M16 14h2"/></svg>',
  arrow:S('M5 12h14M13 5l7 7-7 7','0 0 24 24','fill="none" stroke="currentColor" stroke-width="2"'),star:S('M12 2.500l2.900 6 6.600.900-4.800 4.600 1.200 6.500L12 18.600 6.100 20.500l1.200-6.500L2.500 9.400l6.600-.900L12 2.500z'),shield:S('M12 2.500l7.500 2.800v6.200c0 4.600-3.200 7.900-7.500 9.500-4.300-1.600-7.500-4.900-7.500-9.500V5.300L12 2.500z'),crown:S('M3 8l4 4 5-7 5 7 4-4-1.600 11H4.600L3 8z'),play:S('M8 5v14l11-7z'),pause:S('M6.500 5h4v14h-4zM13.500 5h4v14h-4z'),
  prev:S('M7 6h2v12H7zM20 6v12L9.500 12z'),next:S('M15 6h2v12h-2zM4 6v12l10.500-6z'),note:S('M9 3v12.500A3.500 3.500 0 1 0 11 18.700V8h8V3H9z')
};
const $ = s => document.querySelector(s);
const YT_RSS = 'https://www.youtube.com/feeds/videos.xml?channel_id=UC-J3IEv2nO-2TNY9S9NkDoA';
let lang = 'ar'; try { lang = localStorage.getItem('lang') || 'ar'; } catch (e) {}
let rotT = 0;

function render() {
  const t = TEXT[lang], K = `https://kick.com/${KICK}`, E = LINKS;
  document.documentElement.lang = lang; document.documentElement.dir = t.dir;
  const mq = t.mq.concat(t.mq).map(w => `${w}<b>${IC.star}</b>`).join('');
  const head = (tag, ic, title) => `<div class="sec__head"><div class="tag"><span>${IC[ic]}</span>${tag}</div><h2 class="h-sec">${title}</h2></div>`;
  const panel = (k, name, p, cta, c) => { const l = E.find(x => x[0] === k); return `<div class="panel" style="--pc:${c}"><span class="panel__ic">${IC[k]}</span><h3>${name}</h3><p>${p}</p><a class="btn btn-primary" href="${l[3]}" target="_blank" rel="noopener">${IC[k]}<span>${cta}</span></a></div>`; };
  $('#app').innerHTML = `
  <nav class="nav"><div class="nav__bar"><a class="brand" href="#top"><span class="brand__mk"><img src="logo.webp" alt=""></span><span class="brand__wm">iHogan</span></a>
    <div class="nav__links"><a href="#about">${t.nav[0]}</a><a href="#channels">${t.nav[1]}</a><a href="#videos">${t.nav[2]}</a></div>
    <div class="nav__right"><a class="livepill" href="${K}" target="_blank" rel="noopener"><span class="dot"></span><span>${t.watchLive}</span></a>
    <div class="langtog"><button class="${lang === 'en' ? 'on' : ''}" data-l="en">EN</button><button class="${lang === 'ar' ? 'on' : ''}" data-l="ar">ع</button></div></div></div></nav>
  <header class="hero" id="top"><div class="app-pad hero__in">
    <div class="hero__crest"><span class="crest__rays"></span><span class="crest__halo"></span>
      <div class="crest__frame"><img src="logo.webp" alt="iHogan" width="380" height="380"><span class="crest__sheen"></span></div>
      <span class="crest__cn cn-tl"></span><span class="crest__cn cn-tr"></span><span class="crest__cn cn-bl"></span><span class="crest__cn cn-br"></span></div>
    <div class="hero__copy"><div class="tag"><span>${IC.crown}</span>${t.kick}</div><h1 class="hero__name">iHogan</h1><div class="hero__sub">${t.sub}</div>
      <div class="hero__rotate"><span id="rot" class="show">${t.rot[0]}</span></div>
      <div class="hero__cta"><a class="btn btn-primary" href="${K}" target="_blank" rel="noopener">${IC.kick}<span>${t.watch}</span></a><a class="btn btn-ghost" href="#channels">${IC.arrow}<span>${t.all}</span></a></div></div></div>
    <a class="scrollcue" href="#live" aria-label="${t.scroll}"><span class="scrollcue__mouse"><i></i></span></a></header>
  <section class="sec" id="live"><div class="app-pad"><div class="liveband"><div class="liveband__top"><span class="livestat">${t.liveStat}</span><a class="liveband__url" href="${K}" target="_blank" rel="noopener">kick.com/${KICK}</a></div>
    <div class="livestage" id="stage"><button class="playbtn" type="button" id="loadLive"><i>${IC.play}</i>${t.liveBtn}</button></div>
    <div class="liveband__foot"><span>${t.liveNote}</span><a class="btn btn-primary" href="${K}" target="_blank" rel="noopener">${IC.kick}<span>${t.open}</span></a></div></div></div></section>
  <section class="sec" id="videos"><div class="app-pad">${head(t.vTag, 'play', t.vT)}<p class="lead" style="margin-bottom:26px">${t.vS}</p>
    <div class="vgrid" id="vgrid"><div class="vstate">${t.vLoad}</div></div>
    <a class="btn btn-ghost" style="margin-top:22px" href="${E[1][3]}" target="_blank" rel="noopener">${IC.youtube}<span>${t.vAll}</span></a></div></section>
  <section class="sec" id="channels"><div class="app-pad">${head(t.nav[1], 'star', t.chA + ' <span style="color:var(--ac)">' + t.chB + '</span>')}<p class="lead" style="margin-bottom:42px">${t.chS}</p>
    <div class="hub">${E.map(l => `<a class="plaque" style="--pc:${l[4]}" href="${l[3]}" target="_blank" rel="noopener"><span class="plaque__tok">${IC[l[0]]}</span><span class="plaque__mid"><span class="plaque__name">${l[1]}</span><span class="plaque__handle">${l[2]}</span></span><span class="plaque__act"><span class="plaque__act-txt">${t.act[l[0]]}</span><span class="plaque__arrow">${IC.arrow}</span></span><span class="plaque__edge"></span></a>`).join('')}</div></div></section>
  <section class="sec" id="about"><div class="app-pad about__grid"><div class="about__art"><span class="about__halo"></span><div class="about__frame"><img src="logo.webp" alt="iHogan" loading="lazy" width="400" height="400"></div></div>
    <div class="about__copy"><div class="tag"><span>${IC.shield}</span>${t.abTag}</div><div class="about__title">${t.abT}</div><p class="lead">${t.abB}</p>
    <div class="creds">${t.creds.map(c => `<div class="cred"><div class="cred__v">${c[0]}</div><div class="cred__l">${c[1]}</div></div>`).join('')}</div>
    <div class="tags">${t.tags.map(x => `<span>${x}</span>`).join('')}</div></div></div>
    <div class="app-pad"><div class="mq"><div class="mq__track"><i>${mq}</i><i aria-hidden="true">${mq}</i></div></div></div></section>
  <section class="sec" id="community"><div class="app-pad">${head(t.cTag, 'crown', t.cT)}<p class="lead" style="margin-bottom:42px">${t.cB}</p>
    <div class="comm__grid">${panel('discord', 'Discord', t.dP, t.dC, '#5865f2')}${panel('whatsapp', 'WhatsApp', t.wP, t.wC, '#25d366')}</div></div></section>
  <footer class="footer"><div class="footer__ghost" aria-hidden="true">iHogan</div><div class="app-pad footer__in"><div class="footer__tag">${t.foot}</div>
    <div class="footer__soc">${E.map(l => `<a href="${l[3]}" target="_blank" rel="noopener" aria-label="${l[1]}">${IC[l[0]]}</a>`).join('')}</div>
    <div class="credit">Designer Developer by Abdrlrahman</div>
    <div class="footer__bottom">${t.rights} · <a href="#top">${t.top} ↑</a></div></div></footer>`;
  document.querySelectorAll('[data-l]').forEach(b => b.onclick = () => { lang = b.dataset.l; try { localStorage.setItem('lang', lang); } catch (e) {} render(); drawPlayer(); });
  $('#loadLive').onclick = () => { $('#stage').innerHTML = `<iframe src="https://player.kick.com/${KICK}?autoplay=true" title="Kick" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`; };
  clearInterval(rotT); let ri = 0; rotT = setInterval(() => { const r = $('#rot'); if (!r) return; r.classList.remove('show'); setTimeout(() => { ri = (ri + 1) % t.rot.length; r.textContent = t.rot[ri]; r.classList.add('show'); }, 440); }, 3200);
  loadVideos();
}

/* YouTube: latest uploads as cards (open on YouTube) - no iframe so nothing can fail to embed */
let vids = null;
function paintVideos() {
  const g = $('#vgrid'); if (!g) return;
  g.innerHTML = vids && vids.length ? vids.map(v => `<a class="vid" href="${v.url}" target="_blank" rel="noopener"><div class="vid__m"><img src="${v.img}" alt="" loading="lazy"><span class="vid__p">${IC.play}</span></div><b>${v.title}</b></a>`).join('') : `<div class="vstate">${TEXT[lang].vErr}</div>`;
}
const mk = (id, title) => ({ url: 'https://www.youtube.com/watch?v=' + id, title, img: `https://i.ytimg.com/vi/${id}/hqdefault.jpg` });
const viaJson = () => fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(YT_RSS)).then(r => r.json())
  .then(d => d.items.slice(0, 6).map(i => mk(new URL(i.link).searchParams.get('v'), i.title)));
const viaProxy = u => fetch(u + encodeURIComponent(YT_RSS)).then(r => r.text()).then(x => {
  const doc = new DOMParser().parseFromString(x, 'text/xml');
  return [...doc.getElementsByTagName('entry')].slice(0, 6).map(e => mk(e.getElementsByTagName('yt:videoId')[0].textContent, e.getElementsByTagName('title')[0].textContent));
});
function loadVideos() {
  if (vids) return paintVideos();
  const tries = [viaJson, () => viaProxy('https://api.allorigins.win/raw?url='), () => viaProxy('https://corsproxy.io/?')];
  (async () => {
    for (const f of tries) { try { const r = await f(); if (r && r.length) { vids = r; return paintVideos(); } } catch (e) {} }
    const g = $('#vgrid'); if (g) g.innerHTML = `<div class="vplay"><iframe src="https://www.youtube.com/embed/videoseries?list=${YT_UPLOADS}" title="YouTube" allow="fullscreen; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
  })();
}

/* music: starts when the visitor presses ENTER, track 2 follows track 1, visitors can switch */
const au = $('#au'); let cur = 0, open = false;
au.src = TRACKS[0].src;
function drawPlayer() {
  const t = TEXT[lang], playing = !au.paused;
  $('#mp').innerHTML = `<div class="mp__panel" role="region" aria-label="${t.music}"><div class="mp__title">${TRACKS[cur].t[lang]}</div>
    <input type="range" id="sk" min="0" max="${au.duration || 0}" step="0.1" value="${au.currentTime || 0}" aria-label="Seek">
    <div class="mp__ctrls"><button class="mp__btn" id="pv" aria-label="Previous">${IC.prev}</button><button class="mp__pp" id="pp" aria-label="Play/Pause">${playing ? IC.pause : IC.play}</button><button class="mp__btn" id="nx" aria-label="Next">${IC.next}</button></div>
    <div>${TRACKS.map((k, i) => `<button class="mp__row ${i === cur ? 'on' : ''}" data-i="${i}">${k.t[lang]}</button>`).join('')}</div></div>
    <button class="mp__fab" id="fab" aria-label="${t.music}" aria-expanded="${open}">${IC.note}</button>`;
  $('#mp').classList.toggle('is-open', open);
  $('#fab').onclick = () => { open = !open; drawPlayer(); };
  $('#pp').onclick = () => { au.paused ? au.play().catch(() => {}) : au.pause(); };
  $('#pv').onclick = () => go(cur - 1); $('#nx').onclick = () => go(cur + 1);
  $('#sk').oninput = e => { au.currentTime = +e.target.value; };
  document.querySelectorAll('.mp__row').forEach(b => b.onclick = () => go(+b.dataset.i));
}
function go(i) { cur = (i + TRACKS.length) % TRACKS.length; au.src = TRACKS[cur].src; au.play().catch(() => {}); drawPlayer(); }
au.addEventListener('ended', () => go(cur + 1));
['play', 'pause', 'loadedmetadata'].forEach(ev => au.addEventListener(ev, drawPlayer));
au.addEventListener('timeupdate', () => { const s = $('#sk'); if (s) { s.max = au.duration || 0; s.value = au.currentTime; } });
$('#enter').onclick = () => { $('#gate').classList.add('off'); au.play().catch(() => {}); };

/* light gold embers: few particles, paused when tab hidden */
(function () {
  const c = $('#fx'), x = c.getContext('2d'); if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  let W, H, ps = [], raf = 0;
  const size = () => { W = c.width = innerWidth; H = c.height = innerHeight; ps = Array.from({ length: innerWidth < 768 ? 12 : 22 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.8 + .6, v: Math.random() * .3 + .12, p: Math.random() * 6 })); };
  const tick = () => { x.clearRect(0, 0, W, H); for (const p of ps) { p.y -= p.v; p.p += .01; if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; } x.beginPath(); x.arc(p.x + Math.sin(p.p) * 14, p.y, p.r, 0, 6.3); x.fillStyle = `rgba(233,185,73,${.35 + .3 * Math.sin(p.p * 3)})`; x.fill(); } raf = requestAnimationFrame(tick); };
  size(); addEventListener('resize', size);
  document.addEventListener('visibilitychange', () => { cancelAnimationFrame(raf); if (!document.hidden) tick(); });
  tick();
})();
render(); drawPlayer();
