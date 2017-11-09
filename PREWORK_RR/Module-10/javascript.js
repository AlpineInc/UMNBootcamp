function grow(){
	document.getElementById("box").style.height = parseInt(document.getElementById("box").style.height, 10) + 20 + "px";
	document.getElementById("box").style.width = parseInt(document.getElementById("box").style.width, 10) + 20 + "px";

}

function blue(){
	document.getElementById("box").style.backgroundColor = "blue";
}

function fade(){
	if (document.getElementById("box").style.opacity > 0.2) {
	document.getElementById("box").style.opacity = document.getElementById("box").style.opacity - 0.2;
	}
}


function reset(){
	document.getElementById("box").style.height = "150px";
	document.getElementById("box").style.width = "150px";
	document.getElementById("box").style.backgroundColor = "orange";
	document.getElementById("box").style.opacity = 1;
}
