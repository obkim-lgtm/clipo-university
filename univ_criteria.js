
const CR = {
  ko:{
    xH:'교차 검토 · 기준 고치기', xSub:'교수님 점수가 정답이에요. AI 점수와 갈린 곳에서 채점 기준 문장에 빠진 선을 찾았어요. AI에 점수를 맞추지 않고, 기준을 고쳐 같은 기준으로 다시 채점해요.',
    agreeT:'두 점수가 같은 학생', fixT:'기준 고치기 제안', fixD:'AI는 기준 문장에 적힌 것만 적힌 대로 읽어요. 아래 문장을 고치면 교수님 점수와 같은 이유로 점수가 나와요.',
    diff:(n,a,b)=>`교수님 ${a}점 · AI ${b}점으로 갈린 학생 ${n}명`, now:'지금 기준', next:'고친 기준', why:'왜 이렇게', apply:'기준 고치기', keep:'그대로 두기', applied:'고쳤어요', kept:'그대로 둠',
    rerunAsk:n=>`고친 기준 ${n}개로 다시 채점할까요? 고친 문항만 다시 채점해요.`, rerun:'고친 기준으로 다시 채점', rerunning:'고친 기준으로 다시 채점하고 있어요',
    rerunDone:'다시 채점했어요. 문항별 일치를 확인해 주세요.',
    excT:'기준으로 설명되지 않는 답', excD:'기준을 고쳐도 교수님 점수와 다른 답이에요. 원본을 보고 점수를 직접 맞추거나 그대로 두세요.', alignTo:(nm,a,b)=>`${nm} ${a}점 → ${b}점(교수님 점수)`, alignKeep:'AI 점수로 두기',
    logT:'바꾼 것', logEmpty:'아직 바꾼 것이 없어요.', logCrit:(q,it)=>`문항 ${q} · ${it} 기준 고침`, logScore:(q,nm,a,b)=>`문항 ${q} · ${nm} ${a}점 → ${b}점`,
    leftFix:n=>`확인할 제안 ${n}개가 남았어요`, needRerun:'고친 기준으로 다시 채점해 주세요', leftExc:n=>`확인할 답 ${n}개가 남았어요`, allSet:'모두 확인했어요', toConfirm:'확정하러 가기',
    principle:{where:'볼 곳 알려 주기', define:'용어 정의 · 인정할 표현', count:'개수 + 조건', top:'만점 높이'},
    stdD:'시범 채점 판정과 교차 검토로 고친 문장이 들어간 문항별 채점 기준이에요. 학생 피드백은 이 기준을 근거로 써요. 해설 개정본으로 내려받아 학생 질문에 답할 때도 써요.',
    edited:'고침', fromPilot:'시범 채점', fromCross:'교차 검토', fbBasis:n=>`피드백 근거: 채점 확정 기준(기준 고침 ${n}건 반영)`, seeStd:'기준 보기',
    rlInto:'들어갈 기준', rlPreview:(it)=>`문항 기준 「${it}」 문장에 더해요`,
    q:n=>`문항 ${n}`
  },
  en:{
    xH:'Cross-check · fix criteria', xSub:'Your scores are the answer. Where AI differs, we found lines missing from the criteria. Rather than adjusting to AI, fix the criteria and rescore with them.',
    agreeT:'Students with matching scores', fixT:'Suggested criteria fixes', fixD:'AI reads only what the criteria say, as written. Fixing these makes scores come out for your reasons.',
    diff:(n,a,b)=>`${n} students: you ${a} · AI ${b}`, now:'Current', next:'Fixed', why:'Why', apply:'Fix criterion', keep:'Keep', applied:'Fixed', kept:'Kept',
    rerunAsk:n=>`Rescore with ${n} fixed criteria? Only the fixed questions are rescored.`, rerun:'Rescore with fixed criteria', rerunning:'Rescoring with fixed criteria',
    rerunDone:'Rescored. Check the match per question.',
    excT:'Not explained by the criteria', excD:'These still differ after fixing. Look at the original and align the score, or keep it.', alignTo:(nm,a,b)=>`${nm} ${a} → ${b} (yours)`, alignKeep:'Keep AI score',
    logT:'Changes', logEmpty:'Nothing changed yet.', logCrit:(q,it)=>`Q${q} · fixed "${it}"`, logScore:(q,nm,a,b)=>`Q${q} · ${nm} ${a} → ${b}`,
    leftFix:n=>`${n} suggestions left`, needRerun:'Rescore with the fixed criteria', leftExc:n=>`${n} answers left`, allSet:'All checked', toConfirm:'Go to confirm',
    principle:{where:'Say where to look', define:'Define terms · accepted wording', count:'Count + condition', top:'Full-mark bar'},
    stdD:'Criteria per question, including lines added from the pilot and the cross-check. Student feedback is based on these. Download as a revised key for student questions.',
    edited:'Fixed', fromPilot:'Pilot', fromCross:'Cross-check', fbBasis:n=>`Feedback basis: final criteria (${n} fixes)`, seeStd:'View criteria',
    rlInto:'Goes into', rlPreview:(it)=>`Added to the criterion "${it}"`,
    q:n=>`Q${n}`
  }
};
const cr = k => CR[lang][k];


