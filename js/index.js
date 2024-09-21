let imgBox = document.querySelector("#imgBox");
let imageQr = document.querySelector("#imageQr");
let input = document.querySelector("input");
let button = document.querySelector("button");

const GenerateQr = () => {
  if (input.value.length > 0) {
    imageQr.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      input.value;
    imgBox.classList.add("show-img");
  } else {
    input.classList.add("error");
    setTimeout(()=>{
        input.classList.remove("error")
    },1000)
  }
};
button.addEventListener("click", () => {
  GenerateQr();
});
