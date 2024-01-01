import * as Blockly from 'blockly';

export const ahkGen = new Blockly.Generator('AutoHotkey');

const Order = {
	ATOMIC: 0,
	NONE: 99
	// not exactly sure what values are needed
	// TODO: Figure out what are needed and when to use
	// START: 1,
	// HOTKEYS: 5,
	// FUNCS: 10,
	// GUI: 15,
}

//TODO: Merge similar block generators (e.g math_single and math_ round)

// TODO: Some A_(...) listed here may not be readonly, but don't accept the input I tested with (1)
ahkGen.addReservedWords( // TODO (med-prio): Complete list (classes & func)
	// Keywords
	'true,false' +
	// Operators
	'is,in,contains,not,and,or' +
	// Misc
	// https://autohotkey.com/docs/v2/Concepts.htm#names
	'as,IsSet,super,unset' + 
	// Declaration Keywords
	'Break,Case,Catch,Continue,Else,Finally,For,Global,Goto,If,Local,Loop,Return,Static,Switch,Throw,Try,Until' + 
	// Globals (readonly)
	// https://gist.github.com/Banaanae/5dab1d0b5d523c2bae998ff0e18e92a5
	// Special Chars & Script Properties
	'A_Space,A_Tab,A_WorkingDir,A_InitialWorkingDir,A_ScriptDir,A_ScriptFullPath,A_ScriptHwnd,A_LineNumber,A_LineFile,A_ThisFunc,A_AhkVersion,A_AhkPath,A_IsCompiled' + 
	// Date and Time
	'A_YYYY,A_MM,A_DD,A_MMMM,A_MMM,A_DDDD,A_DDD,A_WDay,A_YDay,A_YWeek,A_Hour,A_Min,A_Sec,A_MSec,A_Now,A_NowUTC,A_TickCount' + 
	// Script Settings
	'A_IsSuspended,A_IsPaused,A_IsCritical,A_FileEncoding,A_SendMode,A_CoordModeToolTip,A_CoordModePixel,A_CoordModeMouse,A_CoordModeCaret,A_CoordModeMenu,A_RegView,A_TrayMenu,A_IconFile,A_IconNumber' + 
	// User Idle Time
	'A_TimeIdle,A_TimeIdlePhysical,A_TimeIdleKeyboard,A_TimeIdleMouse' + 
	// Hotkeys, Hotstrings, and Custom Menu Items
	'A_ThisHotkey,A_PriorHotkey,A_PriorKey,A_TimeSinceThisHotkey,A_TimeSincePriorHotkey,A_EndChar' + 
	// Operating System and User Info
	'A_ComSpec,A_Temp,A_OSVersion,A_Is64bitOS,A_PtrSize,A_Language,A_ComputerName,A_UserName,A_WinDir,A_ProgramFiles,A_AppData,A_AppDataCommon,A_Desktop,A_DesktopCommon,A_StartMenu,A_StartMenuCommon,A_Programs,A_ProgramsCommon,A_Startup,A_StartupCommon,A_MyDocuments,A_IsAdmin,A_ScreenWidth,A_ScreenHeight,A_ScreenDPI' + 
	// Misc & Loop
	'A_Cursor,A_LoopFileName,A_LoopRegName,A_LoopReadLine,A_IsCompiled,A_LoopField'
)

ahkGen.init = function(workspace) {
    //_super.init.call(this, workspace);
    this.PASS = this.INDENT + 'pass\n';
    if (!this.nameDB_) {
        this.nameDB_ = new Blockly.Names(this.RESERVED_WORDS_);
    }
    else {
        this.nameDB_.reset();
    }
    this.nameDB_.setVariableMap(workspace.getVariableMap());
    this.nameDB_.populateVariables(workspace);
    this.nameDB_.populateProcedures(workspace);
    var defvars = [];
    // Add developer variables (not created or named by the user).
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
        defvars.push(this.nameDB_.getName(devVarList[i], Names.DEVELOPER_VARIABLE_TYPE) + ' = None');
    }
    // Add user variables, but only ones that are being used.
    var variables = Blockly.Variables.allUsedVarModels(workspace);
    for (var i = 0; i < variables.length; i++) {
        defvars.push(this.getVariableName(variables[i].getId()) + ' = None');
    }
    this.definitions_['variables'] = defvars.join('\n');
    this.isInitialized = true;
}

