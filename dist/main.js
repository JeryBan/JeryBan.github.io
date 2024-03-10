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
  const dropdown = document.querySelector(".rpgui-dropdown");
  const selectedOption = dropdown.options[dropdown.selectedIndex];
  const link = document.getElementById("contactLink");

  link.href = selectedOption.value;

  link.textContent = (selectedOption.textContent !== 'email') ? 'visit link' : selectedOption.value;
}


// tab functionality
function openTab(panelId, tabId) {

  const hideTabs = function(containerId) {
      const tabs = document.querySelectorAll(`#${containerId} .tab`);
      tabs.forEach(function(tab) {
          tab.classList.add('hidden');
      });
  };

  const showTab = function(containerId, tabId) {
      let content = document.getElementById(tabId);
      content.classList.remove('hidden');
  };

  hideTabs(panelId);
  showTab(panelId, tabId);
}

// mobile tab funcionality
const Boxlayout = (() => {
  const wrapper = document.body,
    sections = [...document.querySelectorAll(".section")],
    closeButtons = [...document.querySelectorAll(".close-section")],
    expandedClass = "is-expanded",
    hasExpandedClass = "has-expanded-item";

  const initEvents = () => {
    sections.forEach((element) => {
      element.addEventListener("click", () => openSection(element));
    });
    closeButtons.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        closeSection(element.parentElement);
      });
    });
  };

  const openSection = (element) => {
    if (element.classList.contains(expandedClass)) return;
    element.classList.add(expandedClass);
    wrapper.classList.add(hasExpandedClass);
  };

  const closeSection = (element) => {
    if (!element.classList.contains(expandedClass)) return;
    element.classList.remove(expandedClass);
    wrapper.classList.remove(hasExpandedClass);
  };

  return { init: initEvents };
})();

Boxlayout.init();

  