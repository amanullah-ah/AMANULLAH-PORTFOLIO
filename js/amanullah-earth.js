/* ===== Earth: zoomed globe, Punjab glow, city pins, Notak callout (canvas, no internet needed) =====
   Sab pins/labels Earth ki surface par lat/lon se lage hain (globe ke saath hilte hain). */
(function(){
var cv=document.getElementById('eglobe');if(!cv)return;
var ctx=cv.getContext('2d');if(!ctx)return;
var NOTAK={lat:31.4833,lon:71.0333},BHK={lat:31.6334,lon:71.0654},PCEN={lon:72.3,lat:31.3};
var D2R=Math.PI/180,TAU=Math.PI*2;
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var LAND=[
/* N America */[-168,66,-156,71,-140,70,-125,70,-110,68,-95,70,-85,69,-82,63,-93,58,-90,51,-80,52,-79,57,-77,62,-70,60,-64,58,-60,54,-56,52,-60,47,-66,45,-70,43,-74,40,-76,35,-81,31,-80,26,-82,26,-84,30,-90,29,-94,29,-97,26,-97,21,-95,18,-91,19,-90,21,-87,21,-88,16,-84,15,-83,10,-79,9,-77,8,-80,7,-83,8,-86,11,-90,13,-94,16,-98,16,-105,20,-106,23,-109,26,-112,29,-115,31,-117,33,-121,35,-124,40,-124,46,-125,49,-130,54,-135,58,-140,60,-148,60,-152,58,-158,56,-163,55,-158,59,-165,62,-166,64],
/* Greenland */[-73,78,-60,82,-30,83,-20,80,-20,72,-24,69,-40,65,-44,60,-50,62,-54,67,-58,75,-70,77],
/* S America */[-77,8,-72,12,-64,10.5,-60,8,-52,5,-50,0,-44,-2,-35,-5,-35,-9,-39,-14,-41,-22,-48,-26,-49,-30,-53,-34,-58,-35,-57,-38,-62,-39,-65,-42,-66,-47,-69,-51,-68,-54,-72,-54,-74,-48,-74,-40,-72,-30,-70,-18,-76,-14,-81,-6,-80,-2,-78,2],
/* Eurasia */[-9,37,-9,43,-1,44,-2,47,-4.5,48.5,1,51,4,52,8,54,9,57,10,54,14,54,20,54.5,24,57,24,59.5,22,60,21,62,24,65,28,67,31,70,41,67,44,68,55,68,60,69,70,73,80,73,90,76,100,78,112,74,130,71,142,72,160,70,170,70,180,68,180,65,170,60,165,60,162,57,156,51,155,57,150,59,142,59,137,54,141,52,140,48,135,43,130,42,129,35,126,35,126,38,125,40,122,40,119,39,122,37,119,35,122,31,120,27,117,23,110,21,108,22,106,18,109,12,105,9,103,10,100,13,100,8,103,1.5,100,3,98,8,98,16,94,17,92,22,88,22,85,20,80,15,80,10,77,8,73,17,72,21,68,23,66,25,62,25,57,26,56,27,52,28,49,30,48,29.5,51,25,52,24,56,26,59,22,56,17,52,16,45,13,43,13,40,20,36,28,35,30,34,31,36,36,30,36.5,27,37,26,40,23,40,23,38,20,40,19,42,14,45.5,12,44.5,16,41.5,16,38,12,41.5,9,44,3,43,0,39,-2,37,-5,36],
/* Scandinavia */[5,59,5,62,12,66,16,69,22,70,28,71,30,69,28,66,22,65.5,21,63,17.5,61,19,60,17,57,13,55.5,11,59,8,58],
/* Africa */[-17,21,-16,28,-10,30,-6,36,10,37,11,33,20,31,25,32,32,31,34,28,38,20,43,12,51,12,50,8,42,-1,40,-10,40,-15,35,-24,33,-28,28,-33,20,-35,18,-32,14,-23,12,-17,13,-9,9,-1,9,4,5,6,-3,5,-8,4,-13,8,-17,14],
/* Madagascar */[44,-25,47,-25,50,-15,49,-12,44,-17],
/* UK */[-5,50,1,51,1.5,53,-2,56,-3,58.5,-6,58,-5,55,-3,54,-4.5,52],
/* Ireland */[-10,52,-6,52,-6,55,-9,54],
/* Iceland */[-24,64,-14,64,-15,66,-22,66],
/* Japan */[130,31,133,34,140,35.5,142,40,142,45,145,43.5,141,39.5,141,36,137,34.5,132,33],
/* Sumatra */[95,5,98,4,104,-2,106,-6,102,-4,96,0],
/* Borneo */[109,1,113,3,117,7,119,5,117,-1,116,-4,111,-3],
/* Java */[105,-6,114,-7,114,-8.5,106,-7],
/* New Guinea */[131,-1,138,-2,146,-6,150,-10,142,-9,138,-8,134,-4],
/* Australia */[114,-22,122,-18,129,-15,131,-12,136,-12,136,-15,140,-17,142,-11,146,-19,153,-26,153,-30,150,-37,146,-39,141,-38,138,-35,135,-35,131,-31.5,124,-33.5,116,-35,115,-31,113,-26],
/* NZ N */[172,-34.5,178,-38,175,-41.5,173,-40],
/* NZ S */[172,-41,174,-42,170,-46,167,-46],
/* Sri Lanka */[80,6,82,7.5,80,9.5],
/* Antarctica */[-180,-90,-180,-75,-150,-77,-120,-74,-90,-72,-65,-66,-60,-64,-58,-70,-45,-78,-30,-78,0,-70,30,-69,70,-67,90,-66,120,-66,150,-69,170,-72,180,-75,180,-90]
];
var SEAS=[
/* Caspian */[47,45,53,47,54,41,53,37,50,37,49,40],
/* Black sea */[28,42,28,45,33,46,38,47,41,43,36,41.5,31,41],
/* Gulf of Bothnia */[17.5,61.5,17.5,63,21,65,25,65.5,24,64,21.5,62,22,60.5]
];
var PAK=[61,25,66,25,68,23.7,71,24.5,71,27.5,74,28,75,32,74.5,34.5,77,35.5,75,37,73,36.5,71.5,36.8,71,35,71,34,70,33.5,69.5,31.5,66,29.5,62,29.5,61,28];

/* Punjab outline (approx, lon,lat) */
var PUNJAB=[71.55,33.0,71.9,33.55,72.35,33.95,72.95,33.9,73.4,33.8,73.75,33.2,74.25,33.0,74.65,32.65,74.8,32.4,75.15,32.25,74.75,31.85,74.6,31.55,74.6,31.1,74.1,30.55,73.9,30.2,73.3,29.95,72.9,29.55,72.2,29.1,71.7,28.65,71.0,28.3,70.3,28.0,69.7,27.9,69.55,28.25,69.75,29.0,69.85,29.6,70.0,30.2,70.15,30.8,70.8,31.4,70.9,31.9,71.25,32.35,71.35,32.8];
var RIVERS=[
 [72.25,33.9,71.9,33.5,71.55,33.0,71.35,32.5,71.25,32.0,71.1,31.6,71.0,31.2,70.85,30.8,70.85,30.4,70.7,30.0,70.55,29.4,70.4,28.9,70.0,28.4],
 [73.65,33.15,73.45,32.95,73.0,32.6,72.6,32.2,72.3,31.7,72.1,31.15,71.5,30.6,71.1,30.3,70.9,29.6],
 [74.5,32.7,74.1,32.3,73.6,31.9,72.9,31.4,72.1,31.15],
 [75.0,32.4,74.6,32.0,74.3,31.6,73.5,31.0,72.4,30.5,71.8,30.0,71.2,29.5],
 [74.55,30.95,73.5,30.4,72.8,29.9,72.0,29.4,71.1,29.3]];
var ROADS=[
 [73.04,33.6,73.4,32.9,73.7,32.3,74.0,31.8,74.35,31.55],
 [74.35,31.55,73.7,31.5,73.08,31.42,72.3,31.0,71.52,30.2],
 [74.35,31.55,73.45,30.81,73.1,30.67,72.3,30.4,71.52,30.2],
 [73.04,33.6,72.4,33.3,72.0,32.9,71.53,32.58,71.07,31.63],
 [71.07,31.63,71.2,31.0,71.19,30.07,71.52,30.2],
 [72.23,33.77,72.86,32.93,73.08,31.42]];
var CITIES=[['Lahore',74.35,31.55,2],['Multan',71.52,30.2,2],['Faisalabad',73.08,31.42,1],['Rawalpindi',73.04,33.6,1],['Attock',72.23,33.77,1],['Mianwali',71.53,32.58,0],['Jhelum',73.73,32.93,0],['Chakwal',72.86,32.93,0],['Layyah',70.94,30.96,0],['Sahiwal',73.1,30.67,0],['Okara',73.45,30.81,0],['Muzaffargarh',71.19,30.07,0]];

function smooth(P,it){for(var n=0;n<it;n++){var Q=[],m=P.length/2;for(var i=0;i<m;i++){var a=i*2,b=((i+1)%m)*2;Q.push(.75*P[a]+.25*P[b],.75*P[a+1]+.25*P[b+1],.25*P[a]+.75*P[b],.25*P[a+1]+.75*P[b+1])}P=Q}return P}
var PS=smooth(PUNJAB,3);

/* ---------- masks ---------- */
function mk(w,h){var c=document.createElement('canvas');c.width=w;c.height=h;return c}
function alphaOf(c,W,H){var d=c.getImageData(0,0,W,H).data,a=new Uint8Array(W*H);for(var i=0;i<a.length;i++)a[i]=d[i*4+3];return a}
function polyR(c,P,x0,y1,k){c.beginPath();for(var i=0;i<P.length;i+=2){var x=(P[i]-x0)*k,y=(y1-P[i+1])*k;i?c.lineTo(x,y):c.moveTo(x,y)}c.closePath();c.fill()}
var MW=1440,MH=720;
var lc=mk(MW,MH),lx=lc.getContext('2d');lx.fillStyle='#fff';LAND.forEach(function(p){polyR(lx,p,-180,90,4)});
lx.globalCompositeOperation='destination-out';SEAS.forEach(function(p){polyR(lx,p,-180,90,4)});
var LM=alphaOf(lx,MW,MH);
/* regional land mask: lon 58..80, lat 18..40 @ 50px/deg */
var RW=1100,RH=1100,rc=mk(RW,RH),rx=rc.getContext('2d');rx.fillStyle='#fff';LAND.forEach(function(p){polyR(rx,p,58,40,50)});
rx.globalCompositeOperation='destination-out';SEAS.forEach(function(p){polyR(rx,p,58,40,50)});
var RL=alphaOf(rx,RW,RH);
/* Punjab mask: lon 68.5..76, lat 27..35 @ 100px/deg */
var PW=750,PH=800,pcv=mk(PW,PH),px=pcv.getContext('2d');px.fillStyle='#fff';polyR(px,PS,68.5,35,100);
var PM=alphaOf(px,PW,PH);
/* clouds */
var CW=1024,CH=512,cc=mk(CW,CH),cx2=cc.getContext('2d');
(function(){var s=7;function r(){s=(s*16807)%2147483647;return s/2147483647}
 for(var i=0;i<230;i++){var lat=(r()<.6?(r()-.5)*70:(r()<.5?1:-1)*(35+r()*35)),x=r()*CW,y=(90-lat)/180*CH,R=14+r()*38,a=.18+r()*.4;
  for(var k=-1;k<=1;k++){var gx=x+k*CW,g=cx2.createRadialGradient(gx,y,0,gx,y,R);g.addColorStop(0,'rgba(255,255,255,'+a+')');g.addColorStop(1,'rgba(255,255,255,0)');cx2.fillStyle=g;cx2.fillRect(gx-R,y-R,R*2,R*2)}}})();
var CM=alphaOf(cx2,CW,CH);
/* value noise tile (wraps) */
var NS=256,NT=new Float32Array(NS*NS);(function(){var s=99;function r(){s=(s*16807)%2147483647;return s/2147483647}
 var A=new Float32Array(NS*NS);for(var i=0;i<A.length;i++)A[i]=r();
 for(var p=0;p<2;p++){var B=new Float32Array(NS*NS);for(var y=0;y<NS;y++)for(var x=0;x<NS;x++){var t=0;for(var dy=-1;dy<=1;dy++)for(var dx=-1;dx<=1;dx++)t+=A[((y+dy+NS)&255)*NS+((x+dx+NS)&255)];B[y*NS+x]=t/9}A=B}
 var mn=1e9,mx=-1e9;for(var i=0;i<A.length;i++){if(A[i]<mn)mn=A[i];if(A[i]>mx)mx=A[i]}
 for(var i=0;i<A.length;i++)NT[i]=(A[i]-mn)/(mx-mn)})();
function nz(u,v){var x=Math.floor(u),y=Math.floor(v),fx=u-x,fy=v-y;fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);
 var x0=x&255,x1=(x+1)&255,y0=(y&255)*NS,y1=((y+1)&255)*NS;
 var a=NT[y0+x0],b=NT[y0+x1],c=NT[y1+x0],d=NT[y1+x1];return a+(b-a)*fx+(c-a)*fy+(a-b-c+d)*fx*fy}
function lerp(a,b,t){return a+(b-a)*t}
function sstep(a,b,x){var t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t)}
function easeIO(k){return k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2}

