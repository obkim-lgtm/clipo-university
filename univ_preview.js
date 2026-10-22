
const PV = {
  ko:{ t:'답안 한 장으로 미리 채점해 보기', opt:'(선택)', d:'예시 답안이나 지난 학기 답안 한 장으로 이 채점 기준을 먼저 확인해요. 점수가 생각과 다르면 위 문항의 채점 방법이나 모범답안을 고치고 다시 채점해 비교해요.',
    drop:'답안 파일 한 장 올리기', dropD:'PDF · JPG · PNG 한 장 · 결과는 학생 점수로 남지 않아요', file:'답안_예시_1장.pdf', other:'다른 파일',
    go:'미리 채점하기', cost:n=>`1크레딧 (남은 크레딧 ${n})`, run:'AI가 답안을 채점하고 있어요', rerun:'고친 기준으로 다시 채점하고 있어요',
    resT:'미리 채점 결과', resD:'「내 생각」에 줄 점수를 넣어 보면 어긋난 문항이 표시돼요. 다르면 위에서 그 문항을 고친 뒤 「다시 채점」을 눌러요.',
    re:'고친 기준으로 다시 채점', changed:'고친 문항', none:'아직 고친 문항이 없어요. 위에서 채점 방법이나 모범답안을 고치면 다시 채점할 수 있어요.', close:'닫기' },
  en:{ t:'Preview scoring with one answer', opt:'(optional)', d:'Check these criteria with one sample or last term\'s answer. If a score differs from yours, fix that question\'s scoring method or model answer above and score again to compare.',
    drop:'Upload one answer file', dropD:'One PDF · JPG · PNG · not saved as a student score', file:'sample_answer.pdf', other:'Another file',
    go:'Preview scoring', cost:n=>`1 credit (${n} left)`, run:'AI is scoring the answer', rerun:'Scoring again with your changes',
    resT:'Preview result', resD:'Enter your own score under "Mine" to highlight questions that differ. If one differs, fix it above, then press "Score again".',
    re:'Score again with changes', changed:'Changed', none:'No questions changed yet. Edit a scoring method or model answer above to score again.', close:'Close' }
};
const pv = k => PV[lang][k];
const pvSnap = q => JSON.stringify([q.mode, q.whole, q.items, q.crit, q.model]);
function pvBox(){
  const P = nf.pv || (nf.pv = {stage:'idle', file:false, first:null, now:null, think:{}, snap:null});
  const credit = (typeof CREDIT==='undefined' ? 100 : CREDIT);
  const qs = nf.qs || [];
  let body = '';
  if (P.stage==='idle'){
    body = P.file
      ? `<div class="file"><i data-lucide="file-text"></i><b>${pv('file')}</b><small>1.2 MB</small><button class="act txt" onclick="nf.pv.file=false; render()">${pv('other')}</button></div>
         <div class="pv-go"><span class="st muted">${pv('cost')(credit)}</span><button class="act pri" onclick="pvRun(false)"><i data-lucide="sparkles" style="width:15px;height:15px"></i>${pv('go')}</button></div>`
      : `<div class="drop" onclick="nf.pv.file=true; render()"><i data-lucide="upload"></i><b>${pv('drop')}</b>${pv('dropD')}</div>`;
  } else if (P.stage==='run' || P.stage==='rerun'){
    body = `<div class="gen"><span class="spin"></span><p>${P.stage==='rerun' ? pv('rerun') : pv('run')}</p></div>`;
  } else {
    const ai = P.now || P.first, changed = qs.map((q,k)=>k).filter(k=>P.snap && pvSnap(qs[k])!==P.snap[k]);
    const off = k => P.think[k]!==undefined && P.think[k]!=='' && +P.think[k]!==ai[k];
    const ans = k => (typeof SP_ANS!=='undefined' ? SP_ANS[lang][k%3].slice(1).join(' ') : '');
    body = `<p class="box-d" style="margin:4px 0 10px">${pv('resD')}</p>
      <table class="tn-sc"><thead><tr><th class="l">${qd('qText')}</th>${P.now ? `<th>${td('first')}</th>` : ''}<th>${P.now ? td('now') : td('thAi')}</th><th>${td('thMe')}</th></tr></thead><tbody>
      ${qs.map((q,k)=>`<tr class="${off(k)?'off':''}"><td class="l"><b>${qd('qNo')(k+1)}</b><span class="pv-ans hw">${ans(k)}</span><small>${td('why')[k%3]}${P.now && P.changedAt && P.changedAt.includes(k) ? td('whyFix') : ''}</small></td>
        ${P.now ? `<td class="muted">${P.first[k]}</td>` : ''}<td><b class="tn-ai">${ai[k]}</b><small> / ${q.pts}</small></td>
        <td><input class="sp-in" type="number" min="0" max="${q.pts}" value="${P.think[k]??''}" onchange="nf.pv.think[${k}]=this.value; render()"></td></tr>`).join('')}</tbody>
      <tfoot><tr><td class="l">${td('total')}</td>${P.now ? `<td class="muted">${P.first.reduce((a,b)=>a+b,0)}</td>` : ''}<td><b>${ai.reduce((a,b)=>a+b,0)}</b><small> / ${qs.reduce((a,q)=>a+(+q.pts||0),0)}</small></td><td></td></tr></tfoot></table>
      <div class="pv-go"><span class="st muted">${changed.length ? `${pv('changed')}: ${changed.map(k=>qd('qNo')(k+1)).join(', ')} · ${pv('cost')(credit)}` : pv('none')}</span>
        <button class="act" onclick="nf.pv=null; render()">${pv('close')}</button>
        <button class="act pri" ${changed.length?'':'disabled'} onclick="pvRun(true)"><i data-lucide="refresh-cw" style="width:15px;height:15px"></i>${pv('re')}</button></div>`;
  }
  return `<div class="pv-box"><p class="box-t" style="font-size:16px"><i data-lucide="flask-conical" style="width:18px;height:18px;color:#416bff"></i>${pv('t')} <span class="st muted" style="font-weight:400;font-size:14px">${pv('opt')}</span></p>
    ${P.stage==='idle' ? `<p class="box-d">${pv('d')}</p>` : ''}${body}</div>`;
}
function pvRun(again){
  const P = nf.pv, qs = nf.qs || [];
  const changed = again ? qs.map((q,k)=>k).filter(k=>pvSnap(qs[k])!==P.snap[k]) : [];
  P.stage = again ? 'rerun' : 'run'; render();
  setTimeout(()=>{
    if (!again){ P.first = qs.map((q,k)=> Math.min(+q.pts||10, TN_AI[k%3])); P.snap = qs.map(pvSnap); }
    else { const base = P.now || P.first; P.changedAt = [...new Set([...(P.changedAt||[]), ...changed])]; P.now = base.map((v,k)=> changed.includes(k) ? Math.min(+qs[k].pts||10, v+2) : v); P.snap = qs.map(pvSnap); }
    P.stage = 'res'; if (view==='new') render();
  }, 1300);
}


document.addEventListener('change', ev=>{ if (view==='new' && nf.pv && nf.pv.stage==='res' && ev.target.closest('.qcard')) render(); });
const _qsHtmlPv = qsHtml;
qsHtml = function(){ const h = _qsHtmlPv(); return nf.qs ? h + pvBox() : h; };
