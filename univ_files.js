
const FD = {
  ko:{ h:'학생별 파일 올리기', sub:'학생마다 스캔한 파일을 한 번에 올리면 한 명씩 연결하지 않아도 돼요. 파일 이름의 학번으로 학생을 찾아 연결해요.',
    dropT:'파일을 끌어다 놓거나 눌러서 골라요', dropD:'PDF·이미지 여러 개 · 파일 이름에 학번을 넣으면 자동으로 연결돼요 (예: 202312001_강하늘.pdf)',
    procT:n=>`파일 ${n}개를 읽는 중이에요`, procD:'파일 이름에서 학번을 찾고 있어요',
    sumD:n=>`파일 ${n}개를 올렸어요`, warn:'확인 필요', ok:'자동 연결됨', none:'파일이 없는 학생',
    strip:'학번으로 학생 한 명을 찾지 못한 파일이에요. 열어 보고 누구 것인지 고르거나, 이 평가 답안이 아니면 「이 파일은 올리지 않음」을 골라요.',
    noneD:'올리면 미제출로 남아요. 나중에 평가 상세에서 「대신 올리기」로 넣을 수 있어요.',
    pick:'학생 고르기', skip:'이 파일은 올리지 않음', open:'열어 보기', close:'닫기', unlink:'연결 풀기',
    cnt:n=>`${n}개`, ppl:n=>`${n}명`, left:n=>`확인이 필요한 파일 ${n}개가 남았어요`, allSet:'모든 파일을 확인했어요',
    reset:'다시 고르기', go:n=>`${n}명 답안 올리기`, ask:(k,n)=>`확인이 필요한 파일 ${k}개를 빼고 ${n}명 답안을 올릴까요?`,
    resetAsk:'고른 파일과 연결한 내용이 모두 사라져요. 처음부터 다시 고를까요?', leaveAsk:'올리지 않고 나가면 고른 파일이 사라져요. 나갈까요?',
    done:n=>`${n}명 답안을 올렸어요`, back:'평가로 돌아가기' },
  en:{ h:'Upload files per student', sub:'Upload every student\'s scan at once instead of linking them one by one. Students are matched by the student ID in the file name.',
    dropT:'Drag files here or click to choose', dropD:'Several PDFs or images · put the student ID in the file name to link automatically (e.g. 202312001_Kang.pdf)',
    procT:n=>`Reading ${n} files`, procD:'Looking for student IDs in file names',
    sumD:n=>`${n} files uploaded`, warn:'Needs a check', ok:'Linked automatically', none:'Students with no file',
    strip:'We could not match these files to exactly one student by ID. Open each and pick the student, or choose "Don\'t upload this file" if it is not for this evaluation.',
    noneD:'They stay as not submitted. You can add their answers later with "Upload for student" on the evaluation page.',
    pick:'Pick a student', skip:'Don\'t upload this file', open:'Open', close:'Close', unlink:'Unlink',
    cnt:n=>`${n}`, ppl:n=>`${n}`, left:n=>`${n} files still need a check`, allSet:'All files checked',
    reset:'Choose again', go:n=>`Upload answers for ${n}`, ask:(k,n)=>`Leave out the ${k} unchecked files and upload answers for ${n}?`,
    resetAsk:'Your chosen files and links will be cleared. Start over?', leaveAsk:'Leaving now discards the chosen files. Leave?',
    done:n=>`Uploaded answers for ${n}`, back:'Back to evaluation' }
};
const fd = k => FD[lang][k];
let FL = null;   

