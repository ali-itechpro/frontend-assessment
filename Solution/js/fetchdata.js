// Fetching data from json
async function fetchData() {
  let url =
    "https://raw.githubusercontent.com/mindarc/frontend-assessment/master/data.json";
  try {
    let response = await fetch(url);
    //console.log(response);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

// Rendering Data
async function renderData() {
  let data = await fetchData();
  let html = "";
  data.forEach((_data) => {
    let htmlSegment = `
      <li data-title="${_data.title}" class="box-shadow tabs_content">${_data.content}</li>
                      `;
    html += htmlSegment;
  });
  let dataContainer = document.querySelector("#tabs-h");
  dataContainer.innerHTML = html;
  //console.log(html);
  new VanillaTabs({
    selector: "#tabs-h", // default is ".tabs"
    type: "horizontal", // can be horizontal / vertical / accordion
    responsiveBreak: 840, // tabs become accordion on this device width
    activeIndex: 0, // active tab index (starts from 0 ). Can be -1 for accordions.
  });
}

renderData();

console.log("b" + "a" + +"a" + "a");
