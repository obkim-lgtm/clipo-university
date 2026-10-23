
const XD = {
  ko:{
    bnProf:'AI 채점이 끝났어요. 교수님도 AI 점수와 따로 채점해 두면, 다 끝난 뒤 두 점수를 맞대 봐요.', bnProfGo:'학생별 채점 열기', bnProfDone:'교수 채점 마침', skip:'교차 검토 없이 확인하기',
    bnProfRun:(a,b)=>`교수님 채점 ${a} / ${b}명. 매긴 학생부터 AI 점수와 맞대 볼 수 있어요.`,
    bnCross:n=>`AI 점수와 교수님 점수를 맞대 봤어요. 같은 경우인데 점수가 다른 답 ${n}건을 확인해 주세요.`, bnCrossGo:'교차 검토',
    bnConfirm:n=>`교차 검토에서 ${n}건을 고쳤어요. 확정하면 원본 점수는 그대로 두고 확정본을 따로 만들어요.`, bnConfirmGo:'확정하기',
    bnFinal:'점수를 확정했어요. 학생에게 공개하면 점수와 피드백이 보여요.', seeFinal:'채점 확정 기준',
    colProf:'교수', colAi:'AI',
    xH:'교차 검토', xSub:'AI 점수와 교수님 점수를 문항별로 맞대 봤어요. 차이를 다 보여 주지 않고, 같은 경우인데 점수가 다른 답만 골랐어요. 승인한 것만 반영하고 내역을 남겨요.',
    agreeT:'문항별로 두 점수가 같은 학생', agree:(a,b)=>`${a} / ${b}명`, gapNote:'교수님 점수가 평균 0.4점 높아요.',
    findT:'교수님 점수에서 찾은 기준', findD:'채점 규칙에 없지만 교수님 점수에 일관되게 드러난 기준이에요. 더하면 채점 확정 기준에 들어가요.',
    finds:[[3,'근거는 한 개에 2점씩, 최대 4점이에요.','34명 중 33명이 이 단위로 매겨졌어요.'],[1,'용어만 쓰고 설명이 없으면 1점이에요(채점 가이드의 「절반」보다 낮게).','해당 7명 모두 1점이었어요.']],
    addRule:'채점 규칙에 더하기', added:'더했어요',
    caseT:'같은 경우인데 점수가 다른 답', caseD:'아래 두 학생은 같은 경우로 보여요. 맞출 점수를 고르거나 그대로 두세요.',
    same:'같은 경우', suggest:'제안', fix:(nm,a,b)=>`${nm} ${a}점 → ${b}점으로 맞추기`, keep:'둘 다 그대로', fixed:'맞췄어요', kept:'그대로 둠',
    logT:'수정 내역', logEmpty:'아직 고친 것이 없어요.', logRow:(q,nm,a,b)=>`문항 ${q} · ${nm} ${a}점 → ${b}점`,
    left:n=>`확인할 답 ${n}건이 남았어요`, allSet:'모두 확인했어요', toConfirm:'확정하러 가기',
    fH:'점수 확정', fSub:'확정한 점수와 기준이 학생 피드백과 성적의 근거가 돼요. AI · 교수님 원본 점수는 따로 그대로 남아요.',
    sumT:'확정 요약', sumStu:n=>`학생 ${n}명`, sumFix:n=>`교차 검토 수정 ${n}건`, sumRule:n=>`채점 확정 기준 ${n}개`, sumKeep:'원본 점수 보존',
    stdT:'채점 확정 기준', stdD:'채점 전 결정과 채점하며 정한 규칙, 교차 검토로 더한 기준을 한데 모았어요. 해설 개정본으로 내려받아 학생 질문에 답할 때 써요.',
    stdPre:'채점 전 결정', stdRules:'채점하며 정한 규칙', stdCross:'교차 검토로 더한 기준', dl:'해설 개정본 내려받기', dlDone:'채점 확정 기준을 내려받았어요',
    confirm:'점수 확정하기', confirmed:'점수를 확정했어요', back:'평가로 돌아가기', q:n=>`문항 ${n}`
  },
  en:{
    bnProf:'AI scoring is done. Score separately from AI too, and compare the two when you finish.', bnProfGo:'Open student grading', bnProfDone:'Finish my scoring', skip:'Review without cross-check',
    bnProfRun:(a,b)=>`Your scoring ${a} / ${b}. You can compare from the students you have scored.`,
    bnCross:n=>`AI and your scores were compared. Check ${n} cases scored differently for the same kind of answer.`, bnCrossGo:'Cross-check',
    bnConfirm:n=>`${n} fixes from the cross-check. Confirming keeps the original scores and makes a final copy.`, bnConfirmGo:'Confirm',
    bnFinal:'Scores confirmed. Release to show scores and feedback to students.', seeFinal:'Final scoring standard',
    colProf:'You', colAi:'AI',
    xH:'Cross-check', xSub:'AI and your scores were compared per question. Only same-kind answers with different scores are shown. Only what you approve is applied, with a log.',
    agreeT:'Students with matching scores per question', agree:(a,b)=>`${a} / ${b}`, gapNote:'Your scores are 0.4 points higher on average.',
    findT:'Standards found in your scores', findD:'Not in the rules, but consistent in your scoring. Add them to include in the final standard.',
    finds:[[3,'Evidence gets 2 points each, up to 4.','33 of 34 were scored this way.'],[1,'Term only, no explanation: 1 point (lower than the guide\'s "half").','All 7 such answers got 1.']],
    addRule:'Add to rules', added:'Added',
    caseT:'Same kind of answer, different score', caseD:'These two look like the same case. Pick the score to align, or keep both.',
    same:'Same case', suggest:'Suggested', fix:(nm,a,b)=>`Change ${nm} ${a} → ${b}`, keep:'Keep both', fixed:'Aligned', kept:'Kept',
    logT:'Change log', logEmpty:'Nothing changed yet.', logRow:(q,nm,a,b)=>`Q${q} · ${nm} ${a} → ${b}`,
    left:n=>`${n} cases left`, allSet:'All checked', toConfirm:'Go to confirm',
    fH:'Confirm scores', fSub:'Confirmed scores and criteria become the basis for feedback and grades. The original AI and instructor scores stay as they are.',
    sumT:'Summary', sumStu:n=>`${n} students`, sumFix:n=>`${n} cross-check fixes`, sumRule:n=>`${n} standards`, sumKeep:'Originals kept',
    stdT:'Final scoring standard', stdD:'Decisions before scoring, rules set while scoring and standards from the cross-check, in one place. Download as a revised key to answer student questions.',
    stdPre:'Decisions before scoring', stdRules:'Rules set while scoring', stdCross:'Added from cross-check', dl:'Download revised key', dlDone:'Downloaded the final standard',
    confirm:'Confirm scores', confirmed:'Scores confirmed', back:'Back to evaluation', q:n=>`Q${n}`
  }
};
const xd = k => XD[lang][k];

