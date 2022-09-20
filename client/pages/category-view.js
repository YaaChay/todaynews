import {Utils} from "../utils/utils.js";

var currentDate = document.getElementById("currentDate");
var todayDate = document.getElementById("todayDate");

currentDate.innerHTML = Utils.currentDate();
todayDate.innerHTML = Utils.currentDate();