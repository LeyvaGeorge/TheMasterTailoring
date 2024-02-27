"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function readDayAndHour() {
    var currentDate = new Date();
    var dayOfWeek = currentDate.getDay();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentHour = currentDate.getHours();
    if (dayOfWeek > 0) {
        if (currentHour > 9 && currentHour < 18)
            return true;
    }
    return false;
}
let openHours = readDayAndHour();
//This works so far change to have a it to true/false must be day 1-6 and hours
const imgElement = document.querySelector('.hrs-item img');
if (openHours) {
    imgElement.src = "../assets/images/open.png";
    imgElement.alt = "Open Sign";
}
else {
    imgElement.src = "../assets/images/Closed.png";
    imgElement.alt = "Closed Sign";
}
// Google map API
// Initialize and add the map
let map;
function initMap() {
    return __awaiter(this, void 0, void 0, function* () {
        // The location of Uluru
        const position = { lat: 33.74783, lng: -116.96894 };
        //33.747831267786864, -116.96894144912552
        // Request needed libraries.
        //@ts-ignore
        const { Map } = yield google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = yield google.maps.importLibrary("marker");
        // The map, centered at The Master Tailoring
        map = new Map(document.getElementById('map'), {
            zoom: 18,
            center: position,
            mapId: 'DEMO_MAP_ID',
        });
        // The marker, positioned at The Master Tailoring
        const marker = new AdvancedMarkerElement({
            map: map,
            position: position,
            title: 'The Master Tailoring'
        });
    });
}
initMap();
