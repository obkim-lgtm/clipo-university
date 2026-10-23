
const MX = {
  ko:{ sub:'소문항 정답률', perQ:'문항별 평균', kind:{blank:'빈칸', ox:'O/X', choice:'고르기', essay:'서술', long:'논술'},
    memoEasy:(k,s,r)=>`문항 ${k} ${s}: 정답률 ${r}% → 학생 사이 차이가 안 나요. 다음엔 빼거나 헷갈리는 보기를 넣어 보기`,
    memoHard:(k,s,r)=>`문항 ${k} ${s}: 정답률 ${r}% → 수업에서 다시 짚을 내용인지 먼저 보기`,
    memoKind:(k,t,D,v,top)=> v==='good' ? `문항 ${k}(${t}): 변별도 ${D} · 잘 갈렸어요 → 이 유형 유지` : `문항 ${k}(${t}): 변별도 ${D} → 정답률이 가장 높은 소문항 ${top}부터 바꿔 보기` },
  en:{ sub:'Rate by sub-item', perQ:'Average by question', kind:{blank:'Fill-in', ox:'True/False', choice:'Multiple choice', essay:'Short essay', long:'Essay'},
    memoEasy:(k,s,r)=>`Q${k} ${s}: ${r}% correct → nearly everyone. Drop it or add a tempting distractor`,
    memoHard:(k,s,r)=>`Q${k} ${s}: ${r}% correct → check whether it needs reteaching first`,
    memoKind:(k,t,D,v,top)=> v==='good' ? `Q${k} (${t}): D ${D}, separates well → keep this type` : `Q${k} (${t}): D ${D} → start with the easiest sub-item ${top}` }
};
const mx = k => MX[lang][k];


function mxSample(){
  const ko = lang==='ko';
  return [
    {kind:'blank', text: ko?'빈칸에 알맞은 말을 쓰시오. (각 1점)':'Fill in the blanks. (1 pt each)', pts:4, mode:'items',
     items: ko?[['(1) 평가가 재려는 것을 재는 정도',1,'정답: 타당도'],['(2) 여러 번 재도 같은 결과가 나오는 정도',1,'정답: 신뢰도'],['(3) 학습 중에 피드백을 주려는 평가',1,'정답: 형성평가'],['(4) 점수 위아래 27% 득점률 차이',1,'정답: 변별도']]
             :[['(1) Measures what it intends to',1,'Answer: validity'],['(2) Same result when repeated',1,'Answer: reliability'],['(3) Gives feedback during learning',1,'Answer: formative'],['(4) Top vs bottom 27% gap',1,'Answer: discrimination']],
     diff:[0.03, 0.3, 0.2, 0.62], model:'', guide: ko?'철자 · 띄어쓰기가 달라도 같은 말이면 정답':'Accept spelling variants'},
    {kind:'ox', text: ko?'맞으면 O, 틀리면 X를 쓰시오. (각 1점)':'Write T or F. (1 pt each)', pts:4, mode:'items',
     items: ko?[['(1) 신뢰도가 높으면 타당도도 반드시 높다',1,'정답: X'],['(2) 수준표는 기준마다 수준을 나눈다',1,'정답: O'],['(3) 변별도가 0.1이면 잘 갈린 문항이다',1,'정답: X'],['(4) 형성평가는 성적에 넣을 수 없다',1,'정답: X']]
             :[['(1) High reliability means high validity',1,'Answer: F'],['(2) A rubric sets levels per criterion',1,'Answer: T'],['(3) D = 0.1 separates well',1,'Answer: F'],['(4) Formative results can\'t count',1,'Answer: F']],
     diff:[0.5, 0.02, 0.4, 0.72], model:'', guide:''},
    {kind:'choice', text: ko?'다음 중 결과 타당도를 묻는 질문으로 알맞은 것은? (2점)':'Which question asks about consequential validity? (2 pts)', pts:2, mode:'whole',
     whole: ko?'정답 ③. 다른 번호는 0점':'Answer ③. Others 0', diff:[0.3], model: ko?'③ 이 평가가 학생의 공부 방식을 어떻게 바꾸는가?':'③ How does this test change how students study?', guide:''},
    {kind:'essay', text: ko?'제시된 수행평가 설계의 문제점을 두 가지 쓰시오.':'Identify two problems in the given design.', pts:10, mode:'items',
     items: ko?[['문제점 1',5,'평가 목표와 과제 유형의 불일치'],['문제점 2',5,'채점기준이 결과물만 보고 과정을 보지 않음']]:[['Problem 1',5,'Mismatch of goal and task type'],['Problem 2',5,'Rubric ignores process']], model:'', guide:''},
    {kind:'long', text: ko?'개선안을 제시하고 그 근거를 논술하시오.':'Propose improvements and argue for them.', pts:10, mode:'rubric',
     crit: ko?[['논제 이해',3,['개선 대상을 정확히 짚음','개선 대상을 대체로 짚음','개선 대상을 놓침']],['근거',4,['수업 자료의 개념을 근거로 2개 이상 듦','근거를 1개 듦','근거 없이 주장만 함']],['논리 전개',3,['주장 · 근거 · 결론이 한 흐름','흐름이 한 군데 끊김','흐름이 없음']]]
             :[['Understanding',3,['Pinpoints it','Mostly','Misses it']],['Evidence',4,['Two or more class concepts','One','None']],['Reasoning',3,['Claim, evidence, conclusion flow','Breaks once','No flow']]],
     model:'', guide:''},
  ];
}
{ const e = evById('c1', 3); if (e && !e.qs) e.qs = mxSample(); }


