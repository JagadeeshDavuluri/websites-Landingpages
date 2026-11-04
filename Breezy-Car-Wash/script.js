const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;gsap.registerPlugin(ScrollTrigger);let lenis;
/* footer */
const FC={Company:['About us','Careers','Blog','Press'],Product:['Basic wash','Elite wash','Pricing','Memberships'],Resources:['Help center','Care guides','Gift cards'],'Contact us':['{{email}}','{{phone}}','{{address}}']};
$('#fc').innerHTML=Object.entries(FC).map(([k,v])=>`<div><h4 class="d">${k}</h4><ul>${v.map(x=>`<li><a aria-disabled="true">${x}</a></li>`).join('')}</ul></div>`).join('');
/* smooth scroll */
if(!RM){lenis=new Lenis({lerp:.1});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=$(a.getAttribute('href'));if(!t)return;e.preventDefault();menu(false);lenis?lenis.scrollTo(t,{offset:-80,duration:1.2}):t.scrollIntoView()}));
ScrollTrigger.create({start:0,end:'max',onUpdate:s=>gsap.set('#bar',{scaleX:s.progress})});
/* mobile menu */
const bg=$('#bg'),mm=$('#mm');
function menu(o){if(o===undefined)o=!mm.classList.contains('on');mm.classList.toggle('on',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Close menu':'Open menu');lenis&&(o?lenis.stop():lenis.start());
if(o&&!RM)gsap.fromTo('#mm a,#mm .btn',{y:24,opacity:0},{y:0,opacity:1,stagger:.06,duration:.5,ease:'power3.out'});else if(o)gsap.set('#mm a',{opacity:1})}
bg.onclick=()=>menu();
/* tagline reveal */
const tg=$('#tag');tg.innerHTML=tg.textContent.split(' ').map(w=>`<span>${w}</span>`).join('');
/* motion */
if(!RM){
const tl=gsap.timeline({defaults:{ease:'power3.out'}});
tl.from('.l1',{x:-160,opacity:0,duration:1}).from('.l2',{x:160,opacity:0,duration:1},'<').from('#car',{x:-420,rotate:-6,opacity:0,duration:1.3},'-=.6').from('.hs>div,.hl',{y:24,opacity:0,stagger:.1,duration:.7},'-=.5');
gsap.to('.l1',{xPercent:-8,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
gsap.to('.l2',{xPercent:8,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
gsap.to('#car',{x:120,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
$$('.rv').forEach(el=>gsap.to(el,{opacity:1,y:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
gsap.to('#tag span',{opacity:1,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:tg,start:'top 80%',end:'bottom 45%',scrub:true}});
gsap.from('#sed',{x:260,opacity:0,ease:'none',scrollTrigger:{trigger:'#sed',start:'top 95%',end:'top 55%',scrub:true}});
gsap.to('.cta',{y:0,ease:'none',scrollTrigger:{trigger:'.cta',start:'top 100%',end:'top 70%',scrub:true}});
$$('.ph img').forEach(i=>gsap.fromTo(i,{yPercent:-6,scale:1.14},{yPercent:6,ease:'none',scrollTrigger:{trigger:i.parentElement,start:'top bottom',end:'bottom top',scrub:true}}));
$$('[data-n]').forEach(el=>{const v=+el.dataset.n,o={v:0},dp=String(v).includes('.')?1:0,pre=el.dataset.p||'',suf=el.dataset.s||'';ScrollTrigger.create({trigger:el,start:'top 90%',once:true,onEnter:()=>gsap.to(o,{v,duration:1.6,ease:'power3.out',onUpdate:()=>el.textContent=pre+o.v.toFixed(dp)+suf})})});
}
/* interactive bar */
const xc=$$('.xc'),sx=c=>xc.forEach(x=>x.setAttribute('aria-expanded',x===c));
xc.forEach(c=>{c.addEventListener('click',()=>sx(c));c.addEventListener('focus',()=>sx(c));if(matchMedia('(hover:hover)').matches)c.addEventListener('pointerenter',()=>sx(c))});
/* booking modal */
const ov=$('#ov'),pn=$('#pn');let last;
function open(){last=document.activeElement;menu(false);$('#bf').hidden=false;$('#ok').hidden=true;ov.classList.add('on');ov.setAttribute('aria-hidden','false');lenis&&lenis.stop();$('#dt').min=new Date().toISOString().slice(0,10);RM||gsap.fromTo(pn,{y:60,opacity:0},{y:0,opacity:1,duration:.6,ease:'power3.out'});$('#pk').focus()}
function close(){ov.classList.remove('on');ov.setAttribute('aria-hidden','true');lenis&&lenis.start();last&&last.focus()}
$$('[data-book]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();open()}));$('#cl').onclick=close;ov.onclick=e=>{if(e.target===ov)close()};
addEventListener('keydown',e=>{if(e.key==='Escape'){ov.classList.contains('on')&&close();menu(false)}});
$('#fm2').onsubmit=e=>{e.preventDefault();let ok=true;[['#dt',v=>!!v,'Choose a date.'],['#nm',v=>v.trim().length>2,'Enter your full name.'],['#tl',v=>/^[+\d\s]{8,15}$/.test(v),'Enter a valid phone number.']].forEach(([s,t,m])=>{const i=$(s),v=t(i.value);i.setAttribute('aria-invalid',!v);i.nextElementSibling.textContent=v?'':m;ok=ok&&v});
if(ok){$('#bf').hidden=true;$('#ok').hidden=false}};
