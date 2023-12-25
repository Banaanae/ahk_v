import * as Blockly from 'blockly';

export const guiBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([
{
	"type": "gui_add_text",
	"message0": "Add text %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "gui_add_text_text"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_text_x"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_text_y"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_text_w"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_text_h"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_text_name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds text",
	"helpUrl": ""
  },
  {
	"type": "gui_add_edit",
	"message0": "Add text box with text %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "gui_add_edit_text"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_edit_x"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_edit_y"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_edit_w"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_edit_h"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_edit_name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds text box",
	"helpUrl": ""
  },
  //Insert updown here
  {
	"type": "gui_add_picture",
	"message0": "Add picture %1 At X %2 Y %3 Width %4 Height %5 Path on hardrive %6 and name it %7",
	"args0": [
	  {
		"type": "input_value",
		"name": "gui_add_picture_text"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_picture_x"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_picture_y"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_picture_w"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_picture_h"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_picture_path"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_picture_name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds picture",
	"helpUrl": ""
  },
  {
	"type": "gui_add_button",
	"message0": "Add button with text %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "gui_add_button_text"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_button_x"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_button_y"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_button_w"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_button_h"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_button_name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds text at that location",
	"helpUrl": ""
  },
  {
	"type": "gui_add_checkbox",
	"message0": "Add checkbox with text %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "gui_add_checkbox_text"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_checkbox_x"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_checkbox_y"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_checkbox_w"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_checkbox_h"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_checkbox_name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds text at that location",
	"helpUrl": ""
  },
  {
	"type": "gui_add_radio",
	"message0": "Add radio with text %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "gui_add_radio_text"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_radio_x"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_radio_y"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_radio_w"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_radio_h"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_radio_name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds text at that location",
	"helpUrl": ""
  },
  {
	"type": "gui_add_ddl",
	"message0": "Add drop down with array %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "gui_add_ddl_text",
		"check": "Array"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_ddl_x"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_ddl_y"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_ddl_w"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_ddl_h"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_ddl_name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds text at that location",
	"helpUrl": ""
  },
  {
	"type": "gui_add_combobox",
	"message0": "Add ComboBox with array %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "gui_add_combobox_text",
		"check": "Array"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_combobox_x"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_combobox_y"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_combobox_w"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_combobox_h"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_combobox_name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds text at that location",
	"helpUrl": ""
  },
  {
	"type": "gui_add_listbox",
	"message0": "Add ListBox with array %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "gui_add_listbox_text",
		"check": "Array"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_listbox_x"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_listbox_y"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_listbox_w"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_listbox_h"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_listbox_name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds text at that location",
	"helpUrl": ""
  },
  // Listview and Treeview and Link and Hotkey
  { // TODO: Remove %1 and add DDL instead
	"type": "gui_add_datetime",
	"message0": "Add date selector at %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "gui_add_datetime_text"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_datetime_x"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_datetime_y"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_datetime_w"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_datetime_h"
	  },
	  {
		"type": "input_value",
		"name": "gui_add_datetime_name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds datetime",
	"helpUrl": ""
  },
  // ^ Options and MonthCal
  // All Remaining ones
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
	"message0": "Show the GUI with name %1 %2 X Position %3 Y Position %4 Width %5 Height %6",
	"args0": [
		{
			"type": "field_input",
			"name": "gui_show_name",
			"text": "name"
		},
		{
			"type": "input_dummy"
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
