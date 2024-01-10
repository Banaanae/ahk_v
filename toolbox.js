//https://gist.githubusercontent.com/alschmiedt/2085af32381db89d1f1ca80d5883c0d5/raw/20719c233061ec612af9efb29df6debc658763a9/gistfile1.txt
import '@blockly/toolbox-search';

export const toolbox = {
	"kind": "categoryToolbox",
	"contents": [
        {
            "kind": "category",
            "name": "Setup",
            "contents": [
                {
					"kind": "block",
					"type": "singleinstance"
				},
            ]
        },
        {
			"kind": "category",
			"name": "Script",
			"contents": [
				{
					"kind": "block",
					"type": "sleep"
				},
                {
                    "kind": "block",
                    "type": "msgbox_simple"
                },
                {
                    "kind": "block",
                    "type": "msgbox"
                },
			],
		},
        {
            "kind": "category",
            "name": "Mouse and Keyboard",
            "contents": [
                {
					"kind": "block",
					"type": "send"
				},
                {
                    "kind": "block",
                    "type": "sendmode"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Hotkeys",
            "contents": [
                {
					"kind": "block",
					"type": "hotkey"
				},
            ]
        },
		{
            "kind": "category",
            "name": "Text",
            "contents": [
                {
					"kind": "block",
					"type": "text"
				},
                {
                    "kind": "block",
                    "type": "text_multiline"
                },
                {
                    "kind": "block",
                    "type": "text_join"
                },
                {
                    "kind": "block",
                    "type": "text_prompt_ext"
                },
                {
                    "kind": "block",
                    "type": "text_append"
                },
                {
                    "kind": "block",
                    "type": "text_length"
                },
                {
                    "kind": "block",
                    "type": "text_isEmpty"
                },
                {
                    "kind": "block",
                    "type": "text_indexOf"
                },
                {
                    "kind": "block",
                    "type": "text_charAt"
                },
                {
                    "kind": "block",
                    "type": "text_getSubstring"
                },
                {
                    "kind": "block",
                    "type": "text_changeCase"
                },
                {
                    "kind": "block",
                    "type": "text_trim"
                },
                {
                    "kind": "block",
                    "type": "text_trim_cust"
                },
                {
                    "kind": "block",
                    "type": "text_count"
                },
                {
                    "kind": "block",
                    "type": "text_replace"
                },
				{
                    "kind": "block",
                    "type": "text_reverse"
                }
            ],
        },
        {
            "kind": "category",
            "name": "Lists",
            "contents": [
                {
                    "kind": "block",
                    "type": "lists_create_with"
                },
                {
                    "kind": "block",
                    "type": "lists_repeat"
                },
                {
                    "kind": "block",
                    "type": "lists_length"
                },
                {
                    "kind": "block",
                    "type": "lists_isEmpty"
                },
                {
                    "kind": "block",
                    "type": "lists_indexOf"
                },
                {
                    "kind": "block",
                    "type": "lists_getIndex"
                },
                {
                    "kind": "block",
                    "type": "lists_setIndex"
                },
                {
                    "kind": "block",
                    "type": "lists_getSublist"
                },
                {
                    "kind": "block",
                    "type": "lists_split"
                },
                {
                    "kind": "block",
                    "type": "lists_sort"
                },
				{
                    "kind": "block",
                    "type": "lists_reverse"
                }
            ],
        },
		{
			"kind": "category",
			"name": "Math",
            "contents": [
                {
					"kind": "block",
					"type": "math_number"
				},
				{
                    "kind": "block",
                    "type": "math_arithmetic"
                },
                {
                    "kind": "block",
                    "type": "math_single"
                },
                {
                    "kind": "block",
                    "type": "math_trig"
                },
                {
                    "kind": "block",
                    "type": "math_constant"
                },
                {
                    "kind": "block",
                    "type": "math_number_property"
                },
                {
                    "kind": "block",
                    "type": "math_round"
                },
                {
                    "kind": "block",
                    "type": "math_round_cust"
                },
                {
                    "kind": "block",
                    "type": "math_on_list"
                },
                {
                    "kind": "block",
                    "type": "math_modulo"
                },
                {
                    "kind": "block",
                    "type": "math_constrain"
                },
                {
                    "kind": "block",
                    "type": "math_random_int"
                },
				{
                    "kind": "block",
                    "type": "math_random_float"
                },
                {
                    "kind": "block",
                    "type": "math_atan2"
                }
			]
		},
		{
            "kind": "category",
            "name": "Logic and Loops",
            "contents": [
                {
					"kind": "block",
					"type": "controls_if"
				},
				{
                    "kind": "block",
                    "type": "logic_compare"
                },
                {
                    "kind": "block",
                    "type": "logic_operation"
                },
                {
                    "kind": "block",
                    "type": "logic_negate"
                },
                {
                    "kind": "block",
                    "type": "logic_boolean"
                },
                {
                    "kind": "block",
                    "type": "logic_ternary"
                },
                {
                    "kind": "block",
                    "type": "controls_repeat_ext"
                },
                {
                    "kind": "block",
                    "type": "controls_whileUntil"
                },
                {
                    "kind": "block",
                    "type": "controls_for"
                },
                {
                    "kind": "block",
                    "type": "controls_forEach"
                },
                {
                    "kind": "block",
                    "type": "controls_flow_statements"
                }
            ],
        },
		{
			"kind": "category",
			"name": "Gui",
			"contents": [
				{
					"kind": "block",
					"type": "gui_header"
				},
                {
                    "kind": "block",
                    "type": "gui_add_text"
                },
                {
                    "kind": "block",
                    "type": "gui_add_edit"
                },
                {
                    "kind": "block",
                    "type": "gui_add_picture"
                },
                {
                    "kind": "block",
                    "type": "gui_add_button"
                },
                {
                    "kind": "block",
                    "type": "gui_add_checkbox"
                },
                {
                    "kind": "block",
                    "type": "gui_add_radio"
                },
                {
                    "kind": "block",
                    "type": "gui_add_ddl"
                },
                {
                    "kind": "block",
                    "type": "gui_add_combobox"
                },
                {
                    "kind": "block",
                    "type": "gui_add_listbox"
                },
                {
                    "kind": "block",
                    "type": "gui_add_datetime"
                },
				{
					"kind": "block",
					"type": "gui_show"
				}
			]
		},
        {
			"kind": "category",
			"name": "Colour",
			"contents": [
				{
                    "kind": "block",
                    "type": "colour_picker"
                },
                {
                    "kind": "block",
                    "type": "colour_random"
                },
                {
                    "kind": "block",
                    "type": "colour_rgb"
                },
                {
                    "kind": "block",
                    "type": "colour_blend"
                }
			]
		},
        {
            "kind": "sep"
        },
        {
            "kind": "category",
            "name": "Variables",
            "categorystyle": "variable_category",
            "custom": "VARIABLE"
        },
        {
            "kind": "category",
            "name": "Built-In Variables",
            "contents": [
                {
                    "kind": "block",
                    "type": "a_setbuiltin"
                },
                {
                    "kind": "block",
                    "type": "a_special"
                },
                {
                    "kind": "block",
                    "type": "a_property"
                },
                {
                    "kind": "block",
                    "type": "a_time"
                },
                {
                    "kind": "block",
                    "type": "a_settings"
                },
                {
                    "kind": "block",
                    "type": "a_idle"
                },
                {
                    "kind": "block",
                    "type": "a_hotkey"
                },
                {
                    "kind": "block",
                    "type": "a_os"
                },
                {
                    "kind": "block",
                    "type": "a_misc"
                },
                {
                    "kind": "block",
                    "type": "a_loop"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Functions",
            "categorystyle": "procedure_category",
            "custom": "PROCEDURE"
        },
		{
			"kind": "sep"
		},
        {
            'kind': 'search',
            'name': 'Search',
            'contents': [],
        },
		{
			"kind": "category",
			"name": "Old",
            "hidden": "true",
			"contents": [
                {
                    "kind": "label",
                    "text": "Old blocks for backwards compatability (Currently None)"
                }
			]
		}
	]
}