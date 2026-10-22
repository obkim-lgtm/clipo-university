
const SM = {
  ko:{
    cH:'강좌', cSub:'수강 중인 강좌와 지난 학기 강좌예요.', thC:'강좌', thP:'담당', thS:'분반', thT:'학기', thN:'지금 할 일', open:'열기', join:'강좌 참여하기',
    fH:'피드백', fSub:'공개된 점수와 피드백을 모아 봐요.', thE:'평가', thScore:'점수', thAt:'공개', fNone:'아직 공개된 피드백이 없어요',
    meH:'내 정보', meName:'이름', meSid:'학번', meDept:'학과', meMail:'학교 이메일', mePw:'비밀번호', mePwBtn:'비밀번호 바꾸기', meLang:'언어',
    meConsent:'개인정보 이용 동의', meConsentD:'2026.10.19 동의함 · 개인정보 수집·이용, AI 채점·피드백 이용 안내', meView:'내용 보기',
    meNote:'이름·학번·학과가 다르면 담당 교수님께 알려 주세요. 학생이 직접 고칠 수는 없어요.',
    gH:'사용 안내', gSub:'처음 쓸 때 이 순서로 하면 돼요.', gPdf:'학생 사용 안내 PDF', gPdfDone:'사용 안내 PDF를 내려받았어요',
    steps:[['강좌 참여하기','교수님이 알려 준 6자리 강좌 코드를 넣어요. 교수님이 학번으로 이미 추가했다면 따로 할 일이 없어요.','home','강좌 참여하기'],['과제 제출하기','과제 화면에서 PDF 1개를 올려요. 마감 전에는 다시 올릴 수 있어요.','course','내 강좌'],['피드백 보기','교수님이 확인하고 공개하면 점수와 피드백이 와요.','feedbacks','피드백']],
    sH:'고객센터', sSub:'자주 묻는 질문을 먼저 보고, 해결이 안 되면 문의를 남겨 주세요. 학교 이메일로 답해 드려요.',
    faqT:'자주 묻는 질문', askT:'문의 남기기', askBody:'내용', askPh:'어떤 화면에서 무엇을 하다가 생긴 일인지 적어 주세요.', askSend:'문의 보내기', askSent:'문의를 남겼어요. 학교 이메일로 답해 드려요.',
    faq:[['강좌 코드를 넣었는데 맞는 강좌가 없대요','코드 6자리를 다시 확인해 주세요. 그래도 안 되면 교수님이 코드 참여를 꺼 둔 거예요. 담당 교수님께 학번으로 추가해 달라고 요청해 주세요.'],['마감이 지났어요','학생 화면에서는 더 낼 수 없어요. 담당 교수님께 알리면 교수님이 대신 올릴 수 있어요.'],['시험 답안은 어디서 내요?','시험은 교수님이 답안지를 걷어 올려요. 학생은 결과가 공개되면 피드백에서 볼 수 있어요.'],['점수가 이상해요','피드백 화면에서 내 답안과 채점기준별 코멘트를 먼저 확인하고, 담당 교수님께 문의해 주세요.']],
    nH:'공지', nSub:'서비스 점검과 이용 안내예요.', emptyT:'아직 수강 중인 강좌가 없어요', emptyD:'교수님이 알려 준 6자리 강좌 코드로 참여해요. 교수님이 학번으로 추가하면 여기에 바로 보여요.', emptyG:'강좌에 참여하면 할 일이 여기에 보여요.',
    nts:[['시험 답안은 담당 교수님이 올려요','10.16','중간·기말처럼 답안지를 걷는 평가는 교수님이 파일을 올려요. 학생은 결과가 공개되면 피드백에서 볼 수 있어요.',1],['11월 2일(일) 02:00~04:00 점검 안내','10.14','점검 시간에는 로그인과 제출이 멈춰요. 마감이 겹치면 미리 제출해 주세요.']],
  },
  en:{
    cH:'Courses', cSub:'Current and past-term courses.', thC:'Course', thP:'Instructor', thS:'Section', thT:'Term', thN:'To do now', open:'Open', join:'Join a course',
    fH:'Feedback', fSub:'All released scores and feedback in one place.', thE:'Assessment', thScore:'Score', thAt:'Released', fNone:'No feedback released yet',
    meH:'My profile', meName:'Name', meSid:'Student ID', meDept:'Department', meMail:'School email', mePw:'Password', mePwBtn:'Change password', meLang:'Language',
    meConsent:'Privacy consent', meConsentD:'Agreed on 2026-10-19 · personal data use, AI scoring and feedback notice', meView:'View',
    meNote:'If your name, ID or department is wrong, tell your instructor. Students cannot edit them.',
    gH:'User guide', gSub:'Follow these steps when you start.', gPdf:'Student guide (PDF)', gPdfDone:'Downloaded the guide PDF',
    steps:[['Join a course','Enter the 6-character code from your instructor. If you were added by ID, nothing to do.','home','Join a course'],['Submit your work','Upload one PDF on the assignment page. You can resubmit before the due date.','course','My course'],['Read feedback','Scores and feedback arrive once your instructor reviews and releases them.','feedbacks','Feedback']],
    sH:'Help center', sSub:'Check the FAQ first; if it does not help, send us a message. We reply to your school email.',
    faqT:'FAQ', askT:'Contact us', askBody:'Message', askPh:'Tell us which screen and what you were doing.', askSend:'Send', askSent:'Message sent. We will reply to your school email.',
    faq:[['The course code is not found','Check the 6 characters again. If it still fails, joining by code is off; ask your instructor to add you by ID.'],['I missed the due date','You cannot submit from your page anymore. Tell your instructor; they can upload it for you.'],['Where do I submit exam answers?','Your instructor collects and uploads exam answers. You see results in Feedback once released.'],['My score looks wrong','Check your answer and the comments by criterion first, then contact your instructor.']],
    nH:'Announcements', nSub:'Maintenance and how-to notes.', emptyT:'No courses yet', emptyD:'Join with the 6-character code from your instructor. If your instructor adds you by ID, the course appears here.', emptyG:'Your to-dos appear here once you join a course.',
    nts:[['Your instructor uploads exam answers','10.16','For exams with paper answer sheets, your instructor uploads the files. You see results in Feedback once released.',1],['Maintenance: Nov 2, 02:00–04:00 KST','10.14','Sign-in and submissions pause during maintenance. Submit early if a due date overlaps.']],
  }
};
const sm = k => SM[lang][k];
const SMORE = ['mycourses','feedbacks','me','guide','support','notices','terms','privacy'];
let sNt = 0;
let EMPTY = /home-empty/.test(location.hash);
const POL_S = {
  ko:{ terms:['이용약관','서비스를 쓰기 전에 알아 둘 약속이에요.',[['서비스 내용','과제를 제출하고, 담당 교수님이 확인한 점수와 피드백을 받는 서비스예요.'],['계정','학교 이메일로 로그인해요. 다른 사람에게 계정을 넘기지 않아요.'],['제출물','내가 올린 답안의 권리는 나에게 있어요. 서비스는 채점·피드백에만 써요.'],['문의','고객센터에 남기면 학교 이메일로 답해요.']]],
       privacy:['개인정보처리방침','어떤 정보를 왜, 얼마나 보관하는지예요.',[['수집 항목','학번, 이름, 학과, 학교 이메일, 제출한 답안과 파일'],['이용 목적','로그인 본인 확인, 과제 제출, 채점, 피드백 제공'],['보유 기간','기관과 정한 이용 기간이 끝나면 파기해요.'],['AI 처리','제출한 답안은 AI가 채점 초안을 만드는 데 쓰여요. 점수와 피드백은 담당 교수님이 확인한 뒤 공개돼요.']]] },
  en:{ terms:['Terms of use','What to know before using the service.',[['Service','Submit work and receive scores and feedback reviewed by your instructor.'],['Account','Sign in with your school email. Do not share your account.'],['Submissions','You own your answers. The service uses them only for scoring and feedback.'],['Contact','Use the Help center; we reply to your school email.']]],
       privacy:['Privacy policy','What we keep, why, and for how long.',[['Data collected','Student ID, name, department, school email, submitted answers and files'],['Purpose','Sign-in verification, submissions, scoring and feedback'],['Retention','Deleted when the agreed service period with the institution ends.'],['AI processing','Answers are used by AI to draft scores. Scores and feedback are released after instructor review.']]] }
};
function renderStuPolicy(k){ const [h, sub, secs] = POL_S[lang][k]; return shead(h, sub) + `<div class="box">${secs.map(x=>`<div class="fb-item"><div class="fb-item-hd"><b>${x[0]}</b></div><p>${x[1]}</p></div>`).join('')}</div>`; }
const shead = (h, sub, right='') => `<div class="ch"><div class="ch-row"><div><h1>${h}</h1><p class="page-sub" style="margin:0">${sub}</p></div>${right}</div></div>`;

