import "./dropdownMenuClick.css";

const dropdownMenuButtons = document.querySelectorAll(".dropdown-menu-click");

dropdownMenuButtons.forEach((item) => {
  item.addEventListener("click", (event) => {
    dropdownMenuClick(event); // Show dropdown
  });
});

function dropdownMenuClick(event) {
  const clickedDropdownButton = event.target;
  const dropdownContents = clickedDropdownButton.nextElementSibling;

  dropdownContents.classList.toggle("visible");
  dropdownContents.classList.toggle("hidden");
}
