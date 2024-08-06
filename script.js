document.getElementById("insertButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentUrl = new URL(tabs[0].url);
      const domain = currentUrl.hostname;
  
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: insertHtmlElement,
        args: [domain],
      });
    });
  });
  
  
  function insertHtmlElement(domain) {
    console.log("Domain:", domain); 
    function ark() {
        const selector = ".main_slider";
        const htmlElement = `
          <div class="container" style="width:100%;aspect-ratio:16/9;margin:0px;padding:0px;overflow:hidden;">
      <iframe src="https://portfolio.urbanvueinteractive.com" style="border:none;margin:auto;height:100%;width:100%;"></iframe>
      </div>`;
        const targetElement = document.querySelector(selector);
        if (targetElement) {
          targetElement.insertAdjacentHTML("afterbegin", htmlElement);
        } else {
          console.error(`Selector "${selector}" not found.`);
        }
        const articleElement = document.querySelector(".main_slider article");
        if (articleElement) {
          articleElement.style.display = "none";
        }
      }
      
      function skyline() {
        const selector = ".kLNMFH";
        const htmlElement = `
          <div style="width:100%; display:flex; justify-content:center;margin-bottom:0px;"><div class="container" style="height:100%;aspect-ratio:16/9;margin:0px;padding:0px;overflow:hidden;">
      <iframe src="https://portfolio.urbanvueinteractive.com" style="border:none;margin:auto;height:100%;width:100%;"></iframe>
      </div></div>`;
        const targetElement = document.querySelector(selector);
        if (targetElement) {
          targetElement.insertAdjacentHTML("afterbegin", htmlElement);
        } else {
          console.error(`Selector "${selector}" not found.`);
        }
      
        const imgElement = document.querySelector(".kLNMFH img");
        if (imgElement) {
          imgElement.style.display = "none";
        }
      }
      
      
      // This should now work
    switch (domain) {
      case "arkbuilders.co.in":
        ark();
        break;
      case "skylinehectares.com":
        skyline();
        break;
      default:
        console.log("Domain not recognized");
        break;
    }
  }