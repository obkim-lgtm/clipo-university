
const M = {
  ko:{
    coursesH:'강좌', coursesSub:'이번 학기와 지난 학기 강좌를 모두 봐요. 보관한 강좌도 여기서 다시 열어요.',
    thCourse:'강좌', thSec:'분반', thTerm:'학기', thStu:'수강생', thEv:'평가', thCode:'강좌 코드', thStatus:'상태',
    stOpen:'진행 중', stArch:'보관', newCourse:'강좌 만들기', open:'열기',
    repH:'리포트', repSub:'강좌를 고르면 성적표와 평가별 점수 분포를 봐요. 확인한 점수만 들어가요.', repDetSub:'성적표와 평가별 점수 분포예요. 확인한 점수만 들어가요.', thRel:'공개한 평가', thAvgSub:'평균 제출률', thAvg:'평균 점수', repOpen:'리포트 보기',
    repCourse:'강좌', repEval:'평가', gradebook:'성적표', dist:'점수 분포', crit:'채점기준별 평균',
    stEvals:'평가', stAvgSub:'평균 제출률', stRel:'공개 끝난 평가', stAvg:'평균 점수',
    avg:'평균', none:'미제출', notRev:'확인 전', scoreOf:(a,b)=>`${a} / ${b}`, csv:'성적표 내려받기', csvDone:f=>`${f}을(를) 내려받았어요`,
    distNote:n=>`확인한 ${n}명 기준`, noRev:'아직 확인한 답안이 없어요', moreStu:n=>`${n}명 더 보기`,
    meH:'내 정보', meName:'이름', meOrg:'소속', meMail:'학교 이메일', mePw:'비밀번호', mePwBtn:'비밀번호 바꾸기', meLang:'언어',
    meCredit:'오늘 크레딧', meCreditD:'AI 채점·채점기준 만들기에 써요. 매일 0시에 100으로 채워지고, 다 쓰면 다음 날 다시 쓸 수 있어요.', meUsed:'최근 쓴 내역',
    use:[['10:42','쪽지시험 1 · AI 채점 40명','40'],['09:15','과제 3 · AI 채점 39명','39'],['08:51','중간고사 · AI 채점 20명','20'],['08:40','과제 4 · 채점기준 만들기','1']],
    guideH:'사용 안내', guideSub:'처음 쓸 때 이 순서로 하면 돼요.',
    steps:[['강좌 만들기','이름과 분반만 넣으면 강좌 코드가 생겨요.','newcourse','강좌 만들기'],['수강생 받기','첫 수업에 강좌 코드를 알려 주거나, 학번으로 바로 추가해요.','roster','수강생'],['평가 만들기','문제지를 올리면 AI가 채점기준 초안을 만들어요.','new','평가 만들기'],['AI 채점 → 확인 → 공개','답안이 들어오면 AI 채점을 돌리고, 확인한 학생부터 공개해요.','course','평가 목록']],
    go:'바로 가기', pdf:'교수용 사용 안내 PDF', pdfDone:'사용 안내 PDF를 내려받았어요',
    supH:'고객센터', supSub:'자주 묻는 질문을 먼저 보고, 해결이 안 되면 문의를 남겨 주세요. 학교 이메일로 답해 드려요.',
    faqT:'자주 묻는 질문', askT:'문의 남기기', askCat:'종류', askBody:'내용', askPh:'어떤 화면에서 무엇을 하다가 생긴 일인지 적어 주세요.', askSend:'문의 보내기', askSent:'문의를 남겼어요. 학교 이메일로 답해 드려요.',
    cats:['계정·로그인','강좌·수강생','평가·채점','기타'],
    faq:[['학생이 강좌 코드를 넣어도 들어오지 못해요','강좌 설정에서 「코드로 참여 받기」가 켜져 있는지 확인해 주세요. 꺼져 있으면 코드를 알아도 들어올 수 없어요.'],['학생 학번이 검색되지 않아요','학번 전체를 넣어야 찾을 수 있어요. 그래도 안 나오면 학교 명단에 없는 학생이에요. 고객센터로 학번을 알려 주세요.'],['크레딧을 다 썼어요','매일 0시에 100으로 다시 채워져요. 남은 답안은 다음 날 「AI 채점」을 눌러 이어서 채점하면 돼요.'],['공개한 점수를 고쳐도 되나요','돼요. 학생 채점 화면에서 고치고 저장하면 학생 화면에도 바로 바뀌어요.']],
    ntH:'공지', ntSub:'서비스 점검과 새 기능 소식이에요.',
    xlT:'엑셀로 한 번에 추가', xlD:'학교 수강생 명단 엑셀을 그대로 올려요. 학번·이름·학교 이메일 열이 있으면 돼요. 이미 수강생인 학생은 건너뛰어요.', xlDrop:'명단 엑셀 올리기', xlDropD:'.xlsx 또는 .csv', xlRes:'40명 중 38명을 추가했어요', xlResD:'2명은 이미 수강생이라 건너뛰었어요', xlToast:'명단에서 38명을 추가했어요', xlTpl:'양식 파일을 내려받았어요', xlTplBtn:'양식 내려받기', xlClose:'닫기',
    nts:[['손글씨 답안 파일 업로드가 열렸어요','10.16','직접 업로드 평가에서 학생별 PDF를 한 번에 올릴 수 있어요. 파일 이름에 학번이 있으면 그 학생에게 붙어요.',1],['11월 2일(일) 02:00~04:00 점검 안내','10.14','점검 시간에는 로그인과 제출이 멈춰요. 마감이 겹치는 평가는 마감을 미뤄 주세요.'],['2학기 수강생 명단 올리는 방법','09.01','수강생 탭에서 「엑셀로 한 번에 추가」를 누르고 학교 명단 엑셀을 그대로 올리면 돼요. 학번·이름·학교 이메일 열이 필요해요.']],
  },
  en:{
    coursesH:'Courses', coursesSub:'All courses from this and past terms. Archived courses can be reopened here.',
    thCourse:'Course', thSec:'Section', thTerm:'Term', thStu:'Students', thEv:'Assessments', thCode:'Course code', thStatus:'Status',
    stOpen:'Active', stArch:'Archived', newCourse:'New course', open:'Open',
    repH:'Reports', repSub:'Pick a course to see its gradebook and score distribution. Only reviewed scores are included.', repDetSub:'Gradebook and score distribution. Only reviewed scores are included.', thRel:'Released', thAvgSub:'Avg. submission', thAvg:'Avg. score', repOpen:'View report',
    repCourse:'Course', repEval:'Assessment', gradebook:'Gradebook', dist:'Score distribution', crit:'Average by criterion',
    stEvals:'Assessments', stAvgSub:'Avg. submission rate', stRel:'Fully released', stAvg:'Average score',
    avg:'Average', none:'Missing', notRev:'Unreviewed', scoreOf:(a,b)=>`${a} / ${b}`, csv:'Download gradebook', csvDone:f=>`Downloaded ${f}`,
    distNote:n=>`Based on ${n} reviewed`, noRev:'No reviewed answers yet', moreStu:n=>`Show ${n} more`,
    meH:'My profile', meName:'Name', meOrg:'Affiliation', meMail:'School email', mePw:'Password', mePwBtn:'Change password', meLang:'Language',
    meCredit:'Credits today', meCreditD:'Used for AI scoring and rubric drafts. Refills to 100 daily at 00:00; when used up, continue the next day.', meUsed:'Recent use',
    use:[['10:42','Quiz 1 · AI scoring for 40','40'],['09:15','Essay 3 · AI scoring for 39','39'],['08:51','Midterm · AI scoring for 20','20'],['08:40','Essay 4 · Rubric draft','1']],
    guideH:'User guide', guideSub:'Follow these steps when you start.',
    steps:[['Create a course','Enter a name and section; a course code is created.','newcourse','New course'],['Add students','Share the course code in class, or add students by ID.','roster','Students'],['Create an assessment','Upload the question sheet and AI drafts a rubric.','new','New assessment'],['AI scoring → review → release','Run AI scoring when answers arrive, then release reviewed students.','course','Assessments']],
    go:'Go', pdf:'Instructor guide (PDF)', pdfDone:'Downloaded the guide PDF',
    supH:'Help center', supSub:'Check the FAQ first; if it does not help, send us a message. We reply to your school email.',
    faqT:'FAQ', askT:'Contact us', askCat:'Topic', askBody:'Message', askPh:'Tell us which screen and what you were doing.', askSend:'Send', askSent:'Message sent. We will reply to your school email.',
    cats:['Account & sign-in','Courses & students','Assessments & scoring','Other'],
    faq:[['Students cannot join with the course code','Check that "Allow joining by code" is on in course settings.'],['A student ID is not found','Enter the full ID. If it still does not appear, the student is not on the school roster; send us the ID.'],['I ran out of credits','Credits refill to 100 daily at 00:00. Press "AI scoring" the next day to continue.'],['Can I change a released score?','Yes. Edit and save it on the grading screen; the student sees the change right away.']],
    ntH:'Announcements', ntSub:'Maintenance and new features.',
    xlT:'Add many with Excel', xlD:'Upload the school roster as is. Student ID, name and school email columns are required. Students already enrolled are skipped.', xlDrop:'Upload roster file', xlDropD:'.xlsx or .csv', xlRes:'Added 38 of 40', xlResD:'2 were already enrolled and skipped', xlToast:'Added 38 students from the roster', xlTpl:'Template downloaded', xlTplBtn:'Download template', xlClose:'Close',
    nts:[['Handwritten answer files can now be uploaded','10.16','In direct-upload assessments, upload one PDF per student at once. Files with a student ID in the name are attached to that student.',1],['Maintenance: Nov 2, 02:00–04:00 KST','10.14','Sign-in and submissions pause during maintenance. Move due dates that overlap.'],['How to upload your Fall roster','09.01','In the Students tab, choose "Add many with Excel" and upload the school roster. ID, name and school email columns are required.']],
  }
};
const m = k => M[lang][k];
const MORE = ['courses','reports','me','guide','support','notices','terms','privacy'];
let repCourse = null, repEval = null,   
 ntOpen = 0, supCat = 0, xlOpen = false, xlDone = false;

