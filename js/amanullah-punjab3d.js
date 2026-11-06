/* ===== 3D Punjab map (pure SVG, no internet needed) =====
   Punjab (Pakistan) ke saare bade shehar + Bhakkar (City) aur Notak (Village) ke pins.
   Shehron ya pins ki jagah badalni ho to neeche CITIES / PINS arrays edit karein. */
(function(){
var host=document.getElementById('m3');if(!host)return;
var lm=document.getElementById('lmap');
var NS='http://www.w3.org/2000/svg';

/* ---------- data: [lat, lon] ---------- */
var PINS={
 city:{name:'BHAKKAR',tag:'City',ch:'B',lat:31.6334,lon:71.0654,c1:'#ff5a4d',c2:'#d81f2a',side:'l'},
 vil:{name:'NOTAK',tag:'Village',ch:'N',lat:31.4833,lon:71.0333,c1:'#ffb347',c2:'#f0621f',side:'r'}
};
/* [name, lat, lon, tier] tier1 = hamesha label, tier2 = zoom>=1.5, tier3 = zoom>=2.6 */
var CITIES=[
['Lahore',31.5497,74.3436,1],['Faisalabad',31.4504,73.1350,1],['Rawalpindi',33.5651,73.0169,1],['Multan',30.1575,71.5249,1],
['Gujranwala',32.1877,74.1945,1],['Sialkot',32.4945,74.5229,1],['Sargodha',32.0836,72.6711,1],['Bahawalpur',29.3956,71.6836,1],
['D.G. Khan',30.0489,70.6455,1],['Rahim Yar Khan',28.4202,70.2952,1],['Sahiwal',30.6682,73.1114,1],['Jhang',31.2681,72.3181,1],
['Gujrat',32.5731,74.0789,2],['Sheikhupura',31.7167,73.9850,2],['Kasur',31.1187,74.4500,2],['Okara',30.8138,73.4534,2],
['Mianwali',32.5839,71.5370,2],['Attock',33.7660,72.3609,2],['Jhelum',32.9425,73.7257,2],['Chiniot',31.7292,72.9822,2],
['Khanewal',30.3017,71.9321,2],['Vehari',30.0445,72.3556,2],['Layyah',30.9693,70.9428,2],['Muzaffargarh',30.0736,71.1805,2],
['Mandi Bahauddin',32.5861,73.4917,2],['Bahawalnagar',29.9987,73.2536,2],['Chakwal',32.9328,72.8630,2],['Pakpattan',30.3436,73.3894,2],
['Narowal',32.1020,74.8730,2],['Hafizabad',32.0709,73.6880,2],['Khushab',32.2954,72.3489,2],['Toba Tek Singh',30.9709,72.4826,2],
['Lodhran',29.5393,71.6324,2],['Rajanpur',29.1044,70.3301,2],
['Wazirabad',32.4400,74.1200,3],['Daska',32.3240,74.3500,3],['Muridke',31.8020,74.2600,3],['Jaranwala',31.3350,73.4200,3],
['Gojra',31.1500,72.6900,3],['Kamalia',30.7300,72.6500,3],['Burewala',30.1600,72.6500,3],['Chishtian',29.8000,72.8600,3],
['Haroonabad',29.6100,73.1400,3],['Hasilpur',29.6900,72.5500,3],['Ahmadpur East',29.1400,71.2600,3],['Khanpur',28.6500,70.6500,3],
['Sadiqabad',28.3000,70.1300,3],['Kot Addu',30.4700,70.9700,3],['Taunsa',30.7000,70.6500,3],['Jatoi',29.5100,70.8400,3],
['Darya Khan',31.7800,71.1000,3],['Jauharabad',32.2800,72.2800,3],['Pind Dadan Khan',32.5900,73.0500,3],['Taxila',33.7400,72.8000,3],
['Murree',33.9070,73.3900,3],['Chunian',30.9600,73.9800,3],['Depalpur',30.6700,73.6500,3],['Pattoki',31.0200,73.8500,3],
['Shorkot',30.8300,72.1000,3],['Mailsi',29.8000,72.1700,3]
];
/* Punjab border (lon,lat) - hath se banaya hua approximate outline */
var BORDER=[
[71.55,32.95],[71.85,33.30],[72.20,33.90],[72.60,33.98],[72.95,33.90],[73.30,34.03],[73.60,33.85],[73.62,33.50],[73.85,33.15],
[73.95,32.95],[74.15,32.75],[74.40,32.68],[74.72,32.62],[75.05,32.38],[75.15,32.20],[74.95,31.95],[74.65,31.62],[74.58,31.20],
[74.50,30.95],[74.10,30.45],[73.85,30.05],[73.30,29.75],[72.70,29.35],[72.00,28.75],[71.40,28.30],[70.80,27.95],[70.20,27.72],
[69.75,28.02],[69.55,28.40],[69.55,29.00],[69.75,29.60],[69.95,30.15],[69.90,30.75],[70.10,31.10],[70.45,31.25],[70.75,31.60],
[70.95,32.00],[71.20,32.45],[71.35,32.78]
];
var RIVERS=[
 {w:5.2,p:[[72.25,33.9],[71.85,33.3],[71.55,32.95],[71.45,32.5],[71.25,32.0],[71.05,31.6],[70.95,31.2],[70.75,30.7],[70.65,30.3],[70.55,29.7],[70.4,29.0],[70.1,28.4],[69.75,28.0]]},
 {w:3.6,p:[[73.9,33.05],[73.72,32.93],[73.2,32.6],[72.7,32.15],[72.35,31.6],[72.15,31.15]]},
 {w:4.0,p:[[74.65,32.75],[74.1,32.45],[73.5,32.1],[72.98,31.8],[72.4,31.35],[72.15,31.15],[71.6,30.5],[71.2,29.8],[70.95,29.35],[70.4,28.95]]},
 {w:3.0,p:[[75.05,32.3],[74.7,32.0],[74.25,31.6],[73.7,31.1],[73.0,30.75],[72.35,30.7],[71.6,30.5]]},
 {w:3.2,p:[[74.55,31.15],[74.0,30.4],[73.4,30.05],[72.5,29.7],[71.8,29.35],[71.0,29.35]]}
];
var HIGHWAYS=[
 {m:1,p:[[74.34,31.58],[73.8,32.0],[73.3,32.3],[72.8,32.65],[73.05,33.1],[73.02,33.6]]},
 {p:[[74.34,31.55],[74.19,32.19],[74.08,32.57],[73.73,32.93],[73.02,33.57],[72.36,33.76]]},
 {p:[[74.34,31.55],[73.9,31.2],[73.45,30.81],[73.1,30.67],[72.35,30.3],[71.52,30.16],[71.68,29.4],[70.3,28.42],[70.13,28.3]]},
 {m:1,p:[[73.13,31.45],[72.48,30.97],[72.2,30.6],[71.52,30.16]]},
 {m:1,p:[[74.34,31.55],[73.8,31.6],[73.13,31.45]]},
 {p:[[71.54,32.58],[71.07,31.63],[70.94,30.96],[70.65,30.05],[70.33,29.1]]},
 {p:[[71.07,31.63],[71.8,31.5],[72.32,31.27]]},
 {p:[[73.13,31.45],[72.67,32.08],[72.3,32.3],[71.54,32.58]]},
 {p:[[72.32,31.27],[71.52,30.16]]}
];

/* ---------- projection ---------- */
var TH=27*Math.PI/180,C=Math.cos(TH),S=Math.sin(TH),K=.6;
function mp(lat,lon){return [(lon-69.6)*85.7,(34.1-lat)*100]}
function iso(x,y){return [x*C-y*S,K*(x*S+y*C)]}
function f(n){return Math.round(n*10)/10}
function el(t,a,p){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e}

/* catmull-rom -> bezier path (works in map or iso space) */
function sp(pts,closed,tf){
 var p=pts.map(function(q){return tf(q[0],q[1])}),n=p.length,d='M'+f(p[0][0])+' '+f(p[0][1]);
 var end=closed?n:n-1;
 for(var i=0;i<end;i++){
  var p0=p[closed?(i-1+n)%n:Math.max(i-1,0)],p1=p[i],p2=p[(i+1)%n],p3=p[closed?(i+2)%n:Math.min(i+2,n-1)];
  d+='C'+f(p1[0]+(p2[0]-p0[0])/6)+' '+f(p1[1]+(p2[1]-p0[1])/6)+' '+f(p2[0]-(p3[0]-p1[0])/6)+' '+f(p2[1]-(p3[1]-p1[1])/6)+' '+f(p2[0])+' '+f(p2[1]);
 }
 return d+(closed?'Z':'');
}
var ID=function(x,y){return [x,y]};
var bm=BORDER.map(function(q){return mp(q[1],q[0])});   /* border in map space */
function toMapPts(a){return a.map(function(q){return mp(q[1],q[0])})}

/* bounds in iso space */
var minX=1e9,maxX=-1e9,minY=1e9,maxY=-1e9;
bm.forEach(function(q){var s=iso(q[0],q[1]);minX=Math.min(minX,s[0]);maxX=Math.max(maxX,s[0]);minY=Math.min(minY,s[1]);maxY=Math.max(maxY,s[1])});
var DEPTH=15,PAD=26;
var VB={x:minX-PAD,y:minY-80,w:maxX-minX+PAD*2,h:maxY-minY+80+DEPTH+PAD+10};

/* ---------- build svg ---------- */
var svg=el('svg',{viewBox:VB.x+' '+VB.y+' '+VB.w+' '+VB.h,preserveAspectRatio:'xMidYMid meet',role:'img','aria-label':'3D map of Punjab, Pakistan showing its cities with pins for Bhakkar and Notak'},host);
var defs=el('defs',{},svg);
var bg=el('radialGradient',{id:'m3bg',cx:'.25',cy:'.1',r:'1.2'},defs);
el('stop',{offset:'0','stop-color':'#ffffff'},bg);el('stop',{offset:'.55','stop-color':'#e9f0f6'},bg);el('stop',{offset:'1','stop-color':'#d3dfea'},bg);
el('rect',{x:VB.x-2000,y:VB.y-2000,width:VB.w+4000,height:VB.h+4000,fill:'url(#m3bg)'},svg);
var bl=el('filter',{id:'m3bl',x:'-20%',y:'-20%',width:'140%',height:'140%'},defs);el('feGaussianBlur',{stdDeviation:'9'},bl);
var cp=el('clipPath',{id:'m3cp'},defs);el('path',{d:sp(bm,true,ID)},cp);

var isoD=sp(bm,true,iso);
/* shadow + extrusion */
el('path',{d:isoD,transform:'translate(14,'+(DEPTH+16)+')',fill:'rgba(60,85,120,.38)',filter:'url(#m3bl)'},svg);
function mix(a,b,t){return Math.round(a+(b-a)*t)}
for(var i=DEPTH;i>=1;i--){
 var t=i/DEPTH;
 el('path',{d:isoD,transform:'translate(0,'+i+')',fill:'rgb('+mix(246,196,t)+','+mix(247,205,t)+','+mix(245,214,t)+')',stroke:'rgba(150,165,180,.35)','stroke-width':.4,'stroke-linejoin':'round'},svg);
}
/* top face, drawn in map space and tilted with one matrix */
var top=el('g',{transform:'matrix('+C+','+(K*S)+','+(-S)+','+(K*C)+',0,0)'},svg);
el('path',{d:sp(bm,true,ID),fill:'#f5f3ec'},top);
var cl=el('g',{'clip-path':'url(#m3cp)'},top);
/* landcover */
var seed=11;function rnd(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646}
function patch(pts,fill,op){el('path',{d:sp(toMapPts(pts),true,ID),fill:fill,opacity:op==null?1:op},cl)}
patch([[71.3,29.3],[72.6,29.5],[73.8,30.0],[73.2,29.4],[72.2,28.8],[71.2,28.2],[70.6,28.2],[70.8,28.9]],'#efe5c8',.95);          /* Cholistan */
patch([[69.5,28.3],[69.9,28.3],[70.2,29.5],[70.35,30.8],[70.25,31.25],[69.7,31.0],[69.4,29.5]],'#e1e8d4',.95);                    /* Koh-e-Suleiman */
patch([[72.3,32.9],[73.1,32.75],[73.6,32.85],[73.2,33.1],[72.6,33.1]],'#e1e8d4',.95);                                             /* Salt Range */
patch([[72.9,33.5],[73.6,33.6],[73.9,33.3],[73.4,33.95],[72.9,33.9]],'#dce9cf',.95);                                              /* murree hills */
for(var g=0;g<70;g++){
 var lo=70+rnd()*5,la=28.2+rnd()*5.6,m=mp(la,lo),r=4+rnd()*11;
 el('ellipse',{cx:f(m[0]),cy:f(m[1]),rx:f(r*1.3),ry:f(r),transform:'rotate('+Math.round(rnd()*180)+' '+f(m[0])+' '+f(m[1])+')',fill:rnd()<.8?'#dbe9c6':'#e8efd9',opacity:.85},cl);
}
/* rivers */
RIVERS.forEach(function(r){
 var d=sp(toMapPts(r.p),false,ID);
 el('path',{d:d,fill:'none',stroke:'#9ccbec','stroke-width':r.w+1.4,'stroke-linecap':'round','stroke-linejoin':'round',opacity:.9},cl);
 el('path',{d:d,fill:'none',stroke:'#b8dcf4','stroke-width':r.w,'stroke-linecap':'round','stroke-linejoin':'round'},cl);
});
/* district roads: har shehar ko 2 qareebi shehron se jodo */
var NODES=CITIES.filter(function(c){return c[3]<3}).map(function(c){return {la:c[1],lo:c[2]}});
NODES.push({la:PINS.city.lat,lo:PINS.city.lon});
var done={};
function dist(a,b){var dx=(a.lo-b.lo)*.857,dy=a.la-b.la;return Math.sqrt(dx*dx+dy*dy)}
NODES.forEach(function(a,i){
 NODES.map(function(b,j){return {j:j,d:i===j?9:dist(a,b)}}).sort(function(x,y){return x.d-y.d}).slice(0,2).forEach(function(n){
  var k=Math.min(i,n.j)+'-'+Math.max(i,n.j);if(done[k])return;done[k]=1;
  var b=NODES[n.j],A=mp(a.la,a.lo),B=mp(b.la,b.lo),mx=(A[0]+B[0])/2+(rnd()-.5)*8,my=(A[1]+B[1])/2+(rnd()-.5)*8;
  var d='M'+f(A[0])+' '+f(A[1])+'Q'+f(mx)+' '+f(my)+' '+f(B[0])+' '+f(B[1]);
  el('path',{d:d,fill:'none',stroke:'#dcd8cb','stroke-width':2.3,'stroke-linecap':'round'},cl);
  el('path',{d:d,fill:'none',stroke:'#fff','stroke-width':1.2,'stroke-linecap':'round'},cl);
 });
});
/* Notak - Bhakkar road */
(function(){var A=mp(PINS.city.lat,PINS.city.lon),B=mp(PINS.vil.lat,PINS.vil.lon),d='M'+f(A[0])+' '+f(A[1])+'L'+f(B[0])+' '+f(B[1]);
 el('path',{d:d,stroke:'#dcd8cb','stroke-width':2.3,'stroke-linecap':'round'},cl);el('path',{d:d,stroke:'#fff','stroke-width':1.2,'stroke-linecap':'round'},cl)})();
/* highways */
HIGHWAYS.forEach(function(h){
 var d=sp(toMapPts(h.p),false,ID);
 el('path',{d:d,fill:'none',stroke:h.m?'#e08a1e':'#e8b13d','stroke-width':h.m?4.4:3.8,'stroke-linecap':'round','stroke-linejoin':'round'},cl);
 el('path',{d:d,fill:'none',stroke:h.m?'#f6a93a':'#fbd56b','stroke-width':h.m?2.6:2.2,'stroke-linecap':'round','stroke-linejoin':'round'},cl);
});
/* province label */
var pt=mp(30.2,72.6);
el('text',{x:f(pt[0]),y:f(pt[1]),'text-anchor':'middle','class':'m3prov'},top).textContent='PUNJAB';
/* cities (dots + flat labels) */
var tierEls={2:[],3:[]};
CITIES.forEach(function(c){
 var m=mp(c[1],c[2]),t=c[3],g=el('g',{'class':'m3c t'+t},top);
 el('circle',{cx:f(m[0]),cy:f(m[1]),r:t===1?3.3:2.3,fill:'#fff',stroke:t===1?'#5b6574':'#8a94a2','stroke-width':1.3},g);
 var tx=el('text',{x:f(m[0]+5),y:f(m[1]+3.6),'class':'m3l l'+t},g);tx.textContent=c[0];
});
/* pins: staying upright, outside the tilted group */
var pg=el('g',{'class':'m3pins'},svg),pinEls={};
['city','vil'].forEach(function(k){
 var p=PINS[k],m=mp(p.lat,p.lon),s=iso(m[0],m[1]);
 var g=el('g',{'class':'m3pin '+k,tabindex:0,role:'button','aria-label':p.name+' '+p.tag}),id='m3g'+k;
 var gd=el('defs',{},g),lg=el('linearGradient',{id:id,x1:0,y1:0,x2:1,y2:1},gd);
 el('stop',{offset:0,'stop-color':p.c1},lg);el('stop',{offset:1,'stop-color':p.c2},lg);
 el('ellipse',{cx:0,cy:0,rx:9,ry:4.5,fill:'rgba(0,0,0,.28)'},g);
 var ring=el('ellipse',{cx:0,cy:0,rx:12,ry:6,fill:'none',stroke:p.c2,'stroke-width':2,'class':'m3ring'},g);
 var body=el('g',{'class':'m3bob'},g);
 var big=(k==='vil'&&window.PK_PHOTO),Y=big?-42:-28;
 el('path',{d:big?'M0 0C-6 -13.5 -22.5 -25.5 -22.5 -42a22.5 22.5 0 0 1 45 0C22.5 -25.5 6 -13.5 0 0Z':'M0 0C-4 -9 -15 -17 -15 -28a15 15 0 0 1 30 0C15 -17 4 -9 0 0Z',fill:'url(#'+id+')',stroke:'#fff','stroke-width':1.6,'stroke-linejoin':'round'},body);
 el('circle',{cx:0,cy:Y,r:big?19.5:8.5,fill:'#fff'},body);
 if(big){var cid='m3pc'+k,pc=el('clipPath',{id:cid},gd);el('circle',{cx:0,cy:Y,r:17.5},pc);
  var im=el('image',{x:-17.5,y:Y-17.5,width:35,height:35,preserveAspectRatio:'xMidYMid slice','clip-path':'url(#'+cid+')','class':'m3ph'},body);
  im.setAttribute('href',window.PK_PHOTO);}
 else el('text',{x:0,y:-24.3,'text-anchor':'middle','class':'m3ch',fill:p.c2},body).textContent=p.ch;
 var left=p.side==='l',tw=p.name.length*8.6+16,tx0=left?-(tw+22):(big?32:22);
 var tg=el('g',{'class':'m3tag'},body);
 el('rect',{x:tx0,y:-47,width:tw,height:30,rx:9,fill:'#fff',stroke:p.c2,'stroke-width':1.4},tg);
 el('text',{x:tx0+tw/2,y:-37.5,'text-anchor':'middle','class':'m3ts',fill:p.c2},tg).textContent=p.tag.toUpperCase();
 el('text',{x:tx0+tw/2,y:-23.5,'text-anchor':'middle','class':'m3tn'},tg).textContent=p.name;
 pg.appendChild(g);pinEls[k]={g:g,x:s[0],y:s[1]};
});

/* ---------- zoom / pan ---------- */
var st={cx:VB.x+VB.w/2,cy:VB.y+VB.h/2,z:1},BASE={cx:st.cx,cy:st.cy};
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,raf=0,active='';
function clampC(){
 var w=VB.w/st.z,h=VB.h/st.z;
 st.cx=Math.max(VB.x+w/2-30,Math.min(VB.x+VB.w-w/2+30,st.cx));
 st.cy=Math.max(VB.y+h/2-30,Math.min(VB.y+VB.h-h/2+30,st.cy));
}
function apply(){
 clampC();
 var w=VB.w/st.z,h=VB.h/st.z;
 svg.setAttribute('viewBox',f(st.cx-w/2)+' '+f(st.cy-h/2)+' '+f(w)+' '+f(h));
 var ps=1/Math.pow(st.z,.62);
 ['city','vil'].forEach(function(k){var p=pinEls[k];p.g.setAttribute('transform','translate('+f(p.x)+','+f(p.y)+') scale('+ps.toFixed(3)+')')});
 svg.classList.toggle('z2',st.z>=1.5);svg.classList.toggle('z3',st.z>=2.6);
 lm&&(lm.style.touchAction=st.z>1.02?'none':'pan-y');
}
function animTo(cx,cy,z){
 cancelAnimationFrame(raf);
 if(rm){st.cx=cx;st.cy=cy;st.z=z;apply();return}
 var a={cx:st.cx,cy:st.cy,z:st.z},t0=performance.now(),D=900;
 (function step(now){
  var t=Math.min(1,(now-t0)/D),e=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  /* zoom exponential, centre linear => smooth fly-to */
  st.z=a.z*Math.pow(z/a.z,e);st.cx=a.cx+(cx-a.cx)*e;st.cy=a.cy+(cy-a.cy)*e;apply();
  if(t<1)raf=requestAnimationFrame(step);
 })(t0);
}
function mark(v){
 active=v;
 ['city','vil'].forEach(function(k){pinEls[k].g.classList.toggle('on',v===k)});
}
function focus(v){
 mark(v);
 if(v==='city'||v==='vil'){var p=pinEls[v],z=6;animTo(p.x,p.y-12/Math.pow(z,.62)-VB.h*.01,z)}
 else animTo(BASE.cx,BASE.cy,1);
}
function zoomBy(m){var z=Math.max(1,Math.min(10,st.z*m));animTo(st.cx,st.cy,z)}

/* drag + pinch */
var ptr={},pd=0,drag=null;
svg.addEventListener('pointerdown',function(e){
 ptr[e.pointerId]={x:e.clientX,y:e.clientY};
 var ids=Object.keys(ptr);
 if(ids.length===2){var a=ptr[ids[0]],b=ptr[ids[1]];pd=Math.hypot(a.x-b.x,a.y-b.y)}
 drag={x:e.clientX,y:e.clientY};cancelAnimationFrame(raf);
});
svg.addEventListener('pointermove',function(e){
 if(!ptr[e.pointerId])return;
 var sc=svg.getScreenCTM();if(!sc)return;var k=sc.a;
 ptr[e.pointerId]={x:e.clientX,y:e.clientY};
 var ids=Object.keys(ptr);
 if(ids.length===2){
  var a=ptr[ids[0]],b=ptr[ids[1]],d=Math.hypot(a.x-b.x,a.y-b.y);
  if(pd){st.z=Math.max(1,Math.min(10,st.z*d/pd));apply()}pd=d;return;
 }
 if(drag&&st.z>1.02){
  try{svg.setPointerCapture(e.pointerId)}catch(_){}st.cx-=(e.clientX-drag.x)/k;st.cy-=(e.clientY-drag.y)/k;drag={x:e.clientX,y:e.clientY};apply();
 }
});
function up(e){delete ptr[e.pointerId];pd=0;drag=Object.keys(ptr).length?{x:e.clientX,y:e.clientY}:null}
svg.addEventListener('pointerup',up);svg.addEventListener('pointercancel',up);
svg.addEventListener('dblclick',function(){zoomBy(2)});
svg.addEventListener('wheel',function(e){if(st.z>1.02||e.ctrlKey){e.preventDefault();zoomBy(e.deltaY<0?1.3:1/1.3)}},{passive:false});

/* pin tap -> gallery.js ke go() ko batao, warna khud zoom karo */
['city','vil'].forEach(function(k){
 function hit(){var t=document.getElementById(k==='city'?'tcity':'tvil');if(t)t.click();else focus(active===k?'both':k)}
 pinEls[k].g.addEventListener('click',function(e){e.stopPropagation();hit()});
 pinEls[k].g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();hit()}});
});

