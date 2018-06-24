
$('#logIn').on('click', function () {
  $('#userData').removeClass('hide');
})

$('#sendUserData').on('click', function () {
  const user = $('#user').val();
  const pass = $('#pass').val();
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/',
    data: {
      user: user,
      password: pass
    }
  }).done(function (data) {

  })
  $('#user').val('');
  $('#pass').val('');
})
