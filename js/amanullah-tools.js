/* ===== main ===== */
// ---- EDIT YOUR TOOLS HERE ----
// img = path/URL of the tool logo (put your PNGs in the img/ folder). If missing, auto artwork shows. u = tool link (TODO: set real links)
// n=name, t=tags (first tag = filter category), d=description (search only), u=url, i=icon, c=icon color, g=unused
var HUB="https://aman-tools46.vercel.app"; // TODO: replace each url below with the real project link
var P=[
];
var IC={
grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
play:'<rect x="3" y="5" width="18" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/>',
down:'<path d="M12 4v11m-4-4 4 4 4-4"/><path d="M5 20h14"/>',
image:'<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.6"/><path d="m4 18 5-5 4 4 3-3 4 4"/>',
phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
cloud:'<path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 10.5 3.8 3.8 0 0 1 17.5 18z"/>',
link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
tv:'<rect x="3" y="6" width="18" height="12" rx="3"/><path d="m9 3 3 3 3-3"/>',
film:'<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M8 4v16M16 4v16M3 9h5M3 15h5M16 9h5M16 15h5"/>',
bag:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
cap:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.500 6-3v-5"/>',
chat:'<path d="M4 5h16v11H9l-5 4z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'
};
var cats=["All"];P.forEach(function(p){p.t.forEach(function(x){if(cats.indexOf(x)<0)cats.push(x)})});
var cur="All",qs="",grid=document.getElementById("grid"),chips=document.getElementById("chips"),cnt=document.getElementById("count"),emp=document.getElementById("empty");
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function shot(u){return "https://image.thum.io/get/width/600/crop/400/"+u}
function host(u){try{return new URL(u).host}catch(_){return u}}
chips.innerHTML=cats.map(function(c){return '<button type="button" data-c="'+esc(c)+'"'+(c==="All"?' class="on"':'')+'>'+esc(c)+'</button>'}).join("");
function art(p){
 var cl=(p.g||"").match(/#[0-9a-fA-F]{3,8}/g)||[p.c,p.c],a=cl[0],b=cl[1]||cl[0];
 var s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+a+'"/><stop offset="1" stop-color="'+b+'"/></linearGradient><clipPath id="k"><rect width="200" height="200" rx="46"/></clipPath></defs><g clip-path="url(#k)"><rect width="200" height="200" fill="url(#g)"/><circle cx="170" cy="25" r="80" fill="#fff" opacity=".12"/><circle cx="25" cy="190" r="60" fill="#000" opacity=".18"/></g><rect x="46" y="46" width="108" height="108" rx="28" fill="#fff"/><g transform="translate(62 62) scale(3.083)" fill="none" stroke="'+p.c+'" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+IC[p.i]+'</g></svg>';
 return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(s)}
function render(){
 var list=P.filter(function(p){
  if(cur!=="All"&&p.t.indexOf(cur)<0)return false;
  if(!qs)return true;
  return (p.n+" "+p.d+" "+p.t.join(" ")).toLowerCase().indexOf(qs)>-1});
 grid.innerHTML=list.map(function(p,k){
  return '<a class="card" href="'+esc(p.u)+'" target="_blank" rel="noopener" aria-label="'+esc(p.n)+'" data-p="'+P.indexOf(p)+'" style="--c:'+p.c+';--i:'+k+'">'
  +'<span class="im"><img src="'+esc(p.img||art(p))+'" alt="'+esc(p.n)+'" loading="lazy" decoding="async" onerror="this.onerror=null;this.src=art(P['+P.indexOf(p)+'])"></span>'
  +'<span class="bd"><h3>'+esc(p.n)+'</h3></span></a>'}).join("");
 emp.hidden=list.length>0;
 cnt.textContent=list.length+" tool"+(list.length===1?"":"s")+(cur!=="All"?" in "+cur:"")}
chips.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;cur=b.dataset.c;[].forEach.call(chips.children,function(x){x.classList.toggle("on",x===b)});render()});
document.getElementById("q").addEventListener("input",function(e){qs=e.target.value.trim().toLowerCase();render()});

