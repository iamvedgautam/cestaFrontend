
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
  
  let element = document.getElementById("search-text-name");
  console.log(`<h1>${element.value}</h1>`);
  document.getElementById("header-left").innerHTML = `<h1>${element.value}</h1>`;
  if (element.value)
  loadHtml('cesta');
}

function loadHtml(id) {
  // console.log("Hello");
  console.log(id);
  console.log(`div id: ${id}`);
  elements = ['dashboard', 'created', 'subscribed', 'search', 'cesta']

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
  if (id != "cesta") {
    document.getElementById("header-left").innerHTML = "";
  }
  document.getElementById("open-button-1").innerText = 'Subscribe';
  document.getElementById("open-button-1").disabled = false;
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
  "Ved Cest",
  "Rohit Cest",
  "Savinay Cest",
  "Ishan Cest",
  "John Cest",
  "Abby Cest",
  "Carl Cest",
  "Dan Cest",
  "Ethan Cest",
  "Farhan Cest",
  "George Cest",
  "Jack Cest",
  "Kat Cest",
  "Louis Cest",
  "Matt Cest",
  "Naman Cest",
  "Will Cest",
  "Ram Cest",
  "Venom Cest",
  "Sam Cest",
  "Ishm Cest",
  "Jill Cest",
  "Nats Cest"

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
    console.log(userData);
    let emptyArray = [];
    if(userData){
        // icon.onclick = ()=>{
        //     webLink = `https://www.google.com/search?q=${userData}`;
        //     linkTag.setAttribute("href", webLink);
        //     linkTag.click();
        //     window.open("http://monkey=" + text + "&red");
        // }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        console.log(emptyArray);
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
        console.log(allList);
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    // icon.onclick = ()=>{
    //   loadHtml(id, filename);
    // }
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


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


let created_data = {"Cesta Ved": "10%"};
var tableRefCreated = document.getElementById('created-table').getElementsByTagName('tbody')[0];
for (const [key, value] of Object.entries(created_data)) {
  tableRefCreated.insertRow().innerHTML = "<td>" +key+ "</td>"+
  "<td>" +value+ "</td>";
}


let subs_data = {"Cesta Rohit": ["Rohit", "10%"]};
var tableRefSubs = document.getElementById('subscribed-table').getElementsByTagName('tbody')[0];
for (const [key, value] of Object.entries(subs_data)) {
  tableRefSubs.insertRow().innerHTML = "<td>" +key+ "</td>"+
  "<td>" +value[0]+ "</td>"+
  "<td>" +value[1]+ "</td>";
}

const created_cesta = {"U.S. Gold Corp. (USAU)": "100", "N. Brown Group PLC (BWNG)": "200", 
"C Security Systems AB (CSEC)": "333", "A Clean Slate Inc. (DRWN)": "120", "AMZN": "500"};
var tableRefCesta = document.getElementById('cesta-table').getElementsByTagName('tbody')[0];
for (const [key, value] of Object.entries(created_cesta)) {
  tableRefCesta.insertRow().innerHTML = "<td>" +key+ "</td>"+
  "<td>" +value+ "</td>";
}

function subscribe() {
  let cest = document.getElementById("header-left").innerText;
  
  tableRefSubs.insertRow().innerHTML = "<td>" +cest+ "</td>"+
  "<td>" +cest.split(" ")[0]+ "</td>"+
  "<td>" + "0%" + "</td>";

  document.getElementById("open-button-1").innerText = 'Subscribed';
  document.getElementById("open-button-1").disabled = true;

}