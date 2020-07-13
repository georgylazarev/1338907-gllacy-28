var popupButton = document.querySelector(".popup-button");
var popupWrapper = document.querySelector(".popup-wrapper");
var popupBlock = document.querySelector(".popup");
var popupClose = document.querySelector(".popup-close");
var popupForm = document.querySelector(".popup-form");
var userName = document.querySelector(".user-name");
var userEmail = document.querySelector(".user-email");
var userMessage = document.querySelector(".user-message");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmain");
}
catch (err) {
  isStorageSupport = false;
}

popupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrapper.classList.add("popup-show");
  userName.focus();

  if (storageName) {
    userName.value = storageName;
    userEmail.focus();
  }

  if (storageEmail) {
    userEmail.value = storageEmail;
    userMessage.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrapper.classList.remove("popup-show");
  popupBlock.classList.remove("popup-error");
});

popupForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    popupBlock.classList.remove("popup-error");
    popupBlock.offsetWidth = popupBlock.offsetWidth;
    popupBlock.classList.add("popup-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmain", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupWrapper.classList.contains("popup-show")) {
      evt.preventDefault();
      popupWrapper.classList.remove("popup-show");
      popupBlock.classList.remove("popup-error");
    }
  }
});