/* ---------- photo ---------- */
var ph=new Image(),phok=false;ph.onload=function(){phok=true};if(window.PK_PHOTO)ph.src=window.PK_PHOTO;

/* ---------- state / camera ---------- */
var W=0,H=0,dpr=1,bs=.75,bw=0,bh=0,img,buf32,gcv=mk(2,2),gx=gcv.getContext('2d');
var Rs=300,cx=0,cy=0,Z=1,sp0=0,cp0=1,l0=0,Rs0,Rs1,ZP,ZA=40*D2R;
var eL=0,eT=0,spinLon=105,vT=0,vL=0,last=0,TT=0,wasVis=false,drag=false,lx0=0,ly0=0,panLon=0,panLat=0,idleAt=0;
var uiA=0,sc=1;
function dest(lat,lon,brg,dist){var p=lat*D2R,l=lon*D2R,sd=Math.sin(dist),cd=Math.cos(dist);
 var p2=Math.asin(Math.sin(p)*cd+Math.cos(p)*sd*Math.cos(brg));
 var l2=l+Math.atan2(Math.sin(brg)*sd*Math.cos(p),cd-Math.sin(p)*Math.sin(p2));return[p2/D2R,l2/D2R]}
function proj(lon,lat){
 var ph2=lat*D2R,dl=lon*D2R-l0,cpp=Math.cos(ph2);
 var cosc=sp0*Math.sin(ph2)+cp0*cpp*Math.cos(dl);
 var X=cpp*Math.sin(dl),Y=cp0*Math.sin(ph2)-sp0*cpp*Math.cos(dl);
 var th=Math.acos(Math.max(-1,Math.min(1,cosc))),s=Math.sqrt(X*X+Y*Y),zt=th*Z;
 if(zt>=Math.PI/2)return{x:0,y:0,v:false,a:0};
 var rho=Math.sin(zt),k=s>1e-9?rho/s:0;
 return{x:cx+X*k*Rs,y:cy-Y*k*Rs,v:true,a:sstep(Math.PI/2,Math.PI/2*.82,zt)};
}
function setCam(){
 var e=easeIO(eL),v=easeIO(vL);
 var Zt=lerp(ZP,ZP*1.9,v);Z=Math.exp(e*Math.log(Zt));
 Rs=lerp(Rs0,Rs1,e);
 var base=lerp(PCEN.lon,NOTAK.lon,v),off=((spinLon-base+540)%360+360)%360-180;
 var aLon=base+(1-e)*off,aLat=lerp(PCEN.lat,NOTAK.lat,v);
 var d=dest(aLat,aLon,135*D2R,e*ZA/Z);
 var swx=rm?0:Math.sin(TT*.23)*.1*e,swy=rm?0:Math.cos(TT*.17)*.07*e;
 var lat0=d[0]+panLat*e+swy-(1-e)*9,lon0=d[1]+panLon*e+swx;
 sp0=Math.sin(lat0*D2R);cp0=Math.cos(lat0*D2R);l0=lon0*D2R;
 cx=W/2;cy=H/2;var p=proj(aLon,aLat);
 var tx=W*.5,ty=H*.5;
 cx=lerp(W/2,tx-(p.x-W/2),e);cy=lerp(H/2,ty-(p.y-H/2),e);
 uiA=sstep(.72,.97,e)*(1-sstep(0,1,v)*.0);
}
function resize(){
 dpr=Math.min(window.devicePixelRatio||1,2);
 W=Math.max(120,cv.clientWidth);H=Math.max(120,cv.clientHeight);
 cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);
 bs=Math.min(.8,520/Math.max(W,H));bw=Math.max(60,Math.round(W*bs));bh=Math.max(60,Math.round(H*bs));
 img=ctx.createImageData(bw,bh);buf32=new Uint32Array(img.data.buffer);
 gcv.width=bw;gcv.height=bh;gx=gcv.getContext('2d');
 sc=Math.max(.8,Math.min(1.25,Math.min(W/390,H/380)));
 Rs0=Math.min(W,H)*.37;Rs1=Math.max(W*.8,H*1.05);
 var pd=Math.min(H*.108,W*.15);ZP=Math.max(3,Math.min(14,pd*57.2958/(Rs1*Math.cos(ZA))));
}

