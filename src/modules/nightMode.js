export function enableNightMode() {
    const toggleThemeButton = document.getElementById("toggle-theme");
    const html = document.documentElement;
  
    function toggleNightMode() {
      if (html.classList.contains("night-mode")) {
        html.classList.remove("night-mode");
        localStorage.setItem("nightMode", "disabled");
      } else {
        html.classList.add("night-mode");
        localStorage.setItem("nightMode", "enabled");
      }
    }
  
    // Apply the night mode if it was previously enabled
    if (localStorage.getItem("nightMode") === "enabled") {
      html.classList.add("night-mode");
    }
  
    toggleThemeButton.addEventListener("click", toggleNightMode);
  }
  
  export default enableNightMode;