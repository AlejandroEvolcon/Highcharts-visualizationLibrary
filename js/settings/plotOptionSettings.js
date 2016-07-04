
// Sezione Marker
var markerSection = {
			type: "items",
			label: "Marker",
			items : {
						markerEnabled: {
							type: "boolean",
							component: "switch",
							label: "Enabled",
							ref: "settings.plotOptions.marker.enabled",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('marker') != -1);
							}
						},
						markerFillColor: {
							type: "integer",
							component: "color-picker",
							//expression: "optional",
							label: "Fill Color",
							defaultValue:undefined,
							ref: "settings.plotOptions.marker.fillColor",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('marker') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.marker && 
									data.settings.plotOptions.marker.enabled
								);
							}
						},
						/*
						height: {
							type: "integer",
							expression: "optional",
							label: "Height",
							defaultValue:null,
							ref: "settings.plotOptions.height",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('marker') != -1);
							}
						},
						*/
						markerLineColor: {
							type: "integer",
							component: "color-picker",
							label: "Line Color",
							defaultValue:3,
							ref: "settings.plotOptions.marker.color",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('marker') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.marker && 
									data.settings.plotOptions.marker.enabled
								);
							}
						},
						markerLineWidth: {
							type: "number",
							component: "slider",
							label: "Line Width",
							min: 0,
							max: 15,
							step: 1,
							defaultValue: 0,
							ref: "settings.plotOptions.marker.lineWidth",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('marker') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.marker && 
									data.settings.plotOptions.marker.enabled
								);
							}
						},
						markerRadius: {
							type: "number",
							component: "slider",
							label: "Radius",
							min: 0,
							max: 10,
							step: 1,
							defaultValue: 4,
							ref: "settings.plotOptions.marker.radius",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('marker') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.marker && 
									data.settings.plotOptions.marker.enabled
								);
							}
						}

			},
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('marker') != -1);
							}
};

