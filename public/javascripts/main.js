//LogIn form
$('#logIn').on('click', function () {
  $('#userData').removeClass('hide');
})
$('#close').on('click', function () {
  $('#userData').addClass('hide');
})

//LogIn button
$('#sendUserData').on('click', function () {
  const user = $('#userName').val();
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
    if (data.data == true) {
      window.location.href = 'http://localhost:3000/cargar'
    }else {
      const error = '<div class="error">El usuario o la contraseña son incorrectos</div>';
      $('#userData').append(error);
    }
  })
  $('#userName').val('');
  $('#pass').val('');
})

//Carrito
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

//Cargar Foto
$('#upload').on('click', function () {
  const url = $('#url').val();
  const title = $('#title').val();
  const price = $('#price').val();

  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/cargar',
    data: {
      url: url,
      producto: title,
      precio: price
    }
  }).done(function (data) {
    if (data.complete) {
      $('#complete').removeClass('hide');
      setTimeout(function () {
        $('#complete').addClass('hide');
      }, 5000)
    }else {
      $('#incomplete').removeClass('hide');
      setTimeout(function () {
        $('#incomplete').addClass('hide');
      }, 5000)
    }
    $('#url').val('');
    $('#title').val('');
    $('#price').val('');
  })
})

//LogOut
$('#logOut').on('click', function () {
  $.ajax({
    method: 'PUT',
    url: 'http://localhost:3000/logout'
  }).done(function (data) {
    window.location.href = 'http://localhost:3000/'
  })
})