/* ---------- globe pixels ---------- */
var LD=[-.45,.5,.74],ll=Math.hypot(LD[0],LD[1],LD[2]);LD=[LD[0]/ll,LD[1]/ll,LD[2]/ll];
var HV=[LD[0],LD[1],LD[2]+1],hl=Math.hypot(HV[0],HV[1],HV[2]);HV=[HV[0]/hl,HV[1]/hl,HV[2]/hl];
function globe(t){
 var Rb=Rs*bs,cxb=cx*bs,cyb=cy*bs,cl=t*.0035,pulse=.5+.5*Math.sin(t*2.2);
 var wReg=sstep(2.2,4.5,Z),cloudK=lerp(.78,.3,sstep(1,6,Z)),gridK=1-sstep(1.2,2.4,Z);
 for(var j=0;j<bh;j++){
  var y=(cyb-(j+.5))/Rb,y2=y*y;
  for(var i=0;i<bw;i++){
   var k=j*bw+i,x=((i+.5)-cxb)/Rb,r2=x*x+y2;
   if(r2>=1){buf32[k]=0;continue}
   var rho=Math.sqrt(r2),c=Math.sqrt(1-r2),th=Math.asin(rho)/Z,sT=Math.sin(th),cT=Math.cos(th),kk=rho>1e-6?sT/rho:0,X=x*kk,Y=y*kk;
   var phi=Math.asin(Math.max(-1,Math.min(1,cT*sp0+Y*cp0)));
   var lam=l0+Math.atan2(X,cp0*cT-Y*sp0);
   var u=lam/TAU+.5;u-=Math.floor(u);var v=.5-phi/Math.PI;
   var lamd=u*360-180,phid=phi/D2R,land,co,R,G,B;
   if(lamd>=58&&lamd<80&&phid>=18&&phid<40){
    var ix=((lamd-58)*50)|0,iy=((40-phid)*50)|0;
    land=RL[iy*RW+ix]/255;
    co=Math.max(RL[iy*RW+Math.min(RW-1,ix+8)],RL[iy*RW+Math.max(0,ix-8)],RL[Math.min(RH-1,iy+8)*RW+ix],RL[Math.max(0,iy-8)*RW+ix])/255;
   }else{
    var mx=(u*MW)|0,my=Math.max(0,Math.min(MH-1,(v*MH)|0));
    land=LM[my*MW+mx]/255;
    co=Math.max(LM[my*MW+Math.min(MW-1,mx+6)],LM[my*MW+Math.max(0,mx-6)],LM[Math.min(MH-1,my+6)*MW+mx],LM[Math.max(0,my-6)*MW+mx])/255;
   }
   var ad=Math.abs(phid);
   if(land>0){
    /* global look */
    var gR,gG,gB,n0=.5+.5*Math.sin(lam*3.1+phi*2.3)*Math.sin(lam*5.7-phi*1.9+1.3);
    var dry=sstep(12,22,ad)*(1-sstep(30,42,ad))*(.55+.45*n0);
    gR=lerp(52,200,dry)+n0*18-6;gG=lerp(128,168,dry)+n0*14-6;gB=lerp(62,104,dry)+n0*8-4;
    var ice=sstep(64,74,ad);gR=lerp(gR,236,ice);gG=lerp(gG,242,ice);gB=lerp(gB,248,ice);
    var pm=0;
    if(lamd>=68.5&&lamd<76&&phid>=27&&phid<35)pm=PM[(((35-phid)*100)|0)*PW+(((lamd-68.5)*100)|0)]/255;
    if(pm>0&&wReg<1){var gg2=pm*(.5+.3*pulse)*(1-wReg);gR=lerp(gR,255,gg2);gG=lerp(gG,205,gg2);gB=lerp(gB,90,gg2)}
    var rR=gR,rG=gG,rB=gB;
    if(wReg>0&&lamd>=58&&lamd<80&&phid>=18&&phid<40){
     var n1=nz(lamd*1.3,phid*1.3),n2=nz(lamd*6,phid*6+40),n3=nz(lamd*24,phid*24+90);
     /* outside terrain */
     var oR=152,oG=122,oB=80,rock=1-Math.abs(2*n2-1);
     var west=1-sstep(69.4,71.4,lamd);
     if(west>0){var sh2=.62+.55*rock+(n3-.5)*.5;oR=lerp(oR,128*sh2,west);oG=lerp(oG,92*sh2,west);oB=lerp(oB,62*sh2,west)}
     var north=sstep(33.8,35.6,phid);
     if(north>0){var sn=sstep(.35,.65,n2*.6+n1*.4+north*.35);oR=lerp(oR,lerp(120,236,sn),north);oG=lerp(oG,lerp(108,240,sn),north);oB=lerp(oB,lerp(98,244,sn),north)}
     var east=sstep(74.3,75.4,lamd)*(1-north);
     if(east>0){oR=lerp(oR,70+n3*50,east);oG=lerp(oG,112+n3*40,east);oB=lerp(oB,44+n3*20,east)}
     /* fertile punjab */
     var fR=lerp(58,122,n1)+(n3-.5)*50+(n2-.5)*26,fG=lerp(138,190,n1)+(n3-.5)*44,fB=lerp(34,64,n1)+(n3-.5)*20;
     var sand=(1-sstep(28.6,30.2,phid))*sstep(70.6,71.9,lamd);
     if(sand>0){fR=lerp(fR,200+n3*30,sand);fG=lerp(fG,164+n3*24,sand);fB=lerp(fB,100+n3*14,sand)}
     var qR=lerp(oR,fR,pm),qG=lerp(oG,fG,pm),qB=lerp(oB,fB,pm);
     var edge=pm*(1-pm)*4;qR+=edge*30;qG+=edge*34;qB+=edge*4;
     rR=qR;rG=qG;rB=qB;
    }
    R=lerp(gR,rR,wReg);G=lerp(gG,rG,wReg);B=lerp(gB,rB,wReg);
    if(land<1){R=lerp(10,R,land);G=lerp(60,G,land);B=lerp(130,B,land)}
   }else{
    var dp=.5+.5*Math.sin(lam*2+phi*3);
    R=lerp(8,16,dp)+co*30;G=lerp(52,76,dp)+co*95;B=lerp(120,150,dp)+co*55;
   }
   var dif=x*LD[0]+y*LD[1]+c*LD[2];dif=dif>0?dif:0;
   var sh=.26+.86*Math.pow(dif,.85);
   R*=sh;G*=sh;B*=sh;
   var cu=u+cl;cu-=Math.floor(cu);
   var ca=CM[((v*CH)|0)*CW+((cu*CW)|0)]/255*cloudK;
   if(ca>0){var cs=Math.min(1.1,sh*1.05)*245;R=lerp(R,cs,ca);G=lerp(G,cs,ca);B=lerp(B,cs+4,ca)}
   if(land<1){var sp=Math.pow(Math.max(0,x*HV[0]+y*HV[1]+c*HV[2]),70)*.75*(1-land)*(1-ca);R+=sp*255;G+=sp*255;B+=sp*255}
   var fr=Math.pow(1-c,3)*(.45+.55*sh);R+=70*fr;G+=140*fr;B+=255*fr*.9;
   if(gridK>0){var gl=Math.abs(((lamd+7.5+720)%15)-7.5),gb=Math.abs(((phid+7.5+720)%15)-7.5);if(gl<.28||gb<.28){R+=9*gridK;G+=14*gridK;B+=22*gridK}}
   R=R>255?255:R<0?0:R;G=G>255?255:G<0?0:G;B=B>255?255:B<0?0:B;
   var ea=(1-rho)*Rb;ea=ea>1?1:ea;
   buf32[k]=((ea*255)<<24)|((B|0)<<16)|((G|0)<<8)|(R|0);
  }
 }
 gx.putImageData(img,0,0);
}

