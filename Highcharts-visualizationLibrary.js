define( [
			"qlik", 
			"text!./Highcharts-visualizationLibrary.ng.html", 
			"css!./Highcharts-visualizationLibrary.css",
			"./js/highcharts",										// Highcharts library
			"./js/DataHelper",										// Function to make the data series from the qMatrix
			"./js/DropdownList",									// All variable used in the dropdown selection fields
			"./js/plotOptionChartMapping",							// Mapping between charts and chart options
			"./js/ChartProperties",									// Functions to fill up the Chart JSON sections
			"./js/legendSettings",									// Variable with the Legend settings section
			"./js/chartOptionsSettings",							// Variable with the Chart options settings
			"./js/titleSettings",									// Variable with the title option settings
			"./js/GeneralSettings",									// Variable with the General settings
			"./js/plotOptionSettings"								// Variable with the plotOption settings

		], function ( qlik, template ) {
		"use strict";
		
	var me = {
		initialProperties: {
			version: 1.2,
			qHyperCubeDef: {
				qDimensions: [],
				qMeasures: [],
				qInitialDataFetch: [{
					qWidth: 4,
					qHeight: 1000
				}]
			}
		},


		definition: {
			type: "items",
			component: "accordion",
			items: {
				dimensions: {
					uses: "dimensions",
					min: 1,
					max: 2
				},
				measures: {
					uses: "measures",
					min: 1,
					max: 2
				},
				sorting: {
					uses: "sorting"
				},

				/* 
					General settings which contain:
						- Qlik Sense Title, subtitle and footnote
						- colors Array
						- Enable Credits
				*/
				settings : {},

				/*
					Title TAB settings, contain all options for title and subtitle
					Only the Title and subtitle are explicitely showed, allo other options will be
					available if enable the "more option" switch
				*/
				title : {},

				/*
					Chart TAB  Setting, only the Chart Type is mandatory all other options are avaiable 
					if flag show more option switch
				*/
				chart : {},

				/*
					Legend TAB Settings will show all the options if the lable will be enabled.
				*/
				legend : {},

				/*
					plotOption TAB
				*/
				plotOptions : {}


						
			}
		}
	};	

	// The following line fill up the TAB settings sections	
	me.definition.items.settings = generalSettings;
	me.definition.items.title = titleSettings;
	me.definition.items.chart = chartOptionSettings;
	me.definition.items.legend = legendSettings;
	me.definition.items.plotOptions = plotOptionSettings;
	

	// Get Engine API app for Selections
	me.app = qlik.currApp(this);
	
	me.snapshot = {
		canTakeSnapshot : true
	};	
	

	me.paint = function($element,layout) {

		var self = this;
		/*
                self.backendApi.getMeasureInfos().forEach(function(value, col) {
                    console.log(value);
				});
		*/
		

			$element.append($('<div />;').attr("id", layout.qInfo.qId));
			$("#"+layout.qInfo.qId).css("height", "100%");

			// mychart is the JSON variable containing the chart configuration
			// it's made up of different sections. Each section has a corresponding TAB settings in a dedicated file
		
			var mychart =  {
				    //    colors : layout.settings.colorsArray,

				    	/*
							Highchart by default puts a credits label in the lower right corner of the chart. This can be changed using these options.
							Mapped just the enable attrib
				    	*/
				        credits : { enabled : layout.settings.credits },

				        /* 
				        	Options regarding the chart area and plot area as well as general chart options.
				        	Attributes not mapped:
				        		- defaultSeriesType (Deprecated)
				        		- events (to define e check on Qlik events)
				        		- punctual margins (Top, bottom, left right)
				        		- option 3D (to do)
				        		- pinchType (to handle the error)
				        		- reset Zoom button
				        		- punctual spacing (Top, Bottom, Right, Left)
						*/
				        chart: {},


				        /*
							The chart's main title. Title and subtitle are filled using the same function
							Attributes not mapped:
								- useHTML
								- y
				        */
			        	title:  {},

			        	/*
							The chart's subtitle.
							Attributes not mapped:
								- useHTML
								- y
			        	*/
				        subtitles:{},

				        /*
							The legend is a box containing a symbol and name for each series item or point item in the chart. 
							Each series (or points in case of pie charts) is represented by a symbol and its name in the legend.
							It is also possible to override the symbol creator function and create custom legend symbols.

							Attributes not mapped:
								- navigation
								- symbol (all)
				        */
			            legend: {},

				        plotOptions: {
				            pie: {
				                allowPointSelect: true,
				                cursor: 'pointer',
				                dataLabels: {
				                    enabled: true,
				                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				                    style: {
				                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
				                    }
				                }
				            }
				        },

			      		// Data Section
				        series: [{
				            name: 'Brands',
				            colorByPoint: true,
				            data: []
				        }]
        
					};

					// In this section external function will be called in ordetr to fill
					//  the JSON file parts

					var titles = makeTitle(layout.settings.titles);

					// Fill the Title section
					mychart.title = titles[0];
					// Fill the subtitle section
					mychart.subtitles = titles[1];
					// Fill the cart section
					mychart.chart = makeChart(layout.settings.charts);
					// Fill the legend section
					mychart.legend = makeLegend(layout.settings.legend);
					


                    // create a new array that contains the dimension labels
                    
                    var dimensionLabels = layout.qHyperCube.qDimensionInfo.map(function (d) {
                        return d.qFallbackTitle;
                    });

                    // create a new array that contains the measure labels
                    var measureLabels = layout.qHyperCube.qMeasureInfo.map(function (d) {
                        return d.qFallbackTitle;
					});

                var newDataMatrix=[];

                newDataMatrix = singleDimension(layout,dimensionLabels,measureLabels,self);
/*
                if((measureLabels.length > 1) &&(layout.secondaxis))
                	newDataMatrix =  doubleMeasure (layout,dimensionLabels,measureLabels,self);
                else {

	                if (dimensionLabels.length > 1)
	                	newDataMatrix = doubleDimension (layout,dimensionLabels,measureLabels,self);
	                else 
	                		newDataMatrix = singleDimension(layout,dimensionLabels,measureLabels,self);
                }

*/				

			mychart.series[0].data = newDataMatrix;
			console.log(mychart);
			
			$('#'+layout.qInfo.qId).highcharts(mychart);
		
		};
		
		return me;

	} );
