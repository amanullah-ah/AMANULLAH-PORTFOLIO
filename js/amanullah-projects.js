/* ===== main ===== */
// ---- EDIT YOUR PROJECTS HERE ----
// name, tags (first tag = filter category), desc, url, icon, color (card glow), g (top line gradient)
var HUB="https://aman-tools46.vercel.app"; // TODO: replace each url below with the real project link
var P=[
 {n:"Tools46",t:["Tools","Hub"],d:"All-in-one online toolkit hub with free, fast utilities for creators and developers.",u:"https://aman-tools46.vercel.app",i:"grid",c:"#2f4bff",g:"linear-gradient(90deg,#2f4bff,#7a3cff)"},
 {n:"SEO Toolkit",t:["SEO","Tools"],d:"Upload an HTML file and get SEO tags, sitemap.xml and robots.txt generated automatically.",u:HUB,i:"search",c:"#10b981",g:"linear-gradient(90deg,#10b981,#06b6d4)"},
 {n:"YouTube SEO Generator",t:["SEO","Tools"],d:"Generate optimized titles, descriptions and tags for YouTube videos in one tap.",u:HUB,i:"play",c:"#ef4444",g:"linear-gradient(90deg,#ef4444,#f59e0b)"},
 {n:"Video Downloader",t:["Tools"],d:"Download videos from TikTok, YouTube, Facebook, Instagram and Pinterest links.",u:HUB,i:"down",c:"#06b6d4",g:"linear-gradient(90deg,#06b6d4,#3b82f6)"},
 {n:"BG Remover",t:["Tools","Design"],d:"Remove image backgrounds in seconds, directly in the browser.",u:HUB,i:"image",c:"#a855f7",g:"linear-gradient(90deg,#a855f7,#ec4899)"},
 {n:"Web to APK",t:["Apps","Tools"],d:"Turn any website URL into an Android APK with your own app name and icon.",u:HUB,i:"phone",c:"#22c55e",g:"linear-gradient(90deg,#22c55e,#84cc16)"},
 {n:"Web Hosting",t:["Hosting","Tools"],d:"Free HTML hosting with a simple admin panel. Upload a page and get a live link.",u:HUB,i:"cloud",c:"#3b82f6",g:"linear-gradient(90deg,#3b82f6,#6366f1)"},
 {n:"Image Host & Shortener",t:["Tools","Hosting"],d:"Image hosting and link shortener tools together in one clean website.",u:HUB,i:"link",c:"#f59e0b",g:"linear-gradient(90deg,#f59e0b,#ef4444)"},
 {n:"Sub4Unlock",t:["Tools"],d:"Link-locker where viewers subscribe or follow first to unlock the final link.",u:HUB,i:"lock",c:"#ec4899",g:"linear-gradient(90deg,#ec4899,#f43f5e)"},
 {n:"Live TV",t:["Entertainment","Apps"],d:"Watch live TV channels in a fast installable web app with PWA support.",u:"https://amanullah-tv.vercel.app",i:"tv",c:"#f43f5e",g:"linear-gradient(90deg,#f43f5e,#f59e0b)"},
 {n:"Movie Panel",t:["Entertainment","Apps"],d:"Movie admin panel to add and manage movies, wrapped as an Android app.",u:HUB,i:"film",c:"#8b5cf6",g:"linear-gradient(90deg,#8b5cf6,#3b82f6)"},
 {n:"Source Store",t:["Store","Apps"],d:"Store for free and paid source codes with unlock codes and a hidden admin panel.",u:HUB,i:"bag",c:"#14b8a6",g:"linear-gradient(90deg,#14b8a6,#22c55e)"},
 {n:"SkillzUp",t:["Store","Education"],d:"Mobile-first digital course selling web app with user and admin panels.",u:HUB,i:"cap",c:"#6366f1",g:"linear-gradient(90deg,#6366f1,#a855f7)"},
 {n:"Support Chat",t:["Apps"],d:"Real-time support chat app packaged as an Android APK.",u:HUB,i:"chat",c:"#0ea5e9",g:"linear-gradient(90deg,#0ea5e9,#2f4bff)"},
 {n:"Portfolio",t:["Portfolio"],d:"Creative developer portfolio with gallery, skills, projects and contact form.",u:"https://amanullah-visual.vercel.app",i:"user",c:"#2f4bff",g:"linear-gradient(90deg,#2f4bff,#06b6d4)"}
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
function render(){
 var list=P.filter(function(p){
  if(cur!=="All"&&p.t.indexOf(cur)<0)return false;
  if(!qs)return true;
  return (p.n+" "+p.d+" "+p.t.join(" ")).toLowerCase().indexOf(qs)>-1});
 grid.innerHTML=list.map(function(p,k){
  return '<a class="card" href="'+esc(p.u)+'" target="_blank" rel="noopener" style="--g:'+p.g+';--c:'+p.c+'55;--i:'+k+'">'
  +'<div class="th"><svg viewBox="0 0 24 24" aria-hidden="true">'+IC[p.i]+'</svg><img loading="lazy" alt="" src="'+shot(p.u)+'" onerror="this.remove()"></div>'
  +'<div class="bd"><div class="tags">'+p.t.map(function(x){return '<span>'+esc(x)+'</span>'}).join("")+'</div>'
  +'<h3>'+esc(p.n)+'</h3><p>'+esc(p.d)+'</p>'
  +'<div class="ft"><code>'+esc(host(p.u))+'</code><b>EXPLORE &#8599;</b></div></div></a>'}).join("");
 emp.hidden=list.length>0;
 cnt.textContent=list.length+" project"+(list.length===1?"":"s")+(cur!=="All"?" in "+cur:"")}
chips.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;cur=b.dataset.c;[].forEach.call(chips.children,function(x){x.classList.toggle("on",x===b)});render()});
document.getElementById("q").addEventListener("input",function(e){qs=e.target.value.trim().toLowerCase();render()});
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