/* ---------- drawing helpers ---------- */
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function pinPath(x,y,r){var hy=y-1.9*r,psi=Math.acos(r/(1.9*r)),sn=Math.sin(psi),cs=Math.cos(psi);
 ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-r*sn,hy+r*cs);ctx.arc(x,hy,r,Math.atan2(cs,-sn),Math.atan2(cs,sn)+TAU,false);ctx.closePath()}
function pin(x,y,r,photo,a){
 var hy=y-1.9*r;ctx.save();ctx.globalAlpha*=a;
 ctx.fillStyle='rgba(0,0,0,.38)';ctx.beginPath();ctx.ellipse(x,y,r*.75,r*.26,0,0,TAU);ctx.fill();
 pinPath(x,y,r);var g=ctx.createRadialGradient(x-r*.35,hy-r*.4,r*.1,x,hy,r*1.25);g.addColorStop(0,'#ff7070');g.addColorStop(.5,'#e30d0d');g.addColorStop(1,'#8a0000');
 ctx.fillStyle=g;ctx.fill();ctx.lineWidth=Math.max(1,r*.12);ctx.strokeStyle='rgba(255,255,255,.9)';ctx.stroke();
 if(photo){ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x,hy,r*.8,0,TAU);ctx.fill();
  ctx.save();ctx.beginPath();ctx.arc(x,hy,r*.7,0,TAU);ctx.clip();
  if(phok&&ph.naturalWidth){var s=Math.max(r*1.4/ph.naturalWidth,r*1.4/ph.naturalHeight),iw=ph.naturalWidth*s,ih=ph.naturalHeight*s;ctx.drawImage(ph,x-iw/2,hy-ih*.46,iw,ih)}
  else{var gg=ctx.createLinearGradient(x,hy-r,x,hy+r);gg.addColorStop(0,'#8fb4e8');gg.addColorStop(1,'#3b5a96');ctx.fillStyle=gg;ctx.fillRect(x-r,hy-r,r*2,r*2);ctx.fillStyle='#e6edf9';ctx.beginPath();ctx.arc(x,hy-r*.12,r*.26,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(x,hy+r*.62,r*.5,r*.34,0,Math.PI,TAU);ctx.fill()}
  ctx.restore()}
 else{ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x,hy,r*.42,0,TAU);ctx.fill();ctx.fillStyle='rgba(0,0,0,.14)';ctx.beginPath();ctx.arc(x+r*.06,hy+r*.08,r*.3,0,TAU);ctx.fill()}
 ctx.restore();return hy}
