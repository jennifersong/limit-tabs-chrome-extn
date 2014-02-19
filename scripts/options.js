'use strict';

function save() {
	var numTabs = document.getElementById("numTabs").value;
	localStorage["numTabs"] = numTabs;
	
	var status = document.getElementById("status");
	status.innerHTML = "Options saved.";
	  setTimeout(function() {
	    status.innerHTML = "";
	  }, 2000);
}

function load_tab_num() {
	if (!localStorage["numTabs"]) {
		localStorage["numTabs"] = 20;
	}
	document.getElementById("numTabs").value = localStorage["numTabs"];
}

document.addEventListener('DOMContentLoaded', load_tab_num);
window.onload = function() {
	document.querySelector('#save').addEventListener('click', save);
};