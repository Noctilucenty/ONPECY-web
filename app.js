/* ONPECY landing — vanilla JS, no dependencies */
(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('navToggle');
  var navMobile = document.getElementById('navMobile');

  /* ---- nav: shrink/darken on scroll ---- */
  function onScroll() {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- mobile menu ---- */
  function closeMenu() {
    navMobile.classList.remove('open');
    nav.classList.remove('menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
  navToggle.addEventListener('click', function () {
    var open = navMobile.classList.toggle('open');
    nav.classList.toggle('menu-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navMobile.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ---- tabs (14 business models) ---- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var panels = document.querySelectorAll('.tabpanel');

  function activate(tab) {
    var key = tab.getAttribute('data-tab');
    tabs.forEach(function (t) {
      var on = t === tab;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
    });
    panels.forEach(function (p) {
      var on = p.getAttribute('data-panel') === key;
      p.classList.toggle('is-active', on);
      p.hidden = !on;
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { activate(tab); });
    tab.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        var dir = e.key === 'ArrowRight' ? 1 : -1;
        var next = tabs[(i + dir + tabs.length) % tabs.length];
        next.focus();
        activate(next);
      }
    });
  });

  /* ---- open the tab that matches the URL hash (e.g. models.html#usj) ---- */
  function activateFromHash() {
    var key = (window.location.hash || '').replace('#', '');
    if (!key) return;
    var match = tabs.filter(function (t) { return t.getAttribute('data-tab') === key; })[0];
    if (match) activate(match);
  }
  if (tabs.length) {
    activateFromHash();
    window.addEventListener('hashchange', activateFromHash);
  }

  /* ---- scroll reveal + stagger (IntersectionObserver, no libraries) ---- */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealSel = '.reveal, .reveal-up, .reveal-scale, .stagger, .timeline-step';
  var reveals = Array.prototype.slice.call(document.querySelectorAll(revealSel));

  function show(el) { el.classList.add('in'); el.classList.add('is-visible'); }

  function isReveal(node) {
    return node.classList && (node.classList.contains('reveal') ||
      node.classList.contains('reveal-up') || node.classList.contains('reveal-scale') ||
      node.classList.contains('timeline-step'));
  }

  var vh = window.innerHeight || document.documentElement.clientHeight;
  if (reduce || !('IntersectionObserver' in window) || !vh) {
    /* reduced motion, no observer support, or no measurable viewport:
       reveal everything so content is never stuck hidden */
    reveals.forEach(show);
  } else {
    /* cascade: reveal siblings in the same parent get an incremental delay,
       so grids and card rows animate in as a stagger without extra markup */
    reveals.forEach(function (el) {
      var parent = el.parentNode;
      if (!parent) return;
      var sibs = Array.prototype.filter.call(parent.children, isReveal);
      var idx = sibs.indexOf(el);
      if (idx > 0) el.style.transitionDelay = Math.min(idx * 70, 350) + 'ms';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }
})();