function pill(txt,x,y,fs,a,opts){ctx.font='800 '+fs+'px Inter,system-ui,sans-serif';var w=ctx.measureText(txt).width+fs*.9,h=fs*1.55;
 var rx=x,ry=y-h/2;ctx.save();ctx.globalAlpha*=a;
 rr(ctx,rx,ry,w,h,h/2);ctx.fillStyle=(opts&&opts.bg)||'rgba(8,8,10,.8)';ctx.fill();
 if(opts&&opts.bd){ctx.lineWidth=1.2;ctx.strokeStyle=opts.bd;ctx.stroke()}
 ctx.fillStyle='#fff';ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillText(txt,rx+fs*.45,y+.5);ctx.restore();return{x:rx,y:ry,w:w,h:h}}
function hit(R,L){for(var i=0;i<L.length;i++){var b=L[i];if(R.x<b.x+b.w&&R.x+R.w>b.x&&R.y<b.y+b.h&&R.y+R.h>b.y)return true}return false}
function pathLL(P,close){var first=true,pts=0;ctx.beginPath();for(var i=0;i<P.length;i+=2){var p=proj(P[i],P[i+1]);if(!p.v){first=true;continue}first?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y);first=false;pts++}if(close)ctx.closePath();return pts}

/* ---------- overlays ---------- */
function drawMini(a){
 var w=Math.min(78,W*.2)*sc>96?96:Math.min(78,W*.2)*sc,x0=8,y0=44;
 var minLo=61,maxLo=77.2,minLa=23.6,maxLa=37.2,kx=w/((maxLo-minLo)*.86),h=(maxLa-minLa)*kx;
 function P(lo,la){return[x0+(lo-minLo)*.86*kx,y0+(maxLa-la)*kx]}
 ctx.save();ctx.globalAlpha*=a;
 function path(Q){ctx.beginPath();for(var i=0;i<Q.length;i+=2){var q=P(Q[i],Q[i+1]);i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1])}ctx.closePath()}
 ctx.shadowColor='rgba(255,210,80,.9)';ctx.shadowBlur=10;path(PAKP);ctx.fillStyle='#0a6a34';ctx.fill();ctx.shadowBlur=0;
 ctx.save();path(PAKP);ctx.clip();
 ctx.fillStyle='#f3f3f3';ctx.fillRect(x0-2,y0-2,w*.27+2,h+4);
 var cxm=x0+w*.52,cym=y0+h*.5,cr=w*.15;ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(cxm,cym,cr,0,TAU);ctx.fill();
 ctx.fillStyle='#0a6a34';ctx.beginPath();ctx.arc(cxm+cr*.38,cym-cr*.08,cr*.84,0,TAU);ctx.fill();
 ctx.fillStyle='#fff';ctx.font='900 '+(cr*1.1)+'px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('\u2605',cxm+cr*.78,cym-cr*.6);
 ctx.restore();
 ctx.shadowColor='rgba(255,40,40,.95)';ctx.shadowBlur=9;path(PS);ctx.fillStyle='#f01c1c';ctx.fill();ctx.shadowBlur=0;ctx.lineWidth=.8;ctx.strokeStyle='rgba(255,255,255,.75)';ctx.stroke();
 path(PAKP);ctx.lineWidth=1.1;ctx.strokeStyle='rgba(255,255,255,.55)';ctx.stroke();
 ctx.restore();
 var fs=Math.round(9.5*sc);pill('PAKISTAN',x0+w/2-(function(){ctx.font='800 '+fs+'px sans-serif';return (ctx.measureText('PAKISTAN').width+fs*.9)/2})(),y0+h+9*sc,fs,a,{bd:'rgba(255,205,60,.95)',bg:'rgba(8,8,10,.88)'});
}
function drawCard(a){
 var fs=12*sc;ctx.save();ctx.globalAlpha*=a;ctx.font='800 '+fs+'px Inter,system-ui,sans-serif';
 var t1='Notak Village',t2='Bhakkar District',t3='Punjab, Pakistan';
 var tw=Math.max(ctx.measureText(t1).width,ctx.measureText(t2).width,ctx.measureText(t3).width),pad=9*sc,iw=22*sc,cw=tw+pad*2+iw,ch=fs*3.9+pad;
 var x=W-8-cw,y=46*sc>50?50:46*sc;
 rr(ctx,x,y,cw,ch,10*sc);ctx.fillStyle='rgba(6,6,8,.86)';ctx.fill();ctx.lineWidth=1.2;ctx.strokeStyle='rgba(255,255,255,.4)';ctx.stroke();
 ctx.save();ctx.translate(x+pad+iw*.4,y+pad*.55);var s=iw/26;ctx.scale(s,s);
 ctx.beginPath();ctx.moveTo(0,28);ctx.bezierCurveTo(-4,18,-12,13,-12,6);ctx.arc(0,6,12,Math.PI,0);ctx.bezierCurveTo(12,13,4,18,0,28);
 var g=ctx.createLinearGradient(0,0,0,28);g.addColorStop(0,'#ff4a4a');g.addColorStop(1,'#a00000');ctx.fillStyle=g;ctx.fill();ctx.fillStyle='#111';ctx.beginPath();ctx.arc(0,7,5,0,TAU);ctx.fill();ctx.restore();
 ctx.textAlign='left';ctx.textBaseline='top';var tx=x+pad+iw+4*sc;
 ctx.fillStyle='#fff';ctx.font='900 '+(fs*1.1)+'px Inter,system-ui,sans-serif';ctx.fillText(t1,tx,y+pad*.55);
 ctx.fillStyle='#ffd400';ctx.font='800 '+fs+'px Inter,system-ui,sans-serif';ctx.fillText(t2,tx,y+pad*.55+fs*1.3);
 ctx.fillStyle='#fff';ctx.fillText(t3,tx,y+pad*.55+fs*2.5);ctx.restore();
}
function drawCompass(a){
 var r=15*sc,x=14*sc+r,y=H-14*sc-r-4;ctx.save();ctx.globalAlpha*=a;ctx.translate(x,y);
 ctx.beginPath();ctx.arc(0,0,r*1.02,0,TAU);ctx.fillStyle='rgba(6,6,10,.55)';ctx.fill();ctx.strokeStyle='rgba(255,255,255,.45)';ctx.lineWidth=1;ctx.stroke();
 function star(len,w,col,rot){ctx.save();ctx.rotate(rot);ctx.beginPath();ctx.moveTo(0,-len);ctx.lineTo(w,0);ctx.lineTo(0,len);ctx.lineTo(-w,0);ctx.closePath();ctx.fillStyle=col;ctx.fill();ctx.restore()}
 star(r*.82,r*.2,'#e8e8f0',0);star(r*.82,r*.2,'#e8e8f0',Math.PI/2);star(r*.5,r*.14,'#aab',Math.PI/4);star(r*.5,r*.14,'#aab',-Math.PI/4);
 ctx.beginPath();ctx.moveTo(0,-r*.82);ctx.lineTo(r*.2,0);ctx.lineTo(-r*.2,0);ctx.closePath();ctx.fillStyle='#ff3b3b';ctx.fill();
 ctx.fillStyle='#fff';ctx.font='900 '+(7.5*sc)+'px Inter,system-ui,sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
 ctx.fillText('N',0,-r-6*sc);ctx.fillText('S',0,r+6*sc);ctx.fillText('E',r+6*sc,0);ctx.fillText('W',-r-6*sc,0);ctx.restore();
}
function drawWedge(a,rib){
 var R=Math.min(58*sc,Math.min(W,H)*.2),icx=W-R-10,icy=H-R-10;ctx.save();ctx.globalAlpha*=a;
 /* wedge from ribbon */
 var ax=rib.x+rib.w,ay=rib.y+rib.h/2,ang=Math.atan2(ay-icy,ax-icx),d=.42;
 var p1=[icx+R*Math.cos(ang+d),icy+R*Math.sin(ang+d)],p2=[icx+R*Math.cos(ang-d),icy+R*Math.sin(ang-d)];
 var wg=ctx.createLinearGradient(ax,ay,icx,icy);wg.addColorStop(0,'rgba(255,214,60,.95)');wg.addColorStop(1,'rgba(255,214,60,.22)');
 ctx.beginPath();ctx.moveTo(ax,ay-3);ctx.lineTo(p1[0],p1[1]);ctx.lineTo(p2[0],p2[1]);ctx.lineTo(ax,ay+3);ctx.closePath();ctx.fillStyle=wg;ctx.fill();
 ctx.restore();
}
function drawInset(a,nx,ny,rib){
 var R=Math.min(58*sc,Math.min(W,H)*.2),icx=W-R-10,icy=H-R-10,t=TT;
 ctx.save();ctx.globalAlpha*=a;
 /* disc */
 ctx.shadowColor='rgba(255,205,60,.95)';ctx.shadowBlur=14;ctx.beginPath();ctx.arc(icx,icy,R,0,TAU);ctx.fillStyle='#2f6a22';ctx.fill();ctx.shadowBlur=0;
 ctx.save();ctx.beginPath();ctx.arc(icx,icy,R-1,0,TAU);ctx.clip();
 var cell=R*.19,pal=['#3e7d2a','#58963a','#79a63f','#a6a24b','#6a8f2e','#8a6e3b','#4a8a3c','#9bb560','#b7a45a','#2f6b2c'],s=5;
 function rnd(){s=(s*16807)%2147483647;return s/2147483647}
 for(var gy=-6;gy<7;gy++)for(var gx2=-6;gx2<7;gx2++){var ox=icx+gx2*cell+(gy%2?cell*.35:0),oy=icy+gy*cell;ctx.fillStyle=pal[(rnd()*pal.length)|0];ctx.fillRect(ox,oy,cell-1,cell-1)}
 ctx.fillStyle='rgba(215,200,160,.9)';ctx.fillRect(icx-R,icy+R*.04,R*2,R*.07);ctx.fillRect(icx-R*.02,icy-R,R*.05,R*2);
 s=21;for(var q=0;q<46;q++){var bx=icx-R*.62+rnd()*R*.84,by=icy-R*.42+rnd()*R*.7,bw2=R*(.07+rnd()*.07);ctx.fillStyle=rnd()<.5?'#d8d1c2':'#b3ab9b';ctx.fillRect(bx,by,bw2,bw2*.8);ctx.fillStyle='rgba(60,50,40,.35)';ctx.fillRect(bx,by+bw2*.8,bw2,1)}
 var vg=ctx.createRadialGradient(icx,icy,R*.45,icx,icy,R);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.45)');ctx.fillStyle=vg;ctx.fillRect(icx-R,icy-R,R*2,R*2);
 ctx.restore();
 ctx.lineWidth=2.6;ctx.strokeStyle='#ffd23c';ctx.beginPath();ctx.arc(icx,icy,R,0,TAU);ctx.stroke();
 /* ripple + pin */
 for(var k=0;k<2;k++){var f=(t*.55+k*.5)%1;ctx.strokeStyle='rgba(255,214,110,'+(.9*(1-f))+')';ctx.lineWidth=1.6;ctx.beginPath();ctx.ellipse(icx,icy+R*.12,R*(.06+.2*f),R*(.06+.2*f)*.4,0,0,TAU);ctx.stroke()}
 pin(icx,icy+R*.12,R*.2,true,1);
 var fs=Math.round(11.5*sc);ctx.font='900 '+fs+'px Inter,system-ui,sans-serif';var lw=ctx.measureText('Notak').width+fs*1.4,lh=fs*1.7;
 rr(ctx,icx-lw/2,icy+R*.46,lw,lh,lh*.28);var lg=ctx.createLinearGradient(0,icy+R*.46,0,icy+R*.46+lh);lg.addColorStop(0,'#ff3a3a');lg.addColorStop(1,'#a60000');ctx.fillStyle=lg;ctx.fill();ctx.lineWidth=1;ctx.strokeStyle='rgba(255,255,255,.7)';ctx.stroke();
 ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('Notak',icx,icy+R*.46+lh/2+.5);
 ctx.restore();
}
function ribGeo(nx,ny){
 var fs=Math.round(15*sc),fs2=Math.round(10*sc);ctx.font='900 '+fs+'px Inter,system-ui,sans-serif';
 var bw2=Math.max(ctx.measureText('Notak').width,fs2*5.2)+22*sc,bh2=fs*1.15+fs2*1.45+8*sc;
 return{x:Math.max(6,Math.min(W-bw2-6,nx-bw2*.62)),y:ny+10*sc,w:bw2,h:bh2,fs:fs,fs2:fs2,tx:nx,ty:ny+2};
}
function drawRibbon(a,g0){
 var fs=g0.fs,fs2=g0.fs2,bx=g0.x,by=g0.y,bw2=g0.w,bh2=g0.h;ctx.save();ctx.globalAlpha*=a;
 ctx.shadowColor='rgba(255,60,60,.6)';ctx.shadowBlur=10;
 ctx.beginPath();ctx.moveTo(g0.tx,g0.ty);ctx.lineTo(g0.tx-8*sc,by+2);ctx.lineTo(g0.tx+8*sc,by+2);ctx.closePath();ctx.fillStyle='#d10000';ctx.fill();
 rr(ctx,bx,by,bw2,bh2,8*sc);var g=ctx.createLinearGradient(0,by,0,by+bh2);g.addColorStop(0,'#ff4040');g.addColorStop(1,'#a50000');ctx.fillStyle=g;ctx.fill();ctx.shadowBlur=0;
 ctx.lineWidth=1.3;ctx.strokeStyle='rgba(255,255,255,.75)';ctx.stroke();
 ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=3;
 ctx.font='900 '+fs+'px Inter,system-ui,sans-serif';ctx.fillText('Notak',bx+bw2/2,by+fs*.72+3*sc);
 ctx.font='800 '+fs2+'px Inter,system-ui,sans-serif';ctx.fillStyle='#ffd23c';ctx.fillText('(Bhakkar)',bx+bw2/2,by+bh2-fs2*.8-1);
 ctx.restore();return{x:bx,y:by,w:bw2,h:bh2};
}

