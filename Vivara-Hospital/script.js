const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const TG=["Hyderabad — Banjara Hills","Hyderabad — Jubilee Hills","Hyderabad — Gachibowli","Hyderabad — Madhapur","Hyderabad — Kondapur","Hyderabad — Kukatpally","Hyderabad — Miyapur","Hyderabad — Ameerpet","Hyderabad — Begumpet","Hyderabad — Uppal","Hyderabad — LB Nagar","Hyderabad — Dilsukhnagar","Secunderabad","Warangal","Hanamkonda","Karimnagar","Nizamabad","Khammam","Nalgonda","Mahbubnagar","Adilabad","Medak","Sangareddy","Siddipet","Suryapet","Mancherial","Ramagundam","Jagtial","Kamareddy","Vikarabad","Nagarkurnool","Wanaparthy","Jangaon","Bhongir","Mahabubabad","Kothagudem","Nirmal","Peddapalli","Sircilla","Gadwal","Mulugu","Narayanpet","Asifabad"];
const AP=["Visakhapatnam","Vijayawada","Guntur","Amaravati","Tirupati","Nellore","Kurnool","Kakinada","Rajahmundry","Kadapa","Anantapur","Eluru","Ongole","Srikakulam","Vizianagaram","Machilipatnam","Bapatla","Narasaraopet","Amalapuram","Anakapalli","Puttaparthi","Nandyal","Chittoor","Parvathipuram","Bhimavaram","Tenali","Proddatur","Hindupur","Madanapalle","Tadepalligudem"];
const BR=[...TG,...AP],opt=b=>`<option value="${b}"${b==S.br?' selected':''}>${b}</option>`;
const SV=["Internist consultation","Dentistry","Women's health","Pediatrics","Diagnostics","Psychiatry"];
const TM=["08:00","09:00","09:30","10:00","10:30","11:00","11:30","12:00"];
const DN=["SUN","MON","TUE","WED","THU","FRI","SAT"];
/* smooth scroll + gsap sync */
gsap.registerPlugin(ScrollTrigger);let lenis;
if(!RM){lenis=new Lenis({lerp:.1,wheelMultiplier:1});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=$(a.getAttribute('href'));if(t&&a.getAttribute('href').length>1){e.preventDefault();lenis.scrollTo(t,{offset:-80,duration:1.2})}}))}
/* progress */
ScrollTrigger.create({start:0,end:'max',onUpdate:s=>gsap.set('#bar',{scaleX:s.progress})});
/* scroll animation */
if(!RM){
$$('.rv').forEach(el=>gsap.to(el,{opacity:1,y:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
gsap.to('#docimg',{yPercent:8,ease:'none',scrollTrigger:{trigger:'.doc',start:'top bottom',end:'bottom top',scrub:true}});
$$('[data-n]').forEach(el=>{const v=+el.dataset.n,o={v:0};ScrollTrigger.create({trigger:el,start:'top 90%',once:true,onEnter:()=>gsap.to(o,{v,duration:1.4,ease:'power3.out',onUpdate:()=>el.textContent=Math.round(o.v)})})});
gsap.to('#ln',{scaleX:1,ease:'none',scrollTrigger:{trigger:'.steps',start:'top 85%',end:'bottom 60%',scrub:true}});
}
/* tagline word reveal */
const tg=$('#tag'),TAGEN=tg.textContent;let tagTw;
function buildTag(t){if(tagTw){tagTw.scrollTrigger&&tagTw.scrollTrigger.kill();tagTw.kill()}tg.innerHTML=t.split(' ').map(w=>`<span>${w}</span>`).join('');
if(!RM)tagTw=gsap.to('#tag span',{opacity:1,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:tg,start:'top 80%',end:'bottom 45%',scrub:true}})}
buildTag(TAGEN);
/* accordion */
const ac=$$('.ac'),setAc=c=>ac.forEach(x=>x.setAttribute('aria-expanded',x===c));
ac.forEach(c=>{c.addEventListener('click',()=>setAc(c));c.addEventListener('focus',()=>setAc(c));if(matchMedia('(hover:hover)').matches)c.addEventListener('pointerenter',()=>setAc(c))});
/* modal wizard */
const ov=$('#ov'),pn=$('#pn'),st=$('#st');let step=0,S={br:BR[0],sv:SV[0],date:null,time:null,name:'',tel:'',mail:''},last;
const h=(s,t)=>`<h2 class="h2" id="mt" style="font-size:30px;line-height:36px">${s}</h2><p class="body" style="margin-top:8px">${t}</p>`;
function render(dir=1){
$$('#prog li').forEach((l,i)=>l.classList.toggle('on',i<=step));
if(step==0)st.innerHTML=h('Registration','Choose a branch and service and we will show open slots for the coming days.')+`<div class="f two"><label>Branch<select id="br"><optgroup label="Telangana">${TG.map(opt).join('')}</optgroup><optgroup label="Andhra Pradesh">${AP.map(opt).join('')}</optgroup></select></label><label>Service<select id="sv">${SV.map(b=>`<option value="${b}"${b==S.sv?' selected':''}>${b}</option>`).join('')}</select></label></div><div style="margin-top:24px"><button class="btn" id="nx">Show available slots</button></div>`;
if(step==1){const ds=[...Array(14)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()+i);return d});S.date=S.date||0;
st.innerHTML=h('Choose a date and time',`${S.sv} · ${S.br}`)+`<div class="dates" id="ds">${ds.map((d,i)=>`<button class="dt" aria-pressed="${i==S.date}" data-i="${i}"><span>${DN[d.getDay()]}</span><b>${d.getDate()}.${d.getMonth()+1}</b><span>spots: ${(d.getDate()*7)%9+2}</span></button>`).join('')}</div><div class="slots" id="sl">${TM.map(t=>`<div class="sl${S.time==t?' sel':''}"><b>${t}</b><div>${S.sv}<small>Dr. Anand Rao · 30 min</small></div><span>250 PLN</span><button class="btn sm" data-t="${t}">Book</button></div>`).join('')}</div><div style="margin-top:16px"><button class="btn ghost sm" id="bk">Back</button></div>`}
if(step==2)st.innerHTML=h('Your details','Enter your contact details to confirm the appointment.')+`<form class="f" id="fm" novalidate><label>Full name<input id="nm" autocomplete="name" value="${S.name}"><span class="err"></span></label><label>Phone<input id="tl" type="tel" autocomplete="tel" value="${S.tel}"><span class="err"></span></label><label>Email<input id="ml" type="email" autocomplete="email" value="${S.mail}"><span class="err"></span></label><div style="display:flex;gap:12px"><button type="button" class="btn ghost sm" id="bk">Back</button><button class="btn">Next</button></div></form>`;
if(step==3){const d=new Date();d.setDate(d.getDate()+S.date);st.innerHTML=h('Summary','Check your details before confirming.')+`<div class="sum" style="margin-top:24px"><div><span>Service</span><b>${S.sv}</b></div><div><span>Branch</span><b>${S.br}</b></div><div><span>Date</span><b>${d.getDate()}.${d.getMonth()+1}, ${S.time}</b></div><div><span>Patient</span><b>${S.name}</b></div><div><span>Price</span><b>250 PLN</b></div></div><div style="display:flex;gap:12px;margin-top:24px"><button class="btn ghost sm" id="bk">Back</button><button class="btn" id="ok">Confirm appointment</button></div>`}
if(step==4){$('#prog').style.display='none';st.innerHTML=h('Appointment booked',`We will send a confirmation to ${S.mail}.`)+`<div style="margin-top:24px"><button class="btn" id="cl2">Close</button></div>`}
if(!RM)gsap.fromTo(st,{x:24*dir,opacity:0},{x:0,opacity:1,duration:.6,ease:'power3.out'});
const g=id=>$(id,st);
g('#nx')&&(g('#nx').onclick=()=>{S.br=g('#br').value;S.sv=g('#sv').value;go(1)});
$$('.dt',st).forEach(b=>b.onclick=()=>{S.date=+b.dataset.i;$$('.dt',st).forEach(x=>x.setAttribute('aria-pressed',x==b))});
$$('[data-t]',st).forEach(b=>b.onclick=()=>{S.time=b.dataset.t;go(2)});
g('#bk')&&(g('#bk').onclick=()=>go(-1));g('#ok')&&(g('#ok').onclick=()=>go(1));g('#cl2')&&(g('#cl2').onclick=close);
g('#fm')&&(g('#fm').onsubmit=e=>{e.preventDefault();const f=[['#nm',v=>v.trim().length>2,'Enter your full name.'],['#tl',v=>/^[+\d\s]{9,15}$/.test(v),'Enter a phone number, for example +91 98765 43210.'],['#ml',v=>/^\S+@\S+\.\S+$/.test(v),'Enter a valid email address.']];let ok=true;
f.forEach(([s,t,m])=>{const i=g(s),v=t(i.value);i.setAttribute('aria-invalid',!v);i.nextElementSibling.textContent=v?'':m;ok=ok&&v});
if(ok){S.name=g('#nm').value;S.tel=g('#tl').value;S.mail=g('#ml').value;go(1)}});
const fi=$('select,input,.dt,.btn',st);fi&&fi.focus({preventScroll:true})}
function go(d){step+=d;render(d)}
function open(sv){last=document.activeElement;if(sv)S.sv=sv;step=0;S.time=null;$('#prog').style.display='';ov.classList.add('on');ov.setAttribute('aria-hidden','false');lenis&&lenis.stop();document.body.style.overflow='hidden';render();
if(!RM){gsap.fromTo(ov,{opacity:0},{opacity:1,duration:.4});gsap.fromTo(pn,{y:80,opacity:0},{y:0,opacity:1,duration:.7,ease:'power3.out'})}}
function close(){const f=()=>{ov.classList.remove('on');ov.setAttribute('aria-hidden','true');lenis&&lenis.start();document.body.style.overflow='';last&&last.focus()};RM?f():gsap.to(pn,{y:60,opacity:0,duration:.4,ease:'power3.in',onComplete:f});gsap.to(ov,{opacity:0,duration:.4})}
$$('[data-book]').forEach(b=>b.onclick=()=>open());$$('[data-svc]').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();open(b.dataset.svc)}));
$('#cl').onclick=close;ov.addEventListener('click',e=>{if(e.target===ov)close()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&ov.classList.contains('on'))close()});
/* i18n: EN / TE / HI */
const L=[
["Services","సేవలు","सेवाएँ"],["Check-up","హెల్త్ చెకప్","चेक-अप"],["About us","మా గురించి","हमारे बारे में"],["Doctors","వైద్యులు","डॉक्टर"],["FAQ","ప్రశ్నలు","सवाल"],
["Book an appointment","అపాయింట్‌మెంట్ బుక్ చేయండి","अपॉइंटमेंट बुक करें"],["Skip to content","కంటెంట్‌కు వెళ్లండి","सामग्री पर जाएँ"],
["Clinics across Telangana and Andhra Pradesh","తెలంగాణ మరియు ఆంధ్రప్రదేశ్ అంతటా క్లినిక్‌లు","तेलंगाना और आंध्र प्रदेश भर में क्लिनिक"],
["Complete care for adults and children, from prevention and diagnostics to treatment.","పెద్దలకు మరియు పిల్లలకు సంపూర్ణ సంరక్షణ, నివారణ మరియు పరీక్షల నుండి చికిత్స వరకు.","वयस्कों और बच्चों के लिए संपूर्ण देखभाल, रोकथाम और जाँच से लेकर इलाज तक।"],
["All services","అన్ని సేవలు","सभी सेवाएँ"],["branches in two states","రెండు రాష్ట్రాల్లో శాఖలు","दो राज्यों में शाखाएँ"],
["languages: EN, TE, HI","భాషలు: EN, TE, HI","भाषाएँ: EN, TE, HI"],["open every day","ప్రతిరోజూ తెరిచే ఉంటుంది","हर दिन खुला"],
["Doctors with international experience","అంతర్జాతీయ అనుభవం ఉన్న వైద్యులు","अंतरराष्ट्रीय अनुभव वाले डॉक्टर"],
["Therapy","థెరపీ","थेरेपी"],["Dentistry","దంత వైద్యం","दंत चिकित्सा"],["Women's health","మహిళల ఆరోగ్యం","महिला स्वास्थ्य"],["Pediatrics","పిల్లల వైద్యం","बाल रोग"],["Diagnostics","రోగ నిర్ధారణ","जाँच सेवाएँ"],["Psychiatry","మానసిక వైద్యం","मनोचिकित्सा"],["Internist consultation","ఇంటర్నిస్ట్ కన్సల్టేషన్","इंटर्निस्ट परामर्श"],
["We speak your language","మేము మీ భాషలో మాట్లాడతాం","हम आपकी भाषा बोलते हैं"],
["One visit, no interpreter and no queues. A doctor who understands you from the very first sentence.","ఒక్క సందర్శన, అనువాదకుడు లేకుండా, క్యూలు లేకుండా. మొదటి వాక్యం నుండే మిమ్మల్ని అర్థం చేసుకునే వైద్యుడు.","एक मुलाक़ात, बिना दुभाषिए और बिना कतार के। ऐसा डॉक्टर जो पहले ही वाक्य से आपको समझता है।"],
["Our specializations","మా ప్రత్యేకతలు","हमारी विशेषज्ञताएँ"],
["Six key specializations, from family therapy to diagnostics. Click to expand.","కుటుంబ చికిత్స నుండి రోగ నిర్ధారణ వరకు ఆరు ముఖ్య ప్రత్యేకతలు. విస్తరించడానికి క్లిక్ చేయండి.","पारिवारिक चिकित्सा से लेकर जाँच तक छह मुख्य विशेषज्ञताएँ। खोलने के लिए क्लिक करें।"],
["Internist consultations and a treatment plan that fits your daily rhythm.","ఇంటర్నిస్ట్ సంప్రదింపులు మరియు మీ దినచర్యకు సరిపోయే చికిత్స ప్రణాళిక.","इंटर्निस्ट परामर्श और आपकी दिनचर्या के अनुकूल उपचार योजना।"],
["Treatment, implants and aesthetics on digital equipment, without pain or long waits.","డిజిటల్ పరికరాలతో చికిత్స, ఇంప్లాంట్లు మరియు సౌందర్య దంత సేవలు, నొప్పి లేకుండా, ఎక్కువ నిరీక్షణ లేకుండా.","डिजिटल उपकरणों से इलाज, इम्प्लांट और सौंदर्य दंत सेवाएँ, बिना दर्द और लंबे इंतज़ार के।"],
["Gynecology, ultrasound and pregnancy care in the language you feel comfortable in.","మీకు సౌకర్యంగా ఉండే భాషలో గైనకాలజీ, అల్ట్రాసౌండ్ మరియు గర్భధారణ సంరక్షణ.","आपकी सहज भाषा में स्त्री रोग, अल्ट्रासाउंड और गर्भावस्था की देखभाल।"],
["Check ups and vaccinations for children, with a doctor who speaks to them in their own language.","పిల్లలకు చెకప్‌లు మరియు టీకాలు, వారి భాషలోనే మాట్లాడే వైద్యునితో.","बच्चों के लिए जाँच और टीकाकरण, ऐसे डॉक्टर के साथ जो उनकी अपनी भाषा में बात करता है।"],
["Blood tests, ultrasound and result consultations in one place.","రక్త పరీక్షలు, అల్ట్రాసౌండ్ మరియు ఫలితాల సంప్రదింపులు ఒకే చోట.","रक्त जाँच, अल्ट्रासाउंड और रिपोर्ट परामर्श, एक ही जगह।"],
["A calm conversation with a doctor who understands you without an interpreter.","అనువాదకుడు లేకుండా మిమ్మల్ని అర్థం చేసుకునే వైద్యునితో ప్రశాంతమైన సంభాషణ.","बिना दुभाषिए आपको समझने वाले डॉक्टर के साथ शांत बातचीत।"],
["How it works","ఇది ఎలా పనిచేస్తుంది","यह कैसे काम करता है"],["Three steps from question to appointment.","ప్రశ్న నుండి అపాయింట్‌మెంట్ వరకు మూడు దశలు.","सवाल से अपॉइंटमेंट तक तीन कदम।"],
["Choose a branch and service","శాఖ మరియు సేవను ఎంచుకోండి","शाखा और सेवा चुनें"],["We show open slots at the clinic you pick.","మీరు ఎంచుకున్న క్లినిక్‌లో ఖాళీ సమయాలను చూపుతాం.","आपके चुने क्लिनिक के खाली समय हम दिखाते हैं।"],
["Pick a day and time","రోజు మరియు సమయాన్ని ఎంచుకోండి","दिन और समय चुनें"],["You see the doctor, the duration and the price before you book.","బుక్ చేసే ముందే వైద్యుడు, వ్యవధి మరియు ధర కనిపిస్తాయి.","बुक करने से पहले डॉक्टर, अवधि और कीमत दिखती है।"],
["Confirm your details","మీ వివరాలను నిర్ధారించండి","अपनी जानकारी की पुष्टि करें"],["A summary appears at the end, with no hidden steps.","చివరిలో సారాంశం కనిపిస్తుంది, దాచిన దశలు ఉండవు.","अंत में सारांश दिखता है, कोई छिपा कदम नहीं।"],
["Frequently asked questions","తరచుగా అడిగే ప్రశ్నలు","अक्सर पूछे जाने वाले सवाल"],
["Which languages do the doctors speak?","వైద్యులు ఏ భాషలు మాట్లాడతారు?","डॉक्टर कौन सी भाषाएँ बोलते हैं?"],["English, Telugu and Hindi.","ఇంగ్లీష్, తెలుగు మరియు హిందీ.","अंग्रेज़ी, तेलुगु और हिंदी।"],
["How much does an internist consultation cost?","ఇంటర్నిస్ట్ సంప్రదింపుకు ఎంత ఖర్చవుతుంది?","इंटर्निस्ट परामर्श की कीमत कितनी है?"],["The price is shown next to every slot in step two of the booking, before you confirm.","ధర బుకింగ్ రెండవ దశలో ప్రతి సమయం పక్కన, నిర్ధారణకు ముందే కనిపిస్తుంది.","कीमत बुकिंग के दूसरे चरण में हर समय के बगल में, पुष्टि से पहले दिखती है।"],
["Can I book an appointment for my child?","నా బిడ్డకు అపాయింట్‌మెంట్ బుక్ చేయవచ్చా?","क्या मैं अपने बच्चे के लिए अपॉइंटमेंट बुक कर सकता हूँ?"],["Yes. Choose pediatrics as the service and the branch that suits you.","అవును. సేవగా పిల్లల వైద్యం మరియు మీకు సరిపోయే శాఖను ఎంచుకోండి.","हाँ। सेवा में बाल रोग और अपनी सुविधा की शाखा चुनें।"],
["How do I change my appointment?","నా అపాయింట్‌మెంట్‌ను ఎలా మార్చాలి?","मैं अपना अपॉइंटमेंट कैसे बदलूँ?"],
["Are the clinics open on weekends?","క్లినిక్‌లు వారాంతాల్లో తెరిచి ఉంటాయా?","क्या क्लिनिक सप्ताहांत में खुले रहते हैं?"],["We see patients seven days a week. You will see each branch's hours during booking.","మేము వారంలో ఏడు రోజులు రోగులను చూస్తాం. ప్రతి శాఖ సమయాలు బుకింగ్ సమయంలో కనిపిస్తాయి.","हम सप्ताह में सात दिन मरीज़ देखते हैं। हर शाखा का समय बुकिंग के दौरान दिखेगा।"],
["Do I need a referral?","నాకు రిఫరల్ అవసరమా?","क्या मुझे रेफ़रल चाहिए?"],
["Book an appointment in two minutes","రెండు నిమిషాల్లో అపాయింట్‌మెంట్ బుక్ చేయండి","दो मिनट में अपॉइंटमेंट बुक करें"],["Online booking in four steps, in your language.","మీ భాషలో నాలుగు దశల్లో ఆన్‌లైన్ బుకింగ్.","आपकी भाषा में चार चरणों में ऑनलाइन बुकिंग।"],
["© 2026 Vivara. Demo project.","© 2026 వివారా. డెమో ప్రాజెక్ట్.","© 2026 विवारा। डेमो प्रोजेक्ट।"],["Privacy policy","గోప్యతా విధానం","गोपनीयता नीति"],["Terms","నిబంధనలు","शर्तें"],
["Service","సేవ","सेवा"],["Date & time","తేదీ & సమయం","तारीख़ और समय"],["Details","వివరాలు","विवरण"],["Summary","సారాంశం","सारांश"],["Registration","నమోదు","पंजीकरण"],
["Choose a branch and service and we will show open slots for the coming days.","శాఖ మరియు సేవను ఎంచుకోండి, రాబోయే రోజుల ఖాళీ సమయాలను చూపుతాం.","शाखा और सेवा चुनें, हम आने वाले दिनों के खाली समय दिखाएँगे।"],
["Branch","శాఖ","शाखा"],["Show available slots","ఖాళీ సమయాలను చూపండి","उपलब्ध समय दिखाएँ"],["Choose a date and time","తేదీ మరియు సమయాన్ని ఎంచుకోండి","तारीख़ और समय चुनें"],
["Book","బుక్ చేయండి","बुक करें"],["Back","వెనక్కి","वापस"],["Next","తదుపరి","आगे"],["Your details","మీ వివరాలు","आपका विवरण"],
["Enter your contact details to confirm the appointment.","అపాయింట్‌మెంట్ నిర్ధారణకు మీ సంప్రదింపు వివరాలను నమోదు చేయండి.","अपॉइंटमेंट की पुष्टि के लिए संपर्क विवरण दर्ज करें।"],
["Full name","పూర్తి పేరు","पूरा नाम"],["Phone","ఫోన్","फ़ोन"],["Email","ఈమెయిల్","ईमेल"],
["Enter your full name.","మీ పూర్తి పేరును నమోదు చేయండి.","अपना पूरा नाम दर्ज करें।"],["Enter a phone number, for example +91 98765 43210.","ఫోన్ నంబర్ నమోదు చేయండి, ఉదాహరణకు +91 98765 43210.","फ़ोन नंबर दर्ज करें, जैसे +91 98765 43210।"],["Enter a valid email address.","చెల్లుబాటు అయ్యే ఈమెయిల్ చిరునామాను నమోదు చేయండి.","सही ईमेल पता दर्ज करें।"],
["Check your details before confirming.","నిర్ధారించే ముందు మీ వివరాలను పరిశీలించండి.","पुष्टि से पहले अपना विवरण जाँचें।"],
["Date","తేదీ","तारीख़"],["Patient","రోగి","मरीज़"],["Price","ధర","कीमत"],["Confirm appointment","అపాయింట్‌మెంట్ నిర్ధారించండి","अपॉइंटमेंट की पुष्टि करें"],
["Appointment booked","అపాయింట్‌మెంట్ బుక్ అయింది","अपॉइंटमेंट बुक हो गया"],["Close","మూసివేయండి","बंद करें"],
["Dr. Anand Rao","డా. ఆనంద్ రావు","डॉ. आनंद राव"],["30 min","30 నిమి","30 मिनट"],
["SUN","ఆది","रवि"],["MON","సోమ","सोम"],["TUE","మంగ","मंगल"],["WED","బుధ","बुध"],["THU","గురు","गुरु"],["FRI","శుక్ర","शुक्र"],["SAT","శని","शनि"]];
const M={te:{},hi:{}};L.forEach(r=>{M.te[r[0]]=r[1];M.hi[r[0]]=r[2]});
const H1={en:$('.hero h1').innerHTML,te:'మీ భాష <em>మాట్లాడే</em> వైద్యులు',hi:'आपकी भाषा <em>बोलने</em> वाले डॉक्टर'};
const PAT=[[/^spots: (\d+)$/,{te:n=>`స్థలాలు: ${n}`,hi:n=>`जगह: ${n}`}],[/^We will send a confirmation to (.+)\.$/,{te:e=>`${e} కు నిర్ధారణ పంపుతాం.`,hi:e=>`हम ${e} पर पुष्टि भेजेंगे।`}]];
let LG='en';const orig=new WeakMap();
function tr1(s,l){if(l==='en')return s;const t=s.trim();if(!t)return s;let r=M[l][t];
if(r==null)for(const[p,f]of PAT){const m=t.match(p);if(m){r=f[l](m[1]);break}}
if(r==null&&t.includes(' · '))r=t.split(' · ').map(x=>M[l][x]||x).join(' · ');
return r==null?s:s.replace(t,()=>r)}
function apply(root){const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;
while(n=w.nextNode()){const p=n.parentElement;if(!p||p.closest('script,style,h1,#tag'))continue;
let o=orig.get(n);if(!o||n.nodeValue!==o.cur)o={orig:n.nodeValue,cur:n.nodeValue};
const v=tr1(o.orig,LG);if(v!==n.nodeValue)n.nodeValue=v;o.cur=v;orig.set(n,o)}}
const mo=new MutationObserver(()=>{if(LG==='en')return;mo.disconnect();apply(ov);mo.observe(ov,{childList:true,subtree:true,characterData:true})});
mo.observe(ov,{childList:true,subtree:true,characterData:true});
function setLang(l){LG=l;document.documentElement.lang=l;$$('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===l));
$('.hero h1').innerHTML=H1[l];buildTag(tr1(TAGEN,l));mo.disconnect();apply(document.body);mo.observe(ov,{childList:true,subtree:true,characterData:true});
try{localStorage.setItem('lg',l)}catch(e){}ScrollTrigger.refresh()}
$$('.lang button').forEach(b=>b.onclick=()=>setLang(b.dataset.l));
try{const s=localStorage.getItem('lg');if(s&&s!=='en'&&M[s])setLang(s)}catch(e){}
