import * as Blockly from 'blockly';

export const guiBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
	"type": "gui_add",
	"message0": "Add %1 X Postion %2 Y Postion %3 Width %4 Height %5",
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
				[ // It might be better to have this as a separate block
					"ActiveX",
					"gui_add_activex"
				]//,
				//[
				//	"Custom",
				//	"gui_add_custom"
				//]
			]
		},
		{
			"type": "field_number",
			"name": "gui_add_x",
			"value": 0
		},
		{
			"type": "field_number",
			"name": "gui_add_y",
			"value": 0
		},
		{
			"type": "field_number",
			"name": "gui_add_width",
			"value": 0 // Remove 0 from optional fields
		},
		{
			"type": "field_number",
			"name": "gui_add_height",
			"value": 0
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": 15,
	"tooltip": "Adds a control to the selected gui, requires name on side",
	"helpUrl": ""
},
{
	"type": "gui_header",
	"message0": "Gui %1",
	"args0": [
		{
			"type": "field_input",
			"name": "gui_input_name",
			"text": "Name"
		}
	],
	"nextStatement": null,
	"colour": 230,
	"tooltip": "The starting block of the GUI, sets the name and position of the GUI",
	"helpUrl": ""
},
{
	"type": "gui_show",
	"message0": "Show the GUI with name %1 X Position %2 Y Position %3 Width %4 Height %5",
	"args0": [
		{
			"type": "field_input",
			"name": "gui_show_name",
			"text": "name"
		},
		{
			"type": "field_input",
			"name": "gui_show_x",
			"text": ""
		},
		{
			"type": "field_input",
			"name": "gui_show_y",
			"text": ""
		},
		{
			"type": "field_input",
			"name": "gui_show_w",
			"text": ""
		},
		{
			"type": "field_input",
			"name": "gui_show_h",
			"text": ""
		}
	],
	"inputsInline": false,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 180,
	"tooltip": "Shows the GUI with the specified name\nDoes not need to be used in a GUI header",
	"helpUrl": ""
}]);
