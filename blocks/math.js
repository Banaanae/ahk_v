import * as Blockly from 'blockly';

export const mathBlocks = Blockly.common.createBlockDefinitionsFromJsonArray([
    {
        "type": "math_round_cust",
        "message0": "Round to %1 decimal places %2",
        "args0": [
          {
            "type": "field_number",
            "name": "math_round_cust_places",
            "value": 0
          },
          {
            "type": "input_value",
            "name": "math_round_cust_number",
            "check": "Number"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Rounds a number to N decimal places",
        "helpUrl": ""
      }
])