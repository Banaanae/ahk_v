import * as Blockly from 'blockly';

export const setup = Blockly.common.createBlockDefinitionsFromJsonArray([
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
      "type": "notrayicon",
      "message0": "#NoTrayIcon",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 300,
      "tooltip": "Stops the scripts icon from showing in the system tray",
      "helpUrl": ""
    },
    {
      "type": "persistent",
      "message0": "Persistent",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 300,
      "tooltip": "Makes the script stay open, even if it has nothing to do",
      "helpUrl": ""
    }
])