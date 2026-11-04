const FRAMES=["./assets/image-f5b41acae39f098e.webp", "./assets/image-933a1b5962b21d5c.webp", "./assets/image-933a1b5962b21d5c.webp", "./assets/image-508cab7e71da507b.webp", "./assets/image-d0e053503822a98e.webp", "./assets/image-279b5a0f37cb0b9e.webp", "./assets/image-30c8aa1c2c20de78.webp", "./assets/image-30c8aa1c2c20de78.webp", "./assets/image-df7bbcaa6cba5416.webp", "./assets/image-8c23827483cf8817.webp", "./assets/image-9538974f9d19c94b.webp", "./assets/image-f93a43d9b2ede4c9.webp", "./assets/image-f93a43d9b2ede4c9.webp", "./assets/image-7504d9c306715e1a.webp", "./assets/image-e172c85d2d949671.webp", "./assets/image-bdc38d40ac87380a.webp", "./assets/image-8b808d72c2766b38.webp", "./assets/image-8b808d72c2766b38.webp", "./assets/image-a0ca8672da670048.webp", "./assets/image-0756fc8547b8f273.webp", "./assets/image-3450bd86ab213e07.webp", "./assets/image-329dcd7a07f1ef1a.webp", "./assets/image-329dcd7a07f1ef1a.webp", "./assets/image-a7bb2f591ab0f0b6.webp", "./assets/image-b9e6ab6e0b65b170.webp", "./assets/image-81b750849632ee6e.webp", "./assets/image-0454072d94c891d0.webp", "./assets/image-0454072d94c891d0.webp", "./assets/image-507bc5be85a92923.webp", "./assets/image-08d8e6198ee3d8c5.webp", "./assets/image-a42c31f89821941e.webp", "./assets/image-9b5b02035940ed56.webp", "./assets/image-9b5b02035940ed56.webp", "./assets/image-f029c7aabaa29c29.webp", "./assets/image-a3fa8c57484f260b.webp", "./assets/image-fa3c4a5d22670185.webp", "./assets/image-5b9de3055cb4ed99.webp", "./assets/image-5b9de3055cb4ed99.webp", "./assets/image-0d8da705146cd5c7.webp", "./assets/image-c9ce2e38f4c29963.webp", "./assets/image-d23ecde45902ee58.webp", "./assets/image-d609ec5ad77d6e76.webp", "./assets/image-d609ec5ad77d6e76.webp", "./assets/image-5646607d256cf350.webp", "./assets/image-e7e1c97114f2091b.webp", "./assets/image-aa9223d87f9ef224.webp", "./assets/image-46c121386bc283ea.webp", "./assets/image-46c121386bc283ea.webp", "./assets/image-62badad432053d0e.webp", "./assets/image-0ca6705e756a9942.webp", "./assets/image-94bda673887658c4.webp", "./assets/image-347cada4a3a6d449.webp", "./assets/image-347cada4a3a6d449.webp", "./assets/image-60aba0f683bc3f52.webp", "./assets/image-d5371c91829188b2.webp", "./assets/image-75bcb6571367cb7c.webp", "./assets/image-bcd93333f6d7fef7.webp", "./assets/image-bcd93333f6d7fef7.webp", "./assets/image-36a388ce50f887f4.webp", "./assets/image-9d0236d1a35bee79.webp", "./assets/image-248bb07bf29787c9.webp", "./assets/image-dada6dbf2c8aae16.webp", "./assets/image-dada6dbf2c8aae16.webp", "./assets/image-85b4c41a36563cf1.webp", "./assets/image-7e15ed6199e45bcc.webp", "./assets/image-aeefccf09255cabc.webp", "./assets/image-bc8ebe57dbd62576.webp", "./assets/image-bc8ebe57dbd62576.webp", "./assets/image-ea442ef86d6250f3.webp", "./assets/image-9a70ed1b74900c52.webp", "./assets/image-e17d67a0fea68859.webp", "./assets/image-422f9989cf739db8.webp", "./assets/image-422f9989cf739db8.webp", "./assets/image-51c5f916d6894667.webp", "./assets/image-d3759db8c6752360.webp", "./assets/image-039c37d69072f6c1.webp", "./assets/image-0c4ff45a6cfe78be.webp", "./assets/image-0c4ff45a6cfe78be.webp", "./assets/image-14983f53ac689d6b.webp", "./assets/image-8fb41abbbeef3cd0.webp", "./assets/image-75a42dd23bbf45a3.webp", "./assets/image-241220e137428d5d.webp", "./assets/image-241220e137428d5d.webp", "./assets/image-c37852774fce0fe3.webp", "./assets/image-23cb4710a3cd402d.webp", "./assets/image-fb1a7beadba25e8a.webp", "./assets/image-954dfe7d1c3fa031.webp", "./assets/image-954dfe7d1c3fa031.webp", "./assets/image-0b6e67ed4364deaa.webp", "./assets/image-ded69eecfa54331b.webp", "./assets/image-7b886e8f11409cf9.webp", "./assets/image-5e08634c6bf07e17.webp", "./assets/image-5e08634c6bf07e17.webp", "./assets/image-2decf92796139a6c.webp", "./assets/image-fb6e734133e94514.webp", "./assets/image-6bcd78f74622bee5.webp", "./assets/image-476bd204706816d9.webp", "./assets/image-476bd204706816d9.webp", "./assets/image-25c2b0ed2c64a585.webp", "./assets/image-6f444d9690762ac6.webp", "./assets/image-cc2951953be789ea.webp", "./assets/image-127e62b8abeeb2fa.webp", "./assets/image-127e62b8abeeb2fa.webp", "./assets/image-12e0e6c0e86175c5.webp", "./assets/image-d629f8918d2835cb.webp", "./assets/image-ace51817ebadfd7e.webp", "./assets/image-c27d6753a14ded59.webp", "./assets/image-c27d6753a14ded59.webp", "./assets/image-0f9a6bbbf6a41723.webp", "./assets/image-06d7194af248818f.webp", "./assets/image-fa47a1c4d6d1352f.webp", "./assets/image-a61ae3bc8a34f661.webp", "./assets/image-a61ae3bc8a34f661.webp", "./assets/image-a11156d68c26eca6.webp", "./assets/image-a49c0e51971a0bc7.webp", "./assets/image-5efae74aa5253414.webp", "./assets/image-6e99dced0e59d216.webp", "./assets/image-6e99dced0e59d216.webp"];

