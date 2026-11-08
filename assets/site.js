// AI Vitals: sends "Request a conversation" forms to Formspree without leaving the page.
// Each form carries a hidden "door" field so Dan can see which reading the visitor came from.
(function () {
  var forms = document.querySelectorAll('form[data-request]');
  forms.forEach(function (form) {
    var status = form.querySelector('.form-status');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // The real Formspree link has not been added yet.
      if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
        show('The request form isn’t connected yet. Please check back soon.', 'err');
        return;
      }

      var button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      show('Sending…', '');

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            show('Thank you. I’ll read your request myself and reply within two business days. — Dan', 'ok');
          } else {
            show('Something went wrong sending your request. Please try again in a moment.', 'err');
          }
        })
        .catch(function () {
          show('Something went wrong sending your request. Please try again in a moment.', 'err');
        })
        .finally(function () {
          button.disabled = false;
        });
    });

    function show(message, kind) {
      if (!status) return;
      status.textContent = message;
      status.className = 'form-status' + (kind ? ' ' + kind : '');
    }
  });
})();
