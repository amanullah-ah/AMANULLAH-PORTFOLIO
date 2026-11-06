/* ===== main ===== */
// ---- EDIT YOUR SKILLS HERE ----
var ICO={"claude": "<path d=\"M0-6V6M-6 0H6M-4.2-4.2 4.2 4.2M4.2-4.2-4.2 4.2\" stroke=\"#d97757\" stroke-width=\"1.7\" stroke-linecap=\"round\"/>", "gpt": "<path d=\"M0-6 5.2-3v6L0 6-5.2 3v-6z\" fill=\"none\" stroke=\"#10a37f\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/><circle r=\"1.7\" fill=\"#10a37f\"/>", "gem": "<path d=\"M0-6C.6-2 2-.6 6 0 2 .6.6 2 0 6-.6 2-2 .6-6 0-2-.6-.6-2 0-6z\" fill=\"#a78bfa\"/>", "ds": "<path d=\"M-5.5 1.5C-4-4 2.5-5 5.5-1c-4 0-5 1.5-5 3.5C-1 4-4 4-5.5 1.5z\" fill=\"#4d6bfe\"/>", "cop": "<path d=\"M-2.2-5Q-4.2-5-4.2-2.4V-1Q-4.2 0-5.5 0-4.2 0-4.2 1V2.4Q-4.2 5-2.2 5M2.2-5Q4.2-5 4.2-2.4V-1Q4.2 0 5.5 0 4.2 0 4.2 1V2.4Q4.2 5 2.2 5\" fill=\"none\" stroke=\"#e6edf3\" stroke-width=\"1.4\" stroke-linecap=\"round\"/>", "pplx": "<path d=\"M0-6V6M-5.2-3 5.2 3M5.2-3-5.2 3\" stroke=\"#20b8cd\" stroke-width=\"1.6\" stroke-linecap=\"round\"/>"};
var CHIPS=[["claude","Claude AI","Neural Coding","#d97757"],["gpt","ChatGPT","Prompt Engine","#10a37f"],["gem","Gemini AI","AI API Engine","#a78bfa"],["ds","DeepSeek","Reasoning AI","#4d6bfe"],["cop","Copilot","Code Pair","#e6edf3"],["pplx","Perplexity","AI Research","#20b8cd"]];
// label, value text, value color, bar %
var METERS=[["Frontend & UI Design","95%","#22d889",95],["Backend & Databases","Node.js / Firebase","#4dc3ff",82],["Bots & Android Apps","Telegram / APK","#b04dff",88]];
// phase: tag, name, sub, color, spec title, chips, bullets
var PH=[
 ["HT","HTML, CSS & JS","Core foundations","#ff7a1a","HTML, CSS & JS",["HTML5","CSS3","ES6+"],["Semantic structure and responsive layouts (Grid, Flexbox)","Smooth animations and accessible interactions","Mobile-first, fast loading pages"]],
 ["ND","Node.js","Server runtime","#22d889","Node.js Backend",["Node.js","REST APIs","Express"],["Clean API routes and middleware","Async logic for downloads, tools and bots","Secure handling of requests and data"]],
 ["DB","Firebase & Supabase","Realtime data","#fbbf24","Database & Auth",["Firebase","Supabase","Auth"],["Realtime data and cloud storage","Login, roles and secure access rules","Fast reads for mobile users"]],
 ["PY","Python & Bots","Automation","#4dc3ff","Python & Telegram Bots",["Python","Telegram API","Automation"],["Bots that reply, convert and download","Scheduled and background tasks","Simple commands, clear user flows"]],
 ["APK","Android Apps","Web to APK","#a855f7","Android Apps",["WebView","APK","PWA"],["Turn websites into installable Android apps","Custom app name, icon and splash","Tested on real mobile screens"]],
 ["GIT","Git & Deploy","Go live","#ef4444","Git & Deployment",["Git","GitHub","Vercel"],["Version control for every project","One-push deploys to live hosting","Quick fixes and continuous updates"]]
];
var STACK=[["HT","HTML5","Structure","#ff7a1a","fe",5],["CS","CSS3","Styling","#3b82f6","fe",5],["JS","JavaScript","Logic","#fbbf24","fe",4],["ND","Node.js","Async Runtime","#22d889","be",4],["PY","Python","Automation","#4dc3ff","bot",4],["FB","Firebase","Realtime DB","#ff9e1a","be",4],["SB","Supabase","Auth & Postgres","#3ecf8e","be",4],["TG","Telegram API","Bots","#29a9eb","bot",5],["APK","Android","Web to App","#a855f7","bot",4],["GIT","Git & Vercel","Deploy","#ef4444","ops",4]];
var CATS=[["all","All"],["fe","Frontend"],["be","Backend"],["bot","Bots & Apps"],["ops","Deploy"]];
function $(i){return document.getElementById(i)}
function esc(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function isvg(k,sz){return '<svg viewBox="-8 -8 16 16" width="'+sz+'" height="'+sz+'" aria-hidden="true">'+ICO[k]+'</svg>'}
$("tg").innerHTML=CHIPS.map(function(c){return '<div class="t" style="--k:'+c[3]+'"><i>'+isvg(c[0],20)+'</i><span style="min-width:0"><b>'+c[1]+'</b><small>'+c[2]+'</small></span></div>'}).join("");
(function(){
 var L=[[4,33],[4,100],[4,167]],R=[[256,33],[256,100],[256,167]],N="",LN="",PK="";
 CHIPS.forEach(function(c,i){var left=i<3,pos=(left?L:R)[i%3],x=pos[0],y=pos[1],cy=y+15,ex=left?x+100:x,path;
  if(i%3===1)path=left?"M"+ex+" "+cy+"H150":"M"+ex+" "+cy+"H210";
  else{var up=i%3===0,dx=left?(ex+26):(ex-26),tx=left?156:204,ty=up?100:130;path="M"+ex+" "+cy+"H"+dx+"L"+tx+" "+ty}
  LN+='<path class="ln" style="stroke:'+c[3]+'" d="'+path+'"/>';
  PK+='<circle r="2.4" fill="'+c[3]+'" style="filter:drop-shadow(0 0 3px '+c[3]+')"><animateMotion dur="2.6s" begin="'+(i*.45).toFixed(2)+'s" repeatCount="indefinite" path="'+path+'"/></circle>';
  N+='<g class="nc nd2"><rect x="'+x+'" y="'+y+'" width="100" height="30" rx="9"/><circle class="ib" cx="'+(x+16)+'" cy="'+cy+'" r="9.5" style="stroke:'+c[3]+'66"/><g transform="translate('+(x+16)+' '+cy+') scale(.95)">'+ICO[c[0]]+'</g><text x="'+(x+30)+'" y="'+(cy-1.5)+'" class="nn">'+c[1]+'</text><text x="'+(x+30)+'" y="'+(cy+7)+'" class="ns">'+c[2]+'</text></g>'});
 $("lns").innerHTML=LN;$("pks").innerHTML=PK;$("nds").innerHTML=N;
})();
$("mt").innerHTML=METERS.map(function(m){return '<div class="mr"><div class="l"><span>'+esc(m[0])+'</span><b style="--vc:'+m[2]+'">'+esc(m[1])+'</b></div><div class="bar"><i data-w="'+m[3]+'"></i></div></div>'}).join("");
var STI={"HT":"<path d=\"M4 3h16l-1.5 16.2L12 21.2l-6.5-2z\" fill=\"currentColor\"/><path d=\"M12 5.2v14l4.9-1.4 1.1-12.6z\" fill=\"#fff\" opacity=\".18\"/><path d=\"M16.2 8.2H8.4l.3 3h7.2l-.5 5-3.4 1-3.4-1-.2-2.2\" fill=\"none\" stroke=\"#0b0b10\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>","CS":"<path d=\"M4 3h16l-1.5 16.2L12 21.2l-6.5-2z\" fill=\"currentColor\"/><path d=\"M12 5.2v14l4.9-1.4 1.1-12.6z\" fill=\"#fff\" opacity=\".18\"/><path d=\"M8.8 8.2h6.4l-3.4 3.6c2.6-.3 3.8 1 3.8 2.4 0 1.6-1.5 2.9-3.7 2.9-1.1 0-2-.3-2.8-.8\" fill=\"none\" stroke=\"#0b0b10\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>","JS":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3.2\" fill=\"currentColor\"/><path d=\"M10.6 10.4v4.7c0 1.2-.6 1.8-1.7 1.8-.6 0-1-.2-1.4-.6M16.9 11c-.4-.4-.9-.6-1.5-.6-.9 0-1.6.5-1.6 1.2 0 1.8 3.3.9 3.3 2.8 0 .8-.8 1.4-1.8 1.4-.7 0-1.3-.3-1.8-.8\" fill=\"none\" stroke=\"#0b0b10\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>","ND":"<path d=\"M12 2.4l8.3 4.8v9.6L12 21.6l-8.3-4.8V7.2z\" fill=\"currentColor\" fill-opacity=\".14\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linejoin=\"round\"/><path d=\"M9 15.6V8.6l6 7v-7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>","PY":"<path d=\"M11.8 2.8c-3.8 0-3.6 1.7-3.6 1.7V7h3.7v.9H6.6S3.3 7.5 3.3 12s2.3 4.3 2.3 4.3h1.6v-2.1s-.1-2.3 2.3-2.3h3.9s2.2.1 2.2-2.2V5.2s.4-2.4-3.8-2.4z\" fill=\"currentColor\"/><path d=\"M12.2 21.2c3.8 0 3.6-1.7 3.6-1.7V17h-3.7v-.9h5.3s3.3.4 3.3-4.1-2.3-4.3-2.3-4.3h-1.6v2.1s.1 2.3-2.3 2.3H10.6s-2.2-.1-2.2 2.2v3.7s-.4 2.4 3.8 2.4z\" fill=\"currentColor\" opacity=\".55\"/><circle cx=\"9.4\" cy=\"5\" r=\".95\" fill=\"#0b0b10\"/><circle cx=\"14.6\" cy=\"19\" r=\".95\" fill=\"#0b0b10\"/>","FB":"<path d=\"M5 18 7.6 3.9c.1-.5.7-.6.9-.2l2.6 4.9L5 18z\" fill=\"currentColor\" opacity=\".55\"/><path d=\"M5 18 13.5 4.2c.2-.3.6-.2.7.1L18.8 17l-5.9 3.6c-.5.3-1.1.3-1.6 0L5 18z\" fill=\"currentColor\"/><path d=\"M5 18l7.2-3.6 6.6 2.6\" fill=\"none\" stroke=\"#0b0b10\" stroke-width=\"1.2\" stroke-linejoin=\"round\" opacity=\".55\"/>","SB":"<path d=\"M13.6 2.4 5 13.4h6.2l-.9 8.2 8.7-11.2h-6.2z\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"1.2\" stroke-linejoin=\"round\"/>","TG":"<path d=\"M21 4 3 11l5.6 2.2L10 19l3-3.6 4.4 3.3z\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linejoin=\"round\"/><path d=\"M8.6 13.2 17 7.5l-6.6 7.2\" fill=\"none\" stroke=\"#0b0b10\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>","APK":"<path d=\"M4.8 15.2v-4a7.2 7.2 0 0 1 14.4 0v4z\" fill=\"currentColor\"/><path d=\"M8 4.4l1.7 2.3M16 4.4l-1.7 2.3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><circle cx=\"9.4\" cy=\"10.8\" r=\"1.05\" fill=\"#0b0b10\"/><circle cx=\"14.6\" cy=\"10.8\" r=\"1.05\" fill=\"#0b0b10\"/><rect x=\"4.8\" y=\"16.6\" width=\"14.4\" height=\"4.4\" rx=\"1.8\" fill=\"currentColor\" opacity=\".5\"/>","GIT":"<path d=\"M12 2.4l9.6 9.6-9.6 9.6L2.4 12z\" fill=\"currentColor\" fill-opacity=\".14\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linejoin=\"round\"/><path d=\"M9.6 8.2v7.6M9.6 12h4.8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><circle cx=\"9.6\" cy=\"8.2\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"9.6\" cy=\"15.8\" r=\"1.7\" fill=\"currentColor\"/><circle cx=\"14.6\" cy=\"12\" r=\"1.7\" fill=\"currentColor\"/>"};
function sti(t){return '<svg viewBox="0 0 24 24" aria-hidden="true">'+(STI[t]||t)+'</svg>'}
var cat="all";
function stk(){$("sk").innerHTML=STACK.map(function(c,i){var lv="";for(var n=0;n<5;n++)lv+='<u'+(n<c[5]?' class="f"':'')+'></u>';return '<div class="s'+(cat==="all"||cat===c[4]?'':' hide')+'" style="--k:'+c[3]+';animation-delay:'+(i*40)+'ms"><i>'+sti(c[0])+'</i><span><b>'+c[1]+'</b><small>'+c[2]+'</small></span><div class="lv" aria-label="Skill level '+c[5]+' of 5">'+lv+'</div></div>'}).join("")}
$("tabs").innerHTML=CATS.map(function(c,i){return '<button type="button" class="tb'+(i?'':' on')+'" role="tab" data-c="'+c[0]+'">'+c[1]+'</button>'}).join("");
$("tabs").addEventListener("click",function(e){var b=e.target.closest(".tb");if(!b)return;cat=b.dataset.c;[].forEach.call($("tabs").children,function(x){x.classList.toggle("on",x===b)});stk()});
stk();
var PHI={
"HT":['<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h16l-1.5 16.2L12 21.2l-6.5-2z" fill="#ff7a1a"/><path d="M12 5.2v14l4.9-1.4 1.1-12.6z" fill="#fff" opacity=".18"/><path d="M16.2 8.2H8.4l.3 3h7.2l-.5 5-3.4 1-3.4-1-.2-2.2" fill="none" stroke="#0c0c12" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h16l-1.5 16.2L12 21.2l-6.5-2z" fill="#3b82f6"/><path d="M12 5.2v14l4.9-1.4 1.1-12.6z" fill="#fff" opacity=".18"/><path d="M8.8 8.2h6.4l-3.4 3.6c2.6-.3 3.8 1 3.8 2.4 0 1.6-1.5 2.9-3.7 2.9-1.1 0-2-.3-2.8-.8" fill="none" stroke="#0c0c12" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3.2" fill="#fbbf24"/><path d="M10.6 10.4v4.7c0 1.2-.6 1.8-1.7 1.8-.6 0-1-.2-1.4-.6M16.9 11c-.4-.4-.9-.6-1.5-.6-.9 0-1.6.5-1.6 1.2 0 1.8 3.3.9 3.3 2.8 0 .8-.8 1.4-1.8 1.4-.7 0-1.3-.3-1.8-.8" fill="none" stroke="#0c0c12" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
"ND":'<path d="M12 2.4l8.3 4.8v9.6L12 21.6l-8.3-4.8V7.2z" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9 15.6V8.6l6 7v-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
"DB":'<path d="M5 18 7.6 3.9c.1-.5.7-.6.9-.2l2.6 4.9L5 18z" fill="currentColor" opacity=".55"/><path d="M5 18 13.5 4.2c.2-.3.6-.2.7.1L18.8 17l-5.9 3.6c-.5.3-1.1.3-1.6 0L5 18z" fill="currentColor"/><path d="M5 18l7.2-3.6 6.6 2.6" fill="none" stroke="#0c0c12" stroke-width="1.2" stroke-linejoin="round" opacity=".55"/><circle cx="19" cy="5.2" r="1.3" fill="currentColor" opacity=".7"/>',
"PY":'<path d="M11.8 2.8c-3.8 0-3.6 1.7-3.6 1.7V7h3.7v.9H6.6S3.3 7.5 3.3 12s2.3 4.3 2.3 4.3h1.6v-2.1s-.1-2.3 2.3-2.3h3.9s2.2.1 2.2-2.2V5.2s.4-2.4-3.8-2.4z" fill="currentColor"/><path d="M12.2 21.2c3.8 0 3.6-1.7 3.6-1.7V17h-3.7v-.9h5.3s3.3.4 3.3-4.1-2.3-4.3-2.3-4.3h-1.6v2.1s.1 2.3-2.3 2.3H10.6s-2.2-.1-2.2 2.2v3.7s-.4 2.4 3.8 2.4z" fill="currentColor" opacity=".55"/><circle cx="9.4" cy="5" r=".95" fill="#0c0c12"/><circle cx="14.6" cy="19" r=".95" fill="#0c0c12"/>',
"APK":'<path d="M4.8 15.2v-4a7.2 7.2 0 0 1 14.4 0v4z" fill="currentColor"/><path d="M8 4.4l1.7 2.3M16 4.4l-1.7 2.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="9.4" cy="10.8" r="1.05" fill="#0c0c12"/><circle cx="14.6" cy="10.8" r="1.05" fill="#0c0c12"/><rect x="4.8" y="16.6" width="14.4" height="4.4" rx="1.8" fill="currentColor" opacity=".5"/>',
"GIT":'<path d="M12 2.4l9.6 9.6-9.6 9.6L2.4 12z" fill="currentColor" fill-opacity=".14" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9.6 8.2v7.6M9.6 12h4.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="9.6" cy="8.2" r="1.7" fill="currentColor"/><circle cx="9.6" cy="15.8" r="1.7" fill="currentColor"/><circle cx="14.6" cy="12" r="1.7" fill="currentColor"/>'};
function pic(t){var v=PHI[t];if(Array.isArray(v))return v.join("");return '<svg viewBox="0 0 24 24" aria-hidden="true">'+(v||"")+'</svg>'}
var cur=0;
function phases(){
 $("ph").innerHTML=PH.map(function(p,i){return '<div class="ph'+(i===cur?' on':'')+'" style="--k:'+p[3]+'"><button type="button" data-i="'+i+'" aria-pressed="'+(i===cur)+'"><span class="no">PHASE 0'+(i+1)+'</span><span class="ic'+(Array.isArray(PHI[p[0]])?' multi':'')+'">'+pic(p[0])+'</span><span class="nm">'+esc(p[1])+'</span><span class="sb">'+esc(p[2])+'</span></button><div class="ar"></div></div>'}).join("");
 var p=PH[cur];
 $("spec").innerHTML='<div class="spec"><div class="k">Active phase spec // 0'+(cur+1)+' / 0'+PH.length+'</div><h3>'+esc(p[4])+'</h3><div class="chp">'+p[5].map(function(c){return '<span>'+esc(c)+'</span>'}).join("")+'</div><ul>'+p[6].map(function(b){return '<li>'+esc(b)+'</li>'}).join("")+'</ul></div>';
}
var RM=matchMedia("(prefers-reduced-motion:reduce)").matches,auto=false,tm=null,DUR=3600;
function bar(){$("apw").innerHTML='<div class="apb'+(auto?' run':'')+'" style="--d:'+DUR+'ms"><i></i></div><div class="apn"><span>Phase 0'+(cur+1)+' / 0'+PH.length+'</span><b>'+(auto?"Auto play":"Paused - tap to explore")+'</b></div>'}
function tick(){clearTimeout(tm);if(!auto)return;tm=setTimeout(function(){cur=(cur+1)%PH.length;phases();bar();tick()},DUR)}
function stop(){auto=false;clearTimeout(tm);bar()}
$("ph").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;cur=+b.dataset.i;phases();stop()});
phases();bar();
if(!RM)new IntersectionObserver(function(es,o){if(es[0].isIntersecting){auto=true;bar();tick();o.disconnect()}},{threshold:.4}).observe($("ph"));
$("yr").textContent=new Date().getFullYear();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target;el.classList.add("in");
 [].forEach.call(el.querySelectorAll(".bar i"),function(b){b.style.width=b.dataset.w+"%"});
 [].forEach.call(el.querySelectorAll(".ring"),function(r){r.querySelector(".fg").style.strokeDashoffset=(138.2*(1-r.dataset.v/100)).toFixed(1)});
 io.unobserve(el)})},{threshold:.15});
