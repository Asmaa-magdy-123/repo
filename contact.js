<script>
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // استرداد قيم الحقول
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // تخزين القيم في Local Storage
      localStorage.setItem('name', JSON.stringify(name));
      localStorage.setItem('email', JSON.stringify(email));
      localStorage.setItem('message', JSON.stringify(message));

     
    });
  });
</script>