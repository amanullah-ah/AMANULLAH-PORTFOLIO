/* ===== contact page ===== */
document.getElementById("yr").textContent=new Date().getFullYear();
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
 try{window.CMS&&CMS.send&&CMS.send({name:n,email:em,subject:type?'Project: '+type:'Contact',body:body})}catch(x){}
 var ctl=window.AbortController?new AbortController():null,tm=setTimeout(function(){ctl&&ctl.abort()},12000);
 fetch('https://formsubmit.co/ajax/'+MAIL,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name:n,email:em,message:fx.value.trim(),looking_for:type||'-',budget:bud||'-',_subject:'Project from '+n+(type?' - '+type:''),_replyto:em,_captcha:'false'}),signal:ctl?ctl.signal:undefined})
 .then(function(r){return r.json().then(function(j){clearTimeout(tm);if(r.ok&&String(j.success)!=='false')good();else fallback()})})
 .catch(function(){clearTimeout(tm);fallback()})};
document.getElementById('ctagain').addEventListener('click',function(){document.getElementById('ctok').hidden=true;f.reset();cn.textContent='0/600';[].forEach.call(f.querySelectorAll('.ctch button'),function(x){x.classList.remove('on')});type='';bud=''});
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


;

(function(){
 var els=[].slice.call(document.querySelectorAll('.ab-s,.ct-sec,.ab-ban,.ab-w'));
 if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 els.forEach(function(e){e.classList.add('rv')});
 var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:0,rootMargin:'0px 0px -5% 0px'});
 els.forEach(function(e){io.observe(e)});
})();

;

