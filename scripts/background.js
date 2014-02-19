'use strict';

chrome.tabs.onCreated.addListener(function (tab) {
	chrome.tabs.query({}, function(arrTabs) {
		if (!localStorage["numTabs"]) {
			var max = 20;
		} else {
			var max = localStorage["numTabs"];
		}
		if (arrTabs.length > max) { 
			chrome.tabs.remove(tab.id);
			alert("You have " + arrTabs.length + " tabs open! Please close " + (arrTabs.length - max + 1) + " tabs first. You will not be able to open any more tabs otherwise.");
		}
	});
});