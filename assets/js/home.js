$(document).ready(function(){
    $('#phoneNumber').mask('(00) 00000-0000');
  });



$('#float-button').click(function() {
    $('#formModal').modal('show');
  });
  
  document.querySelectorAll('.contrate-a').forEach(function(el) {
    el.setAttribute('href', 'https://api.whatsapp.com/send?phone=5555119482065&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20com%20o%20Gustavo.');
});

  document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    
    var whatsappUrl = "https://wa.me/5511948206594?text=" + encodeURIComponent("Nome" + ': ' + name + ': ' + "Mensagem" + ': ' + message);
    
    // Feche o modal e abra o WhatsApp depois de um pequeno atraso
    $('#formModal').modal('hide');
    setTimeout(function() { window.location.href = whatsappUrl; }, 500);
  });