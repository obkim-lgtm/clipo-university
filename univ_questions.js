
const QD = {
  ko:{ s3:'문항과 채점 방법', s3d:'문항마다 배점과 모범답안, 채점 방법을 정해 두면 AI가 그 기준대로 채점해요. 문제지에서 찾은 문항이라 빠진 문항만 더하면 돼요.',
    genBtn:'AI로 문항·채점 항목 만들기', genNeed:'문제지를 올리면 만들 수 있어요', genRun:'문제지에서 문항을 찾고 채점 항목을 만드는 중이에요', genDone:(n,p)=>`문항 ${n}개를 찾고 채점 항목을 만들었어요. 배점 합계 ${p}점이에요.`,
    qNo:n=>`문항 ${n}`, pts:'배점', ptsU:'점', qText:'문항', model:'모범답안', modelPh:'정답이나 잘 쓴 답안을 붙여 넣어요. AI가 채점할 때 함께 봐요.', modelOpt:'(선택)',
    how:'채점 방법', mWhole:'한 번에', mWholeD:'모범답안과 비교해 문항 전체에 점수를 줘요. 답이 정해진 문제에 맞아요.', wDesc:'부분 점수 기준', wPh:'예) 풀이 과정이 맞고 계산만 틀리면 절반. 답만 쓰고 풀이가 없으면 0점.', wNote:'모범답안과 같으면 만점이에요. 부분 점수를 줄 경우가 있으면 적어요.', mItems:'항목으로 나눠', mItemsD:'채점 포인트마다 최고점을 정해요. 여러 요소를 써야 하는 서술형에 맞아요.', mRubric:'수준표', mRubricD:'기준마다 상·중·하 수준으로 점수를 줘요. 논술형에 맞아요.',
    iName:'항목', iMax:'최고점', iDesc:'이렇게 쓰면 점수를 줘요', addI:'항목 추가', addC:'기준 추가', cName:'기준', lv:['상','중','하'],
    guide:'채점 가이드', guidePh:'부분 점수 규칙, 자주 나오는 오답, 조교에게 남길 메모 등을 자유롭게 적어요.', guideNote:'이 문항 전체에 대한 메모예요. 위 항목 설명은 AI가 채점할 때 읽고, 채점 가이드는 교수·조교만 봐요(지금은 AI가 읽지 않아요).',
    sumOk:(a)=>`항목 합계 ${a}점`, sumBad:(a,b)=>`항목 합계(${a}점)가 문항 배점(${b}점)과 달라요`, total:(a)=>`배점 합계 ${a}점`,
    review:'채점기준 AI 검토', reviewing:'검토하는 중이에요', addQ:'문항 추가', delQ:'문항 삭제',
    rvGrade:{good:'우수', ok:'적절', fix:'보완 필요'}, rvAmb:n=>`「${n}」 기준은 상·중·하를 「충분히·대체로·다소」 같은 정도로만 가르고 있어요. 무엇이 있으면 상인지 적으면 채점이 흔들리지 않아요.`, rvFine:'기준마다 무엇을 보는지 하나씩 분명해요. 이대로 채점해도 돼요.',
    viewBtn:'문항·채점 기준', viewClose:'접기', noGuide:'채점 가이드 없음', noModel:'모범답안 없음' },
  en:{ s3:'Questions & scoring', s3d:'Set points, a model answer and a scoring method for each question, and AI scores by them. These come from your sheet, so just add any that are missing.',
    genBtn:'Find questions & draft scoring with AI', genNeed:'Upload the question sheet first', genRun:'Finding questions and drafting scoring items', genDone:(n,p)=>`Found ${n} questions and drafted scoring items. ${p} points in total.`,
    qNo:n=>`Question ${n}`, pts:'Points', ptsU:'pts', qText:'Question', model:'Model answer', modelPh:'Paste the correct or exemplary answer. AI uses it when scoring.', modelOpt:'(optional)',
    how:'Scoring method', mWhole:'As a whole', mWholeD:'Score the whole question against the model answer. Good when there is a set answer.', wDesc:'Partial credit', wPh:'e.g. Right method but a calculation slip: half. Answer only, no working: 0.', wNote:'Matching the model answer earns full points. Add partial-credit rules if any.', mItems:'Split into items', mItemsD:'Set a max for each scoring point. Good for answers that need several elements.', mRubric:'Rubric', mRubricD:'Score each criterion by level (high · mid · low). Good for essays.',
    iName:'Item', iMax:'Max', iDesc:'What earns the points', addI:'Add item', addC:'Add criterion', cName:'Criterion', lv:['High','Mid','Low'],
    guide:'Grading guide', guidePh:'Partial-credit rules, common mistakes, notes for TAs — free text.', guideNote:'A note for this whole question. AI reads the item descriptions above when scoring; the grading guide is for instructors and TAs only (AI does not read it for now).',
    sumOk:(a)=>`Items total ${a} pts`, sumBad:(a,b)=>`Items total (${a}) differs from question points (${b})`, total:(a)=>`${a} points in total`,
    review:'AI rubric review', reviewing:'Reviewing', addQ:'Add question', delQ:'Delete question',
    rvGrade:{good:'Strong', ok:'Adequate', fix:'Needs work'}, rvAmb:n=>`"${n}" separates levels only by degree words (fully · mostly · somewhat). State what must be present for "high" so scoring stays consistent.`, rvFine:'Each criterion looks at one clear thing. Good to score as is.',
    viewBtn:'Questions & scoring', viewClose:'Hide', noGuide:'No grading guide', noModel:'No model answer' }
};
const qd = k => QD[lang][k];
function qsSample(){
  const ko = lang==='ko';
  return [
    {text: ko?'평가의 타당도를 이루는 세 요소를 각각 설명하시오.':'Explain the three elements of validity in assessment.', pts:10, mode:'items',
     items: ko?[['내용 타당도',4,'평가 내용이 목표 범위를 대표하는지로 설명'],['구인 타당도',3,'재려는 능력을 실제로 재는지로 설명'],['결과 타당도',3,'평가가 가져오는 영향까지 언급']]:[['Content validity',4,'Explains coverage of the target domain'],['Construct validity',3,'Explains measuring the intended ability'],['Consequential validity',3,'Mentions effects of the assessment']],
     model: ko?'내용 타당도는 평가 문항이 가르친 내용 전체를 고르게 대표하는 정도, 구인 타당도는 재려는 능력을 실제로 재는 정도, 결과 타당도는 평가가 학습과 수업에 미치는 영향이 의도에 맞는 정도이다.':'Content validity: items represent the taught domain. Construct validity: the test measures the intended ability. Consequential validity: effects on learning match intentions.',
     guide: ko?'용어만 쓰고 설명이 없으면 항목 최고점의 절반. 결과 타당도를 「신뢰도」와 섞어 쓴 답이 많음.':'Term only without explanation: half of the item max. Many confuse consequential validity with reliability.'},
    {text: ko?'제시된 수행평가 설계의 문제점을 두 가지 쓰시오.':'Identify two problems in the given assessment design.', pts:10, mode:'items',
     items: ko?[['문제점 1',5,'평가 목표와 과제 유형의 불일치'],['문제점 2',5,'채점기준이 결과물만 보고 과정을 보지 않음']]:[['Problem 1',5,'Mismatch of goal and task type'],['Problem 2',5,'Rubric ignores process']], model:'', guide:''},
    {text: ko?'개선안을 제시하고 그 근거를 논술하시오.':'Propose improvements and argue for them.', pts:10, mode:'rubric',
     crit: ko?[['논제 이해',3,['개선 대상이 무엇인지 정확히 짚음','개선 대상을 대체로 짚음','개선 대상을 다소 놓침']],['근거',4,['수업 자료의 개념을 근거로 2개 이상 듦','근거를 1개 듦','근거 없이 주장만 함']],['논리 전개',3,['주장·근거·결론이 한 흐름','흐름이 한 군데 끊김','흐름이 없음']]]
                :[['Understanding',3,['Pinpoints what to improve','Mostly identifies it','Somewhat misses it']],['Evidence',4,['Two or more concepts from class as evidence','One piece of evidence','Claims without evidence']],['Reasoning',3,['Claim, evidence, conclusion flow','Breaks once','No flow']]],
     model:'', guide:''},
  ];
}
let qOpen = {};   
function qsSum(q){ if (q.mode==='whole') return +q.pts||0; return q.mode==='items' ? q.items.reduce((a,i)=>a+(+i[1]||0),0) : q.crit.reduce((a,c)=>a+(+c[1]||0),0); }
function qsHtml(){
  if (!nf.qs){
    return nf.gen==='running' ? `<div class="gen"><span class="spin"></span><p>${qd('genRun')}</p></div>`
      : `<div class="gen"><i data-lucide="sparkles"></i><p>${nf.q ? '' : qd('genNeed')}</p><button class="act pri" ${nf.q?'':'disabled'} onclick="nfGen()">${qd('genBtn')}</button></div>`;
  }
  const total = nf.qs.reduce((a,q)=>a+(+q.pts||0),0);
  return `<div class="gen" style="margin:0 0 16px"><i data-lucide="sparkles"></i><p><b>${qd('genDone')(nf.qs.length, total)}</b></p></div>`
  + nf.qs.map((q,i)=>{ const sum = qsSum(q), ok = sum===(+q.pts);
    const body = q.mode==='whole'
      ? `<div class="q-whole"><label>${qd('wDesc')} <span class="st muted" style="font-weight:400">${qd('modelOpt')}</span></label><p class="q-guide-d">${qd('wNote')}</p><textarea class="fb-area" style="min-height:64px" placeholder="${qd('wPh')}" oninput="nf.qs[${i}].whole=this.value">${q.whole||''}</textarea></div>`
      : q.mode==='items'
      ? `<table class="rub"><thead><tr><th style="width:22%">${qd('iName')}</th><th class="c" style="width:80px">${qd('iMax')}</th><th>${qd('iDesc')}</th><th style="width:32px"></th></tr></thead><tbody>
          ${q.items.map((it,k)=>`<tr><td><textarea class="ri grow" rows="1" oninput="qsGrow(this); nf.qs[${i}].items[${k}][0]=this.value">${it[0]}</textarea></td><td class="c"><input class="ri pt" value="${it[1]}" oninput="nf.qs[${i}].items[${k}][1]=+this.value||0; qsSync(${i})"></td><td><textarea class="ri grow" rows="1" oninput="qsGrow(this); nf.qs[${i}].items[${k}][2]=this.value">${it[2]}</textarea></td><td><button class="file x" style="border:none;padding:4px" onclick="nf.qs[${i}].items.splice(${k},1); render()"><i data-lucide="x" style="width:16px;height:16px"></i></button></td></tr>`).join('')}
          </tbody></table><button class="act txt" style="margin-top:6px" onclick="nf.qs[${i}].items.push(['',0,'']); render()"><i data-lucide="plus" style="width:16px;height:16px"></i>${qd('addI')}</button>`
      : `<table class="rub"><thead><tr><th style="width:18%">${qd('cName')}</th><th class="c" style="width:70px">${qd('pts')}</th>${qd('lv').map(l=>`<th>${l}</th>`).join('')}</tr></thead><tbody>
          ${q.crit.map((cr,k)=>`<tr><td><textarea class="ri grow" rows="1" oninput="qsGrow(this); nf.qs[${i}].crit[${k}][0]=this.value">${cr[0]}</textarea></td><td class="c"><input class="ri pt" value="${cr[1]}" oninput="nf.qs[${i}].crit[${k}][1]=+this.value||0; qsSync(${i})"></td>${cr[2].map((lv,m)=>`<td><textarea class="ri grow" rows="1" oninput="qsGrow(this); nf.qs[${i}].crit[${k}][2][${m}]=this.value">${lv}</textarea></td>`).join('')}</tr>`).join('')}
          </tbody></table>
          <div style="display:flex;gap:10px;align-items:center;margin-top:6px"><button class="act txt" onclick="nf.qs[${i}].crit.push(['',0,['','','']]); render()"><i data-lucide="plus" style="width:16px;height:16px"></i>${qd('addC')}</button><span style="flex:1"></span><button class="act" onclick="qsReview(${i})"><i data-lucide="sparkles" style="width:15px;height:15px"></i>${q.review==='run' ? qd('reviewing') : qd('review')}</button></div>
          ${q.review && q.review!=='run' ? `<div class="rv-band ${q.review.g}"><span class="rv-g">${qd('rvGrade')[q.review.g]}</span><p>${q.review.t}</p></div>` : ''}`;
    return `<div class="qcard">
      <div class="q-hd"><b>${qd('qNo')(i+1)}</b><span class="q-pts"><input class="ri pt" value="${q.pts}" oninput="nf.qs[${i}].pts=+this.value||0; qsSync(${i})"> ${qd('ptsU')}</span><span style="flex:1"></span><button class="act txt" style="color:#9ea3ad" onclick="nf.qs.splice(${i},1); render()">${qd('delQ')}</button></div>
      <textarea class="ri q-text grow" rows="1" oninput="qsGrow(this); nf.qs[${i}].text=this.value">${q.text}</textarea>
      <div class="fl"><label>${qd('model')} <span class="st muted" style="font-weight:400">${qd('modelOpt')}</span></label><textarea class="fb-area" style="min-height:70px" placeholder="${qd('modelPh')}" oninput="nf.qs[${i}].model=this.value">${q.model}</textarea></div>
      <div class="fl"><label>${qd('how')}</label><div class="rc-row" style="max-width:900px">
        <div class="rc${q.mode==='whole'?' on':''}" onclick="qsMode(${i},'whole')"><b>${qd('mWhole')}</b><small>${qd('mWholeD')}</small></div>
        <div class="rc${q.mode==='items'?' on':''}" onclick="qsMode(${i},'items')"><b>${qd('mItems')}</b><small>${qd('mItemsD')}</small></div>
        <div class="rc${q.mode==='rubric'?' on':''}" onclick="qsMode(${i},'rubric')"><b>${qd('mRubric')}</b><small>${qd('mRubricD')}</small></div></div></div>
      ${body}
      ${q.mode==='whole' ? '' : `<p class="q-sum ${ok?'':'bad'}" id="qsum${i}">${ok ? qd('sumOk')(sum) : qd('sumBad')(sum, q.pts)}</p>`}
      <div class="fl q-guide"><label>${qd('guide')} <span class="st muted" style="font-weight:400">${qd('modelOpt')}</span></label><p class="q-guide-d">${qd('guideNote')}</p><textarea class="fb-area" style="min-height:64px" placeholder="${qd('guidePh')}" oninput="nf.qs[${i}].guide=this.value">${q.guide}</textarea></div>
    </div>`; }).join('')
  + `<div style="display:flex;align-items:center;gap:12px"><button class="act" onclick="nf.qs.push({text:'',pts:10,mode:'whole',whole:'',model:'',guide:''}); render()"><i data-lucide="plus" style="width:15px;height:15px"></i>${qd('addQ')}</button><span style="flex:1"></span><b id="qsTotal">${qd('total')(total)}</b></div>`;
}

