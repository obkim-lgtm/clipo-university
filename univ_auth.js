

const AH = {
  ko:{ eyebrow:'대학 서·논술형 평가 지원', h:'글로 주고받는 배움', sub:'학생은 생각을 글로 쓰고, 교수님은 그 글에 피드백으로 답해요. <span class="nb">서·논술형</span> 평가가 점수 하나로 끝나지 않고 다음 글로 이어져요.',
    p:[['message-square-text','내 글에 대한 피드백이 문항마다 돌아와요'],['book-open','한 편 한 편의 글을 더 깊이 읽고 답할 수 있어요'],['shield-check','피드백은 교수님이 확인한 뒤에 학생에게 공개돼요']],
    profTag:'교수님', profT:'강하늘 · 중간고사', ans:'타당도는 평가가 재려고 한 것을 실제로 재는 정도이다.', cmt:'좋아요. 구인 타당도도 예를 들어 설명해 보세요.',
    stuTag:'학생', stuT:'받은 피드백', crit:[['논제 이해',4,4],['근거의 타당성',5,6],['논리 전개',5,6]], pill:'피드백이 도착했어요' },
  en:{ eyebrow:'Essay assessment support for universities', h:'Learning, exchanged in writing', sub:'Students put their thinking into writing, and instructors answer with feedback. An essay assessment doesn\'t end with a single score — it leads to the next piece of writing.',
    p:[['message-square-text','Feedback comes back on every question you write'],['book-open','Every piece of writing can be read and answered more deeply'],['shield-check','Feedback reaches students only after the instructor reviews it']],
    profTag:'Instructor', profT:'Kang · Midterm', ans:'Validity is how well an assessment measures what it intends to.', cmt:'Good. Try explaining construct validity with an example.',
    stuTag:'Student', stuT:'Your feedback', crit:[['Understanding',4,4],['Evidence',5,6],['Reasoning',5,6]], pill:'Feedback has arrived' }
};
function authHero(){
  const a = AH[lang];
  return `<div class="ah-top"><svg width="88" height="18" viewBox="0 0 76 16" fill="none"><use href="#clipoLogo"/></svg><span class="sb-logo-tag">University</span></div>
    <div class="ah-mid">
      <span class="ah-eyebrow">${a.eyebrow}</span>
      <h2 class="ah-h">${a.h}</h2>
      <p class="ah-sub">${a.sub}</p>
      <div class="ah-art" aria-hidden="true">
        <svg class="ah-link" viewBox="0 0 460 300" preserveAspectRatio="none"><path d="M250 118 C 300 118, 300 170, 330 178" /></svg>
        <div class="ah-card ah-c1"><span class="ah-tag">${a.profTag}</span><b class="ah-ct">${a.profT}</b>
          <p class="ah-ans hw">${a.ans}</p>
          <div class="ah-cmt"><span class="ah-cmt-ic"><i data-lucide="pencil"></i></span><span>${a.cmt}<i class="ah-caret"></i></span></div></div>
        <div class="ah-card ah-c2"><span class="ah-tag stu">${a.stuTag}</span><b class="ah-ct">${a.stuT}</b><div class="ah-score"><b>18</b><span>/ 20</span></div>
          ${a.crit.map(c=>`<div class="ah-crit"><span>${c[0]}</span><b>${c[1]}<small> / ${c[2]}</small></b></div>`).join('')}
          <p class="ah-note">${a.cmt}</p></div>
        <div class="ah-pill"><i data-lucide="message-square-text"></i>${a.pill}</div>
      </div>
    </div>
    <ul class="ah-pts">${a.p.map(x=>`<li><span><i data-lucide="${x[0]}"></i></span>${x[1]}</li>`).join('')}</ul>`;
}
(function(){
  const paint = () => { document.querySelectorAll('.auth').forEach(au => {
    let h = au.querySelector(':scope > .auth-hero');
    if (!h){ h = document.createElement('aside'); h.className = 'auth-hero'; au.prepend(h); au.classList.add('has-hero'); }
    h.innerHTML = authHero(); });
    if (window.lucide) lucide.createIcons(); };
  const _r = render; render = function(){ _r(); paint(); };
  paint();
})();