const XFIX = [
  {q:1, item:'결과 타당도', n:7, a:3, b:1, p:'define', after:'평가가 학습 · 수업에 주는 영향을 설명하면 용어(결과 타당도)를 쓰지 않아도 3점. 용어만 쓰고 설명이 없으면 1점.',
   why:'교수님은 뜻을 정확히 쓴 답을 용어가 없어도 만점으로 봤어요. 지금 문장엔 「언급」만 있어 AI가 용어를 찾았어요.', agree:[36,41]},
  {q:2, item:'문제점 1', n:5, a:5, b:10, p:'count', after:'평가 목표와 과제 유형이 어긋난다는 점(5점). 같은 문제점을 원인 · 결과로 나눠 써도 하나로 셈.',
   why:'교수님은 하나의 문제점을 둘로 나눠 쓴 답을 한 번만 셌어요. 지금 문장엔 세는 단위가 없어요.', agree:[31,38]},
  {q:3, item:'근거', n:9, a:2, b:4, p:'count', after:['수업 자료의 개념과 사례를 함께 든 근거 2개(근거 하나에 2점)','개념과 사례를 함께 든 근거 1개, 또는 개념만 든 근거 2개','근거 없이 주장만 함'],
   why:'교수님은 근거 하나에 2점을 줬고, 개념만 있고 사례가 없으면 근거로 덜 셌어요. 지금 문장의 「2개 이상」에는 무엇을 근거로 셀지가 없어요.', agree:[27,38]},
];

const XEXC = [
  {q:2, who:23, ai:5, prof:3, kind:'글씨를 알아보기 어려워 두 번째 문장이 빠지게 읽힌 답', ans:'채점자마다 다르게 … (판독 어려움)'},
  {q:3, who:26, ai:4, prof:2, kind:'다른 평가(지필 시험)의 개선안을 쓴 답', ans:'지필 시험 문항을 서술형으로 바꾸고 배점을 늘린다.'},
];
function crQs(e){ if (!e.qs) e.qs = qsSample(); return e.qs; }
function crFind(e, qn, item){ const q = crQs(e)[qn-1]; if (!q) return null;
  if (q.items){ const it = q.items.find(x=>x[0]===item); if (it) return {get:()=>it[2], set:v=>{ it[2] = v; }, name:item}; }
  if (q.crit){ const c = q.crit.find(x=>x[0]===item); if (c) return {get:()=>c[2].join(' / '), set:v=>{ c[2] = Array.isArray(v) ? v.slice() : [v, c[2][1], c[2][2]]; }, name:item}; }
  return null; }
function crEdit(e, qn, item, after, src){ const f = crFind(e, qn, item); if (!f) return; const before = f.get(); f.set(after);
  (e.critEdits = e.critEdits || []).push({q:qn, item, before, after: Array.isArray(after) ? after.join(' / ') : after, src}); }


