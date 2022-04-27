import Tooltip from "./ninja-ui/tooltip";
import Dropdown from "./ninja-ui/dropdown";
import Tabs from "./ninja-ui/tabs";

const tooltip = new Tooltip(document.querySelector(".tooltip"));
const dropdowns = document.querySelectorAll(".dropdown");
const tabs = new Tabs(document.querySelector(".tabs"));

tooltip.init();
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
tabs.init();
