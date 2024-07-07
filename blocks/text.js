import * as Blockly from 'blockly';
//import { FieldMultilineInput } from '@blockly/field-multilineinput';


//FieldMultilineInput.register(Blockly);
//var multilineInput = new Blockly.FieldMultilineInput('default text');
//var block = workspace.newBlock('text_print');
//block.setFieldValue(multilineInput, 'TEXT');
export const text = Blockly.common.createBlockDefinitionsFromJsonArray([
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
    {
      "type": "text_regexmatch",
      "message0": "Match %1 with RegEx / %2 / %3 and save results to %4",
      "args0": [
        {
          "type": "input_value",
          "name": "source_string",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "regex_body",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "regex_options",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "out_var",
          "check": "String"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 160,
      "tooltip": "Returns the position of the first found match using the specified RegEx, and saves specific information on matches to the specified variable",
      "helpUrl": "",
    }
	/*{
	"type": "text_multilineinput",
	"message0": "multilineinput: %1",
	"args0": [
		{
			"type": "field_multilineinput",
			"name": "FIELDNAME",
			"text": "some text \n with newlines"
		}
	],
	"inputsInline": true,
	"output": null,
	"colour": 160,
	"tooltip": "Multi-line text input",
	"helpUrl": ""
	},*/
	
])