ahkGen.forBlock['a_special'] = 
ahkGen.forBlock['a_property'] = 
ahkGen.forBlock['a_time'] = 
ahkGen.forBlock['a_settings'] = 
ahkGen.forBlock['a_idle'] = 
ahkGen.forBlock['a_hotkey'] = 
ahkGen.forBlock['a_os'] = 
ahkGen.forBlock['a_misc'] = 
ahkGen.forBlock['a_loop'] = function(block, generator) {
	const value = block.getFieldValue('VALUE')
	return [`A_${value}`, Order.ATOMIC]
}

ahkGen.forBlock['a_setbuiltin'] = function(block, generator) {
	const a_var = generator.valueToCode(block, 'a_var', Order.ATOMIC)
	const a_to = generator.valueToCode(block, 'a_to', Order.ATOMIC)
	if (a_var !== ahkGen.nameDB_.getName(a_var, Order.ATOMIC)) {
		return `; Error: Variable "${a_var}" cannot be written to` // TODO: Warn instead of this 
	}
	return `${a_var} := ${a_to}`
}

ahkGen.forBlock['controls_if'] = function(block, generator) { // Unfinished
	//const code = "if"
	const statement_members = generator.statementToCode(block, 'DO')
	return `if() {\n${statement_members}\n}`;
}

ahkGen.forBlock['controls_repeat_ext'] = function(block, generator) {
	const times = generator.valueToCode(block, 'TIMES', Order.NONE)
	const statement_members = generator.statementToCode(block, 'DO')
	return `Loop(${times}) {\n${statement_members}\n}`
}

ahkGen.forBlock['gui_add_text'] = 
ahkGen.forBlock['gui_add_edit'] = 
ahkGen.forBlock['gui_add_picture'] = 
ahkGen.forBlock['gui_add_button'] = function guiAdd(block, generator,) { // TODO: Fix identation
	const type = block.type
	let text = generator.valueToCode(block, 'text', Order.ATOMIC)
	const x = generator.valueToCode(block, 'x', Order.ATOMIC).parseGui('x', ' ')
	const y = generator.valueToCode(block, 'y', Order.ATOMIC).parseGui('y', ' ')
	const w = generator.valueToCode(block, 'w', Order.ATOMIC).parseGui('w', ' ')
	const h = generator.valueToCode(block, 'h', Order.ATOMIC).parseGui('h')
	const name = generator.valueToCode(block, 'name', Order.ATOMIC).replace(/\W/g, '').parseGui('', ' := ')
	if (block.type === 'gui_add_picture') {
		text = generator.valueToCode(block, 'location', Order.ATOMIC)
	}
	return `${name}PLACE-ME-IN-GUI-HEADER.Add("${type.replace(/.*_/g, '')}", "${x}${y}${w}${h}", ${text})`
}

ahkGen.forBlock['gui_header'] = function(block, generator) {
	const name = block.getFieldValue('gui_header_name');
	const varName = ahkGen.nameDB_.getName(name.replace(/\W/g, ''), Order.ATOMIC);
	const statement_members = generator.statementToCode(block, 'gui_header_blocks').replace(/^\s*(.*=\s*)?[\w-]*/gm, `$1${varName}`) // TODO: Find a better way of doing this
	return `${varName} := Gui(, "${name}")\n${statement_members}` // TODO: Make regex not match empty line
}