const XCASES = [
  {q:1, kind:'「구성 타당도」라고 쓴 답', a:[9,3,'구성 타당도는 재려는 능력을 제대로 재는지 본다.'], b:[10,0,'구성 타당도: 측정하려는 능력을 실제로 측정하는 정도.'], to:'b', score:3, why:'채점 규칙 1 「구성 타당도는 구인 타당도와 같은 말로 인정」'},
  {q:1, kind:'결과 타당도를 용어 없이 뜻만 쓴 답', a:[11,3,'평가가 학생의 공부 방식에 주는 영향까지 봐야 한다.'], b:[12,2,'시험이 수업과 학습에 어떤 영향을 미치는지도 따진다.'], to:'b', score:3, why:'채점 규칙 2 「용어 없이 뜻만 정확히 써도 만점」'},
  {q:2, kind:'같은 문제점을 원인 · 결과로 나눠 쓴 답', a:[13,10,'1) 기준이 잘함·보통뿐 2) 그래서 채점자마다 다름'], b:[15,5,'기준이 두 단계뿐이라 채점자마다 다르게 읽힌다.'], to:'a', score:5, why:'채점 규칙 5 「원인과 결과로 나눠 쓴 같은 문제점은 하나로 셈」'},
  {q:3, kind:'근거 1개 + 사례를 든 답', a:[16,4,'구인 타당도(3주차)가 낮다. 5주차 사례처럼 요약만 요구한다.'], b:[17,3,'구인 타당도가 낮다(3주차). 예: 5주차 사례 A.'], to:'b', score:4, why:'교수님 점수에서 찾은 기준 「근거 한 개에 2점」 + 사례 2점'},
  {q:3, kind:'개선안을 표로만 쓴 답', a:[18,0,'(표) 1문항 → 2문항 / 잘함·보통 → 점수 항목'], b:[19,2,'(표) 개선 전 → 개선 후, 근거 칸 비어 있음'], to:'b', score:0, why:'채점 규칙 6 「표로만 쓰고 근거 문장이 없으면 근거 0점」'},
  {q:2, kind:'범위 밖(신뢰도) 문제점을 든 답', a:[20,5,'채점자가 바뀌면 점수가 달라져 신뢰도가 낮다.'], b:[21,0,'채점자 간 일치도가 낮을 것이다.'], to:'b', score:5, why:'채점 규칙 3 「범위 밖 내용이라도 맞으면 인정」'},
];


