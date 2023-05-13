const input = document.getElementById("numOfWords");
const btn = document.getElementById("btn");
const container = document.querySelector(".container");



input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    generatePara();
  }
});

// -----------------------------------------GENERATE WORD -----------------------------------
const generateWord = (n) => {
  let word = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; ++i) {
    const random = Math.floor(Math.random() * 25);
    word += letters[random].toLowerCase();
  }
  return word;
}
// ----------------------------------------------GENERATE PARAGRAPH ---------------------------------------
const generatePara = () => {
    const numOfWords = Number(input.value);
    if (numOfWords <= 10000 && numOfWords > 0) {
        let data = "";
        for (let i = 0; i < numOfWords; ++i) {
            const randomNumber = (Math.random() * 15).toFixed(0);
            data += generateWord(randomNumber);
            data += " ";
        }

        // -------------------------------------CHANGING THE CONTENT OF PARA -------------------------------------  
        const para = document.createElement("div");

        para.setAttribute("class", "bg-gray-300 rounded-lg px-5 py-2 mx-6");

        para.innerHTML = `<button onclick="copyfunc(this)" class="px-3 border-[1px] border-gray-800 rounded-lg py-1 hover:bg-gray-700 hover:text-white hover:border-white">Copy</button><p>${data}</p>`;

        container.append(para);
        para.previousElementSibling.remove();
    } 

    else {
        alert("Enter Number Between 0 and 10000");
    }

    input.value = "";
}

// ------------------------------------------------------------------COPY FEATURE --------------------------------------------------------
const copyfunc =(e)=>{
    const area = e.nextElementSibling.innerHTML;
    navigator.clipboard.writeText(area).then(()=>{
        alert("Text Copied Successfully")
    })
}

