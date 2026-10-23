
const RD = {
  ko:{
    preT:'채점 전 결정', preD:'해설만으로는 판정이 갈리는 답이 꼭 나와요. 채점을 시작하기 전에 정해 두면 AI가 그대로 따르고, 정하지 않은 것은 채점하면서 물어봐요.',
    pre:[
      ['var','표현이 달라도 뜻이 같은 답', [['ok','인정'],['ask','채점하며 묻기']]],
      ['part','부분점수', [['yes','줌'],['no','주지 않음']]],
      ['out','수업 범위 밖 내용', [['ok','맞으면 인정'],['no','인정하지 않음'],['ask','채점하며 묻기']]],
      ['abs','결시', [['zero','0점'],['skip','성적에서 제외']]],
    ],
    pilot:n=>`${n}명 먼저 채점`, allNow:'전원 바로 채점', pilotRun:'3명을 먼저 채점하고 있어요',
    bnPilot:n=>`판정이 갈린 답 ${n}개만 정해 주면, 나머지 학생은 같은 규칙으로 채점돼 같은 경우에 같은 점수가 나와요.`, bnPilotGo:'판정 정하기',
    bnReady:(r,n)=>`채점 규칙 ${r}개를 정했어요. 이 규칙으로 나머지 ${n}명도 채점할까요?`, bnReadyGo:n=>`나머지 ${n}명 채점하기`, seeRules:'규칙 보기',
    bnNew:n=>`채점하는 동안 새로 판정이 갈린 답 ${n}개가 있어요. 정하면 앞서 채점한 학생에게도 같은 규칙을 맞출 수 있어요.`,
    bnDone:r=>`채점 규칙 ${r}개로 모든 학생을 채점했어요. 확인하고 공개하면 돼요.`,
    rH:'채점 규칙 정하기', rSub:'갈린 답을 한 번만 정해 두면, 같은 경우의 학생은 모두 같은 점수를 받아요. 고른 판정은 채점 규칙으로 남아 남은 학생 채점에도 그대로 쓰여요.',
    rSubNew:'새로 갈린 답도 정해 두면 앞서 채점한 학생과 점수를 맞출 수 있어요. 정한 판정은 규칙에 더해지고, 앞 학생까지 맞출지는 저장할 때 물어봐요.',
    q:n=>`문항 ${n}`, ans:'학생 답', aiSaw:'AI가 멈춘 이유', pick:'판정', pts:'점',
    rulesT:'채점 규칙', rulesEmpty:'판정을 고르면 여기에 규칙으로 쌓여요.', preBox:'채점 전 결정', editPre:'평가 수정에서 바꾸기',
    go:n=>`이 규칙으로 나머지 ${n}명 채점하기`, left:n=>`정할 판정 ${n}개가 남았어요`, allSet:'모든 판정을 정했어요',
    goNew:'규칙 저장하기', retroAsk:(n)=>`새 규칙에 해당하는 앞 학생 ${n}명이 있어요. 그 학생들 점수도 새 규칙에 맞출까요?`, retroGo:n=>`${n}명 점수 맞추기`, retroSkip:'이번만 적용',
    retroDone:n=>`앞 학생 ${n}명 점수를 새 규칙에 맞췄어요`, saved:'채점 규칙을 저장했어요', back:'평가로 돌아가기',
    pilotDone:'3명 채점이 끝났어요. 판정이 갈린 답을 정해 주세요', restDone:n=>`${n}명 채점이 끝났어요`
  },
  en:{
    preT:'Decisions before scoring', preD:'Some answers always split judgment, however good the key. Decide these before scoring and AI follows them; anything left open is asked during scoring.',
    pre:[
      ['var','Different wording, same meaning', [['ok','Accept'],['ask','Ask while scoring']]],
      ['part','Partial credit', [['yes','Give'],['no','Don\'t give']]],
      ['out','Content beyond the course', [['ok','Accept if correct'],['no','Don\'t accept'],['ask','Ask while scoring']]],
      ['abs','Absent', [['zero','0 points'],['skip','Exclude from grade']]],
    ],
    pilot:n=>`Score ${n} first`, allNow:'Score everyone now', pilotRun:'Scoring 3 students first',
    bnPilot:n=>`Decide just these ${n} split answers and the rest of the class is scored by the same rules, so the same case gets the same score.`, bnPilotGo:'Decide',
    bnReady:(r,n)=>`${r} scoring rules set. Score the remaining ${n} students with these rules?`, bnReadyGo:n=>`Score the remaining ${n}`, seeRules:'View rules',
    bnNew:n=>`${n} new answers split judgment while scoring. Once decided, you can apply the rule to students already scored.`,
    bnDone:r=>`Everyone scored with ${r} rules. Review and release.`,
    rH:'Set scoring rules', rSub:'Decide each split once and every student with the same case gets the same score. Your decisions stay as scoring rules for the rest of the class.',
    rSubNew:'Decide new splits too, so students scored earlier can match. Decisions are added to the rules; we ask before re-aligning earlier students.',
    q:n=>`Question ${n}`, ans:'Answer', aiSaw:'Why AI paused', pick:'Decision', pts:'pts',
    rulesT:'Scoring rules', rulesEmpty:'Decisions pile up here as rules.', preBox:'Decisions before scoring', editPre:'Change in Edit evaluation',
    go:n=>`Score the remaining ${n} with these rules`, left:n=>`${n} decisions left`, allSet:'All decided',
    goNew:'Save rules', retroAsk:n=>`${n} students already scored fit the new rule. Update their scores too?`, retroGo:n=>`Update ${n}`, retroSkip:'Only from now',
    retroDone:n=>`Updated ${n} students to the new rule`, saved:'Scoring rules saved', back:'Back to evaluation',
    pilotDone:'3 scored. Decide the answers that split judgment', restDone:n=>`Scored ${n}`
  }
};
const rd = k => RD[lang][k];


