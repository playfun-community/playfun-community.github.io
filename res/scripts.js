"use strict";

let elGames = document.getElementById("games");
let elGamers = document.getElementById("gamers");

let gamers = [
	"Bruno", "Songokio", "Mystic", "Eiwa", "Lost", "Skipper", "Migsa",
	"Meiogordo", "Lynx", "Asttaz", "Pedro", "Pikka", "Tide", "Koth", "Dounter", "Claster"
];

let games = [
	{ name: "League of Legends", img: "league.png" },
	{ name: "Minecraft", img: "minecraft.png" },
	{ name: "Counter-Strike", img: "csgo.png" },
	{ name: "Team Fortress 2", img: "tf2.png" },
	{ name: "Left 4 Dead 2", img: "left4dead2.png" },
	{ name: "Killing Floor", img: "killingfloor.png" },
	{ name: "DayZ", img: "dayz.png" },
	{ name: "Age of Empires II", img: "aoe2.png" },
	{ name: "PayDay 2", img: "payday2.png" },
	{ name: "Just Cause 2", img: "justcause2.png" },
	{ name: "Civilization 5", img: "civilization5.png" },
	{ name: "TERA Europe", img: "tera.png" },
	{ name: "Runescape", img: "runescape.png" },
	{ name: "Spiral Knights", img: "spiralknights.png" },
	{ name: "Metin2", img: "metin2.png" },
	{ name: "Teeworlds", img: "teeworlds.png" }
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

	img.src = "res/img/gamers/" + gamer.toLowerCase() + ".jpg";
	img.alt = gamer;
	cap.innerHTML = gamer;

	fig.appendChild(img);
	fig.appendChild(cap);
	elGamers.appendChild(fig);
}
