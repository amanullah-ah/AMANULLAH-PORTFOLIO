/* ===== main ===== */
// Edit your name here
var NAME="Aman Ullah";
(function(){
  var up=NAME.toUpperCase(),p=NAME.split(" ");
  (function(){var br=document.getElementById("brand"),w=up.split(" "),a=document.createElement("span"),b=document.createElement("span");a.className="b1";a.textContent=w[0];br.textContent="";br.setAttribute("aria-label",NAME);br.appendChild(a);if(w.length>1){b.className="b2";b.textContent=w.slice(1).join(" ");br.appendChild(b)}})();
  var f=document.getElementById("first");f.querySelector(".a").textContent=up;
  
  document.getElementById("who").textContent=NAME;
  document.getElementById("ft").textContent=NAME;
  document.getElementById("ini").textContent=p.map(function(w){return w[0]}).join("").slice(0,2).toUpperCase();
  document.title=up+" | Creative Developer Portfolio";
  var bar=document.getElementById("bar"),ov=document.getElementById("ov"),bg=document.getElementById("bg"),root=document.documentElement;
  var mvT;function tg(o){clearTimeout(mvT);bar.classList.add("mv");mvT=setTimeout(function(){bar.classList.remove("mv")},800);bar.classList.toggle("open",o);ov.classList.toggle("on",o);bg.setAttribute("aria-expanded",o);root.style.overflow=o?"hidden":""}
  bg.onclick=function(){tg(!bar.classList.contains("open"))};
  ov.onclick=function(){tg(false)};
  document.getElementById("menu").onclick=function(e){if(e.target.closest("a"))tg(false)};
  addEventListener("keydown",function(e){if(e.key==="Escape")tg(false)});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");e.target.querySelectorAll("[data-w]").forEach(function(b){b.style.width=b.dataset.w+"%"})}})},{threshold:.15});
  document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
  

  var pg=document.getElementById("pg");
  var pgH=1,pgT=false;function pgM(){pgH=Math.max(1,document.body.scrollHeight-innerHeight)}pgM();addEventListener("resize",pgM);addEventListener("load",pgM);if(window.ResizeObserver)new ResizeObserver(pgM).observe(document.body);addEventListener("scroll",function(){if(pgT)return;pgT=true;requestAnimationFrame(function(){pgT=false;pg.style.width=(scrollY/pgH*100)+"%"})},{passive:true});
  var W=["websites","Telegram bots","Android apps","creative designs"],wi=0,ci=0,del=false,ty=document.getElementById("ty");
  (function t(){var w=W[wi];ci+=del?-1:1;ty.textContent=w.slice(0,ci);var d=del?40:90;if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;wi=(wi+1)%W.length;d=300}setTimeout(t,d)})();
  var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var n=+e.target.dataset.n,i=0,id=setInterval(function(){i++;e.target.textContent=Math.round(n*i/40);if(i>=40)clearInterval(id)},30)})},{threshold:.6});
  document.querySelectorAll("[data-n]").forEach(function(el){co.observe(el)});
  var ph=document.getElementById("ph"),hero=document.getElementById("home");
  hero.addEventListener("pointermove",function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;ph.style.transform="perspective(700px) rotateY("+x*12+"deg) rotateX("+(-y*10)+"deg)"});
  hero.addEventListener("pointerleave",function(){ph.style.transform=""});
})();

;
/* ===== main ===== */
(function(){var cz=document.getElementById("cz"),f=document.getElementById("czf"),sec=document.getElementById("creative");if(!cz)return;
var x=-25,target=42,user=false,vis=false,t0=0,red=matchMedia("(prefers-reduced-motion:reduce)").matches;
function set(v){x=v;cz.style.setProperty("--x",v.toFixed(2))}
if(red){set(42);return}
new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis&&!t0){t0=performance.now()}},{threshold:.3}).observe(sec);
function tick(now){requestAnimationFrame(tick);if(!vis||!t0||user)return;var t=(now-t0)/1000;
if(t<1.6){var p=Math.min(1,Math.max(0,(t-.5)/1.1));p=1-Math.pow(1-p,3);set(-25+(42+25)*p)}else{set(42+10*Math.sin((t-1.6)*.9))}}
requestAnimationFrame(tick);
function mv(e){var r=f.getBoundingClientRect();set(Math.max(2,Math.min(98,(e.clientX-r.left)/r.width*100)))}
f.addEventListener("pointerdown",function(e){user=true;mv(e);try{f.setPointerCapture(e.pointerId)}catch(_){}f.addEventListener("pointermove",mv)});
function up(e){f.removeEventListener("pointermove",mv)}
f.addEventListener("pointerup",up);f.addEventListener("pointercancel",up);
f.addEventListener("keydown",function(e){if(e.key==="ArrowLeft"){user=true;set(Math.max(2,x-5))}if(e.key==="ArrowRight"){user=true;set(Math.min(98,x+5))}});
f.tabIndex=0;
})();

