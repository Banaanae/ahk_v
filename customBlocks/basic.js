Blockly.defineBlocksWithJsonArray([
    {
		"type": "hotkey",
		"message0": "Hotkey %1",
		"args0": [
		{
			"type": "input_value",
			"name": "hotkey_keys",
			"check": "String"
		}
		],
		"nextStatement": null,
		"colour": 180,
		"tooltip": "Listens for keys stated on the side to be pressed then running below",
		"helpUrl": ""
	},
    {
		"type": "send",
		"message0": "Send %1",
		"args0": [
		  {
			"type": "input_value",
			"name": "Key",
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
			"type": "input_value",
			"name": "NAME"
		}
		],
		"previousStatement": null,
		"nextStatement": null,
		"colour": 230,
		"tooltip": "Sleeps for the specified time (in milliseconds)",
		"helpUrl": ""
	}
])