const AMB_TGT = {'문제점 1 · 2':'문제점 1'};
rlCommit = function(e){
  const picked = e.amb.filter(x=>x.pick!==undefined);
  e.rules = [...(e.rules||[]), ...picked.map(x=>({q:x.q, t:x.opts[x.pick][2]}))];
  picked.forEach(x=>{ const item = AMB_TGT[x.item] || x.item, f = crFind(e, x.q, item); if (!f) return;
    const cur = f.get(), add = x.opts[x.pick][2];
    crEdit(e, x.q, item, f.name && crQs(e)[x.q-1].crit ? [`${cur.split(' / ')[0]} (${add})`, ...crQs(e)[x.q-1].crit.find(c=>c[0]===item)[2].slice(1)] : `${cur} ${add}`, 'pilot'); });
};

const _rrCR = renderRules;
renderRules = function(){
  let h = _rrCR(); const e = evById(rosterId, evalId);
  (e.amb||[]).forEach((x,k)=>{ const item = AMB_TGT[x.item] || x.item, f = crFind(e, x.q, item); if (!f) return;
    const mark = `<p class="rl-why"`, idx = (()=>{ let pos = -1; for (let i=0;i<=k;i++){ pos = h.indexOf(mark, pos+1); } return pos; })();
    if (idx < 0) return;
    const line = `<p class="rl-into"><b>${cr('rlInto')}</b> ${cr('q')(x.q)} · ${item}: 「${f.get()}」${x.pick!==undefined ? ` <span class="rl-add">+ ${x.opts[x.pick][2]}</span>` : ''}</p>`;
    h = h.slice(0, idx) + line + h.slice(idx); });
  return h;
};


