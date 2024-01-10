import * as blockly from 'blockly';

export const kbAndMouse = blockly.common.createBlockDefinitionsFromJsonArray([
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
        "type": "sendmode",
        "message0": "Set Send Mode to %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "sendmode_type",
            "options": [
              [
                "Event",
                "Event"
              ],
              [
                "Input",
                "Input"
              ],
              [
                "InputThenPlay",
                "InputThenPlay"
              ],
              [
                "Play",
                "Play"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Changes how key and mouse inputs are sent",
        "helpUrl": ""
    }
])