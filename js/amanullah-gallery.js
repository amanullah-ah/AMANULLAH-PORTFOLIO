/* ===== gallery page ===== */
/* Apni photos yahan add / change karo */
var PHOTOS=[
];

(function(){
var N=PHOTOS.length,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function $(id){return document.getElementById(id)}
function pad(n){return n<10?'0'+n:''+n}
$('yr').textContent=new Date().getFullYear();
var gc=$('gc'),cnt=$('gcnt'),cl=$('count');
var EXP='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';

/* ---------- cards ---------- */
PHOTOS.forEach(function(src,i){
 var f=document.createElement('figure');f.className='gi';f.tabIndex=0;f.setAttribute('role','button');f.setAttribute('aria-label','Open photo '+(i+1));
 f.style.setProperty('--d',(i%6)*70+'ms');
 var im=new Image();im.alt='Photo '+(i+1);im.loading='lazy';im.decoding='async';
 im.onload=im.onerror=function(){f.classList.add('ld')};
 im.src=src;f.appendChild(im);
 f.insertAdjacentHTML('beforeend','<span class="tg">Moment '+pad(i+1)+'</span><span class="ex">'+EXP+'</span>');
 f.addEventListener('click',function(){openV(i)});
 f.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openV(i)}});
 gc.appendChild(f);
});
var figs=[].slice.call(gc.children);
cl.textContent=N+' moments';
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:0,rootMargin:'0px 0px -4% 0px'});
 figs.forEach(function(f){io.observe(f)});
}else figs.forEach(function(f){f.classList.add('in')});