function scoreCell(e, s){
  if (!e.flow || ['pilot','ready','more','done'].includes(e.flow) || s.pscore===undefined) return `<b>${s.score}</b><span class="st muted"> / 30</span>`;
  const shown = s.fscore ?? s.pscore;
  return `<b>${shown}</b><span class="st muted"> / 30</span> <span class="sc-two">${xd('colProf')} ${s.pscore}${s.fscore!==undefined && s.fscore!==s.pscore ? ` → ${s.fscore}` : ''} · ${xd('colAi')} ${s.score}</span>`;
}
function xProfFill(){ const e = evById(rosterId, evalId), l = subOf(rosterId, evalId);
  l.forEach((s,i)=>{ if (s.at) s.pscore = Math.max(0, Math.min(30, s.score + [0,1,0,-1,0,2,0,0,1,-1][i%10])); });
  e.flow = 'cross'; e.xcases = XCASES.map(x=>({...x})); e.xfinds = XD.ko.finds.map(()=>false); e.xlog = []; render(); }


const _fbX = flowBanner;
flowBanner = function(c, e){
  const band = (ic, txt, btns) => `<div class="fl-band"><span class="fl-band-ic"><i data-lucide="${ic}"></i></span><p>${txt}</p><span class="fl-band-b">${btns}</span></div>`;
  if (e.flow==='done') return band('user-check', xd('bnProf'), `<button class="act txt" onclick="xSkip()">${xd('skip')}</button><button class="act" onclick="go('grade','${c.id}',${e.id},'${(subOf(c.id,e.id).find(s=>s.at)||{}).sid}')">${xd('bnProfGo')}</button><button class="act pri" onclick="xProfFill()">${xd('bnProfDone')}</button>`);
  if (e.flow==='cross'){ const open = (e.xcases||[]).filter(x=>!x.done).length; return band('git-compare-arrows', xd('bnCross')(open), `<button class="act pri" onclick="go('cross','${c.id}',${e.id})">${xd('bnCrossGo')}</button>`); }
  if (e.flow==='confirm') return band('stamp', xd('bnConfirm')((e.xlog||[]).length), `<button class="act" onclick="go('cross','${c.id}',${e.id})">${xd('bnCrossGo')}</button><button class="act pri" onclick="go('final','${c.id}',${e.id})">${xd('bnConfirmGo')}</button>`);
  if (e.flow==='final') return band('check-circle-2', xd('bnFinal'), `<button class="act" onclick="go('final','${c.id}',${e.id})">${xd('seeFinal')}</button>`);
  return _fbX(c, e);
};
function xSkip(){ const e = evById(rosterId, evalId); e.flow = 'final'; render(); }