renderCross = function(){
  const c = cById(rosterId), e = evById(c.id, evalId), stu = rosterOf(c.id), l = subOf(c.id, evalId);
  if (!e.xfix){ if (!e.xcases) xProfFill(); e.xfix = XFIX.map(x=>({...x})); e.xexc = XEXC.map(x=>({...x})); e.xlog = e.xlog || []; e.rescored = false; }
  const n = l.filter(s=>s.at).length, nm = i => { const s = stu[i]; return s ? (lang==='ko'?s.ko:s.en) : ''; };
  
  const m = l.filter(s=>s.at && s.pscore!==undefined && !s.pscoreSkip).length || n, sc = v => m>=n ? v : Math.max(0, Math.round(v*m/n));
  const base = [36,31,27].map(sc), after = [0,1,2].map(k=>{ const f = e.xfix.find(x=>x.q===k+1 && x.done==='fix' && x.agree); return e.rescored && f ? sc(f.agree[1]) : base[k]; });
  const openFix = e.xfix.filter(x=>!x.done).length, fixedN = e.xfix.filter(x=>x.done==='fix').length, openExc = e.rescored ? e.xexc.filter(x=>!x.done).length : 0;
  const card = (x,k) => { const f = crFind(e, x.q, x.item), before = x.before ?? (f ? f.get() : '');
    if (x.before===undefined) x.before = before;
    const aft = Array.isArray(x.after) ? x.after.map((t,i)=>`<span class="lv-row"><span class="lv">${qd('lv')[i]}</span><span>${t}</span></span>`).join('') : x.after;
    const bef = Array.isArray(x.after) ? before.split(' / ').map((t,i)=>`<span class="lv-row"><span class="lv">${qd('lv')[i]}</span><span>${t}</span></span>`).join('') : before;
    return `<div class="rl-card${x.done?' done':''}"><div class="rl-hd"><b>${cr('q')(x.q)} · ${x.item}</b><span class="chip">${cr('principle')[x.p]}</span></div>
      <p class="cr-diff">${cr('diff')(Math.max(1, sc(x.n)), x.a, x.b)}</p>
      <div class="cr-ab"><div><p class="rl-lbl">${cr('now')}</p><p class="cr-txt">${bef}</p></div><div class="cr-arrow"><i data-lucide="arrow-right"></i></div><div><p class="rl-lbl">${cr('next')}</p><p class="cr-txt aft">${aft}</p></div></div>
      <p class="xc-why"><i data-lucide="lightbulb"></i><span><b>${cr('why')}</b> ${x.why}</span></p>
      ${x.done ? `<p class="st ${x.done==='fix'?'ok':'muted'}" style="margin:0">${x.done==='fix'?cr('applied'):cr('kept')}${x.done==='fix' && e.rescored && x.agree ? ` · ${cr('q')(x.q)} ${cr('agreeT')} ${sc(x.agree[0])} → ${sc(x.agree[1])}` : ''}</p>`
        : `<div class="fl-band-b" style="justify-content:flex-end"><button class="act" onclick="crDecide(${k},'keep')">${cr('keep')}</button><button class="act pri" onclick="crDecide(${k},'fix')">${cr('apply')}</button></div>`}</div>`; };
  const exc = (x,k) => `<div class="rl-card${x.done?' done':''}"><div class="rl-hd"><b>${cr('q')(x.q)} · ${x.kind}</b><span class="st muted">${stu[x.who]?.sid||''} ${nm(x.who)}</span></div>
      <p class="rl-ans hw" style="font-size:18px">${x.ans}</p><p class="cr-diff">${lang==='ko'?`교수님 ${x.prof}점 · AI ${x.ai}점`:`You ${x.prof} · AI ${x.ai}`}</p>
      ${x.done ? `<p class="st ok" style="margin:0">${x.done==='fix'?cr('applied'):cr('kept')}</p>` : `<div class="fl-band-b" style="justify-content:flex-end"><button class="act" onclick="crExc(${k},'keep')">${cr('alignKeep')}</button><button class="act pri" onclick="crExc(${k},'fix')">${cr('alignTo')(nm(x.who), x.ai, x.prof)}</button></div>`}</div>`;
  const rerunBand = !e.rescored && fixedN && !openFix ? `<div class="fl-band"><span class="fl-band-ic"><i data-lucide="refresh-cw"></i></span><p>${e.rerunning ? cr('rerunning') : cr('rerunAsk')(fixedN)}</p><span class="fl-band-b">${e.rerunning ? '<span class="spin"></span>' : `<button class="act pri" onclick="crRerun()">${cr('rerun')}</button>`}</span></div>` : '';
  const ready = !openFix && (e.rescored || !fixedN) && !openExc;
  const left = openFix ? cr('leftFix')(openFix) : (!e.rescored && fixedN) ? cr('needRerun') : openExc ? cr('leftExc')(openExc) : cr('allSet');
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('eval','${c.id}',${e.id});return false">${evName(e)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${cr('xH')}</span></div>
      <h1>${cr('xH')}</h1><p class="page-sub" style="margin-bottom:0">${cr('xSub')}</p></div>
    <div class="stats">${after.map((a,k)=>`<div class="stat${e.rescored && a!==base[k]?' hi':''}"><small>${cr('q')(k+1)} · ${cr('agreeT')}</small><b>${e.rescored && a!==base[k] ? `<em style="margin:0 6px 0 0;text-decoration:line-through">${base[k]}</em>` : ''}${a}<em>/ ${m}</em></b></div>`).join('')}</div>${m<n ? `<p class="sec-desc" style="margin:-6px 0 16px">${lang==='ko' ? `교수님이 매긴 ${m}명으로 맞대 봤어요. 나머지 ${n-m}명은 AI 점수 그대로예요.` : `Compared on the ${m} you scored. The other ${n-m} keep AI scores.`}</p>` : ''}
    ${rerunBand}
    <div class="two rl-two">
      <div><p class="sem-title" style="margin:0 0 4px">${cr('fixT')}</p>${e.xfix.map(card).join('')}
        ${e.rescored ? `<p class="sem-title" style="margin:24px 0 4px">${cr('excT')}</p><p class="sec-desc">${cr('excD')}</p>${e.xexc.map(exc).join('')}` : ''}</div>
      <div class="rl-side"><p class="sem-title" style="margin:0 0 4px">${cr('logT')} <span class="st muted" style="font-weight:400">${e.xlog.length}</span></p><div class="box">
        ${e.xlog.length ? `<ol class="rl-rules">${e.xlog.map(r=>`<li>${r}</li>`).join('')}</ol>` : `<p class="box-d" style="margin:0">${cr('logEmpty')}</p>`}</div></div>
    </div>
    <div class="fl-act"><span class="${ready?'fl-allset':'fl-left'}">${left}</span>
      <button class="btn-sec" onclick="go('eval','${c.id}',${e.id})">${xd('back')}</button><button class="btn-solid" ${ready?'':'disabled'} onclick="evById(rosterId, evalId).flow='confirm'; go('final', rosterId, evalId)">${cr('toConfirm')}</button></div>`;
};
function crDecide(k, how){ const e = evById(rosterId, evalId), x = e.xfix[k]; x.done = how;
  if (how==='fix'){ crEdit(e, x.q, x.item, x.after, 'cross'); e.xlog.push(cr('logCrit')(x.q, x.item)); }
  render(); }
function crRerun(){ const e = evById(rosterId, evalId); e.rerunning = true; render();
  setTimeout(()=>{ e.rerunning = false; e.rescored = true; if (view==='cross') render(); toast(cr('rerunDone')); }, 1500); }
function crExc(k, how){ const e = evById(rosterId, evalId), x = e.xexc[k], stu = rosterOf(rosterId), l = subOf(rosterId, evalId); x.done = how;
  if (how==='fix'){ const s = l[x.who]; if (s) s.fscore = Math.max(0, (s.pscore ?? s.score) - (x.ai - x.prof)); e.xlog.push(cr('logScore')(x.q, lang==='ko'?stu[x.who].ko:stu[x.who].en, x.ai, x.prof)); }
  render(); }

const _fbCR = flowBanner;
flowBanner = function(c, e){
  if (e.flow==='cross'){ const open = e.xfix ? e.xfix.filter(x=>!x.done).length : XFIX.length;
    return `<div class="fl-band"><span class="fl-band-ic"><i data-lucide="git-compare-arrows"></i></span><p>${lang==='ko'?`AI 점수와 교수님 점수를 맞대 봤어요. 기준 문장에 빠진 선 ${open}곳을 찾았어요. 기준을 고쳐 다시 채점해요.`:`Compared AI and your scores. Found ${open} lines missing from the criteria. Fix them and rescore.`}</p><span class="fl-band-b"><button class="act pri" onclick="go('cross','${c.id}',${e.id})">${cr('xH')}</button></span></div>`; }
  return _fbCR(c, e);
};


renderFinal = function(){
  const c = cById(rosterId), e = evById(c.id, evalId), l = subOf(c.id, evalId), qs = crQs(e);
  if (!e.xlog) e.xlog = [];
  const P = e.pre || nf.pre || {var:'ask', part:'yes', out:'ask', abs:'zero'};
  const pre = rd('pre').map(([k,lbl,opts])=>`<li><span>${lbl}</span><b>${(opts.find(o=>o[0]===P[k])||opts[0])[1]}</b></li>`).join('');
  const edits = e.critEdits || [], editedSet = new Set(edits.map(x=>x.q+'|'+x.item));
  const qBlock = (q,k) => { const rows = q.items ? q.items.map(it=>[it[0], it[1], it[2]]) : q.crit ? q.crit.map(cc=>[cc[0], cc[1], cc[2].map((t,i)=>`<span class="lv-row"><span class="lv">${qd('lv')[i]}</span><span>${t}</span></span>`).join('')]) : [[qd('fixWhole')||'', q.pts, q.whole||'']];
    return `<div class="fs-q"><p class="fs-qh"><b>${cr('q')(k+1)}</b> ${q.text} <span class="st muted">${q.pts}${qd('ptsU')}</span></p>
      ${rows.map(r=>{ const ed = edits.filter(x=>x.q===k+1 && x.item===r[0]); return `<div class="fs-row${ed.length?' ed':''}"><b>${r[0]}</b><span class="st muted">${r[1]}${qd('ptsU')}</span><p>${r[2]}</p>${ed.length ? `<span class="fs-tags">${ed.map(x=>`<span class="chip">${cr('edited')} · ${x.src==='cross'?cr('fromCross'):cr('fromPilot')}</span>`).join('')}</span>` : ''}</div>`; }).join('')}
      ${q.model ? `<p class="fs-model"><span class="st-tag">${qd('model')}</span><span>${q.model}</span></p>` : ''}</div>`; };
  const done = e.flow==='final';
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('eval','${c.id}',${e.id});return false">${evName(e)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${xd('fH')}</span></div>
      <h1>${xd('fH')}</h1><p class="page-sub" style="margin-bottom:0">${xd('fSub')}</p></div>
    <div class="stats">${(lang==='ko' ? [['확정할 학생', `${l.filter(s=>s.at).length}명`], ['고친 기준 문장', `${edits.length}건`], ['점수만 고친 답', `${e.xlog.filter(x=>/→/.test(x)).length}건`], ['AI · 교수님 원본 점수', '그대로 보존']]
      : [['Students', l.filter(s=>s.at).length], ['Criteria fixed', edits.length], ['Scores changed only', e.xlog.filter(x=>/→/.test(x)).length], ['Original scores', 'Kept']]).map(([k,v])=>`<div class="stat"><small>${k}</small><b>${v}</b></div>`).join('')}</div>
    <div class="box"><div class="ch-row" style="align-items:flex-start"><div><p class="box-t">${xd('stdT')}</p><p class="box-d" style="margin:0">${cr('stdD')}</p></div><button class="act" onclick="toast(xd('dlDone'))"><i data-lucide="download" style="width:15px;height:15px"></i>${xd('dl')}</button></div>
      <div class="fs-grid"><div>${qs.map(qBlock).join('')}</div><div><p class="st-h">${xd('stdPre')}</p><ul class="rl-pre">${pre}</ul></div></div></div>
    ${e.xlog.length ? `<div class="box"><p class="box-t">${cr('logT')}</p><ol class="rl-rules">${e.xlog.map(r=>`<li>${r}</li>`).join('')}</ol></div>` : ''}
    <div class="fl-act"><span></span><button class="btn-sec" onclick="go('eval','${c.id}',${e.id})">${xd('back')}</button>${done ? '' : `<button class="btn-solid" onclick="xConfirm()"><i data-lucide="stamp" style="width:16px;height:16px"></i>${xd('confirm')}</button>`}</div>`;
};


