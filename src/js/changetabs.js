document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tab-button").forEach(function (tabButton) {
      tabButton.addEventListener("click", function (e) {
        e.preventDefault();
  
        // Find the closest .tab-button element
        const clickedTabButton = e.target.closest(".tab-button");
  
        document.querySelectorAll(".tab-button").forEach(function (button) {
          button.classList.remove("tab-button-active");
        });
  
        const sidebarText = clickedTabButton.querySelector(".sidebar-text");
        const textBlockContent = sidebarText ? sidebarText.textContent : '';

        console.log(`textBlockContent ${textBlockContent}`)
        console.log(`Array.from ${Array.from(document.querySelectorAll(".w-tab-link"))}`)
  
        const tabLink = Array.from(document.querySelectorAll(".w-tab-link")).find((link) => {
            console.log(`link.textContent ${link.textContent.includes(textBlockContent)}`)
          return link.textContent.includes(textBlockContent);
        });
  
        if (tabLink) {
          tabLink.click();
        }
  
        clickedTabButton.classList.add("tab-button-active");
      });
    });
  });
  