var titleSettings = {

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

						// All the below options will be showed only if the Customize Title switch is true
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


};