//Sezione General
var GeneralSection = {
			type: "items",
			label: "General Settings",
		    items : {
				allowPointSelectCheckbox: {
					type: "boolean",
					component: "switch",
					label: "Allow Point Select",
					ref: "settings.plotOptions.allowPointSelect",
                         options: [{
                                    value: true,
                                    label: "On"
								}, {
                                    value: false,
                                    label: "Off"
						        }],
					defaultValue: false,										
					show : function(data) {			// Showed for all Chart but gauge and solidgaude
						return ( PlotOptionChartMap[data.settings.charts.type].indexOf('allowPointSelect') != -1);
					}
				},
						animationCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Animation",
							ref: "settings.plotOptions.animation",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: true,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('animation') != -1);
							}
						},
						animationLimit: {
							type: "string",
							expression: "optional",
							label: "Animation Limit",
							defaultValue:'',
							ref: "settings.plotOptions.animationLimit",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('animationLimit') != -1);
							}
						},
						borderColor: {
							type: "integer",
							component: "color-picker",
							//expression: "optional",
							label: "Border Color",
							defaultValue:10,
							ref: "settings.plotOptions.borderColor",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('borderColor') != -1 );
							}
						},
						borderRadius: {
							type: "number",
							component: "slider",
							label: "Border Radius",
							min: 0,
							max: 50,
							step: 1,
							defaultValue: 0,
							ref: "settings.plotOptions.borderRadius",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('borderRadius') != -1);
							}
						},
						borderWidth: {
							type: "number",
							component: "slider",
							label: "Border Width",
							min: 0,
							max: 20,
							step: 1,
							defaultValue: 0,
							ref: "settings.plotOptions.borderWidth",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('borderWidth') != -1);
							}
						},
						color: {
							type: "integer",
							component: "color-picker",
							//expression: "optional",
							label: "Color",
							defaultValue:3,
							ref: "settings.plotOptions.color",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('color') != -1);
							}
						},
						colorByPoint: {
							type: "boolean",
							component: "switch",
							label: "Color by point",
							ref: "settings.plotOptions.colorByPoint",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('colorByPoint') != -1);
							}
						},
						connectEnds: {
							type: "boolean",
							component: "switch",
							label: "Connect Ends",
							ref: "settings.plotOptions.connectEnds",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: true,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('connectEnds') != -1);
							}
						},
						connectNulls: {
							type: "boolean",
							component: "switch",
							label: "Connect Nulls",
							ref: "settings.plotOptions.connectNulls",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('connectNulls') != -1);
							}
						},
						cropThreshold: {
							type: "integer",
							expression: "optional",
							label: "Crop Threshold",
							defaultValue:300,
							ref: "settings.plotOptions.cropThreshold",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('cropThreshold') != -1);
							}
						},
						cursor: {
							type: "string",
							expression: "optional",
							label: "Cursor",
							defaultValue:'',
							ref: "settings.plotOptions.cursor",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('cursor') != -1);
							}
						},
						dashStyle: {
							type: "string",
							component: "dropdown",
							label: "Dash Style",
							options: dashStyle,
							defaultValue: "Solid",
							ref: "settings.titles.dashStyle",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dashStyle') != -1);
							}
						},
						depth: {
							type: "integer",
							expression: "optional",
							label: "Depth",
							defaultValue:300,
							ref: "settings.plotOptions.depth",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('depth') != -1);
							}
						},
						enableMouseTracking: {
							type: "boolean",
							component: "switch",
							label: "Enable Mouse Tracking",
							ref: "settings.plotOptions.enableMouseTracking",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('enableMouseTracking') != -1);
							}
						},
						fillColor: {
							type: "integer",
							component: "color-picker",
							//expression: "optional",
							label: "Fill Color",
							defaultValue:3,
							ref: "settings.plotOptions.fillColor",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('fillColor') != -1 );
							}
						},
						fillOpacity: {
							type: "number",
							component: "slider",
							label: "Fill Opacity",
							min: 0,
							max: 1,
							step: 0.1,
							defaultValue: 0.7,
							ref: "settings.plotOptions.fillOpacity",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('fillOpacity') != -1);
							}
						},
						getExtremesFromAll: {
							type: "boolean",
							component: "switch",
							label: "Get Extremes From All",
							ref: "settings.plotOptions.getExtremesFromAll",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('getExtremesFromAll') != -1);
							}
						},
						groupPadding: {
							type: "number",
							component: "slider",
							label: "Fill Opacity",
							min: 0,
							max: 2,
							step: 0.1,
							defaultValue: 0.1,
							ref: "settings.plotOptions.groupPadding",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('groupPadding') != -1);
							}
						},
						groupZPadding: {
							type: "number",
							component: "slider",
							label: "Fill Z Opacity",
							min: 0,
							max: 2,
							step: 0.1,
							defaultValue: 1,
							ref: "settings.plotOptions.groupZPadding",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('groupZPadding') != -1);
							}
						},
						keys: {
							type: "string",
							expression: "optional",
							label: "Keys",
							defaultValue:'',
							ref: "settings.plotOptions.keys",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('keys') != -1);
							}
						},
						lineColor: {
							type: "integer",
							component: "color-picker",
							//expression: "optional",
							label: "Line Color",
							defaultValue:3,
							ref: "settings.plotOptions.lineColor",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('lineColor') != -1 );
							}
						},
						lineWidth: {
							type: "number",
							component: "slider",
							label: "Line Width",
							min: 0,
							max: 15,
							step: 1,
							defaultValue: 2,
							ref: "settings.plotOptions.lineWidth",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('lineWidth') != -1);
							}
						},
						linecap: {
							type: "string",
							expression: "optional",
							label: "Linecap",
							defaultValue:'round',
							ref: "settings.plotOptions.linecap",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('linecap') != -1);
							}
						},
						linkedTo: {
							type: "string",
							expression: "optional",
							label: "Linked To",
							defaultValue:'',
							ref: "settings.plotOptions.linkedTo",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('linkedTo') != -1);
							}
						},
						negativeColor: {
							type: "integer",
							component: "color-picker",
							label: "Negative Color",
							defaultValue:1,
							ref: "settings.plotOptions.negativeColor",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('negativeColor') != -1 );
							}
						},
						negativeFillColor: {
							type: "integer",
							component: "color-picker",
							label: "Negative Fill Color",
							defaultValue:1,
							ref: "settings.plotOptions.negativeFillColor",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('negativeFillColor') != -1 );
							}
						},
						pointInterval: {
							type: "integer",
							expression: "optional",
							label: "Point Interval",
							defaultValue:1,
							ref: "settings.plotOptions.pointInterval",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('pointInterval') != -1);
							}
						},
						pointIntervalUnit: {
							type: "string",
							expression: "optional",
							label: "Point Interval Unit",
							defaultValue:undefined,
							ref: "settings.plotOptions.pointIntervalUnit",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('pointIntervalUnit') != -1);
							}
						},
						pointIntervalPlacement: {
							type: "string",
							expression: "optional",
							label: "Point Interval Placement",
							defaultValue:undefined,
							ref: "settings.plotOptions.pointIntervalPlacement",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('pointIntervalPlacement') != -1);
							}
						},
						pointStart: {
							type: "integer",
							expression: "optional",
							label: "Point Start",
							defaultValue:0,
							ref: "settings.plotOptions.pointStart",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('pointStart') != -1);
							}
						},
						selected: {
							type: "boolean",
							component: "switch",
							label: "Selected",
							ref: "settings.plotOptions.selected",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('selected') != -1);
							}
						},
						shadow: {
							type: "boolean",
							component: "switch",
							label: "Shadow",
							ref: "settings.plotOptions.shadow",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('shadow') != -1);
							}
						},
						showCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Show Checkbox",
							ref: "settings.plotOptions.showCheckbox",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('showCheckbox') != -1);
							}
						},
						showInLegend: {
							type: "boolean",
							component: "switch",
							label: "Show In Legend",
							ref: "settings.plotOptions.showInLegend",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: true,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('showInLegend') != -1);
							}
						},
						softThreshold: {
							type: "boolean",
							component: "switch",
							label: "Soft Threshold",
							ref: "settings.plotOptions.softThreshold",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('softThreshold') != -1);
							}
						},
						stacking: {
							type: "string",
							component: "dropdown",
							label: "Stacking",
							options: stacking,
							defaultValue: undefined,
							ref: "settings.titles.stacking",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('stacking') != -1);
							}
						},
						step: {
							type: "boolean",
							component: "switch",
							label: "Step",
							ref: "settings.plotOptions.step",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('step') != -1);
							}
						},
						stickyTracking: {
							type: "boolean",
							component: "switch",
							label: "Sticky Tracking",
							ref: "settings.plotOptions.stickyTracking",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: true,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('stickyTracking') != -1);
							}
						},
						threshold: {
							type: "integer",
							expression: "optional",
							label: "Threshold",
							defaultValue:0,
							ref: "settings.plotOptions.threshold",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('threshold') != -1);
							}
						},
						trackByArea: {
							type: "boolean",
							component: "switch",
							label: "Track By Area",
							ref: "settings.plotOptions.trackByArea",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('trackByArea') != -1);
							}
						},
						turboThreshold: {
							type: "integer",
							expression: "optional",
							label: "Turbo Threshold",
							defaultValue:1000,
							ref: "settings.plotOptions.turboThreshold",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('turboThreshold') != -1);
							}
						},
						visible: {
							type: "boolean",
							component: "switch",
							label: "Visible",
							ref: "settings.plotOptions.visible",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: true,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('visible') != -1);
							}
						}
		    }

};


