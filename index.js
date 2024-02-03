//document.getElementById("count").innerText=5;
//let countEl = document.getElementById("count-el")

if (typeof window!=="undefined"){
    let countEl = document.getElementById("count");
    let count = 0;
    let saveEl = document.getElementById("save-el")

    function increment(){
        count +=1;
        countEl.textContent = count;
    
    }

    function save(){
        let countDash = count + " - ";
        saveEl.textContent += countDash;
    }

}
