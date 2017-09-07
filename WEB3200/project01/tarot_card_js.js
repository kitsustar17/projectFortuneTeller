console.log("Hello, Cassie");

var slotOne = document.querySelector("#slot_1");
var slotTwo = document.querySelector("#slot_2");
var slotThree = document.querySelector("#slot_3");
var b1 = document.querySelector("#deck_button")

function placeImage(id, source) {
	document.getElementById(id).src = source;
}

function placeInfo(id, source) {
	 id.innerHTML = source;
}

function createPara(divID, pID, text) {
	var p = document.getElementById(pID);
	document.getElementById(divID).removeChild(p)
	var para = document.createElement("p");
	para.innerHTML = text;
	para.id = pID;
	document.getElementById(divID).appendChild(para);
}

b1.onclick = function () {
	var randomNumOne = Math.floor(Math.random() * 22);
	var randomNumTwo = Math.floor(Math.random() * 22);
	var randomNumThree = Math.floor(Math.random() * 22);
	while (randomNumTwo == randomNumOne || randomNumTwo == randomNumThree || randomNumThree == randomNumOne) {
		randomNumTwo = Math.floor(Math.random() * 22);
		randomNumThree = Math.floor(Math.random() * 22);
	}
	var currentCardOne;
	var currentCardTwo;
	var currentCardThree;
	fetch('https://api.myjson.com/bins/9u7z5').then( function (response) {
		return response.json();
	}).then( function (data) {
		currentCardOne = data[randomNumOne];
		cardNameOne = currentCardOne.name;
		cardImageOne = currentCardOne.image;
		cardInfoOne = currentCardOne.meaning;
		
		slotOne.innerHTML = cardNameOne;
		placeImage("pic1", cardImageOne);
		createPara("div1", "p1", cardInfoOne);
		
		
		currentCardTwo = data[randomNumTwo];
		cardNameTwo = currentCardTwo.name;
		cardImageTwo = currentCardTwo.image;
		cardInfoTwo = currentCardTwo.meaning;
		
		slotTwo.innerHTML = cardNameTwo;
		placeImage("pic2", cardImageTwo);
		createPara("div2", "p2", cardInfoTwo);
		
		currentCardThree = data[randomNumThree];
		cardNameThree = currentCardThree.name;
		cardImageThree = currentCardThree.image;
		cardInfoThree = currentCardThree.meaning;
		
		slotThree.innerHTML = cardNameThree;
		placeImage("pic3", cardImageThree);
		createPara("div3", "p3", cardInfoThree);
	});
}