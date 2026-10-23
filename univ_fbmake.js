
const FM = {
  ko:{ bnMake:'점수를 확정했어요. 학생에게 보낼 피드백을 만들어요. 한 명을 먼저 보고 형식을 정한 뒤 전원을 만들어요.', bnMakeGo:'피드백 만들기',
    bnMade:n=>`피드백 ${n}명분을 만들었어요. 공개하면 학생에게 점수와 피드백이 보여요.`, bnMadeGo:'피드백 보기',
    h:'피드백 만들기', sub:'한 명을 먼저 보고 형식을 정하면, 모든 학생이 같은 짜임으로 점수 이유와 다음 공부 방법을 받아요. 만든 뒤에도 학생별 채점에서 고칠 수 있어요.',
    incT:'넣을 것', inc:[['crit','이번 점수 설명','문항 · 채점 기준별 점수와 설명'],['overall','종합 의견',''],['model','감점된 곳의 모범답안','감점 사유 대신 정답을 보여 줘요'],['strong','잘한 점 · 보완할 점','보완할 점마다 다음에 해 볼 한 줄'],['plan','공부 방법','아래 목표에 맞춰 써요']],
    goalL:'학생들의 다음 목표', goalPh:'예) 교원 임용 시험 대비', goalD:'공부 방법을 이 목표에 맞춰 써요.', notT:'넣지 않는 것', not:'반 평균 · 순위 · 「AI」 같은 채점 과정 말',
    who:'미리 볼 학생', prevT:'미리 보기', pg:'A4 2쪽 · 학생 화면에도 같은 내용',
    make:n=>`이 형식으로 ${n}명 만들기`, run:n=>`피드백 ${n}명분을 만들고 있어요`, made:n=>`${n}명분을 만들었어요`,
    pdfEach:n=>`학생별 PDF 내려받기 (${n}개)`, pdfAll:'전원 합본 PDF', pdfDone:'PDF를 내려받았어요', release:n=>`공개하기 · ${n}명`, back:'평가로 돌아가기',
    total:'총점', conv:w=>`성적 반영 ${w}%`, critT:'이번 점수 설명', lostT:'감점된 곳과 모범답안', modelL:'모범답안', strongT:'잘한 점', improveT:'보완할 점', planT:(g)=>`공부 방법${g ? ` · ${g}` : ''}`,
    crit:[['문항 1 · 타당도 세 요소',10,'내용 · 구인 타당도는 정확히 설명했어요. 결과 타당도는 뜻만 썼어요.'],['문항 2 · 설계의 문제점',10,'두 문제점을 수업 자료의 개념으로 짚었어요.'],['문항 3 · 개선안과 근거',10,'개선안은 분명하지만 근거가 한 줄이에요.']],
    overall:'개념을 정확히 이해하고 있어요. 개선안의 근거를 수업 자료의 사례와 함께 쓰면 글이 더 단단해져요.',
    models:['내용 타당도는 문항이 가르친 내용 전체를 고르게 대표하는 정도, 구인 타당도는 재려는 능력을 실제로 재는 정도, 결과 타당도는 평가가 학습과 수업에 미치는 영향이 의도에 맞는 정도예요.','','문항을 두 개로 나누고 각 문항에 배점과 모범답안을 둬요. 근거: 내용 타당도(목표를 고르게 담음)와 채점 신뢰도(채점자 간 차이 감소)를 함께 높여요.'],
    strong:['문항 2: 두 문제점을 「목표와 과제 유형 불일치」 · 「결과만 보는 채점기준」으로 정확히 짚었어요.','용어(내용 · 구인 타당도)를 바르게 썼어요.'],
    improve:[['문항 1: 결과 타당도를 용어 없이 뜻만 썼어요.','세 요소의 이름을 먼저 쓰고 뜻을 붙이기'],['문항 3: 근거가 한 줄이에요.','근거마다 수업 자료의 개념 하나 + 사례 하나 짝짓기']],
    plan:[['타당도 세 요소를 표로','「이름 · 뜻 · 확인 방법 · 예」 네 칸으로 정리하기'],['근거는 「개념 + 사례」','주장마다 수업 자료의 개념과 사례를 한 쌍으로 메모하기'],['기출 형태로 연습','사례를 주고 문제점 · 개선안을 쓰는 형태를 시간 재고 써 보기']] },
  en:{ bnMake:'Scores confirmed. Make the feedback for students: preview one, set the format, then make it for everyone.', bnMakeGo:'Make feedback',
    bnMade:n=>`Feedback made for ${n}. Release to show scores and feedback to students.`, bnMadeGo:'View feedback',
    h:'Make feedback', sub:'Set the format on one student and everyone gets the reasons for their score and how to study next in the same shape. You can still edit each one in student grading.',
    incT:'Include', inc:[['crit','This score explained','Points and notes per question and criterion'],['overall','Overall comment',''],['model','Model answers where points were lost','Shows the correct answer instead of the deduction reason'],['strong','Strengths · to improve','A next step for each point to improve'],['plan','How to study','Written for the goal below']],
    goalL:'Students\' next goal', goalPh:'e.g. Teacher certification exam', goalD:'Study tips are written for this goal.', notT:'Never included', not:'Class average · rank · process words such as "AI"',
    who:'Preview student', prevT:'Preview', pg:'2 A4 pages · same content on the student screen',
    make:n=>`Make for ${n} in this format`, run:n=>`Making feedback for ${n}`, made:n=>`Made for ${n}`,
    pdfEach:n=>`Download PDFs per student (${n})`, pdfAll:'Combined PDF', pdfDone:'PDF downloaded', release:n=>`Release · ${n}`, back:'Back to evaluation',
    total:'Total', conv:w=>`${w}% of grade`, critT:'This score explained', lostT:'Where points were lost · model answer', modelL:'Model answer', strongT:'Strengths', improveT:'To improve', planT:(g)=>`How to study${g ? ` · ${g}` : ''}`,
    crit:[['Q1 · Three elements of validity',10,'Content and construct validity explained accurately. Consequential validity only by meaning.'],['Q2 · Problems in the design',10,'Both problems identified with course concepts.'],['Q3 · Improvement and rationale',10,'Clear improvement, but the rationale is one line.']],
    overall:'You understand the concepts well. Back the improvement with a case from class to make it stronger.',
    models:['Content validity: how evenly items represent what was taught. Construct validity: whether it measures the intended ability. Consequential validity: whether its effects on learning match the intent.','','Split into two items, each with points and a model answer. Rationale: raises content validity and scoring reliability together.'],
    strong:['Q2: named both problems precisely.','Used the terms content and construct validity correctly.'],
    improve:[['Q1: consequential validity only by meaning.','Write each element\'s name first, then its meaning'],['Q3: the rationale is one line.','Pair each reason with one concept and one case from class']],
    plan:[['Validity in a table','Four columns: name · meaning · how to check · example'],['Evidence as concept + case','Note one concept and one case per claim'],['Practise the exam format','Timed writing: given a case, write problems and improvements']] }
};
const fm = k => FM[lang][k];