var PAKP=[61.6,25.1,61.65,26.25,62.75,26.35,63.2,26.65,63.3,27.2,62.8,27.4,62.75,28.2,61.9,28.55,61.4,29.3,60.87,29.86,61.8,29.8,62.4,29.4,64.1,29.4,64.5,29.6,65.1,29.5,66.2,29.8,66.4,30.9,67.8,31.4,68.4,31.7,69.3,31.9,69.5,33.0,70.0,33.1,70.3,33.35,71.0,34.05,71.1,34.55,71.5,35.0,71.3,35.4,71.6,36.4,72.8,36.9,74.0,37.0,75.0,36.9,76.2,35.9,77.8,35.5,77.0,35.0,75.3,34.6,74.3,34.0,74.5,33.2,74.2,32.8,75.15,32.25,74.7,31.9,74.55,31.5,74.6,31.1,74.0,30.4,73.3,29.9,72.3,29.1,71.0,28.2,70.1,27.6,70.0,27.0,70.6,26.4,69.5,26.7,69.5,25.9,69.0,24.9,68.2,23.75,67.0,24.85,66.5,25.4,65.5,25.3,64.5,25.2,63.3,25.2,62.3,25.15];
var STARS=[];(function(){var s=11;function r(){s=(s*16807)%2147483647;return s/2147483647}for(var i=0;i<80;i++)STARS.push([r(),r(),.4+r()*1.1,r()*6])})();