;
/* ===== main ===== */
(function(){var T=document.getElementById("rfT");if(!T)return;var P=document.getElementById("rfP"),D=document.getElementById("rfD"),N=document.getElementById("rfN"),Y=document.getElementById("rfY");
function u(){var n=new Date(),h=n.getHours(),m=n.getMinutes(),h12=h%12||12;T.innerHTML=(h12<10?"0":"")+h12+"<i>:</i>"+(m<10?"0":"")+m;P.textContent=h<12?"AM":"PM";
D.textContent=n.toLocaleDateString("en-US",{weekday:"long"});N.textContent=n.getDate()+" "+n.toLocaleDateString("en-US",{month:"long"});Y.textContent=n.getFullYear()}
u();setInterval(u,1000)})();

;
/* ===== main ===== */
(function(){var L=[].slice.call(document.querySelectorAll(".nf-list li"));if(!L.length)return;
var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle("act",e.isIntersecting)})},{rootMargin:"-46% 0px -46% 0px",threshold:0});
L.forEach(function(li){io.observe(li);
function mv(e){var r=li.getBoundingClientRect();li.style.setProperty("--mx",(e.clientX-r.left)+"px");li.style.setProperty("--my",(e.clientY-r.top)+"px")}
li.addEventListener("pointermove",mv);li.addEventListener("pointerdown",mv);
li.addEventListener("pointerleave",function(){li.style.removeProperty("--mx");li.style.removeProperty("--my")})})})();

;
/* ===== main ===== */
(function(){var L=document.querySelectorAll(".nf-list li");if(!L.length)return;
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("show");o.unobserve(e.target)}})},{threshold:.25});
L.forEach(function(l){o.observe(l)})})();

;
/* ===== main ===== */
(function(){var G=document.getElementById("glg");if(!G)return;
var items=[].slice.call(G.children),btns=[].slice.call(document.querySelectorAll(".gl-bar button")),E=document.getElementById("gle");
/* load + fallback */
items.forEach(function(it){var im=it.querySelector("img");function ok(){it.classList.add("ld")}
im.addEventListener("load",ok);
im.addEventListener("error",function(){if(!im.dataset.fb){im.dataset.fb=1;im.src=im.dataset.full}else ok()});
if(im.complete&&im.naturalWidth)ok()});
/* reveal on scroll */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("vis");io.unobserve(e.target)}})},{threshold:.12});
items.forEach(function(i){io.observe(i)});
/* colour filters */
var names={orig:"Original",bw:"B&W",sepia:"Sepia",warm:"Warm",cool:"Cool",vivid:"Vivid"};
function look(f){G.dataset.look=f;var lb=document.getElementById("gll");if(lb)lb.dataset.look=f;btns.forEach(function(b){b.classList.toggle("on",b.dataset.f===f)});var t=document.getElementById("gllk");if(t)t.textContent=names[f]+" filter"}
G.dataset.look="orig";
btns.forEach(function(b){b.addEventListener("click",function(){look(b.dataset.f);b.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"})})});
/* save hearts */
G.addEventListener("click",function(e){var h=e.target.closest(".gl-h");if(h){e.stopPropagation();h.classList.toggle("liked")}});
/* lightbox */
var L=document.getElementById("gll");document.body.appendChild(L);var LI=document.getElementById("gli"),LT=document.getElementById("glt"),LC=document.getElementById("glc"),idx=0,vis=[];
function open(i){vis=items.filter(function(x){return!x.hidden});idx=vis.indexOf(i);if(idx<0)return;show(0);L.dataset.look=G.dataset.look;L.hidden=false;document.body.style.overflow="hidden"}
function show(d){var it=vis[idx];LI.classList.remove("sl");LI.style.setProperty("--dx",(d>0?40:-40)+"px");LI.src=it.dataset.full;(document.getElementById("gllk")||{}).textContent=names[G.dataset.look]+" filter";LI.alt=it.dataset.title;LT.textContent=it.dataset.title;LC.textContent=(idx+1)+" / "+vis.length;if(d){void LI.offsetWidth;LI.classList.add("sl")}}
function step(d){if(!vis.length)return;idx=(idx+d+vis.length)%vis.length;show(d)}
function close(){L.hidden=true;document.body.style.overflow="";LI.removeAttribute("src")}
G.addEventListener("click",function(e){var f=e.target.closest(".gl-i");if(f&&!e.target.closest(".gl-h"))open(f)});
document.getElementById("glx").onclick=close;document.getElementById("glp").onclick=function(){step(-1)};document.getElementById("gln").onclick=function(){step(1)};
L.addEventListener("click",function(e){if(e.target===L||e.target.classList.contains("gl-st"))close()});
document.addEventListener("keydown",function(e){if(L.hidden)return;if(e.key==="Escape")close();if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1)});
var sx=null;L.addEventListener("touchstart",function(e){sx=e.touches[0].clientX},{passive:true});
L.addEventListener("touchend",function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>50)step(dx<0?1:-1)},{passive:true});
})();

