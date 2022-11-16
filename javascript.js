var user = cookie.get('user');
if (!user) {

  user = prompt('Choose a username:');
  if (!user) {
    alert('We cannot work with you like that!');
  } else {
    cookie.set('user', user);
  }
}
