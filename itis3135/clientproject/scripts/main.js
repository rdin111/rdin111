/* main.js – CodeStarter Interactivity */

(function ($) {
    "use strict";
  
    $(function () {
      // About page accordion
      const $bio = $('.about-section .bio');
      if ($bio.length) {
        const html = $bio.html();
        $bio.remove();
        $('.about-section').append(`
          <div id="bio-accordion">
            <h3>Creator Bio</h3>
            <div>${html}</div>
          </div>`);
        $('#bio-accordion').accordion({ collapsible: true, active: false, heightStyle: "content" });
      }
  
      // Tutorials page tabs
      const $tutorialList = $('.tutorials-section .tutorial-list');
      if ($tutorialList.length) {
        const $tabs = $('<div id="tutorial-tabs"><ul></ul></div>');
        $tutorialList.children('li').each(function (i) {
          const title = $(this).find('h3').text() || `Lesson ${i + 1}`;
          const content = $(this).html();
          const id = `lesson-tab-${i}`;
          $tabs.find('ul').append(`<li><a href="#${id}">${title}</a></li>`);
          $tabs.append(`<div id="${id}">${content}</div>`);
        });
        $tutorialList.replaceWith($tabs);
        $tabs.tabs();
      }
  
      // Quiz page scoring
      const $quiz = $('#quiz-form');
      if ($quiz.length) {
        const answers = { q1: 'b', q2: 'b', q3: 'b', q4: 'b', q5: 'c' };
        const $result = $('#quiz-result');
        const $reset = $('#reset-quiz-button');
  
        $quiz.on('submit', function (e) {
          e.preventDefault();
          let score = 0;
          for (const q in answers) {
            const $li = $(`input[name="${q}"]`).closest('li');
            const val = $quiz.find(`input[name="${q}"]:checked`).val();
            $li.removeClass('correct-answer incorrect-answer');
            if (val === answers[q]) {
              $li.addClass('correct-answer');
              score++;
            } else {
              $li.addClass('incorrect-answer');
            }
          }
          $result.html(`<strong>Your Score: ${score}/5</strong><br>` +
            (score === 5 ? "<span class='feedback-congrats'>Perfect score!</span>"
                         : "<span class='feedback-retry'>Review your answers.</span>"));
          $reset.show();
          $('html, body').animate({ scrollTop: $('#quiz-feedback').offset().top - 80 }, 500);
        });
  
        $reset.on('click', function () {
          $quiz[0].reset();
          $('.quiz-questions li').removeClass('correct-answer incorrect-answer');
          $result.empty();
          $(this).hide();
          $('html, body').animate({ scrollTop: $quiz.offset().top - 80 }, 500);
        });
      }
  
      // Contact form popup
      const $contact = $('#contact-form');
      if ($contact.length) {
        $contact.on('submit', function (e) {
          e.preventDefault();
          let valid = true;
          $contact.find('[required]').each(function () {
            if (!$(this).val().trim()) valid = false;
          });
          if (valid) {
            $('<div>Your message has been sent!</div>').dialog({
              modal: true,
              title: 'Thank you',
              width: 350,
              resizable: false,
              buttons: {
                OK: function () {
                  $(this).dialog('close');
                }
              },
              close: function () {
                $contact[0].reset();
                $(this).dialog('destroy').remove();
              }
            });
          }
        });
      }
    });
  })(jQuery);
  