function main() {
}

document.addEventListener('keydown', function(event) {
    if(event.ctrlKey && event.keyCode == KEYS.K_S) {
	event.preventDefault();
	console.log('Saved');
    }
});

function load(id, url) {
  var r = new XMLHttpRequest();
  r.open("GET", url, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    document.getElementById(id).innerHTML = r.responseText;
  };
  r.send();
}

window.onload = function() {
    main();
}