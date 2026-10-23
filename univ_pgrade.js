
const PG = {
  ko:{ bn:'AI 채점이 끝났어요. 교수님도 AI 점수를 가리고 따로 매겨 두면, 두 점수가 갈린 곳에서 기준을 다듬어 남은 채점이 교수님 판단과 같아져요.', bnGo:'교수님 채점 시작', skip:'교차 검토 없이 확인하기',
    bnRun:(a,b)=>`교수님 채점 ${a} / ${b}명. 매긴 학생까지 AI 점수와 맞대 볼 수 있어요.`, bnRunGo:'이어서 채점', bnCross:'지금까지로 교차 검토',
    h:'교수님 채점', sub:'AI 점수를 보지 않고 매겨야 교수님의 판단이 그대로 남아, AI 기준을 맞출 잣대가 돼요. AI 점수는 필요할 때 「AI 점수 보기」로 열 수 있어요.',
    tabOne:'한 명씩 매기기', tabSheet:'평가표로 올리기',
    hidden:'AI 점수 가림', showAi:'AI 점수 보기', hideAi:'다시 가리기', aiWas:n=>`AI ${n}점`,
    ansT:'답안', scoreT:'교수님 점수', memo:'메모 (선택)', memoPh:'학생에게 줄 말이나 채점하며 떠오른 기준', total:'합계',
    prev:'이전 학생', saveNext:'저장하고 다음', done:(a,b)=>`${a} / ${b}명 매김`, finish:'다 매겼어요 · 교차 검토로', finishSome:n=>`매긴 ${n}명으로 교차 검토`,
    fillRest:'나머지 채워 두기', saved:nm=>`${nm} 점수를 저장했어요`,
    shT:'교수님 평가표 올리기', shD:'엑셀로 채점해 두셨다면 다시 입력하지 않고 그대로 올리면 돼요. 학번으로 학생을 찾아 문항별 점수를 넣어요.', tpl:'평가표 양식 내려받기', drop:'평가표 파일을 끌어다 놓거나 눌러서 고르기', dropD:'엑셀(xlsx · csv) · 학번 · 이름 · 문항 1 · 문항 2 … 칸',
    shDone:(n,m)=>`${n}명 점수를 넣었어요${m ? ` · 학번을 못 찾은 줄 ${m}개` : ''}`, shGo:'교차 검토로', tplDone:'평가표 양식을 내려받았어요', back:'평가로 돌아가기', q:n=>`문항 ${n}` },
  en:{ bn:'AI scoring is done. Score separately with AI hidden, and where the two differ you can refine the criteria so the rest matches your judgment.', bnGo:'Start my scoring', skip:'Review without cross-check',
    bnRun:(a,b)=>`Your scoring ${a} / ${b}. You can compare up to the students scored.`, bnRunGo:'Continue', bnCross:'Cross-check so far',
    h:'My scoring', sub:'Scoring without seeing AI keeps your judgment intact, so it becomes the yardstick for the AI criteria. Open AI scores any time with "Show AI score".',
    tabOne:'One by one', tabSheet:'Upload my gradesheet',
    hidden:'AI score hidden', showAi:'Show AI score', hideAi:'Hide again', aiWas:n=>`AI ${n}`,
    ansT:'Answer', scoreT:'My score', memo:'Note (optional)', memoPh:'For the student, or a criterion that came to mind', total:'Total',
    prev:'Previous', saveNext:'Save and next', done:(a,b)=>`${a} / ${b} scored`, finish:'Done · go to cross-check', finishSome:n=>`Cross-check with ${n} scored`,
    fillRest:'Fill the rest', saved:nm=>`Saved ${nm}`,
    shT:'Upload my gradesheet', shD:'If you already scored in a spreadsheet, upload it instead of typing again. Students are matched by ID and scores filled per question.', tpl:'Download template', drop:'Drag a file here or click to choose', dropD:'xlsx · csv · columns: ID · name · Q1 · Q2 …',
    shDone:(n,m)=>`Filled scores for ${n}${m ? ` · ${m} rows without a matching ID` : ''}`, shGo:'Go to cross-check', tplDone:'Template downloaded', back:'Back to evaluation', q:n=>`Q${n}` }
};
const pg = k => PG[lang][k];

function pgSplit(total, qs, i){ 
  const p = qs.map(q=>+q.pts||10), sum = p.reduce((a,b)=>a+b,0); let left = total;
  return p.map((pt,k)=>{ if (k===p.length-1) return Math.max(0, Math.min(pt, left)); const v = Math.max(0, Math.min(pt, Math.round(total*pt/sum) + (((i+k)%3)-1))); left -= v; return v; }); }