function scene(){
 ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);ctx.globalAlpha=1;
 for(var i=0;i<STARS.length;i++){var s=STARS[i],a=.3+.5*Math.sin(TT*1.3+s[3]);ctx.globalAlpha=Math.max(0,a);ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(s[0]*W,s[1]*H,s[2],0,TAU);ctx.fill()}
 ctx.globalAlpha=1;
 var ag=ctx.createRadialGradient(cx,cy,Rs*.96,cx,cy,Rs*1.13);
 ag.addColorStop(0,'rgba(110,175,255,.6)');ag.addColorStop(.35,'rgba(70,130,255,.24)');ag.addColorStop(1,'rgba(40,90,255,0)');
 ctx.fillStyle=ag;ctx.beginPath();ctx.arc(cx,cy,Rs*1.13,0,TAU);ctx.fill();
 ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
 ctx.drawImage(gcv,0,0,bw,bh,0,0,W,H);
 /* ----- globe view: Notak photo pin stuck on the surface ----- */
 var gA=1-sstep(1.5,3.5,Z);
 if(gA>0){var gp=proj(NOTAK.lon,NOTAK.lat);
  if(gp.v&&gp.a>0){var al=gA*gp.a,rg=9*sc;
   var gl0=ctx.createRadialGradient(gp.x,gp.y,0,gp.x,gp.y,24*sc);gl0.addColorStop(0,'rgba(255,225,130,'+(.85*al)+')');gl0.addColorStop(.4,'rgba(255,150,60,'+(.35*al)+')');gl0.addColorStop(1,'rgba(255,100,60,0)');
   ctx.fillStyle=gl0;ctx.beginPath();ctx.arc(gp.x,gp.y,24*sc,0,TAU);ctx.fill();
   for(var q0=0;q0<2;q0++){var f0=(TT*.6+q0*.5)%1;ctx.strokeStyle='rgba(255,215,110,'+(.9*(1-f0)*al)+')';ctx.lineWidth=1.6*sc;ctx.beginPath();ctx.ellipse(gp.x,gp.y,(3+17*f0)*sc,(3+17*f0)*sc*.45,0,0,TAU);ctx.stroke()}
   var hyg=pin(gp.x,gp.y,rg,true,al);
   var lf=Math.round(9.5*sc);ctx.font='800 '+lf+'px Inter,system-ui,sans-serif';var lwG=ctx.measureText('NOTAK \u00b7 BHAKKAR').width+lf*.9,lxG=gp.x+rg+4;if(lxG+lwG>W-4)lxG=gp.x-rg-4-lwG;
   pill('NOTAK \u00b7 BHAKKAR',lxG,hyg,lf,al,{bd:'rgba(255,205,60,.9)',bg:'rgba(8,8,10,.85)'})}
  var hf=Math.round(9.5*sc);ctx.font='800 '+hf+'px Inter,system-ui,sans-serif';var hw=ctx.measureText('Tap Earth to zoom Punjab').width+hf*1.4;
  ctx.save();ctx.globalAlpha=gA*.85;rr(ctx,W/2-hw/2,H-hf*2.6-10,hw,hf*2,hf);ctx.fillStyle='rgba(8,8,12,.6)';ctx.fill();ctx.fillStyle='#dfe6ff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('Tap Earth to zoom Punjab',W/2,H-hf*1.6-10);ctx.restore();
 }
 var ov=sstep(2,4.5,Z);if(ov<=0)return;
 /* ----- Punjab glow + rivers + roads ----- */
 ctx.save();ctx.globalAlpha=ov;ctx.lineJoin='round';ctx.lineCap='round';
 if(pathLL(PS,true)>10){
  ctx.save();ctx.clip();
  ctx.lineWidth=20*sc;ctx.strokeStyle='rgba(255,226,90,.22)';ctx.stroke();
  ctx.lineWidth=8*sc;ctx.strokeStyle='rgba(255,240,150,.3)';ctx.stroke();
  RIVERS.forEach(function(R){if(pathLL(R,false)>1){ctx.lineWidth=3.2*sc;ctx.strokeStyle='rgba(15,50,110,.35)';ctx.stroke();ctx.lineWidth=1.7*sc;ctx.strokeStyle='rgba(125,190,255,.95)';ctx.stroke()}});
  ROADS.forEach(function(R){if(pathLL(R,false)>1){ctx.lineWidth=1.1*sc;ctx.strokeStyle='rgba(255,238,175,.55)';ctx.stroke()}});
  ctx.restore();
  pathLL(PS,true);ctx.shadowColor='rgba(255,196,40,1)';ctx.shadowBlur=22*sc;ctx.lineWidth=3.6*sc;ctx.strokeStyle='#ffd84d';ctx.stroke();
  ctx.shadowBlur=8*sc;ctx.lineWidth=1.8*sc;ctx.strokeStyle='#fff3b8';ctx.stroke();
 }
 ctx.restore();
 var A=uiA;if(A<=0)return;
 var L=[];
 /* Notak (main focus) */
 var np=proj(NOTAK.lon,NOTAK.lat),rN=11*sc,fsB=Math.round(12.5*sc),hyN=np.y-1.9*rN,rib=null;
 if(np.v){
  ctx.font='800 '+fsB+'px Inter,system-ui,sans-serif';var bwid=ctx.measureText('Bhakkar').width+fsB*.9;
  L.push({x:np.x-rN-2,y:np.y-3.9*rN-2,w:2*rN+4+bwid,h:3.9*rN+6});
  rib=ribGeo(np.x,np.y);
 }
 if(rib)drawWedge(A,rib);
 /* city pins */
 var szR=[4.6,5.6,6.9],szF=[9,10,11.5],ribIn=false;
 CITIES.forEach(function(c){var p=proj(c[1],c[2]);if(!p.v)return;var r=szR[c[3]]*sc,fs=szF[c[3]]*sc,hy=p.y-1.9*r;
  ctx.font='800 '+fs+'px Inter,system-ui,sans-serif';var lw=ctx.measureText(c[0]).width+fs*.9,lh=fs*1.55;
  if(c[3]<2&&rib&&!ribIn){L.push({x:rib.x-4,y:rib.y-3,w:rib.w+8,h:rib.h+6});ribIn=true}
  var PR={x:p.x-r,y:hy-r,w:2*r,h:3.9*r};
  var opts=[{px:p.x+r+3,py:hy,R:{x:p.x+r+3,y:hy-lh/2,w:lw,h:lh}},{px:p.x-r-3-lw,py:hy,R:{x:p.x-r-3-lw,y:hy-lh/2,w:lw,h:lh}},{px:p.x-lw/2,py:p.y+lh/2+3,R:{x:p.x-lw/2,y:p.y+3,w:lw,h:lh}}],pick=null;
  if(c[3]===2)pick=opts[0];
  else if(!hit(PR,L))for(var oi=0;oi<opts.length;oi++){if(!hit(opts[oi].R,L)){pick=opts[oi];break}}
  if(!pick)return;L.push(PR);L.push(pick.R);
  pin(p.x,p.y,r,false,A*p.a);pill(c[0],pick.px,pick.py,fs,A*p.a)});
 /* PUNJAB word (first free spot) */
 var cand=[[72.55,32.12],[72.4,32.3],[72.9,32.3],[72.5,31.85],[73.2,32.1],[72.0,29.7],[71.6,29.3],[72.5,29.9]];
 for(var ci=0;ci<cand.length;ci++){var pp=proj(cand[ci][0],cand[ci][1]);if(!pp.v)continue;
  var PR={x:pp.x-48*sc,y:pp.y-26*sc,w:96*sc,h:52*sc};if(ci<cand.length-1&&hit(PR,L))continue;
  ctx.save();ctx.globalAlpha=A*.95;ctx.translate(pp.x,pp.y);ctx.rotate(-.33);ctx.font='900 '+(16*sc)+'px Inter,system-ui,sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
  ctx.shadowColor='rgba(255,190,30,.9)';ctx.shadowBlur=10;ctx.lineWidth=3.2;ctx.strokeStyle='rgba(45,28,0,.85)';ctx.strokeText('PUNJAB',0,0);ctx.shadowBlur=0;ctx.fillStyle='#ffd23c';ctx.fillText('PUNJAB',0,0);ctx.restore();break}
 /* surface ripples + glow */
 if(np.v){for(var q=0;q<3;q++){var f=(TT*.5+q/3)%1;ctx.strokeStyle='rgba(255,215,110,'+(.9*(1-f)*A)+')';ctx.lineWidth=2*sc;ctx.beginPath();ctx.ellipse(np.x,np.y,(4+24*f)*sc,(4+24*f)*sc*.4,0,0,TAU);ctx.stroke()}
  var gl=ctx.createRadialGradient(np.x,np.y,0,np.x,np.y,26*sc);gl.addColorStop(0,'rgba(255,220,120,'+(.55*A)+')');gl.addColorStop(1,'rgba(255,170,40,0)');ctx.fillStyle=gl;ctx.beginPath();ctx.arc(np.x,np.y,26*sc,0,TAU);ctx.fill();
  var hy=pin(np.x,np.y,rN,true,A);
  pill('Bhakkar',np.x+rN+4,hy,fsB,A,{bd:'rgba(255,255,255,.35)',bg:'rgba(8,8,10,.85)'});
  var rb=drawRibbon(A,rib);
  drawInset(A,np.x,np.y,rb)}
 drawMini(A);drawCard(A);drawCompass(A);
}

