/* ===== about page ===== */
document.getElementById("yr").textContent=new Date().getFullYear();

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
 var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.08});
 els.forEach(function(e){io.observe(e)});
})();
