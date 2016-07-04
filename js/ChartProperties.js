function makePlotOptions(plotOptions, type){
	var plotOption={};
	var chartType = {}; 

    plotOption = plotOptions; 

    plotOption.dataLabels.borderColor = palette[plotOptions.dataLabels.borderColor];
    plotOption.dataLabels.Color = palette[plotOptions.dataLabels.Color];
    plotOption.dataLabels.fillColor = palette[plotOptions.dataLabels.fillColor];
    plotOption.dataLabels.negativeColor = palette[plotOptions.dataLabels.negativeColor];
    plotOption.dataLabels.negativeFillColor = palette[plotOptions.dataLabels.negativeFillColor];

	plotOption.marker.fillColor = palette[plotOptions.marker.fillColor];
	plotOption.marker.color = palette[plotOptions.marker.color];
    
	plotOption.fillColor = palette[plotOptions.fillColor];
	plotOption.color = palette[plotOptions.color];
	plotOption.negativeColor = palette[plotOptions.negativeColor];
	plotOption.negativeFillColor = palette[plotOptions.negativeFillColor];

	chartType[type] = plotOption;

	return chartType;
}

function makeLegend(legends){
	if(legends.enable)
		return(legends);
	else
		return({});
}

function makeTitle(titles){
	return(titles);
}

function makeSubitle(subtitles){
    return(subtitles);
}

function makeChart(charts){
	return(charts);
}