function flStart(){
  const e = evById(rosterId, evalId), stu = rosterOf(rosterId), l = subOf(rosterId, evalId);
  let files;
  if (e.sub){
    
    const miss = stu.map((s,i)=>i).filter(i=>!l[i].at).slice(0, 2);
    files = miss.map((i,k)=>({f:`scan_00${9+k*22}.pdf`, own:i, to:''}));
  } else {
    
    const odd = {12:'scan_0009.pdf', 20:'scan_0031.pdf', 33:'기말고사 답안 (1).pdf'};
    files = stu.map((s,i)=>i).filter(i=>i!==4 && i!==7).map(i=>({f: odd[i] || `${stu[i].sid}_${lang==='ko'?stu[i].ko:stu[i].en}.pdf`, own:i, to: odd[i] ? '' : stu[i].sid, auto: !odd[i]}));
  }
  FL = {stage:'proc', files, okOpen:false};
  render();
  setTimeout(()=>{ if (FL){ FL.stage = 'match'; if (view==='files') render(); } }, 1400);
}
function flTaken(except){ return new Set(FL.files.filter((x,k)=>k!==except && x.to && x.to!=='__skip__').map(x=>x.to)); }
function renderFiles(){
  const c = cById(rosterId), e = evById(c.id, evalId), stu = rosterOf(c.id), l = subOf(c.id, evalId);
  const head = `<div class="ch"><div class="crumb"><a href="#" onclick="flLeave();return false">${evName(e)}</a><i data-lucide="chevron-right" style="width:16px;height:16px"></i><span>${fd('h')}</span></div>
    <h1>${fd('h')}</h1><p class="page-sub" style="margin-bottom:0">${fd('sub')}</p></div>`;
  if (!FL || FL.stage==='drop'){
    return head + `<div class="fl-dz" onclick="flStart()"><span class="fl-dz-ic"><i data-lucide="files"></i></span><b>${fd('dropT')}</b><p>${fd('dropD')}</p></div>
      <div class="foot-act"><button class="btn-sec" onclick="flLeave()">${fd('back')}</button></div>`;
  }
  if (FL.stage==='proc'){
    return head + `<div class="fl-proc"><span class="spin"></span><div><b>${fd('procT')(FL.files.length)}</b><small>${fd('procD')}</small></div></div>`;
  }
  const nm = s => lang==='ko'?s.ko:s.en, bySid = sid => stu.find(s=>s.sid===sid);
  const warn = FL.files.map((x,k)=>({x,k})).filter(o=>!o.x.auto);
  const ok = FL.files.map((x,k)=>({x,k})).filter(o=>o.x.auto);
  const unset = warn.filter(o=>!o.x.to).length;
  const linked = FL.files.filter(x=>x.to && x.to!=='__skip__').length;
  
  const taken = flTaken(-1), noFile = stu.filter((s,i)=>!l[i].at && !taken.has(s.sid));
  const peek = x => x.open ? `<div class="fl-peek">${typeof spSheet==='function' ? spSheet({i:x.own, k:0, of:3}, stu, true) : ''}</div>` : '';
  const free = l.map((s,i)=>i).filter(i=>!l[i].at).map(i=>stu[i]);
  const row = ({x,k}) => {
    const tk = flTaken(k), opts = free.filter(s=>!tk.has(s.sid) || s.sid===x.to);
    const cls = x.to==='__skip__' ? ' skip' : x.to ? ' done' : '';
    return `<div class="fl-row${cls}"><div class="fl-file"><span class="fl-fic"><i data-lucide="file-text"></i></span><span class="fl-fn">${x.f}</span><button class="act txt" onclick="FL.files[${k}].open=!FL.files[${k}].open; render()">${x.open ? fd('close') : fd('open')}</button></div>
      <span class="fl-arrow"><i data-lucide="arrow-right"></i></span>
      <select class="fl-pick${x.to?'':' unset'}" onchange="FL.files[${k}].to=this.value; render()"><option value="">${fd('pick')}</option>${opts.map(s=>`<option value="${s.sid}"${s.sid===x.to?' selected':''}>${s.sid} ${nm(s)}</option>`).join('')}<option value="__skip__"${x.to==='__skip__'?' selected':''}>${fd('skip')}</option></select></div>${peek(x)}`;
  };
  const okRow = ({x,k}) => { const s = bySid(x.to);
    return `<div class="fl-row done"><div class="fl-file"><span class="fl-fic"><i data-lucide="file-text"></i></span><span class="fl-fn">${x.f}</span></div>
      <span class="fl-arrow"><i data-lucide="arrow-right"></i></span>
      <span class="fl-stu"><b>${s.sid}</b> ${nm(s)}<button class="fl-x" title="${fd('unlink')}" aria-label="${fd('unlink')}" onclick="FL.files[${k}].auto=false; FL.files[${k}].to=''; render()"><i data-lucide="x"></i></button></span></div>`; };
  const sec = (cls, ic, t, n, body, fold) => `<div class="fl-sec${fold && !FL.okOpen ? ' fold' : ''}"><div class="fl-sec-h ${cls}"${fold ? ` onclick="FL.okOpen=!FL.okOpen; render()"` : ''}><i data-lucide="${ic}"></i><b>${t}</b><span>${n}</span>${fold ? `<span class="fl-chev"><i data-lucide="chevron-down"></i></span>` : ''}</div><div class="fl-sec-b">${body}</div></div>`;
  return head + `
    <div class="fl-sum"><span class="fl-sum-ic"><i data-lucide="folder-check"></i></span><div><b>${evName(e)} · ${cName(c)}</b><small>${fd('sumD')(FL.files.length)}</small></div></div>
    ${warn.length ? sec('warn', 'alert-triangle', fd('warn'), fd('cnt')(warn.length), `<p class="fl-strip"><i data-lucide="info"></i><span>${fd('strip')}</span></p>${warn.map(row).join('')}`) : ''}
    ${ok.length ? sec('ok', 'check-circle-2', fd('ok'), fd('cnt')(ok.length), ok.map(okRow).join(''), true) : ''}
    ${noFile.length ? sec('gray', 'user-x', fd('none'), fd('ppl')(noFile.length), `<p class="fl-none-d">${fd('noneD')}</p><div class="fl-none">${noFile.map(s=>`<span class="chip">${s.sid} ${nm(s)}</span>`).join('')}</div>`) : ''}
    <div class="fl-act"><span class="${unset?'fl-left':'fl-allset'}">${unset ? fd('left')(unset) : fd('allSet')}</span>
      <button class="btn-sec" onclick="if (confirm(fd('resetAsk'))){ FL=null; render(); }"><i data-lucide="rotate-ccw" style="width:16px;height:16px"></i>${fd('reset')}</button>
      <button class="btn-solid" ${linked?'':'disabled'} onclick="flRegister()">${fd('go')(linked)}</button></div>`;
}
function flRegister(){
  const e = evById(rosterId, evalId), stu = rosterOf(rosterId), l = subOf(rosterId, evalId);
  const unset = FL.files.filter(x=>!x.to).length, picks = FL.files.filter(x=>x.to && x.to!=='__skip__');
  if (unset && !confirm(fd('ask')(unset, picks.length))) return;
  picks.forEach(x=>{ const i = stu.findIndex(s=>s.sid===x.to); const s = l[i]; s.at = '10.21 09:40'; s.late=false; s.scoring=false; s.pre=true; s.rev=false; s.rel=false; });
  if (!e.sub){ e.scored = 0; e.rev = 0; e.relN = 0; }
  e.sub = l.filter(s=>s.at).length;
  const n = picks.length; FL = null; go('eval', rosterId, e.id); toast(fd('done')(n));
}
function flLeave(){ if (FL && FL.stage==='match' && !confirm(fd('leaveAsk'))) return; FL = null; go('eval', rosterId, evalId); }


DETAIL.push('files');
const _goF = go;
go = function(v, cid, eid, sid){
  if (v==='files'){ if (cid) rosterId = cid; if (eid) evalId = +eid; FL = null; showN = 10; view = 'files'; location.hash = `files-${rosterId}-${evalId}`; render(); window.scrollTo(0,0); return; }
  _goF(v, cid, eid, sid);
};
const _renderF = render;
render = function(){
  _renderF();
  if (view==='files'){ document.getElementById('v-detail').innerHTML = renderFiles(); lucide.createIcons(); }
};

addScan = function(){ go('files', rosterId, evalId); };
{ const m = location.hash.match(/files-(c\d+)-(\d+)/); if (m){ view = 'files'; rosterId = m[1]; evalId = +m[2]; render(); } }
