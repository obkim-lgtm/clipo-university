
const WK = {
  ko:{ h:'이번 주', days:['월','화','수','목','금','토','일'], today:'오늘', left:n=>`${n}일 남음`, none:'이번 주 마감이 없어요', todayDue:'오늘 마감', subOf:(a,b)=>`제출 ${a}/${b}` },
  en:{ h:'This week', days:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], today:'Today', left:n=>`${n} days left`, none:'Nothing due this week', todayDue:'Due today', subOf:(a,b)=>`${a}/${b} submitted` }
};
const WK_TODAY = 21, WK_MON = 19;   
const wk = k => WK[lang][k];
const IS_PROF = typeof evOf === 'function';

function weekItems(){
  const out = [];
  if (IS_PROF){
    COURSES.filter(c=>c.sem==='s2' && !c.arch).forEach(c=>evOf(c.id).forEach(e=>{
      if (e.way!=='file' || !/^10\./.test(e.due)) return; const dd = +e.due.slice(3);
      if (dd>=WK_MON && dd<=WK_MON+6) out.push({dd, t:evName(e), c:cName(c), meta:wk('subOf')(e.sub, c.n), go:`go('eval','${c.id}',${e.id})`}); }));
  } else {
    allCourses().filter(c=>c.sem==='s2').forEach(c=>c.ev.forEach((e,i)=>{
      if (e.st!=='todo' || e.closed || e.way==='scan' || !/^10\./.test(e.d||'')) return; const dd = +e.d.slice(3);
      if (dd>=WK_MON && dd<=WK_MON+6) out.push({dd, t:L(e), c:cName(c), meta:'', go:`go('submit','${c.id}',${i+1})`}); }));
  }
  return out.sort((a,b)=>a.dd-b.dd);
}
function renderWeek(){
  const box = document.getElementById('weekBox'); if (!box) return;
  const items = weekItems(), dueDays = new Set(items.map(x=>x.dd));
  const strip = wk('days').map((dn,k)=>{ const dd = WK_MON+k, cls = ['wk-day', dd===WK_TODAY?'today':'', dd<WK_TODAY?'past':'', dueDays.has(dd)?'due':''].join(' ');
    return `<div class="${cls}"><small>${dn}</small><b>${dd}</b><i></i></div>`; }).join('');
  const list = items.length ? items.map(x=>{ const left = x.dd - WK_TODAY;
    return `<div class="wk-item" onclick="${x.go}"><span class="wk-date"><b>${x.dd}</b><small>${wk('days')[(x.dd-WK_MON)]}</small></span><span class="wk-txt"><b>${x.t}</b><small>${x.c}${x.meta?' · '+x.meta:''}</small></span><span class="wk-left${left===0?' hot':''}">${left===0 ? wk('today') : wk('left')(left)}</span></div>`; }).join('')
    : `<p class="wk-none">${wk('none')}</p>`;
  box.innerHTML = `<div class="wk-strip">${strip}</div><div class="wk-list">${list}</div>`;
  const h = document.getElementById('weekH'); if (h) h.textContent = wk('h');
}

function decorateTodo(){
  document.querySelectorAll('#todoGrid .ti').forEach(row=>{
    if (row.querySelector('.ti-ico')) return;
    const btn = row.querySelector('.go'), txt = (btn?.textContent||'').trim(), sub = row.querySelector('small');
    let ic = 'clipboard-check', tone = '';
    if (/제출하기|Submit$/.test(txt)) ic = 'file-up';
    else if (/피드백|feedback/i.test(txt)) { ic = 'message-square-text'; tone = ' green'; }
    else if (/공개|Release/.test(txt)) { ic = 'send'; tone = ' green'; }
    else if (/AI/.test(txt)) ic = 'sparkles';
    else if (/제출 현황|Submissions/.test(txt)) ic = 'inbox';
    row.insertAdjacentHTML('afterbegin', `<span class="ti-ico${tone}"><i data-lucide="${ic}"></i></span>`);
    if (sub && (/10\.21 마감|10월 21일|Due Oct 21|Due 10\.21/.test(sub.textContent))) sub.insertAdjacentHTML('beforeend', ` <span class="hot-chip">${wk('todayDue')}</span>`);
  });
}
const _renderW = render;
render = function(){ _renderW(); if (view==='home'){ renderWeek(); decorateTodo(); lucide.createIcons(); } };
if (view==='home') render();
