const inutItam = document.querySelector(".inutItam");
const QR_code = document.querySelector(".QR_code");
const generateQR = document.querySelector(".generate-QR");
const qrCodeBox = document.querySelector(".qrCodeBox");
const apiLink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

const makeQR =()=>{
    if(inutItam.value.length > 0){
        QR_code.src = apiLink + inutItam.value ;
        qrCodeBox.classList.add("showQR");
    }else{
        inutItam.classList.add("error");
        setTimeout(()=>{
            inutItam.classList.remove("error");
        },1500)
    }
}
generateQR.addEventListener("click",()=>{
    makeQR();
})