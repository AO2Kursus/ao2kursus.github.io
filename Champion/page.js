var polyWidth = 30;	//px bredde på hexagonerne
var polyMargin = 3;	//px luft mellem hexagonerne

var coll = Math.ceil($(window).width() / (polyWidth + polyMargin))
var row = Math.ceil($(window).height() / ((polyWidth * 1.1574)+polyMargin))

var idNum = 0;

var xMid = polyWidth/2;
var yP1 = polyWidth*0.287;
var yP2 = polyWidth*0.86574;
var yP3 = polyWidth*1.1574;

var svgLayer = document.getElementById("svgLayer");
for (var ii = 1; ii <= row; ii++){
	if(ii % 2 == 1){
		var even = 0;
	}else{
		var even = 1;
	}
	yOffset = (ii - 1) * (yP3 + polyMargin - (yP3 - yP2));
	for(var jj = 1; jj <= coll - even; jj++){
		idNum += 1;
		if(even){
			var xOffset = (jj - 1)*(polyWidth + polyMargin) + ((polyWidth + polyMargin) / 2)
		}else{
			var xOffset = (jj - 1)*(polyWidth + polyMargin)
		}
		var svgElement = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
		svgElement.setAttribute("points",
											(xMid + xOffset) +','+ yOffset +' '+
											(polyWidth + xOffset) +','+ (yP1 + yOffset) +' '+
											(polyWidth + xOffset) +','+ (yP2 + yOffset) +' '+
											(xMid + xOffset) +','+ (yP3 + yOffset) +' '+
											xOffset +','+ (yP2 + yOffset) +' '+
											xOffset +','+ (yP1 + yOffset));
		svgElement.setAttribute("id","poly" + idNum);
		svgElement.style.display = "none";
		svgLayer.appendChild(svgElement);
	}
}

/*
var svgLayer = document.getElementById("svgLayer");
var svgElement = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
svgElement.setAttribute("width",200); 
svgElement.setAttribute("height",100); 
svgElement.setAttribute("x",10); 
svgElement.setAttribute("y",10); 
svgElement.setAttribute("rx",20); 
svgElement.setAttribute("ry",20); 
svgElement.setAttribute("fill","blue");
svgElement.style.display = "auto";
svgLayer.appendChild(svgElement);
*/





//dreamFade(Math.floor(Math.random()*22)+1);
for(var ii = 1; ii <= 25; ii++){
	dreamFade2();
}
setInterval(dreamFade2,200);
/*
function dreamFade(poly){
	$("#poly" + poly).fadeIn(Math.random()*5*1000, function(){
		$("#poly" + poly).fadeOut(Math.random()*5*1000)
});
}*/
function dreamFade2(){
	var poly = Math.floor(Math.random()*idNum)+1;
	$("#poly" + poly).fadeIn(Math.random()*5*1000, function(){
		$("#poly" + poly).fadeOut(Math.random()*5*1000)
});
}



