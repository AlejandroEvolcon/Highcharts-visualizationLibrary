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
				},

				chart : {
					type: "items",
					label: "Chart Options",
					items : {

						typeChart: {
							type: "string",
							component: "dropdown",
							label: "Chart Type",
							defaultValue: 'pie',
							options: chartList,
							ref: "settings.charts.type"
						},
						customizeChart : {
							ref : "field.chart.show",
							type : "boolean",
							label : "More chart options",
							defaultValue : false
						},
						alignTicksCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Align Ticks",
							ref: "settings.charts.alignticks",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						animationCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Animation",
							ref: "settings.charts.animation",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						backgroundColorChart: {
							type: "string",
							expression: "optional",
							label: "Background Color",
							defaultValue: "#FFFFFF",
							ref: "settings.charts.backgroundColor",
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						borderColorChart: {
							type: "string",
							expression: "optional",
							label: "Border Color",
							defaultValue: "#4572A7",
							ref: "settings.charts.borderColor",
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						borderRadiusChart: {
							type: "number",
							expression: "optional",
							label: "Border Radius",
							defaultValue: 0,
							ref: "settings.charts.borderRadius",
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						borderWidthChart: {
							type: "number",
							expression: "optional",
							label: "Border Width",
							defaultValue: 0,
							ref: "settings.charts.borderWidth",
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						classNameChart: {
							type: "string",
							expression: "optional",
							label: "Class Name",
							defaultValue: undefined,
							ref: "settings.charts.className",
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						defaultSeriesTypeChart: {
							type: "string",
							expression: "optional",
							label: "Default Series Type",
							defaultValue: "line",
							ref: "settings.charts.defaultSeriesType",
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						ignoreHiddenSeriesCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Ignore Hidden Series",
							ref: "settings.charts.ignoreHiddenSeries",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: true,
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						invertedCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Inverted",
							ref: "settings.charts.inverted",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						marginChart: {
							type: "string",
							expression: "optional",
							label: "Margin",
							defaultValue: undefined,
							ref: "settings.charts.margin",
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						panningCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Panning",
							ref: "settings.charts.panning",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.field && data.field.chart && data.field.chart.show;
							}
						},
						panKeyChart: {
							type: "string",
							expression: "optional",
							label: "Pan Key",
							defaultValue: "shift",
							ref: "settings.charts.pankey",
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						/*
						pinchTypeChart: {
							type: "string",
							expression: "optional",
							label: "Pinch Type",
							defaultValue: null,
							ref: "settings.charts.pinchType"
						},
						*/
						plotBackgroundColorChart: {
							type: "string",
							expression: "optional",
							label: "Plot Background Color",
							defaultValue: undefined,
							ref: "settings.charts.plotBackgroundColor",
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						plotBackgroundImageChart: {
							type: "string",
							expression: "optional",
							label: "Plot Background Image",
							defaultValue: undefined,
							ref: "settings.charts.plotBackgroundImage",
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						plotBorderColorChart: {
							type: "string",
							expression: "optional",
							label: "Plot Border Color",
							defaultValue: "#C0C0C0",
							ref: "settings.charts.plotBorderColor",
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						plotBorderWidthChart: {
							type: "number",
							expression: "optional",
							label: "Plot Border Width",
							defaultValue: 0,
							ref: "settings.charts.plotBorderWidth",
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						plotShadowCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Plot Shadow",
							ref: "settings.charts.plotShadow",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						polarCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Polar",
							ref: "settings.charts.polar",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						reflowCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Reflow",
							ref: "settings.charts.reflow",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: true,
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						selectionMarkerFillChart: {
							type: "string",
							expression: "optional",
							label: "Selection Marker Fill",
							defaultValue: "rgba(69,114,167,0.25)",
							ref: "settings.charts.selectionMarkerFill",
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						shadowCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Shadow",
							ref: "settings.charts.shadow",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						showAxesCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Show Axes",
							ref: "settings.charts.showAxes",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						fontFamilyChart: {
							type: "string",
							expression: "optional",
							label: "Font Family",
							defaultValue: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
							ref: "settings.charts.style.fontFamily",
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
							}
						},
						fontSizeChart: {
							type: "string",
							expression: "optional",
							label: "Font Size",
							defaultValue: '12px',
							ref: "settings.charts.style.fontSize",
							show : function(data) {
								return data.settings && data.settings.charts && data.settings.charts.panning;
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
					mychart.chart = makeChart(layout.settings.charts);
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
