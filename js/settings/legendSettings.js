


var legendSettings = {

					type: "items",
					label: "Chart Legend",
					items : {
						enableCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Enable Legend",
							ref: "settings.legend.enable",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false
						},
						AlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Align",
							options: alignOption,
							defaultValue: "center",
							ref: "settings.legend.align",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						VAlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Vertical Align",
							options: valignOption,
							defaultValue: "bottom",
							ref: "settings.legend.verticalAlign",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						backgroundColorLegend: {
							type: "string",
							expression: "optional",
							label: "Background Color",
							defaultValue: undefined,
							ref: "settings.legend.backgroundColor",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						borderColorLegend: {
							type: "string",
							expression: "optional",
							label: "Border Color",
							defaultValue: "#909090",
							ref: "settings.legend.borderColor",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						borderRadiusLegend: {
							type: "number",
							expression: "optional",
							label: "Border Radius",
							defaultValue: 0,
							ref: "settings.legend.borderRadius",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						borderWidthLegend: {
							type: "number",
							expression: "optional",
							label: "Border Width",
							defaultValue: 0,
							ref: "settings.legend.borderWidth",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						floatingCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Floating",
							ref: "settings.legend.floating",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						itemDistanceLegend: {
							type: "number",
							expression: "optional",
							label: "Item Distance",
							defaultValue: 20,
							ref: "settings.legend.itemdistance",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						itemHiddenStyleLegend: {
							type: "string",
							expression: "optional",
							label: "Item Hidden Style",
							defaultValue: undefined,
							ref: "settings.legend.itemHiddenStyle",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						itemHoverStyleLegend: {
							type: "string",
							expression: "optional",
							label: "Item Hover Style",
							defaultValue: undefined,
							ref: "settings.legend.itemHoverStyle",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						itemMarginBottomLegend: {
							type: "number",
							expression: "optional",
							label: "Item Margin Bottom",
							defaultValue: 0,
							ref: "settings.legend.itemMarginBottom",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						itemMarginTopLegend: {
							type: "number",
							expression: "optional",
							label: "Item Margin Top",
							defaultValue: 0,
							ref: "settings.legend.itemMarginTop",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						itemColorLegend: {
							type: "string",
							expression: "optional",
							label: "Item Color Style",
							defaultValue: undefined,
							ref: "settings.legend.style.color",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						itemCursorLegend: {
							type: "string",
							expression: "optional",
							label: "Item Cursor Style",
							defaultValue: "pointer",
							ref: "settings.legend.style.cursor",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						itemFontSizeLegend: {
							type: "string",
							expression: "optional",
							label: "Item Font Size",
							defaultValue: "12px",
							ref: "settings.legend.title.style.fontSize",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						itemFontWeightLegend: {
							type: "string",
							expression: "optional",
							label: "Item Font Weight",
							defaultValue: "bold",
							ref: "settings.legend.title.style.fontWeight",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						LayoutLegend: {
							type: "string",
							component: "dropdown",
							label: "Layout",
							defaultValue: 'horizontal',
							options: Layout,
							ref: "settings.legend.layout",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						LineHeightLegend: {
							type: "number",
							expression: "optional",
							label: "Line Height",
							defaultValue: 16,
							ref: "settings.legend.lineHeight",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						MarginLegend: {
							type: "number",
							expression: "optional",
							label: "Margin",
							defaultValue: 12,
							ref: "settings.legend.margin",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						Padding: {
							type: "number",
							expression: "optional",
							label: "Padding",
							defaultValue: 8,
							ref: "settings.legend.padding",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						reversedCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Reversed",
							ref: "settings.legend.reversed",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						rtlCheckbox: {
							type: "boolean",
							component: "switch",
							label: "rtl",
							ref: "settings.legend.rtl",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						shadowCheckbox: {
							type: "boolean",
							component: "switch",
							label: "shadow",
							ref: "settings.legend.shadow",
                            options: [{
                                        value: true,
                                        label: "On"
									}, {
                                       value: false,
                                        label: "Off"
							        }],
							defaultValue: false,
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						},
						Style: {
							type: "string",
							expression: "optional",
							label: "Style",
							defaultValue: undefined,
							ref: "settings.legend.style",
							show : function(data) {
								return data.settings && data.settings.legend && data.settings.legend.enable;
							}
						}
					}
				};