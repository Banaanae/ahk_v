import * as Blockly from 'blockly';

export const math = Blockly.common.createBlockDefinitionsFromJsonArray([
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
      },
      { // https://github.com/google/blockly/blob/develop/blocks/math.ts#L138
        'type': 'math_constant_noinf',
        'message0': '%1',
        'args0': [
          {
            'type': 'field_dropdown',
            'name': 'CONSTANT',
            'options': [
              ['\u03c0', 'PI'],
              ['e', 'E'],
              ['\u03c6', 'GOLDEN_RATIO'],
              ['sqrt(2)', 'SQRT2'],
              ['sqrt(\u00bd)', 'SQRT1_2'],
            ],
          },
        ],
        'output': 'Number',
        'style': 'math_blocks',
        'tooltip': 'Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), or sqrt(½) (0.707…)',
        'helpUrl': 'https://en.wikipedia.org/wiki/Mathematical_constant',
      },
])