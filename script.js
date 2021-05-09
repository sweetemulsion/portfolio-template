const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav() {
  // Toggle Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
    overlay.classList.replace ('overlay-slide-left', 'overlay-slide-right');

    // Animate In - nav items
    nav1.classList.remove('slide-out1');
    nav1.classList.add('slide-in1');
    nav2.classList.remove('slide-out2');
    nav2.classList.add('slide-in2');
    nav3.classList.remove('slide-out3');
    nav3.classList.add('slide-in3');
    nav4.classList.remove('slide-out4');
    nav4.classList.add('slide-in4');
    nav5.classList.remove('slide-out5');
    nav5.classList.add('slide-in5');
  } else {
    // Animate Out - Overlay
    overlay.classList.replace ('overlay-slide-right', 'overlay-slide-left');
    // Animate Out - nav items
    nav1.classList.remove('slide-in1');
    nav1.classList.add('slide-out1');
    nav2.classList.remove('slide-in2');
    nav2.classList.add('slide-out2');
    nav3.classList.remove('slide-in3');
    nav3.classList.add('slide-out3');
    nav4.classList.remove('slide-in4');
    nav4.classList.add('slide-out4');
    nav5.classList.remove('slide-in5');
    nav5.classList.add('slide-out5');
  }
}
// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);