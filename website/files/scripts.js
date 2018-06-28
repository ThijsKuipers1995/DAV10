var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

var conflictbox = document.getElementById('GraphsByProduct');
var conflictbox2 = document.getElementById('GraphsByConflict');

btn.onclick = function () {
    hideAll();
    modal.style.display = "block";
    graphs.style.display= "block";
    conflictbox.style.display = "block";
    conflictbox2.style.display = "block";
}

var info = document.getElementById("Info");
var graphs = document.getElementById("Graphs");
var conflicts = document.getElementById("Conflict");
var analysis = document.getElementById("Analysis");

function hideAll() {
    modal.style.display = "none";
    info.style.display = "none";
    conflicts.style.display = "none";
    graphs.style.display = "none";
    analysis.style.display = "none";
}
function showInfo() {
    hideAll();
    info.style.display = "block";
}

function showConflicts() {
    hideAll();
    conflicts.style.display = "block";
}

function showAnalysis() {
    hideAll();
    analysis.style.display = "block";
}
var menu = document.getElementById('menu');
var tables = document.getElementById('tables');

function showMenu() {
    menu.style.display = "block";
    tables.style.display = "none";
    var Afghanistan = document.getElementById('Afghanistan')
    var Iran = document.getElementById('Iran')
    var Iraq = document.getElementById('Iraq')
    var Yemen = document.getElementById('Yemen')
    var Palestine = document.getElementById('Palestine')
    var Pakistan = document.getElementById('Pakistan')
    var Syria = document.getElementById('Syria')
    var Lebanon = document.getElementById('Lebanon')
    Afghanistan.style.display = "none";
    Iran.style.display = "none";
    Iraq.style.display = "none";
    Yemen.style.display = "none";
    Palestine.style.display = "none";
    Pakistan.style.display = "none";
    Syria.style.display = "none";
    Lebanon.style.display = "none";

}

function hideBox(country) {
    var country = document.getElementById(country);
    menu.style.display = "none";
    tables.style.display = "block";
    country.style.display = "block";
}

function showGraphs(country) {
    alert('Graphs for ' + country + ' will now be displayed.')
    conflictbox.style.display = "none";
    conflictbox2.style.display = "none";
    modal.style.display = "none";
    
}
