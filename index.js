let userName;
let userCount = 0;
let userData = [];
let timer;

btnCountElement = document.getElementById("btn-count");
btnNameElement = document.getElementById("btn-name");
btnCountElement.setAttribute("disabled", "disabled");

const getUsername = () => {
  do {
    userName = prompt("Enter your username");
  } while (userName == "");
  btnCountElement.removeAttribute("disabled");
  btnNameElement.setAttribute("disabled", "disabled");
};

const handleOnClick = () => {
  if (!timer) {
    startTimer();
  }
  userCount++;
};
const handleOnClickName = () => {
  getUsername();
};
const startTimer = () => {
  timer = setTimeout(displayCount, 2000);
};

const displayCount = () => {
  let userObj = { name: userName, count: userCount };
  userData.push(userObj);
  let tableHeadElement = ["<table><tr><th>Name</th><th>Count</th></tr>"];
  let tableEndElement = ["</table>"];
  let tableRows = [];

  let tableRow = userData.map((userItem) => {
    let pushTableRow =
      "<tr><td>" + userItem.name + "</td><td>" + userItem.count + "</td></tr>";
    tableRows = [];
    tableRows.push(pushTableRow);
    return tableRows;
  });

  let rawTableRow = tableRow.join("");
  let tableHtmlElements = [tableHeadElement, rawTableRow, tableEndElement];
  let tableHtml = tableHtmlElements.join("");

  document.getElementById("user-data").innerHTML = tableHtml;
  btnCountElement.setAttribute("disabled", "disabled");
  btnNameElement.removeAttribute("disabled");
  resetPage();
};

const resetPage = () => {
  userCount = 0;
  timer = null;
};
