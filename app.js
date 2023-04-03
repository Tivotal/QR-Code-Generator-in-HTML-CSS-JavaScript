/* Created by Tivotal */
let wrapper = document.querySelector(".wrapper");
let qrInput = document.querySelector(".form input");
let btn = document.querySelector(".form button");
let qrImg = document.querySelector(".qr-code img");

btn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  btn.innerText = "generating QR code...";
  //returning if qr value is empty
  if (!qrValue) return;
  //if the value is not empty,
  //creating qr code by using qr server api
  qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    //after qr code loaded
    wrapper.classList.add("active");
    btn.innerText = "generate QR code";
  });
});