[].forEach.call(document.querySelectorAll(".rv"),function(el){io.observe(el)});

// ---- v2 extras ----
(function(){
var pg=$("pg");addEventListener("scroll",function(){var h=document.documentElement.scrollHeight-innerHeight;pg.style.width=(h>0?scrollY/h*100:0)+"%"},{passive:true});
// typing role
var R=["Web Developer","Telegram Bot Builder","Android App Maker","UI Designer","SEO Tool Creator"],ri=0,ci=0,dl=false,re=$("role");
if(RM){re.textContent=R[0]}else(function t(){var w=R[ri];ci+=dl?-1:1;re.textContent=w.slice(0,ci);var d=dl?35:80;if(!dl&&ci===w.length){dl=true;d=1300}else if(dl&&ci===0){dl=false;ri=(ri+1)%R.length;d=250}setTimeout(t,d)})();
// counters
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var el=e.target,n=+el.dataset.n,sf=el.dataset.s||"";if(RM){el.textContent=n+sf;return}var i=0,id=setInterval(function(){i++;el.textContent=Math.round(n*(1-Math.pow(1-i/36,3)))+sf;if(i>=36)clearInterval(id)},28)})},{threshold:.6});
[].forEach.call(document.querySelectorAll("[data-n]"),function(el){co.observe(el)});
// pointer spotlight on cards and tiles
function spot(e){var c=e.target.closest&&e.target.closest(".card,.s,.t");if(!c)return;var r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px");if(e.pointerType==="touch"){c.classList.add("tch");clearTimeout(c._t);c._t=setTimeout(function(){c.classList.remove("tch")},700)}}
addEventListener("pointermove",spot,{passive:true});addEventListener("pointerdown",spot,{passive:true});
// 3D tilt on circuit
var ci2=$("circ");if(ci2&&!RM){ci2.addEventListener("pointermove",function(e){var r=ci2.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;ci2.style.transform="perspective(800px) rotateY("+(x*10).toFixed(1)+"deg) rotateX("+(-y*8).toFixed(1)+"deg)"});["pointerleave","pointerup","pointercancel"].forEach(function(n){ci2.addEventListener(n,function(){ci2.style.transform=""})})}
})();