ahkGen.forBlock['gui_show'] = function(block, generator) {
	const name = block.getFieldValue('gui_show_name').replace(/\W/g, '');
    const x = block.getFieldValue('gui_show_x').parseGui('x', ' ');
    const y = block.getFieldValue('gui_show_y').parseGui('y', ' ');
    const w = block.getFieldValue('gui_show_w').parseGui('w', ' ');
    const h = block.getFieldValue('gui_show_h').parseGui('h');
    return `${name}.Show("${x}${y}${w}${h}")`;
}

ahkGen.forBlock['hotkey'] = function(block, generator) {
	const key = block.getFieldValue('hotkey_key');
	const statement_members = generator.statementToCode(block, 'hotkey_blocks');
	return `${key}:: {\n${statement_members}\n}`;
}

ahkGen.forBlock['logic_boolean'] = function(block, generator) {
	const code = block.getFieldValue('BOOL') === 'TRUE' ? 'true' : 'false';
	return [code, Order.ATOMIC];
}

ahkGen.forBlock['logic_compare'] = 
ahkGen.forBlock['logic_operation'] = 
ahkGen.forBlock['math_arithmetic'] = function(block, generator) {
	const arg0 = generator.valueToCode(block, 'A', Order.ATOMIC);
	const arg1 = generator.valueToCode(block, 'B', Order.ATOMIC);
	const operator = block.getFieldValue('OP');
	let op;
	switch(operator) {
		case 'AND': op = ' and '; break;
		case 'OR': op = ' or '; break;
		case 'EQ': op = ' = '; break; // TODO: Support case sensitive (==)
		case 'NEQ': op = ' != '; break;
		case 'LT': op = ' < '; break;
		case 'LTE': op = ' <= '; break;
		case 'GT': op = ' > '; break;
		case 'GTE': op = ' >= '; break;
		case 'ADD': op = ' + '; break;
		case 'MINUS': op = ' - '; break;
		case 'MULTIPLY': op = ' * '; break;
		case 'DIVIDE': op = ' / '; break;
		case 'POWER': op = ' ** '
	}
	return [`${arg0}${op}${arg1}`, Order.ATOMIC];
}

ahkGen.forBlock['math_atan2'] = function(block, generator) { // Unfinished
	const x = generator.valueToCode(block, 'X', Order.ATOMIC)
	const y = generator.valueToCode(block, 'Y', Order.ATOMIC)
	// https://autohotkey.com/boards/viewtopic.php?f=76&t=62443&p=265992&sid=4c116fa52defc2001b2604bc4f542bfb#p265992
	const code = `atan(y/x)+4*atan((x<0)*(y>0)-(y<0))`
	return x+y
}

ahkGen.forBlock['math_constant'] = function(block, generator) {
	const constant = block.getFieldValue('CONSTANT') // TODO: Defines variables at top then use down here
	if (constant === 'PI') { // TODO (low-prio): Make switch
		var code = 'ATan(1) * 4';
    } else if (constant === 'E') {
		var code = 'Exp(1)';
	} else if (constant === 'GOLDEN_RATIO') {
		var code = '(1 + Sqrt(5)) / 2'
	} else if (constant === 'SQRT2') {
		var code = 'Sqrt(2)';
    } else if (constant === 'SQRT1_2') {
		var code = 'Sqrt(1 / 2)';
	} else if (constant === 'INFINITY') {
		return ';TODO: Does infinity even exist in ahk';
    }
	return [code, Order.ATOMIC]
}

ahkGen.forBlock['math_constrain'] = function(block, generator) {
	const number = generator.valueToCode(block, 'VALUE', Order.ATOMIC);
	const low = generator.valueToCode(block, 'LOW', Order.ATOMIC);
	const high = generator.valueToCode(block, 'HIGH', Order.ATOMIC);
	const code = `Min(Max(${number}, ${low}), ${high})`
	return [code, Order.ATOMIC]
}

ahkGen.forBlock['math_modulo'] = function(block, generator) {
	const dividend = generator.valueToCode(block, 'DIVIDEND', Order.ATOMIC);
    const divisor = generator.valueToCode(block, 'DIVISOR', Order.ATOMIC);
    return [`Mod(${dividend}, ${divisor})`, Order.ATOMIC]
};