function renderMyCourses(){
  const row = c => { const todo = c.ev.filter(e=>e.st==='todo' && !e.closed && e.way!=='scan').length, fb = c.ev.filter(e=>e.fresh).length;
    const now = [todo ? t('lineTodo')(todo) : '', fb ? t('lineFb')(fb) : ''].filter(Boolean).join(' · ') || `<span class="st muted">${t('lineNone')}</span>`;
    return `<tr class="clickable" onclick="go('course','${c.id}')"><td class="l"><b>${cName(c)}</b></td><td>${lang==='ko'?c.profKo:c.profEn}</td><td>${lang==='ko'?c.secKo:c.secEn}</td><td>${T[lang].sems[c.sem]}</td><td>${now}</td><td><button class="act txt">${sm('open')}<i data-lucide="chevron-right" style="width:16px;height:16px"></i></button></td></tr>`; };
  return shead(sm('cH'), sm('cSub'), `<button class="btn-primary" onclick="go('home'); setTimeout(openJoin, 50)"><i data-lucide="plus" style="width:18px;height:18px"></i>${sm('join')}</button>`)
    + `<div class="tbl-wrap"><table class="tbl"><thead><tr><th class="l">${sm('thC')}</th><th>${sm('thP')}</th><th>${sm('thS')}</th><th>${sm('thT')}</th><th>${sm('thN')}</th><th></th></tr></thead><tbody>${allCourses().map(row).join('')}</tbody></table></div>`;
}
function renderFeedbacks(){
  
  const all = []; allCourses().forEach(c=>c.ev.forEach((e,i)=>{ if (e.st==='fb') all.push({c,e,i}); }));
  const score = (x) => stuScore(x.c.id, x.i+1);   
  const tbl = list => `<div class="tbl-wrap" style="margin-bottom:24px"><table class="tbl"><thead><tr><th class="l">${sm('thE')}</th><th>${sm('thC')}</th><th>${sm('thScore')}</th><th>${sm('thAt')}</th><th></th></tr></thead><tbody>
    ${list.map(x=>`<tr class="clickable" onclick="go('feedback','${x.c.id}',${x.i+1})"><td class="l">${x.e.fresh?'<span class="new" style="margin-right:6px">NEW</span>':''}<b>${L(x.e)}</b></td><td>${cName(x.c)}</td><td><b>${score(x)}</b><span class="st muted"> / 30</span></td><td>${x.e.d}</td><td><button class="act txt">${d('viewFb')}<i data-lucide="chevron-right" style="width:16px;height:16px"></i></button></td></tr>`).join('')}</tbody></table></div>`;
  if (!all.length) return shead(sm('fH'), sm('fSub')) + `<div class="box" style="text-align:center;color:#6d7381">${sm('fNone')}</div>`;
  return shead(sm('fH'), sm('fSub')) + ['s2','s1'].map(sem=>{ const l = all.filter(x=>x.c.sem===sem).sort((a,b)=>(b.e.d||'').localeCompare(a.e.d||'')); return l.length ? `<p class="sem-title" style="margin:6px 0 12px">${T[lang].sems[sem]}</p>${tbl(l)}` : ''; }).join('');
}
function renderStuMe(){
  const row = (l, v) => `<div class="who-row"><span style="width:120px">${l}</span><b>${v}</b></div>`;
  return shead(sm('meH'), '') + `<div class="box"><div class="who" style="background:none;padding:0">${row(sm('meName'), t('stuName'))}${row(sm('meSid'), '202312345')}${row(sm('meDept'), t('stuDept'))}${row(sm('meMail'), 'kimseoyeon23@dd.ac.kr')}
    <div class="who-row"><span style="width:120px">${sm('mePw')}</span><button class="act" onclick="startVerify('reset')">${sm('mePwBtn')}</button></div>
    <div class="who-row"><span style="width:120px">${sm('meLang')}</span><span style="display:flex;gap:6px"><button class="act${lang==='ko'?' pri':''}" onclick="setLang('ko')">한국어</button><button class="act${lang==='en'?' pri':''}" onclick="setLang('en')">English</button></span></div></div>
    <p class="sec-desc" style="margin:14px 0 0">${sm('meNote')}</p></div>
  <div class="box"><p class="box-t">${sm('meConsent')}</p><p class="box-d" style="margin:0">${sm('meConsentD')}</p></div>`;
}
function renderStuGuide(){
  return shead(sm('gH'), sm('gSub'), `<button class="act" onclick="toast(sm('gPdfDone'))"><i data-lucide="file-down" style="width:15px;height:15px"></i>${sm('gPdf')}</button>`)
    + sm('steps').map((s,i)=>`<div class="box gstep"><span class="gnum">${i+1}</span><div style="flex:1"><p class="box-t" style="margin-bottom:4px">${s[0]}</p><p class="box-d" style="margin:0">${s[1]}</p></div>
      <button class="act" onclick="${s[2]==='course' ? "go('course','c3')" : s[2]==='home' ? "go('home'); setTimeout(openJoin, 50)" : `go('${s[2]}')`}">${s[3]}<i data-lucide="chevron-right" style="width:16px;height:16px"></i></button></div>`).join('');
}
function renderStuSupport(){
  return shead(sm('sH'), sm('sSub')) + `<div class="two" style="grid-template-columns:minmax(0,1fr) 380px">
    <div class="box"><p class="box-t">${sm('faqT')}</p>${sm('faq').map((f,i)=>`<details class="faq"${i===0?' open':''}><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}</div>
    <div class="box"><p class="box-t">${sm('askT')}</p><div class="fl"><label>${sm('askBody')}</label><textarea class="fb-area" id="sAsk" placeholder="${sm('askPh')}"></textarea></div>
      <button class="btn-solid" onclick="if(!document.getElementById('sAsk').value.trim()) return; toast(sm('askSent')); document.getElementById('sAsk').value=''">${sm('askSend')}</button></div></div>`;
}
function renderStuNotices(){
  return shead(sm('nH'), sm('nSub')) + `<div class="box" style="padding:6px 22px">${sm('nts').map((n,i)=>`<div class="nt-item" onclick="sNt=${sNt===i?-1:i}; render()">
    <div class="nt-row">${n[3]?'<span class="new">NEW</span>':''}<b>${n[0]}</b><span class="st muted" style="margin-left:auto">${n[1]}</span><i data-lucide="chevron-down" style="width:16px;height:16px;color:#9ea3ad"></i></div>
    ${sNt===i ? `<p>${n[2]}</p>` : ''}</div>`).join('')}</div>`;
}


const _goS = go;
go = function(v, cid, idx){
  if (SMORE.includes(v)){ view = v; location.hash = v + (lang==='en'?'-en':''); render(); window.scrollTo(0,0); return; }
  _goS(v, cid, idx);
};
const _renderS = render;
render = function(){
  const more = SMORE.includes(view), keep = view;
  if (more) view = 'home';
  _renderS(); view = keep;
  if (more){
    const page = document.querySelector('#v-home .page');
    page.querySelector('.u-top').style.display = 'none'; page.querySelector('.cols').style.display = 'none';
    const el = document.getElementById('v-detail'); el.classList.add('on');
    el.innerHTML = ({mycourses:renderMyCourses, feedbacks:renderFeedbacks, me:renderStuMe, guide:renderStuGuide, support:renderStuSupport, notices:renderStuNotices, terms:()=>renderStuPolicy('terms'), privacy:()=>renderStuPolicy('privacy')})[view]();
    document.querySelectorAll('#sbCourses .sc').forEach(n=>n.classList.remove('on'));
  }
  if (document.getElementById('v-home').classList.contains('on') || more){
    const act = {0:'home', 1:'mycourses', 2:'feedbacks'};
    document.querySelectorAll('#nav .si').forEach((n,i)=>{ n.setAttribute('onclick', `go('${act[i]}')`); n.classList.toggle('active', i===0 ? view==='home' : view===act[i]); });
    document.querySelectorAll('#navBottom .si').forEach((n,i)=>{ const k = i===0?'guide':'support'; n.setAttribute('onclick', `go('${k}')`); n.classList.toggle('active', view===k); });
    const mi = document.querySelector('#mePop [data-t="myInfo"]'); if (mi) mi.parentElement.setAttribute('onclick', "document.getElementById('mePop').classList.remove('open'); go('me')");
    const na = document.querySelector('#v-home .rail .more'); if (na) na.setAttribute('onclick', "go('notices')");
    document.querySelectorAll('#notices .nt').forEach((n,i)=>n.setAttribute('onclick', `sNt=${i}; go('notices')`));
  }
  document.querySelectorAll('.footer-links a').forEach(a=>{ const k = a.dataset.t; if (k==='help') a.setAttribute('onclick', "go('support');return false"); if (k==='terms') a.setAttribute('onclick', "go('terms');return false"); if (k==='privacy') a.setAttribute('onclick', "go('privacy');return false"); });
  
  if (view==='home' && EMPTY){ document.getElementById('todoSec').style.display='none'; document.getElementById('sems').innerHTML = `<div class="box" style="text-align:center;padding:40px 24px"><p class="box-t" style="justify-content:center">${sm('emptyT')}</p><p class="box-d" style="margin:0 0 16px">${sm('emptyD')}</p><button class="btn-primary" onclick="openJoin()">${t('joinBtn')}</button></div>`; document.getElementById('sbCourses').innerHTML=''; const gp = document.querySelector('[data-t="greetP"]'); if (gp) gp.textContent = sm('emptyG'); }
  lucide.createIcons();
};
{ const h = location.hash.replace('#',''), v = h.replace('-en','');
  if (h.endsWith('-en')) lang = 'en';
  if (v==='reset'){ startVerify('reset'); }
  else if (v==='home-empty'){ view='home'; render(); }
  else if (SMORE.includes(v)){ view = v; render(); }
  else render(); }   
