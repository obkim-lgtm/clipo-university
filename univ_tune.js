
const TD = {
  ko:{ h:'채점 맞춰 보기', sub:'답안 한 장을 먼저 채점해 보고, 생각한 점수와 다르면 그 자리에서 기준을 고쳐요. 학생 전체를 채점하기 전에 확인할 수 있어요.',
    entry:'미리 채점해 보기', srcStu:'낸 학생 답안으로', srcStuD:'이미 낸 학생 한 명을 골라요. 결과는 그 학생의 AI 채점으로 남아서 나중에 다시 채점하지 않아도 돼요.',
    srcFile:'답안 파일 올려서', srcFileD:'아직 답안을 받기 전이면 답안 한 장을 올려요. 지난 학기 답안이나 예시 답안도 돼요.',
    pickT:'누구의 답안으로 채점해 볼까요?', pickD:'아직 AI 채점을 하지 않은 학생만 보여요.', upT:'답안 한 장 올리기', upD:'PDF나 사진 한 장이면 돼요. 학생 한 명의 답안만 올려 주세요.',
    drop:'파일을 끌어다 놓거나 눌러서 고르기', dropD:'PDF · JPG · PNG 한 장', other:'다른 파일', whoT:'이 답안은 누구의 답안인가요?', whoD:'등록된 학생의 답안이면 결과를 그 학생 점수로 남겨요.',
    whoStu:'이 강좌에 등록된 학생의 답안이에요', whoEx:'예시 답안이에요', whoExD:'(등록된 학생이 아니라 결과를 남길 곳이 없어요. 채점 결과는 이 화면에서만 볼 수 있어요)', pickStu:'학생 고르기',
    cost:n=>`1크레딧이 들어요 <small>(남은 크레딧 ${n})</small>`, keep:nm=>`${nm} 학생 점수로 남아요`, noKeep:'예시 답안이라 결과는 남지 않아요', go:'이 답안으로 미리 채점',
    needStu:'학생을 한 명 골라 주세요', needFile:'답안 파일을 올려 주세요', needWho:'누구의 답안인지 골라 주세요',
    run:'AI가 답안을 채점하고 있어요', rerun:'고친 기준으로 채점하고 있어요', runD:'보통 3분쯤 걸려요. 다른 화면으로 가도 돼요. 끝나면 이 평가의 학생 표에 결과가 남아요.', leave:'기다리지 않고 나가기',
    resD:'점수가 생각과 같은지 봐 주세요. 다르면 아래에서 이유를 골라 고칠 수 있어요.',
    kept:nm=>`이 결과는 <b>${nm}</b> 학생의 AI 채점으로 남았어요(확정 전). 기준을 고쳐 다시 채점하면 마지막 결과로 바뀌어요.`, exNote:'예시 답안이라 이 결과는 어디에도 남지 않아요. 기준을 맞추는 데만 써요.',
    ansT:'답안 인식 결과', scT:'채점 결과', scD:'「내 생각」에 교수님이 줄 점수를 넣어 보면 어긋난 문항이 표시돼요. 넣지 않아도 돼요.',
    thQ:'문항', thAi:'AI 점수', thMe:'내 생각', total:'총점', first:'처음', now:'지금',
    askT:'생각한 점수와 다른가요?', askD:'어긋난 문항을 고르고 이유에 가까운 것을 고르면 그 자리로 가요. 고친 뒤 같은 답안으로 다시 채점해 비교해요.',
    c1:'제대로 봤는데 점수가 짜거나 후해요', c1D:'본 곳은 맞는데 몇 점을 줄지가 생각과 다를 때', c1Go:'채점 방법 고치기',
    c2:'정답과 다르게 봤어요', c2D:'답이 맞는데 틀렸다고 보거나, 틀린 답을 맞다고 볼 때', c2Go:'모범답안 넣기',
    okSaved:'고친 기준이 저장돼 있어요. 이대로 학생 전체를 채점하면 돼요.', okPlain:'점수가 생각과 맞으면 이 기준으로 학생 전체를 채점하면 돼요.', ok:'맞아요, 이 기준으로 채점하기',
    fixT:q=>`문항 ${q} 고치기`, fixWhole:'부분 점수 기준', fixItems:'항목별로 이렇게 쓰면 점수를 줘요', fixModel:'모범답안', fixModelPh:'정답이나 잘 쓴 답안을 붙여 넣어요. AI가 채점할 때 함께 봐요.',
    back:'결과로 돌아가기', save:'저장하고 같은 답안으로 다시 채점', cmpT:'이번에 고친 것', more:'더 고치기',
    done:n=>`기준을 저장했어요. 「AI 채점 · ${n}명」을 누르면 나머지 학생을 채점해요.`, toEval:'평가로 돌아가기',
    why:[ '내용 타당도와 준거 타당도는 설명했지만, 세 요소 중 구인 타당도가 빠졌어요.', '서술형 한 문항으로 단원 전체를 재려는 점과, 채점 기준이 「잘함·보통」뿐인 점 두 가지를 들었어요.', '문항을 나누고 점수 항목으로 쪼개는 개선안은 있지만, 근거가 한 줄이에요.' ],
    whyFix:' 고친 기준대로 보니 모범답안의 핵심을 짚어 점수를 올렸어요.' },
  en:{ h:'Try scoring first', sub:'Score one answer first. If the score differs from what you expect, fix the criteria right there — before scoring the whole class.',
    entry:'Preview scoring', srcStu:'From a submitted answer', srcStuD:'Pick one student who submitted. The result stays as their AI score, so you won\'t need to score them again.',
    srcFile:'Upload an answer file', srcFileD:'If no answers are in yet, upload one. Last term\'s answer or a sample answer works too.',
    pickT:'Whose answer should we try?', pickD:'Only students not yet scored by AI are listed.', upT:'Upload one answer', upD:'One PDF or photo is enough. Upload one student\'s answer only.',
    drop:'Drag a file here or click to choose', dropD:'One PDF · JPG · PNG', other:'Another file', whoT:'Whose answer is this?', whoD:'If it belongs to an enrolled student, the result stays as their score.',
    whoStu:'An enrolled student\'s answer', whoEx:'A sample answer', whoExD:'(not an enrolled student, so the result is shown here only)', pickStu:'Pick a student',
    cost:n=>`Uses 1 credit <small>(${n} left)</small>`, keep:nm=>`Kept as ${nm}'s score`, noKeep:'Sample answer — the result is not kept', go:'Score this answer',
    needStu:'Pick a student', needFile:'Upload an answer file', needWho:'Choose whose answer it is',
    run:'AI is scoring the answer', rerun:'Scoring with the updated criteria', runD:'Usually about 3 minutes. You can leave; the result stays in this evaluation\'s student table.', leave:'Leave without waiting',
    resD:'Check whether the scores match what you expect. If not, pick a reason below to fix it.',
    kept:nm=>`This result is kept as <b>${nm}</b>'s AI score (not final). If you fix the criteria and score again, the latest result replaces it.`, exNote:'This is a sample answer, so the result is not kept anywhere. Use it only to tune the criteria.',
    ansT:'Recognized answer', scT:'Scores', scD:'Enter your own score under "Mine" to highlight questions that differ. Optional.',
    thQ:'Question', thAi:'AI', thMe:'Mine', total:'Total', first:'First', now:'Now',
    askT:'Different from what you expected?', askD:'Pick the question and the closest reason to jump there. After fixing, score the same answer again to compare.',
    c1:'It read the right part, but the score is too harsh or lenient', c1D:'When it looked at the right place but the points differ from yours', c1Go:'Fix scoring method',
    c2:'It judged differently from the correct answer', c2D:'When a right answer was marked wrong, or a wrong one right', c2Go:'Add a model answer',
    okSaved:'Your fixed criteria are saved. You can score the whole class now.', okPlain:'If the scores look right, score the whole class with these criteria.', ok:'Looks right — score with these criteria',
    fixT:q=>`Fix question ${q}`, fixWhole:'Partial credit', fixItems:'What earns the points, per item', fixModel:'Model answer', fixModelPh:'Paste the correct or exemplary answer. AI uses it when scoring.',
    back:'Back to results', save:'Save and score the same answer again', cmpT:'What you changed', more:'Fix more',
    done:n=>`Criteria saved. Click "AI scoring · ${n}" to score the rest.`, toEval:'Back to evaluation',
    why:[ 'Explains content and criterion validity, but construct validity is missing.', 'Names two problems: one essay item for a whole unit, and a good / fair-only rubric.', 'Proposes splitting items and point criteria, but the rationale is one line.' ],
    whyFix:' With the updated criteria it matches the model answer\'s key point, so the score went up.' }
};
const td = k => TD[lang][k];
const TN_AI = [6, 7, 5];   
let TN = null;
function tnReset(){ TN = {stage:'src', src:null, sid:'', file:false, who:'', whoStu:'', think:{}, fixQ:null, fixKind:null, first:null, now:null, changed:[], kinds:{}}; }

