define( [
			"qlik", 
			"text!./Highcharts-visualizationLibrary.ng.html", 
			"css!./Highcharts-visualizationLibrary.css",
			"./js/highcharts",
			"./js/DataHelper",
			"./js/ChartList",
			"./js/ChartProperties",
			"./js/legendSettings",
			"./js/chartOptionsSettings",
			"./js/titleSettings"
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


				settings : {
					uses : "settings",
					items: {
						general: {
							type: "items",
							label: "General",
							items : {
								MyList: {
									type: "array",
		                            ref: "listItems",
		                            label: "List Items",
		                            itemTitleRef: "label",
		                            allowAdd: true,
		                            allowRemove: true,
		                            addTranslation: "Add Item",
		                            items: {
		                                button: {
											label:"Click me",
											component: "button",
											action: function(data){
												alert("click!");
											}
										},
										label: {
											type: "string",
											ref: "label",
											label: "Label",
											expression: "optional"
										},
										textarea: {
											label:"My textarea",
											component: "textarea",
											maxlength: 100,//you shouldn't write too much
											ref: "myTextarea"
										}
		                            }
								},
								CreditsCheckbox: {
									type: "boolean",
									component: "switch",
									label: "Enable Credits",
									ref: "settings.credits",
		                            options: [{
		                                        value: true,
		                                        label: "On"
											}, {
		                                       value: false,
		                                        label: "Off"
									        }],
											defaultValue: true
								}
							}
						}
					}
				},



				title : {},

				chart : {},


				legend : {}
					
				
			}
		}
	};	

	
	me.definition.items.title = titleSettings;
	me.definition.items.chart = chartOptionSettings;
	me.definition.items.legend = legendSettings;
	
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
		
			var mychart =  {
				    //    colors : layout.settings.colorsArray,
				        credits : { enabled : layout.settings.credits },
				        chart: {},
			        	title:  {},
				        subtitles:{},
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

					var titles = makeTitle(layout.settings.titles);
					mychart.title = titles[0];
					mychart.subtitles = titles[1];
					mychart.chart = makeChart(layout.settings.charts);
					mychart.legend = makeLegend(layout.settings.legend);
					console.log(mychart);


				/*
					  layout.qHyperCube.qEffectiveInterColumnSortOrder : Effettivo ordine di sort tra le colonne
					  layout.qHyperCube.qDimensionInfo  : (info sulle dimensioni) length ritorna il numero di dimensioni
					  layout.qHyperCube.qMeasureInfo     : (info sulle misure) lenght ritorna il numero di misure
				*/

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