/* ---------- count up ---------- */
(function(){
 if(rm){cnt.textContent=N;return}
 var t0=performance.now();
 (function stp(n){var k=Math.min(1,(n-t0)/1200);cnt.textContent=Math.round(N*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(stp)})(t0);
})();

/* ---------- layout switcher ---------- */
var tb=$('gtb'),bt=[].slice.call(tb.querySelectorAll('button'));
bt.forEach(function(b){b.addEventListener('click',function(){
 if(b.classList.contains('on'))return;
 bt.forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false')});
 b.classList.add('on');b.setAttribute('aria-pressed','true');
 gc.style.opacity=0;
 setTimeout(function(){gc.className='gc'+(b.dataset.m?' '+b.dataset.m:'');gc.style.opacity=1},rm?0:220);
})});

/* ---------- photo viewer ---------- */
var lb=$('lb'),st=$('lbst'),vi=$('lbi'),bg=$('lbbg'),lc=$('lbc'),th=$('lbth'),op=$('lbo'),pl=$('lbp');
var cur=0,on=false,tk=0,playing=false,pt=0,last=null,pushed=false;
var thumbs=PHOTOS.map(function(src,i){
 var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Photo '+(i+1));
 var im=new Image();im.src=src;im.alt='';im.loading='lazy';im.draggable=false;b.appendChild(im);
 b.addEventListener('click',function(){if(i!==cur){show(i,i>cur?1:-1);if(playing)restart()}});
 th.appendChild(b);return b});
var PLAY='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',PAUSE='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
function meta(){
 lc.textContent=pad(cur+1)+' / '+pad(N);op.href=PHOTOS[cur];bg.style.backgroundImage='url("'+PHOTOS[cur]+'")';
 thumbs.forEach(function(b,i){b.classList.toggle('on',i===cur)});
 var b=thumbs[cur];th.scrollTo({left:b.offsetLeft-(th.clientWidth-b.offsetWidth)/2,behavior:rm?'auto':'smooth'});
}
function show(i,dir){
 cur=(i+N)%N;meta();
 var my=++tk;
 vi.style.transition='none';vi.style.opacity='0';vi.style.transform='translateX('+(dir*36)+'px) scale(.96)';
 var im=new Image();
 im.onload=im.onerror=function(){
  if(my!==tk)return;
  vi.src=PHOTOS[cur];vi.alt='Photo '+(cur+1);
  void vi.offsetWidth;
  vi.style.transition='';vi.style.opacity='1';vi.style.transform='';
  [(cur+1)%N,(cur-1+N)%N].forEach(function(k){var p=new Image();p.src=PHOTOS[k]});
 };
 im.src=PHOTOS[cur];
}
function openV(i){
 last=document.activeElement;on=true;lb.classList.add('on');lb.setAttribute('aria-hidden','false');
 document.documentElement.style.overflow='hidden';
 if(!pushed){try{history.pushState({lb:1},'');pushed=true}catch(_){}}
 show(i,0);$('lbx').focus({preventScroll:true});
}
function closeV(fromPop){
 if(!on)return;on=false;stop();lb.classList.remove('on');lb.setAttribute('aria-hidden','true');
 document.documentElement.style.overflow='';
 if(pushed){pushed=false;if(!fromPop){try{history.back()}catch(_){}}}
 if(last&&last.focus)last.focus({preventScroll:true});
}
function nav(d){show(cur+d,d);if(playing)restart()}
function restart(){clearInterval(pt);pt=setInterval(function(){show(cur+1,1)},3500)}
function stop(){playing=false;clearInterval(pt);pl.classList.remove('act');pl.innerHTML=PLAY;pl.setAttribute('aria-label','Start slideshow')}
pl.addEventListener('click',function(){
 if(playing){stop();return}
 playing=true;pl.classList.add('act');pl.innerHTML=PAUSE;pl.setAttribute('aria-label','Pause slideshow');restart();
});
$('lbx').addEventListener('click',function(){closeV()});
$('lbpv').addEventListener('click',function(){nav(-1)});
$('lbnx').addEventListener('click',function(){nav(1)});
addEventListener('popstate',function(){if(on)closeV(true)});
addEventListener('keydown',function(e){
 if(!on)return;
 if(e.key==='Escape')closeV();
 else if(e.key==='ArrowRight')nav(1);
 else if(e.key==='ArrowLeft')nav(-1);
});
/* swipe: left/right = next/prev, down = close, tap on empty area = close */
var sx=0,sy=0,dx=0,dy=0,drag=false;
st.addEventListener('pointerdown',function(e){drag=true;sx=e.clientX;sy=e.clientY;dx=dy=0;vi.style.transition='none';try{st.setPointerCapture(e.pointerId)}catch(_){}});
st.addEventListener('pointermove',function(e){
 if(!drag)return;dx=e.clientX-sx;dy=e.clientY-sy;
 var v=Math.abs(dy)>Math.abs(dx)&&dy>0;
 vi.style.transform='translate('+(v?0:dx)+'px,'+(v?dy:0)+'px)';
 if(v)vi.style.opacity=String(Math.max(.3,1-dy/380));
});
function end(e){
 if(!drag)return;drag=false;vi.style.transition='';vi.style.transform='';vi.style.opacity='1';
 if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy))nav(dx<0?1:-1);
 else if(dy>100&&dy>Math.abs(dx))closeV();
 else if(Math.abs(dx)<6&&Math.abs(dy)<6&&e&&e.target===st)closeV();
}
st.addEventListener('pointerup',end);
st.addEventListener('pointercancel',function(){end(null)});
})();

;
/* ===== quick nav ===== */
(function(){
var nav=document.getElementById('nvd');if(!nav)return;
var links=[].slice.call(nav.querySelectorAll('a')),cur=null;
var file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
function set(k){if(k===cur)return;cur=k;links.forEach(function(a){var on=a.dataset.page===k;a.classList.toggle('on',on);if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})}
set(file);
links.forEach(function(a){a.addEventListener('click',function(){if(navigator.vibrate){try{navigator.vibrate(10)}catch(_){}}})});
addEventListener('focusin',function(e){if(/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName))nav.classList.add('nv-off')});
addEventListener('focusout',function(){setTimeout(function(){nav.classList.remove('nv-off')},120)});
})();