function renderTune(){
  const c = cById(rosterId), e = evById(c.id, evalId), stu = rosterOf(c.id), l = subOf(c.id, evalId);
  if (!TN) tnReset();
  const qs = e.qs || (typeof qsSample==='function' ? qsSample() : []);
  const nm = s => lang==='ko'?s.ko:s.en, bySid = sid => stu.find(s=>s.sid===sid);
  const credit = (typeof CREDIT==='undefined' ? 100 : CREDIT);
  const head = `<div class="ch"><div class="crumb"><a href="#" onclick="tnLeave();return false">${evName(e)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${td('h')}</span></div>
    <h1>${td('h')}</h1><p class="page-sub" style="margin-bottom:0">${td('sub')}</p></div>`;
  const owner = TN.src==='stu' ? bySid(TN.sid) : (TN.who==='stu' ? bySid(TN.whoStu) : null);

  if (TN.stage==='src'){
    const cand = l.map((s,i)=>({s, st:stu[i]})).filter(x=>x.s.at && stOf(x.s)==='pre');
    const can = TN.src==='stu' ? !!TN.sid : TN.src==='file' ? (TN.file && (TN.who==='ex' || (TN.who==='stu' && TN.whoStu))) : false;
    const need = !TN.src ? '' : TN.src==='stu' ? (!TN.sid ? td('needStu') : '') : !TN.file ? td('needFile') : !TN.who || (TN.who==='stu' && !TN.whoStu) ? td('needWho') : '';
    const card = (k, ic, t, dsc, off) => `<div class="tn-src${TN.src===k?' on':''}${off?' off':''}" ${off?'':`onclick="TN.src='${k}'; render()"`}><span class="dz2-ic"><i data-lucide="${ic}"></i></span><div><b>${t}</b><p>${dsc}</p></div></div>`;
    let body = '';
    if (TN.src==='stu'){
      body = `<div class="box"><p class="box-t">${td('pickT')}</p><p class="box-d">${td('pickD')}</p><div class="tn-stu">${cand.slice(0,8).map(x=>`<label class="tn-stu-r${TN.sid===x.st.sid?' on':''}"><input type="radio" name="tnStu" ${TN.sid===x.st.sid?'checked':''} onchange="TN.sid='${x.st.sid}'; render()"><b>${x.st.sid}</b> ${nm(x.st)}<small>${x.s.at}</small></label>`).join('')}</div></div>`;
    } else if (TN.src==='file'){
      const free = l.map((s,i)=>({s, st:stu[i]})).filter(x=>!x.s.at || stOf(x.s)==='pre');
      body = `<div class="box"><p class="box-t">${td('upT')}</p><p class="box-d">${td('upD')}</p>
        ${TN.file ? `<div class="file"><i data-lucide="file-text"></i><b>${lang==='ko'?'답안_예시_1장.pdf':'sample_answer.pdf'}</b><small>1.2 MB</small><button class="act txt" onclick="TN.file=false; TN.who=''; TN.whoStu=''; render()">${td('other')}</button></div>
          <p class="box-t" style="font-size:16px;margin-top:18px">${td('whoT')}</p><p class="box-d">${td('whoD')}</p>
          <label class="tn-who"><input type="radio" name="tnWho" ${TN.who==='stu'?'checked':''} onchange="TN.who='stu'; render()">${td('whoStu')}</label>
          ${TN.who==='stu' ? `<select class="fl-pick${TN.whoStu?'':' unset'}" style="max-width:320px;margin:4px 0 10px 26px" onchange="TN.whoStu=this.value; render()"><option value="">${td('pickStu')}</option>${free.map(x=>`<option value="${x.st.sid}"${TN.whoStu===x.st.sid?' selected':''}>${x.st.sid} ${nm(x.st)}</option>`).join('')}</select>` : ''}
          <label class="tn-who"><input type="radio" name="tnWho" ${TN.who==='ex'?'checked':''} onchange="TN.who='ex'; TN.whoStu=''; render()">${td('whoEx')} <small>${td('whoExD')}</small></label>`
          : `<div class="drop" onclick="TN.file=true; render()"><i data-lucide="upload"></i><b>${td('drop')}</b>${td('dropD')}</div>`}</div>`;
    }
    const keepTxt = !can ? '' : owner ? td('keep')(nm(owner)) : td('noKeep');
    return head + `<div class="tn-srcs">${card('stu','users',td('srcStu'),td('srcStuD'), !cand.length)}${card('file','file-up',td('srcFile'),td('srcFileD'))}</div>${body}
      <div class="fl-act"><span class="tn-cost">${td('cost')(credit)}${keepTxt ? ` · <b>${keepTxt}</b>` : ''}${need ? ` · <em>${need}</em>` : ''}</span>
        <button class="btn-sec" onclick="tnLeave()">${d('cancel')}</button><button class="btn-solid" ${can && credit>0 ? '' : 'disabled'} onclick="tnRun(false)"><i data-lucide="sparkles" style="width:16px;height:16px"></i>${td('go')}</button></div>`;
  }
  if (TN.stage==='run' || TN.stage==='rerun'){
    return head + `<div class="tn-run"><span class="spin"></span><div><b>${TN.stage==='rerun' ? td('rerun') : td('run')}</b><p>${td('runD')}</p></div></div>
      <div class="foot-act"><button class="btn-sec" onclick="tnLeave()">${td('leave')}</button></div>`;
  }

  const ai = TN.now || TN.first, sum = a => a.reduce((x,y)=>x+y,0), max = qs.reduce((x,q)=>x+(+q.pts||0),0);
  const off = k => TN.think[k]!==undefined && TN.think[k]!=='' && +TN.think[k]!==ai[k];
  const answers = qs.map((q,k)=>{ const lines = (typeof SP_ANS!=='undefined' ? SP_ANS[lang][k%3] : ['']).slice(1);
    return `<div class="tn-ans"><h4>${qd('qNo')(k+1)}</h4><p class="hw">${lines.join(' ')}</p></div>`; }).join('');
  const why = k => td('why')[k%3] + (TN.changed.includes(k) ? td('whyFix') : '');
  const rows = qs.map((q,k)=>`<tr class="${off(k)?'off':''}"><td class="l"><b>${qd('qNo')(k+1)}</b><small>${why(k)}</small></td>
      ${TN.now ? `<td class="muted">${TN.first[k]}</td>` : ''}<td><b class="tn-ai">${ai[k]}</b><small> / ${q.pts}</small></td>
      <td><input class="sp-in" type="number" min="0" max="${q.pts}" value="${TN.think[k]??''}" onchange="TN.think[${k}]=this.value; render()"></td></tr>`).join('');
  const meSum = Object.values(TN.think).filter(v=>v!=='').length ? sum(qs.map((q,k)=> TN.think[k]!==undefined && TN.think[k]!=='' ? +TN.think[k] : ai[k])) : null;
  const scBox = `<div class="box"><p class="box-t" style="font-size:16px">${td('scT')}</p><p class="box-d">${td('scD')}</p>
      <table class="tn-sc"><thead><tr><th class="l">${td('thQ')}</th>${TN.now ? `<th>${td('first')}</th>` : ''}<th>${TN.now ? td('now') : td('thAi')}</th><th>${td('thMe')}</th></tr></thead><tbody>${rows}</tbody>
      <tfoot><tr><td class="l">${td('total')}</td>${TN.now ? `<td class="muted">${sum(TN.first)}</td>` : ''}<td><b>${sum(ai)}</b><small> / ${max}</small></td><td>${meSum===null ? '–' : meSum}</td></tr></tfoot></table></div>`;
  const note = owner ? `<p class="note"><i data-lucide="info"></i><span>${td('kept')(nm(owner))}</span></p>` : `<p class="note"><i data-lucide="info"></i><span>${td('exNote')}</span></p>`;

  if (TN.stage==='fix'){
    const q = qs[TN.fixQ], i = TN.fixQ;
    const method = q.mode==='whole' ? `<div class="fl"><label>${td('fixWhole')}</label><textarea class="fb-area" style="min-height:70px" oninput="tnQs()[${i}].whole=this.value">${q.whole||''}</textarea></div>`
      : q.mode==='items' ? `<div class="fl"><label>${td('fixItems')}</label>${q.items.map((it,m)=>`<div class="tn-item"><b>${it[0]}</b><small>${it[1]}${qd('ptsU')}</small><textarea class="fb-area" style="min-height:44px" oninput="tnQs()[${i}].items[${m}][2]=this.value">${it[2]}</textarea></div>`).join('')}</div>`
      : `<div class="fl"><label>${qd('mRubric')}</label>${q.crit.map((cr,m)=>`<div class="tn-item"><b>${cr[0]}</b><small>${cr[1]}${qd('ptsU')}</small><textarea class="fb-area" style="min-height:44px" oninput="tnQs()[${i}].crit[${m}][2][0]=this.value">${cr[2][0]}</textarea></div>`).join('')}</div>`;
    return head + `<div class="box"><p class="box-t">${td('fixT')(i+1)}</p><p class="box-d">${q.text}</p>
        ${TN.fixKind==='model' ? '' : method}
        <div class="fl" style="margin-bottom:0"><label>${td('fixModel')}</label><textarea class="fb-area" style="min-height:90px" placeholder="${td('fixModelPh')}" oninput="tnQs()[${i}].model=this.value">${q.model||''}</textarea></div></div>
      <div class="foot-act"><button class="btn-sec" onclick="TN.stage='res'; render()"><i data-lucide="chevron-left" style="width:16px;height:16px"></i>${td('back')}</button>
        <button class="btn-solid" onclick="tnRun(true)"><i data-lucide="refresh-cw" style="width:16px;height:16px"></i>${td('save')}</button></div>`;
  }

  
  const badQ = qs.map((q,k)=>k).filter(off), pickQ = TN.pickQ ?? (badQ[0] ?? 0);
  const ask = `<div class="tn-ask"><h3>${td('askT')}</h3><p>${td('askD')}</p>
      <div class="tn-qpick">${qs.map((q,k)=>`<button class="tn-qb${pickQ===k?' on':''}${off(k)?' off':''}" onclick="TN.pickQ=${k}; render()">${qd('qNo')(k+1)}</button>`).join('')}</div>
      <div class="tn-cause"><button onclick="TN.fixQ=${pickQ}; TN.fixKind='method'; TN.stage='fix'; render()"><b>${td('c1')}</b><p>${td('c1D')}</p><span>${td('c1Go')}<i data-lucide="chevron-right"></i></span></button>
        <button onclick="TN.fixQ=${pickQ}; TN.fixKind='model'; TN.stage='fix'; render()"><b>${td('c2')}</b><p>${td('c2D')}</p><span>${td('c2Go')}<i data-lucide="chevron-right"></i></span></button></div></div>`;
  const pre = l.filter(s=>stOf(s)==='pre').length;
  return head + note + `<div class="tn-res"><div class="box"><p class="box-t" style="font-size:16px">${td('ansT')}</p>${owner ? `<p class="box-d">${owner.sid} ${nm(owner)}</p>` : ''}${answers}</div>${scBox}</div>
    ${TN.now ? `<div class="box"><p class="box-t" style="font-size:16px">${td('cmpT')}</p><p class="box-d" style="margin:0">${TN.changed.map(k=>`${qd('qNo')(k+1)} · ${TN.kinds[k]==='model' ? td('c2Go') : td('c1Go')}`).join('<br>')}</p></div>` : ''}
    ${ask}
    <div class="fl-act"><span class="tn-cost">${TN.now ? td('okSaved') : td('okPlain')}</span>
      ${TN.now ? `<button class="btn-sec" onclick="TN.stage='res'; TN.fixQ=null; window.scrollTo(0, document.querySelector('.tn-ask').offsetTop)"><i data-lucide="pencil" style="width:15px;height:15px"></i>${td('more')}</button>` : ''}
      <button class="btn-solid" onclick="tnDone()"><i data-lucide="check" style="width:16px;height:16px"></i>${td('ok')}</button></div>`;
}
function tnQs(){ const e = evById(rosterId, evalId); if (!e.qs) e.qs = qsSample(); return e.qs; }
function tnRun(again){
  const l = subOf(rosterId, evalId), stu = rosterOf(rosterId);
  TN.stage = again ? 'rerun' : 'run';
  if (again && TN.fixQ!==null){ if (!TN.changed.includes(TN.fixQ)) TN.changed.push(TN.fixQ); TN.kinds[TN.fixQ] = TN.fixKind; }
  render(); window.scrollTo(0,0);
  setTimeout(()=>{
    if (!again) TN.first = TN_AI.slice(); else TN.now = TN.first.map((v,k)=> TN.changed.includes(k) ? Math.min(10, v+2) : v);
    
    const sid = TN.src==='stu' ? TN.sid : (TN.who==='stu' ? TN.whoStu : '');
    if (sid){ const i = stu.findIndex(s=>s.sid===sid), s = l[i], e = evById(rosterId, evalId);
      if (!s.at){ s.at = '10.22 10:05'; s.byProf = true; e.sub++; }
      if (s.pre){ s.pre = false; e.scored++; } }
    TN.stage = 'res'; TN.fixQ = null; if (view==='tune') render();
  }, 1400);
}
function tnDone(){ const e = evById(rosterId, evalId), n = e.sub - e.scored - (e.running||0); tnReset(); TN = null; go('eval', rosterId, e.id); toast(td('done')(n)); }
function tnLeave(){ TN = null; go('eval', rosterId, evalId); }


DETAIL.push('tune');
const _goT = go;
go = function(v, cid, eid, sid){
  if (v==='tune'){ if (cid) rosterId = cid; if (eid) evalId = +eid; tnReset(); view = 'tune'; location.hash = `tune-${rosterId}-${evalId}`; render(); window.scrollTo(0,0); return; }
  _goT(v, cid, eid, sid);
};
{ const m = location.hash.match(/tune-(c\d+)-(\d+)/); if (m){ view = 'tune'; rosterId = m[1]; evalId = +m[2]; render(); } }
