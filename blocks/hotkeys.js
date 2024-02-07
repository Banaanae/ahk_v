import * as Blockly from 'blockly';

export const hotkeys = Blockly.common.createBlockDefinitionsFromJsonArray([
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
        "type": "hotkey_edit",
        "message0": "For hotkey %1 set active to %2 %3",
        "args0": [
          {
            "type": "field_input",
            "name": "hotkey_edit_key",
            "text": "key"
          },
          {
            "type": "field_dropdown",
            "name": "hotkey_edit_action",
            "options": [
              [
                "On",
                "on"
              ],
              [
                "Off",
                "off"
              ],
              [
                "Toggle",
                "toggle"
              ],
              [
                "AltTab...",
                "AltTab"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "hotkey_edit_alttab", // TODO: Only show when ^ is alttab
            "options": [
              [
                "AltTab",
                "AltTab"
              ],
              [
                "ShiftAltTab",
                "ShiftAltTab"
              ],
              [
                "AltTabMenu",
                "AltTabMenu"
              ],
              [
                "AltTabAndMenu",
                "AltTabAndMenu"
              ],
              [
                "AltTabMenuDismiss",
                "AltTabMenuDismiss"
              ]
            ]
          },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 180,
        "tooltip": "",
        "helpUrl": ""
    }
])