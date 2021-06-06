let srchP = document.getElementById("searchP")
let btn = document.getElementById("btn")
let srchS = document.getElementById("searchS")
let btnDva = document.getElementById("btnDva")
let tableDiv = document.getElementById("table")
let tbPeople = document.getElementById("tablePeople")
let peopleName = document.getElementById("name")
let peopleHeight = document.getElementById("height")
let peopleMass = document.getElementById("mass")
let peopleSpecialName = document.getElementById("specialName")
let peopleBYear = document.getElementById("bYear")
let peopleAppear = document.getElementById("appear")
let peopleTableShipp = document.getElementById("tableShipp")
let shippName = document.getElementById("nameS")
let shippModel = document.getElementById("model")
let shippManufacturer = document.getElementById("manufacturer")
let shippCost = document.getElementById("cost")
let shippCapasity = document.getElementById("peopleCapacity")
let shippClass = document.getElementById("class")
let fillTabelP = document.getElementById("tableFillPeople")
let fillTabelS = document.getElementById("tableFillShipp")
let tableRoP = document.getElementById("tableRoP")
let tableRoS = document.getElementById("tableRoS")

// People Table
btn.addEventListener("click", () => {
    fetch("https://swapi.dev/api/people/?page=1")
    .then((a) =>{
        return a.json();
    })
    .then((myJason) =>{
            for (const i in myJason.results) {
                if (srchP.value == myJason.results[i].name) {
                    
                    tableRoP.classList.remove("hide")

                    peopleName.textContent =  myJason.results[i].name
                    peopleHeight.textContent =  myJason.results[i].height
                    peopleMass.textContent =  myJason.results[i].mass
                    let spisis = myJason.results[i].species[0];
                    fetch(spisis)
                    .then((a) => {
                        return a.json();
                    })
                    .then((theJason) => {
                        peopleSpecialName.textContent = theJason.name
                    }) 
                    peopleBYear.textContent =  myJason.results[i].birth_year
                    peopleAppear.textContent = myJason.results[i].films.length

                } else {
                    console.log("not found")
                }
            }
    })
})

// Ships Tabel
btnDva.addEventListener("click", () => {
    fetch("https://swapi.dev/api/starships/?page=1")
    .then((a) =>{
        return a.json();
    })
    .then((myJason) =>{
            for (const i in myJason.results) {
                if (srchS.value == myJason.results[i].name) {
                    
                    tableRoS.classList.remove("hide")

                    shippName.textContent =  myJason.results[i].name
                    shippModel.textContent =  myJason.results[i].model
                    shippManufacturer.textContent =  myJason.results[i].manufacturer
                    shippCost.textContent = myJason.results[i].cost_in_credits 
                    shippCapasity.textContent = + myJason.results[i].crew + + myJason.results[i].passengers
                    shippClass.textContent = myJason.results[i].starship_class

                }
            }
    })
})