ahkGen.forBlock['math_number'] = function(block, generator) {
	return [String(block.getFieldValue('NUM')), Order.ATOMIC];
};

ahkGen.forBlock['math_number_property'] = function(block, generator) {
	const prop = block.getFieldValue('PROPERTY')
	const number = generator.valueToCode(block, 'NUMBER_TO_CHECK', Order.ATOMIC)
	const divisor = generator.valueToCode(block, 'DIVISOR', Order.ATOMIC)
	let code;
	if (prop === 'EVEN') { // TODO (low-prio): Make switch
		code = `(Mod(${number}, 2) == 0)`
	} else if (prop === 'ODD') {
		code = `(Mod(${number}, 2) != 0)`
	} else if (prop === 'PRIME') {
		code = '; TODO: Prime'
	} else if (prop == 'WHOLE') {
		code = `(${number} == Floor(${number}))`
	} else if (prop === 'POSITIVE') {
		code = `(${number} == Abs(${number}))`
	} else if (prop === 'NEGATIVE') {
		code = `(${number} != Abs(${number}))`
	} else {
		code = `(Mod(${number}, ${divisor}) == 0)`
	}
	return [code, Order.ATOMIC]
}

ahkGen.forBlock['math_random_float'] = 
ahkGen.forBlock['math_random_int'] = function(block, generator) {
	const min = generator.valueToCode(block, 'FROM', Order.ATOMIC);
	const aMin = min === '' ? '' : `${min}, `
    const max = generator.valueToCode(block, 'TO', Order.ATOMIC);
    return [`Random(${aMin}${max})`, Order.ATOMIC]
};

ahkGen.forBlock['math_round'] = function(block, generator) {
	const number = generator.valueToCode(block, 'NUM', Order.ATOMIC)
	const roundType = block.getFieldValue('OP')
	let round;
	switch(roundType) {
		case "ROUNDUP": round = "Ceil"; break;
		case "ROUNDDOWN": round = "Floor"; break;
		default: round = "Round"
	}
	return [`${round}(${number})`, Order.ATOMIC]
}

ahkGen.forBlock['math_round_cust'] = function(block, generator) { // Custom version of math_round that supports rounding to N places
	const number = generator.valueToCode(block, 'math_round_cust_number', Order.ATOMIC)
	const places = block.getFieldValue('math_round_cust_places')
	return [`Round(${number}, ${places})`, Order.ATOMIC]
}

ahkGen.forBlock['math_single'] = 
ahkGen.forBlock['math_trig'] = function(block, generator) {
	const number = generator.valueToCode(block, 'NUM', Order.ATOMIC)
	const operator = block.getFieldValue('OP');
	let code;
	if (operator === 'ROOT') { // TODO (low-prio): Switch
		code = `Sqrt(${number})`;
	} else if (operator === 'ABS') {
		code = `Abs(${number})`;
	} else if (operator === 'NEG') {
		code = `-(${number})`; // Works with both positive and negative
	} else if (operator === 'LN') {
		code = `Ln(${number})`;
	} else if (operator === 'LOG10') {
		code = `Log(${number})`;
	} else if (operator === 'EXP') {
		code = `Exp(${number})`;
	} else if (operator === 'POW10') {
		code = `10 ** ${number}`
	} else if (operator === 'SIN') {
		code = `Sin(${number})`; 
	} else if (operator === 'COS') {
		code = `Cos(${number})`; 
	} else if (operator === 'TAN') {
		code = `Tan(${number})`; 
	} else if (operator === 'ASIN') {
		code = `ASin(${number})`; 
	} else if (operator === 'ACOS') {
		code = `ACos(${number})`; 
	} else if (operator === 'ATAN') {
		code = `ATan(${number})`; 
	} 
	return [code, Order.ATOMIC];
};
ahkGen.forBlock['msgbox_simple'] = 
ahkGen.forBlock['msgbox'] = function(block, generator) { // TODO (low prio): Fix spacing issue
	const body = generator.valueToCode(block, 'msgbox_body', Order.ATOMIC)
	if (block.type === "msgbox_simple") {
		return `MsgBox(${body})`
	}
	const title = generator.valueToCode(block, 'msgbox_title', Order.ATOMIC)
	const buttons = block.getFieldValue('msgbox_buttons_type').replace(/.*_/g, '') + ' '
	const icon = block.getFieldValue('msgbox_icon_type').replace(/.*_/g, 'Icon') + ' '
	const defaultBtn = block.getFieldValue('msgbox_default_type').replace(/.*_/g, '') + ' '
	const modal = block.getFieldValue('msgbox_modal_type').replace(/.*_/g, '') + ' ' 
	const other1 = block.getFieldValue('msgbox_other_16384') === 'TRUE' ? 16384 : 0 // Help
	const other2 = block.getFieldValue('msgbox_other_524288') === 'TRUE' ? 524288 : 0 // Right align
	const other3 = block.getFieldValue('msgbox_other_1048576') === 'TRUE' ? 1048576 : 0 // RtL
	const other = other1 + other2 + other3
	return `MsgBox(${body}, ${title}, "${buttons}${icon}${defaultBtn}${modal}${other}")`;
}

