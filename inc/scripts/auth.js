let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));
let Displayname = document.getElementById("display-name");
let SignoutBtn = document.getElementById("signoutbutton");

if (UserInfo) {
  Displayname.innerText = UserInfo.name;
}

let Signout = () => {
  sessionStorage.removeItem("user-creds");
  sessionStorage.removeItem("user-info");
  window.location.href = "index.html";
};

let CheckCred = () => {
  if (!sessionStorage.getItem("user-creds"))
    window.location.href = "index.html";
  else {
    Displayname.innerText = UserInfo.name;
  }
};
window.addEventListener("load", CheckCred);
SignoutBtn.addEventListener("click", Signout);
