let ulFillPeople = document.getElementById("ulFillPeople");
let ulFillShipp = document.getElementById("ulFillShipp");
let ulFillPeopleDva = document.getElementById("ulFillPeopleDva");
let ulFillShippDva = document.getElementById("ulFillShippDva");
let liInerOne = document.getElementById("liInerOne");
let liInerDva = document.getElementById("liInerDva");
let btnP = document.getElementById("btnFillOne");
let btnS = document.getElementById("btnFillDva");
let btnPDvaN = document.getElementById("btnFillOneOfNext");
let btnSDvaN = document.getElementById("btnFillDvaOfNext");
let btnPDvaB = document.getElementById("btnFillOneOfBack");
let btnSDvaB = document.getElementById("btnFillDvaOfBack");
btnP.textContent = 'Show'
btnS.textContent = 'Show'
btnPDvaN.classList.add("hide") 
btnSDvaN.classList.add("hide") 
btnPDvaB.classList.add("hide") 
btnSDvaB.classList.add("hide") 

function newListPeople(theJason) {
    ulFillPeopleDva.innerHTML = ""
            for (const i in theJason.results) {
                let liNode = document.createElement("li");
                liNode.classList.add("liCss")
                liNode.classList.add("font")
                liNode.classList.add("shadowIncide")
                liNode.classList.add("shadow")
                liNode.textContent = theJason.results[i].name
                ulFillPeopleDva.append(liNode);
            }
}



function almostLaste(theJason) {
    fetch(theJason)
    .then((a) => {
        return a.json();
    })
    .then((myJason) =>{
        return myJason.next
    })
}

let arr = [];
btnP.addEventListener("click", () => {
    fetch("https://swapi.dev/api/people/?page=1")
    .then((a) =>{
        return a.json();
    })
    .then((myJason) =>{
        if (arr.length === 0) {
            arr.push(1);
            arr.push(1);
            btnP.textContent = 'Hide'
            newListPeople(myJason)
            btnPDvaN.classList.remove("hide");
        }else{
            if (arr.length > 1) {
                ulFillPeopleDva.classList.add("hide")
                liInerOne.classList.add("liIner")
                arr.pop(1);
                btnP.textContent = 'Show'
                btnPDvaN.classList.add("hide");
                btnPDvaB.classList.add("hide") 
            }else {
                ulFillPeopleDva.classList.remove("hide")
                liInerOne.classList.remove("liIner")
                arr.push(1);
                btnP.textContent = 'Hide'
                btnPDvaN.classList.remove("hide");
                btnPDvaB.classList.remove("hide") 
            }
        }
    })
})

let arrDva = [1];
btnPDvaN.addEventListener("click",() => {
    btnPDvaB.classList.remove("hide") 
    arrDva.push(1);
   let sum = arrDva.length
    
    fetch(`https://swapi.dev/api/people/?page=${sum}`)
    .then((a) =>{
        return a.json();
    })
    .then((myJason) => {
        if (myJason.next === null) {
            btnPDvaN.classList.add("hide")
        }
        newListPeople(myJason)
    }) 
})

btnPDvaB.addEventListener("click",() => { 
    arrDva.pop(1);
    let sum = arrDva.length
    fetch(`https://swapi.dev/api/people/?page=${sum}`)
    .then((a) =>{
        return a.json();
    })
    .then((myJason) => {
        if (sum >= 8) { // nemozam s onext da go napravam
            btnPDvaN.classList.remove("hide")
        }
        if (myJason.previous === null) {
            btnPDvaB.classList.add("hide")
        }
        newListPeople(myJason)
    })
})

////

function newListShips(theJason) {
    ulFillShippDva.innerHTML = ""
            for (const i in theJason.results) {
                let liNode = document.createElement("li");
                liNode.classList.add("liCss")
                liNode.classList.add("font")
                liNode.classList.add("shadowIncide")
                liNode.classList.add("shadow")
                liNode.textContent = theJason.results[i].name
                ulFillShippDva.append(liNode);
            }
}

let arrSh = [];
btnS.addEventListener("click", () => {
    fetch("https://swapi.dev/api/starships/?page=1")
    .then((a) =>{
        return a.json();
    })
    .then((myJason) =>{
        if (arrSh.length === 0) {
            arrSh.push(1);
            arrSh.push(1);
            btnS.textContent = 'Hide'
            newListShips(myJason)
            btnSDvaN.classList.remove("hide");
        }else{
            if (arrSh.length > 1) {
                ulFillShippDva.classList.add("hide")
                liInerDva.classList.add("liIner")
                arrSh.pop(1);
                btnS.textContent = 'Show'
                btnSDvaN.classList.add("hide");
                btnSDvaB.classList.add("hide") 
            }else {
                ulFillShippDva.classList.remove("hide")
                liInerDva.classList.remove("liIner")
                arrSh.push(1);
                btnS.textContent = 'Hide'
                btnSDvaN.classList.remove("hide");
                btnSDvaB.classList.remove("hide") 
            }
        }
    })
})

let arrShDva = [1];
btnSDvaN.addEventListener("click",() => {
    btnSDvaB.classList.remove("hide") 
    arrShDva.push(1);
   let sum = arrShDva.length
    // if (myJason.next === null) {
    //     btnSDvaN.classList.add("hide")
    // }
    fetch(`https://swapi.dev/api/starships/?page=${sum}`)
    .then((a) =>{
        return a.json();
    })
    .then((myJason) => {
        newListShips(myJason)
        if (myJason.next === null) {
            btnSDvaN.classList.add("hide")
        }
    }) 
})

btnSDvaB.addEventListener("click",() => { 
    arrShDva.pop(1);
    let sum = arrShDva.length
    // if (sum >= 4) {
    //     btnSDvaN.classList.remove("hide")
    // }
    // if (myJason.previous === null) {
    //     btnSDvaB.classList.add("hide")
    // }
    fetch(`https://swapi.dev/api/starships/?page=${sum}`)
    .then((a) =>{
        return a.json();
    })
    .then((myJason) => {
        newListShips(myJason)
        if (sum >= 3) {
            btnSDvaN.classList.remove("hide")
        }
        if (myJason.previous === null) {
            btnSDvaB.classList.add("hide")
        }
    })
})