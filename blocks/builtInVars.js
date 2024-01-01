import * as Blockly from 'blockly'

export const builtInVars = Blockly.common.createBlockDefinitionsFromJsonArray([
    // TODO: A_(...) dropdown for each category
    {
        "type": "a_setbuiltin",
        "message0": "Set built in variable %1 to %2",
        "args0": [
          {
            "type": "input_value",
            "name": "a_var",
            "check": "BuiltInVar"
          },
          {
            "type": "input_value",
            "name": "a_to"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Sets a built in variable (A_Example) to the specified value",
        "helpUrl": ""
      },
      {
        "type": "a_special",
        "message0": "Special Character A_ %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [
                ["Space","Space"],
                ["Tab","Tab"]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Contains the selected special character",
        "helpUrl": ""
      },
      {
        "type": "a_property",
        "message0": "Script property A_ %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [
                ["Args","Args"],
                ["WorkingDir","WorkingDir"],
                ["InitialWorkingDir","InitialWorkingDir"],
                ["ScriptDir","ScriptDir"],
                ["ScriptName","ScriptName"],
                ["ScriptFullPath","ScriptFullPath"],
                ["ScriptHwnd","ScriptHwnd"],
                ["LineNumber","LineNumber"],
                ["LineFile","LineFile"],
                ["ThisFunc","ThisFunc"],
                ["AhkVersion","AhkVersion"],
                ["AhkPath","AhkPath"],
                ["IsCompiled","IsCompiled"]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Contains the selected script property",
        "helpUrl": ""
    },
    {
        "type": "a_time",
        "message0": "Date and Time A_ %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [
                ["YYYY","YYYY"],
                ["MM","MM"],
                ["DD","DD"],
                ["MMMM","MMMM"],
                ["MMM","MMM"],
                ["DDDD","DDDD"],
                ["DDD","DDD"],
                ["WDay","WDay"],
                ["YDay","YDay"],
                ["YWeek","YWeek"],
                ["Hour","Hour"],
                ["Min","Min"],
                ["Sec","Sec"],
                ["MSec","MSec"],
                ["Now","Now"],
                ["NowUTC","NowUTC"],
                ["TickCount","TickCount"]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Contains the selected date or time",
        "helpUrl": ""
    },
    {
        "type": "a_settings",
        "message0": "Script setting A_ %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [
                ["IsSuspended","IsSuspended"],
                ["IsPaused","IsPaused"],
                ["IsCritical","IsCritical"],
                ["ListLines","ListLines"],
                ["TitleMatchMode","TitleMatchMode"],
                ["TitleMatchModeSpeed","TitleMatchModeSpeed"],
                ["DetectHiddenWindows","DetectHiddenWindows"],
                ["DetectHiddenText","DetectHiddenText"],
                ["FileEncoding","FileEncoding"],
                ["SendMode","SendMode"],
                ["SendLevel","SendLevel"],
                ["StoreCapsLockMode","StoreCapsLockMode"],
                ["KeyDelay","KeyDelay"],
                ["KeyDuration","KeyDuration"],
                ["KeyDelayPlay","KeyDelayPlay"],
                ["KeyDurationPlay","KeyDurationPlay"],
                ["WinDelay","WinDelay"],
                ["ControlDelay","ControlDelay"],
                ["MenuMaskKey","MenuMaskKey"],
                ["MouseDelay","MouseDelay"],
                ["MouseDelayPlay","MouseDelayPlay"],
                ["DefaultMouseSpeed","DefaultMouseSpeed"],
                ["CoordModeToolTip","CoordModeToolTip"],
                ["CoordModePixel","CoordModePixel"],
                ["CoordModeMouse","CoordModeMouse"],
                ["CoordModeCaret","CoordModeCaret"],
                ["CoordModeMenu","CoordModeMenu"],
                ["RegView","RegView"],
                ["TrayMenu","TrayMenu"],
                ["AllowMainWindow","AllowMainWindow"],
                ["IconHidden","IconHidden"],
                ["IconTip","IconTip"],
                ["IconFile","IconFile"],
                ["IconNumber","IconNumber"]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Contains the selected script setting",
        "helpUrl": ""
    },
    {
        "type": "a_idle",
        "message0": "User Idle Time A_ %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [
                ["TimeIdle","TimeIdle"],
                ["TimeIdlePhysical","TimeIdlePhysical"],
                ["TimeIdleKeyboard","TimeIdleKeyboard"],
                ["TimeIdleMouse","TimeIdleMouse"]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Contains the selected idle length",
        "helpUrl": ""
    },
    {
        "type": "a_hotkey",
        "message0": "Hotkey A_ %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [
                ["ThisHotkey","ThisHotkey"],
                ["PriorHotkey","PriorHotkey"],
                ["PriorKey","PriorKey"],
                ["TimeSinceThisHotkey","TimeSinceThisHotkey"],
                ["TimeSincePriorHotkey","TimeSincePriorHotkey"],
                ["EndChar","EndChar"],
                ["MaxHotkeysPerInterval","MaxHotkeysPerInterval"],
                ["HotkeyInterval","HotkeyInterval"],
                ["HotkeyModifierTimeout","HotkeyModifierTimeout"]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Contains the selected hotkey information",
        "helpUrl": ""
    },
    {
        "type": "a_os",
        "message0": "System and User A_ %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [
                ["ComSpec","ComSpec"],
                ["Temp","Temp"],
                ["OSVersion","OSVersion"],
                ["Is64bitOS","Is64bitOS"],
                ["PtrSize","PtrSize"],
                ["Language","Language"],
                ["ComputerName","ComputerName"],
                ["UserName","UserName"],
                ["WinDir","WinDir"],
                ["ProgramFiles","ProgramFiles"],
                ["AppData","AppData"],
                ["AppDataCommon","AppDataCommon"],
                ["Desktop","Desktop"],
                ["DesktopCommon","DesktopCommon"],
                ["StartMenu","StartMenu"],
                ["StartMenuCommon","StartMenuCommon"],
                ["Programs","Programs"],
                ["ProgramsCommon","ProgramsCommon"],
                ["Startup","Startup"],
                ["StartupCommon","StartupCommon"],
                ["MyDocuments","MyDocuments"],
                ["IsAdmin","IsAdmin"],
                ["ScreenWidth","ScreenWidth"],
                ["ScreenHeight","ScreenHeight"],
                ["ScreenDPI","ScreenDPI"]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Contains the selected OS or user information",
        "helpUrl": ""
    },
    {
        "type": "a_misc",
        "message0": "Misc A_ %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [
                ["Clipboard","Clipboard"],
                ["Cursor","Cursor"],
                ["EventInfo","EventInfo"],
                ["EventInfo","EventInfo"],
                ["LastError","LastError"]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Misc variables",
        "helpUrl": ""
    },
    {
        "type": "a_loop",
        "message0": "Loop A_ %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "VALUE",
            "options": [
                ["Index","Index"],
                ["LoopFileName","LoopFileName"],
                ["LoopRegName","LoopRegName"],
                ["LoopReadLine","LoopReadLine"],
                ["LoopField","LoopField"]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Contains the selected loop information",
        "helpUrl": ""
    }
])