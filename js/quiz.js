/* QuimicaEZ — motor de quiz orientado por marcação (data-attributes).
   A resposta correta é o botão .option com o atributo [data-correct].
   Uma questão por vez; feedback imediato; barra de progresso; resultado. */
(function () {
  "use strict";

  document.querySelectorAll("[data-quiz]").forEach(initQuiz);

  function initQuiz(root) {
    var questions = Array.prototype.slice.call(root.querySelectorAll("[data-question]"));
    var total = questions.length;
    if (!total) return;

    var fill = root.querySelector("[data-quiz-fill]");
    var currentEl = root.querySelector("[data-quiz-current]");
    var totalEl = root.querySelector("[data-quiz-total]");
    var nextBtn = root.querySelector("[data-quiz-next]");
    var list = root.querySelector("[data-quiz-list]");
    var result = root.querySelector("[data-quiz-result]");
    var scoreEl = root.querySelector("[data-score]");
    var verdictEl = root.querySelector("[data-verdict]");
    var retry = root.querySelector("[data-quiz-retry]");

    var idx = 0;
    var score = 0;

    if (totalEl) totalEl.textContent = String(total);
    setProgress(0);
    show(0);

    questions.forEach(function (q) {
      q.querySelectorAll("[data-option]").forEach(function (btn) {
        btn.addEventListener("click", function () { choose(q, btn); });
      });
    });
    if (nextBtn) nextBtn.addEventListener("click", advance);
    if (retry) retry.addEventListener("click", function () { location.reload(); });

    function choose(q, btn) {
      if (q.getAttribute("data-done")) return;
      q.setAttribute("data-done", "1");

      var correct = q.querySelector("[data-correct]");
      var right = btn === correct;
      if (right) score++;

      btn.classList.add(right ? "is-correct" : "is-wrong");
      if (!right && correct) correct.classList.add("is-correct");

      q.querySelectorAll("[data-option]").forEach(function (b) {
        b.disabled = true;
        b.classList.add("is-locked");
      });

      var fb = q.querySelector("[data-feedback]");
      if (fb) {
        fb.hidden = false;
        fb.classList.add(right ? "is-right" : "is-wrong");
        fb.textContent = right
          ? "> Resposta certa!"
          : "> Resposta errada. A correta está destacada em verde.";
      }

      setProgress(idx + 1);
      if (nextBtn) {
        nextBtn.hidden = false;
        nextBtn.textContent = idx === total - 1 ? "Ver resultado →" : "Próxima questão →";
        nextBtn.focus();
      }
    }

    function advance() {
      if (idx < total - 1) {
        questions[idx].classList.remove("is-active");
        idx++;
        show(idx);
        if (nextBtn) nextBtn.hidden = true;
        if (currentEl) currentEl.textContent = String(idx + 1);
        var top = root.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: "smooth" });
      } else {
        finish();
      }
    }

    function show(i) {
      questions[i].classList.add("is-active");
      if (currentEl) currentEl.textContent = String(i + 1);
    }

    function setProgress(answered) {
      if (fill) fill.style.width = (answered / total) * 100 + "%";
    }

    function finish() {
      if (list) list.hidden = true;
      if (nextBtn) nextBtn.hidden = true;
      setProgress(total);
      if (scoreEl) scoreEl.textContent = String(score);
      if (verdictEl) verdictEl.textContent = verdict(score, total);
      if (result) {
        result.hidden = false;
        var top = result.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }

    function verdict(s, t) {
      var ratio = s / t;
      if (ratio === 1) return "Gabaritou! Domínio total do assunto. Bora para o próximo tema.";
      if (ratio >= 0.6) return "Mandou bem! Revise os pontos que escaparam e tente de novo.";
      if (ratio > 0) return "Bom começo. Volte ao conteúdo, reforce a teoria e refaça o quiz.";
      return "Sem crise: revise o conteúdo com calma e volte para o quiz.";
    }
  }
})();