// Data Lable Section
var dataLablesSection = {
			type: "items",
			label: "Data Lables",
			    items : {
						dataLabelsEnabled: {
							type: "boolean",
							component: "switch",
							label: "Enabled",
							ref: "settings.plotOptions.dataLabels.enabled",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: true,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1);
							}
						},
						dataLabelsAlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Align",
							options: alignOption,
							defaultValue: "center",
							ref: "settings.plotOptions.dataLabels.align",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsVAlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Vertical Align",
							options: valignOption,
							defaultValue: "top",
							ref: "settings.plotOptions.dataLabels.valign",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsAllowOverlap: {
							type: "boolean",
							component: "switch",
							label: "Allow Overlap",
							ref: "settings.plotOptions.dataLabels.allowOverlap",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsBackgroundColor: {
							type: "integer",
							component: "color-picker",
							//expression: "optional",
							label: "Background Color",
							defaultValue:3,
							ref: "settings.plotOptions.dataLabels.backgroundColor",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsBorderColor: {
							type: "integer",
							component: "color-picker",
							//expression: "optional",
							label: "Border Color",
							defaultValue:3,
							ref: "settings.plotOptions.dataLabels.borderColor",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},

						dataLabelsBorderRadius: {
							type: "number",
							component: "slider",
							label: "Border Radius",
							min: 0,
							max: 20,
							step: 1,
							defaultValue: 0,
							ref: "settings.plotOptions.dataLabels.borderRadius",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsBorderWidth: {
							type: "number",
							component: "slider",
							label: "Border Width",
							min: 0,
							max: 15,
							step: 1,
							defaultValue: 0,
							ref: "settings.plotOptions.dataLabels.borderWidth",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsColor: {
							type: "integer",
							component: "color-picker",
							//expression: "optional",
							label: "Color",
							defaultValue:3,
							ref: "settings.plotOptions.dataLabels.Color",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsCrop: {
							type: "boolean",
							component: "switch",
							label: "Crop",
							ref: "settings.plotOptions.dataLabels.crop",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: true,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsDefer: {
							type: "boolean",
							component: "switch",
							label: "Defer",
							ref: "settings.plotOptions.dataLabels.defer",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: true,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsFormat: {
							type: "string",
							expression: "optional",
							label: "Format",
							defaultValue:'',
							ref: "settings.plotOptions.dataLabels.format",
							show : function(data) {
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsInside: {
							type: "boolean",
							component: "switch",
							label: "Inside",
							ref: "settings.plotOptions.dataLabels.inside",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsOverflow: {
							type: "string",
							expression: "optional",
							label: "Overflow",
							defaultValue:'',
							ref: "settings.plotOptions.dataLabels.overflow",
							show : function(data) {
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsPadding: {
							type: "number",
							component: "slider",
							label: "Padding",
							min: 0,
							max: 50,
							step: 1,
							defaultValue: 5,
							ref: "settings.plotOptions.dataLabels.padding",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsReserveSpace: {
							type: "boolean",
							component: "switch",
							label: "Space",
							ref: "settings.plotOptions.dataLabels.reserveSpace",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: true,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsRotation: {
							type: "number",
							component: "slider",
							label: "Rotation",
							min: 0,
							max: 360,
							step: 1,
							defaultValue: 0,
							ref: "settings.plotOptions.dataLabels.rotation",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsShadow: {
							type: "boolean",
							component: "switch",
							label: "Shadow",
							ref: "settings.plotOptions.dataLabels.shadow",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,										
							show : function(data) {			// Showed for all Chart but gauge and solidgaude
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsShape: {
							type: "string",
							expression: "optional",
							label: "Shape",
							defaultValue:'',
							ref: "settings.plotOptions.dataLabels.shape",
							show : function(data) {
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsX: {
							type: "integer",
							expression: "optional",
							label: "X",
							defaultValue:0,
							ref: "settings.plotOptions.dataLabels.x",
							show : function(data) {
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsY: {
							type: "integer",
							expression: "optional",
							label: "Y",
							defaultValue:-6,
							ref: "settings.plotOptions.dataLabels.y",
							show : function(data) {
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						},
						dataLabelsZIndex: {
							type: "integer",
							expression: "optional",
							label: "zIndex",
							defaultValue:6,
							ref: "settings.plotOptions.dataLabels.zIndex",
							show : function(data) {
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1 &&
									data.settings && data.settings.plotOptions && data.settings.plotOptions.dataLabels && 
									data.settings.plotOptions.dataLabels.enabled
								);
							}
						}
				}
};


// Questa è la sezione di mapping dell'intera Plot Option
var plotOptionSettings = {

    component: "expandable-items",
    label: "Plot Option",
    items:{
    	GeneralSettings: { },
		marker : {},
		dataLables : {}
	}
};


// Mapping variabili su PlotOption
plotOptionSettings.items.marker = markerSection;
plotOptionSettings.items.GeneralSettings = GeneralSection;
plotOptionSettings.items.dataLables = dataLablesSection;