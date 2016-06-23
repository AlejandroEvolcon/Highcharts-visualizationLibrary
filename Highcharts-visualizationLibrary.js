define( [
			"qlik", 
			"text!./Highcharts-visualizationLibrary.ng.html", 
			"css!./Highcharts-visualizationLibrary.css",
			"./js/highcharts",
			"./js/DataHelper",
			"./js/ChartList",
			"./js/ChartProperties"
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
				},



				title : {
					type: "items",
					label: "In Chart Title and Subtitle",
					items : {

						inChartTitle: {
							type: "string",
							expression: "optional",
							label: "In Chart Title",
							defaultValue: "This Chart Title",
							ref: "settings.titles.title"
						},
						customizeTitle : {
							ref : "field.title.show",
							type : "boolean",
							label : "Customize Title",
							defaultValue : false
						},
						AlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Align",
							options: alignOption,
							defaultValue: "center",
							ref: "settings.titles.align",
							show : function(data) {
								return data.field && data.field.title && data.field.title.show;
							}
						},
						VAlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Vertical Align",
							options: valignOption,
							defaultValue: "top",
							ref: "settings.titles.valign",
							show : function(data) {
								return data.field && data.field.title && data.field.title.show;
							}
						},
						FloatingCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Floating",
							ref: "settings.titles.floating",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.field && data.field.title && data.field.title.show;
							}
						},
						Margin: {
							type: "number",
							expression: "optional",
							label: "Margin",
							defaultValue:40,
							ref: "settings.titles.margin",
							show : function(data) {
								return data.field && data.field.title && data.field.title.show;
							}
						},
						Color: {
							type: "string",
							expression: "optional",
							label: "Color",
							defaultValue: "#333333",
							ref: "settings.titles.style.color",
							show : function(data) {
								return data.field && data.field.title && data.field.title.show;
							}
						},
						FontSize: {
							type: "string",
							expression: "optional",
							label: "Font",
							defaultValue: "18px",
							ref: "settings.titles.style.fontsize",
							show : function(data) {
								return data.field && data.field.title && data.field.title.show;
							}
						},
						widthAdjust: {
							type: "number",
							expression: "optional",
							label: "Width Adjust",
							defaultValue: -44,
							ref: "settings.titles.widthadjust",
							show : function(data) {
								return data.field && data.field.title && data.field.title.show;
							}
						},
						x: {
							type: "number",
							expression: "optional",
							label: "x",
							defaultValue: 0,
							ref: "settings.titles.x",
							show : function(data) {
								return data.field && data.field.title && data.field.title.show;
							}
						},


						// Subtitle Section
						inChartSubTitle: {
							type: "string",
							expression: "optional",
							label: "In Chart Subtitle",
							defaultValue: "This Chart Subtitle",
							ref: "settings.titles.subutitle.title"
						},
						customizeSubTitle : {
							ref : "field.subtitle.show",
							type : "boolean",
							label : "Customize Subtitle",
							defaultValue : false
						},
						SubtitleAlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Align",
							options: alignOption,
							defaultValue: "center",
							ref: "settings.titles.subutitle.align",
							show : function(data) {
								return data.field && data.field.subtitle && data.field.subtitle.show;
							}
						},
						SubtitleVAlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Vertical Align",
							options: valignOption,
							defaultValue: "top",
							ref: "settings.titles.subutitle.valign",
							show : function(data) {
								return data.field && data.field.subtitle && data.field.subtitle.show;
							}
						},
						SubtitleloatingCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Floating",
							ref: "settings.titles.subutitle.floating",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
									defaultValue: false,
							show : function(data) {
								return data.field && data.field.subtitle && data.field.subtitle.show;
							}
						},
						SubtitleColor: {
							type: "string",
							expression: "optional",
							label: "Color",
							defaultValue: "#333333",
							ref: "settings.titles.style.subutitle.color",
							show : function(data) {
								return data.field && data.field.subtitle && data.field.subtitle.show;
							}
						},
						SubtitleFontSize: {
							type: "string",
							expression: "optional",
							label: "Font",
							defaultValue: "18px",
							ref: "settings.titles.style.subutitle.fontsize",
							show : function(data) {
								return data.field && data.field.subtitle && data.field.subtitle.show;
							}
						},
						Subtitlex: {
							type: "number",
							expression: "optional",
							label: "x",
							defaultValue: 0,
							ref: "settings.titles.subutitle.x",
							show : function(data) {
								return data.field && data.field.subtitle && data.field.subtitle.show;
							}
						}
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
				        chart: {},
			        	title:  {},
				        subtitles:{},
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

					var titles = makeTitle(layout.settings.titles);
					mychart.title = titles[0];
					mychart.subtitle = titles[1]
				//	mychart.chart = makeChart(layout.settings.chart);
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
			
			$('#'+layout.qInfo.qId).highcharts(mychart);
		
		};
		
		return me;

	} );
