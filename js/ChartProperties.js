

function makeTitle(titles){

	var title={};
	var subtitle = {};
	var style={};
	var subStyle={};


    // Title Section
	style['color'] = titles.style.color;
	style['fontsize'] = titles.style.fontsize;
	title['style'] = style;

	title['text'] = titles.title;
	title['align'] = titles.align;
	title['floating'] = titles.floating;
	title['margin'] = titles.margin;
	title['verticalAlign'] = titles.valign;
	title['widthadjust'] = titles.widthadjust;
	title['x'] = titles.x;


	// SubTitle Section 
	subStyle['color'] = titles.style.subutitle.color;
	subStyle['fontsize'] = titles.style.subutitle.fontsize;
	subtitle['style'] = subStyle;

	subtitle['text'] = titles.subutitle.title;
	subtitle['align'] = titles.subutitle.align;
	subtitle['floating'] = titles.subutitle.floating;
	subtitle['verticalAlign'] = titles.subutitle.valign;
	subtitle['x'] = titles.subutitle.x;


	return([title,subtitle]);
}


function makeChart(charts){



}