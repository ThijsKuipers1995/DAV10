var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

var conflictbox = document.getElementById('GraphsByProduct');
var conflictbox2 = document.getElementById('GraphsBy');

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
    conflictbox.style.display = "none";
    conflictbox2.style.display = "none";
    modal.style.display = "none";
    alert('Graphs for ' + country + ' will now be displayed.')
}

/* Bokeh function */
(function () {
    var fn = function () {
        Bokeh.safely(function () {
            (function (root) {
                function embed_document(root) {

                    var docs_json = document.getElementById('b174875b-d62b-4bd6-bdb0-0c0446dc1c00').textContent;
                    var render_items = [{
                        "docid": "64032834-179b-4b25-b017-4a7b0760f900",
                        "elementid": "a407a123-f539-4190-ad1c-3f6e4e4b206e",
                        "modelid": "d6af7d9b-0c25-4938-9ca3-ce292aeda121"
                    }];
                    root.Bokeh.embed.embed_items(docs_json, render_items);

                }
                if (root.Bokeh !== undefined) {
                    embed_document(root);
                }
                else {
                    var attempts = 0;
                    var timer = setInterval(function (root) {
                        if (root.Bokeh !== undefined) {
                            embed_document(root);
                            clearInterval(timer);
                        }
                        attempts++;
                        if (attempts > 100) {
                            console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                            clearInterval(timer);
                        }
                    }, 10, root)
                }
            })(window);
        });
    };
    if (document.readyState != "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
})();