const _rfmCR = renderFbMake;
renderFbMake = function(){
  const h = _rfmCR(), e = evById(rosterId, evalId), n = (e.critEdits||[]).length;
  const line = `<p class="fm-basis"><i data-lucide="book-check"></i><span>${cr('fbBasis')(n)}</span><button class="act txt" onclick="go('final', rosterId, evalId)">${cr('seeStd')}</button></p>`;
  return h.replace('<div class="two fm-two">', line + '<div class="two fm-two">');
};


const TIP = {
  ko:{ t:'기준 문장 잘 쓰는 법', d:'AI는 기준 문장에 적힌 것만 적힌 대로 읽어요. AI가 만든 기준은 초안이라, 교수님 머릿속의 선을 예시와 용어 정의로 적어 주면 같은 답에 같은 점수가 나와요.',
    open:'예시 보기', close:'접기', bad:'모호한 예', good:'좋은 예',
    rows:[['볼 곳 알려 주기','타당도를 잘 설명함','내용 · 구인 · 결과 타당도의 이름과 뜻을 함께 쓰면 항목마다 점수, 이름만 쓰면 절반'],
          ['개수 + 조건으로 판단을 하나로','근거가 충분하고 논리적임','수업 자료의 개념과 사례를 함께 든 근거 하나에 2점(최대 4점)'],
          ['용어 정의 · 인정할 다른 표현','구인 타당도를 설명함','구인 타당도(「구성 타당도」라고 써도 인정)를 「재려는 능력을 실제로 재는 정도」로 설명'],
          ['만점 높이 맞추기','모든 개선안이 빈틈없는 근거로 흔들림 없이 뒷받침됨','개선안마다 근거를 하나 이상 들어 입장이 드러남']],
    foot:'결과가 생각과 다르면 답안보다 기준 문장을 고치는 게 빨라요. 고친 문장은 다음 학생에게도 그대로 적용돼요.' },
  en:{ t:'Writing criteria that score like you', d:'AI reads only what the criteria say, as written. AI drafts are a start; add examples and term definitions for the lines in your head, and the same answer gets the same score.',
    open:'Show examples', close:'Hide', bad:'Vague', good:'Clear',
    rows:[['Say where to look','Explains validity well','Name and meaning of content, construct and consequential validity: points per element; name only: half'],
          ['Count + condition','Sufficient, logical evidence','2 points per reason that pairs a course concept with a case (max 4)'],
          ['Define terms · accept wording','Explains construct validity','Explains construct validity ("구성 타당도" also accepted) as "measuring the intended ability"'],
          ['Set the full-mark bar','Every improvement flawlessly supported','Each improvement backed by at least one reason, with a clear position']],
    foot:'If results differ from yours, fixing the criteria is faster than fixing answers. A fixed line applies to every next student.' }
};
const tip = k => TIP[lang][k];

