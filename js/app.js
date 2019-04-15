window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".preloader").style.display = "none";
});

// NAV DISPLAY
const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".navBtn");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

/*
  VIDEO SWICTH
*/

document.querySelector(".video__switch").addEventListener("click", e => {
  let btn = document.querySelector(".video__switch-btn");
  if (!btn.classList.contains("btnSlide")) {
    btn.classList.add("btnSlide");
    document.querySelector(".video__item").pause();
  } else {
    btn.classList.remove("btnSlide");
    document.querySelector(".video__item").play();
  }
});

// CREATING UI CONSTRUCTOR

function UI() {}
const ui = new UI();
// FORM SUBMIT
document.querySelector(".drink-form").addEventListener("submit", e => {
  const name = document.querySelector(".input-name").value;
  const last_name = document.querySelector(".last-name").value;
  const email = document.querySelector(".input-email").value;

  const customer = new Customer(name, last_name, email);

  if (name === "" || last_name === "" || email === "") {
    ui.showAlert("Some fields are empty", "error");
  } else {
    ui.showAlert("You successfully registered for a free drink", "success");
    // ADDING CUSTOMERS TO DOM

    ui.addCustomer(customer);

    // CLEAR INPUT FIELDS
    ui.clearFields();
  }
  e.preventDefault();
});

/*
 ! SHOW ALERT 
 */

UI.prototype.showAlert = function(message, className) {
  const feedbk = document.querySelector(".drink-form__feedback");
  const text = (document.createTextNode = message);
  feedbk.textContent = text;
  feedbk.classList.add(className);

  setTimeout(() => {
    document.querySelector(".drink-form__feedback").classList.remove(className);
  }, 3000);
};
// Adding Customer
UI.prototype.addCustomer = function(customer) {
  const images = [1, 2, 3, 4, 5];
  let random = Math.floor(Math.random() * images.length);
  const cardList = document.querySelector(".drink-card__list");
  const div = document.createElement("div");
  div.className = "person";
  div.innerHTML = `
            <img src="img//person-${random}.jpeg" alt="person-1" class="person__thumbnail">
            <h4 class="person__first-name">${customer.name}</h4>
            <h4 class="person__last-name">${customer.last_name}</h4>
    `;
  cardList.appendChild(div);
  console.log(customer, random);
};

UI.prototype.clearFields = function() {
  document.querySelector(".input-name").value = "";
  document.querySelector(".last-name").value = "";
  document.querySelector(".input-email").value = "";
};

// SHOW MODAL
UI.prototype.showModal = function(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains("gallery-item__icon")) {
    let id = e.target.parentElement.dataset.id;

    const modal = document.querySelector(".gallery-modal");
    const modalItem = document.querySelector(".gallery-modal__item");

    modal.classList.add("gallery-modal--show");
    modalItem.style.backgroundImage = `url(../img/work-${id}.jpeg)`;
  }
};

UI.prototype.closeModal = function() {
  const closeBtn = document.querySelector(".gallery-modal__close");
  closeBtn.addEventListener("click", function() {
    const modal = document.querySelector(".gallery-modal");
    modal.classList.remove("gallery-modal--show");
  });
};

//CRRATE CUSTOMERS OBJECT CONTEUCTOR

function Customer(name, last_name, email) {
  this.name = name;
  this.last_name = last_name;
  this.email = email;
}
/*
!  OPEN MODAL
 */

const links = document.querySelectorAll(".gallery-item__icon");
links.forEach(link => {
  link.addEventListener("click", function(e) {
    ui.showModal(e);
  });
});

/*
!  CLOSE MODAL
 */
ui.closeModal();

//
// CONTACT US
//

// SMOOTH SCROOL
$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});