window.PHOTOS={"lighting": "./assets/image-5b1abe6419f02aa9.webp", "exhaust": "./assets/image-a1dc4052fb9c9d76.webp", "exhaust2": "./assets/image-02aaa4f13d711ede.webp", "ordinary": "./assets/image-a54c9df8deae8806.webp", "headlight": "./assets/image-96065d6c2a408e57.webp", "stock": "./assets/image-497534b0fc321d8d.webp", "rear": "./assets/image-9d4f68a6ba223d37.webp", "bodystyling": "./assets/image-e19c1ef5b6e52e99.webp", "wheel": "./assets/image-1bdc64300917422d.webp", "caliper": "./assets/image-d3962768a3b96568.webp", "insight": "./assets/image-3e585cc70aecfa76.webp", "identity": "./assets/image-dec926fe37eefbc4.webp", "leather": "./assets/image-98618a21d68b2216.webp", "fall1": "./assets/image-b8aa608c62bb0421.webp", "fall2": "./assets/image-42b386ffb7f73de7.webp", "fall3": "./assets/image-7b1045c8f5be3c89.webp", "fall4": "./assets/image-9a1ac4d2747198a3.webp", "fall5": "./assets/image-a085cf5faac1a284.webp", "fall6": "./assets/image-9f0abbd8f61b49f6.webp", "fall7": "./assets/image-3c3ea9c7aa18f4a9.webp", "fall8": "./assets/image-6e9187887a1b5646.webp", "fall9": "./assets/image-36dcbad735596c14.webp", "fall10": "./assets/image-a39406b9d6527831.webp"};

