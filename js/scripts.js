
// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

function check () {
  console.log("Hello");
}

function loadHtml(id, filename) {
  console.log("Hello");
  console.log(id);
  console.log(`div id: ${id}, filename: ${filename}`);
  elements = ['dashboard', 'created', 'subscribed', 'search']

  for (let i = 0; i < elements.length; i++) {
    if (id == elements[i]) {
      let element = document.getElementById(id);
      document.getElementById(elements[i]).style.display="initial";
      // fillTable("created",document.querySelector('created-table'));
    }
    else {
      document.getElementById(elements[i]).style.display="none"
    }
  }

  const table = ['created', 'subscribed'];
  // if (table.includes(id)) {
  //   fillTable("created",document.querySelector('created-table'))
  // }
}


// ---------- Created ----------
async function fillTable(url, table) {
  // const tableHead = table.querySelector('thead');
  const tableBody = table.querySelector('tbody');
  // const response = await fetch(url);
  // const data = await response.json();

  const data = [{"Name": "Ved Cesta", "Profit":"10%"},
  {"Name": "Ved Cesta", "Profit":"10%"},
  {"Name": "Ved Cesta", "Profit":"10%"},
  {"Name": "Ved Cesta", "Profit":"10%"}]

  console.log(data[0]);



  // putting headers
  for (const headerText in data[0]) {
    const headerElement = document.createElement("th");
    headerElement.textContent = headerText;
    tableHead.querySelector('tr').appendChild(headerElement);
  }

}

function plotPiChart(id, name) {
  // set the data
  var data = [
    {x: "AMZN", value: 10},
    {x: "APPL", value: 20},
    {x: "ORACLE", value: 30},
    {x: "GOOGL", value: 40}
  ];
  var chart = anychart.pie();
  // set the chart title
  chart.title(name);

  // add the data
  chart.data(data);
  // chart.legend().position("right");
  // display the chart in the container
  chart.container(id);
  chart.draw();
}

plotPiChart("pi-chart", "Created Protfolio");
plotPiChart("area-chart", "Subscribed Protfolio");


// ---------- Search Bar ----------

let suggestions = [
  "APPL",
  "AMZN",
  "ORACLE",
  "TESLA",
  "META",
  "ALFJ",
  "FJLS"
];

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}








// ---------- CHARTS ----------

// BAR CHART
// var barChartOptions = {
//   series: [{
//     data: [10, 8, 6, 4, 2]
//   }],
//   chart: {
//     type: 'bar',
//     height: 350,
//     toolbar: {
//       show: false
//     },
//   },
//   colors: [
//     "#246dec",
//     "#cc3c43",
//     "#367952",
//     "#f5b74f",
//     "#4f35a1"
//   ],
//   plotOptions: {
//     bar: {
//       distributed: true,
//       borderRadius: 4,
//       horizontal: false,
//       columnWidth: '40%',
//     }
//   },
//   dataLabels: {
//     enabled: false
//   },
//   legend: {
//     show: false
//   },
//   xaxis: {
//     categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
//   },
//   yaxis: {
//     title: {
//       text: "Count"
//     }
//   }
// };

// var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
// barChart.render();


// AREA CHART
// var areaChartOptions = {
//   series: [{
//     name: 'Purchase Orders',
//     data: [31, 40, 28, 51, 42, 109, 100]
//   }, {
//     name: 'Sales Orders',
//     data: [11, 32, 45, 32, 34, 52, 41]
//   }],
//   chart: {
//     height: 350,
//     type: 'area',
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ["#4f35a1", "#246dec"],
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: 'smooth'
//   },
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//   markers: {
//     size: 0
//   },
//   yaxis: [
//     {
//       title: {
//         text: 'Purchase Orders',
//       },
//     },
//     {
//       opposite: true,
//       title: {
//         text: 'Sales Orders',
//       },
//     },
//   ],
//   tooltip: {
//     shared: true,
//     intersect: false,
//   }
// };

// var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
// areaChart.render();