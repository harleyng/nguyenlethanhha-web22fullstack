const textInput = document.querySelector('textarea');
const remainElemnet = document.getElementById('remain');

textInput.addEventListener("input", () => {
    const inputLength = textInput.value.length;
    const remain = 200 - inputLength;
    // if(remain <= 0) {
    //     textInput.value = textInput.value.slice(0, 200);
    //     document.getElementById('remain').innerText = 0;
    // }else 
    remainElemnet.innerText = remain;
})