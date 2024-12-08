let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "bisen0657@gmail.com",
        Password : "Arha@1304@bisen@2004",
        To : 'xogamex697@jonespal.com',
        From : document.getElementById("email").value,
        Subject : "new form ",
        Body : "Name: " + document.getElementById("Name").value + "<br> Email:" + document.getElementById("email").value
        +  "<br> Phone no:" + document.getElementById("phone").value
        +  "<br> Message :" + document.getElementById("Message").value

    }).then(
      message => alert("Message send successfully")
    );
}