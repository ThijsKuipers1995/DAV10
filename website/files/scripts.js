// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var info = document.getElementById("Info");
var graphs = document.getElementById("Graphs");
var conflicts = document.getElementById("Conflict");

function showInfo() {
	modal.style.display = "none";

    info.style.display= "block";
	conflicts.style.display = "none";
    graphs.style.display = "none";
}

function showAllGraphs() {
	modal.style.display = "none";

	info.style.display= "none";
	conflicts.style.display = "none";
	graphs.style.display = "block";
}

function showConflicts() {
	modal.style.display = "none";

	info.style.display= "none";
	conflicts.style.display = "block";
	graphs.style.display = "none";
}
  var menu = document.getElementById('menu');
  var tables = document.getElementById('tables');

function showMenu() {
  menu.style.display= "block";
  tables.style.display= "none";
  var Afghanistan = document.getElementById('Afghanistan')
  var Iran = document.getElementById('Iran')
  var Iraq = document.getElementById('Iraq')
  var Yemen = document.getElementById('Yemen')
  var Palestine = document.getElementById('Palestine')
  var Pakistan = document.getElementById('Pakistan')
  var Syria = document.getElementById('Syria')
  var Lebanon = document.getElementById('Lebanon')
  Afghanistan.style.display="none";
  Iran.style.display="none";
  Iraq.style.display="none";
  Yemen.style.display="none";
  Palestine.style.display="none";
  Pakistan.style.display="none";
  Syria.style.display="none";
  Lebanon.style.display="none";
  
}

function hideBox(country) {
  var country = document.getElementById(country);
  menu.style.display= "none";
  tables.style.display= "block";
  country.style.display= "block";
}

function showGraphs(country) {
	modal.style.display = "none";
	alert('Hello '+country+'!')
}
(function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = document.getElementById('b174875b-d62b-4bd6-bdb0-0c0446dc1c00').textContent;
                  var render_items = [{"docid":"64032834-179b-4b25-b017-4a7b0760f900","elementid":"a407a123-f539-4190-ad1c-3f6e4e4b206e","modelid":"d6af7d9b-0c25-4938-9ca3-ce292aeda121"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
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




