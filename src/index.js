import Tooltip from "./ninja-ui/tooltip";
import Dropdown from "./ninja-ui/dropdown";
import Tabs from "./ninja-ui/tabs";
import Snackbar from "./ninja-ui/snackbar";

const tooltip = new Tooltip(document.querySelector(".tooltip"));
const dropdowns = document.querySelectorAll(".dropdown");
const tabs = new Tabs(document.querySelector(".tabs"));
const button = document.querySelector(".snackbar-trigger");

tooltip.init();
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
tabs.init();

const snackbar = new Snackbar();
snackbar.init();

button.addEventListener("click", () => {
  snackbar.show("You clicked me :)");
});
