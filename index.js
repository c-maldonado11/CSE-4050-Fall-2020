// DOM elements
const confirmationW = document.querySelector('.confirmation');

// setup guides
const confirmation = (data) => {

  let html = '';
  data.forEach(doc => {
    const guide = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
        <div class="collapsible-body white"> ${guide.content} </div>
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