/* ===== tool popup ===== */
(function(){
var m=document.createElement("div");m.className="pop";m.hidden=true;
var X='<svg viewBox="0 0 24 24" aria-hidden="true">';
m.innerHTML='<div class="pop-bg" data-x></div><div class="pop-box" role="dialog" aria-modal="true" aria-labelledby="pop-n"><div class="pop-grab"></div><button type="button" class="pop-x" data-x aria-label="Close">'+X+'<path d="M6 6l12 12M18 6 6 18"/></svg></button><div class="pop-h"><span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"></svg></span><div class="pop-t"><span class="pop-tag" id="pop-g"></span><h4 id="pop-n"></h4><div class="pop-ver">Verified by AMAN ULLAH</div></div></div><p id="pop-d"></p><code id="pop-h"></code><div class="pop-b"><a class="pop-o" target="_blank" rel="noopener" href="#">Open app / Launch tool '+X+'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg></a><button type="button" class="pop-s">'+X+'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4"/></svg><span>Share</span></button><button type="button" class="pop-f">'+X+'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.2 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/></svg><span>Fav</span></button></div></div>';
document.body.appendChild(m);
var box=m.querySelector(".pop-box"),svg=m.querySelector(".ic svg"),n=m.querySelector("#pop-n"),d=m.querySelector("#pop-d"),h=m.querySelector("#pop-h"),g=m.querySelector("#pop-g"),o=m.querySelector(".pop-o"),sb=m.querySelector(".pop-s"),fb=m.querySelector(".pop-f"),fl=fb.querySelector("span"),last=null,cp=null;
function favs(){try{return JSON.parse(localStorage.getItem("aman_favs")||"[]")}catch(_){return[]}}
function saveFavs(a){try{localStorage.setItem("aman_favs",JSON.stringify(a))}catch(_){}}
function paintFav(){var on=favs().indexOf(cp.n)>-1;fb.classList.toggle("on",on);fl.textContent=on?"Saved":"Fav"}
function show(p,from){last=from||null;cp=p;box.style.setProperty("--c",p.c);svg.innerHTML=IC[p.i];n.textContent=p.n;g.textContent=p.t.join(" & ");d.textContent=p.d||"";d.hidden=!p.d;h.textContent=host(p.u);o.href=p.u;sb.querySelector("span").textContent="Share";paintFav();m.hidden=false;void m.offsetWidth;m.classList.add("on");o.focus({preventScroll:true})}
function hide(){m.classList.remove("on");setTimeout(function(){m.hidden=true},260);if(last&&last.focus)last.focus({preventScroll:true})}
grid.addEventListener("click",function(e){var a=e.target.closest("a.card");if(!a)return;e.preventDefault();var p=P[+a.dataset.p];if(p)show(p,a)});
m.addEventListener("click",function(e){if(e.target.closest("[data-x]"))hide();else if(e.target.closest(".pop-o"))setTimeout(hide,50)});
sb.addEventListener("click",function(){var data={title:cp.n,text:cp.d,url:cp.u};
 if(navigator.share){navigator.share(data).catch(function(){})}
 else if(navigator.clipboard){navigator.clipboard.writeText(cp.u).then(function(){var s=sb.querySelector("span");s.textContent="Link copied";setTimeout(function(){s.textContent="Share"},1600)}).catch(function(){})}});
fb.addEventListener("click",function(){var a=favs(),k=a.indexOf(cp.n);if(k>-1)a.splice(k,1);else a.push(cp.n);saveFavs(a);paintFav()});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!m.hidden)hide()});
/* swipe down to close */
var y0=null;
box.addEventListener("touchstart",function(e){if(box.scrollTop<=0)y0=e.touches[0].clientY},{passive:true});
box.addEventListener("touchend",function(e){if(y0!==null&&e.changedTouches[0].clientY-y0>90)hide();y0=null},{passive:true});
})();
document.getElementById("yr").textContent=new Date().getFullYear();
render();

;
/* ===== desktop-fix-js ===== */
(function(){
  /* 1) viewport must never drift sideways (scrollIntoView / focus / anchors / drag-select) */
  function lock(){ if(window.scrollX!==0){ window.scrollTo(0, window.scrollY); } }
  addEventListener('scroll', lock, {passive:true});
  addEventListener('resize', lock);
  document.addEventListener('focusin', function(){ requestAnimationFrame(lock); });
  /* 2) scrollIntoView with inline:'center' moves the whole page on desktop -> scroll only the inner strip */
  var _sv = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(o){
    if(o && typeof o==='object' && o.inline && o.inline!=='nearest'){
      var p=this.parentElement; 
      while(p && p.scrollWidth<=p.clientWidth+1) p=p.parentElement;
      if(p && p!==document.documentElement && p!==document.body){
        var r=this.getBoundingClientRect(), pr=p.getBoundingClientRect();
        p.scrollTo({left:p.scrollLeft+(r.left-pr.left)-(pr.width-r.width)/2, behavior:(o.behavior||'auto')});
        return;
      }
      o=Object.assign({},o,{inline:'nearest'});
    }
    return _sv.call(this,o);
  };
  /* 3) locking page scroll (menu / lightbox) must not remove the scrollbar and shift the layout */
  document.documentElement.style.scrollbarGutter='stable';
})();

;
/* ===== nv-js ===== */
(function(){
var nav=document.getElementById('nvd');if(!nav)return;
var links=[].slice.call(nav.querySelectorAll('a')),bar=document.getElementById('bar'),cur=null;
var file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
function set(k){if(k===cur)return;cur=k;links.forEach(function(a){var on=a.dataset.page===k;a.classList.toggle('on',on);if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})}
function spy(){
 if(file!=='index.html'){set(file);return}
 var f=document.getElementById('faq'),y=innerHeight/2,inF=false;
 if(f){var r=f.getBoundingClientRect();inF=r.top<=y&&r.bottom>y}
 set(inF?'faq':'index.html')
}
var t=false;addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(function(){t=false;spy()})}},{passive:true});
links.forEach(function(a){a.addEventListener('click',function(){if(navigator.vibrate){try{navigator.vibrate(10)}catch(_){}}})});
if(bar&&window.MutationObserver)new MutationObserver(function(){nav.classList.toggle('nv-off',bar.classList.contains('open'))}).observe(bar,{attributes:true,attributeFilter:['class']});
addEventListener('focusin',function(e){if(/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName))nav.classList.add('nv-off')});
addEventListener('focusout',function(){setTimeout(function(){nav.classList.remove('nv-off')},120)});
spy();
})();
