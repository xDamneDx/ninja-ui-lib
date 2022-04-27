import "./styles/tabs.css";

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".trigger");
  }
  toggleTabs(e) {
    this.tabs.forEach((tab) => tab.classList.remove("active"));
    e.target.classList.add("active");
  }
  toggleContent(e) {
    const selector = e.target.getAttribute("data-target");
    this.container
      .querySelectorAll(".content")
      .forEach((item) => item.classList.remove("active"));
    this.container.querySelector(selector).classList.add("active");
  }
  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
}

export { Tabs as default };
