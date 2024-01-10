import * as blockly from 'blockly';

export const text = blockly.common.createBlockDefinitionsFromJsonArray([
    {
        "type": "text_trim_cust",
        "message0": "trim %1 from %2 of %3",
        "args0": [
          {
            "type": "input_value",
            "name": "TRIM"
          },
          {
            "type": "field_dropdown",
            "name": "MODE",
            "options": [
              [
                "Left Side",
                "LEFT"
              ],
              [
                "Right Side",
                "RIGHT"
              ],
              [
                "Both Sides",
                "BOTH"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "TEXT"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 160,
        "tooltip": "Removes the specified text from the selected side/s",
        "helpUrl": ""
    },
])