"use strict";

let elGames = document.getElementById("games");
let elGamers = document.getElementById("gamers");

let gamers = [
	"Bruno", "Songokio", "Mystic", "Eiwa", "Lost", "Skipper", "Migsa",
	"Meiogordo", "Lynx", "Asttaz", "Pedro", "Pikka", "Tide", "Koth", "Dounter", "Claster"
];

let games = [
	{ name: "League of Legends", img: "league-min.png" },
	{ name: "Minecraft", img: "minecraft-min.png" },
	{ name: "Counter-Strike", img: "csgo-min.png" },
	{ name: "Team Fortress 2", img: "tf2-min.png" },
	{ name: "Left 4 Dead 2", img: "left4dead2-min.png" },
	{ name: "Killing Floor", img: "killingfloor-min.png" },
	{ name: "DayZ", img: "dayz-min.png" },
	{ name: "Age of Empires II", img: "aoe2-min.png" },
	{ name: "PayDay 2", img: "payday2-min.png" },
	{ name: "Just Cause 2", img: "justcause2-min.png" },
	{ name: "Civilization 5", img: "civ5-min.png" },
	{ name: "TERA Europe", img: "tera-min.png" },
	{ name: "Runescape", img: "runescape-min.png" },
	{ name: "Spiral Knights", img: "spiralk-min.png" },
	{ name: "Metin2", img: "metin2-min.png" },
	{ name: "Teeworlds", img: "teeworlds-min.png" }
];

for (let game of games){
	let fig = document.createElement("figure");
	let img = document.createElement("img");
	let cap = document.createElement("figcaption");

	img.src = "res/img/games/" + game.img;
	img.alt = game.name;
	cap.innerHTML = game.name;

	fig.appendChild(img);
	fig.appendChild(cap);
	elGames.appendChild(fig);
}

for (let gamer of gamers){
	let fig = document.createElement("figure");
	let img = document.createElement("img");
	let cap = document.createElement("figcaption");

	img.src = "res/img/gamers/" + gamer.toLowerCase() + "-min.jpg";
	img.alt = gamer;
	cap.innerHTML = gamer;

	fig.appendChild(img);
	fig.appendChild(cap);
	elGamers.appendChild(fig);
}