const head = (h, sub, right='') => `<div class="ch"><div class="ch-row"><div><h1>${h}</h1><p class="page-sub" style="margin:0">${sub}</p></div>${right}</div></div>`;


function renderCourses(){
  const row = c => { const evN = evOf(c.id).length; return `<tr class="clickable" onclick="go('course','${c.id}')">
    <td class="l"><span class="cc-ico" style="width:28px;height:28px;font-size:12px;border-radius:6px;display:inline-flex;margin-right:10px;vertical-align:middle">${cName(c)[0]}</span><b>${cName(c)}</b></td>
    <td>${lang==='ko'?c.secKo:c.secEn}</td><td>${T[lang].sems[c.sem]}</td><td>${c.n}</td><td>${evN}</td>
    <td><span class="code-sm" style="font-weight:700;letter-spacing:.12em;color:#3151c4">${CODES[c.id]||'–'}</span></td>
    <td>${c.arch ? `<span class="chip">${m('stArch')}</span>` : `<span class="chip blue">${m('stOpen')}</span>`}</td></tr>`; };
  const grp = s => COURSES.filter(c=>c.sem===s);
  const tbl = list => `<div class="tbl-wrap" style="margin-bottom:24px"><table class="tbl"><thead><tr><th class="l">${m('thCourse')}</th><th>${m('thSec')}</th><th>${m('thTerm')}</th><th>${m('thStu')}</th><th>${m('thEv')}</th><th>${m('thCode')}</th><th>${m('thStatus')}</th></tr></thead><tbody>${list.map(row).join('')}</tbody></table></div>`;
  return head(m('coursesH'), m('coursesSub'), `<button class="btn-primary" onclick="go('newcourse')"><i data-lucide="plus" style="width:18px;height:18px"></i>${m('newCourse')}</button>`)
    + ['s2','s1'].map(s=>`<p class="sem-title" style="margin:6px 0 12px">${T[lang].sems[s]}</p>${tbl(grp(s))}`).join('');
}


