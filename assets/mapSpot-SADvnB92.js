import{o as d,t as m}from"./index-ccfV9Qe_.js";const u=m("<div id=map>");function g(a){return d(()=>{const r=document.createElement("script");r.id="leafletScript",r.src="https://unpkg.com/leaflet/dist/leaflet.js",r.async=!0,document.body.appendChild(r);const n=document.createElement("link");return n.rel="stylesheet",n.href="https://unpkg.com/leaflet/dist/leaflet.css",document.head.appendChild(n),r.onload=async()=>{try{const e=L.map("map"),{lat:t,lng:o}=a;if(t&&o){e.setView([t,o],15),e.panTo([t,o]),await L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(e);const c=a.targets;Object.values(c).forEach(l=>{const{lat:s,lng:i,action:p}=l;L.marker([s,i]).addTo(e).bindPopup(p).openPopup()}),L.marker([t,o]).addTo(e).bindPopup("You are here ;)").openPopup()}else e.setView([50,13],13)}catch(e){console.error("Error initializing map:",e)}},r.onerror=()=>{console.error("Error loading Leaflet script")},()=>{const e=document.querySelector("script#leafletScript");e&&document.body.removeChild(e);const t=document.querySelector("link[href='https://unpkg.com/leaflet/dist/leaflet.css']");t&&document.head.removeChild(t)}}),u()}export{g as default};