const AMB = {
  pilot: [
    {q:1, who:1, item:'구인 타당도', max:3, ans:'구성 타당도는 재려는 능력을 실제로 제대로 재는지를 본다.', why:'「구성 타당도」를 「구인 타당도」와 같은 말로 볼지 정하지 못했어요(채점 전 결정: 채점하며 묻기).',
     opts:[[3,'같은 말로 인정','「구성 타당도」는 「구인 타당도」와 같은 말로 인정해요.'],[0,'인정 안 함','「구인 타당도」라는 용어를 써야 점수를 줘요.']], ai:0},
    {q:1, who:0, item:'결과 타당도', max:3, ans:'평가 결과가 학생의 공부 방식과 수업에 어떤 영향을 주는지도 따져야 한다.', why:'용어(결과 타당도) 없이 뜻만 정확히 썼어요. 채점 가이드의 「용어만 쓰면 절반」과 반대 경우예요.',
     opts:[[3,'만점','용어 없이 뜻만 정확히 써도 만점이에요.'],[2,'부분점수 2점','용어 없이 뜻만 쓰면 2점이에요.'],[0,'0점','용어가 없으면 0점이에요.']], ai:1},
    {q:2, who:2, item:'문제점 2', max:5, ans:'채점자가 바뀌면 점수가 달라질 수 있어 신뢰도가 낮다.', why:'신뢰도는 이번 시험 범위(3주차 타당도) 밖이에요. 내용은 맞아요.',
     opts:[[5,'맞으면 인정','범위 밖 내용이라도 맞으면 인정해요.'],[0,'인정 안 함','이번 시험 범위(타당도) 안의 문제점만 인정해요.']], ai:0},
    {q:3, who:1, item:'근거', max:4, ans:'내가 중학교 때 수행평가에서 채점 기준을 몰라 무엇을 써야 할지 헤맸기 때문에 기준을 미리 알려야 한다.', why:'근거를 수업 자료가 아니라 개인 경험에서 들었어요.',
     opts:[[4,'근거로 인정','개인 경험도 주장을 뒷받침하면 근거로 인정해요.'],[2,'부분점수 2점','수업 자료가 아닌 근거는 2점이에요.'],[0,'인정 안 함','수업 자료의 개념을 근거로 들어야 점수를 줘요.']], ai:1},
  ],
  more: [
    {q:2, who:9, item:'문제점 1 · 2', max:10, ans:'1) 채점 기준이 잘함·보통뿐이다. 2) 그래서 채점자마다 다르게 읽는다.', why:'한 가지 문제점을 원인과 결과로 나눠 두 개처럼 썼어요.',
     opts:[[5,'하나로 셈','원인과 결과로 나눠 쓴 같은 문제점은 하나로 세요.'],[10,'둘로 셈','나눠 쓴 문제점도 각각 하나로 세요.']], ai:0, retro:3},
    {q:3, who:14, item:'근거', max:4, ans:'(표) 개선 전 → 개선 후: 서술형 1문항 → 2문항, 잘함·보통 → 점수 항목', why:'개선안을 표로만 쓰고 근거 문장이 없어요.',
     opts:[[0,'근거 없음(0점)','표로만 쓰고 근거 문장이 없으면 근거 점수는 0점이에요.'],[2,'부분점수 2점','표 안에 근거가 드러나면 2점이에요.']], ai:0, retro:2},
  ]
};