ahkGen.forBlock['procedures_defreturn'] = 
ahkGen.forBlock['procedures_defnoreturn'] = function(block, generator) {
	const funcName = block.getFieldValue('NAME').replace(/\W/g, '');
	var args = [];
	var variables = block.getVars();
	for (var i = 0; i < variables.length; i++) {
		args[i] = ahkGen.nameDB_.getName(variables[i], Order.ATOMIC);
	} // TODO: Is (ParamName*2*) normal
	const statement_members = generator.statementToCode(block, 'STACK', true);
	const returnVal = generator.valueToCode(block, 'RETURN', Order.NONE) // TODO: No return for block procedures_defnoreturn
	const returned = returnVal !== undefined ? `\n${generator.INDENT}return ${returnVal}` : ''
    return `${funcName}(${args.join(', ')}) {\n${statement_members}${returned}\n}`;
};

ahkGen.forBlock['procedures_ifreturn'] = function(block, generator) {
	const ifVal = generator.valueToCode(block, 'CONDITION', Order.ATOMIC)
	const returnVal = 'return ' + generator.valueToCode(block, 'VALUE', Order.ATOMIC)
	return `If (${ifVal}) ${returnVal}`
};

ahkGen.forBlock['singleinstance'] = function(block, generator) {
	const type = block.getFieldValue('singleinstance_type').replace(/.*_/g, '')
    return `#SingleInstance ${type}`;
};

ahkGen.forBlock['send'] = function(block, generator) {
	var keys = generator.valueToCode(block, 'send_keys', Order.ATOMIC);
    return `Send(${keys})`;
};

ahkGen.forBlock['sleep'] = function(block, generator) {
	var delay = generator.valueToCode(block, 'sleep_delay', Order.ATOMIC);
	return `Sleep(${delay})`;
};

ahkGen.forBlock['text'] = function(block, generator) {
	const textValue = block.getFieldValue('TEXT');
	return [`"${textValue}"`, Order.ATOMIC];
};

ahkGen.forBlock['text_changeCase'] = 
ahkGen.forBlock['text_length'] = function(block, generator) { // TODO: Doesn't work when change then length
	const text = generator.valueToCode(block, 'TEXT', Order.NONE)
	let modifier;
	if (block.type === 'text_changeCase') {
		modifier = block.getFieldValue('CASE').replace(/case/i, '')
	} else if (block.type === 'text_length') {
		modifier = 'Len'
	}
	return [`Str${modifier.toTitleCase()}(${text})`, Order.ATOMIC]
}

