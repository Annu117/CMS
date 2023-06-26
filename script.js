/*

inspiration: 
https://dribbble.com/shots/2292415-Daily-UI-001-Day-001-Sign-Up

*/

// let form = document.querySelecter('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   return false;
// });
function toggleLogin() {
  var logo = document.getElementById('logo');
  // var loginButton = document.querySelector('button[onclick="toggleLogin()"]');
  var loginButton = document.getElementById('logo');
  var links = document.querySelectorAll('.disabled-link');

  if (loginButton.innerText === 'Login') {
    logo.innerText = 'User Dummy Logo';
    loginButton.innerText = 'Logout';

    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('disabled-link');
    }
    window.location.href = 'login.html';
  } else {
    logo.innerText = 'CMS';
    loginButton.innerText = 'Login';

    for (var i = 0; i < links.length; i++) {
      links[i].classList.add('disabled-link');
    }
  }
}
