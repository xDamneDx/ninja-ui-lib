import Tooltip from "./ninja-ui/tooltip";
import Dropdown from "./ninja-ui/dropdown";

const tooltip = new Tooltip(document.querySelector(".tooltip"));
const dropdowns = document.querySelectorAll(".dropdown");

tooltip.init();
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
