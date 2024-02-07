import {CodeGenerator, Names} from "blockly";

export const Order = {
	ATOMIC: 0,
	FUNCTION_CALL: 2,
	NONE: 99
	// not exactly sure what values are needed
	// TODO: Figure out what are needed and when to use
	// START: 1,
	// HOTKEYS: 5,
	// FUNCS: 10,
	// GUI: 15,
}

export class ahkgen extends CodeGenerator {
    constructor(name) {
        super(name ?? 'AutoHotKey');
        this.isInitialized = false;
    // TODO: Some A_(...) listed here may not be readonly, but don't accept the input I tested with (1)
        this.addReservedWords( // TODO (med-prio): Complete list (classes & func)
            // Keywords
            'true,false,' +
            // Operators
            'is,in,contains,not,and,or,' +
            // Miscs
            // https://autohotkey.com/docs/v2/Concepts.htm#names
            'as,IsSet,super,unset,' + 
            // Declaration Keywords
            'Break,Case,Catch,Continue,Else,Finally,For,Global,Goto,If,Local,Loop,Return,Static,Switch,Throw,Try,Until,' + 
            // Globals (readonly)
            // https://gist.github.com/Banaanae/5dab1d0b5d523c2bae998ff0e18e92a5
            // Special Chars & Script Properties
            'A_Space,A_Tab,A_WorkingDir,A_InitialWorkingDir,A_ScriptDir,A_ScriptFullPath,A_ScriptHwnd,A_LineNumber,A_LineFile,A_ThisFunc,A_AhkVersion,A_AhkPath,A_IsCompiled,' + 
            // Date and Time
            'A_YYYY,A_MM,A_DD,A_MMMM,A_MMM,A_DDDD,A_DDD,A_WDay,A_YDay,A_YWeek,A_Hour,A_Min,A_Sec,A_MSec,A_Now,A_NowUTC,A_TickCount,' + 
            // Script Settings
            'A_IsSuspended,A_IsPaused,A_IsCritical,A_FileEncoding,A_SendMode,A_CoordModeToolTip,A_CoordModePixel,A_CoordModeMouse,A_CoordModeCaret,A_CoordModeMenu,A_RegView,A_TrayMenu,A_IconFile,A_IconNumber,' + 
            // User Idle Time
            'A_TimeIdle,A_TimeIdlePhysical,A_TimeIdleKeyboard,A_TimeIdleMouse,' + 
            // Hotkeys, Hotstrings, and Custom Menu Items
            'A_ThisHotkey,A_PriorHotkey,A_PriorKey,A_TimeSinceThisHotkey,A_TimeSincePriorHotkey,A_EndChar,' + 
            // Operating System and User Info
            'A_ComSpec,A_Temp,A_OSVersion,A_Is64bitOS,A_PtrSize,A_Language,A_ComputerName,A_UserName,A_WinDir,A_ProgramFiles,A_AppData,A_AppDataCommon,A_Desktop,A_DesktopCommon,A_StartMenu,A_StartMenuCommon,A_Programs,A_ProgramsCommon,A_Startup,A_StartupCommon,A_MyDocuments,A_IsAdmin,A_ScreenWidth,A_ScreenHeight,A_ScreenDPI,' + 
            // Misc & Loop
            'A_Cursor,A_LoopFileName,A_LoopRegName,A_LoopReadLine,A_IsCompiled,A_LoopField'
        )
    }
    init(workspace) {
        super.init(workspace)
        this.PASS = this.INDENT + 'pass\n';
        if (!this.nameDB_) {
            this.nameDB_ = new Names(this.RESERVED_WORDS_);
        }
        else {
            this.nameDB_.reset();
        }
        this.nameDB_.setVariableMap(workspace.getVariableMap());
        this.nameDB_.populateVariables(workspace);
        this.nameDB_.populateProcedures(workspace);
        var defvars = [];

        this.definitions_['variables'] = defvars.join('\n');
        this.isInitialized = true;
    }
    
    finish(code) {
        code = "#Requires AutoHotkey v2.0\n" + code // Ensure code gets run using v2
        // Convert the definitions dictionary into a list.
        const definitions = Object.values(this.definitions_);
        // Call Blockly.CodeGenerator's finish.
        super.finish(code)
        this.isInitialized = false;
    
        this.nameDB_.reset();
        return code + '\n\n\n' + definitions.join('\n\n');
    }

    scrub_(block, code, thisOnly) {
        const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
        if (nextBlock && !thisOnly) {
            return code + '\n' + this.blockToCode(nextBlock);
        }
        return code;
    };

    /**
     * Checks if `block.type` differs from what the generated
     * code should be, and changes it if needed. Also used
     * to add proper capitalisation to some blocks.
     * @param {string} name The name _(usually `block.type`)_ to change
     * @returns A valid AHK function
     */
    getRealName(name) { // TODO: Capitalisation in ../blocks
        let realName;
        switch(name) {
            case "Msgbox_simple": realName = "MsgBox"; break;
            default: realName = name
        }
        return realName
    }
}