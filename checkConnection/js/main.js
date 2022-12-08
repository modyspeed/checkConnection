//get element
let title = document.getElementById("title");
let reload = document.getElementById("reload");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
window.onload = function () {
  if (window.navigator.onLine) {
    online();
  } else {
    offline();
  }
};
window.addEventListener("online", function () {
  online();
});
window.addEventListener("offline", function () {
  offline();
});

//online
function online() {
  title.innerHTML = "online now";
  title.style.color = "green";
  ul.classList.add("hide");
  reload.classList.add("hide");
}

//offline
function offline() {
  title.innerHTML = "offline now";
  title.style.color = "gray";
  ul.classList.remove("hide");
  reload.classList.remove("hide");
}

//reload
reload.onclick = () => {
  location.reload();
};
