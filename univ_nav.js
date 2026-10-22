
(function () {
  var S = 'univ_student_v1_261019.html', P = 'univ_home_v1_261019.html', G = 'univ_grade_v1_261021.html';
  
  var LOGIN = ['로그인 (셋이 같이 쓰는 화면)', [
    [S + '#login', '로그인'],
    [S + '#verify', '처음 로그인 · 학교 이메일 인증'],
    [S + '#consent', '처음 로그인 · 정보 확인·동의 (학생만)'],
    [S + '#pw', '처음 로그인 · 비밀번호 만들기'],
    [S + '#reset', '비밀번호 다시 만들기']
  ]];
  var ROLES = {
    stu: { label: '학생', home: S + '#home', groups: [
      ['학생 · 김서연', [
        [S + '#home', '홈'],
        [S + '#home-empty', '홈 · 수강 중인 강좌가 없을 때'],
        [S + '#mycourses', '강좌 목록'],
        [S + '#course-c1', '강좌 홈 · 교육평가'],
        [S + '#submit-c3-2', '과제 제출 · 오늘 마감'],
        [S + '#submit-c1-7', '과제 제출 · 마감 지남'],
        [S + '#feedback-c2-3', '피드백 · 새로 도착'],
        [S + '#feedbacks', '피드백 모아 보기'],
        [S + '#me', '내 정보'],
        [S + '#home-en', '홈 · English']
      ]], LOGIN] },
    prof: { label: '교수', home: P, groups: [
      ['홈과 강좌', [
        [P, '홈'],
        [P + '#courses', '강좌 목록'],
        [P + '#newcourse', '강좌 만들기'],
        [P + '#course-c1', '강좌 홈 · 평가 목록'],
        [P + '#roster-c1', '수강생 (코드 · 학번 · 엑셀)'],
        [P + '#settings-c1', '강좌 설정 · 조교'],
        [P + '#reports-c1', '리포트'],
        [P + '#me', '내 정보 · 크레딧'],
        [P + '#en', '홈 · English']
      ]],
      ['평가', [
        [P + '#new-c1', '평가 만들기 (문항과 채점 방법)'],
        [P + '#eval-c1-2', '평가 상세 · 공개 완료'],
        [P + '#eval-c1-1', '평가 상세 · 일부 공개'],
        [P + '#eval-c1-7', '평가 상세 · 공개 전 (확인 끝)'],
        [P + '#eval-c1-5', '평가 상세 · 확인 중'],
        [P + '#eval-c1-6', '평가 상세 · 새로 낸 학생 채점 전'],
        [P + '#eval-c1-4', '평가 상세 · AI 채점 전'],
        [P + '#eval-c1-3', '평가 상세 · 직접 올림 (2명 미제출)'],
        [P + '#eval-c1-8', '평가 상세 · 학생 제출 기다리는 중'],
        [P + '#eval-c1-9', '평가 상세 · 답안 올리기 전'],
        [P + '#tune-c1-4', '채점 맞춰 보기 (한 명 먼저 미리 채점)'],
        [P + '#split-c1-9', '학급 PDF 학생별로 나누기'],
        [P + '#files-c1-9', '학생별 파일 올리기 · 처음'],
        [P + '#files-c1-3', '학생별 파일 올리기 · 더 올릴 때'],
        [G + '?id=202312001&course=c1&ev=5', '학생별 채점 (채점 가이드)']
      ]],
      ['그 밖', [
        [P + '#guide', '사용 안내'],
        [P + '#support', '고객센터'],
        [P + '#notices', '공지'],
        [P + '#terms', '이용약관'],
        [P + '#privacy', '개인정보처리방침']
      ]], LOGIN] },
    ta: { label: '조교', home: P + '?role=ta', groups: [
      ['조교 · 정다은 (공개 권한 없음)', [
        [P + '?role=ta', '홈'],
        [P + '?role=ta#course-c1', '강좌 홈 · 평가 목록'],
        [P + '?role=ta#eval-c1-5', '평가 상세 · 확인 중'],
        [P + '?role=ta#eval-c1-7', '평가 상세 · 공개 전 (공개 버튼 없음)'],
        [P + '?role=ta#roster-c1', '수강생 (보기만)'],
        [G + '?id=202312001&course=c1&ev=5', '학생별 채점 (채점 가이드)']
      ]],
      ['조교 · 교수가 공개를 허용했을 때', [
        [P + '?role=ta&rel=1', '홈'],
        [P + '?role=ta&rel=1#eval-c1-7', '평가 상세 · 공개 전 (공개 버튼 있음)']
      ]], LOGIN] }
  };
  var GROUPS = [];   
  function roleNow() {
    var f = location.pathname.split('/').pop(), q = new URLSearchParams(location.search);
    var stored = 'prof'; try { stored = localStorage.getItem('unav_role') || 'stu'; } catch (e) {}
    if (f === S) return /^#(login|verify|consent|pw|reset)/.test(location.hash) ? stored : 'stu';   
    if (f === G) { try { return localStorage.getItem('unav_role') === 'ta' ? 'ta' : 'prof'; } catch (e) { return 'prof'; } }
    return q.get('role') === 'ta' ? 'ta' : 'prof';
  }

  
  function here() {
    var f = location.pathname.split('/').pop();
    var q = new URLSearchParams(location.search), keep = [];
    if (q.get('role')) keep.push('role=' + q.get('role'));
    if (q.get('rel')) keep.push('rel=' + q.get('rel'));
    return { f: f, q: keep.length ? '?' + keep.join('&') : '', h: location.hash };
  }
  function curKey() {
    var c = here(), keys = [];
    GROUPS.forEach(function (g) { g[1].forEach(function (o) { keys.push(o[0]); }); });
    if (c.f === G) return keys.filter(function (k) { return k.indexOf(G) === 0; })[0] || '';
    var cand = [c.f + c.q + c.h, c.f + c.q];
    for (var i = 0; i < cand.length; i++) if (keys.indexOf(cand[i]) > -1) return cand[i];
    return '';
  }

  function build() {
    if (document.getElementById('unav')) return;
    var css = document.createElement('style');
    css.textContent =
      '#unav{position:fixed;right:24px;bottom:24px;z-index:3000;display:inline-flex;align-items:center;gap:2px;padding:5px;' +
      'background:#222631;border-radius:24px;box-shadow:0 8px 24px rgba(0,0,0,.22);font-family:inherit;user-select:none;touch-action:none}' +
      '#unav .u-l{padding:4px 12px;color:#B3B6BD;font-size:11px;font-weight:800;letter-spacing:.06em;cursor:move}' +
      '#unav select{height:32px;max-width:300px;border-radius:16px;border:1px solid #4B5060;background:#2F3340;color:#fff;' +
      'font-size:14px;font-weight:700;font-family:inherit;padding:0 30px 0 12px;cursor:pointer;appearance:none;-webkit-appearance:none;' +
      'background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'2.5\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E");' +
      'background-repeat:no-repeat;background-position:right 10px center}' +
      '#unav select optgroup{font-weight:800;color:#fff;background:#2F3340}#unav select option{font-weight:500;color:#fff;background:#2F3340}' +
      '#unav select.u-role{margin-right:4px;background-color:#fff;color:#222631;border-color:#fff;' +
      'background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23222631\' stroke-width=\'2.5\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")}' +
      '#unav select.u-role option{color:#222631;background:#fff}' +
      '@media print{#unav{display:none}}';
    document.head.appendChild(css);

    var el = document.createElement('div');
    el.id = 'unav'; el.setAttribute('aria-label', '목업 화면 고르기');
    var role = roleNow(); GROUPS = ROLES[role].groups;
    try { localStorage.setItem('unav_role', role); } catch (e) {}
    var cur = curKey();
    var html = '<span class="u-l" title="잡고 끌어서 옮기기">MOCKUP</span><select class="u-role" aria-label="누구로 보기">' +
      ['stu', 'prof', 'ta'].map(function (k) { return '<option value="' + k + '"' + (k === role ? ' selected' : '') + '>' + ROLES[k].label + '</option>'; }).join('') +
      '</select><select class="u-scr" aria-label="화면">';
    if (!cur) html += '<option value="" selected>화면 고르기 ▾</option>';
    GROUPS.forEach(function (g) {
      html += '<optgroup label="' + g[0] + '">';
      g[1].forEach(function (o) { html += '<option value="' + o[0] + '"' + (o[0] === cur ? ' selected' : '') + '>' + o[1] + '</option>'; });
      html += '</optgroup>';
    });
    html += '</select>';
    el.innerHTML = html;
    document.body.appendChild(el);

    el.querySelector('.u-role').addEventListener('change', function () { var r = this.value; if (r === role) return; try { localStorage.setItem('unav_role', r); } catch (e) {} location.href = ROLES[r].home; });
    el.querySelector('.u-scr').addEventListener('change', function () {
      var v = this.value; if (!v) return;
      var hashAt = v.indexOf('#'), base = hashAt > -1 ? v.slice(0, hashAt) : v, hash = hashAt > -1 ? v.slice(hashAt) : '';
      var c = here(), same = base === c.f + c.q;
      
      location.href = base + hash;
      if (same) location.reload();
    });
    function sync() { var k = curKey(); if (k) el.querySelector('.u-scr').value = k; }
    window.addEventListener('hashchange', sync);
    document.addEventListener('click', function () { setTimeout(sync, 80); }, true);

    
    var K = 'unav_pos';
    try { var p = JSON.parse(localStorage.getItem(K)); if (p) { el.style.left = Math.min(p.x, innerWidth - 120) + 'px'; el.style.top = Math.min(p.y, innerHeight - 50) + 'px'; el.style.right = 'auto'; el.style.bottom = 'auto'; } } catch (e) {}
    var lab = el.querySelector('.u-l'), drag = false, sx, sy, ox, oy;
    lab.addEventListener('pointerdown', function (e) { drag = true; sx = e.clientX; sy = e.clientY; var r = el.getBoundingClientRect(); ox = r.left; oy = r.top; try { lab.setPointerCapture(e.pointerId); } catch (_) {} e.preventDefault(); });
    lab.addEventListener('pointermove', function (e) { if (!drag) return; el.style.left = Math.max(0, Math.min(innerWidth - el.offsetWidth, ox + e.clientX - sx)) + 'px'; el.style.top = Math.max(0, Math.min(innerHeight - el.offsetHeight, oy + e.clientY - sy)) + 'px'; el.style.right = 'auto'; el.style.bottom = 'auto'; });
    lab.addEventListener('pointerup', function () { if (!drag) return; drag = false; try { localStorage.setItem(K, JSON.stringify({ x: parseInt(el.style.left), y: parseInt(el.style.top) })); } catch (e) {} });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