function qsGrow(el){ el.style.height = 'auto'; el.style.height = el.scrollHeight + 2 + 'px'; }
function qsGrowAll(){ document.querySelectorAll('textarea.grow').forEach(qsGrow); }
const _renderQ = render;
render = function(){ _renderQ(); if (view==='new') qsGrowAll(); };
function qsSync(i){ const q = nf.qs[i], sum = qsSum(q), ok = sum===(+q.pts), el = document.getElementById('qsum'+i);
  if (el){ el.className = 'q-sum'+(ok?'':' bad'); el.textContent = ok ? qd('sumOk')(sum) : qd('sumBad')(sum, q.pts); }
  const t = document.getElementById('qsTotal'); if (t) t.textContent = qd('total')(nf.qs.reduce((a,x)=>a+(+x.pts||0),0)); }
function qsMode(i, m){ const q = nf.qs[i]; if (q.mode===m) return; q.mode = m;
  if (m==='rubric' && !q.crit) q.crit = (q.items||[['', +q.pts||0, q.whole||'']]).map(it=>[it[0], it[1], [it[2]||'','','']]);
  if (m==='items' && !q.items) q.items = q.crit ? q.crit.map(c=>[c[0], c[1], c[2][0]||'']) : [['', +q.pts||0, q.whole||'']];
  q.review = null; render(); }
