import * as blockly from 'blockly';

export const hotkeys = blockly.common.createBlockDefinitionsFromJsonArray([
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
])