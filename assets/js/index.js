//Bigger logo function
function toggleZoom() {
  let logo = document.querySelector('.logo');
  logo.classList.toggle('active');

  let resizeButton = document.querySelector('.resize-button');
  resizeButton.classList.toggle('active');
}


//Toggle menu function for devices under 1201px
function toggleMobileMenu() {
  let navbar = document.querySelector('.navbar');
  navbar.classList.toggle('dropdown');

  let menuIcon = document.querySelector('.menu');
  menuIcon.classList.toggle('active');
}


//Scoll project function
const projectCards = document.querySelectorAll('.project-card');
let currentIndex = 0;

function showProject(index) {
  projectCards.forEach(card => card.classList.add('hidden'));
  projectCards[index].classList.remove('hidden');
}

function moveProject(direction) {
  currentIndex = (currentIndex + direction + projectCards.length) % projectCards.length;
  showProject(currentIndex);
}


//Refresh progress-container function
document.addEventListener("DOMContentLoaded", function() {
  const refreshIcon = document.querySelector(".refresh-icon i");
  let rotationAngle = 0;

  refreshIcon.addEventListener("click", function() {
    const tooltip = refreshIcon.querySelector(".tooltip");
    if (tooltip) {
      tooltip.style.display = "none";
    }

    rotationAngle += 360;
    refreshIcon.style.transform = `rotate(${rotationAngle}deg)`;

    const elementsToRefresh = document.querySelectorAll('.html, .css, .javascript, .react, .java');
    elementsToRefresh.forEach(element => {
      element.style.animation = "none";
      void element.offsetWidth;
      element.style.animation = null;
    });
  });
});

// Emails JS Form
(function() {
  emailjs.init("VnygMfZ2rmSVrGXyO"); 

  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let messaggio = document.getElementById("message").value;

   
    emailjs.send("service_e2bclob", "template_4tpueqc", {
      from_name: nome,
      email_id: email,
      message: messaggio
    }).then(function(response) {
      console.log("Email inviata con successo!", response);

      document.getElementById("messageSent").style.display = "block";

      setTimeout(function() {
        document.getElementById("messageSent").style.display = "none";
      }, 3000); 
    }, function(error) {
      console.log("Errore nell'invio dell'email:", error);

      document.getElementById("messageFailed").style.display = "block";

      setTimeout(function() {
        document.getElementById("messageFailed").style.display = "none";
      }, 4000); 
    });
  });
})();