ahkGen.forBlock['text_charAt'] = function(block, generator) {
	const locType = block.getFieldValue('WHERE')
	const text = generator.valueToCode(block, 'VALUE', Order.NONE)
	const at = generator.valueToCode(block, 'AT', Order.NONE)
	let code;
	if (locType === 'FROM_START') {
		code = `SubStr(${text}, ${at}, 1)`
	} else if (locType === 'FROM_END') {
		code = `SubStr(${text}, ${-Math.abs(at)}, 1)`
	} else if (locType === 'FIRST') {
		code = `SubStr(${text}, 1, 1)`
	} else if (locType === 'LAST') {
		code = `SubStr(${text}, StrLen(${text}), 1)`
	} else {
		code = `SubStr(${text}, Random(StrLen(${text})), 1)`
	}
	return [code, Order.ATOMIC]
}

ahkGen.forBlock['text_getSubstring'] = function(block, generator) { // TODO: Fix commas
	const text = generator.valueToCode(block, 'STRING', Order.NONE)
	const locType1 = block.getFieldValue('WHERE1')
	const locType2 = block.getFieldValue('WHERE2')
	const at1 = generator.valueToCode(block, 'AT1', Order.NONE)
	const at2 = generator.valueToCode(block, 'AT2', Order.NONE)
	let start;
	let length;
	if (locType1 === 'FROM_START') {
		start = at1
	} else if (locType1 === 'FROM_END') {
		start = -Math.abs(at1)
	} else {
		start = 1
	}
	if (locType2 === 'FROM_START') {
		length = ', ' + at2
	} else if (locType2 === 'FROM_END') {
		length = ', ' + -Math.abs(at2)
	} else {
		length = ''
	}
	return [`SubStr(${text}, ${start}${length})`, Order.ATOMIC]
}

ahkGen.forBlock['text_indexOf'] = function(block, generator) { // TODO: Second block with all InStr options
	const haystack = generator.valueToCode(block, 'VALUE', Order.ATOMIC)
	const needle = ', ' + generator.valueToCode(block, 'FIND', Order.ATOMIC)
	const position = block.getFieldValue('END') === "FIRST" ? "" : ",,, -1"
	const code = `InStr(${haystack}${needle}${position})`
	return [code, Order.ATOMIC]
}

ahkGen.forBlock['text_isEmpty'] = function(block, generator) {
	const text = generator.valueToCode(block, 'VALUE', Order.ATOMIC)
	return [`(!StrLen(${text}))`]
}

ahkGen.forBlock['text_join'] = function(block, generator) {
	const values = [];
	for (let i = 0; i < block.itemCount_; i++) {
		const texts = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC);
		if (texts) {
			values.push(texts);
		}
	}
	const concat = values.join(' . ')
    return [concat, Order.ATOMIC]
};

ahkGen.forBlock['text_multiline'] = function(block, generator) {
	const text = block.getFieldValue('TEXT').replace(/\n/g, '`n');
	return [`"${text}"`, Order.ATOMIC]
}

ahkGen.forBlock['variables_get'] = function(block, generator) {
	const varName = ahkGen.nameDB_.getName(block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
    return [varName, Order.ATOMIC]
};


ahkGen.forBlock['variables_set'] = function(block, generator) {
	const argument0 = ahkGen.valueToCode(block, 'VALUE', Order.NONE) || '0';
	const varName = generator.getVariableName(block.getFieldValue('VAR'))
	return `${varName} := ${argument0}`;
};

ahkGen.scrub_ = function(block, code, thisOnly) {
	const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
	if (nextBlock && !thisOnly) {
		return code + '\n' + ahkGen.blockToCode(nextBlock);
	}
	return code;
};

String.prototype.parseGui = function(prefix, suffix) {
	if (prefix === undefined) prefix = ""
	if (suffix === undefined) suffix = ""
	if (this.valueOf() !== "") {
		return prefix + this.valueOf() + suffix
	} else {
		return ""
	}
}

String.prototype.toTitleCase = function() { // Just to make output look nice 
	return this.valueOf().replace(/\S+/g, function(text) {return text[0].toUpperCase() + text.substring(1).toLowerCase()})
}