function mxRight(r, d, i, m){ const noise = (((i*7 + m*13) % 11) / 11 - 0.5) * 1.4; return r + noise >= d; }

const _qaCompMX = qaCompute;
qaCompute = function(c, e){
  const qs = e.qs || [];
  if (!qs.some(q=>q.diff)) return _qaCompMX(c, e);
  const l = subOf(c.id, e.id).filter(s=>s.at && s.rev);
  const raw = l.map(s=>(s.fscore ?? s.pscore ?? s.score)/30), rk = raw.map((r,i)=>i).sort((a,b)=>raw[a]-raw[b]);
  const abil = raw.map((r,i)=>rk.indexOf(i)/Math.max(1,raw.length-1));   
  const per = abil.map((r,i)=>qs.map((q,k)=>{ const p = +q.pts||10;
    if (q.diff){ const pts = q.mode==='items' ? q.items.map(it=>+it[1]||1) : [p]; return q.diff.reduce((a,d,m)=>a + (mxRight(r, d, i, m+k*4) ? pts[m] : 0), 0); }
    return Math.max(0, Math.min(p, Math.round(raw[i]*p + (((i+k)%3)-1)))); }));
  const tot = per.map(a=>a.reduce((x,y)=>x+y,0)), order = tot.map((t,i)=>i).sort((a,b)=>tot[b]-tot[a]);
  const g = Math.max(1, Math.round(l.length*0.27)), top = order.slice(0,g), bot = order.slice(-g);
  const rows = qs.map((q,k)=>{ const p = +q.pts||10, col = per.map(a=>a[k]);
    const mean = col.reduce((a,b)=>a+b,0)/Math.max(1,col.length);
    const D = (top.reduce((a,i)=>a+per[i][k],0)/g - bot.reduce((a,i)=>a+per[i][k],0)/g)/p;
    let items = [], subs = false;
    if (q.diff && q.mode==='items'){ subs = true; items = q.items.map((it,m)=>[it[0].replace(/^(\(\d\)).*/, '$1'), Math.round(abil.filter((r,i)=>mxRight(r, q.diff[m], i, m+k*4)).length / Math.max(1,abil.length) * 100), it[0]]); }
    else if (q.mode==='items' && q.items) items = q.items.map((it,m)=>[it[0], Math.max(0, Math.min(100, Math.round(mean/p*100 + (m===0?6:-9))))]);
    else if (q.mode==='rubric' && q.crit) items = q.crit.map((cr,m)=>[cr[0], Math.max(0, Math.min(100, Math.round(mean/p*100 + (m===1?-12:5))))]);
    return {k:k+1, p, kind:q.kind, rate:Math.round(mean/p*100), full:col.filter(v=>v===p).length, zero:col.filter(v=>v===0).length, D:Math.round(D*100)/100, v: D>=0.4?'good':D>=0.2?'mid':'low', items, subs}; });
  return {rows, n:l.length, total:qs.reduce((a,q)=>a+(+q.pts||0),0), avg: tot.length ? tot.reduce((a,b)=>a+b,0)/tot.length : 0};
};