;
/* ===== main ===== */
(function(){var c=document.getElementById("whc");if(!c||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
c.style.transform="perspective(900px) rotateY("+((x-.5)*10).toFixed(2)+"deg) rotateX("+((.5-y)*10).toFixed(2)+"deg)";c.style.setProperty("--gx",(x*100)+"%");c.style.setProperty("--gy",(y*100)+"%")});
c.addEventListener("pointerleave",function(){c.style.transform="";c.style.removeProperty("--gx");c.style.removeProperty("--gy")})})();

;
/* ===== main ===== */
(function(){
var sec=document.getElementById('itsme'),c=document.getElementById('imc'),cv=document.getElementById('imp');
if(!sec||!c)return;
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(!rm){
 c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
  c.style.setProperty('--ry',((x-.5)*16).toFixed(2)+'deg');c.style.setProperty('--rx',((.5-y)*16).toFixed(2)+'deg');
  c.style.setProperty('--gx',(x*100)+'%');c.style.setProperty('--gy',(y*100)+'%');c.classList.add('act')});
 function rs(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg');c.classList.remove('act')}
 c.addEventListener('pointerleave',rs);c.addEventListener('pointerup',rs);c.addEventListener('pointercancel',rs);
 /* particles */
 var g=cv.getContext('2d'),W=0,H=0,P=[],on=false,raf=0,dpr=Math.min(devicePixelRatio||1,2);
 function size(){var r=cv.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;g.setTransform(dpr,0,0,dpr,0,0)}
 function mk(init){return{x:Math.random()*W,y:init?Math.random()*H:H+10,r:1+Math.random()*2.6,v:.3+Math.random()*.8,s:Math.random()*6.28,a:.25+Math.random()*.6,red:Math.random()<.6}}
 function loop(){if(!on)return;g.clearRect(0,0,W,H);
  for(var i=0;i<P.length;i++){var p=P[i];p.y-=p.v;p.s+=.02;p.x+=Math.sin(p.s)*.4;if(p.y<-10)P[i]=mk(false);
   g.beginPath();g.fillStyle=p.red?'rgba(239,68,68,'+p.a+')':'rgba(255,255,255,'+p.a+')';g.arc(p.x,p.y,p.r,0,6.28);g.fill()}
  raf=requestAnimationFrame(loop)}
 size();for(var i=0;i<22;i++)P.push(mk(true));
 addEventListener('resize',size);
 new IntersectionObserver(function(en){on=en[0].isIntersecting;cancelAnimationFrame(raf);if(on)loop()},{threshold:.1}).observe(c);
}
})();

;
/* ===== main ===== */
(function(){
var bp=document.getElementById('bp3'),sc=document.getElementById('bps'),h=document.getElementById('bph');
if(!bp)return;
function tg(){var u=h.classList.toggle('up');h.setAttribute('aria-pressed',u)}
h.addEventListener('click',tg);
h.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();tg()}});
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
bp.addEventListener('pointermove',function(e){var r=bp.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
 sc.style.setProperty('--ry',((x-.5)*14).toFixed(2)+'deg');sc.style.setProperty('--rx',((.5-y)*10).toFixed(2)+'deg')});
function rs(){sc.style.setProperty('--ry','0deg');sc.style.setProperty('--rx','0deg')}
bp.addEventListener('pointerleave',rs);bp.addEventListener('pointerup',rs);bp.addEventListener('pointercancel',rs);
})();

