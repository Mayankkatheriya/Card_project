let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let country = document.querySelector("#country");
let phoneNumber = document.querySelector("#phone-number");
let state = document.querySelector("#state");
let city = document.querySelector("#city");
let village = document.querySelector("#village");
let toggle = document.querySelector("#toggle");

function fillDetails() {
  if (localStorage.getItem("fName")) {
    let key = "fName";
    firstName.innerHTML = `
    ${localStorage.getItem("fName")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  } else {
    let key = "fName";
    let fName = window.prompt("Enter Your First Name");
    localStorage.setItem("fName", fName);
    firstName.innerHTML = `
    ${localStorage.getItem("fName")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  }
  if (localStorage.getItem("lName")) {
    let key = "lName";
    lastName.innerHTML = `
    ${localStorage.getItem("lName")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  } else {
    let key = "lName";
    let lName = window.prompt("Enter Your Last Name");
    localStorage.setItem("lName", lName);
    lastName.innerHTML = `
    ${localStorage.getItem("lName")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  }
  if (localStorage.getItem("cCountry")) {
    let key = "cCountry";
    country.innerHTML = `
    ${localStorage.getItem("cCountry")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  } else {
    let key = "cCountry";
    let cCountry = window.prompt("Enter Country of Residence");
    localStorage.setItem("cCountry", cCountry);
    country.innerHTML = `
    ${localStorage.getItem("cCountry")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  }
  if (localStorage.getItem("pNum")) {
    let key = "pNum";
    phoneNumber.innerHTML = `
    ${localStorage.getItem("pNum")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  } else {
    let key = "pNum";
    let pNum = window.prompt("Enter Phone Number");
    localStorage.setItem("pNum", pNum);
    phoneNumber.innerHTML = `
    ${localStorage.getItem("pNum")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  }
  if (localStorage.getItem("sState")) {
    let key = "sState";
    state.innerHTML = `
    ${localStorage.getItem("sState")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  } else {
    let key = "sState";
    let sState = window.prompt("Enter State of Residence");
    localStorage.setItem("sState", sState);
    state.innerHTML = `
    ${localStorage.getItem("sState")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  }
  if (localStorage.getItem("ciCity")) {
    let key = "ciCity";
    city.innerHTML = `
    ${localStorage.getItem("ciCity")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  } else {
    let key = "ciCity";
    let ciCity = window.prompt("Enter City of Residence");
    localStorage.setItem("ciCity", ciCity);
    city.innerHTML = `
    ${localStorage.getItem("ciCity")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  }
  if (localStorage.getItem("vlg")) {
    let key = "vlg";
    village.innerHTML = `
    ${localStorage.getItem("vlg")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  } else {
    let key = "vlg";
    let vlg = window.prompt("Enter Village of Residence");
    localStorage.setItem("vlg", vlg);
    village.innerHTML = `
    ${localStorage.getItem("vlg")}
    <i class="fa-solid fa-arrows-rotate" onclick = "changeField('${key}')"></i>
    `;
  }
}
fillDetails();

function changeField(key) {
  localStorage.removeItem(key);
  fillDetails();
}
function resetAll() {
  localStorage.clear();
  location.reload();
}

//TODO Dark theme
let flag = false;
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (flag == false) {
    toggle.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64Zm-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"/>
      </svg>
      `;
    flag = true;
  } else {
    toggle.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000000" d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"/>
      </svg>
      `;
    flag = false;
  }
});