;

/* ===== real map: Bhakkar (city) + Notak (village) ===== */
(function(){
var el=document.getElementById('lmap');if(!el)return;
/* names / coordinates: yahan se change kar sakte ho */
var CITY={lat:31.6334,lon:71.0654,name:'BHAKKAR',tag:'City'};
var VIL={lat:31.4833,lon:71.0333,name:'NOTAK',tag:'Village'};
if(typeof L==='undefined'){el.classList.add('nomap');return}
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var map=L.map(el,{zoomControl:false,scrollWheelZoom:false,attributionControl:true,zoomSnap:.25,worldCopyJump:false,minZoom:6,maxZoom:18});
L.control.zoom({position:'bottomright'}).addTo(map);
map.attributionControl.setPrefix(false);
var LAY={
 street:L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'}),
 dark:L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',{subdomains:'abcd',maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>'}),
 sat:L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:18,attribution:'Tiles &copy; Esri'})
};
var cur=LAY.street.addTo(map);
var failed=0;
Object.keys(LAY).forEach(function(k){LAY[k].on('tileerror',function(){failed++;if(failed>6&&LAY[k]===cur)el.classList.add('nomap')});LAY[k].on('tileload',function(){failed=0;el.classList.remove('nomap')})});
/* pins */
var TEAR='<path d="M20 50S4 31 4 19a16 16 0 0 1 32 0c0 12-16 31-16 31z" fill="url(#%G%)" stroke="#fff" stroke-opacity=".6" stroke-width="1.5"/><circle cx="20" cy="19" r="6.5" fill="#fff"/>';
var PH=window.PK_PHOTO||'';
function pin(p,cls,g1,g2,id){
 var html='<i class="ring"></i><div class="hd"><div class="tag"><small>'+p.tag+'</small><b>'+p.name+'</b></div><svg class="mk" viewBox="0 0 40 52" aria-hidden="true"><defs><linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+g1+'"/><stop offset="1" stop-color="'+g2+'"/></linearGradient></defs>'+TEAR.replace('%G%',id)+(cls==='pv'&&PH?'<circle cx="20" cy="19" r="14.5" fill="#fff"/><clipPath id="'+id+'c"><circle cx="20" cy="19" r="13.2"/></clipPath><image href="'+PH+'" x="6.8" y="5.8" width="26.4" height="26.4" preserveAspectRatio="xMidYMid slice" clip-path="url(#'+id+'c)"/>':'')+'</svg></div>';
 return L.marker([p.lat,p.lon],{icon:L.divIcon({className:'lp '+cls,html:html,iconSize:[0,0],iconAnchor:[0,0]}),keyboard:true,title:p.name+' ('+p.tag+')',riseOnHover:true}).addTo(map);
}
var mc=pin(CITY,'pc','#4d7bff','#9b4dff','lpg1'),mv=pin(VIL,'pv','#ffb347','#ff5fa2','lpg2');
/* route + distance */
var R=6371,r=Math.PI/180,a=Math.sin((VIL.lat-CITY.lat)*r/2),b=Math.sin((VIL.lon-CITY.lon)*r/2);
var km=2*R*Math.asin(Math.sqrt(a*a+Math.cos(CITY.lat*r)*Math.cos(VIL.lat*r)*b*b));
L.polyline([[CITY.lat,CITY.lon],[VIL.lat,VIL.lon]],{color:'#ff5fa2',weight:3,opacity:.9,dashArray:'7 9',lineCap:'round',interactive:false}).addTo(map);
L.marker([(CITY.lat+VIL.lat)/2,(CITY.lon+VIL.lon)/2],{interactive:false,keyboard:false,icon:L.divIcon({className:'lp km',html:'<span class="kmb">\u2248 '+Math.round(km)+' km</span>',iconSize:[0,0]})}).addTo(map);
/* Google embed */
var gm=document.getElementById('gm'),gsrc='';
function gset(){
 if(!gm)return;
 var u=view==='vil'?'https://maps.google.com/maps?q='+VIL.lat+','+VIL.lon+'&z=15&hl=en&output=embed'
  :view==='city'?'https://maps.google.com/maps?q='+CITY.lat+','+CITY.lon+'&z=15&hl=en&output=embed'
  :'https://maps.google.com/maps?q='+CITY.lat+','+CITY.lon+'&z=11&hl=en&output=embed';
 if(u!==gsrc){gsrc=u;gm.src=u}
}
function gon(){return el.classList.contains('gmode')}
/* views */
var view='both',tc=document.getElementById('tcity'),tv=document.getElementById('tvil');
var fitOpt={paddingTopLeft:[50,95],paddingBottomRight:[50,40],maxZoom:13,animate:!rm,duration:1.1};
map.fitBounds([[CITY.lat,CITY.lon],[VIL.lat,VIL.lon]],{paddingTopLeft:[50,95],paddingBottomRight:[50,40],maxZoom:13,animate:false});
function mark(){
 [mc,mv].forEach(function(m,i){var e=m.getElement();if(e)e.classList.toggle('on',(i===0&&view==='city')||(i===1&&view==='vil'))});
 tc.classList.toggle('on',view==='city');tv.classList.toggle('on',view==='vil');
 tc.setAttribute('aria-pressed',view==='city');tv.setAttribute('aria-pressed',view==='vil');
}
function go(v){
 view=v;
 if(v==='both')map.flyToBounds([[CITY.lat,CITY.lon],[VIL.lat,VIL.lon]],fitOpt);
 else{var p=v==='city'?CITY:VIL;map.flyTo([p.lat+.0012,p.lon],15,{animate:!rm,duration:1.2})}
 mark();
 if(window.PK3D)PK3D.focus(v);
 if(gon())gset();
}
tc.addEventListener('click',function(){go(view==='city'?'both':'city')});
tv.addEventListener('click',function(){go(view==='vil'?'both':'vil')});
mc.on('click',function(){go('city')});mv.on('click',function(){go('vil')});
document.getElementById('mrst').addEventListener('click',function(){go('both')});
/* style switch */
var sw=document.getElementById('lsw'),sb=[].slice.call(sw.querySelectorAll('button'));
sb.forEach(function(x){x.addEventListener('click',function(){
 if(x.classList.contains('on'))return;
 sb.forEach(function(y){y.classList.remove('on');y.setAttribute('aria-pressed','false')});x.classList.add('on');x.setAttribute('aria-pressed','true');
 el.classList.remove('emode');
 if(x.dataset.s==='dark'){el.classList.remove('m3mode','gmode');el.classList.add('emode');return}
 if(x.dataset.s==='3d'){el.classList.remove('gmode');el.classList.add('m3mode');if(window.PK3D)PK3D.focus(view);return}
 el.classList.remove('m3mode');
 if(x.dataset.s==='google'){el.classList.add('gmode');gset();return}
 el.classList.remove('gmode');
 if(!map.hasLayer(cur))cur=LAY[x.dataset.s].addTo(map);else{map.removeLayer(cur);cur=LAY[x.dataset.s].addTo(map)}
 setTimeout(function(){map.invalidateSize()},50);
})});
/* wheel zoom only after the map is clicked (so page scroll never gets stuck) */
map.on('click focus',function(){map.scrollWheelZoom.enable()});
el.addEventListener('mouseleave',function(){map.scrollWheelZoom.disable()});
if(!el.classList.contains('m3mode')){el.classList.add('gmode');gset()}
mark();
addEventListener('load',function(){map.invalidateSize()});
if(window.ResizeObserver)new ResizeObserver(function(){map.invalidateSize()}).observe(el);
})();