;
/* ===== main ===== */
(function(){
var L=document.getElementById('fql');if(!L)return;
var it=[].slice.call(L.querySelectorAll('.fqi')),cat='All',q='',cnt=document.getElementById('fqcount'),em=document.getElementById('fqe'),btnAll=document.getElementById('fqall');
function setOpen(el,o){el.classList.toggle('open',o);el.querySelector('.fqb').setAttribute('aria-expanded',o)}
it.forEach(function(el){
 var b=el.querySelector('.fqb');
 b.addEventListener('click',function(){var o=!el.classList.contains('open');if(!o||!allMode)it.forEach(function(x){if(x!==el&&!allMode)setOpen(x,false)});setOpen(el,o);
  if(o)setTimeout(function(){var r=el.getBoundingClientRect();if(r.top<70||r.bottom>innerHeight)el.scrollIntoView({behavior:'smooth',block:'center'})},420)});
 el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px')});
});
var allMode=false;
btnAll.addEventListener('click',function(){allMode=!allMode;it.forEach(function(x){if(!x.classList.contains('gone'))setOpen(x,allMode)});btnAll.textContent=allMode?'Collapse all':'Expand all'});
function apply(){var n=0;it.forEach(function(el){var t=(el.textContent||'').toLowerCase();var ok=(cat==='All'||el.dataset.c===cat)&&(!q||t.indexOf(q)>-1);el.classList.toggle('gone',!ok);if(ok)n++;else setOpen(el,false)});
 cnt.textContent=n+(n===1?' question':' questions');em.hidden=n>0;if(n===0){em.style.animation='none';void em.offsetWidth;em.style.animation=''}}
document.getElementById('fqsearch').addEventListener('input',function(e){q=e.target.value.trim().toLowerCase();apply()});
[].forEach.call(document.querySelectorAll('.fqc button'),function(b){b.addEventListener('click',function(){[].forEach.call(document.querySelectorAll('.fqc button'),function(x){x.classList.remove('on')});b.classList.add('on');cat=b.dataset.c;apply()})});
})();

;
/* ===== main ===== */
(function(){
var f=document.getElementById('fm');if(!f)return;
var mailA=document.getElementById('ctmail'),MAIL=mailA.textContent.trim();
document.getElementById('ctokm').textContent=MAIL;
var type='',bud='',toast=document.getElementById('cttoast'),tt;
function say(t){toast.textContent=t;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},1800)}
function chips(id,set){var w=document.getElementById(id);w.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var on=b.classList.contains('on');[].forEach.call(w.children,function(x){x.classList.remove('on')});if(!on)b.classList.add('on');set(on?'':b.dataset.v)})}
chips('ctype',function(v){type=v});chips('cbud',function(v){bud=v});
var cc=document.getElementById('ctcopy');cc&&cc.addEventListener('click',function(){
 function ok(){say('Email copied')}
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(MAIL).then(ok,function(){say(MAIL)})}else{say(MAIL)}});
[].forEach.call(document.querySelectorAll('.ctc'),function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});
var fx=document.getElementById('fx'),cn=document.getElementById('ctcnt');fx.addEventListener('input',function(){cn.textContent=fx.value.length+'/600'});
[].forEach.call(f.querySelectorAll('.cti'),function(i){i.addEventListener('input',function(){i.parentNode.classList.remove('err')})});
function burst(el){if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;var r=el.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2,cols=['#4d6bff','#7a3cff','#f472b6','#3ddc84','#fbbf24'];
 for(var i=0;i<26;i++){var p=document.createElement('i');p.className='ctpt';p.style.left=x+'px';p.style.top=y+'px';p.style.background=cols[i%5];document.body.appendChild(p);
  var a=Math.random()*6.28,d=70+Math.random()*130;p.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:'translate('+Math.cos(a)*d+'px,'+(Math.sin(a)*d-40)+'px) rotate('+(Math.random()*720)+'deg)',opacity:0}],{duration:900+Math.random()*500,easing:'cubic-bezier(.2,.7,.3,1)'}).onfinish=(function(n){return function(){n.remove()}})(p)}}
f.onsubmit=function(e){e.preventDefault();
 var bad=false;[['fn',function(v){return v.trim().length>1}],['fe',function(v){return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.trim())}],['fx',function(v){return v.trim().length>4}]].forEach(function(p){var el=document.getElementById(p[0]),box=el.parentNode;if(!p[1](el.value)){bad=true;box.classList.remove('err');void box.offsetWidth;box.classList.add('err')}});
 if(bad){say('Please complete the highlighted fields');return}
 var b=document.getElementById('ctsub');b.classList.add('ld');b.disabled=true;
 var n=document.getElementById('fn').value.trim(),em=document.getElementById('fe').value.trim();
 var body=(type?'Looking for: '+type+'\n':'')+(bud?'Budget: '+bud+'\n':'')+(type||bud?'\n':'')+fx.value.trim()+'\n\n'+n+' ('+em+')';
 function done(){b.classList.remove('ld');b.disabled=false}
 function good(){done();var ok=document.getElementById('ctok');ok.hidden=false;burst(ok)}
 function fallback(){done();say('Sending failed. Opening your mail app...');setTimeout(function(){location.href='mailto:'+MAIL+'?subject='+encodeURIComponent('Project from '+n+(type?' - '+type:''))+'&body='+encodeURIComponent(body)},1200)}
 var ctl=window.AbortController?new AbortController():null,tm=setTimeout(function(){ctl&&ctl.abort()},12000);
 fetch('https://formsubmit.co/ajax/'+MAIL,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name:n,email:em,message:fx.value.trim(),looking_for:type||'-',budget:bud||'-',_subject:'Project from '+n+(type?' - '+type:''),_replyto:em,_captcha:'false'}),signal:ctl?ctl.signal:undefined})
 .then(function(r){return r.json().then(function(j){clearTimeout(tm);if(r.ok&&String(j.success)!=='false')good();else fallback()})})
 .catch(function(){clearTimeout(tm);fallback()})};