function tipIsOpen(){ if (nf.tipOpen !== undefined) return nf.tipOpen; try { return localStorage.getItem('univTipClosed') !== '1'; } catch(e){ return true; } }
function tipToggle(){ nf.tipOpen = !tipIsOpen(); try { localStorage.setItem('univTipClosed', nf.tipOpen ? '0' : '1'); } catch(e){} render(); }
const _qsHtmlTip = qsHtml;
qsHtml = function(){
  const h = _qsHtmlTip(); if (!nf.qs) return h;
  const open = tipIsOpen();
  const box = `<div class="tip-box"><div class="tip-hd" onclick="tipToggle()"><i data-lucide="pencil-ruler"></i><b>${tip('t')}</b><span class="act txt">${open ? tip('close') : tip('open')}</span></div>
    <p class="tip-d">${tip('d')}</p>
    ${open ? `<div class="tip-rows">${tip('rows').map(r=>`<div class="tip-row"><span class="tip-p">${r[0]}</span><span class="tip-bad"><em>${tip('bad')}</em>${r[1]}</span><span class="tip-ar"><i data-lucide="arrow-right"></i></span><span class="tip-good"><em>${tip('good')}</em>${r[2]}</span></div>`).join('')}</div><p class="tip-foot">${tip('foot')}</p>` : ''}</div>`;
  const at = h.indexOf('</div>') + 6;   
  return h.slice(0, at) + box + h.slice(at);
};


