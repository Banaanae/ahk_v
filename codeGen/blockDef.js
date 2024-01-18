import {Order} from './ahkGen'

//TODO: Merge similar block generators (e.g math_single and math_ round)

export const a_special = a_
export const a_property = a_
export const a_time = a_
export const a_settings = a_
export const a_idle = a_
export const a_hotkey = a_
export const a_os = a_
export const a_misc = a_
export const a_loop = a_
function a_(block, generator) {
	const value = block.getFieldValue('VALUE')
	return [`A_${value}`, Order.ATOMIC]
}

export function a_setbuiltin(block, generator) {
	const a_var = generator.valueToCode(block, 'a_var', Order.ATOMIC)
	const a_to = generator.valueToCode(block, 'a_to', Order.ATOMIC)
	if (a_var !== generator.getVariableName(a_var)) {
		block.setWarningText(`Variable "${a_var}" cannot be written to`)
 	} else {
		block.setWarningText()
	}
	return `${a_var} := ${a_to}`
}

export function controls_if(block, generator) { // Unfinished
	const statement_members = generator.statementToCode(block, 'DO')
	// var args = [];
	// var variables = block.getVars();
	// for (var i = 0; i < variables.length; i++) {
	// 	args[i] = generator.getVariableName(variables[i]);
	// }
	//const ifElseCount = block.
	//console.log(ifElseCount)
	const elseBlocks = generator.statementToCode(block, 'ELSE', Order.ATOMIC)
	const isElse = elseBlocks === '' ? '' : ` else {\n${elseBlocks}\n}`;
	const code = `if() {\n${statement_members}\n}${isElse}`
	return code
}

export function controls_repeat_ext(block, generator) {
	const times = generator.valueToCode(block, 'TIMES', Order.NONE)
	const statement_members = generator.statementToCode(block, 'DO')
	return `Loop(${times}) {\n${statement_members}\n}`
}

export function controls_whileUntil(block, generator) {
	const mode = block.getFieldValue('MODE') === 'WHILE' ? 'While' : 'Loop'
	let condition = generator.valueToCode(block, 'BOOL', Order.ATOMIC)
	let until;
	if (mode == 'Loop') {
		until = ' Until ' + condition
		condition = ''
	} else {
		until = ''
	}
	const statement_members = generator.statementToCode(block, 'DO', Order.ATOMIC)
	const code = `${mode}(${condition}) {\n${statement_members}\n}${until}`
	return code
}

export const gui_add_text = gui_add
export const gui_add_edit = gui_add
export const gui_add_picture = gui_add
export const gui_add_button = gui_add
function gui_add(block, generator,) { // TODO: Fix identation
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

export function gui_header(block, generator) {
	const name = block.getFieldValue('gui_header_name');
	const varName = generator.getVariableName(name.replace(/\W/g, ''));
	const statement_members = generator.statementToCode(block, 'gui_header_blocks').replace(/^\s*(.*=\s*)?[\w-]*/gm, `$1${varName}`) // TODO: Find a better way of doing this
	return `${varName} := Gui(, "${name}")\n${statement_members}` // TODO: Make regex not match empty line
}

export function gui_show(block, generator) {
	const name = block.getFieldValue('gui_show_name').replace(/\W/g, '');
    const x = block.getFieldValue('gui_show_x').parseGui('x', ' ');
    const y = block.getFieldValue('gui_show_y').parseGui('y', ' ');
    const w = block.getFieldValue('gui_show_w').parseGui('w', ' ');
    const h = block.getFieldValue('gui_show_h').parseGui('h');
    return `${name}.Show("${x}${y}${w}${h}")`;
}

export function hotkey(block, generator) {
	const key = block.getFieldValue('hotkey_key');
	const statement_members = generator.statementToCode(block, 'hotkey_blocks');
	return `${key}:: {\n${statement_members}\n}`;
}

export function lists_create_with(block, generator) {
	const listItems = []
	for (let i = 0; i < block.itemCount_; i++) {
		const texts = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC);
		if (texts) {
			listItems.push(texts);
		}
	}
	const array = listItems.join(', ')
    return [`[${array}]`, Order.ATOMIC]
}

export function logic_boolean(block, generator) {
	const code = block.getFieldValue('BOOL') === 'TRUE' ? 'true' : 'false';
	return [code, Order.ATOMIC];
}

