// DOM elements
const confirmationW = document.querySelector('.confirmation');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("modal-signup").style.display = "none";
    document.getElementById("modal-login").style.display = "none";
    document.getElementById("logged-out").style.display = "none";
    document.getElementById("sign-up").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_welc").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.
    document.getElementById("modal-login").style.display = "initial";

  }
});

const confirmation = (data) => {

  let html = '';
  data.forEach(doc => {
    const guide = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
      </li>
    `;
    html += li;
  });
  confirmationW.innerHTML = html;
};

document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  }
  );