(function(){
  /* 1. Photo slots: put JPGs in ./img/ named as the caption shows, they replace the placeholder art */
  document.querySelectorAll('[data-img]').forEach(function(el){
    var name=el.dataset.img, src=(window.PHOTOS&&PHOTOS[name])||('img/'+name+'.jpg'), c=document.createElement('span');
    c.className='cap'; c.textContent='img/'+name+'.jpg'; el.appendChild(c);
    var i=new Image(); i.onload=function(){el.style.setProperty('--src','url("'+src+'")');el.classList.add('has')}; i.src=src;
  });

  /* 2. Split copy (always runs, so reduced-motion users get the finished text) */
  document.querySelectorAll('.tt').forEach(function(el){ el.innerHTML='<span class="m"><span class="in" style="display:block">'+el.innerHTML+'</span></span>' });
  var q=document.getElementById('quote');
  q.innerHTML=q.textContent.trim().split(' ').map(function(w){return '<span class="w">'+w+'</span>'}).join(' ');

  /* 2b. Hero frame sequence: 118 frames painted to a canvas, scrubbed by scroll */
  var cv=document.getElementById('seq'),cx=cv.getContext('2d'),ld=document.getElementById('ld');
  var step=matchMedia('(max-width:820px)').matches?2:1;           /* half the frames on phones to save memory */
  var srcs=FRAMES.filter(function(_,i){return i%step===0}),N=srcs.length,imgs=new Array(N),done=0,cur=0;
  function nearest(i){for(var k=i;k>=0;k--)if(imgs[k])return imgs[k];for(k=i;k<N;k++)if(imgs[k])return imgs[k];return null}
  function draw(i){var im=nearest(i);if(!im)return;var s=Math.max(cv.width/im.naturalWidth,cv.height/im.naturalHeight),w=im.naturalWidth*s,h=im.naturalHeight*s;cx.drawImage(im,(cv.width-w)/2,(cv.height-h)/2,w,h)}
  function fit(){var d=Math.min(devicePixelRatio||1,1.5);cv.width=Math.round(cv.clientWidth*d);cv.height=Math.round(cv.clientHeight*d);draw(cur)}
  fit(); addEventListener('resize',fit);
  srcs.forEach(function(u,i){var im=new Image();im.onload=function(){imgs[i]=im;done++;ld.style.transform='scaleX('+done/N+')';if(done===N)ld.style.opacity=0;if(i===cur||done===1)draw(cur)};im.src=u});

  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches, lenis=null;
  if(!window.gsap||!window.ScrollTrigger) return;   /* CDN blocked: page stays fully readable */
  gsap.registerPlugin(ScrollTrigger);

  /* 3. Lenis, driven by the GSAP ticker so both share one scroll loop */
  if(!reduce && window.Lenis){
    lenis=new Lenis({autoRaf:false,lerp:.09,prevent:function(n){return !!n.closest('[data-lenis-prevent]')}});
    lenis.on('scroll',ScrollTrigger.update);
    gsap.ticker.add(function(t){lenis.raf(t*1000)});
    gsap.ticker.lagSmoothing(0);
  }
  function go(h){
    if(h==='#approach'&&window.__apST){var y=__apST.start+(__apST.end-__apST.start)*.97;if(lenis)lenis.scrollTo(y,{duration:1.6});else scrollTo(0,y);return}
    var t=h==='#top'?0:document.querySelector(h);
    if(lenis) lenis.scrollTo(t,{duration:1.6}); else if(t===0) scrollTo(0,0); else t.scrollIntoView();
  }

  /* 4. Menu + anchors */
  var menu=document.getElementById('menu'), btn=document.getElementById('navbtn');
  function setMenu(o){menu.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);if(lenis)o?lenis.stop():lenis.start()}
  btn.onclick=function(){setMenu(!menu.classList.contains('open'))};
  addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[href^="#"]'); if(!a||a.getAttribute('href')==='#') return;
    e.preventDefault(); setMenu(false); go(a.getAttribute('href'));
  });
  document.getElementById('totop').onclick=function(){go('#top')};

  /* 5. Scroll choreography (only when motion is welcome) */
  var mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',function(){
    var sc=function(trigger,start,end){return {trigger:trigger,start:start,end:end,scrub:true}};

    /* hero: pin the section and map scroll distance to frame number */
    var o={f:0};
    gsap.timeline({scrollTrigger:{trigger:'.hero',start:'top top',end:'+=380%',scrub:.35,pin:true,anticipatePin:1}})
      .to(o,{f:N-1,ease:'none',duration:1,onUpdate:function(){var i=Math.round(o.f);if(i!==cur){cur=i;draw(i)}}},0)
      .to('.hint',{opacity:0,ease:'none',duration:.04},0)
      .to('.hero-fade',{opacity:1,ease:'none',duration:.12},.88);   /* dip to ink as the hood fills the screen */

    /* section 2: headline stays pinned while a trail of photo tiles follows a looping path;
       the leather image then opens from the centre into "Our Approach" */
    document.documentElement.classList.add('trail-on');
    var clamp=gsap.utils.clamp,P=[[.68,.66],[.52,.86],[.30,.80],[.18,.52],[.26,.16],[.52,.09],[.76,.20],[.83,.48],[.78,.82]];
    function at(u){var n=P.length-1,f=clamp(0,.9999,u)*n,i=Math.floor(f),t=f-i,p0=P[Math.max(0,i-1)],p1=P[i],p2=P[i+1],p3=P[Math.min(n,i+2)];
      function cr(a,b,c,d){return .5*(2*b+(-a+c)*t+(2*a-5*b+4*c-d)*t*t+(-a+3*b-3*c+d)*t*t*t)}
      return [cr(p0[0],p1[0],p2[0],p3[0]),cr(p0[1],p1[1],p2[1],p3[1])]}
    var tiles=gsap.utils.toArray('.tile').map(function(el){return {el:el,s:+el.dataset.s,ox:+el.dataset.ox,oy:+el.dataset.oy,o:-1}});
    function layout(){var W=innerWidth,H=innerHeight;tiles.forEach(function(t){var q=at(t.s);
      gsap.set(t.el,{x:(q[0]+t.ox/100)*W,y:(q[1]+t.oy/100)*H,xPercent:-50,yPercent:-50});t.o=-1})}
    function render(p){
      var h=Math.min(1.05,p/.66),fade=1-clamp(0,1,(p-.62)/.14);
      tiles.forEach(function(t){
        var d=h-t.s,inn=clamp(0,1,d/.025),g=clamp(0,1,(d-.03)/.12),out=1-clamp(0,1,(d-.2)/.17),o=+(inn*out*fade).toFixed(3);
        if(o===0&&t.o===0)return; t.o=o;
        gsap.set(t.el,{opacity:o,scale:.6+.4*inn,filter:'grayscale('+g.toFixed(2)+') brightness('+(1-.4*g).toFixed(2)+')'});
      });
    }
    layout();
    var fo={p:0},tl=gsap.timeline({defaults:{ease:'none'},
      scrollTrigger:{trigger:'.fall',start:'top top',end:'+=380%',scrub:.5,pin:true,anticipatePin:1,invalidateOnRefresh:true,onRefreshInit:layout}});
    tl.to(fo,{p:1,duration:1,onUpdate:function(){render(fo.p)}},0)
      .fromTo('.reveal',{clipPath:'inset(50% 50% 50% 50%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:.3,ease:'power2.inOut'},.62)
      .to('.fall-head',{opacity:0,duration:.1,ease:'none'},.6)
      .fromTo('.approach>.plate',{scale:1.35},{scale:1,duration:.34,ease:'power2.out'},.62)
      .fromTo('.approach .tt .in',{yPercent:110},{yPercent:0,duration:.12,ease:'power3.out'},.8)
      .fromTo('.approach .logos,.approach .rv',{y:30,opacity:0},{y:0,opacity:1,duration:.12,stagger:.04,ease:'power3.out'},.86);
    window.__apST=tl.scrollTrigger; render(0);

    /* masked title reveals */
    gsap.utils.toArray('.tt .in').filter(function(t){return !t.closest('.approach')}).forEach(function(t){
      gsap.from(t,{yPercent:110,duration:1.1,ease:'power4.out',scrollTrigger:{trigger:t,start:'top 90%',once:true}});
    });
    gsap.utils.toArray('.sm,.btn,.ct,.logos').filter(function(el){return !el.closest('.approach')}).forEach(function(el){
      gsap.from(el,{y:24,opacity:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}});
    });

    /* identity / insight: card drifts against text, blurred backdrop breathes */
    gsap.utils.toArray('.card-sec').forEach(function(s){
      gsap.fromTo(s.querySelector('.frame'),{yPercent:14},{yPercent:-14,ease:'none',scrollTrigger:sc(s,'top bottom','bottom top')});
      gsap.fromTo(s.querySelector('.bg'),{scale:1.15},{scale:1,ease:'none',scrollTrigger:sc(s,'top bottom','bottom top')});
    });

    /* quote fills in word by word */
    gsap.fromTo('.w',{opacity:.14},{opacity:1,stagger:.12,ease:'none',scrollTrigger:sc('.quote','top 72%','bottom 62%')});

    /* feature images: parallax inside their frames */
    gsap.utils.toArray('.box .plate').forEach(function(p){
      gsap.fromTo(p,{yPercent:-7},{yPercent:7,ease:'none',scrollTrigger:sc(p.parentNode,'top bottom','bottom top')});
    });

    /* ordinary: the red car slides down over the headline */
    gsap.fromTo('.ord-car',{y:function(){var c=document.querySelector('.ord-car');return innerHeight*.24+c.offsetHeight}},{y:0,ease:'none',immediateRender:true,scrollTrigger:{trigger:'.ordinary',start:'top top',end:'bottom bottom',scrub:true,invalidateOnRefresh:true}});

    /* builds -> stock */
    gsap.fromTo('.builds .plate',{scale:1.25},{scale:1,ease:'none',scrollTrigger:sc('.builds','top bottom','bottom top')});
    gsap.fromTo('.stock .plate',{scale:1.18,yPercent:6},{scale:1,yPercent:0,ease:'none',scrollTrigger:sc('.stock','top bottom','center center')});
    gsap.fromTo('.foot .plate',{yPercent:18},{yPercent:0,ease:'none',scrollTrigger:sc('.foot','top bottom','center center')});
    return function(){document.documentElement.classList.remove('trail-on')};
  });

  addEventListener('load',function(){ScrollTrigger.refresh()});
})();