function renderRepList(){
  
  const row = c => { const evs = evOf(c.id).filter(e=>e.sub>0), all = evOf(c.id);
    const subRate = evs.length ? Math.round(evs.reduce((a,e)=>a+e.sub/c.n,0)/evs.length*100) + '%' : '–';
    const rev = evs.flatMap(e=>subOf(c.id,e.id).filter(x=>x.rev).map(x=>x.score));
    return `<tr class="clickable" onclick="go('reports','${c.id}')">
    <td class="l"><span class="cc-ico" style="width:28px;height:28px;font-size:12px;border-radius:6px;display:inline-flex;margin-right:10px;vertical-align:middle">${cName(c)[0]}</span><b>${cName(c)}</b></td>
    <td>${lang==='ko'?c.secKo:c.secEn}</td><td>${c.n}</td><td>${all.length}</td><td>${subRate}</td><td>${evs.filter(e=>e.relN===e.sub).length} / ${all.length}</td>
    <td>${rev.length ? (rev.reduce((a,b)=>a+b,0)/rev.length).toFixed(1) : '–'}</td>
    <td><button class="act txt" onclick="event.stopPropagation(); go('reports','${c.id}')">${m('repOpen')}<i data-lucide="chevron-right" style="width:16px;height:16px"></i></button></td></tr>`; };
  const tbl = list => `<div class="tbl-wrap" style="margin-bottom:24px"><table class="tbl"><thead><tr><th class="l">${m('thCourse')}</th><th>${m('thSec')}</th><th>${m('thStu')}</th><th>${m('thEv')}</th><th>${m('thAvgSub')}</th><th>${m('thRel')}</th><th>${m('thAvg')}</th><th></th></tr></thead><tbody>${list.map(row).join('')}</tbody></table></div>`;
  return head(m('repH'), m('repSub')) + ['s2','s1'].map(s=>{ const l = COURSES.filter(c=>c.sem===s); return l.length ? `<p class="sem-title" style="margin:6px 0 12px">${T[lang].sems[s]}</p>${tbl(l)}` : ''; }).join('');
}
function renderReports(){
  if (!repCourse || !cById(repCourse)) return renderRepList();
  const c = cById(repCourse), evs = evOf(c.id).filter(e=>e.sub>0);
  if (!evs.find(e=>e.id===repEval)) repEval = (evs.slice().reverse().find(e=>e.rev>0)||evs[0]||{}).id;
  const stu = rosterOf(c.id);
  const cell = (e, s) => { const x = subOf(c.id, e.id).find(y=>y.sid===s.sid); if (!x || !x.at) return `<span class="st muted">${m('none')}</span>`; if (!x.rev) return `<span class="st muted">${m('notRev')}</span>`; return `<b>${x.score}</b>`; };
  const avgOf = s => { const v = evs.map(e=>subOf(c.id,e.id).find(y=>y.sid===s.sid)).filter(x=>x&&x.rev).map(x=>x.score); return v.length ? (v.reduce((a,b)=>a+b,0)/v.length).toFixed(1) : '–'; };
  const allRev = evs.flatMap(e=>subOf(c.id,e.id).filter(x=>x.rev).map(x=>x.score));
  const subRate = evs.length ? Math.round(evs.reduce((a,e)=>a+e.sub/c.n,0)/evs.length*100) : 0;
  const stat = (l,v) => `<div class="stat"><small>${l}</small><b>${v}</b></div>`;
  
  const se = evs.find(e=>e.id===repEval), rv = se ? subOf(c.id, se.id).filter(x=>x.rev) : [];
  const bins = [0,0,0,0,0]; rv.forEach(x=>{ bins[Math.min(4, Math.floor(x.score/6))]++; });
  const mx = Math.max(1,...bins), lbl = ['0–5','6–11','12–17','18–23','24–30'];
  const rub = d('rubric'), critAvg = rub.map((r,k)=> rv.length ? Math.min(r[1], (r[1]*(0.62+0.08*k) + (rv.length%3)*0.1)) : 0);
  return `<div class="ch"><div class="crumb"><a href="#" onclick="repCourse=null; go('reports');return false">${m('repH')}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${cName(c)}</span></div>
    <div class="ch-row"><div><h1>${cName(c)}</h1><p class="page-sub" style="margin:0">${lang==='ko'?c.secKo:c.secEn} · ${m('repDetSub')}</p></div><button class="act" onclick="dlGradebook()"><i data-lucide="download" style="width:15px;height:15px"></i>${m('csv')}</button></div></div>
  <div class="stats">${stat(m('stEvals'), `${evOf(c.id).length}`)}${stat(m('stAvgSub'), `${subRate}<em>%</em>`)}${stat(m('stRel'), `${evs.filter(e=>e.relN===e.sub).length}<em>/ ${evOf(c.id).length}</em>`)}${stat(m('stAvg'), allRev.length ? `${(allRev.reduce((a,b)=>a+b,0)/allRev.length).toFixed(1)}<em>/ 30</em>` : '–')}</div>
  <p class="sem-title" style="margin:8px 0 12px">${m('gradebook')}</p>
  <div class="tbl-wrap" style="overflow-x:auto;margin-bottom:28px"><table class="tbl"><thead><tr><th>${d('thSid')}</th><th>${d('thName')}</th>${evs.map(e=>`<th style="white-space:nowrap">${evName(e).split(' · ')[0]}</th>`).join('')}<th>${m('avg')}</th></tr></thead>
    <tbody>${stu.slice(0, showN).map(s=>`<tr><td>${s.sid}</td><td>${lang==='ko'?s.ko:s.en}</td>${evs.map(e=>`<td>${cell(e,s)}</td>`).join('')}<td><b>${avgOf(s)}</b></td></tr>`).join('')}
    ${stu.length > showN ? `<tr><td colspan="${evs.length+3}"><button class="row-x" onclick="showN+=10; render()">${m('moreStu')(Math.min(10, stu.length-showN))}</button></td></tr>` : ''}</tbody></table></div>
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px"><p class="sem-title" style="margin:0">${m('repEval')}</p><select class="sel" style="width:260px" onchange="repEval=+this.value; render()">${evs.map(e=>`<option value="${e.id}" ${e.id===repEval?'selected':''}>${evName(e)}</option>`).join('')}</select><span class="st muted">${rv.length ? m('distNote')(rv.length) : ''}</span></div>
  ${rv.length ? `<div class="two eq" style="grid-template-columns:1fr 1fr">
    <div class="box"><p class="box-t">${m('dist')}</p><div class="hist">${bins.map((b,i)=>`<div class="hcol"><span class="hv">${b}</span><i style="height:${Math.round(b/mx*120)}px"></i><small>${lbl[i]}</small></div>`).join('')}</div></div>
    <div class="box"><p class="box-t">${m('crit')}</p>${rub.map((r,k)=>`<div class="hbar"><span class="hn">${r[0]}</span><span class="ht"><i style="width:${Math.round(critAvg[k]/r[1]*100)}%"></i></span><span class="hs">${critAvg[k].toFixed(1)} / ${r[1]}</span></div>`).join('')}</div></div>`
    : `<div class="box" style="text-align:center;color:#6d7381">${m('noRev')}</div>`}`;
}
function dlGradebook(){
  const c = cById(repCourse), evs = evOf(c.id).filter(e=>e.sub>0);
  const rows = [['학번','이름',...evs.map(e=>e.ko)]].concat(rosterOf(c.id).map(s=>[s.sid, s.ko, ...evs.map(e=>{ const x = subOf(c.id,e.id).find(y=>y.sid===s.sid); return x&&x.rev ? x.score : ''; })]));
  const f = `${c.ko}_성적표.csv`.replace(/[\\/:*?"<>|· ]+/g,'_');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob(['﻿'+rows.map(r=>r.join(',')).join('\n')], {type:'text/csv'})); a.download = f; a.click(); toast(m('csvDone')(f));
}

function renderMe(){
  const row = (l, v) => `<div class="who-row"><span>${l}</span><b>${v}</b></div>`;
  return head(m('meH'), '') + `
  <div class="box"><div class="who" style="background:none;padding:0">${row(m('meName'), t('meName'))}${row(m('meOrg'), `${t('org')} · ${t('meSub')}`)}${row(m('meMail'), (typeof IS_TA!=='undefined' && IS_TA) ? 'jung.ta@dd.ac.kr' : 'lee@dd.ac.kr')}
    <div class="who-row"><span>${m('mePw')}</span><button class="act" onclick="location.href='univ_student_v1_261019.html#reset${lang==='en'?'-en':''}'">${m('mePwBtn')}</button></div>
    <div class="who-row"><span>${m('meLang')}</span><span class="rc-row" style="gap:6px"><button class="act${lang==='ko'?' pri':''}" onclick="setLang('ko')">한국어</button><button class="act${lang==='en'?' pri':''}" onclick="setLang('en')">English</button></span></div></div></div>
  <div class="box"><p class="box-t">${m('meCredit')} <span style="margin-left:auto;font-size:15px">${CREDIT} / 100</span></p><p class="box-d">${m('meCreditD')}</p>
    <div class="cr-bar" style="height:6px;background:#e4e7ec;border-radius:3px;margin:0 0 18px"><i style="display:block;height:100%;width:${CREDIT}%;background:#416bff;border-radius:3px"></i></div>
    <p style="font-size:14px;font-weight:600;margin:0 0 6px">${m('meUsed')}</p>
    ${m('use').map(u=>`<div style="display:flex;gap:14px;padding:9px 0;border-top:1px solid #f1f3f5;font-size:14px"><span class="st muted" style="width:90px">10.21 ${u[0]}</span><span style="flex:1">${u[1]}</span><b>−${u[2]}</b></div>`).join('')}</div>`;
}

function renderGuide(){
  return head(m('guideH'), m('guideSub'), `<button class="act" onclick="toast(m('pdfDone'))"><i data-lucide="file-down" style="width:15px;height:15px"></i>${m('pdf')}</button>`) +
  `<div class="guide-steps">${m('steps').map((s,i)=>`<div class="box gstep"><span class="gnum">${i+1}</span><div style="flex:1"><p class="box-t" style="margin-bottom:4px">${s[0]}</p><p class="box-d" style="margin:0">${s[1]}</p></div>
    <button class="act" onclick="go('${s[2]}'${s[2]==='newcourse'?'':",'c1'"})">${s[3]}<i data-lucide="chevron-right" style="width:16px;height:16px"></i></button></div>`).join('')}</div>`;
}

function renderSupport(){
  return head(m('supH'), m('supSub')) + `<div class="two" style="grid-template-columns:minmax(0,1fr) 400px">
    <div class="box"><p class="box-t">${m('faqT')}</p>${m('faq').map((f,i)=>`<details class="faq"${i===0?' open':''}><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}</div>
    <div class="box"><p class="box-t">${m('askT')}</p>
      <div class="fl"><label>${m('askCat')}</label><div style="display:flex;flex-wrap:wrap;gap:6px">${m('cats').map((x,i)=>`<button class="act${supCat===i?' pri':''}" onclick="supCat=${i}; render()">${x}</button>`).join('')}</div></div>
      <div class="fl"><label>${m('askBody')}</label><textarea class="fb-area" id="askBody" placeholder="${m('askPh')}"></textarea></div>
      <button class="btn-solid" onclick="if(!document.getElementById('askBody').value.trim()) return; toast(m('askSent')); document.getElementById('askBody').value=''">${m('askSend')}</button></div></div>`;
}

function renderNotices(){
  return head(m('ntH'), m('ntSub')) + `<div class="box" style="padding:6px 22px">${m('nts').map((n,i)=>`<div class="nt-item${ntOpen===i?' open':''}" onclick="ntOpen=${ntOpen===i?-1:i}; render()">
    <div class="nt-row">${n[3]?'<span class="new">NEW</span>':''}<b>${n[0]}</b><span class="st muted" style="margin-left:auto">${n[1]}</span><i data-lucide="chevron-down" style="width:16px;height:16px;color:#9ea3ad"></i></div>
    ${ntOpen===i ? `<p>${n[2]}</p>` : ''}</div>`).join('')}</div>`;
}

function ccMenu(ev, cid){
  document.querySelectorAll('.cc-pop').forEach(p=>p.remove());
  const c = cById(cid), pop = document.createElement('div'); pop.className = 'cc-pop';
  pop.innerHTML = `<button onclick="go('settings','${cid}')"><i data-lucide="settings" style="width:16px;height:16px"></i>${lang==='ko'?'강좌 설정':'Course settings'}</button><button onclick="go('roster','${cid}')"><i data-lucide="users" style="width:16px;height:16px"></i>${lang==='ko'?'수강생':'Students'}</button><button onclick="go('reports','${cid}')"><i data-lucide="bar-chart-2" style="width:16px;height:16px"></i>${lang==='ko'?'리포트':'Report'}</button><div class="cc-pop-div"></div><button onclick="c_arch('${cid}')"><i data-lucide="archive" style="width:16px;height:16px"></i>${c.arch ? (lang==='ko'?'보관 해제':'Unarchive') : (lang==='ko'?'보관하기':'Archive')}</button>`;
  ev.currentTarget.closest('.cc').appendChild(pop); lucide.createIcons();
  setTimeout(()=>document.addEventListener('click', ()=>pop.remove(), {once:true}), 0);
}
function c_arch(cid){ const c = cById(cid); c.arch = !c.arch; render(); toast(c.arch ? d('archived')(cName(c)) : d('unarchived')(cName(c))); }

const POL = {
  ko:{ terms:['이용약관','서비스를 쓰기 전에 알아 둘 약속이에요.',[['서비스 내용','과제·시험 답안을 올리고, AI 채점 결과를 교수가 확인해 학생에게 공개하는 서비스예요.'],['계정','계정은 기관이 준 학교 이메일로 만들어요. 다른 사람에게 계정을 넘기지 않아요.'],['제출물','학생이 올린 답안의 권리는 학생에게 있어요. 서비스는 채점·피드백에만 써요.'],['AI 채점 결과','AI 점수는 참고용이에요. 학생에게 공개되는 점수와 피드백은 교수가 확인한 것이에요.'],['문의','고객센터에 남기면 학교 이메일로 답해요.']]],
       privacy:['개인정보처리방침','어떤 정보를 왜, 얼마나 보관하는지예요.',[['수집 항목','학번, 이름, 학과, 학교 이메일, 제출한 답안과 파일'],['이용 목적','로그인 본인 확인, 과제 제출, 채점, 피드백 제공'],['보유 기간','기관과 정한 이용 기간이 끝나면 파기해요.'],['AI 처리','제출한 답안은 AI가 채점 초안을 만드는 데 쓰여요. 점수와 피드백은 담당 교수가 확인한 뒤 공개돼요.'],['문의','개인정보 관련 문의는 고객센터로 남겨 주세요.']]] },
  en:{ terms:['Terms of use','What to know before using the service.',[['Service','Upload assignment and exam answers; instructors review AI scores and release them to students.'],['Account','Accounts use the school email provided by your institution. Do not share your account.'],['Submissions','Students own their answers. The service uses them only for scoring and feedback.'],['AI scores','AI scores are for reference. Released scores and feedback are reviewed by the instructor.'],['Contact','Use the Help center; we reply to your school email.']]],
       privacy:['Privacy policy','What we keep, why, and for how long.',[['Data collected','Student ID, name, department, school email, submitted answers and files'],['Purpose','Sign-in verification, submissions, scoring and feedback'],['Retention','Deleted when the agreed service period with the institution ends.'],['AI processing','Answers are used by AI to draft scores. Scores and feedback are released after instructor review.'],['Contact','Send privacy questions through the Help center.']]] }
};
function renderPolicy(k){ const [h, sub, secs] = POL[lang][k]; return head(h, sub) + `<div class="box">${secs.map(x=>`<div class="fb-item"><div class="fb-item-hd"><b>${x[0]}</b></div><p>${x[1]}</p></div>`).join('')}</div>`; }

const CREDIT = 100;

const _go2 = go;
go = function(v, cid, eid, sid){
  if (MORE.includes(v)){
    showN = 10; view = v; if (v==='reports'){ repCourse = cid || null; repEval = null; }
    location.hash = v==='reports' && repCourse ? `reports-${repCourse}` : v;
    render(); window.scrollTo(0,0); return;
  }
  _go2(v, cid, eid, sid);
};
const _render2 = render;
render = function(){
  const more = MORE.includes(view), keep = view;
  if (more) view = 'home';
  _render2(); view = keep;
  if (more){
    document.getElementById('v-home').classList.remove('on');
    const el = document.getElementById('v-detail'); el.classList.add('on');
    el.innerHTML = ({courses:renderCourses, reports:renderReports, me:renderMe, guide:renderGuide, support:renderSupport, notices:renderNotices, terms:()=>renderPolicy('terms'), privacy:()=>renderPolicy('privacy')})[view]();
  }
  const nav = [...document.querySelectorAll('#nav .si')], bot = [...document.querySelectorAll('#navBottom .si')];
  const act = {0:'home', 1:'courses', 2:'reports'};
  nav.forEach((n,i)=>{ n.setAttribute('onclick', `go('${act[i]}')`); n.classList.toggle('active', view===act[i]); });
  bot.forEach((n,i)=>{ const k = i===0?'guide':'support'; n.setAttribute('onclick', `go('${k}')`); n.classList.toggle('active', view===k); });
  if (more) document.querySelectorAll('#sbCourses .sc').forEach(n=>n.classList.remove('on'));
  const mi = document.querySelector('#mePop [data-t="myInfo"]'); if (mi) mi.parentElement.setAttribute('onclick', "document.getElementById('mePop').classList.remove('open'); go('me')");
  const na = document.querySelector('#v-home .rail .more'); if (na) na.setAttribute('onclick', "go('notices')");
  document.querySelectorAll('#notices .nt').forEach((n,i)=>n.setAttribute('onclick', `ntOpen=${i}; go('notices')`));
  document.querySelectorAll('#v-home .cc').forEach(card=>{ const b = card.querySelector('.cc-menu'); if (!b) return; const c = COURSES.find(x=>cName(x)===card.getAttribute('title')); if (!c) return;
    b.setAttribute('onclick', `event.stopPropagation(); ccMenu(event,'${c.id}')`); });
  document.querySelectorAll('.footer-links a').forEach(a=>{ const k = a.dataset.t; if (k==='help') a.setAttribute('onclick', "go('support');return false"); if (k==='terms') a.setAttribute('onclick', "go('terms');return false"); if (k==='privacy') a.setAttribute('onclick', "go('privacy');return false"); });
  if (view==='roster'){ const ex = document.querySelector('#v-roster [data-t="excel"]'); if (ex) ex.setAttribute('onclick', 'xlOpen=!xlOpen; xlDone=false; render()');
    const grid = document.querySelector('#v-roster .add-grid'); document.getElementById('xlBox')?.remove();
    if (xlOpen && grid){ grid.insertAdjacentHTML('afterend', `<div class="box" id="xlBox"><p class="box-t"><i data-lucide="sheet" style="width:20px;height:20px;color:#416bff"></i>${m('xlT')}</p><p class="box-d">${m('xlD')}</p>
      ${xlDone ? `<div class="sid-res" style="margin:0"><b>${m('xlRes')}</b><span class="dim">${m('xlResD')}</span></div>` : `<div class="drop" onclick="xlDone=true; render(); toast(m('xlToast'))"><i data-lucide="upload"></i><b>${m('xlDrop')}</b>${m('xlDropD')}</div>`}
      <div class="foot-act" style="padding:12px 0 0;justify-content:flex-start"><button class="act txt" onclick="toast(m('xlTpl'))">${m('xlTplBtn')}</button><button class="btn-sec" style="margin-left:auto" onclick="xlOpen=false; render()">${xlDone ? m('xlClose') : d('cancel')}</button></div></div>`); } }
  const cn = document.querySelector('.cr-num'); if (cn) cn.innerHTML = `${CREDIT}<small> / 100</small>`;
  const cb = document.querySelector('.cr-bar i'); if (cb) cb.style.width = CREDIT+'%';
  const ct = document.querySelector('.cr .si-tip'); if (ct) ct.textContent = `${t('creditLbl')} ${CREDIT} / 100`;
  lucide.createIcons();
};
{ const h = location.hash.replace('#',''); let mm;
  if ((mm = h.match(/^reports-(c\d+)/))) { view='reports'; repCourse=mm[1]; }
  else if (MORE.includes(h)) view = h;
  render(); }
