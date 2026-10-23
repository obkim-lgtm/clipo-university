
const QA = {
  ko:{ t:'문항 분석', d:(tot,w)=>`확인한 점수로 문항마다 얼마나 맞혔고, 잘하는 학생과 어려워하는 학생을 얼마나 가려냈는지 봐요. 만점 ${tot}점 · 성적 반영 ${w}%.`,
    th:['문항','배점','득점률','만점','0점','변별도',''], ppl:n=>`${n}명`, v:{good:'잘 갈림', mid:'보통', low:'다시 볼 문항'},
    dHelp:'변별도 = 점수 위 27% 학생과 아래 27% 학생의 득점률 차이. 클수록 잘하는 학생과 어려워하는 학생을 잘 가려낸 문항이에요.',
    items:'항목별 득점률', memoT:'다음 출제에 남길 메모', memoD:'문항 분석을 보고 다음 시험을 만들 때 참고할 것을 적어 둬요.', save:'메모 저장', saved:'출제 메모를 저장했어요',
    memo:(rows)=>rows.map(r=> r.v==='low' ? `문항 ${r.k}: 득점률 ${r.rate}% · 만점 ${r.full}명 · 변별도 ${r.D} → 잘하는 학생과 어려워하는 학생이 갈리지 않았어요. 다음엔 적용이나 판단을 묻는 형태로 바꿔 보기` : r.v==='good' ? `문항 ${r.k}: 변별도 ${r.D} · 잘 갈렸어요 → 같은 형식(사례 주고 판단 · 근거 쓰기) 유지` : `문항 ${r.k}: 변별도 ${r.D} → 채점 항목 중 득점률이 낮은 항목을 다시 보기`).join('\n'),
    conv:(avg,w)=>`환산 평균 ${avg} / ${w}` },
  en:{ t:'Item analysis', d:(tot,w)=>`From reviewed scores: how well each question was answered and how well it separated stronger from weaker students. Max ${tot} · weighs ${w}% of the grade.`,
    th:['Question','Points','Score rate','Full','Zero','Discrimination',''], ppl:n=>`${n}`, v:{good:'Separates well', mid:'Fair', low:'Revisit'},
    dHelp:'Discrimination = score-rate gap between the top 27% and bottom 27% of students. Higher means the question separates them better.',
    items:'Rate by item', memoT:'Notes for the next exam', memoD:'Note what to keep or change when you write the next exam.', save:'Save notes', saved:'Notes saved',
    memo:(rows)=>rows.map(r=> r.v==='low' ? `Q${r.k}: rate ${r.rate}% · ${r.full} full marks · D ${r.D} → did not separate students. Try asking for application or judgment next time` : r.v==='good' ? `Q${r.k}: D ${r.D}, separates well → keep this format` : `Q${r.k}: D ${r.D} → look again at the lowest-rate items`).join('\n'),
    conv:(avg,w)=>`Converted avg ${avg} / ${w}` }
};
const qa = k => QA[lang][k];
function qaCompute(c, e){
  const qs = e.qs || (typeof qsSample==='function' ? qsSample() : []);
  const l = subOf(c.id, e.id).filter(s=>s.at && s.rev);
  const per = l.map((s,i)=>{ const base = (s.fscore ?? s.pscore ?? s.score), r = base/30;
    return qs.map((q,k)=>{ const p = +q.pts||10;
      const v = k===0 ? Math.round(r*p)+2 : k===1 ? Math.round(r*p + (((i+k)%3)-1)) : Math.round((r-0.62)/0.38*p);
      return Math.max(0, Math.min(p, v)); }); });
  const tot = per.map(a=>a.reduce((x,y)=>x+y,0)), order = tot.map((t,i)=>i).sort((a,b)=>tot[b]-tot[a]);
  const g = Math.max(1, Math.round(l.length*0.27)), top = order.slice(0,g), bot = order.slice(-g);
  const rows = qs.map((q,k)=>{ const p = +q.pts||10, col = per.map(a=>a[k]);
    const mean = col.reduce((a,b)=>a+b,0)/Math.max(1,col.length);
    const D = (top.reduce((a,i)=>a+per[i][k],0)/g - bot.reduce((a,i)=>a+per[i][k],0)/g)/p;
    const items = q.mode==='items' && q.items ? q.items.map((it,m)=>[it[0], Math.max(0, Math.min(100, Math.round(mean/p*100 + (m===0?6:m===1?-9:3))))])
                : q.mode==='rubric' && q.crit ? q.crit.map((cr,m)=>[cr[0], Math.max(0, Math.min(100, Math.round(mean/p*100 + (m===1?-12:5))))]) : [];
    return {k:k+1, p, rate:Math.round(mean/p*100), full:col.filter(v=>v===p).length, zero:col.filter(v=>v===0).length, D:Math.round(D*100)/100, v: D>=0.4?'good':D>=0.2?'mid':'low', items}; });
  return {rows, n:l.length, total:qs.reduce((a,q)=>a+(+q.pts||0),0), avg: tot.length ? tot.reduce((a,b)=>a+b,0)/tot.length : 0};
}
function qaBox(c, e){
  const A = qaCompute(c, e); if (!A.n) return '';
  const w = e.weight || 20, conv = (A.avg / A.total * w).toFixed(1);
  if (e.qaMemo===undefined) e.qaMemo = qa('memo')(A.rows);
  return `<div class="box qa"><div class="ch-row" style="align-items:flex-start"><div><p class="box-t">${qa('t')}</p><p class="box-d" style="margin:0">${qa('d')(A.total, w)}</p></div><span class="chip">${qa('conv')(conv, w)}</span></div>
    <div class="tbl-wrap" style="margin-top:14px"><table class="tbl"><thead><tr>${qa('th').map((h,i)=>`<th${i===0?' class="l"':''}>${h}</th>`).join('')}</tr></thead><tbody>
    ${A.rows.map(r=>`<tr><td class="l"><b>${qd('qNo')(r.k)}</b>${r.items.length ? `<div class="qa-items">${r.items.map(([nm,rt])=>`<span>${nm} <b>${rt}%</b></span>`).join('')}</div>` : ''}</td><td>${r.p}</td>
      <td><span class="qa-bar"><i style="width:${r.rate}%"></i></span>${r.rate}%</td><td>${qa('ppl')(r.full)}</td><td>${qa('ppl')(r.zero)}</td><td><b>${r.D.toFixed(2)}</b></td>
      <td><span class="qa-v ${r.v}">${qa('v')[r.v]}</span></td></tr>`).join('')}</tbody></table></div>
    <p class="sec-desc" style="margin:10px 0 0">${qa('dHelp')}</p>
    <div class="qa-memo"><p class="box-t" style="font-size:15px;margin:0 0 4px">${qa('memoT')}</p><p class="box-d" style="margin:0 0 8px">${qa('memoD')}</p>
      <textarea class="fb-area" style="min-height:176px" oninput="evById('${c.id}',${e.id}).qaMemo=this.value">${e.qaMemo}</textarea>
      <div class="foot-act" style="padding:10px 0 0"><button class="act" onclick="toast(qa('saved'))">${qa('save')}</button></div></div></div>`;
}

const _rrQA = renderReports;
renderReports = function(){
  const h = _rrQA(); if (!repCourse) return h;
  const c = cById(repCourse), e = evOf(c.id).find(x=>x.id===repEval);
  return e ? h + qaBox(c, e) : h;
};
