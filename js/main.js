/* ============================================================
   main.js — iXia 사이트 공통 JavaScript
   ✏️ 이 파일은 건드리지 않아도 돼. 자동으로 작동해.
============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 스크롤 시 헤더에 그림자 ─────────────────────────── */
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    });
  }

  /* ── 모바일 햄버거 메뉴 ─────────────────────────────── */
  const ham = document.querySelector('.hamburger');
  const mob = document.querySelector('.mob-menu');
  if (ham && mob) {
    ham.addEventListener('click', function () {
      ham.classList.toggle('open');
      mob.classList.toggle('open');
    });
    mob.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        ham.classList.remove('open');
        mob.classList.remove('open');
      });
    });
  }

  /* ── 현재 페이지 메뉴에 active 클래스 ──────────────── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a, .mob-menu a').forEach(function (a) {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html') ||
        (href.includes(page) && page !== '')) {
      a.classList.add('active');
    }
  });

  /* ── 커버 슬라이더 화살표 ───────────────────────────── */
  const slider = document.querySelector('.covers-track-list');
  const prev   = document.querySelector('.sl-prev');
  const next   = document.querySelector('.sl-next');

  if (slider && prev && next) {
    const step = 186; // 카드 너비(172) + 간격(14)
    prev.addEventListener('click', function () {
      slider.scrollBy({ left: -step, behavior: 'smooth' });
    });
    next.addEventListener('click', function () {
      slider.scrollBy({ left: step, behavior: 'smooth' });
    });
  }

  /* ── 스크롤 진입 시 섹션 페이드인 ──────────────────── */
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.anim').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    obs.observe(el);
  });

});