const _fbF = flowBanner;
flowBanner = function(c, e){
  const band = (ic, txt, btns) => `<div class="fl-band"><span class="fl-band-ic"><i data-lucide="${ic}"></i></span><p>${txt}</p><span class="fl-band-b">${btns}</span></div>`;
  if (e.flow==='final' && !e.fbDone) return band('file-text', fm('bnMake'), `<button class="act pri" onclick="go('fbmake','${c.id}',${e.id})">${fm('bnMakeGo')}</button>`);
  if (e.flow==='final' && e.fbDone && e.relN < e.rev) return band('file-check-2', fm('bnMade')(e.rev), `<button class="act" onclick="go('fbmake','${c.id}',${e.id})">${fm('bnMadeGo')}</button>`);
  if (e.flow==='final' && e.fbDone) return '';
  return _fbF(c, e);
};


function renderFbMake(){
  const c = cById(rosterId), e = evById(c.id, evalId), stu = rosterOf(c.id), l = subOf(c.id, evalId);
  const F = e.fb || (e.fb = {inc:{crit:true, overall:true, model:true, strong:true, plan:true}, goal:lang==='ko'?'교원 임용 시험 대비':'Teacher certification exam', sel:0, gen:e.fbDone?'done':'idle'});
  const subs = l.map((s,i)=>({s, i})).filter(x=>x.s.at), n = subs.length, pick = subs[Math.min(F.sel, subs.length-1)] || subs[0];
  const sc = pick ? (pick.s.fscore ?? pick.s.pscore ?? pick.s.score) : 0, w = e.weight || 20;
  const parts = [ sc >= 27 ? 9 : 8, sc >= 25 ? 10 : 9 ]; const third = Math.max(0, sc - parts[0] - parts[1]); const qsc = [parts[0], parts[1], Math.min(10, third)];
  const crit = fm('crit').map((r,k)=>[r[0], r[1], qsc[k], r[2]]);
  const nm = s => lang==='ko'?s.ko:s.en;
  const prev = `<div class="fm-page">
      <div class="fm-top"><span>${cName(c)} · ${evName(e)}</span><span>${pick ? `${nm(pick.s)} (${pick.s.sid})` : ''}</span></div>
      <div class="fm-score"><div><small>${fm('total')}</small><b>${sc}<em> / 30</em></b></div><div><small>${fm('conv')(w)}</small><b>${(sc/30*w).toFixed(1)}<em> / ${w}</em></b></div></div>
      ${F.inc.crit ? `<p class="fm-h">${fm('critT')}</p>${crit.map(r=>`<div class="fm-row"><b>${r[0]}</b><span class="fm-pt">${r[2]} / ${r[1]}</span><p>${r[3]}</p></div>`).join('')}` : ''}
      ${F.inc.overall ? `<p class="fm-note">${fm('overall')}</p>` : ''}
      ${F.inc.model ? `<p class="fm-h">${fm('lostT')}</p>${crit.map((r,k)=> r[2]<r[1] && fm('models')[k] ? `<div class="fm-row"><b>${r[0]}</b><span class="fm-pt">${r[2]} / ${r[1]}</span><p><span class="st-tag">${fm('modelL')}</span>${fm('models')[k]}</p></div>` : '').join('')}` : ''}
      ${F.inc.strong ? `<div class="fm-two"><div><p class="fm-h">${fm('strongT')}</p><ul>${fm('strong').map(x=>`<li>${x}</li>`).join('')}</ul></div><div><p class="fm-h">${fm('improveT')}</p><ul>${fm('improve').map(x=>`<li>${x[0]}<span class="st-next">→ ${x[1]}</span></li>`).join('')}</ul></div></div>` : ''}
      ${F.inc.plan ? `<p class="fm-h">${fm('planT')(F.goal)}</p>${fm('plan').map((x,i)=>`<div class="fm-plan"><b>${i+1}. ${x[0]}</b><span>→ ${x[1]}</span></div>`).join('')}` : ''}
    </div>`;
  const left = `<div class="box"><p class="box-t" style="font-size:16px">${fm('incT')}</p>
      ${fm('inc').map(([k,t,dsc])=>`<label class="fm-chk"><input type="checkbox" ${F.inc[k]?'checked':''} ${F.gen==='done'?'disabled':''} onchange="evById(rosterId, evalId).fb.inc.${k}=this.checked; render()"><span><b>${t}</b>${dsc?`<small>${dsc}</small>`:''}</span></label>`).join('')}
      <div class="fl" style="margin:14px 0 0"><label>${fm('goalL')}</label><input class="inp" style="height:44px" placeholder="${fm('goalPh')}" value="${F.goal}" ${F.gen==='done'?'disabled':''} oninput="evById(rosterId, evalId).fb.goal=this.value" onchange="render()"><p class="hint" style="font-size:13px;color:#9ea3ad;margin:6px 0 0">${fm('goalD')}</p></div>
      <p class="fm-not"><b>${fm('notT')}</b> ${fm('not')}</p></div>
    <div class="box"><p class="box-t" style="font-size:16px">${fm('who')}</p><select class="sel" style="width:100%" onchange="evById(rosterId, evalId).fb.sel=+this.value; render()">${subs.map((x,j)=>`<option value="${j}" ${j===F.sel?'selected':''}>${x.s.sid} ${nm(x.s)}</option>`).join('')}</select></div>`;
  const foot = F.gen==='run' ? `<span class="fl-allset"><span class="spin" style="display:inline-block;width:14px;height:14px;vertical-align:-2px;margin-right:6px"></span>${fm('run')(n)}</span>`
    : F.gen==='done' ? `<span class="fl-allset">${fm('made')(n)}</span><button class="act" onclick="toast(fm('pdfDone'))"><i data-lucide="download" style="width:15px;height:15px"></i>${fm('pdfEach')(n)}</button><button class="act" onclick="toast(fm('pdfDone'))"><i data-lucide="files" style="width:15px;height:15px"></i>${fm('pdfAll')}</button>${e.relN < e.rev ? `<button class="btn-solid" onclick="go('eval', rosterId, evalId); release()">${fm('release')(e.rev - e.relN)}</button>` : ''}`
    : `<span></span><button class="btn-sec" onclick="go('eval','${c.id}',${e.id})">${fm('back')}</button><button class="btn-solid" onclick="fmMake()"><i data-lucide="sparkles" style="width:16px;height:16px"></i>${fm('make')(n)}</button>`;
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('eval','${c.id}',${e.id});return false">${evName(e)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${fm('h')}</span></div>
      <h1>${fm('h')}</h1><p class="page-sub" style="margin-bottom:0">${fm('sub')}</p></div>
    <div class="two fm-two"><div class="fm-left"><div class="fm-prev-h"><b>${lang==='ko'?'피드백 형식':'Format'}</b></div>${left}</div>
      <div><div class="fm-prev-h"><b>${fm('prevT')}</b><span class="st muted">${fm('pg')}</span></div>${prev}</div></div>
    <div class="fl-act">${foot}</div>`;
}
function fmMake(){ const e = evById(rosterId, evalId); e.fb.gen = 'run'; render(); setTimeout(()=>{ e.fb.gen = 'done'; e.fbDone = true; if (view==='fbmake') render(); }, 1600); }


DETAIL.push('fbmake');
const _goF2 = go;
go = function(v, cid, eid, sid){
  if (v==='fbmake'){ if (cid) rosterId = cid; if (eid) evalId = +eid; view = 'fbmake'; location.hash = `fb-${rosterId}-${evalId}`; render(); window.scrollTo(0,0); return; }
  _goF2(v, cid, eid, sid);
};
{ const m = location.hash.match(/^#fb-(c\d+)-(\d+)/); if (m){ view = 'fbmake'; rosterId = m[1]; evalId = +m[2];
    const e = evById(rosterId, evalId), l = subOf(rosterId, evalId);
    if (e && e.flow!=='final'){  l.forEach(s=>{ if (s.at){ s.pre=false; s.rev=true; } }); e.scored = e.sub; e.rev = e.sub; e.flow = 'final'; }
    render(); } }
