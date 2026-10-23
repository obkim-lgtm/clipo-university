
const D = {
  ko:{
    thEval:'평가', thType:'제출', thDue:'마감', thMine:'내 상태', type:{hw:'직접 제출', mid:'교수님이 올림', final:'교수님이 올림'},
    st:{todo:'제출 전', sub:'제출함 · 결과 공개 전', fb:'피드백 도착', soon:'결과 공개 전', exam:'답안지를 교수님이 올려요', closed:'마감 지남 · 미제출'}, view:'보기', closedT:'마감이 지나 제출할 수 없어요', closedD:due=>`마감은 ${due} 23:59였어요. 늦게라도 내야 한다면 담당 교수님께 알려 주세요. 교수님이 대신 올릴 수 있어요.`, dlDone:f=>`${f}을(를) 내려받았어요`, hideAns:'내 답안 닫기', vOrig:'제출 원본', vText:'인식 결과',
    submit:'제출하기', resubmit:'다시 제출', viewFb:'피드백 보기', viewSub:'제출한 파일',
    prof:'담당', noEval:'아직 열린 평가가 없어요',
    
    subH:'과제 제출', guideT:'과제 안내', dueT:'마감', fileT:'제출 파일', fileD:'PDF 1개를 올려요. 사진이나 워드 파일은 PDF로 바꿔서 올리면 글자가 더 정확하게 읽혀요.',
    drop:'PDF 올리기', dropD:'또는 여기로 끌어다 놓기', qSheet:'문제지 내려받기', materials:'참고 자료',
    guideBody:'3주차와 5주차 자료를 바탕으로, 제시된 수행평가 설계의 타당성을 평가하고 개선안을 제시하세요. 분량은 A4 1~2쪽이에요.',
    doneT:'제출했어요', doneD:at=>`${at} 제출 · 마감 전까지 다시 올리면 마지막 파일로 바뀌어요`, changeFile:'파일 바꾸기',
    sent:'과제를 제출했어요', beforeDue:'마감 전까지 다시 제출할 수 있어요', lateNote:'마감이 지나면 제출할 수 없어요',
    
    fbH:'피드백', total:'총점', byCrit:'채점기준별', overall:'종합 피드백', myAns:'내 답안 보기', fbFrom:'담당 교수 확인',
    rubric:[['논제 이해',6,6,'문제가 묻는 "수행평가 설계의 타당성" 개념을 자기 말로 정확히 설명했어요.'],['근거의 타당성',9,7,'3주차 자료의 타당도 세 요소를 근거로 든 점은 좋아요. 두 번째 근거는 사례가 없어 주장만 남았어요.'],['논리 전개',9,8,'문제 제기 → 분석 → 개선안이 한 흐름으로 이어져요. 결론에서 개선안 셋을 다시 묶어 주면 더 선명해요.'],['문장·표현',6,6,'문장이 간결하고 용어를 바르게 썼어요.']],
    
    studyT:'다음 공부 안내', studyD:'점수가 깎인 곳의 모범답안과, 다음 글에서 해 볼 것을 정리했어요.', lostT:'감점된 곳과 모범답안', modelL:'모범답안', srcs:{1:'3주차 강의자료 · 18쪽', 2:'5주차 강의자료 · 7쪽'},
    models:{1:'근거마다 수업 자료의 개념과 사례를 함께 써요. 예: 「구인 타당도가 낮다(3주차) → 과제가 요약만 요구해서 논증 능력을 재지 못한다(5주차 사례)」', 2:'주장 → 근거 → 개선안 순서로 쓰고, 결론에서 개선안 세 가지를 한 문장으로 다시 묶어요.'},
    strongT:'잘한 점', strong:['논제 이해: 「수행평가 설계의 타당성」을 자기 말로 정확히 설명했어요.','문장·표현: 내용 타당도 · 구인 타당도 같은 용어를 바르게 썼어요.'],
    improveT:'보완할 점', improve:[['근거의 타당성: 두 번째 근거에 사례가 없어요.','5주차 자료의 사례를 하나 붙여 보기'],['논리 전개: 결론이 개선안을 다시 묶지 않아요.','마지막 문단에서 개선안 셋을 한 문장으로 정리하기']],
    planT:'다음 글을 위한 공부 방법', plan:[['근거는 「개념 + 사례」 한 쌍으로','주장마다 수업 자료의 개념 하나와 사례 하나를 짝지어 메모해 두기'],['타당도 세 요소를 표로','내용 · 구인 · 결과 타당도를 「뜻 · 확인 방법 · 예」 표로 정리하기'],['결론은 개선안을 다시 묶기','서술형 답의 마지막 문단을 「그래서 이것을 고친다」 한 문장으로 끝내는 연습']],
    overallFb:'논제를 정확히 짚었고 수업 자료를 근거로 끌어온 점이 설득력 있어요. 두 번째 근거에 5주차 자료의 사례를 하나 붙이면 글이 훨씬 단단해져요. 다음 과제에서 그 부분을 시도해 보세요.',
  },
  en:{
    thEval:'Assessment', thType:'Submission', thDue:'Due', thMine:'My status', type:{hw:'You submit', mid:'Instructor uploads', final:'Instructor uploads'},
    st:{todo:'Not submitted', sub:'Submitted · not released yet', fb:'Feedback ready', soon:'Not released yet', exam:'Your instructor uploads answer sheets', closed:'Past due · not submitted'}, view:'View', closedT:'Submissions are closed', closedD:due=>`The due date was ${due} 23:59. If you still need to submit, contact your instructor; they can upload it for you.`, dlDone:f=>`Downloaded ${f}`, hideAns:'Hide my answer', vOrig:'Original', vText:'Recognized text',
    submit:'Submit', resubmit:'Resubmit', viewFb:'View feedback', viewSub:'Submitted file',
    prof:'Instructor', noEval:'No assessments yet',
    subH:'Submit assignment', guideT:'Instructions', dueT:'Due', fileT:'Your file', fileD:'Upload one PDF. Convert photos or Word files to PDF so the text is read accurately.',
    drop:'Upload PDF', dropD:'or drag it here', qSheet:'Download question sheet', materials:'Materials',
    guideBody:'Based on the week 3 and week 5 materials, evaluate the validity of the given assessment design and propose improvements. 1–2 A4 pages.',
    doneT:'Submitted', doneD:at=>`Submitted ${at} · upload again before the due date to replace it`, changeFile:'Change file',
    sent:'Assignment submitted', beforeDue:'You can resubmit until the due date', lateNote:'No submissions after the due date',
    fbH:'Feedback', total:'Total', byCrit:'By criterion', overall:'Overall feedback', myAns:'View my answer', fbFrom:'Reviewed by instructor',
    rubric:[['Understanding',6,6,'You explained "validity in assessment design" accurately in your own words.'],['Evidence',9,7,'Good use of the three validity elements from week 3. The second argument has no example, so it stays a claim.'],['Reasoning',9,8,'Problem → analysis → proposal flows well. Tie the three proposals together in the conclusion.'],['Expression',6,6,'Concise sentences and correct terminology.']],
    studyT:'What to study next', studyD:'Model answers where you lost points, and what to try in your next essay.', lostT:'Where you lost points · model answer', modelL:'Model answer', srcs:{1:'week3 slides · p. 18', 2:'week5 slides · p. 7'},
    models:{1:'Pair each argument with a concept and a case from class. e.g. "Construct validity is low (week 3) → the task only asks for a summary, so it cannot measure argument skills (week 5 case)."', 2:'Write claim → evidence → improvement, and close by tying the three improvements into one sentence.'},
    strongT:'Strengths', strong:['Understanding: you explained "validity of an assessment design" accurately in your own words.','Writing: you used terms such as content and construct validity correctly.'],
    improveT:'To improve', improve:[['Evidence: the second argument has no case.','Add one case from the week 5 material'],['Reasoning: the conclusion does not tie the improvements together.','Sum up the three improvements in one closing sentence']],
    planT:'How to study for the next essay', plan:[['Evidence as "concept + case"','For each claim, note one concept and one case from class'],['Validity in a table','Put content, construct and consequential validity in a table: meaning · how to check · example'],['Close by tying it together','Practise ending with one sentence: "So this is what to change."']],
    overallFb:'You identified the question precisely and grounded it in course materials, which is convincing. Add one case from week 5 to the second argument and the essay becomes much stronger. Try that next time.',
  }
};
const d = k => D[lang][k];
const stuScore = (cid, idx) => Math.round((13 + ((8*5 + idx*7) % 8))*1.5);   
let courseId = 'c3', evalIdx = 1, submitted = {}, showAns = false, ansMode = 'orig';
const findCourse = id => allCourses().find(c=>c.id===id);
const evType = e => e.way==='scan' ? 'mid' : /중간|Midterm/.test(e.ko+e.en) ? 'mid' : /기말|Final/.test(e.ko+e.en) ? 'final' : 'hw';
const myState = e => submitted[courseId+'-'+e._i] ? 'sub' : e.st==='todo' ? 'todo' : e.st==='fb' ? 'fb' : 'sub';

