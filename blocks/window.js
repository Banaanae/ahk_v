import * as Blockly from 'blockly';

// TODO: WinActive vs WinExist
// TODO: Tooltips <- Move much of message0
// TODO: WinMove
// TODO: WinSet(...)
// TODO: WinWait(...)
export const win = Blockly.common.createBlockDefinitionsFromJsonArray([
    {
    "type": "window_activate",
    "message0": "Activate window with the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "Activates the specified window.",
    "helpUrl": ""
  },
  {
    "type": "window_activatebottom",
    "message0": "Activate bottommost window with the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_active",
    "message0": "Get the unique ID (HWND) of the window with the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_close",
    "message0": "Close the window with the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_exist",
    "message0": "Get the unique id of the window with the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getclass",
    "message0": "Get the class name of the window with the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getclientpos",
    "message0": "Get the client position of a window and save the x position to %1 and the y to %2 the width to %3 and the height to %4 the window match the title %5 and text %6 but not with this title %7 or this text %8",
    "args0": [
      {
        "type": "input_value",
        "name": "x",
        "check": "Variable"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Variable"
      },
      {
        "type": "input_value",
        "name": "w",
        "check": "Variable"
      },
      {
        "type": "input_value",
        "name": "h",
        "check": "Variable"
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": false, // TODO: External because long
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "[PLACEHOLDER] Inputs 1-4 are variables",
    "helpUrl": ""
  },
  {
    "type": "window_getcontrols",
    "message0": "Get all the control names of the window with the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getcontrolshwnd",
    "message0": "Get all the control HWND of the window with the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getcount",
    "message0": "Count all of the windows that match the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getid",
    "message0": "Get the id of the window that match the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getidlast",
    "message0": "Get the id bottommost of the window that match the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getlist",
    "message0": "Get a list of all window ids that match the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getminmax",
    "message0": "Get the min/max state of the window that match the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getpid",
    "message0": "Get the process id of the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getpos",
    "message0": "Get the position of a window and save the x position to %1 and the y to %2 the width to %3 and the height to %4 the window match the title %5 and text %6 but not with this title %7 or this text %8",
    "args0": [
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "w",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "h",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": false, // TODO: External because long
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getprocessname",
    "message0": "Get the process name of the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getprocesspath",
    "message0": "Get the process path of the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getstyle",
    "message0": "Get the style of the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_getexstyle",
    "message0": "Get the extended style of the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_gettext",
    "message0": "Get the text of the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_gettitle",
    "message0": "Get the title of the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_gettranscolour",
    "message0": "Get the transparent colour of the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_gettransparent",
    "message0": "Get the opacity of the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_hide",
    "message0": "Hides the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_kill",
    "message0": "Force close the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_maximize",
    "message0": "Maximize the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_minimize",
    "message0": "Minimize the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_minimizeall",
    "message0": "MinimizeAll",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_minimizeallundo",
    "message0": "MinimizeAllUndo",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_move",
    "message0": "Move a window to x position to %1 and the y to %2 set the width to %3 and the height to %4 the window match the title %5 and text %6 but not with this title %7 or this text %8",
    "args0": [
      {
        "type": "input_value",
        "name": "x",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "y",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "w",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "h",
        "check": "Number"
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": false, // TODO: External because long
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_movebottom",
    "message0": "Move the window to the bottom that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_movetop",
    "message0": "Move the window to the top that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_redraw",
    "message0": "Redraw the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_restore",
    "message0": "Set the opposite min/max state to the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_setalwaysontop",
    "message0": "Set the always on top to the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_setenabled",
    "message0": "Set the enabled status %1 to the window that matches the title %2 and text %3 but not with this title %4 or this text %5",
    "args0": [
      {
        "type": "input_value",
        "name": "setting",
        "check": "Number" // TODO: And logic
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_setregion",
    "message0": "Set region to %1 to the window that matches the title %2 and text %3 but not with this title %4 or this text %5",
    "args0": [
      {
        "type": "input_value",
        "name": "setting",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_setstyle",
    "message0": "Set window style to %1 to the window that matches the title %2 and text %3 but not with this title %4 or this text %5",
    "args0": [
      {
        "type": "input_value",
        "name": "setting",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_setexstyle",
    "message0": "Set the window extended style to %1 to the window that matches the title %2 and text %3 but not with this title %4 or this text %5",
    "args0": [
      {
        "type": "input_value",
        "name": "setting",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_settitle",
    "message0": "Sets the title to %1 to the window that matches the title %2 and text %3 but not with this title %4 or this text %5",
    "args0": [
      {
        "type": "input_value",
        "name": "setting",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_settranscolour",
    "message0": "Set transparent colour to %1 to the window that matches the title %2 and text %3 but not with this title %4 or this text %5",
    "args0": [
      {
        "type": "input_value",
        "name": "setting",
        "check": "Colour" // TODO: And number and string
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_settransparent",
    "message0": "Set the window opacity to %1 to the window that matches the title %2 and text %3 but not with this title %4 or this text %5",
    "args0": [
      {
        "type": "input_value",
        "name": "setting",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_show",
    "message0": "Show the window that matches the title %1 and text %2 but not with this title %3 or this text %4",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_wait",
    "message0": "Wait for a window that matches the title %1 and text %2 but not with this title %3 or this text %4 wait for a maximum of %5",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "timeout",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_waitactive",
    "message0": "Wait for an active window that matches the title %1 and text %2 but not with this title %3 or this text %4 wait for a maximum of %5",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "timeout",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_waitnotactive",
    "message0": "Wait for an inactive window that matches the title %1 and text %2 but not with this title %3 or this text %4 wait for a maximum of %5",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "timeout",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "window_waitclose",
    "message0": "Wait until no windows that match the title %1 and text %2 but not with this title %3 or this text %4 wait for a maximum of %5",
    "args0": [
      {
        "type": "input_value",
        "name": "title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_title",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "ex_text",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "timeout",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 55,
    "tooltip": "",
    "helpUrl": ""
  },
])