export const logic_compare = math_arithmetic
export const logic_operation = math_arithmetic
export function math_arithmetic(block, generator) {
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

export function math_atan2(block, generator) {
	const x = generator.valueToCode(block, 'X', Order.ATOMIC)
	const y = generator.valueToCode(block, 'Y', Order.ATOMIC)
	// https://www.autohotkey.com/boards/viewtopic.php?f=76&t=62443&p=265992&sid=4c116fa52defc2001b2604bc4f542bfb#p265922
	const func = generator.provideFunction_('ATan2', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(y, x) {
  return DllCall("msvcrt\\atan2", "Double", y, "Double", x, "CDECL Double")
}
	`)
	const code = func + `(${y}, ${x})`
	return [code, Order.FUNCTION_CALL]
}

export function math_constant(block, generator) {
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

export function math_constrain(block, generator) {
	const number = generator.valueToCode(block, 'VALUE', Order.ATOMIC);
	const low = generator.valueToCode(block, 'LOW', Order.ATOMIC);
	const high = generator.valueToCode(block, 'HIGH', Order.ATOMIC);
	const code = `Min(Max(${number}, ${low}), ${high})`
	return [code, Order.ATOMIC]
}

export function math_modulo(block, generator) {
	const dividend = generator.valueToCode(block, 'DIVIDEND', Order.ATOMIC);
    const divisor = generator.valueToCode(block, 'DIVISOR', Order.ATOMIC);
    return [`Mod(${dividend}, ${divisor})`, Order.ATOMIC]
};

export function math_number(block, generator) {
	return [String(block.getFieldValue('NUM')), Order.ATOMIC];
};
//https://www.autohotkey.com/boards/viewtopic.php?t=75586
export function math_number_property(block, generator) {
	const prop = block.getFieldValue('PROPERTY')
	const number = generator.valueToCode(block, 'NUMBER_TO_CHECK', Order.ATOMIC)
	const divisor = generator.valueToCode(block, 'DIVISOR', Order.ATOMIC)
	let code;
	switch(prop) {
		case 'EVEN': code = `(Mod(${number}, 2) == 0)`; break;
		case 'ODD': code = `(Mod(${number}, 2) != 0)`; break;
		case 'WHOLE': code = `(${number} == Floor(${number}))`; break;
		case 'POSITIVE': code = `(${number} == Abs(${number}))`; break;
		case 'NEGATIVE': code = `(${number} != Abs(${number}))`; break;
		case 'DIVISIBLE_BY': code = `(Mod(${number}, ${divisor}) == 0)`
	}
	if (prop === 'PRIME') {
		const func = generator.provideFunction_('Prime', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(n) {
  Loop Floor(Sqrt(n)) -1 {
    If !Mod(n, A_Index + 1)
      Return false
  }
  Return true
}`)
		return [func + `(${number})`, Order.FUNCTION_CALL]
	}
	return [code, Order.ATOMIC]
}

