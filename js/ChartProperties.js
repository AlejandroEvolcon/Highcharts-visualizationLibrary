function makeLegend(legends){
	var legend = {};
	var style = {};

/*
	style['cursor'] = legends.style.cursor;
	style['fontSize'] = legends.style.fontSize;
	style['fontWeight'] = legends.style.fontWeight;
	legend['style'] = style;
*/

	legend['enable'] = legends.enable;
	legend['align'] = legends.align;
	legend['backgroundColor'] = legends.backgroundColor;
	legend['borderColor'] = legends.borderColor;
	legend['borderRadius'] = legends.borderRadius;
	legend['borderWidth'] = legends.borderWidth;
	legend['itemdistance'] = legends.itemdistance;
	legend['itemHiddenStyle'] = legends.itemHiddenStyle;
	legend['itemHoverStyle'] = legends.itemHoverStyle;
	legend['itemMarginBottom'] = legends.itemMarginBottom;
	legend['lineHeight'] = legends.lineHeight;
	legend['padding'] = legends.padding;
	legend['reversed'] = legends.reversed;
	legend['rtl'] = legends.rtl;
	legend['style'] = legends.style;



	return(legend);
}

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

	var chartOpt={};
	var style={};

	// SubTitle Section 
	style['color'] = charts.style.fontFamily;
	style['fontsize'] = charts.style.fontSize;
	chartOpt['style'] = style;

	chartOpt['alignTicks'] = charts.alignticks;
	chartOpt['animation'] = charts.animation;
	chartOpt['backgroundColor'] = charts.backgroundColor;
	chartOpt['borderColor'] = charts.borderColor;
	chartOpt['borderRadius'] = charts.borderRadius;
	chartOpt['borderWidth'] = charts.borderWidth;
	chartOpt['className'] = charts.className;
	chartOpt['defaultSeriesType'] = charts.defaultSeriesType;
	chartOpt['ignoreHiddenSeries'] = charts.ignoreHiddenSeries;
	chartOpt['inverted'] = charts.inverted;
	chartOpt['margin'] = charts.margin;
	chartOpt['panning'] = charts.panning;
	chartOpt['pankey'] = charts.pankey;
	chartOpt['pinchType'] = charts.pinchType;
	chartOpt['plotBackgroundColor'] = charts.plotBackgroundColor;
	chartOpt['plotBackgroundImage'] = charts.plotBackgroundImage;
	chartOpt['plotBorderColor'] = charts.plotBorderColor;
	chartOpt['plotBorderWidth'] = charts.plotBorderWidth;
	chartOpt['polar'] = charts.polar;
	chartOpt['reflow'] = charts.reflow;
	chartOpt['selectionMarkerFill'] = charts.selectionMarkerFill;
	chartOpt['shadow'] = charts.shadow;
	chartOpt['showAxes'] = charts.showAxes;
	chartOpt['type'] = charts.type;


	return(chartOpt);
}