function preDecideBox(){
  const P = nf.pre || (nf.pre = {var:'ask', part:'yes', out:'ask', abs:'zero'});
  return `<div class="box"><p class="box-t"><span class="n">4</span>${rd('preT')}</p><p class="box-d">${rd('preD')}</p>
    <div class="pre-grid">${rd('pre').map(([k,lbl,opts])=>`<div class="pre-row"><span class="pre-l">${lbl}</span><span class="pre-o">${opts.map(([v,t])=>`<button class="act${P[k]===v?' pri':''}" onclick="nf.pre.${k}='${v}'; render()">${t}</button>`).join('')}</span></div>`).join('')}</div></div>`;
}


function flowAiBtns(c, e, preAll, scoringN, credit, a){
  if (!(preAll > 0) || scoringN) return '';
  const dis = credit<=0 ? 'disabled' : '';
  if (!e.flow && e.scored===0) return `<button class="act" ${dis} onclick="flAll()">${rd('allNow')}</button><button class="act pri" ${dis} onclick="flPilot()"><i data-lucide="sparkles" style="width:16px;height:16px"></i>${rd('pilot')(3)}</button>`;
  if (e.flow==='ready') return '';   
  if (e.flow==='pilot' || e.flow==='more') return '';
  return `<button class="act${a==='ai'?' pri':''}" ${dis} onclick="runAi()"><i data-lucide="sparkles" style="width:16px;height:16px"></i>${d('aiBtn')(preAll)}</button>`;
}

function flowBanner(c, e){
  if (!e.flow) return '';
  const pre = e.sub - e.scored - (e.running||0), rules = (e.rules||[]).length;
  const open = (e.amb||[]).filter(x=>x.pick===undefined).length;
  const band = (ic, txt, btns) => `<div class="fl-band"><span class="fl-band-ic"><i data-lucide="${ic}"></i></span><p>${txt}</p><span class="fl-band-b">${btns}</span></div>`;
  if ((e.flow==='pilot' || e.flow==='more') && open) return band('git-compare', e.flow==='pilot' ? rd('bnPilot')(open) : rd('bnNew')(open), `<button class="act pri" onclick="go('rules','${c.id}',${e.id})">${rd('bnPilotGo')}</button>`);
  if (e.flow==='ready' && e.running) return band('loader', lang==='ko' ? `정한 규칙으로 나머지 ${e.running}명을 채점하는 중이에요.` : `Scoring the remaining ${e.running} with your rules.`, '');   
  if (e.flow==='ready') return band('list-checks', rd('bnReady')(rules, pre), `<button class="act" onclick="go('rules','${c.id}',${e.id})">${rd('seeRules')}</button><button class="act pri" onclick="flRest()">${rd('bnReadyGo')(pre)}</button>`);
  if (e.flow==='done') return band('check-circle-2', rd('bnDone')(rules), `<button class="act" onclick="go('rules','${c.id}',${e.id})">${rd('seeRules')}</button>`);
  return '';
}


function flPilot(){
  const e = evById(rosterId, evalId), l = subOf(rosterId, evalId), ids = l.filter(s=>stOf(s)==='pre').slice(0,3).map(s=>s.sid);
  l.forEach(s=>{ if (ids.includes(s.sid)){ s.pre=false; s.scoring=true; } }); e.running = ids.length; render(); toast(rd('pilotRun'));
  setTimeout(()=>{ l.forEach(s=>{ if (ids.includes(s.sid)) s.scoring=false; }); e.scored += ids.length; e.running = 0;
    e.flow = 'pilot'; e.rules = e.rules || []; e.amb = AMB.pilot.map(x=>({...x}));
    if (view==='eval' || view==='rules') render(); toast(rd('pilotDone')); }, 1600);
}

function flRest(){
  const e = evById(rosterId, evalId), n = e.sub - e.scored;
  if (view!=='eval') go('eval', rosterId, evalId);
  runAi();
  setTimeout(()=>{ e.flow = 'more'; e.amb = AMB.more.map(x=>({...x})); if (view==='eval') render(); }, 2600);
}


