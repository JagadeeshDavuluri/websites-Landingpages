const CARS=[{"bg":"#a8a8ae"},{"bg":"#3398d8"},{"bg":"#3556d6"},{"bg":"#d83240"}];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,T=reduce?0:1;
const $=id=>document.getElementById(id),root=document.documentElement;
const slides=[...document.querySelectorAll('.slide')],n=slides.length;
const q=(s,sel)=>s.querySelector(sel);
root.style.setProperty('--glow',CARS[0].bg);
slides.forEach((s,i)=>{if(i){gsap.set(q(s,'.txt'),{autoAlpha:0});gsap.set(q(s,'.car'),{autoAlpha:0})}});
let idx=0,busy=false,auto=null;
const stripes=[...document.querySelectorAll('.wipe i')];gsap.set(stripes,{skewX:-22,autoAlpha:0});
function count(node){if(node.__f===undefined)node.__f=node.nodeValue;const f=node.__f,num=+f.replace(/\D/g,''),pre=f.match(/^\D*/)[0],o={v:0};node.nodeValue=pre+'0';gsap.to(o,{v:num,duration:1.1,ease:'power3.out',onUpdate:()=>{node.nodeValue=pre+Math.round(o.v).toLocaleString('en-US')},onComplete:()=>{node.nodeValue=f}})}
function go(dir){
  if(busy)return;busy=true;
  const to=(idx+dir+n)%n,a=slides[idx],b=slides[to],s=dir>0?1:-1,c=CARS[to];
  const tl=gsap.timeline({defaults:{ease:'power2.inOut'},onComplete:()=>{busy=false}});
  const kids=[q(b,'.t h1'),q(b,'.t h2'),q(b,'.p'),...b.querySelectorAll('.sp div'),q(b,'.more')];
  tl.to(q(a,'.txt'),{autoAlpha:0,y:s*T*18,duration:.35,ease:'power2.in'},0)
    .to(q(a,'.car'),{yPercent:s*T*40,rotationX:s*T*28,scale:T?.88:1,autoAlpha:0,filter:T?'blur(10px)':'blur(0px)',duration:.7,ease:'power2.in'},0);
  if(T)tl.set(stripes,{xPercent:s>0?-170:340,autoAlpha:1},0)
    .to(stripes,{xPercent:s>0?340:-170,duration:.95,stagger:{each:.08,from:s>0?'start':'end'},ease:'power3.inOut'},.05)
    .set(stripes,{autoAlpha:0},1.35)
    .to(q(document,'.mlogo'),{opacity:.9,duration:.45,yoyo:true,repeat:1,ease:'sine.inOut'},.1);
  const t0=T?.5:.15;
  tl.set(q(b,'.car'),{autoAlpha:0,yPercent:-s*T*40,rotationX:s*T*28,scale:T?1.12:1,filter:T?'blur(12px)':'blur(0px)'},0)
    .to(q(b,'.car'),{autoAlpha:1,yPercent:0,rotationX:0,scale:1,filter:'blur(0px)',duration:1,ease:'power3.out'},t0)
    .set(q(b,'.txt'),{autoAlpha:1},t0+.05)
    .fromTo(kids,{autoAlpha:0,y:-s*T*26},{autoAlpha:1,y:0,duration:.6,stagger:.07,ease:'power3.out'},t0+.1)
    .add(()=>{[q(b,'.p b'),...[...b.querySelectorAll('.sp div')].slice(1)].forEach(e=>count(e.firstChild))},t0+.15)
    .add(()=>{$('cur').textContent='0'+(to+1)},.5)
    .add(()=>root.style.setProperty('--glow',c.bg),0);
  idx=to;
}
function user(dir){clearInterval(auto);$('hint').style.opacity=0;go(dir)}
$('up').onclick=()=>user(-1);$('dn').onclick=()=>user(1);
let wl=0;
addEventListener('wheel',e=>{e.preventDefault();const t=Date.now();if(Math.abs(e.deltaY)<12||t-wl<900)return;wl=t;user(e.deltaY>0?1:-1)},{passive:false});
let ty=null;addEventListener('touchstart',e=>{ty=e.touches[0].clientY},{passive:true});
addEventListener('touchend',e=>{if(ty===null)return;const d=ty-e.changedTouches[0].clientY;ty=null;if(Math.abs(d)>40)user(d>0?1:-1)});
addEventListener('keydown',e=>{if(['ArrowDown','PageDown',' '].includes(e.key)){e.preventDefault();user(1)}else if(['ArrowUp','PageUp'].includes(e.key)){e.preventDefault();user(-1)}});
document.querySelectorAll('a[href="#end"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
const tilts=slides.map(s=>{const car=q(s,'.car'),img=q(car,'img'),w=document.createElement('div'),sh=document.createElement('div');w.className='tilt';sh.className='sheen';sh.style.setProperty('--img','url("'+img.src+'")');car.insertBefore(w,img);w.append(img,sh);gsap.set(w,{transformPerspective:900,transformOrigin:'50% 85%'});return w});
let px=0,py=0,cx=0,cy=0,lastMove=0;const logo=q(document,'.mlogo'),card=$('card');
addEventListener('pointermove',e=>{px=e.clientX/innerWidth*2-1;py=e.clientY/innerHeight*2-1;lastMove=performance.now()});
if(!reduce)gsap.ticker.add(time=>{if(performance.now()-lastMove>2500){px*=.97;py*=.97}
 const x=Math.max(-1,Math.min(1,px+Math.sin(time*.7)*.45));cx+=(x-cx)*.08;cy+=(py-cy)*.08;
 const el=tilts[idx];gsap.set(el,{rotationY:cx*9,rotationX:-cy*4,x:cx*12});el.querySelector('.sheen').style.setProperty('--sx',(50-cx*75)+'%');
 logo.style.translate=(-cx*20)+'px '+(-cy*9)+'px'});
if(!reduce){gsap.from(q(slides[0],'.car'),{yPercent:-170,rotationX:72,autoAlpha:0,duration:1.3,ease:'power3.out',delay:.2});
 gsap.from(q(slides[0],'.txt'),{autoAlpha:0,y:-14,duration:.7,delay:1});
 auto=setInterval(()=>go(1),3600)}
