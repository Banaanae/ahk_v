import * as blockly from 'blockly';

export const script = blockly.common.createBlockDefinitionsFromJsonArray([
    {
        "type": "sleep",
        "message0": "Sleep %1",
        "args0": [
            {
                "type": "input_value",
                "name": "sleep_delay",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Pauses the script for the specified delay (in ms) before continuing",
        "helpUrl": ""
    },
    {
        "type": "msgbox_simple",
        "message0": "Message box with Body %1",
        "args0": [
              {
                "type": "input_value",
                "name": "msgbox_body"
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Creates a message box with the specified text\nBody can be ommited for default\n\"Press OK to continue.\"",
        "helpUrl": ""
    },
    {
        "type": "msgbox",
        "message0": "Message box with Title %1 Body %2 Buttons %3 Icon %4 Default buttons %5 Modality %6 %7 Help Button %8 Align text right %9 Right to Left reading",
        "args0": [
            {
                "type": "input_value",
                "name": "msgbox_title"
              },
              {
                "type": "input_value",
                "name": "msgbox_body"
            },
            {
                "type": "field_dropdown",
                "name": "msgbox_buttons_type",
                "options": [
                    [
                        "OK",
                        "msgbox_buttons_type_ok"
                     ],
                    [
                "OK, Cancel",
                "msgbox_buttons_type_okcancel"
            ],
            [
                "Abort, Retry, Ignore",
                "msgbox_buttons_type_abortretryignore"
            ],
            [
                "Yes, No, Cancel",
                "msgbox_buttons_type_yesnocancel"
            ],
            [
                "Yes, No",
                "msgbox_buttons_type_yesno"
            ],
            [
                "Retry, Cancel",
                "msgbox_buttons_type_retrycancel"
            ],
            [
                "Cancel, Try Again, Continue",
                "msgbox_buttons_type_canceltryagaincontinue"
            ]
            ]
        },
        {
            "type": "field_dropdown",
            "name": "msgbox_icon_type",
            "options": [
        [
                "X Icon", // Different space to get around listing icon after
                "msgbox_icon_type_x"
            ],
            [
                "? Icon",
                "msgbox_icon_type_?"
            ],
            [
                "! Icon",
                "msgbox_icon_type_!"
            ],
            [
                "i Icon",
                "msgbox_icon_type_i"
            ]
            ]
        },
        {
            "type": "field_dropdown",
            "name": "msgbox_default_type",
            "options": [
            [
                "First",
                "msgbox_default_type_"
            ],
            [
                "Second",
                "msgbox_default_type_Default2"
            ],
            [
                "Third",
                "msgbox_default_type_Default3"
            ],
            [
                "Fourth",
                "msgbox_default_type_Default4"
            ]
            ]
        },
        {
            "type": "field_dropdown",
            "name": "msgbox_modal_type",
            "options": [
            [
                "Normal",
                "msgbox_modal_type_"
            ],
            [
                "System",
                "msgbox_modal_type_4096"
            ],
            [
                "Task",
                "msgbox_modal_type_8192"
            ],
            [
                "AOT",
                "msgbox_modal_type_262144"
            ]
            ]
        },
        {
            "type": "field_checkbox",
            "name": "msgbox_other_16384",
            "checked": false
        },
        {
            "type": "field_checkbox",
            "name": "msgbox_other_524288",
            "checked": false
        },
        {
            "type": "field_checkbox",
            "name": "msgbox_other_1048576",
            "checked": false
        },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Creates a message box with the listed options",
        "helpUrl": ""
    },
]) 