;
/* ===== main ===== */
(function(){
var sec=document.querySelector(".tgb .tgc");if(!sec)return;
var body=sec.querySelector(".tbd"),inp=sec.querySelector(".tin"),sendb=sec.querySelector(".tti b"),tpl=document.getElementById("tgPh");
var MENU=`┏𓋰━𓋰━𓋰━𓋰━𓋰━𓋰╮
┃𓆩♡𝗔𝗠𝗔𝗡-𝗧𝗘𝗖𝗛-𝗭𝗢𝗡𝗘
┗𓋰━𓋰━𓋰━𓋰━𓋰━𓋰╯

╭━━━━━━━━━━━━━━━━━━━━┈⊷
┃✾╭────────────────────
┃✾┋ 🤖 ʙᴏᴛ  :𓆩𝗦𝗜𝗗𝗛𝗨𝚇𝗔𝗠𝗔𝗡𓆪
┃✾┋ 👑 ᴏᴡɴᴇʀ :𝗔𝗠𝗔𝗡 𝗨𝗟𝗟𝗔𝗛
┃✾┋ 📦 ᴠᴇʀsɪᴏɴ  :4.0
┃✾┋ 📡 ᴘʟᴀᴛғᴏʀᴍ :𝚃ᴇʟᴇɢʀᴀᴍ
┃✾╰────────────────────
╰━━━━━━━━━━━━━━━━━━━━┈⊷

╭━┳━━━━━━━━━┈⊷
┃⍟┣═━❲ 𝐌𝐄𝐍𝐔
┋⍟┋𝐌ᴇɴᴜ
┃⍟┃𝐏ɪɴɢ
┋⍟┋𝐎ᴡɴᴇʀ
┃⍟┃𝐏ʀɪᴠᴀᴛᴇ
┋⍟┋𝐏ᴜʙʟɪᴄ
╰━┻━━━━━━━━━┈⊷
╭━┳━━━━━━━━━┈⊷
┃⍟┣═❲𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃
┋⍟┋𝐒ᴏɴɢ <ɴᴀᴍᴇ>
┃⍟┃𝐕ɪᴅᴇᴏ <ɴᴀᴍᴇ>
┋⍟┋𝐌ᴏᴠɪᴇ <ɴᴀᴍᴇ>
┃⍟┃𝐓ɪᴋᴛᴏᴋ <ᴜʀʟ>
┋⍟┋𝐀ᴘᴋ <ɴᴀᴍᴇ>
┃⍟┃𝐍ᴀᴀᴛ (ɴᴀᴍᴇ)
╰━┻━━━━━━━━━┈⊷
╭━┳━━━━━━━━━┈⊷
┃⍟┣═❲𝐓𝐎𝐎𝐋𝐒
┋⍟┋𝐃ᴘ <ɴᴜᴍʙᴇʀ>
┃⍟┃𝐉ɪᴅ <ᴜʀʟ>
┋⍟┋𝐒s <ᴜʀʟ>
┋⍟┋𝐕ᴠ,ᴏᴋ,,ᴛʜᴀɴᴋs
╰━┻━━━━━━━━━┈⊷
╭╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
┃ ©𝐏𝙾𝚆𝙴𝚁𝙳 𝐁𝚈 𝗔𝗠𝗔𝗡-𝐌𝐃
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╯`.split("\n");
var RM=matchMedia("(prefers-reduced-motion:reduce)").matches,vis=true;
function wait(ms){return new Promise(function(r){setTimeout(r,ms)})}
function bottom(){body.scrollTop=body.scrollHeight}
function add(cls,html){var d=document.createElement("div");d.className="mg "+cls+" in";d.innerHTML=html;body.appendChild(d);bottom();return d}
function scrollTo(y,ms){return new Promise(function(res){var s0=body.scrollTop,t0=null;function f(t){if(t0===null)t0=t;var k=Math.min(1,(t-t0)/ms);body.scrollTop=s0+(y-s0)*k;k<1?requestAnimationFrame(f):res()}requestAnimationFrame(f)})}
async function gate(){while(!vis||document.hidden)await wait(400)}
async function type(txt){inp.classList.add("on");inp.textContent="";for(var i=0;i<txt.length;i++){await gate();inp.textContent+=txt[i];await wait(120)}await wait(400)}
async function send(txt,time){sendb.classList.add("go");await wait(150);sendb.classList.remove("go");inp.textContent="";inp.classList.remove("on");add("mu",txt+"<em>"+time+" &#10003;&#10003;</em>");await wait(350)}
async function typing(ms){var t=add("mt","<i></i><i></i><i></i>");await wait(ms);t.remove()}
function photo(){var n=tpl.content.firstElementChild.cloneNode(true);body.appendChild(n);bottom();return n}
if(RM){add("mu",".menu<em>11:04 &#10003;&#10003;</em>");var b0=add("mb mcm","<pre></pre><em>11:04</em>");b0.querySelector("pre").textContent=MENU.slice(0,9).join("\n");add("mu",".owner<em>11:05 &#10003;&#10003;</em>");photo();return}
new IntersectionObserver(function(es){vis=es[0].isIntersecting},{threshold:.2}).observe(sec);
(async function run(){
 while(true){
  await gate();body.innerHTML="";await wait(800);
  await type(".menu");await send(".menu","11:04");await typing(900);
  var b=add("mb mcm","<pre></pre><em>11:04</em>"),pre=b.querySelector("pre");
  for(var i=0;i<MENU.length;i++){await gate();pre.textContent+=(i?"\n":"")+MENU[i];bottom();await wait(95)}
  await wait(700);await scrollTo(0,1300);await wait(500);await scrollTo(body.scrollHeight,5200);await wait(900);
  await type(".owner");await send(".owner","11:05");await typing(900);
  var ph=photo();await wait(4200);ph.classList.remove("in");ph.classList.add("out");await wait(700);ph.remove();await wait(1400);
  body.classList.add("fade");await wait(500);body.classList.remove("fade");
 }
})();
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