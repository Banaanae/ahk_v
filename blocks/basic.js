import * as Blockly from 'blockly';

export const basicBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
	"type": "hotkey",
	"message0": "When %1 is pressed %2 %3",
	"args0": [
		{
			"type": "field_input",
			"name": "hotkey_key",
			"text": "key"
		},
		{
			"type": "input_dummy",
		},
		{
			"type": "input_statement",
			"name": "hotkey_blocks"
		}
	],
	"colour": 180,
	"tooltip": "Code inside this block will run when the user presses the key",
	"helpUrl": ""
},
{
	"type": "send",
	"message0": "Send %1",
	"args0": [
		{
			"type": "field_input",
			"name": "send_keys",
			"check": "String"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": 90,
	"tooltip": "Send a key",
	"helpUrl": ""
},
{
	"type": "sleep",
	"message0": "Sleep %1",
	"args0": [
		{
			"type": "field_input",
			"name": "sleep_delay",
			"text": "delay (ms)",
			"check": "Number"
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Pauses the script for the specified delay (in ms) before continuing",
	"helpUrl": ""
}]);
