import * as blockly from 'blockly';

export const setup = blockly.common.createBlockDefinitionsFromJsonArray([
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
])