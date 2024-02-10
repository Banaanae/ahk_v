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
                {
                    "kind": "block",
                    "type": "notrayicon"
                },
                {
                    "kind": "block",
                    "type": "persistent"
                },
                {
                    "kind": "block",
                    "type": "sendmode"
                },
                {
                    "kind": "block",
                    "type": "setdefaultmousespeed"
                }
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
                },
                {
                    "kind": "block",
                    "type": "setdefaultmousespeed"
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
                {
                    "kind": "block",
                    "type": "hotkey_edit"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Window",
            "contents": [
                {
                    "kind": "block",
                    "type": "window_activate"
                },
                {
                    "kind": "block",
                    "type": "window_activatebottom"
                },
                {
                    "kind": "block",
                    "type": "window_active"
                },
                {
                    "kind": "block",
                    "type": "window_close"
                },
                {
                    "kind": "block",
                    "type": "window_exist"
                },
                {
                    "kind": "block",
                    "type": "window_getclass"
                },
                {
                    "kind": "block",
                    "type": "window_getclientpos"
                },
                {
                    "kind": "block",
                    "type": "window_getcontrols"
                },
                {
                    "kind": "block",
                    "type": "window_getcontrolshwnd"
                },
                {
                    "kind": "block",
                    "type": "window_getcount"
                },
                {
                    "kind": "block",
                    "type": "window_getid"
                },
                {
                    "kind": "block",
                    "type": "window_getidlast"
                },
                {
                    "kind": "block",
                    "type": "window_getlist"
                },
                {
                    "kind": "block",
                    "type": "window_getminmax"
                },
                {
                    "kind": "block",
                    "type": "window_getpid"
                },
                {
                    "kind": "block",
                    "type": "window_getpos"
                },
                {
                    "kind": "block",
                    "type": "window_getprocessname"
                },
                {
                    "kind": "block",
                    "type": "window_getprocesspath"
                },
                {
                    "kind": "block",
                    "type": "window_getstyle"
                },
                {
                    "kind": "block",
                    "type": "window_getexstyle"
                },
                {
                    "kind": "block",
                    "type": "window_gettext"
                },
                {
                    "kind": "block",
                    "type": "window_gettitle"
                },
                {
                    "kind": "block",
                    "type": "window_gettranscolour"
                },
                {
                    "kind": "block",
                    "type": "window_gettransparent"
                },
                {
                    "kind": "block",
                    "type": "window_hide"
                },
                {
                    "kind": "block",
                    "type": "window_kill"
                },
                {
                    "kind": "block",
                    "type": "window_maximize"
                },
                {
                    "kind": "block",
                    "type": "window_minimize"
                },
                {
                    "kind": "block",
                    "type": "window_minimizeall"
                },
                {
                    "kind": "block",
                    "type": "window_minimizeallundo"
                },
                {
                    "kind": "block",
                    "type": "window_move"
                },
                {
                    "kind": "block",
                    "type": "window_movebottom"
                },
                {
                    "kind": "block",
                    "type": "window_movetop"
                },
                {
                    "kind": "block",
                    "type": "window_redraw"
                },
                {
                    "kind": "block",
                    "type": "window_restore"
                },
                {
                    "kind": "block",
                    "type": "window_setalwaysontop"
                },
                {
                    "kind": "block",
                    "type": "window_setenabled"
                },
                {
                    "kind": "block",
                    "type": "window_setregion"
                },
                {
                    "kind": "block",
                    "type": "window_setstyle"
                },
                {
                    "kind": "block",
                    "type": "window_setexstyle"
                },
                {
                    "kind": "block",
                    "type": "window_settitle"
                },
                {
                    "kind": "block",
                    "type": "window_settranscolour"
                },
                {
                    "kind": "block",
                    "type": "window_settransparent"
                },
                {
                    "kind": "block",
                    "type": "window_show"
                }
            ]
        },
        {
            "kind": "category",
            "name": "File System",
            "hidden": 'true', // Remove when blocks are made
            "contents": []
        },
        {
            "kind": "category",
            "name": "Dll",
            "hidden": 'true', // Remove when blocks are made
            "contents": []
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
            "kind": "sep"
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
                    "type": "math_constant_noinf"
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