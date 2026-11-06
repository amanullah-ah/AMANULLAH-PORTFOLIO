/* Public site loader (Firebase Realtime Database). Set DB (databaseURL) on the first line below. */
(function(){var DB='https://aman-tech-75ea9-default-rtdb.firebaseio.com'.replace(/\/$/,'');
function g(p){return fetch(DB+'/'+p+'.json').then(function(r){return r.ok?r.json():Promise.reject(r.status)})}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function safe(u){return /^(https?:|mailto:|tel:|\/|#)/i.test(u)?u:'#'}
var C=window.CMS={items:function(s){return g('items').then(function(d){var o=Object.keys(d||{}).map(function(k){return d[k]}).filter(function(x){return x&&x.section==s&&x.published!==false}).sort(function(a,b){return(a.sort||0)-(b.sort||0)}).map(function(x){return x.data||{}});try{sessionStorage['c_'+s]=JSON.stringify(o)}catch(e){}return o}).catch(function(){try{return JSON.parse(sessionStorage['c_'+s])}catch(e){return[]}})},
site:function(){return g('settings/site/value').then(function(d){return d||{}}).catch(function(){return{}})},
send:function(m){var id=Date.now()*10+Math.floor(Math.random()*10);return fetch(DB+'/messages/'+id+'.json',{method:'PUT',body:JSON.stringify({name:m.name||'',email:m.email||'',subject:m.subject||'',body:m.body||'',is_read:false,created_at:new Date().toISOString()})}).then(function(r){return r.ok}).catch(function(){return false})}};
C.site().then(function(s){C.cfg=s;
document.querySelectorAll('[data-cms]').forEach(function(e){var v=s[e.dataset.cms];if(v)e.textContent=v});
document.querySelectorAll('[data-cms-href]').forEach(function(e){var v=s[e.dataset.cmsHref];if(v)e.href=safe((e.dataset.cmsPre||'')+v)});
if(s.seo_title)document.title=s.seo_title;
if(s.seo_desc){var m=document.querySelector('meta[name=description]');if(m)m.content=s.seo_desc}
if(s.favicon){var l=document.querySelector('link[rel~=icon]');if(l)l.href=safe(s.favicon)}
if(s.maintenance=='on'){var d=document.createElement('div');d.style.cssText='position:fixed;inset:0;z-index:99999;background:#0b0a12;color:#fff;display:grid;place-items:center;text-align:center;font:600 1.4rem system-ui;padding:2rem';d.textContent='Site is under maintenance. Please check back soon.';document.body.appendChild(d)}});
document.querySelectorAll('[data-cms-section]').forEach(function(box){var slug=box.dataset.cmsSection;if(slug=='auto')slug=new URLSearchParams(location.search).get('s')||'';if(!slug)return;
g('sections/'+encodeURIComponent(slug)).then(function(m){if(m&&box.dataset.cmsSection=='auto'){document.title=m.title;var h=document.getElementById('cms-title');if(h)h.textContent=m.title}}).catch(function(){});
C.items(slug).then(function(L){if(!L.length)return;box.innerHTML=L.map(function(d){var t=d.name||d.title||d.q||d.caption||'',x=d.desc||d.a||d.bio||'',i=d.img||d.image||d.logo||'',u=d.url||d.link||'';
var h=(i?'<img src="'+esc(safe(i))+'" alt="" loading="lazy">':'')+'<h3>'+esc(t)+'</h3>'+(x?'<p>'+esc(x)+'</p>':'')+(d.price?'<b>'+esc(d.price)+'</b>':'');
return u?'<a class="cms-card" href="'+esc(safe(u))+'" target="_blank" rel="noopener">'+h+'</a>':'<div class="cms-card">'+h+'</div>'}).join('')})});
var mn=document.querySelector('#menu>div');if(mn)C.items('menu').then(function(L){if(!L.length)return;mn.innerHTML=L.map(function(d,i){var u=safe(d.url||'#'),x=/^https?:/i.test(u)&&u.indexOf(location.host)<0?' target="_blank" rel="noopener"':'';return'<a href="'+esc(u)+'"'+x+' style="--i:'+i+'">'+esc(d.label||'')+'</a>'}).join('')});
})();
