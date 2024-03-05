// bio typing
const text = "Aspiring and enthusiastic junior developer with a passion for artificial intelligence technologies. Seeking opportunities to apply academic knowledge and gain hands-on experience in AI development.";
const typingSpeed = 60; // Typing speed in milliseconds

let index = 0;
const bioTextArea = document.getElementById('bio');

function typeText() {
if (index < text.length) {
    bioTextArea.value += text.charAt(index);
    index++;
    bioTextArea.scrollTop = bioTextArea.scrollHeight; 
    setTimeout(typeText, typingSpeed);
}
}

window.onload = function() {

bioTextArea.value = '';
typeText();

};

// contact-links
function updateLink() {
  const dropdown = document.getElementById("contact-dropdown");
  const selectedOption = dropdown.options[dropdown.selectedIndex];
  const link = document.getElementById("contactLink");

  link.href = selectedOption.value;

  link.textContent = (selectedOption.textContent !== 'email') ? 'visit link' : selectedOption.value;
}


// tab functionality
function openTab(tabId) {

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
      tab.classList.add('hidden');
    });

    let tabContent = document.getElementById(tabId);
    tabContent.classList.remove('hidden');
  }


function toggleCover() {
  let cover = document.querySelector('.cover');

  if (cover.style.height === '36vh') {
    cover.style.height = '0'
  } else {
    cover.style.height = '36vh'
  }
}

  