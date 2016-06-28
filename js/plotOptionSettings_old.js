
var plotOptionSettings = {

					type: "items",
					label: "Plot Option",
					items : {
						myNewHeader: {
							type: "items",
            				label: "My header, containing text box",
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
						},
						dataLabelsAlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Align",
							options: alignOption,
							defaultValue: "center",
							ref: "settings.titles.dataLabels.align",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1);
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
								return (PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1);
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
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1);
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
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1);
							}
						},

						dataLabelsBorderRadius: {
							type: "number",
							component: "slider",
							label: "Range",
							min: 0,
							max: 20,
							step: 1,
							defaultValue: 0,
							ref: "settings.plotOptions.dataLabels.borderRadius",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1);
							}
						},
						dataLabelsBorderWidth: {
							type: "number",
							component: "slider",
							label: "Range",
							min: 0,
							max: 15,
							step: 1,
							defaultValue: 0,
							ref: "settings.plotOptions.dataLabels.borderWidth",
							show : function(data) {
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1);
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
								return ( PlotOptionChartMap[data.settings.charts.type].indexOf('dataLabels') != -1);
							}
						}

					}

}
}

};