function frame(now){
 requestAnimationFrame(frame);
 if(document.hidden)return;
 if(cv.offsetParent===null){wasVis=false;return}
 if(!wasVis){wasVis=true;resize();last=now;eT=rm?1:0;eL=eT;vT=0;vL=0;spinLon=105;panLon=panLat=0;idleAt=0}
 if(Math.abs(cv.clientWidth-W)>1||Math.abs(cv.clientHeight-H)>1)resize();
 var dt=Math.min(.05,(now-last)/1000);last=now;TT=now/1000;
 if(eL<eT)eL=Math.min(eT,eL+dt/(rm?.01:2.6));else if(eL>eT)eL=Math.max(eT,eL-dt/(rm?.01:2.2));
 if(!drag&&!rm)spinLon-=dt*11;
 if(vL<vT)vL=Math.min(vT,vL+dt/1.3);else if(vL>vT)vL=Math.max(vT,vL-dt/1.3);
 if(!drag&&now>idleAt){var dk=Math.exp(-dt*1.1);panLon*=dk;panLat*=dk}
 setCam();globe(TT);scene();
}
/* drag: globe ko ghumao / zoom me idhar udhar dekho; tap = zoom in/out */
var dX=0,dY=0,dT=0,mv=0;
function pxdeg(){return Math.max(8,Rs*Z*Math.cos(Math.min(ZA,1.2))/57.2958)}
cv.addEventListener('pointerdown',function(e){drag=true;lx0=e.clientX;ly0=e.clientY;dX=e.clientX;dY=e.clientY;dT=performance.now();mv=0;try{cv.setPointerCapture(e.pointerId)}catch(_){}});
cv.addEventListener('pointermove',function(e){if(!drag)return;var dx=e.clientX-lx0,dy=e.clientY-ly0;lx0=e.clientX;ly0=e.clientY;mv+=Math.abs(dx)+Math.abs(dy);
 if(eL<.5){spinLon-=dx/(Rs*Z)*57.2958*.9}
 else{var k=pxdeg();panLon=Math.max(-7,Math.min(7,panLon-dx/k));panLat=Math.max(-5,Math.min(5,panLat+dy/k))}});
function up(e){if(!drag)return;drag=false;idleAt=performance.now()+1500;
 if(e&&e.type==='pointerup'&&mv<7&&performance.now()-dT<400){if(eT>.5){eT=0;vT=0}else{eT=1;vT=0}}}
cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
/* City / Village / reset buttons */
function on(id,fn){var b=document.getElementById(id);b&&b.addEventListener('click',function(){if(cv.offsetParent)fn()})}
on('tcity',function(){eT=1;vT=0});on('tvil',function(){eT=1;vT=1});on('mrst',function(){eT=0;vT=0});
requestAnimationFrame(frame);
})();
