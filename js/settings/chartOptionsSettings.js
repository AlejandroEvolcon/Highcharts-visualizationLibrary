
//require("chartList");

var chartOptionSettings = {

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
};