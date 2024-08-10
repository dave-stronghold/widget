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
  const url = "http://localhost:8080";
  
  const rawIframe = `
          <div class="container" style="width:100%;aspect-ratio:16/9;margin:0px;padding:0px;overflow:hidden;">
      <iframe allowfullscreen="true" 
        webkitallowfullscreen="true" 
        mozallowfullscreen="true" 
        msallowfullscreen="true" 
        oallowfullscreen="true"  src=${url} style="border:none;margin:auto;height:100%;width:100%;"></iframe>
      </div>`;
  console.log("Domain:", domain);

  function ark() {
    const selector = ".main_slider";
    const htmlElement = rawIframe;
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
  ${rawIframe}</div>`;
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

  function dac() {
    const selector1 = "#pfplansec .nav-tabs";
    const selector2 = ".tab-content";
    const selector3 = "#pDetailIntro .fusion-imageframe";

    const html1 = `<li role="presentation" ><a class="tab-link" data-toggle="tab" role="tab" aria-controls="tab-fd74eae34dcdc7be168" aria-selected="false" id="fusion-tab-iw" href="#tab-iw" tabindex="-1"><h4 class="fusion-tab-heading fusion-responsive-typography-calculated" data-fontsize="14" style="--fontSize: 14; line-height: 1.2;" data-lineheight="16.8px">INTERACTIVE WALKTHROUGH</h4></a></li>`;
    const html2 = `<div
  class="tab-pane fade fusion-clearfix  in"
  role="tabpanel"
  tabindex="0"
  aria-labelledby="fusion-tab-iw"
  id="tab-iw"
>
  <div
    id=""
    class="simple-resp-tabs typicalPlan "
    style="display: block; width: 100%; margin: 0px;"
  >
    <div
      class="resp-tabs-container hor_1"
      style="
    padding-right: 0px;
    width: 100%;
"
    >
  ${rawIframe}
    </div>
  </div>
</div>`;
    const html3 = `${rawIframe}<div style="margin-bottom:16px;"></div>`;
    const html4 = `${rawIframe}<div style="margin-bottom:100px;"></div>`;

    const targetElement1 = document.querySelector(selector1);
    const targetElement2 = document.querySelector(selector2);
    const targetElement3 = document.querySelector(selector3);
    const targetElement4 = document.querySelector('body');

    if (targetElement1) {
      targetElement1.insertAdjacentHTML("beforeend", html1);
    } else {
      console.error(`Selector "${selector1}" not found.`);
    }
    if (targetElement2) {
      targetElement2.insertAdjacentHTML("beforeend", html2);
    } else {
      console.error(`Selector "${selector2}" not found.`);
    }

    if (targetElement3) {
      document.querySelector('#pDetailIntro .fusion-imageframe img').style.display='none'
      targetElement3.insertAdjacentHTML("beforeend", html3);
    } else {
      console.error(`Selector "${selector3}" not found.`);
    }
    if (targetElement4) {
      targetElement4.insertAdjacentHTML("beforeend", html4);
    } 
    document.querySelector('#projectsMenu .stikyLogo.mtp img').style.width='50%'

  }

  // This should now work
  switch (domain) {
    case "arkbuilders.co.in":
      ark();
      break;
    case "skylinehectares.com":
      skyline();
      break;
    case "dacdevelopers.com":
      dac();
      break;
    default:
      console.log("Domain not recognized");
      break;
  }
}

// https://portfolio.urbanvueinteractive.com

//#pfplansec .nav-tabs

//#tab-content