if (lang==='en'){
  XFIX.splice(0, XFIX.length,
    {q:1, item:'Consequential validity', n:7, a:3, b:1, p:'define', after:'Explaining how the assessment affects learning and teaching earns 3 even without the term (consequential validity). The term alone with no explanation earns 1.',
     why:'You gave full marks to precise meanings without the term. The current line only says "mentions", so AI looked for the term.', agree:[36,41]},
    {q:2, item:'Problem 1', n:5, a:5, b:10, p:'count', after:'Mismatch between the goal and the task type (5). The same problem split into cause and effect counts once.',
     why:'You counted a problem split in two only once. The current line has no counting unit.', agree:[31,38]},
    {q:3, item:'Evidence', n:9, a:2, b:4, p:'count', after:['Two reasons that each pair a course concept with a case (2 points each)','One concept-and-case reason, or two concept-only reasons','Claims without evidence'],
     why:'You gave 2 points per reason and counted concept-only reasons for less. "Two or more" does not say what counts as a reason.', agree:[27,38]});
  XEXC.splice(0, XEXC.length,
    {q:2, who:23, ai:5, prof:3, kind:'Handwriting hard to read, second sentence was missed', ans:'Each grader reads it … (hard to read)'},
    {q:3, who:26, ai:4, prof:2, kind:'Improvement written for a different assessment (paper test)', ans:'Change the paper test items to essays and raise the points.'});
}
