var scoreGeschiedenis = []

var naamArray = []
var fotoArray = []
var resultArray = []

var naamCompare;
var fotoCompare;
var lastClick;
var goedCount = 0;
var foutCount = 0;

var fotoPersoon = [
 
 {name: 'Tim Krul',source: 'img/GK.png', punten: 0},
 {name: 'Matthijs de Licht',source: 'img/MDL.png', punten: 0},
 {name: 'Owen Wijndal', source: 'img/OWL.png', punten: 0},
 {name: 'Davy Klaassen', source: 'img/DK.png', punten: 0},
 {name: 'Georginio Wijndalum', source: 'img/GW.png', punten: 0},
 {name: 'Memphis Depay', source: 'img/MP.png', punten: 0},
 {name: 'Steven Berghuis', source: 'img/SB.png', punten: 0},
 {name: 'Daley Blind', source: 'img/DB.png', punten: 0},
 {name: 'Luuk de Jong', source: 'img/LdJ.png', punten: 0},
 {name: 'Frenkie de Jong ', source: 'img/FdJ.png', punten: 0},
 {name: 'Denzel Dumfries', source: 'img/DD.png', punten: 0}
];


window.onload = function() {
    var aantalMensen = document.getElementsByClassName('aantalMensen'); // haal radio buttons op bij class.

    for (let i = 0; i < aantalMensen.length; i++) {
        console.log(aantalMensen)
        if (aantalMensen[i].checked == true) {
            console.log("het werkt")
        }
    }
}

startKnop.onclick = function () {
    startPagina.style.display = "none"; //verander terug naar none
    instellingenPagina.style.display = "none";
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";
    smoelenTrainer.style.display = "block";
    gridItems()
    time()
}

instellingenKnop.onclick = function () {
    startPagina.style.display = "none"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "block";
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";

}

geschiedenisKnop.onclick = function () {
    startPagina.style.display = "none"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";
    geschiedenisPagina.style.display = "block";
    document.getElementById('matchGeschiedenis').innerHTML = "";
    for (let i = 0; i < scoreGeschiedenis.length; i++) {
        if (i <= 10) {
            var p = document.createElement("p");
            p.innerHTML = "Juiste antwoorden " + scoreGeschiedenis[i].Goed +" - "+ " Onjuiste antwoorden " + scoreGeschiedenis[i].Fout + " - " + scoreGeschiedenis[i].tijd;
            document.getElementById('matchGeschiedenis').appendChild(p)         
        }
    }
}

blindeVlekKnop.onclick = function(){
    startPagina.style.display = "none"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "none";
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "block";
    fotoPersoon.sort((a,b) => (a.punten < b.punten) ? 1 : ((b.punten < a.punten) ? -1 : 0));
    for (let i = 0; i < 3; i++) {
        console.log(fotoPersoon[i].name)
        var p = document.createElement("p");
        p.innerHTML = "Meeste fouten antwoorden " + fotoPersoon[i].name + " Aantal fouten punten" + fotoPersoon[i].punten;
        document.getElementById('blindeVlekGeschiedenis').appendChild(p)           


        //zorgen dat alleen de 3 fouten zichtbaar zijn
    
       
        // met een if statement het ophalen en zorgen dat die alleen de meeste punten qua fout laat zien.
        
    }
}

terugKnop1.onclick = function () {
    startPagina.style.display = "block"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "none";
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";
}

terugKnop2.onclick = function () {
    startPagina.style.display = "block"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "none";
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";
}

terugKnop3.onclick = function () {
    startPagina.style.display = "block"; //verander terug naar none
    smoelenTrainer.style.display = "none";
    instellingenPagina.style.display = "none";
    geschiedenisPagina.style.display = "none";
    blindeVlekPagina.style.display = "none";

}

function gridItems() {
    var persoonData = getRadioBtn();
    if (!persoonData) {
        persoonData = 5;
    }

    for (let index = 0; index < persoonData; index++ ) {
        var naam = document.createElement("div");
        var fotoDiv = document.createElement("div");
        var foto = document.createElement("img");

        naam.innerHTML = fotoPersoon[index].name;
        foto.src = fotoPersoon[index].source;
 
        naam.id = fotoPersoon[index].name;
        fotoDiv.id = fotoPersoon[index].name;

        naam.classList.add("gridItem")
        fotoDiv.classList.add("gridItem")

        fotoDiv.appendChild(foto);

        naamArray.push(naam);
        fotoArray.push(fotoDiv);
    }
    naamArray.sort(() => Math.random() - 0.5);
    fotoArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < naamArray.length; i++) {
        gridContainer1.appendChild(naamArray[i]);
        gridContainer2.appendChild(fotoArray[i]);


        //run functie "itemOnclick"
        //geef parameter [index] mee (Bijv op for loop 1 geeft hij "0" mee) 
        itemOnclick(naamArray[i], fotoArray[i]);
    }
}

function matchGeschiedenis(){
    scoreGeschiedenis.unshift({Goed: goedCount , Fout: foutCount, tijd: Date(), meesteFout: ""});
    console.log(scoreGeschiedenis);

}

function time(){
    var timeleft = document.getElementById("userInput").value;
    if (!timeleft) { timeleft = 10; }

    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "tijd is om";
        setTimeout(() => {
            matchGeschiedenis()
            startPagina.style.display = "block"; //verander terug naar none
            smoelenTrainer.style.display = "none";
            gridContainer1.innerHTML = "";
            gridContainer2.innerHTML = "";
            document.getElementById("pointsGoed").innerHTML = "";
            document.getElementById("pointsFout").innerHTML = "";
            naamArray = [];
            fotoArray = [];
            foutCount = 0;
            goedCount = 0;
        }, 3000);
    } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
        timeleft -= 1;
    }, 1000);
}

function itemOnclick(naamNummer, fotoNummer){

    naamNummer.onclick = function () { checkClick(this); }
    fotoNummer.onclick = function () { checkClick(this); }
}

function checkClick(parameter){
    if (lastClick) {
        //Kijk of de cijfers gelijk zijn van lastchar en lastchar prev
        //Kijk of het div element hetzelfde is van lastClick en parameter
        if (lastClick.id == parameter.id && lastClick != parameter) {
            console.log("Het is een match")
            parameter.style.display = "none";
            lastClick.style.display = "none";
            lastClick = "";
            goedCount = goedCount + 1;
            document.getElementById("pointsGoed").innerHTML = goedCount + "Heeft u er goed";
        }
        else{
            
            console.log('Hij is fout ', parameter.id);
            lastClick = "";
            foutCount = foutCount + 1;
            document.getElementById("pointsFout").innerHTML = foutCount  + "Heeft u er fout";
            var result = fotoPersoon.find( ({ name }) => name === parameter.id);
            result.punten = (result.punten + 1);
            console.log(fotoPersoon);

        }
    }
    else{
        console.log('Filling lastclick because its empty: ', parameter);
        lastClick = parameter;
    }
}

function getRadioBtn(){
    var radios = document.getElementsByName('spelerAantal');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}