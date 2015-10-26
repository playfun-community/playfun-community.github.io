$(document).ready(function(){
	$(function(){
		$('a[href*=#]:not([href=#])').click(function(){
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length){
					$('html,body').animate({ scrollTop: target.offset().top }, 600);
					return false;
				}
			}
		});
	});

	var lastScrollTop = 0;
	$(window).scroll(function(event){
		var st = $(this).scrollTop();
		if (st>=48)
			$("header nav").addClass("fixIt");
		else
			$("header nav").removeClass("fixIt");
		lastScrollTop = st;
	});
});

var app = angular.module("playfun", []);

app.controller("games-display", function(){
	this.gameList = games;
});

app.controller("gamers-display", function(){
	this.gamerList = gamers;
});


var games = [
	{
		"name": "League of Legends",
		"img": "league.png",
		"desc": "League"
	},
	{
		"name": "Minecraft",
		"img": "minecraft.png",
		"desc": ""
	},
	{
		"name": "Counter-Strike",
		"img": "csgo.png",
		"desc": ""
	},
	{
		"name": "Team Fortress 2",
		"img": "tf2.png",
		"desc": ""
	},
	{
		"name": "Left 4 Dead 2",
		"img": "left4dead2.png",
		"desc": ""
	},
	{
		"name": "Killing Floor",
		"img": "killingfloor.png",
		"desc": ""
	},
	{
		"name": "DayZ",
		"img": "dayz.png",
		"desc": ""
	},
	{
		"name": "Age of Empires II",
		"img": "aoe2.png",
		"desc": ""
	},
	{
		"name": "PayDay 2",
		"img": "payday2.png",
		"desc": ""
	},
	{
		"name": "Just Cause 2",
		"img": "justcause2.png",
		"desc": ""
	},
	{
		"name": "Civilization 5",
		"img": "civilization5.png",
		"desc": ""
	},
	{
		"name": "TERA Europe",
		"img": "tera.png",
		"desc": ""
	},
	{
		"name": "Runescape",
		"img": "runescape.png",
		"desc": ""
	},
	{
		"name": "Spiral Knights",
		"img": "spiralknights.png",
		"desc": ""
	},
	{
		"name": "Metin2",
		"img": "metin2.png",
		"desc": ""
	},
	{
		"name": "Teeworlds",
		"img": "teeworlds.png",
		"desc": ""
	}
];
var gamers = [
	{
		"name": "Bruno",
		"img": "bruno.jpg",
		"names": ["Sael", "zettca"],
		"uid": "T/72UbiGFUaJgdarQcNElCmAn+g="
	},
	{
		"name": "Songokio",
		"img": "songokio.jpg",
		"names": ["Songokio"],
		"uid": "/nevGFqaUM0LRHaHCwdlwN4Dq7A="
	},
	{
		"name": "Mystic",
		"img": "mystic.jpg",
		"names": ["Mystic", "Asheka", "Myan"],
		"uid": "qMi6kuCFWWqmvazNQfW0y9wWUjM="
	},
	{
		"name": "Eiwa",
		"img": "eiwa.jpg",
		"names": ["Eiwa, Awie", "Ahlirres"],
		"uid": "d5Ng7gCYioMuUMDkXx3os6/0jt8="
	},
	{
		"name": "Lost",
		"img": "lost.jpg",
		"names": ["LostGirl"],
		"uid": "kFRoWSagX2uTMPwXIidbpb649Qk="
	},
	{
		"name": "Skipper",
		"img": "skipper.jpg",
		"names": ["Skipper", "Broa"],
		"uid": "HNodt9bUFPDGw1jqSAi8AZR1Tz0="
	},
	{
		"name": "Migsa",
		"img": "migsa.jpg",
		"names": ["Migsa"],
		"uid": "39zH/FMwjfYvFk7lq6vh83IuItI="
	},
	{
		"name": "Meiogordo",
		"img": "meiogordo.jpg",
		"names": ["Meiogordo", "Mikewazovski"],
		"uid": "FVSTKN61IOWvlsqT1SivaPLioTQ="
	},
	{
		"name": "Lynx",
		"img": "lynx.jpg",
		"names": ["Lynx", "Aqualynx"],
		"uid": "hpTdriBfxhnBKLd7rtwB3TtKEok="
	},
	{
		"name": "Asttaz",
		"img": "asttaz.jpg",
		"names": ["Asttaz"],
		"uid": "7yaNN45SH/XYAuw7YiweBTIuvpI="
	},
	{
		"name": "Pedro",
		"img": "pedro.jpg",
		"names": ["Drunkiris"],
		"uid": "qF3fA5+IHDSpMuUMlENPaHpsIdc="
	},
	{
		"name": "Pikka",
		"img": "pikka.jpg",
		"names": ["Pikka"],
		"uid": "T8kfbWWqB9YhYaTXUIK74Z+kdDw="
	},
	{
		"name": "Tide",
		"img": "tide.jpg",
		"names": ["Tide"],
		"uid": "30ZlHIXY3DXFHBqcu27cx6Mp1Z4="
	},
	{
		"name": "Koth",
		"img": "koth.jpg",
		"names": ["Koth"],
		"uid": "VZFryFJX/ddobiQGUn3+xchhyec="
	},
	{
		"name": "Dounter",
		"img": "dounter.jpg",
		"names": ["Dounter"],
		"uid": "8T0Bab6pepNAhCqLH9gy74EiwLA="
	},
	{
		"name": "Claster",
		"img": "claster.jpg",
		"names": ["Claster"],
		"uid": ""
	}
];