export function math_on_list(block, generator) { // Unfinished
	const list = generator.valueToCode(block, 'LIST', Order.ATOMIC)
	const op = block.getFieldValue('OP')
	let code;
	if (op === 'RANDOM') {
		const func = generator.provideFunction_('ArrayRandom', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(list) {
  randomItem := list[Random(1, list.Length)]
  return randomItem
}`)
	code = func + `(${list})`
	}
	return [op +'\n'+code, Order.FUNCTION_CALL]
}

export const math_random_float = math_random_int
export function math_random_int(block, generator) {
	const min = generator.valueToCode(block, 'FROM', Order.ATOMIC);
	const aMin = min === '' ? '' : `${min}, `
    const max = generator.valueToCode(block, 'TO', Order.ATOMIC);
    return [`Random(${aMin}${max})`, Order.ATOMIC]
};

export function math_round(block, generator) {
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

export function math_round_cust(block, generator) { // Custom version of math_round that supports rounding to N places
	const number = generator.valueToCode(block, 'math_round_cust_number', Order.ATOMIC)
	const places = block.getFieldValue('math_round_cust_places')
	return [`Round(${number}, ${places})`, Order.ATOMIC]
}

export const math_single = math_trig
export function math_trig(block, generator) {
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
export const msgbox_simple = msgbox
export function msgbox(block, generator) { // TODO (low prio): Fix spacing issue
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

export const procedures_defreturn = procedures_defnoreturn
export function procedures_defnoreturn(block, generator) {
	const funcName = block.getFieldValue('NAME').replace(/\W/g, '');
	var args = [];
	var variables = block.getVars();
	for (var i = 0; i < variables.length; i++) {
		args[i] = generator.getVariableName(variables[i]);
	}
	const statement_members = generator.statementToCode(block, 'STACK', true);
	const returnVal = generator.valueToCode(block, 'RETURN', Order.NONE) // TODO: No return for block procedures_defnoreturn
	const returned = returnVal !== undefined ? `\n${generator.INDENT}return ${returnVal}` : ''
    return `${funcName}(${args.join(', ')}) {\n${statement_members}${returned}\n}`;
};

export function procedures_ifreturn(block, generator) {
	const ifVal = generator.valueToCode(block, 'CONDITION', Order.ATOMIC)
	const returnVal = 'return ' + generator.valueToCode(block, 'VALUE', Order.ATOMIC)
	return `If (${ifVal}) ${returnVal}`
};

export function singleinstance(block, generator) {
	const type = block.getFieldValue('singleinstance_type').replace(/.*_/g, '')
    return `#SingleInstance ${type}`;
};

export function send(block, generator) {
	const keys = generator.valueToCode(block, 'send_keys', Order.ATOMIC);
    return `Send(${keys})`;
};

export function sendmode(block, generator) {
	const mode = block.getFieldValue('sendmode_type');
    return `SendMode("${mode}")`;
};

export function sleep(block, generator) {
	const delay = generator.valueToCode(block, 'sleep_delay', Order.ATOMIC);
	return `Sleep(${delay})`;
};

export function text(block, generator) {
	const textValue = block.getFieldValue('TEXT');
	return [`"${textValue}"`, Order.ATOMIC];
};

export const text_changeCase = text_length
export function text_length(block, generator) { // TODO: Doesn't work when change then length
	const text = generator.valueToCode(block, 'TEXT', Order.NONE)
	let modifier;
	if (block.type === 'text_changeCase') {
		modifier = block.getFieldValue('CASE').replace(/case/i, '')
	} else if (block.type === 'text_length') {
		modifier = 'Len'
	}
	return [`Str${modifier.toTitleCase()}(${text})`, Order.ATOMIC]
}

export function text_charAt(block, generator) {
	const locType = block.getFieldValue('WHERE')
	const text = generator.valueToCode(block, 'VALUE', Order.NONE)
	const at = generator.valueToCode(block, 'AT', Order.NONE)
	let code;
	switch(locType) {
		case 'FROM_START': code = `SubStr(${text}, ${at}, 1)`
		case 'FROM_END': code = `SubStr(${text}, ${-Math.abs(at)}, 1)`
		case 'FIRST': code = `SubStr(${text}, 1, 1)`
		case 'LAST': code = `SubStr(${text}, StrLen(${text}), 1)`
		case 'RANDOM': code = `SubStr(${text}, Random(StrLen(${text})), 1)`
	}
	return [code, Order.ATOMIC]
}

export function text_count(block, generator) {
	const needle = generator.valueToCode(block, 'SUB', Order.ATOMIC)
	const haystack = generator.valueToCode(block, 'TEXT', Order.ATOMIC)
	const func = generator.provideFunction_('StrCount', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(needle, haystack) {
  StrReplace(haystack, needle,,, &count)
  return count
}`)
	const code = func + `(${needle}, ${haystack})`
	return [code, Order.FUNCTION_CALL]
}

export function text_getSubstring(block, generator) { // TODO: Fix commas
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

export function text_indexOf(block, generator) { // TODO: Second block with all InStr options
	const haystack = generator.valueToCode(block, 'VALUE', Order.ATOMIC)
	const needle = ', ' + generator.valueToCode(block, 'FIND', Order.ATOMIC)
	const position = block.getFieldValue('END') === "FIRST" ? "" : ",,, -1"
	const code = `InStr(${haystack}${needle}${position})`
	return [code, Order.ATOMIC]
}

export function text_isEmpty(block, generator) {
	const text = generator.valueToCode(block, 'VALUE', Order.ATOMIC)
	return [`(!StrLen(${text}))`, Order.ATOMIC]
}

export function text_join(block, generator) {
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

export function text_multiline(block, generator) {
	const text = block.getFieldValue('TEXT').replace(/\n/g, '`n');
	return [`"${text}"`, Order.ATOMIC]
}

export function text_prompt_ext(block, generator) {
	const text = generator.valueToCode(block, 'TEXT', Order.ATOMIC)
	const type = block.getFieldValue('TYPE')
	return [`InputBox(${text})`, Order.ATOMIC] // TODO: Use type
}

export function text_replace(block, generator) { // TODO: Custom with all options
	const needle = generator.valueToCode(block, 'FROM', Order.ATOMIC)
	const replace = generator.valueToCode(block, 'TO', Order.ATOMIC)
	const haystack = generator.valueToCode(block, 'TEXT', Order.ATOMIC)
	return [`StrReplace(${haystack}, ${needle}, ${replace})`] // TODO: Fix optional param's comma
}

export function text_reverse(block, generator) {
	const text = generator.valueToCode(block, 'TEXT', Order.ATOMIC)
	const func = generator.provideFunction_('StrReverse', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(str) {
  DllCall("msvcrt.dll\\_wcsrev", "Str", $str, "CDECL")
  return str
}
	`) // TODO: Find dllcall source
	const code = func + `(${text})`
	return [code, Order.FUNCTION_CALL]
}

export const text_trim = text_trim_cust
export function text_trim_cust(block, generator) {
	const text = generator.valueToCode(block, 'TEXT', Order.ATOMIC)
	const mode = block.getFieldValue('MODE')
	let type;
	switch(mode) {
		case 'LEFT': type = 'L'; break;
		case 'RIGHT': type = 'R'; break;
		case 'BOTH': type = ''
	}
	let trim;
	if (block.type === 'text_trim_cust') {
		trim = ', ' + generator.valueToCode(block, 'TRIM', Order.ATOMIC)
	} else {
		trim = ''
	}
	return [`${type}Trim(${text}${trim})`, Order.ATOMIC]
}

export function variables_get(block, generator) {
	const varName = generator.getVariableName(block.getFieldValue('VAR')); // Blockly.VARIABLE_CATEGORY_NAME
    return [varName, Order.ATOMIC]
};


export function variables_set(block, generator) {
	const argument0 = generator.valueToCode(block, 'VALUE', Order.NONE) || '0';
	const varName = generator.getVariableName(block.getFieldValue('VAR'))
	return `${varName} := ${argument0}`;
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