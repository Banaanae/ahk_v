import * as Blockly from 'blockly';
//TODO: Make most blocks inline
// "inputsInline": true,
// TODO: Dynamic tooltips
export const basicBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([
	{
	"type": "singleinstance",
	"message0": "#SingleInstance %1",
	"args0": [
		{
			"type": "field_dropdown",
			"name": "singleinstance_type",
			"options": [
				[
					"Force",
					"singleinstance_type_force"
		  		],
		  		[
					"Ignore",
					"singleinstance_type_ignore"
		  		],
		  		[
					"Prompt",
					"singleinstance_type_prompt"
		  		],
		  		[
					"off",
					"singleinstance_type_off"
		  		]
			]
		}
	],
	"previousStatement": null,
	"nextStatement": null,
	"colour": 300,
	"tooltip": "Allows you to control what happens when you run the script while another instance is running",
	"helpUrl": ""
},
{
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
	"type": "msgbox",
	"message0": "Message box with Title %1 Body %2 Buttons %3 Icon %4 Default buttons %5 Modality %6 %7 Help Button %8 Align text right %9 Right to Left reading",
	"args0": [
		{
			"type": "input_value",
			"name": "msgbox_title"
	  	},
	  	{
			"type": "input_value",
			"name": "msgbox_body"
		},
		{
			"type": "field_dropdown",
			"name": "msgbox_buttons_type",
			"options": [
				[
					"OK",
					"msgbox_buttons_type_ok"
		 		],
				[
			"OK, Cancel",
			"msgbox_buttons_type_okcancel"
		],
		[
			"Abort, Retry, Ignore",
			"msgbox_buttons_type_abortretryignore"
		],
		[
			"Yes, No, Cancel",
			"msgbox_buttons_type_yesnocancel"
		],
		[
			"Yes, No",
			"msgbox_buttons_type_yesno"
		],
		[
			"Retry, Cancel",
			"msgbox_buttons_type_retrycancel"
		],
		[
			"Cancel, Try Again, Continue",
			"msgbox_buttons_type_canceltryagaincontinue"
		]
		]
	},
	{
		"type": "field_dropdown",
		"name": "msgbox_icon_type",
		"options": [
	[
			"X Icon", // Different space to get around listing icon after
			"msgbox_icon_type_x"
		],
		[
			"? Icon",
			"msgbox_icon_type_?"
		],
		[
			"! Icon",
			"msgbox_icon_type_!"
		],
		[
			"i Icon",
			"msgbox_icon_type_i"
		]
		]
	},
	{
		"type": "field_dropdown",
		"name": "msgbox_default_type",
		"options": [
		[
			"First",
			"msgbox_default_type_"
		],
		[
			"Second",
			"msgbox_default_type_Default2"
		],
		[
			"Third",
			"msgbox_default_type_Default3"
		],
		[
			"Fourth",
			"msgbox_default_type_Default4"
		]
		]
	},
	{
		"type": "field_dropdown",
		"name": "msgbox_modal_type",
		"options": [
		[
			"Normal",
			"msgbox_modal_type_"
		],
		[
			"System",
			"msgbox_modal_type_4096"
		],
		[
			"Task",
			"msgbox_modal_type_8192"
		],
		[
			"AOT",
			"msgbox_modal_type_262144"
		]
		]
	},
	{
		"type": "field_checkbox",
		"name": "msgbox_other_16384",
		"checked": false
	},
	{
		"type": "field_checkbox",
		"name": "msgbox_other_524288",
		"checked": false
	},
	{
		"type": "field_checkbox",
		"name": "msgbox_other_1048576",
		"checked": false
	},
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Creates a message box with the listed options",
	"helpUrl": ""
},
{
	"type": "send",
	"message0": "Send %1",
	"args0": [
		{
			"type": "input_value",
			"name": "send_keys"
		}
	],
	"inputsInline": true,
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
			"type": "input_value",
			"name": "sleep_delay",
			"check": "Number"
		}
	],
	"inputsInline": true,
	"previousStatement": null,
	"nextStatement": null,
	"colour": 230,
	"tooltip": "Pauses the script for the specified delay (in ms) before continuing",
	"helpUrl": ""
}]);