function qsReview(i){ const q = nf.qs[i]; q.review = 'run'; render();
  setTimeout(()=>{ const amb = q.crit.find(c=>/충분히|대체로|다소|fully|mostly|somewhat/i.test(c[2].join(' ')));
    q.review = amb ? {g:'fix', t:qd('rvAmb')(amb[0])} : {g:'ok', t:qd('rvFine')}; render(); }, 1000); }


function qsView(e){
  const qs = e.qs || qsSample(), open = qOpen[e.id];
  const btn = `<button class="act" onclick="qOpen[${e.id}]=!qOpen[${e.id}]; render()"><i data-lucide="list-checks" style="width:15px;height:15px"></i>${open ? qd('viewClose') : qd('viewBtn')}</button>`;
  if (!open) return {btn, panel:''};
  const panel = `<div class="box qview">${qs.map((q,i)=>`<div class="qv-item"><div class="q-hd"><b>${qd('qNo')(i+1)}</b><span class="chip${q.mode==='rubric'?' blue':''}">${qd(q.mode==='whole'?'mWhole':q.mode==='items'?'mItems':'mRubric')}</span><span class="st muted">${q.pts}${qd('ptsU')}</span></div>
      <p class="qv-text">${q.text}</p>
      <p class="qv-line">${q.mode==='whole' ? (q.whole || qd('wNote')) : q.mode==='items' ? q.items.map(it=>`${it[0]} ${it[1]}`).join(' · ') : q.crit.map(c=>`${c[0]} ${c[1]}`).join(' · ')}</p>
      <p class="qv-sub"><b>${qd('model')}</b> ${q.model || `<span class="st muted">${qd('noModel')}</span>`}</p>
      <p class="qv-sub"><b>${qd('guide')}</b> ${q.guide || `<span class="st muted">${qd('noGuide')}</span>`}</p></div>`).join('')}</div>`;
  return {btn, panel};
}