const _fbPG = flowBanner;
flowBanner = function(c, e){
  const band = (ic, txt, btns) => `<div class="fl-band"><span class="fl-band-ic"><i data-lucide="${ic}"></i></span><p>${txt}</p><span class="fl-band-b">${btns}</span></div>`;
  if (e.flow==='done') return band('user-check', pg('bn'), `<button class="act txt" onclick="xSkip()">${pg('skip')}</button><button class="act pri" onclick="go('pgrade','${c.id}',${e.id})">${pg('bnGo')}</button>`);
  if (e.flow==='prof'){ const l = subOf(c.id, e.id), n = l.filter(s=>s.at).length, d = l.filter(s=>s.pscore!==undefined).length;
    return band('user-check', pg('bnRun')(d, n), `${d ? `<button class="act" onclick="pgToCross()">${pg('bnCross')}</button>` : ''}<button class="act pri" onclick="go('pgrade','${c.id}',${e.id})">${pg('bnRunGo')}</button>`); }
  return _fbPG(c, e);
};

function renderPGrade(){
  const c = cById(rosterId), e = evById(c.id, evalId), stu = rosterOf(c.id), l = subOf(c.id, evalId), qs = crQs(e);
  const P = e.pg || (e.pg = {tab:e.pgTab||'one', cur:0, showAi:false, sheet:false, scores:{}, memo:{}});
  if (e.flow==='done') e.flow = 'prof';
  const list = l.map((s,i)=>({s,i})).filter(x=>x.s.at), n = list.length, done = l.filter(s=>s.pscore!==undefined).length;
  const nm = s => lang==='ko'?s.ko:s.en;
  const tabs = `<div class="tabs" style="margin:0 0 16px">${[['one',pg('tabOne')],['sheet',pg('tabSheet')]].map(([k,t])=>`<span class="tab${P.tab===k?' on':''}" onclick="evById(rosterId, evalId).pg.tab='${k}'; render()">${t}</span>`).join('')}</div>`;
  let body = '';
  if (P.tab==='one'){
    const x = list[Math.min(P.cur, n-1)], s = x.s, key = s.sid;
    const ai = pgSplit(s.score, qs, x.i), mine = P.scores[key] || (s.pscore!==undefined ? pgSplit(s.pscore, qs, x.i) : qs.map(()=>''));
    const tot = mine.reduce((a,b)=>a+(+b||0),0);
    body = `<div class="pg-two">
      <div class="box"><div class="pg-who"><b>${s.sid} ${nm(s)}</b><span class="st muted">${Math.min(P.cur, n-1)+1} / ${n}</span></div>
        ${qs.map((q,k)=>`<div class="pg-ans"><p class="pg-q">${pg('q')(k+1)} · ${q.text}</p><p class="hw">${(typeof SP_ANS!=='undefined' ? SP_ANS[lang][k%3].slice(1).join(' ') : '')}</p></div>`).join('')}</div>
      <div class="box pg-side"><div class="pg-hd"><p class="box-t" style="font-size:16px;margin:0">${pg('scoreT')}</p>
          <button class="act txt" onclick="evById(rosterId, evalId).pg.showAi=!evById(rosterId, evalId).pg.showAi; render()"><i data-lucide="${P.showAi?'eye-off':'eye'}" style="width:15px;height:15px"></i>${P.showAi ? pg('hideAi') : pg('showAi')}</button></div>
        ${qs.map((q,k)=>`<div class="pg-row"><span>${pg('q')(k+1)}</span><input class="sp-in" type="number" min="0" max="${q.pts}" value="${mine[k]}" oninput="pgSet('${key}',${k},this.value)"><span class="st muted">/ ${q.pts}</span>${P.showAi ? `<span class="pg-ai">${pg('aiWas')(ai[k])}</span>` : ''}</div>`).join('')}
        <div class="pg-row pg-tot"><span>${pg('total')}</span><b id="pgTot">${tot}</b><span class="st muted">/ ${qs.reduce((a,q)=>a+(+q.pts||0),0)}</span></div>
        <div class="fl" style="margin:12px 0 0"><label>${pg('memo')}</label><textarea class="fb-area" style="min-height:64px" placeholder="${pg('memoPh')}" oninput="evById(rosterId, evalId).pg.memo['${key}']=this.value">${P.memo[key]||''}</textarea></div>
        <div class="foot-act" style="padding:12px 0 0"><button class="btn-sec" ${P.cur<=0?'disabled':''} onclick="evById(rosterId, evalId).pg.cur--; render()">${pg('prev')}</button><button class="btn-solid" onclick="pgSave('${key}')">${pg('saveNext')}</button></div></div></div>`;
  } else {
    body = `<div class="box"><p class="box-t">${pg('shT')}</p><p class="box-d">${pg('shD')}</p>
      ${P.sheet ? `<div class="gen" style="margin:0"><i data-lucide="check-circle-2"></i><p><b>${pg('shDone')(n, 0)}</b></p><button class="act pri" onclick="pgToCross()">${pg('shGo')}</button></div>`
        : `<div class="drop" onclick="pgSheet()"><i data-lucide="upload"></i><b>${pg('drop')}</b>${pg('dropD')}</div><div class="foot-act" style="padding:12px 0 0;justify-content:flex-start"><button class="act txt" onclick="toast(pg('tplDone'))"><i data-lucide="download" style="width:15px;height:15px"></i>${pg('tpl')}</button></div>`}</div>`;
  }
  return `<div class="ch"><div class="crumb"><a href="#" onclick="go('eval','${c.id}',${e.id});return false">${evName(e)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${pg('h')}</span></div>
      <h1>${pg('h')}</h1><p class="page-sub" style="margin-bottom:0">${pg('sub')}</p></div>${tabs}${body}
    <div class="fl-act"><span class="${done>=n?'fl-allset':'fl-left'}">${pg('done')(done, n)}</span>
      <button class="btn-sec" onclick="go('eval','${c.id}',${e.id})">${pg('back')}</button>
      <button class="btn-solid" ${done?'':'disabled'} onclick="pgToCross()">${done>=n || !done ? pg('finish') : pg('finishSome')(done)}</button></div>`;
}
function pgSet(key, k, v){ const e = evById(rosterId, evalId), qs = crQs(e), P = e.pg; const cur = P.scores[key] || qs.map(()=>'');
  cur[k] = v; P.scores[key] = cur; const t = document.getElementById('pgTot'); if (t) t.textContent = cur.reduce((a,b)=>a+(+b||0),0); }
