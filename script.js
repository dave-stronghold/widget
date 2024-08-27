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
  // const url = "https://portfolio.urbanvueinteractive.com";
  const url = "http://localhost:8080";

  const rawIframe = `
          <div class="container" style="width:100%;aspect-ratio:16/9;margin:0px;padding:0px;overflow:hidden;">
      <iframe allowfullscreen="true" 
        webkitallowfullscreen="true" 
        mozallowfullscreen="true" 
        msallowfullscreen="true" 
        oallowfullscreen="true"  src=${url} style="border:none;margin:auto;height:100%;width:100%;"></iframe>
      </div>`;
  
  const raw2=    `
          <div  style="width:100%;aspect-ratio:16/9;margin:0px;padding:0px;overflow:hidden;">
      <iframe allowfullscreen="true" 
        webkitallowfullscreen="true" 
        mozallowfullscreen="true" 
        msallowfullscreen="true" 
        oallowfullscreen="true"  src=${url} style="border:none;margin:auto;height:100%;width:100%;"></iframe>
      </div>`
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
    const html4 = `${rawIframe}`;

    const targetElement1 = document.querySelector(selector1);
    const targetElement2 = document.querySelector(selector2);
    const targetElement3 = document.querySelector(selector3);
    // const targetElement4 = document.querySelector('body');
    const targetElement4 = document.querySelector("#OurHappyFamilySec");

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
      document.querySelector(
        "#pDetailIntro .fusion-imageframe img"
      ).style.display = "none";
      targetElement3.insertAdjacentHTML("beforeend", html3);
    } else {
      console.error(`Selector "${selector3}" not found.`);
    }
    if (targetElement4) {
      targetElement4.insertAdjacentHTML("afterend", html4);
    }
    document.querySelector("#projectsMenu .stikyLogo.mtp img").style.width =
      "50%";
  }

  function primemeridian() {
    const selector1 =
      "body > div.elementor.elementor-33 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-2a22658.elementor-section-full_width.elementor-section-content-middle.elementor-section-height-default.elementor-section-height-default > div.elementor-container.elementor-column-gap-no > div.elementor-column.elementor-col-66.elementor-top-column.elementor-element.elementor-element-84fdc95 > div > div > div";
    const selector2 =
      "body > div.elementor.elementor-33 > section.elementor-section.elementor-top-section.elementor-element.elementor-element-9c95795.elementor-section-full_width.elementor-section-height-min-height.elementor-section-height-default.elementor-section-items-middle.lazyloaded";
    const image = `${selector1} img`;
    const htmlElement = rawIframe;
    const targetElement1 = document.querySelector(selector1);
    const targetElement2 = document.querySelector(selector2);
    if (targetElement1) {
      targetElement1.insertAdjacentHTML("afterbegin", htmlElement);
    }
    if (targetElement2) {
      targetElement2.insertAdjacentHTML("afterbegin", htmlElement);
    } else {
      console.error(`Selector "${selector1}" not found.`);
    }
    document.querySelector(image).style.display = "none";
    document.querySelector(
      `.elementor-element-9c95795 > .elementor-container`
    ).style.display = "none";
  }

  function kenthomes() {
    const selector = "#__next >  main ";
    const htmlElement = `<div class="d-none d-lg-block" style="width:100vw">${raw2}</div>`;
    document.querySelector(".ProjectDetails_book_btn__7g_Cx").style.display =
      "none";
    document.querySelector(".CookiesCard_cookie_wrap__tay8o").style.display =
      "none";
    document.querySelector(
      ".ProjectDetails_booking_sticky__lu3Ii "
    ).style.width = "0px";
    document.querySelector(
      ".ProjectDetails_booking_sticky__lu3Ii .container"
    ).style.display = "none";
    document.querySelector(
      "#__next > main > section.ProjectDetails_project_banner__7nB3J.visible > div.carousel.slide > div > div"
    ).style.display = "none";
    const targetElement = document.querySelector(selector);
    if (targetElement) {  
      targetElement.insertAdjacentHTML("afterbegin", htmlElement);
    } else {
      console.error(`Selector "${selector}" not found.`);
    }
  }

  function sisflorence(){
    const selector = ".section_1";
    document.querySelector(selector).insertAdjacentHTML('afterbegin',rawIframe);
    document.querySelector('#home > div.bg-responsive.bg-banner-first').style.display='none'  
    document.querySelector('#virtualtour').style.marginTop='120px'  
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
    case "primemeridian.in":
      primemeridian();
      break;
    case "www.kenthomes.in":
      kenthomes();
      break;
    case "www.sis.in":
      sisflorence();
      break;
    default:
      console.log("Domain not recognized");
      break;
  }
}

// https://portfolio.urbanvueinteractive.com

//#pfplansec .nav-tabs

//#tab-content
