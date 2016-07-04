var Title = {

					type: "items",
					label: "Title",
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
						}
					}

				};

var Subtitle = {
					type: "items",
					label: "Subtitle",
					items : {	
						inChartSubTitle: {
							type: "string",
							expression: "optional",
							label: "In Chart Subtitle",
							defaultValue: "This Chart Subtitle",
							ref: "settings.subtitle.title"
						},
						customizeSubTitle : {
							type : "boolean",
							label : "Customize Subtitle",
							defaultValue : false,
							ref : "field.subtitle.show"
						},
						SubtitleAlignDropDown: {
							type: "string",
							component: "dropdown",
							label: "Align",
							options: alignOption,
							defaultValue: "center",
							ref: "settings.subtitle.align",
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
							ref: "settings.subtitle.valign",
							show : function(data) {
								return data.field && data.field.subtitle && data.field.subtitle.show;
							}
						},
						SubtitleloatingCheckbox: {
							type: "boolean",
							component: "switch",
							label: "Floating",
							ref: "settings.subtitle.floating",
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
							ref: "settings.subtitle.style.color",
							show : function(data) {
								return data.field && data.field.subtitle && data.field.subtitle.show;
							}
						},
						SubtitleFontSize: {
							type: "string",
							expression: "optional",
							label: "Font",
							defaultValue: "18px",
							ref: "settings.subtitle.style.fontsize",
							show : function(data) {
								return data.field && data.field.subtitle && data.field.subtitle.show;
							}
						},
						Subtitlex: {
							type: "number",
							expression: "optional",
							label: "x",
							defaultValue: 0,
							ref: "settings.subtitle.x",
							show : function(data) {
								return data.field && data.field.subtitle && data.field.subtitle.show;
							}
						}
					}

};

// Questa è la sezione di mapping dell'intera Plot Option
var titleSettings = {

    component: "expandable-items",
    label: "Title and Subtitle",
    items:{
    	Title: { },
		Subtitle : {}
	}
};

titleSettings.items.Title=Title;
titleSettings.items.Subtitle=Subtitle;