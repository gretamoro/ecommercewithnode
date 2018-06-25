$('#logIn').on('click', function () {
  $('#userData').removeClass('hide');
})

$('#close').on('click', function () {
  $('#userData').addClass('hide');
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
    console.log(data);
    if (data == true) {
      $('#cargar').attr('href', 'http://localhost:3000/cargar')
    }else {
      const error = '<div class="error">El usuario o la contraseña son incorrectos</div>';
    }
  })
  $('#user').val('');
  $('#pass').val('');
})

$('.add').on('click', function () {
  console.log($(this).siblings('h2').html());
  const total = $('#total').html();
  const title = $(this).siblings('h2').html();
  const simbol = $(this).siblings('.yen').html();
  const price = $(this).siblings('.number').html();

  const titleAndPrice = '<li class="item">' +
   title + ' - ' + simbol + price + '</li>';

  $('#productsCart').append(titleAndPrice);

  $('#empty').addClass('hide');

  function sum(number) {
    let result = parseInt(total) + parseInt(price);
    return result
  }
  let suma = $('#total').html(sum(total));

})