function renderCross(){
  const c = cById(rosterId), e = evById(c.id, evalId), stu = rosterOf(c.id), l = subOf(c.id, evalId);
  if (!e.xcases) xProfFill();
  const nm = i => { const s = stu[i]; return s ? (lang==='ko'?s.ko:s.en) : ''; };
  const n = l.filter(s=>s.at).length, agree = [Math.round(n*0.86), Math.round(n*0.74), Math.round(n*0.64)];
  const open = e.xcases.filter(x=>!x.done).length;
  const caseCard = (x,k) => { const tgt = x.to==='a' ? x.a : x.b, other = x.to==='a' ? x.b : x.a;
    return `<div class="rl-card${x.done?' done':''}"><div class="rl-hd"><b>${xd('q')(x.q)} · ${x.kind}</b>${x.done ? `<span class="chip ${x.done==='fix'?'green':''}">${x.done==='fix'?xd('fixed'):xd('kept')}</span>` : ''}</div>
      <div class="xc-pair">${[x.a,x.b].map(([i,sc,ans])=>`<div class="xc-side"><div class="xc-who"><b>${stu[i]?.sid||''} ${nm(i)}</b><span class="xc-sc">${sc}${lang==='ko'?'점':''}</span></div><p class="hw">${ans}</p></div>`).join('')}</div>
      <p class="xc-why"><i data-lucide="lightbulb"></i><span><b>${xd('suggest')}</b> ${x.why}</span></p>
      ${x.done ? '' : `<div class="fl-band-b" style="justify-content:flex-end"><button class="act" onclick="xDecide(${k},'keep')">${xd('keep')}</button><button class="act pri" onclick="xDecide(${k},'fix')">${xd('fix')(nm(tgt[0]), tgt[1], x.score)}</button></div>`}</div>`; };
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('eval','${c.id}',${e.id});return false">${evName(e)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${xd('xH')}</span></div>
      <h1>${xd('xH')}</h1><p class="page-sub" style="margin-bottom:0">${xd('xSub')}</p></div>
    <div class="stats">${agree.map((a,k)=>`<div class="stat"><small>${xd('q')(k+1)} · ${xd('agreeT')}</small><b>${a}<em>/ ${n}</em></b></div>`).join('')}</div>
    <p class="sec-desc">${xd('gapNote')}</p>
    <div class="two rl-two">
      <div><p class="sem-title" style="margin:0 0 4px">${xd('caseT')}</p><p class="sec-desc">${xd('caseD')}</p>${e.xcases.map(caseCard).join('')}</div>
      <div class="rl-side">
        <div class="box"><p class="box-t" style="font-size:16px">${xd('findT')}</p><p class="box-d">${xd('findD')}</p>
          ${xd('finds').map((f,k)=>`<div class="xf-row"><p><span class="chip">${xd('q')(f[0])}</span>${f[1]}</p><small>${f[2]}</small>${e.xfinds[k] ? `<span class="st ok">${xd('added')}</span>` : `<button class="act txt" onclick="evById(rosterId, evalId).xfinds[${k}]=true; render()">${xd('addRule')}</button>`}</div>`).join('')}</div>
        <div class="box"><p class="box-t" style="font-size:16px">${xd('logT')} <span class="st muted" style="font-weight:400">${e.xlog.length}</span></p>
          ${e.xlog.length ? `<ol class="rl-rules">${e.xlog.map(r=>`<li>${r}</li>`).join('')}</ol>` : `<p class="box-d" style="margin:0">${xd('logEmpty')}</p>`}</div>
      </div>
    </div>
    <div class="fl-act"><span class="${open?'fl-left':'fl-allset'}">${open ? xd('left')(open) : xd('allSet')}</span>
      <button class="btn-sec" onclick="go('eval','${c.id}',${e.id})">${xd('back')}</button><button class="btn-solid" ${open?'disabled':''} onclick="evById(rosterId, evalId).flow='confirm'; go('final', rosterId, evalId)">${xd('toConfirm')}</button></div>`;
}
function xDecide(k, how){
  const e = evById(rosterId, evalId), x = e.xcases[k], stu = rosterOf(rosterId), l = subOf(rosterId, evalId);
  x.done = how;
  if (how==='fix'){ const tgt = x.to==='a' ? x.a : x.b, s = l[tgt[0]], nm = lang==='ko'?stu[tgt[0]].ko:stu[tgt[0]].en;
    if (s){ s.fscore = Math.max(0, (s.pscore ?? s.score) + (x.score - tgt[1])); }
    e.xlog.push(xd('logRow')(x.q, nm, tgt[1], x.score)); }
  render();
}


function renderFinal(){
  const c = cById(rosterId), e = evById(c.id, evalId), l = subOf(c.id, evalId);
  if (!e.xlog) { e.xlog = []; e.xfinds = []; }
  const P = e.pre || nf.pre || {var:'ask', part:'yes', out:'ask', abs:'zero'};
  const pre = rd('pre').map(([k,lbl,opts])=>`<li><span>${lbl}</span><b>${(opts.find(o=>o[0]===P[k])||opts[0])[1]}</b></li>`).join('');
  const rules = (e.rules||[]), cross = xd('finds').filter((f,k)=>e.xfinds[k]);
  const total = 4 + rules.length + cross.length, done = e.flow==='final';
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('eval','${c.id}',${e.id});return false">${evName(e)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${xd('fH')}</span></div>
      <h1>${xd('fH')}</h1><p class="page-sub" style="margin-bottom:0">${xd('fSub')}</p></div>
    <div class="stats"><div class="stat"><small>${xd('sumT')}</small><b>${xd('sumStu')(l.filter(s=>s.at).length)}</b></div><div class="stat"><small>&nbsp;</small><b>${xd('sumFix')(e.xlog.length)}</b></div><div class="stat"><small>&nbsp;</small><b>${xd('sumRule')(total)}</b></div><div class="stat hi"><small>&nbsp;</small><b>${xd('sumKeep')}</b></div></div>
    <div class="box"><div class="ch-row" style="align-items:flex-start"><div><p class="box-t">${xd('stdT')}</p><p class="box-d" style="margin:0">${xd('stdD')}</p></div><button class="act" onclick="toast(xd('dlDone'))"><i data-lucide="download" style="width:15px;height:15px"></i>${xd('dl')}</button></div>
      <div class="xs-grid">
        <div><p class="st-h">${xd('stdPre')}</p><ul class="rl-pre">${pre}</ul></div>
        <div><p class="st-h">${xd('stdRules')}</p>${rules.length ? `<ol class="rl-rules">${rules.map(r=>`<li><span class="chip">${xd('q')(r.q)}</span>${r.t}</li>`).join('')}</ol>` : '<p class="box-d">–</p>'}
          ${cross.length ? `<p class="st-h">${xd('stdCross')}</p><ol class="rl-rules">${cross.map(f=>`<li><span class="chip">${xd('q')(f[0])}</span>${f[1]}</li>`).join('')}</ol>` : ''}</div>
      </div></div>
    ${e.xlog.length ? `<div class="box"><p class="box-t">${xd('logT')}</p><ol class="rl-rules">${e.xlog.map(r=>`<li>${r}</li>`).join('')}</ol></div>` : ''}
    <div class="fl-act"><span></span><button class="btn-sec" onclick="go('eval','${c.id}',${e.id})">${xd('back')}</button>${done ? '' : `<button class="btn-solid" onclick="xConfirm()"><i data-lucide="stamp" style="width:16px;height:16px"></i>${xd('confirm')}</button>`}</div>`;
}
function xConfirm(){
  const e = evById(rosterId, evalId), l = subOf(rosterId, evalId);
  l.forEach(s=>{ if (s.at){ s.rev = true; s.pre = false; } }); e.rev = e.sub; e.scored = e.sub; e.flow = 'final';
  go('eval', rosterId, evalId); toast(xd('confirmed'));
}


DETAIL.push('cross', 'final');
const _goX = go;
go = function(v, cid, eid, sid){
  if (v==='cross' || v==='final'){ if (cid) rosterId = cid; if (eid) evalId = +eid; view = v; location.hash = `${v}-${rosterId}-${evalId}`; render(); window.scrollTo(0,0); return; }
  _goX(v, cid, eid, sid);
};
{ const m = location.hash.match(/(cross|final)-(c\d+)-(\d+)/); if (m){ view = m[1]; rosterId = m[2]; evalId = +m[3];
    const e = evById(rosterId, evalId); const l = subOf(rosterId, evalId);
    if (e && !e.xcases){  l.forEach(s=>{ if (s.at){ s.pre=false; } }); e.scored = e.sub; e.rules = e.rules || AMB.pilot.map(x=>({q:x.q, t:x.opts[x.ai][2]})).concat(AMB.more.map(x=>({q:x.q, t:x.opts[x.ai][2]}))); xProfFill(); if (m[1]==='final') e.flow='confirm'; }
    render(); } }