function pgSave(key){ const e = evById(rosterId, evalId), l = subOf(rosterId, evalId), P = e.pg, s = l.find(x=>x.sid===key), qs = crQs(e);
  const idx = l.indexOf(s), v = P.scores[key] || pgSplit(Math.max(0, Math.min(30, s.score + [0,1,0,-1,0,2,0,0,1,-1][idx%10])), qs, idx);
  s.pscore = v.reduce((a,b)=>a+(+b||0),0); P.scores[key] = v; toast(pg('saved')(lang==='ko'?s.ko:s.en));
  const list = l.filter(x=>x.at); P.cur = Math.min(list.length-1, P.cur+1); render(); }
function pgFill(){ const e = evById(rosterId, evalId), l = subOf(rosterId, evalId);
  l.forEach((s,i)=>{ if (s.at && s.pscore===undefined) s.pscore = Math.max(0, Math.min(30, s.score + [0,1,0,-1,0,2,0,0,1,-1][i%10])); }); render(); }
function pgSheet(){ pgFill(); evById(rosterId, evalId).pg.sheet = true; render(); }
function pgToCross(){ const e = evById(rosterId, evalId), l = subOf(rosterId, evalId);
  e.xcases = XCASES.map(x=>({...x})); e.xfinds = XD.ko.finds.map(()=>false); e.xlog = e.xlog || []; e.flow = 'cross';
  l.forEach((s,i)=>{ if (s.at && s.pscore===undefined) s.pscoreSkip = true; });
  go('cross', rosterId, evalId); }


DETAIL.push('pgrade');
const _goPG = go;
go = function(v, cid, eid, sid){
  if (v==='pgrade'){ if (cid) rosterId = cid; if (eid) evalId = +eid; view = 'pgrade'; location.hash = `pgrade-${rosterId}-${evalId}`; render(); window.scrollTo(0,0); return; }
  _goPG(v, cid, eid, sid);
};
{ const m = location.hash.match(/^#pgrade-(c\d+)-(\d+)(-sheet)?/); if (m){ view = 'pgrade'; rosterId = m[1]; evalId = +m[2];
    const e = evById(rosterId, evalId); if (e && !e.flow && typeof flSeed==='function') flSeed('done', rosterId, evalId);
    if (e && m[3]) e.pgTab = 'sheet';
    render(); } }
