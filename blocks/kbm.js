import * as Blockly from 'blockly';

export const kbAndMouse = Blockly.common.createBlockDefinitionsFromJsonArray([
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
        "colour": 90,
        "tooltip": "Changes how key and mouse inputs are sent",
        "helpUrl": ""
    },
    {
      "type": "setdefaultmousespeed",
      "message0": "SetDefaultMouseSpeed %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INPUT",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 90,
      "tooltip": "Sets the default mouse movement speed (between 0-100)",
      "helpUrl": "https://www.autohotkey.com/docs/v2/lib/SetDefaultMouseSpeed.htm"
    },
    {
      "type": "click",
      "message0": "Send %1 mouse button %2 at X: %3 Y: %4 ​ %5 times %6 Relative",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "button",
          "options": [
            [
              "left",
              "left"
            ],
            [
              "right",
              "right"
            ],
            [
              "middle",
              "middle"
            ],
            [
              "4th",
              "x1"
            ],
            [
              "5th",
              "x2"
            ]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            [
              "click",
              "click"
            ],
            [
              "down",
              "down"
            ],
            [
              "up",
              "up"
            ]
          ]
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
          "name": "times"
        },
        {
          "type": "field_checkbox",
          "name": "rel",
          "checked": "FALSE"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 90,
      "tooltip": "Click at the specified coordinates using the set mouse button",
      "helpUrl": ""
    }

])