function renderRules(){
  const c = cById(rosterId), e = evById(c.id, evalId), stu = rosterOf(c.id);
  const amb = e.amb || [], open = amb.filter(x=>x.pick===undefined).length, isNew = e.flow==='more';
  const P = e.pre || nf.pre || {var:'ask', part:'yes', out:'ask', abs:'zero'};
  const nm = i => { const s = stu[i]; return s ? (lang==='ko'?s.ko:s.en) : ''; };
  const card = (x,k) => `<div class="rl-card${x.pick!==undefined?' done':''}">
      <div class="rl-hd"><b>${rd('q')(x.q)} · ${x.item}</b><span class="st muted">${stu[x.who]?.sid||''} ${nm(x.who)} · ${x.max}${rd('pts')}</span></div>
      <p class="rl-lbl">${rd('ans')}</p><p class="rl-ans hw">${x.ans}</p>
      <p class="rl-why"><i data-lucide="pause-circle"></i><span><b>${rd('aiSaw')}</b> ${x.why}</span></p>
      <div class="rl-opts">${x.opts.map((o,j)=>`<label class="rl-opt${x.pick===j?' on':''}"><input type="radio" name="rl${k}" ${x.pick===j?'checked':''} onchange="evById(rosterId, evalId).amb[${k}].pick=${j}; render()"><b>${o[1]}</b><span class="st muted">${o[0]}${rd('pts')}</span>${x.ai===j?`<em>${lang==='ko'?'AI가 가깝다고 본 판정':'Closest per AI'}</em>`:''}</label>`).join('')}</div></div>`;
  const ruleList = [...(e.rules||[]), ...amb.filter(x=>x.pick!==undefined).map(x=>({q:x.q, t:x.opts[x.pick][2], fresh:true}))];
  const preVals = rd('pre').map(([k,lbl,opts])=>`<li><span>${lbl}</span><b>${(opts.find(o=>o[0]===P[k])||opts[0])[1]}</b></li>`).join('');
  const rest = e.sub - e.scored - (e.running||0);
  const foot = isNew
    ? `<button class="btn-solid" ${open?'disabled':''} onclick="rlSaveNew()">${rd('goNew')}</button>`
    : `<button class="btn-solid" ${open?'disabled':''} onclick="rlSave(true)"><i data-lucide="sparkles" style="width:16px;height:16px"></i>${rd('go')(rest)}</button>`;
  const retro = e.retroAsk ? `<div class="fl-band" style="margin-top:14px"><span class="fl-band-ic"><i data-lucide="history"></i></span><p>${rd('retroAsk')(e.retroAsk)}</p><span class="fl-band-b"><button class="act" onclick="rlRetro(false)">${rd('retroSkip')}</button><button class="act pri" onclick="rlRetro(true)">${rd('retroGo')(e.retroAsk)}</button></span></div>` : '';
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('eval','${c.id}',${e.id});return false">${evName(e)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${rd('rH')}</span></div>
      <h1>${rd('rH')}</h1><p class="page-sub" style="margin-bottom:0">${isNew ? rd('rSubNew') : rd('rSub')}</p></div>
    <div class="two rl-two">
      <div>${amb.length ? amb.map(card).join('') : `<div class="box" style="text-align:center;color:#6d7381">${rd('rulesEmpty')}</div>`}${retro}</div>
      <div class="rl-side">
        <div class="box"><p class="box-t" style="font-size:16px">${rd('rulesT')} <span class="st muted" style="font-weight:400">${ruleList.length}</span></p>
          ${ruleList.length ? `<ol class="rl-rules">${ruleList.map(r=>`<li${r.fresh?' class="fresh"':''}><span class="chip">${rd('q')(r.q)}</span>${r.t}</li>`).join('')}</ol>` : `<p class="box-d" style="margin:0">${rd('rulesEmpty')}</p>`}</div>
        <div class="box"><p class="box-t" style="font-size:16px">${rd('preBox')}</p><ul class="rl-pre">${preVals}</ul><button class="act txt" onclick="editEval()">${rd('editPre')}</button></div>
      </div>
    </div>
    <div class="fl-act"><span class="${open?'fl-left':'fl-allset'}">${open ? rd('left')(open) : rd('allSet')}</span>
      <button class="btn-sec" onclick="go('eval','${c.id}',${e.id})">${rd('back')}</button>${e.retroAsk ? '' : foot}</div>`;
}
function rlCommit(e){ e.rules = [...(e.rules||[]), ...e.amb.filter(x=>x.pick!==undefined).map(x=>({q:x.q, t:x.opts[x.pick][2]}))]; }
function rlSave(runRest){ const e = evById(rosterId, evalId); rlCommit(e); const retro = 0; e.amb = []; e.flow = 'ready'; toast(rd('saved'));
  if (runRest) flRest(); else go('eval', rosterId, evalId); }
function rlSaveNew(){ const e = evById(rosterId, evalId); const n = e.amb.reduce((a,x)=>a+(x.retro||0),0); rlCommit(e); e.amb = []; e.retroAsk = n; render(); }
function rlRetro(yes){ const e = evById(rosterId, evalId), n = e.retroAsk; e.retroAsk = 0; e.flow = 'done'; go('eval', rosterId, evalId); toast(yes ? rd('retroDone')(n) : rd('saved')); }


DETAIL.push('rules');
const _goR = go;
go = function(v, cid, eid, sid){
  if (v==='rules'){ if (cid) rosterId = cid; if (eid) evalId = +eid; view = 'rules'; location.hash = `rules-${rosterId}-${evalId}`; render(); window.scrollTo(0,0); return; }
  _goR(v, cid, eid, sid);
};
{ const m = location.hash.match(/rules-(c\d+)-(\d+)/); if (m){ view = 'rules'; rosterId = m[1]; evalId = +m[2];
    const e = evById(rosterId, evalId); if (e && !e.flow){ 
      const l = subOf(rosterId, evalId); l.filter(s=>stOf(s)==='pre').slice(0,3).forEach(s=>{ s.pre=false; }); e.scored += 3; e.flow='pilot'; e.rules=[]; e.amb = AMB.pilot.map(x=>({...x})); }
    render(); } }


function flowActLabel(e){
  if (!e.flow || e.flow==='final' && e.fbDone) return null;
  const ko = {pilot:'판정 정하기', more:'판정 정하기', ready:'나머지 채점하기', done:'교수님 채점', prof:'교수님 채점', cross:'교차 검토', confirm:'점수 확정', final:'피드백 만들기'};
  const en = {pilot:'Decide splits', more:'Decide splits', ready:'Score the rest', done:'My scoring', prof:'My scoring', cross:'Cross-check', confirm:'Confirm scores', final:'Make feedback'};
  return (lang==='ko' ? ko : en)[e.flow] || null;
}


function flAll(){ const e = evById(rosterId, evalId); e.rules = e.rules || []; e.amb = []; runAi();
  setTimeout(()=>{ if (!e.flow){ e.flow = 'done'; if (view==='eval') render(); } }, 2500); }


if (lang==='en'){
  AMB.pilot = [
    {q:1, who:1, item:'Construct validity', max:3, ans:'Construct validity checks whether the test really measures the ability it aims at.', why:'Unsure whether to accept a synonym for the term (pre-grading decision: ask while scoring).',
     opts:[[3,'Accept as the same term','Accept close synonyms of "construct validity".'],[0,'Do not accept','Give points only when the exact term is used.']], ai:0},
    {q:1, who:0, item:'Consequential validity', max:3, ans:'We should also ask how test results change the way students study and how classes are taught.', why:'Explains the meaning precisely without the term. The opposite of the guide\'s "term only: half".',
     opts:[[3,'Full marks','Full marks for a precise meaning even without the term.'],[2,'Partial 2','Meaning without the term: 2 points.'],[0,'Zero','No term: 0 points.']], ai:1},
    {q:2, who:2, item:'Problem 2', max:5, ans:'Scores may change when the grader changes, so reliability is low.', why:'Reliability is outside this exam\'s scope (week 3: validity). The content is correct.',
     opts:[[5,'Accept if correct','Accept out-of-scope points if they are correct.'],[0,'Do not accept','Accept only problems within this exam\'s scope (validity).']], ai:0},
    {q:3, who:1, item:'Evidence', max:4, ans:'In middle school I did not know the rubric and was lost, so criteria should be shared in advance.', why:'Evidence comes from personal experience, not course materials.',
     opts:[[4,'Accept as evidence','Personal experience counts if it supports the claim.'],[2,'Partial 2','Evidence not from course materials: 2 points.'],[0,'Do not accept','Evidence must use a concept from course materials.']], ai:1},
  ];
  AMB.more = [
    {q:2, who:9, item:'Problems 1 · 2', max:10, ans:'1) The rubric only says good / fair. 2) So graders read it differently.', why:'One problem written as two, split into cause and effect.',
     opts:[[5,'Count as one','The same problem split into cause and effect counts once.'],[10,'Count as two','Count each written problem separately.']], ai:0, retro:3},
    {q:3, who:14, item:'Evidence', max:4, ans:'(Table) Before → after: 1 essay item → 2 items, good / fair → scored criteria', why:'Improvement given only as a table, with no sentence of evidence.',
     opts:[[0,'No evidence (0)','A table without an evidence sentence gets 0 for evidence.'],[2,'Partial 2','2 points if the table itself shows the reason.']], ai:0, retro:2},
  ];
}
