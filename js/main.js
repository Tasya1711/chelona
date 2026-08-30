(function () {
  "use strict";

  /* Sticky header shadow/border on scroll */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Scroll-reveal for storytelling / feature blocks */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ------------------------------------------------------------------
     Scroll-position restoration between the homepage grid and a
     product page. "Back to shop" prefers a real history.back() so the
     browser restores the exact scroll offset the user left from,
     instead of jumping to the top of the #products anchor. A
     sessionStorage fallback covers cases where there is no history
     entry to go back to (e.g. a product page opened directly).
     ------------------------------------------------------------------ */
  var SCROLL_KEY = "chelona:home-scroll";

  document.querySelectorAll(".back-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.history.length > 1) {
        e.preventDefault();
        window.history.back();
      }
    });
  });

  if (location.pathname === "/" || location.pathname === "/index.html") {
    document.querySelectorAll('a[href^="/product/"]').forEach(function (link) {
      link.addEventListener("click", function () {
        sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
      });
    });

    var navEntry = window.performance && performance.getEntriesByType
      ? performance.getEntriesByType("navigation")[0]
      : null;
    var isBackForward = navEntry
      ? navEntry.type === "back_forward"
      : (window.performance && performance.navigation && performance.navigation.type === 2);

    var savedY = sessionStorage.getItem(SCROLL_KEY);
    if (savedY !== null) {
      /* Always consume the stored value on arrival so it can never leak
         into a later, unrelated visit to "/" (e.g. clicking the logo
         after the browser already restored scroll natively). */
      sessionStorage.removeItem(SCROLL_KEY);
      if (!isBackForward) {
        var y = parseInt(savedY, 10);
        if (!isNaN(y)) {
          requestAnimationFrame(function () {
            window.scrollTo({ top: y, left: 0, behavior: "instant" });
          });
        }
      }
    }
  }

  /* Newsletter form: lightweight, no backend wired yet */
  var form = document.querySelector(".subscribe-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input[type='email']");
      var btn = form.querySelector("button");
      if (input && input.checkValidity() && input.value) {
        btn.textContent = "Subscribed";
        form.reset();
        setTimeout(function () { btn.textContent = "Subscribe"; }, 2600);
      }
    });
  }
})();