const _qaBoxMX = qaBox;
qaBox = function(c, e){
  if (!(e.qs||[]).some(q=>q.diff)) return _qaBoxMX(c, e);
  const A = qaCompute(c, e);
  if (e.qaMemo===undefined){ const extra = [];
    A.rows.forEach(r=>r.subs && r.items.forEach(([s,rt])=>{ if (rt>=90) extra.push(mx('memoEasy')(r.k, s, rt)); else if (rt<40) extra.push(mx('memoHard')(r.k, s, rt)); }));
    const base = A.rows.map(r=> r.kind && r.kind!=='essay' && r.kind!=='long' && r.v!=='low' ? mx('memoKind')(r.k, mx('kind')[r.kind], r.D, r.v, (r.items.slice().sort((a,b)=>b[1]-a[1])[0]||[])[0]) : qa('memo')([r]));
    e.qaMemo = [...base, ...extra].join('\n'); }
  let h = _qaBoxMX(c, e);
  A.rows.forEach(r=>{
    const lbl = `<b>${qd('qNo')(r.k)}</b>`, kind = r.kind ? ` <span class="chip">${mx('kind')[r.kind]}</span>` : '';
    if (r.subs){
      const old = `${lbl}<div class="qa-items">${r.items.map(([nm,rt])=>`<span>${nm} <b>${rt}%</b></span>`).join('')}</div>`;
      const neu = `${lbl}${kind}<div class="qa-items"><span class="qa-sub-t">${mx('sub')}</span>${r.items.map(([nm,rt,full])=>`<span title="${full}" class="${rt>=90?'qa-easy':rt<40?'qa-hard':''}">${nm} <b>${rt}%</b></span>`).join('')}</div>`;
      h = h.replace(old, neu);
    } else h = h.replace(new RegExp(`(<td class="l">)${lbl.replace(/[()]/g,'\\$&')}`), `$1${lbl}${kind}`);
  });
  return h;
};


const _rrMX = renderReports;
renderReports = function(){
  const h = _rrMX(); if (!repCourse) return h;
  const c = cById(repCourse), e = evOf(c.id).find(x=>x.id===repEval);
  if (!e) return h;
  if (!e.qs) crQs(e);   
  const A = qaCompute(c, e); if (!A.n) return h;
  const rows = A.rows.map(r=>{ const avg = r.rate*r.p/100;
    return `<div class="hbar"><span class="hn">${qd('qNo')(r.k)}${r.kind ? ` <span class="chip">${mx('kind')[r.kind]}</span>` : ''}</span><span class="ht"><i style="width:${r.rate}%"></i></span><span class="hs">${avg.toFixed(1)} / ${r.p}</span></div>`; }).join('');
  return h.replace(/<div class="box"><p class="box-t">[^<]*<\/p>(?:<div class="hbar">[\s\S]*?<\/span><\/div>)+<\/div>/, `<div class="box"><p class="box-t">${mx('perQ')}</p>${rows}</div>`);
};
