


var plotOptionSettings = {

    component: "expandable-items",
    label: "Plot Option",
    items:{
    	GeneralSettings: {
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
						}
		    }
		},
		dataLables : {
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
		}
	}
};