document.getElementById('ctagain').addEventListener('click',function(){document.getElementById('ctok').hidden=true;f.reset();cn.textContent='0/600';[].forEach.call(f.querySelectorAll('.ctch button'),function(x){x.classList.remove('on')});type='';bud=''});
})();

;
/* ===== main ===== */
(function(){
var c=document.getElementById('ftpc'),top=document.getElementById('fttop'),pr=document.getElementById('ftprog');
var y=document.getElementById('ftyr');if(y)y.textContent=new Date().getFullYear();
if(top)top.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'})});
var uH=0,uT=false;function uM(){uH=document.documentElement.scrollHeight-innerHeight}uM();addEventListener('resize',uM);addEventListener('load',uM);if(window.ResizeObserver)new ResizeObserver(uM).observe(document.body);
function upd(){uT=false;var p=uH>0?scrollY/uH:0;if(pr)pr.setAttribute('stroke-dashoffset',(100-Math.max(0,Math.min(1,p))*100).toFixed(1))}
addEventListener('scroll',function(){if(!uT){uT=true;requestAnimationFrame(upd)}},{passive:true});upd();
if(c&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
 c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--px',(((e.clientX-r.left)/r.width-.5)*2).toFixed(3));c.style.setProperty('--py',(((e.clientY-r.top)/r.height-.5)*2).toFixed(3))});
 function rs(){c.style.setProperty('--px',0);c.style.setProperty('--py',0)}
 c.addEventListener('pointerleave',rs);c.addEventListener('pointerup',rs);c.addEventListener('pointercancel',rs);
}
})();

;
/* ===== main ===== */
(function(){var b=document.getElementById('bar');if(!b)return;function f(){b.classList.toggle('sc',scrollY>40)}addEventListener('scroll',f,{passive:true});f()})();

;
/* ===== main ===== */
(function(){
var bar=document.getElementById('bar'),ov=document.getElementById('ov'),bg=document.getElementById('bg');if(!bar)return;
bar.addEventListener('click',function(e){
 var a=e.target.closest('a[href^="#"]');if(!a)return;
 var id=a.getAttribute('href').slice(1),t=id&&document.getElementById(id);
 if(!t)return;
 e.preventDefault();e.stopImmediatePropagation();
 bar.classList.remove('open');if(ov)ov.classList.remove('on');if(bg)bg.setAttribute('aria-expanded','false');
 document.documentElement.style.overflow='';
 requestAnimationFrame(function(){requestAnimationFrame(function(){t.scrollIntoView({behavior:'smooth',block:'start'});try{history.replaceState(null,'','#'+id)}catch(_){}})})
},true);
})();

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


/* ===== perf: pause off-screen animations, drop paint-heavy infinite loops on phones ===== */
(function(){
 var blocks=[].slice.call(document.querySelectorAll('body>header,body>section,body>footer,body>.mq'));
 if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.classList.toggle('off',!e.isIntersecting)})},{rootMargin:'120px 0px'});
  blocks.forEach(function(b){io.observe(b)});
 }
 if(!matchMedia('(pointer:coarse),(max-width:900px)').matches||!document.getAnimations)return;
 var HEAVY={czshine:1,rfpulse:1,whpulse:1,nfspin:1,imspin:1,fqspin:1,ctr:1,bpglow:1,bploop:1,bpcyc:1,bpneon:1,bpshine:1,bpstr:1,glsk:1};
 function cut(list){list.forEach(function(a){try{if(a.animationName&&HEAVY[a.animationName]&&a.effect.getComputedTiming().iterations===Infinity)a.cancel()}catch(_){}})}
 cut(document.getAnimations());
 document.addEventListener('animationstart',function(e){if(HEAVY[e.animationName])cut(e.target.getAnimations({subtree:true}))},true);
})();
