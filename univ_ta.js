
const TAD = {
  ko:{ h:'조교', d:'조교는 이 강좌에서 답안 올리기 · AI 채점 · 확인(점수와 피드백 고치기)을 할 수 있어요. 평가 만들기·수정, 수강생 관리, 강좌 설정은 교수님만 할 수 있어요.',
    thN:'이름', thM:'학교 이메일', thS:'상태', in:'로그인함', inv:'초대 메일 보냄', rm:'제외', add:'추가', ph:'조교의 학교 이메일',
    added:'초대 메일을 보냈어요. 조교는 이 이메일로 처음 로그인해요.', removed:n=>`${n} 조교를 제외했어요`, bad:'학교 이메일을 넣어 주세요.',
    rel:'조교도 피드백을 공개할 수 있어요', relD:'끄면 공개는 교수님만 할 수 있어요. 조교가 확인을 마치면 교수님이 「공개하기」를 눌러요.', preview:'조교 화면으로 보기',
    none:'아직 조교가 없어요.', role:'조교', taOnly:'이 강좌의 조교로 들어왔어요. 평가 만들기·수정과 수강생 관리는 교수님만 할 수 있어요.' },
  en:{ h:'Teaching assistants', d:'TAs can upload answers, run AI scoring and review (edit scores and feedback) in this course. Creating or editing assessments, managing students and course settings are instructor-only.',
    thN:'Name', thM:'School email', thS:'Status', in:'Signed in', inv:'Invite sent', rm:'Remove', add:'Add', ph:"TA's school email",
    added:'Invitation sent. The TA signs in with this email the first time.', removed:n=>`Removed ${n}`, bad:'Enter a school email.',
    rel:'TAs can release feedback', relD:'When off, only the instructor releases. The instructor presses "Release" after TAs finish reviewing.', preview:'View as TA',
    none:'No TAs yet.', role:'TA', taOnly:'You are a TA in this course. Creating or editing assessments and managing students are instructor-only.' }
};
const ta = k => TAD[lang][k];
const TAS = { c1: [{ko:'정다은', en:'Daeun Jung', mail:'jung.ta@dd.ac.kr', st:'in'}] };
const TA_REL = { c1: new URLSearchParams(location.search).get('rel')==='1' };

function taBox(c){
  const list = TAS[c.id] = TAS[c.id] || [];
  const rows = list.length ? list.map((x,i)=>`<tr><td>${lang==='ko'?x.ko:x.en}</td><td>${x.mail}</td><td>${x.st==='in' ? `<span class="st ok">${ta('in')}</span>` : `<span class="st muted">${ta('inv')}</span>`}</td><td><button class="row-x" onclick="taRemove('${c.id}',${i})">${ta('rm')}</button></td></tr>`).join('')
    : `<tr><td colspan="4" style="color:#6d7381;padding:22px">${ta('none')}</td></tr>`;
  return `<div class="box"><p class="box-t">${ta('h')}</p><p class="box-d">${ta('d')}</p>
    <div class="code-row" style="margin-bottom:14px"><input class="inp" id="taMail" placeholder="${ta('ph')}" style="width:320px" onkeydown="if(event.key==='Enter')taAdd('${c.id}')"><button class="btn-solid" onclick="taAdd('${c.id}')">${ta('add')}</button></div>
    <div class="tbl-wrap" style="margin-bottom:16px"><table class="tbl"><thead><tr><th>${ta('thN')}</th><th>${ta('thM')}</th><th>${ta('thS')}</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
    <label class="tgl" onclick="TA_REL['${c.id}']=!TA_REL['${c.id}']; render()"><span class="tgl-track" style="${TA_REL[c.id]?'background:#416bff':''}"><span class="tgl-knob" style="${TA_REL[c.id]?'left:20px':''}"></span></span><span>${ta('rel')}</span></label>
    <p class="hint" style="font-size:13px;color:#9ea3ad;margin:8px 0 14px">${ta('relD')}</p>
    <a class="act" href="univ_home_v1_261019.html?role=ta${TA_REL[c.id]?'&rel=1':''}#course-${c.id}" target="_blank"><i data-lucide="eye" style="width:15px;height:15px"></i>${ta('preview')}</a></div>`;
}
function taAdd(cid){
  const v = (document.getElementById('taMail').value||'').trim();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)){ toast(ta('bad')); return; }
  const nm = v.split('@')[0];
  (TAS[cid] = TAS[cid] || []).push({ko:nm, en:nm, mail:v, st:'inv'}); render(); toast(ta('added'));
}
function taRemove(cid, i){ const x = TAS[cid][i]; if (!confirm(`${lang==='ko'?x.ko:x.en} — ${ta('rm')}?`)) return; TAS[cid].splice(i,1); render(); toast(ta('removed')(lang==='ko'?x.ko:x.en)); }


const _rsTA = renderSettings;
renderSettings = function(){ const h = _rsTA(), c = cById(rosterId), key = `<div class="box"><p class="box-t">${d('setArch')}</p>`; return h.includes(key) ? h.replace(key, taBox(c) + key) : h + taBox(c); };


if (IS_TA){
  document.title = 'CLIPO University · 조교';   
  if (TA_REL.c1) document.documentElement.classList.add('ta-rel');
  const _rTA = render;
  render = function(){ _rTA();
    const el = document.getElementById('v-detail');
    if (el && el.classList.contains('on') && !el.querySelector('.ta-band') && ['course','eval','roster'].includes(view)) el.insertAdjacentHTML('afterbegin', `<p class="note ta-band"><i data-lucide="user-cog"></i><span>${ta('taOnly')}</span></p>`);
    if (view==='roster'){ const r = document.getElementById('v-roster'); r?.querySelector('.ta-band')?.remove(); if (r) r.insertAdjacentHTML('afterbegin', `<p class="note ta-band"><i data-lucide="user-cog"></i><span>${ta('taOnly')}</span></p>`); }
    lucide.createIcons(); };
  render();
}

if (!IS_TA) render();   