function stuHead(c, title){
  const prof = lang==='ko'?c.profKo:c.profEn, sec = lang==='ko'?c.secKo:c.secEn;
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('home');return false">${t('myCourses')}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i>${title ? `<a href="#" onclick="go('course','${c.id}');return false">${cName(c)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${title}</span>` : `<span>${cName(c)}</span>`}</div>
    <h1>${title || cName(c)}</h1><div class="ch-meta"><span>${cName(c)}</span><span>${sec}</span><span>${d('prof')} <b>${prof}</b></span></div></div>`;
}


function renderCourse(){
  const c = findCourse(courseId);
  const rows = c.ev.map((e,i)=>{ e._i=i+1; const ty = evType(e), st = myState(e);
    const stTxt = st==='todo' && e.closed ? `<span class="st muted">${d('st').closed}</span>` : ty!=='hw' && st==='todo' ? `<span class="st muted">${d('st').exam}</span>` : st==='todo' ? `<span class="st">${d('st').todo}</span>` : st==='fb' ? `<span class="st ok">${d('st').fb}</span>` : `<span class="st run">${d('st').sub}</span>`;
    const act = st==='todo' && e.closed ? `<button class="act" onclick="event.stopPropagation(); go('submit','${c.id}',${i+1})">${d('view')}</button>` : st==='todo' && ty==='hw' ? `<button class="act pri" onclick="event.stopPropagation(); go('submit','${c.id}',${i+1})">${d('submit')}<i data-lucide="chevron-right" style="width:16px;height:16px"></i></button>`
      : st==='fb' ? `<button class="act" onclick="event.stopPropagation(); go('feedback','${c.id}',${i+1})">${d('viewFb')}<i data-lucide="chevron-right" style="width:16px;height:16px"></i></button>`
      : st==='sub' && ty==='hw' ? `<button class="act txt" onclick="event.stopPropagation(); go('submit','${c.id}',${i+1})">${d('viewSub')}</button>` : '';
    return `<tr><td class="l"><b>${L(e)}</b></td><td><span class="chip${ty==='hw'?'':' blue'}">${d('type')[ty]}</span></td><td>${e.d||'–'}</td><td>${stTxt}</td><td>${act}</td></tr>`; }).join('');
  return stuHead(c) + (c.ev.length ? `<div class="tbl-wrap"><table class="tbl"><thead><tr><th class="l">${d('thEval')}</th><th>${d('thType')}</th><th>${d('thDue')}</th><th>${d('thMine')}</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>` : `<div class="box" style="text-align:center;color:#6d7381">${d('noEval')}</div>`);
}


let pendingFile = null;
function renderSubmit(){
  const c = findCourse(courseId), e = c.ev[evalIdx-1]; e._i = evalIdx;
  const key = courseId+'-'+evalIdx, done = submitted[key];
  const fileName = lang==='ko' ? `과제2_${T.ko.stuName}.pdf` : `essay2_${T.en.stuName.split(' ')[0]}.pdf`;
  const fileBox = !done && e.closed ? `<div class="sub-closed"><i data-lucide="lock"></i><div><b>${d('closedT')}</b>${d('closedD')(e.d)}</div></div>` : done ? `<div class="sub-done"><i data-lucide="circle-check"></i><div><b>${d('doneT')}</b><small>${d('doneD')(done)}</small></div></div>
      <div class="file"><i data-lucide="file-text"></i><b>${fileName}</b><small>1.2 MB</small><button class="act txt" onclick="submitted['${key}']=null; pendingFile=null; render()">${d('changeFile')}</button></div>`
    : pendingFile ? `<div class="file"><i data-lucide="file-text"></i><b>${pendingFile}</b><small>1.2 MB</small><button class="x" onclick="pendingFile=null; render()"><i data-lucide="x" style="width:16px;height:16px"></i></button></div>`
    : `<div class="drop" onclick="pendingFile='${fileName}'; render()"><i data-lucide="upload"></i><b>${d('drop')}</b>${d('dropD')}</div>`;
  return stuHead(c, L(e)) + `
  <div class="two sub-two" style="grid-template-columns:minmax(0,1fr) 360px">
    <div>
      <div class="box"><p class="box-t">${d('fileT')}</p><p class="box-d">${d('fileD')}</p>${fileBox}
        ${!done && !e.closed ? `<div class="foot-act" style="padding:18px 0 0"><button class="btn-solid" ${pendingFile?'':'disabled'} onclick="doSubmit('${key}')">${d('submit')}</button></div>` : ''}
        ${e.closed ? '' : `<p class="hint" style="font-size:13px;color:#9ea3ad;margin:${done?'14px':'8px'} 0 0">${d('beforeDue')} · ${d('lateNote')}</p>`}</div>
    </div>
    <div>
      <div class="box"><p class="box-t">${d('guideT')}</p><p style="font-size:15px;line-height:1.65;color:#3b3f4c;margin:0 0 14px">${d('guideBody')}</p>
        <div class="ch-meta" style="margin-bottom:14px"><span>${d('dueT')} <b>${e.d} 23:59</b></span></div>
        <div class="files"><div class="file" onclick="toast(d('dlDone')('${lang==='ko'?'문제지.pdf':'questions.pdf'}'))" style="cursor:pointer"><i data-lucide="file-down"></i><b>${d('qSheet')}</b><small>PDF</small></div></div></div>
      <div class="box"><p class="box-t">${d('materials')}</p><div class="files">
        <div class="file" onclick="toast(d('dlDone')(this.innerText.trim()))" style="cursor:pointer"><i data-lucide="file-text"></i><b>${lang==='ko'?'3주차_평가의 타당도.pdf':'week3_validity.pdf'}</b></div>
        <div class="file" onclick="toast(d('dlDone')(this.innerText.trim()))" style="cursor:pointer"><i data-lucide="file-text"></i><b>${lang==='ko'?'5주차_수행평가 사례.pdf':'week5_cases.pdf'}</b></div></div></div>
    </div></div>`;
}
function doSubmit(key){
  const now = new Date(); submitted[key] = `${now.getMonth()+1}.${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  const c = findCourse(courseId), e = c.ev[evalIdx-1]; e.st='sub'; pendingFile=null;
  render(); toast(d('sent'));
}


function renderFeedback(){
  const c = findCourse(courseId), e = c.ev[evalIdx-1];
  
  const total = stuScore(courseId, evalIdx), rest = total - 12;   
  const rub = d('rubric').map((r,k)=>{ const g = k===0 || k===3 ? r[1] : k===1 ? Math.min(r[1], Math.ceil(rest/2)) : rest - Math.min(9, Math.ceil(rest/2)); return [r[0], r[1], g, r[3]]; });
  const got = rub.reduce((a,r)=>a+r[2],0), max = rub.reduce((a,r)=>a+r[1],0);
  return stuHead(c, L(e)) + `
  <div class="score-hero"><div><div class="score-big">${got}<em>/ ${max}</em></div><div class="score-sub">${d('fbFrom')} · ${e.d} · ${lang==='ko'?'성적 반영 20% · 환산':'20% of grade · converted'} <b>${(got/max*20).toFixed(1)} / 20</b></div></div>
    <div style="margin-left:auto"><button class="act${showAns?' pri':''}" onclick="showAns=!showAns; render()"><i data-lucide="file-text" style="width:16px;height:16px"></i>${showAns ? d('hideAns') : d('myAns')}</button></div></div>
  ${showAns ? `<div class="ans" style="margin-bottom:18px">
      <div class="vf-bar"><span class="vf-name">${lang==='ko'?'중간고사_'+T.ko.stuName+'.pdf':'midterm_'+T.en.stuName.split(' ')[0]+'.pdf'}</span>
        <span class="ve-seg"><button class="ve-seg-btn${ansMode==='orig'?' on':''}" onclick="ansMode='orig'; render()"><i data-lucide="file-text"></i>${d('vOrig')}</button><button class="ve-seg-btn${ansMode==='text'?' on':''}" onclick="ansMode='text'; render()"><i data-lucide="square-split-vertical"></i>${d('vText')}</button></span></div>
      <div class="ve-body"><div class="ve-page${ansMode==='orig'?' orig':''}"><span class="num">1 / 1</span><h4>${lang==='ko'?'문항 1. 제시된 수행평가 설계의 타당성을 평가하고 개선안을 제시하시오.':'Q1. Evaluate the validity of the given assessment design and propose improvements.'}</h4>
        <p>${lang==='ko'?'제시된 수행평가는 평가 목표와 과제 유형이 어긋난다는 점에서 타당성이 낮다. 3주차에 다룬 타당도의 세 요소 가운데 내용 타당도는 확보되었으나, 구인 타당도는 과제가 요구하는 능력이 "논증"이 아니라 "요약"에 머물러 있어 확보되지 않는다. …':'The given design has low validity because the assessment goal and the task type do not match. Content validity is secured, but construct validity is not, since the task asks for a summary rather than an argument. …'}</p></div></div></div>` : ''}
  <div class="two" style="grid-template-columns:minmax(0,1fr) 380px">
    <div class="box"><p class="box-t">${d('byCrit')}</p><div style="margin-top:8px">
      ${rub.map(r=>`<div class="fb-item"><div class="fb-item-hd"><b>${r[0]}</b><span class="pts">${r[2]}<em> / ${r[1]}</em></span></div><p>${r[3]}</p></div>`).join('')}</div></div>
    <div class="box"><p class="box-t">${d('overall')}</p><p class="fb-total">${d('overallFb')}</p></div>
  </div>
  <div class="box study"><p class="box-t">${d('studyT')}</p><p class="box-d">${d('studyD')}</p>
    ${rub.some(r=>r[2]<r[1]) ? `<p class="st-h">${d('lostT')}</p>${rub.map((r,k)=>r[2]<r[1] ? `<div class="st-lost"><div class="st-lost-hd"><b>${r[0]}</b><span class="pts">${r[2]}<em> / ${r[1]}</em></span></div><p><span class="st-tag">${d('modelL')}</span>${(d('models')||{})[k]||''}${(d('srcs')||{})[k] ? ` <span class="src-tag"><i data-lucide="book-open"></i>${d('srcs')[k]}</span>` : ''}</p></div>` : '').join('')}` : ''}
    <div class="st-two"><div><p class="st-h">${d('strongT')}</p><ul class="st-list">${d('strong').map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div><p class="st-h">${d('improveT')}</p><ul class="st-list">${d('improve').map(x=>`<li>${x[0]}<span class="st-next">→ ${x[1]}</span></li>`).join('')}</ul></div></div>
    <p class="st-h">${d('planT')}</p><div class="st-plan">${d('plan').map((x,i)=>`<div><b><span class="st-n">${i+1}</span>${x[0]}</b><span>→ ${x[1]}</span></div>`).join('')}</div>
  </div>`;
}


const DETAIL = ['course','submit','feedback'];
const _go = go;
go = function(v, cid, idx){
  if (DETAIL.includes(v)){
    if (v!==view || cid!==courseId || +idx!==evalIdx) showAns = false;
    view = v; if (cid) courseId = cid; if (idx) evalIdx = +idx;
    location.hash = (v==='course' ? `course-${courseId}` : `${v}-${courseId}-${evalIdx}`) + (lang==='en'?'-en':'');
    render(); window.scrollTo(0,0); return;
  }
  _go(v);
};
const _render = render;
render = function(){
  const detail = DETAIL.includes(view), keep = view;
  if (detail) view = 'home';      
  _render(); view = keep;
  const page = document.querySelector('#v-home .page');
  page.querySelector('.u-top').style.display = detail ? 'none' : '';
  page.querySelector('.cols').style.display = detail ? 'none' : '';
  const el = document.getElementById('v-detail');
  el.classList.toggle('on', detail);
  if (detail) el.innerHTML = view==='course' ? renderCourse() : view==='submit' ? renderSubmit() : renderFeedback();
  
  const cur = allCourses().filter(c=>c.sem==='s2');
  document.querySelectorAll('#sbCourses .sc').forEach((n,i)=>{ const c = cur[i]; if (!c) return; n.setAttribute('onclick', `go('course','${c.id}')`); n.classList.toggle('on', detail && courseId===c.id); });
  document.querySelectorAll('#nav .si').forEach((n,i)=>{ if (i===0){ n.setAttribute('onclick', "go('home')"); n.classList.toggle('active', !detail); } });
  document.querySelectorAll('.sc-card').forEach(n=>{ const c = allCourses().find(x=>cName(x)===n.getAttribute('title')); if (c) n.setAttribute('onclick', `go('course','${c.id}')`); });
  if (!detail && view==='home'){
    
    const todo = []; cur.forEach(c=>c.ev.forEach((e,i)=>{ if (e.st==='todo' && !e.closed && e.way!=='scan') todo.push({c,i,k:'submit'}); })); todo.sort((a,b)=>a.c.ev[a.i].d.localeCompare(b.c.ev[b.i].d));
    cur.forEach(c=>c.ev.forEach((e,i)=>{ if (e.fresh) todo.push({c,i,k:'feedback'}); }));
    document.querySelectorAll('#todoGrid .go').forEach((b,j)=>{ const x = todo[j]; if (x) b.setAttribute('onclick', `go('${x.k}','${x.c.id}',${x.i+1})`); });
  }
  lucide.createIcons();
};
{ const h = location.hash.replace('#','').replace('-en',''); let m;
  if ((m = h.match(/^(submit|feedback)-(c\d)-(\d+)$/))) { view=m[1]; courseId=m[2]; evalIdx=+m[3]; }
  else if ((m = h.match(/^course-(c\d)$/))) { view='course'; courseId=m[1]; }
  render(); }
