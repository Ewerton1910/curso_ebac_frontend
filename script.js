
const form = document.getElementById("form");
const campoA = document.getElementById("campoA")
const campoB = document.getElementById("campoB")

function valida(){
    if((campoA).value > (campoB).value){
    console.log("error")

    }else {
    let mensagemSucesso = `O número digitado no campo (A) é o ${campoA.value}, e o número       do campo (B) é o ${campoB.value}.`;
    const containerMmsgSuccess = document.querySelector(".success-msg");
    containerMmsgSuccess.innerHTML = mensagemSucesso;
    containerMmsgSuccess.style.display = "block";
    campoA.value = "";
    campoB.value = "";
    }
    console.log(campoA.value)
}

campoB.addEventListener("keyup", ()=>{
    if((campoA).value > (campoB).value){
    console.log("error")
    campoB.classList.add("error");
    document.querySelector(".msg-error").style.display = "block";
    }
    campoB.addEventListener("keyup", (e) => {
    if (e.key === "delete") {
    }
    campoB.classList.remove("error");
    document.querySelector(".msg-error").style.display = "none";
    });
})

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    valida()
})
