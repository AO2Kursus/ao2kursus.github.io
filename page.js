var polyWidth = 15;	//px bredde på hexagonerne
var polyMargin = 3;	//px luft mellem hexagonerne

var coll = Math.ceil($(window).width() / (polyWidth + polyMargin))
var row = Math.ceil($(window).height() / ((polyWidth)))

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

for(var ii = 1; ii <= idNum/60; ii++){
	dreamFade();
}
setInterval(dreamFade,idNum/200);
function dreamFade(){
	var poly = Math.floor(Math.random()*idNum)+1;
	$("#poly" + poly).fadeIn(Math.random()*5*1000, function(){
		$("#poly" + poly).fadeOut(Math.random()*5*1000)
});
}



