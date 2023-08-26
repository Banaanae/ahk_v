Blockly.defineBlocksWithJsonArray([
	{
		"type": "gui_header",
		"message0": "Gui %1 %2 Position %3",
		"args0": [
			{
				"type": "field_input",
				"name": "gui_input_name",
				"text": "Name"
			},
			{
				"type": "input_value",
				"name": "NAME"
			},
			{
				"type": "input_value",
				"name": "gui_input_position"
			}
		],
		"nextStatement": null,
		"colour": 230,
		"tooltip": "TODO",
		"helpUrl": ""
	},
	{
		"type": "gui_add",
		"message0": "Add %1 X Postion %2 Y Postion %3 Width %4 Height %5 %6",
		"args0": [
			{
				"type": "field_dropdown",
				"name": "gui_add_type",
				"options": [
					[
						"Text",
						"gui_add_text"
					],
					[
						"Edit",
						"gui_add_edit"
					],
					[
						"UpDown",
						"gui_add_updown"
					],
					[
						"Picture",
						"gui_add_picture"
					],
					[
						"Button",
						"gui_add_button"
					],
					[
						"Checkbox",
						"gui_add_checkbox"
					],
					[
						"Radio",
						"gui_add_radio"
					],
					[
						"Drop Down List",
						"gui_add_dropdownlist"
					],
					[
						"Combobox",
						"gui_add_combobox"
					],
					[
						"Listbox",
						"gui_add_listbox"
					],
					[
						"Listview",
						"gui_add_listview"
					],
					[
						"Treeview",
						"gui_add_treeview"
					],
					[
						"Link",
						"gui_add_link"
					],
					[
						"Hotkey",
						"gui_add_hotkey"
					],
					[
						"DateTime",
						"gui_add_datetime"
					],
					[
						"MonthCal",
						"gui_add_monthcal"
					],
					[
						"Slider",
						"gui_add_slider"
					],
					[
						"Progress",
						"gui_add_progress"
					],
					[
						"Groupbox",
						"gui_add_groupbox"
					],
					[
						"Tab",
						"gui_add_tab"
					],
					[
						"Tab2",
						"gui_add_tab2"
					],
					[
						"Tab3",
						"gui_add_tab3"
					],
					[
						"StatusBar",
						"gui_add_statusbar"
					],
					[
						"ActiveX",
						"gui_add_activex"
					],
					[
						"Custom",
						"gui_add_custom"
					]
				]
			},
			{
				"type": "field_number",
				"name": "NAME",
				"value": 0
			},
			{
				"type": "field_number",
				"name": "NAME",
				"value": 0
			},
			{
				"type": "field_number",
				"name": "NAME",
				"value": 0
			},
			{
				"type": "field_number",
				"name": "NAME",
				"value": 0
			},
			{
				"type": "input_value",
				"name": "gui_add_type_input"
			}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 15,
		"tooltip": "Adds a control to the selected gui, requires name on side",
		"helpUrl": ""
	}
])