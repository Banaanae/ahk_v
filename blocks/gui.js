import * as Blockly from 'blockly';

export const guiBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([
{ // TODO: Combine all gui blocks and change block based on control
	"type": "gui_add_text",
	"message0": "Add text %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "text"
	  },
	  {
		"type": "input_value",
		"name": "x"
	  },
	  {
		"type": "input_value",
		"name": "y"
	  },
	  {
		"type": "input_value",
		"name": "w"
	  },
	  {
		"type": "input_value",
		"name": "h"
	  },
	  {
		"type": "input_value",
		"name": "name"
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
		"name": "text"
	  },
	  {
		"type": "input_value",
		"name": "x"
	  },
	  {
		"type": "input_value",
		"name": "y"
	  },
	  {
		"type": "input_value",
		"name": "w"
	  },
	  {
		"type": "input_value",
		"name": "h"
	  },
	  {
		"type": "input_value",
		"name": "name"
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
	"message0": "Add picture located at %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "location"
	  },
	  {
		"type": "input_value",
		"name": "x"
	  },
	  {
		"type": "input_value",
		"name": "y"
	  },
	  {
		"type": "input_value",
		"name": "w"
	  },
	  {
		"type": "input_value",
		"name": "h"
	  },
	  {
		"type": "input_value",
		"name": "name"
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
		"name": "text"
	  },
	  {
		"type": "input_value",
		"name": "x"
	  },
	  {
		"type": "input_value",
		"name": "y"
	  },
	  {
		"type": "input_value",
		"name": "w"
	  },
	  {
		"type": "input_value",
		"name": "h"
	  },
	  {
		"type": "input_value",
		"name": "name"
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
		"name": "text"
	  },
	  {
		"type": "input_value",
		"name": "x"
	  },
	  {
		"type": "input_value",
		"name": "y"
	  },
	  {
		"type": "input_value",
		"name": "w"
	  },
	  {
		"type": "input_value",
		"name": "h"
	  },
	  {
		"type": "input_value",
		"name": "name"
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
		"name": "text"
	  },
	  {
		"type": "input_value",
		"name": "x"
	  },
	  {
		"type": "input_value",
		"name": "y"
	  },
	  {
		"type": "input_value",
		"name": "w"
	  },
	  {
		"type": "input_value",
		"name": "h"
	  },
	  {
		"type": "input_value",
		"name": "name"
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
		"name": "text",
		"check": "Array"
	  },
	  {
		"type": "input_value",
		"name": "x"
	  },
	  {
		"type": "input_value",
		"name": "y"
	  },
	  {
		"type": "input_value",
		"name": "w"
	  },
	  {
		"type": "input_value",
		"name": "h"
	  },
	  {
		"type": "input_value",
		"name": "name"
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
		"name": "text",
		"check": "Array"
	  },
	  {
		"type": "input_value",
		"name": "x"
	  },
	  {
		"type": "input_value",
		"name": "y"
	  },
	  {
		"type": "input_value",
		"name": "w"
	  },
	  {
		"type": "input_value",
		"name": "h"
	  },
	  {
		"type": "input_value",
		"name": "name"
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
		"name": "text",
		"check": "Array"
	  },
	  {
		"type": "input_value",
		"name": "x"
	  },
	  {
		"type": "input_value",
		"name": "y"
	  },
	  {
		"type": "input_value",
		"name": "w"
	  },
	  {
		"type": "input_value",
		"name": "h"
	  },
	  {
		"type": "input_value",
		"name": "name"
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
	"message0": "Add date selector %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "text"
	  },
	  {
		"type": "input_value",
		"name": "x"
	  },
	  {
		"type": "input_value",
		"name": "y"
	  },
	  {
		"type": "input_value",
		"name": "w"
	  },
	  {
		"type": "input_value",
		"name": "h"
	  },
	  {
		"type": "input_value",
		"name": "name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds datetime",
	"helpUrl": ""
  },
  // MonthCal and Slider
  {
	"type": "gui_add_slider",
	"message0": "Add slider %1 At X %2 Y %3 Width %4 Height %5 and name it %6",
	"args0": [
	  {
		"type": "input_value",
		"name": "text"
	  },
	  {
		"type": "input_value",
		"name": "x"
	  },
	  {
		"type": "input_value",
		"name": "y"
	  },
	  {
		"type": "input_value",
		"name": "w"
	  },
	  {
		"type": "input_value",
		"name": "h"
	  },
	  {
		"type": "input_value",
		"name": "name"
	  }
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Adds datetime",
	"helpUrl": ""
  },
{
	"type": "gui_header",
	"message0": "Gui %1 %2 %3",
	"args0": [
		{
			"type": "field_input",
			"name": "gui_header_name",
			"text": "Name"
		},
		{
			"type": "input_dummy",
		},
		{
			"type": "input_statement",
			"name": "gui_header_blocks"
		}
	],
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