/* ===== price list (EDIT NAMES / PRICES HERE) ===== */
(function(){
var WA='923497081205';
var S=[
 ['Website','Portfolio Website','Personal site to show your work, skills and contact details.',49,['Mobile ready','Fast']],
 ['Website','Business Landing Page','One focused page that explains your offer and collects leads.',59,['1 page','Lead form']],
 ['Website','Company Website','Multi-page site with services, about, team and contact pages.',149,['5 pages','SEO basics']],
 ['Website','Restaurant Menu Website','Online menu with photos, prices and easy ordering by call or WhatsApp.',79,['Menu','WhatsApp order']],
 ['Website','Real Estate Website','Property listings with photos, filters and enquiry buttons.',199,['Listings','Filters']],
 ['Website','Blog / News Website','Clean reading experience with categories and an easy way to publish.',99,['Categories','Fast reading']],
 ['Website','Education / Course Website','Present courses, lessons and a simple way for students to enrol.',129,['Courses','Enrol form']],
 ['Website','Event / Wedding Website','Invitation page with details, location map and RSVP.',69,['RSVP','Map']],
 ['Website','Photography Website','Beautiful full-screen gallery for photographers and studios.',89,['Gallery','Lightbox']],
 ['Website','Clinic / Gym Website','Services, timings and booking enquiries for clinics and gyms.',109,['Services','Booking']],
 ['Store','Clothing Store','Online fashion store with sizes, colours and a smooth cart.',249,['Cart','Sizes']],
 ['Store','Electronics Store','Products, specs and comparison for phones and gadgets.',279,['Specs','Cart']],
 ['Store','Grocery Store','Fast category browsing and simple ordering for daily items.',229,['Categories','Cart']],
 ['Store','Jewelry Store','Elegant product pages with large photos and enquiry buttons.',259,['Gallery','Cart']],
 ['Store','Shoes Store','Product variants, sizes and quick view built for mobile shoppers.',239,['Variants','Cart']],
 ['Store','Cosmetics Store','Soft, modern design for beauty products with reviews section.',249,['Reviews','Cart']],
 ['Store','Mobile Accessories Store','Compact catalogue for cases, chargers and gadgets.',199,['Catalogue','Cart']],
 ['Store','Book Store','Browse by category or author with a simple order flow.',189,['Search','Cart']],
 ['Store','Digital Products Store','Sell templates, courses or files with instant delivery flow.',299,['Downloads','Checkout']],
 ['Store','Furniture Store','Large photo layouts for rooms and products with quote requests.',269,['Rooms','Quote']]
];
var CL=[['#2f4bff','#7a3cff'],['#10b981','#06b6d4'],['#f43f5e','#f59e0b'],['#0ea5e9','#2f4bff'],['#ec4899','#8b5cf6'],['#f97316','#ef4444']];
var IC={Website:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',Store:'<path d="M4 8h16l-1.2 11a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8z"/><path d="M8.5 8V7a3.5 3.5 0 0 1 7 0v1"/>'};

/* ---- UI mockup thumbnails (drawn in SVG, no external images) ---- */
var LAY=[['hero','user'],['hero','doc'],['cards3','building'],['list','plate'],['masonry','house'],['list','pen'],['list','cap'],['hero','heart'],['masonry','camera'],['cards3','cross'],['products','shirt'],['products','phone'],['products','basket'],['products','ring'],['products','shoe'],['products','lipstick'],['products','plug'],['products','book'],['products','download'],['products','sofa']];
var GL={user:'<circle cx="20" cy="14" r="7"/><path d="M6 36c0-8 6-12 14-12s14 4 14 12"/>',doc:'<rect x="7" y="6" width="26" height="28" rx="4"/><path d="M13 15h14M13 21h14M13 27h8"/>',building:'<rect x="9" y="6" width="22" height="30" rx="2"/><path d="M15 13h3M22 13h3M15 20h3M22 20h3M17 36v-7h6v7"/>',plate:'<circle cx="20" cy="20" r="14"/><circle cx="20" cy="20" r="7"/>',house:'<path d="M5 20 20 7l15 13"/><path d="M9 18v16h22V18"/><path d="M17 34v-9h6v9"/>',pen:'<path d="M8 32l2-8L28 6l6 6-18 18z"/><path d="M24 10l6 6"/>',cap:'<path d="M3 15 20 7l17 8-17 8z"/><path d="M10 19v8c4 4 16 4 20 0v-8"/>',heart:'<path d="M20 34S6 26 6 15a7 7 0 0 1 14-2 7 7 0 0 1 14 2c0 11-14 19-14 19z"/>',camera:'<rect x="4" y="11" width="32" height="22" rx="4"/><circle cx="20" cy="22" r="6"/><path d="M14 11l2-4h8l2 4"/>',cross:'<rect x="6" y="6" width="28" height="28" rx="8"/><path d="M20 12v16M12 20h16"/>',shirt:'<path d="M13 6 4 12l4 6 5-3v19h14V15l5 3 4-6-9-6c-1 3-3 5-7 5s-6-2-7-5z"/>',phone:'<rect x="11" y="4" width="18" height="32" rx="4"/><path d="M17 31h6"/>',basket:'<path d="M5 15h30l-3 18H8z"/><path d="M13 15l5-9M27 15l-5-9"/>',ring:'<circle cx="20" cy="25" r="10"/><path d="m15 11 5-5 5 5-5 6z"/>',shoe:'<path d="M4 26c8 0 10-6 12-13l7 5c3 2 7 3 13 4v8H4z"/><path d="M4 31h32"/>',lipstick:'<rect x="13" y="19" width="14" height="16" rx="2"/><path d="M15 19v-7l7-6v13"/>',plug:'<rect x="10" y="14" width="20" height="14" rx="4"/><path d="M15 14V6M25 14V6M20 28v8"/>',book:'<path d="M8 6h20a4 4 0 0 1 4 4v24H12a4 4 0 0 1-4-4z"/><path d="M8 30a4 4 0 0 1 4-4h20"/>',download:'<path d="M20 6v20M12 18l8 8 8-8"/><path d="M6 32h28"/>',sofa:'<path d="M8 16a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v6"/><rect x="4" y="21" width="32" height="10" rx="4"/><path d="M9 31v4M31 31v4"/>'};
function R(x,y,w,h,r,f,o){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+r+'" fill="'+f+'"'+(o?' opacity="'+o+'"':'')+'/>'}
function GY(n,cx,cy,s,sw){return '<g transform="translate('+(cx-20*s)+' '+(cy-20*s)+') scale('+s+')" fill="none" stroke="#fff" stroke-width="'+(sw||2.4)+'" stroke-linecap="round" stroke-linejoin="round">'+GL[n]+'</g>'}
function mock(i,c){
 var L=LAY[i],lay=L[0],gl=L[1],g='url(#a'+i+')',o='';
 o+='<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="a'+i+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+c[0]+'"/><stop offset="1" stop-color="'+c[1]+'"/></linearGradient></defs>';
 o+=R(0,0,320,200,0,'#0b0b11')+'<circle cx="270" cy="30" r="100" fill="'+g+'" opacity=".22"/><circle cx="30" cy="190" r="70" fill="'+g+'" opacity=".12"/>';
 o+='<rect x="14" y="12" width="292" height="200" rx="12" fill="#13131c" stroke="#2a2a3a" stroke-width="1"/>';
 o+='<circle cx="28" cy="25" r="3" fill="#ff5f57"/><circle cx="38" cy="25" r="3" fill="#febc2e"/><circle cx="48" cy="25" r="3" fill="#28c840"/>'+R(68,19,160,12,6,'#1f1f2c');
 o+=R(28,44,26,8,4,g)+R(188,46,22,5,2.5,'#fff',.35)+R(218,46,22,5,2.5,'#fff',.35)+R(248,46,22,5,2.5,'#fff',.35)+R(276,42,18,12,6,g);
 if(lay==='hero'){
  o+=R(28,72,118,13,6.5,'#fff',.92)+R(28,92,86,13,6.5,'#fff',.55)+R(28,116,140,6,3,'#fff',.25)+R(28,127,118,6,3,'#fff',.25)+R(28,146,66,20,10,g)+R(100,146,50,20,10,'#fff',.12);
  o+='<circle cx="232" cy="118" r="46" fill="'+g+'"/><circle cx="232" cy="118" r="46" fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="1.5"/>'+GY(gl,232,118,1.7,1.9)+R(262,160,40,22,8,'#1e1e2b')+R(268,166,18,5,2.5,'#fff',.7)+R(268,174,26,4,2,'#fff',.3);
 }else if(lay==='cards3'){
  o+=R(28,66,264,50,12,g,.95)+R(40,78,100,10,5,'#fff',.95)+R(40,94,70,7,3.5,'#fff',.6)+GY(gl,258,91,1.1,2.2);
  for(var k=0;k<3;k++){var x=28+k*90;o+=R(x,126,84,70,10,'#1b1b27')+'<circle cx="'+(x+18)+'" cy="144" r="9" fill="'+g+'" opacity="'+(1-k*.15)+'"/>'+R(x+10,160,60,7,3.5,'#fff',.85)+R(x+10,172,48,5,2.5,'#fff',.3)+R(x+10,182,36,5,2.5,'#fff',.2)}
 }else if(lay==='list'){
  for(var k=0;k<3;k++){var y=68+k*42;o+=R(28,y,264,36,10,'#1b1b27')+R(34,y+5,52,26,8,g,1-k*.15)+(k===0?GY(gl,60,y+18,.62,2.6):'')+R(96,y+8,110,8,4,'#fff',.88)+R(96,y+21,150,6,3,'#fff',.3)+R(248,y+11,38,14,7,g)}
 }else if(lay==='masonry'){
  var cols=[[44,60,40],[70,40,56],[52,76,36]];
  for(var cc=0;cc<3;cc++){var y=66;cols[cc].forEach(function(h,q){o+=R(28+cc*90,y,82,h,9,g,[1,.7,.5][(cc+q)%3]);if(cc===1&&q===0)o+=GY(gl,28+90+41,y+h/2,1,2.2);y+=h+8})}
 }else{
  if(i%2===0){
   for(var k=0;k<3;k++){var x=28+k*90;o+=R(x,66,82,128,11,'#1b1b27')+R(x+6,72,70,66,8,g,1-k*.18)+GY(gl,x+41,105,1.25,2)+R(x+8,146,56,7,3.5,'#fff',.88)+R(x+8,158,34,6,3,'#fff',.3)+R(x+8,172,38,14,7,'#fff',.14)+'<circle cx="'+(x+66)+'" cy="179" r="8" fill="'+g+'"/>'+R(x+62.5,178,7,1.8,.9,'#fff')+R(x+65.6,175.4,1.8,7,.9,'#fff')}
  }else{
   o+=R(28,66,128,128,12,'#1b1b27')+R(34,72,116,76,9,g)+GY(gl,92,110,1.9,1.8)+R(40,156,70,8,4,'#fff',.9)+R(40,170,44,6,3,'#fff',.3)+R(112,166,36,18,9,'#fff',.16);
   for(var k=0;k<2;k++){var y=66+k*66;o+=R(164,y,128,60,11,'#1b1b27')+R(170,y+6,48,48,8,g,1-k*.25)+GY(gl,194,y+30,.7,2.6)+R(226,y+14,52,7,3.5,'#fff',.88)+R(226,y+27,36,6,3,'#fff',.3)+R(226,y+38,34,12,6,'#fff',.14)}
  }
 }
 return o+'</svg>';
}
var grid=document.getElementById('svc-grid');if(!grid)return;
var chips=document.getElementById('svc-chips'),cnt=document.getElementById('svc-count'),cur='All';
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function link(n,p){return 'https://wa.me/'+WA+'?text='+encodeURIComponent('Hi Aman, I want to order: '+n+' ($'+p+'). Please share the details.')}
function render(){
 var out=[],k=0;
 S.forEach(function(s,i){
  if(cur!=='All'&&s[0]!==cur)return;
  var c=CL[i%CL.length];
  out.push('<div class="card sv" style="--g:linear-gradient(90deg,'+c[0]+','+c[1]+');--a:'+c[0]+';--b:'+c[1]+';--c:'+c[0]+'55">'
   +'<div class="th mk">'+mock(i,c)+'</div>'
   +'<div class="bd"><div class="tags"><span>'+s[0]+'</span>'+s[4].map(function(t){return '<span>'+esc(t)+'</span>'}).join('')+'</div>'
   +'<h3>'+esc(s[1])+'</h3><p>'+esc(s[2])+'</p>'
   +'<div class="pr"><div><small>Starting from</small><b>$'+s[3]+'</b></div><a class="od" href="'+link(s[1],s[3])+'" target="_blank" rel="noopener" aria-label="Order '+esc(s[1])+' on WhatsApp">Order</a></div></div></div>');
  k++;
 });
 grid.innerHTML=out.join('');
 cnt.textContent=k+' '+(cur==='All'?'packages':cur.toLowerCase()+(k===1?'':'s'))+' available';
}
chips.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;cur=b.dataset.c;[].forEach.call(chips.children,function(x){x.classList.toggle('on',x===b)});render()});
render();
})();