/* zoom buttons */
var zb=document.createElement('div');zb.className='m3z';
zb.innerHTML='<button type="button" aria-label="Zoom in">+</button><button type="button" aria-label="Zoom out">&minus;</button>';
host.appendChild(zb);
zb.children[0].addEventListener('click',function(){zoomBy(1.8)});
zb.children[1].addEventListener('click',function(){zoomBy(1/1.8)});
var ti=document.createElement('div');ti.className='m3t';
ti.innerHTML='<small>Punjab &middot; Pakistan</small><b>'+CITIES.length+'+ cities</b>';host.appendChild(ti);

apply();
window.PK3D={focus:focus,zoomBy:zoomBy};
if(lm&&!lm.classList.contains('gmode'))lm.classList.add('m3mode');

/* Leaflet load na ho (offline) to bhi 3D map aur tabs/tiles kaam karein */
if(window.PK_NOLEAF&&lm){
 var tabs=[].slice.call(document.querySelectorAll('#lsw button'));
 tabs.forEach(function(b){b.addEventListener('click',function(){
  var s=b.dataset.s;if(s!=='3d'&&s!=='google'){return}
  tabs.forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed','false')});b.classList.add('on');b.setAttribute('aria-pressed','true');
  lm.classList.toggle('m3mode',s==='3d');lm.classList.toggle('gmode',s==='google');
  var gm=document.getElementById('gm');if(s==='google'&&gm&&!gm.src)gm.src='https://maps.google.com/maps?q=31.6334,71.0654&z=11&hl=en&output=embed';
 })});
 [['tcity','city'],['tvil','vil']].forEach(function(a){var t=document.getElementById(a[0]);t&&t.addEventListener('click',function(){
  var v=active===a[1]?'both':a[1];focus(v);['tcity','tvil'].forEach(function(i){document.getElementById(i).classList.toggle('on',(i==='tcity'&&v==='city')||(i==='tvil'&&v==='vil'))})})});
 var r=document.getElementById('mrst');r&&r.addEventListener('click',function(){focus('both')});
}
})();
