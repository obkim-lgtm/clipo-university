
const SRC = {
  ko:{ label:'출처', opt:'(선택)', none:'참고 자료를 올리면 모범답안이 나온 자료와 쪽을 고를 수 있어요.', pick:'자료 고르기', pagePh:'쪽', note:'학생 피드백의 모범답안 옆에 같이 보여요. 학생이 다시 볼 곳을 알 수 있어요.', page:p=>`${p}쪽` },
  en:{ label:'Source', opt:'(optional)', none:'Upload materials to pick where the model answer comes from.', pick:'Pick a file', pagePh:'p.', note:'Shown next to the model answer in student feedback, so students know where to review.', page:p=>`p. ${p}` }
};
const src = k => SRC[lang][k];
function srcName(f){ return f.replace(/\.pdf$/i, '').replace(/_/g, ' '); }
function srcTag(s){ if (!s || !s.file) return ''; return ` <span class="src-tag"><i data-lucide="book-open"></i>${srcName(s.file)}${s.page ? ` · ${src('page')(s.page)}` : ''}</span>`; }


const _qsSampleSrc = qsSample;
qsSample = function(){ const qs = _qsSampleSrc(); if (qs[0] && qs[0].model) qs[0].src = {file: lang==='ko' ? '3주차_강의자료.pdf' : 'week3_slides.pdf', page:'18'}; return qs; };


const _qsHtmlSrc = qsHtml;
qsHtml = function(){
  let h = _qsHtmlSrc(); if (!nf.qs) return h;
  return h.replace(/(oninput="nf\.qs\[(\d+)\]\.model=this\.value">[\s\S]*?<\/textarea><\/div>)/g, (m0, all, i)=>{
    const q = nf.qs[+i], s = q.src && nf.lec.includes(q.src.file) ? q.src : null;
    const row = !nf.lec.length ? `<p class="src-none">${src('none')}</p>`
      : `<div class="src-row"><select class="sel" onchange="srcSet(${i},'file',this.value)"><option value="">${src('pick')}</option>${nf.lec.map(f=>`<option value="${f}" ${s && s.file===f ? 'selected' : ''}>${srcName(f)}</option>`).join('')}</select>
          <input class="ri pt" style="width:72px" placeholder="${src('pagePh')}" value="${s ? s.page||'' : ''}" oninput="srcSet(${i},'page',this.value)"><span class="st muted">${src('note')}</span></div>`;
    return `${all}<div class="fl src-fl"><label>${src('label')} <span class="st muted" style="font-weight:400">${src('opt')}</span></label>${row}</div>`;
  });
};
function srcSet(i, k, v){ const q = nf.qs[i]; q.src = q.src && nf.lec.includes(q.src.file) ? q.src : {file:'', page:''}; q.src[k] = v; }


const _qsViewSrc = qsView;
qsView = function(e){ const r = _qsViewSrc(e); if (!r.panel) return r; const qs = e.qs || qsSample();
  qs.forEach(q=>{ if (q.src && q.model) r.panel = r.panel.replace(`<b>${qd('model')}</b> ${q.model}</p>`, `<b>${qd('model')}</b> ${q.model}${srcTag(q.src)}</p>`); });
  return r; };


const _renderFinalSrc = renderFinal;
renderFinal = function(){ let h = _renderFinalSrc(); const e = evById(rosterId, evalId);
  (e.qs||[]).forEach(q=>{ if (q.src && q.model) h = h.replace(`${q.model}</span></p>`, `${q.model}${srcTag(q.src)}</span></p>`); });
  return h; };


const _renderFbMakeSrc = renderFbMake;
renderFbMake = function(){ let h = _renderFbMakeSrc(); const e = evById(rosterId, evalId), q0 = (e.qs||[])[0];
  if (q0 && q0.src){ const m0 = fm('models')[0]; if (m0) h = h.replace(`${m0}</p>`, `${m0}${srcTag(q0.src)}</p>`); }
  return h; };
