var generalSettings = {

					uses : "settings",
					items: {
						general: {
							type: "items",
							label: "General",
							items : {
								MyList: {
									type: "array",
		                            ref: "listItems",
		                            label: "List Items",
		                            itemTitleRef: "label",
		                            allowAdd: true,
		                            allowRemove: true,
		                            addTranslation: "Add Item",
		                            items: {
		                                button: {
											label:"Click me",
											component: "button",
											action: function(data){
												alert("click!");
											}
										},
										label: {
											type: "string",
											ref: "label",
											label: "Label",
											expression: "optional"
										},
										textarea: {
											label:"My textarea",
											component: "textarea",
											maxlength: 100,//you shouldn't write too much
											ref: "myTextarea"
										}
		                            }
								},
								CreditsCheckbox: {
									type: "boolean",
									component: "switch",
									label: "Enable Credits",
									ref: "settings.credits",
		                            options: [{
		                                        value: true,
		                                        label: "On"
											}, {
		                                       value: false,
		                                        label: "Off"
									        }],
											defaultValue: true
								},
								paletteColorArray: {
									type: "string",
									expression: "optional",
									label: "Palette Color Array",
									defaultValue: '[ "#b0afae", "#7b7a78", "#545352", "#4477aa", "#7db8da", "#b6d7ea", "#46c646", "#f93f17", "#ffcf02", "#276e27", "#ffffff", "#000000"]',
									ref: "settings.charts.paletteColorArray"
								},
							}
						}
					}
};
