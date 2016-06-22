define( [
			"qlik", 
			"text!./Highcharts-visualizationLibrary.ng.html", 
			"css!./Highcharts-visualizationLibrary.css",
			"./js/highcharts",
			"./js/DataHelper"
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

						},
					}
				}
			}
		}
	};	

	
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
				        chart: {
				            plotBackgroundColor: null,
				            plotBorderWidth: null,
				            plotShadow: false,
				            type: 'pie'
				        },

			        	title:
				        {
					        "text": "Titolo"
					    },
				        subtitles:
				        {
					                "text" : "Sottotitolo"
					    },
			            legend: {
			                enabled: false
			            },

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
                console.log(newDataMatrix);
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
