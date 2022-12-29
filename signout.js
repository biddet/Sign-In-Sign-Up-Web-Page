function logout() {
  firebase.auth().signOut().then(function() {
    // Sign-out was successful
    console.log('User signed out');
  }).catch(function(error) {
    // An error occurred
    console.error(error);
  });
}
