import {Order} from './ahkGen'

//TODO: Merge similar block generators (e.g math_single and math_ round)
// TODO: colour_blend controls_for

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
	block.setWarningText()
	if (a_var !== generator.getVariableName(a_var)) {
		block.setWarningText(`Variable "${a_var}" cannot be written to`)
		return ''
	}
	return `${a_var} := ${a_to}`
}

export function colour_picker(block, generator) {
	const colour = block.getFieldValue('COLOUR')
	return colour
}

export function colour_blend(block, generator) {
	const colour1 = generator.valueToCode(block, 'COLOUR1', Order.ATOMIC)	
	const colour2 = generator.valueToCode(block, 'COLOUR2', Order.ATOMIC)
	const ratio = generator.valueToCode(block, 'RATIO', Order.ATOMIC)
	const func = generator.provideFunction_('BlendColour', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(c1, c2, ratio) {
  ratio := Max(Min(ratio, 1), 0)
  r1 := Format("{:d}", "0x" SubStr(c1, 2, 2))
  g1 := Format("{:d}", "0x" SubStr(c1, 4, 2))
  b1 := Format("{:d}", "0x" SubStr(c1, 6, 2))
  r2 := Format("{:d}", "0x" SubStr(c2, 2, 2))
  g2 := Format("{:d}", "0x" SubStr(c2, 4, 2))
  b2 := Format("{:d}", "0x" SubStr(c2, 6, 2))
  colour := Format("#{:X}", Round(r1 * (1 - ratio) + r2 * ratio))
  colour .= Format("{:X}", Round(g1 * (1 - ratio) + g2 * ratio))
  colour .= Format("{:X}", Round(b1 * (1 - ratio) + b2 * ratio))
  return colour
}`)
	const code = func + `(${colour1}, ${colour2}, ${ratio})` 
	return [code, Order.FUNCTION_CALL] 
}

export function colour_random(block, generator) {
	const func = generator.provideFunction_('randomColour', `
${generator.FUNCTION_NAME_PLACEHOLDER_}() {	
  decimal := Random(16777215)
  hex := StrUpper(Format("{1:x}", decimal))
  colour := Format("#{:06}", hex)
  return colour
}`)
	const code = func + '()'
	return [code, Order.FUNCTION_CALL]
}

export function colour_rgb(block, generator) { // TODO: Limit to 100
	const r = generator.valueToCode(block, 'RED', Order.ATOMIC)
	const g = generator.valueToCode(block, 'GREEN', Order.ATOMIC)
	const b = generator.valueToCode(block, 'BLUE', Order.ATOMIC)
	const func = generator.provideFunction_('combineRGB', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(r := 0, g := 0, b := 0) {
  colour .= Format("#{:02}", Format("{1:x}", Round(r *= 2.55)))
  colour .= Format("{:02}", Format("{1:x}", Round(g *= 2.55)))
  colour .= Format("{:02}", Format("{1:x}", Round(b *= 2.55)))
  return colour
}`)
	const code = func + `(${r}, ${g}, ${b})`
	return [code, Order.FUNCTION_CALL]
}

export function controls_flow_statements(block, generator) {
	const code = block.getFieldValue('FLOW').toTitleCase()
	return code
}

export function controls_forEach(block, generator) {
	const item = generator.getVariableName(block.getFieldValue('VAR'))
	const arr = generator.valueToCode(block, 'LIST', Order.ATOMIC)
	const statement_members = generator.statementToCode(block, 'DO')
	const code = `
for index, ${item} in ${arr} {
${statement_members}
}`
	return code
}

export function controls_if(block, generator) {
	let n = 0;
	let code = '';
	while (block.getInput('IF' + n)) {
		const conditionCode = generator.valueToCode(block, 'IF' + n, Order.ATOMIC) || false;
		const branchCode = generator.statementToCode(block, 'DO' + n)
		code += (n > 0 ? ' else ' : '') + 'if (' + conditionCode + ') {\n' + branchCode + '\n}';
		n++;
	}
	if (block.getInput('ELSE')) {
		const branchCode = generator.statementToCode(block, 'ELSE')
		code += ' else {\n' + branchCode + '}';
	}
	return code + '\n'
}

export function controls_repeat_ext(block, generator) {
	const times = generator.valueToCode(block, 'TIMES', Order.NONE)
	const ftimes = times != "" ? `(${times})` : ""
	const statement_members = generator.statementToCode(block, 'DO')
	return `Loop${ftimes} {\n${statement_members}\n}`
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

export const exitapp = singleInput

export const gui_add_text = gui_add
export const gui_add_edit = gui_add
export const gui_add_picture = gui_add
export const gui_add_button = gui_add
function gui_add(block, generator,) { // TODO: Fix identation
	const type = block.type
	let text = generator.valueToCode(block, 'text', Order.ATOMIC)
	const x = generator.valueToCode(block, 'x', Order.ATOMIC).addXFix('x', ' ')
	const y = generator.valueToCode(block, 'y', Order.ATOMIC).addXFix('y', ' ')
	const w = generator.valueToCode(block, 'w', Order.ATOMIC).addXFix('w', ' ')
	const h = generator.valueToCode(block, 'h', Order.ATOMIC).addXFix('h')
	const name = generator.valueToCode(block, 'name', Order.ATOMIC).replace(/\W/g, '').addXFix('', ' := ')
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
    const x = block.getFieldValue('gui_show_x').addXFix('x', ' ');
    const y = block.getFieldValue('gui_show_y').addXFix('y', ' ');
    const w = block.getFieldValue('gui_show_w').addXFix('w', ' ');
    const h = block.getFieldValue('gui_show_h').addXFix('h');
    return `${name}.Show("${x}${y}${w}${h}")`;
}

export function hotkey(block, generator) {
	const key = block.getFieldValue('hotkey_key');
	const statement_members = generator.statementToCode(block, 'hotkey_blocks');
	const hotif = generator.valueToCode(block, 'hotif', Order.ATOMIC) + "\n"
	return `${hotif}${key}:: {\n${statement_members}\n}`;
}

export function hotkey_edit(block, generator) { // TODO: Works, but needs options
	const key = block.getFieldValue('hotkey_edit_key');
	let action = block.getFieldValue('hotkey_edit_action');
	if (action == 'AltTab') {
		action = block.getFieldValue('hotkey_edit_alttab')
	}
	return `Hotkey("${key}", "${action}")`
}

export function hotkey_hash_hotif(block, generator) {
	const hotifVal = generator.valueToCode(block, 'INPUT', Order.ATOMIC)
	return [`#HotIf ${hotifVal}`, Order.ATOMIC]
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

// https://www.autohotkey.com/boards/viewtopic.php?t=23286#p109173
export function lists_indexOf(block, generator) { // Unfinished
	const array = generator.valueToCode(block, 'VALUE', Order.ATOMIC)
	const from = block.getFieldValue('END') === 'FIRST' ? 0 : 1
	const find = generator.valueToCode(block, 'FIND', Order.ATOMIC)
	const func = generator.provideFunction_('HasVal', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(haystack, needle, isReversed) {
  if !(IsObject(haystack)) || (haystack.Length = 0)
    return 0
  if (isReversed = 1) {
	reversed := []
	for index, item in haystack
	  reversed.InsertAt(1, item)
	haystack := reversed
  }
  for index, value in haystack
    if (value = needle) {
      if (isReversed = 1)
        return haystack.Length + 1 - index
      return index
    }
  return 0
}`) // TODO (low-prio): Reuse ReverseArray from lists_reverse?
	const code = func + `(${array}, ${find}, ${from})`
	return [code, Order.FUNCTION_CALL]
}

export function lists_getIndex(block, generator) {
	const mode = block.getFieldValue('MODE');
	const where = block.getFieldValue('WHERE');
	const array = generator.valueToCode(block, 'VALUE', Order.ATOMIC)
	const at = generator.valueToCode(block, 'AT', Order.ATOMIC)
	block.setWarningText()
	if (at == 0 && at !== "") {
		block.setWarningText('0 is not a valid index\nNote: The first item\'s index is 1')
 	}
	let index, code;
	switch(where) {
		case 'FROM_START': index = `${at}`; break;
		case 'FROM_END': index = `-${at}`; break;
		case 'FIRST': index = '1'; break;
		case 'LAST': index = '-1'; break;
		case 'RANDOM': index = `Random(1, ${array}.Length)`
	}
	switch(mode) {
		case 'GET': code = `${array}[${index}]`; break;
		case 'GET_REMOVE': code = `${array}.RemoveAt(${index})`; break;
		case 'REMOVE': return `${array}.RemoveAt(${index})`
	}
	return [code, Order.ATOMIC]
}

export function lists_getSublist(block, generator) {
	const where1 = block.getFieldValue('WHERE1');
	const at1 = generator.valueToCode(block, 'AT1', Order.ATOMIC)
	const where2 = block.getFieldValue('WHERE2');
	const at2 = generator.valueToCode(block, 'AT2', Order.ATOMIC)
	const array = generator.valueToCode(block, 'LIST', Order.ATOMIC)
	let index1, index2;
	switch(where1) {
		case 'FROM_START': index1 = `${at1}`; break;
		case 'FROM_END': index1 = `-${at1}`; break;
		case 'FIRST': index1 = '1'
	}
	switch(where2) {
		case 'FROM_START': index2 = `${at2}`; break;
		case 'FROM_END': index2 = `-${at2}`; break;
		case 'LAST': index2 = `${array}.Length`
	}
	const func = generator.provideFunction_('SubArr', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(arr, start, end) {
  SubArray := ""
  Loop (end - start + 1) {
    SubArray .= arr[start + A_Index - 1]
    if (A_Index < end - start + 1)
      SubArray .= ","
  }
  SubArray := StrSplit(SubArray, ",")
  return SubArray
}`) // TODO: Fix < copying as &lt;
	const code = func + `(${array}, ${index1}, ${index2})`
	return [code, Order.FUNCTION_CALL]
}

export function lists_isEmpty(block, generator) {
	const array = generator.valueToCode(block, 'VALUE', Order.ATOMIC)
	return [`(!${array}.Length)`, Order.ATOMIC]
}

export function lists_length(block, generator) {
	const array = generator.valueToCode(block, 'VALUE', Order.ATOMIC)
	return [`${array}.Length`, Order.ATOMIC]
}

export function lists_repeat(block, generator) {
	const item = generator.valueToCode(block, 'ITEM', Order.ATOMIC)
	const times = generator.valueToCode(block, 'NUM', Order.ATOMIC)
	const func = generator.provideFunction_('ArrayAddRepeated', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(item, times) {
  LoopArray := Array()
  Loop(times) {
	LoopArray.push(item)
  }
  return LoopArray
}`)
	const code = func + `(${item}, ${times})`
	return [code, Order.FUNCTION_CALL]
}

export function lists_reverse(block, generator) {
	const array = generator.valueToCode(block, 'LIST', Order.ATOMIC)
	const func = generator.provideFunction_('ReverseArray', `
ReverseArray(arr) {
  reversed := []
  for index, item in arr {
    reversed.InsertAt(1, item)
  }
  return reversed
}`)
	const code = func + `(${array})`
	return [code, Order.FUNCTION_CALL]
}

export function lists_setIndex(block, generator) {
	const mode = block.getFieldValue('MODE')
	const where = block.getFieldValue('WHERE')
	const array = generator.valueToCode(block, 'LIST', Order.ATOMIC)
	const at = generator.valueToCode(block, 'AT', Order.ATOMIC)
	const to = generator.valueToCode(block, 'TO', Order.ATOMIC)
	let index, code = '';
	switch(where) {
		case 'FROM_START': index = `${at}`; break;
		case 'FROM_END': index = `-${at}`; break;
		case 'FIRST': index = '1'; break;
		case 'LAST': index = '-1'; break;
		case 'RANDOM': index = `Random(1, ${array}.Length)`
	}
	if (mode == 'SET') {
		code = `${array}.RemoveAt(${index})\n`
	}
	code += `${array}.InsertAt(${index}, ${to})`
	return code
}

export function lists_sort(block, generator) {
	const type = block.getFieldValue('TYPE')
	const direction = block.getFieldValue('DIRECTION')
	const array = generator.valueToCode(block, 'LIST', Order.ATOMIC)
	const func = generator.provideFunction_('SortArray', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(arr, type, direction) {
  options := ""
  if (type == "NUMERIC") {
    options .= "N"
  } else if (type == "TEXT") {
	option .= "COff"
  } else {
	options .= "COn"
  }
  if (direction == -1) {
	options .= "R"
  }
  str := ""
  for index, item in arr
    str .= item . ","
  str := RTrim(str, ",")
  options .= "D,"
  str := Sort(str, options)
  return StrSplit(str, ",")
}`)
	const code = func + `(${array}, "${type}", ${direction})`
	return [code, Order.FUNCTION_CALL]
}

export function lists_split(block, generator) {
	const mode = block.getFieldValue('MODE')
	const input = generator.valueToCode(block, 'INPUT', Order.ATOMIC)
	const delim = generator.valueToCode(block, 'DELIM', Order.ATOMIC)
	let code;
	if (mode == 'JOIN'){
		const func = generator.provideFunction_('ListToText', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(arr, delim) {
  str := ""
  for index, item in arr
    str .= item . delim
  str := RTrim(str, delim)
  return str
}`)
		code = func + `(${input}, ${delim})`
		return [code, Order.FUNCTION_CALL]
	} else {
		code = `StrSplit(${input}, ${delim})`
		return [code, Order.ATOMIC]
	}
}

export function logic_boolean(block, generator) {
	const code = block.getFieldValue('BOOL') === 'TRUE' ? 'true' : 'false';
	return [code, Order.ATOMIC];
}

export function logic_negate(block, generator) {
	const code = '!' + generator.valueToCode(block, 'BOOL', Order.ATOMIC)
	return [code, Order.ATOMIC]
}

export function logic_ternary(block, generator) {
	const test = generator.valueToCode(block, 'IF', Order.ATOMIC)
	const then = generator.valueToCode(block, 'THEN', Order.ATOMIC)
	const otherwise = generator.valueToCode(block, 'ELSE', Order.ATOMIC)
	const code = `${test} ? ${then} : ${otherwise}`
	return [code, Order.ATOMIC]
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
	// https://www.autohotkey.com/boards/viewtopic.php?&p=265992#p265922
	const func = generator.provideFunction_('ATan2', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(y, x) {
  return DllCall("msvcrt\\atan2", "Double", y, "Double", x, "CDECL Double")
}
	`)
	const code = func + `(${y}, ${x})`
	return [code, Order.FUNCTION_CALL]
}

export function math_constant_noinf(block, generator) {
	const constant = block.getFieldValue('CONSTANT') // TODO: Defines variables at top then use down here
	let code;
	switch(constant) {
		case 'PI': code = 'ATan(1) * 4'; break;
		case 'E': code = 'Exp(1)'; break;
		case 'GOLDEN_RATIO': code = '(1 + Sqrt(5)) / 2'; break;
		case 'SQRT2': code = 'Sqrt(2)'; break;
		case 'SQRT1_2': code = 'Sqrt(1 / 2)';
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
	let divisor;
	if (prop == 'DIVISIBLE_BY') {
		divisor = generator.valueToCode(block, 'DIVISOR', Order.ATOMIC)
	}
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

export function math_on_list(block, generator) {
	const array = generator.valueToCode(block, 'LIST', Order.ATOMIC)
	const op = block.getFieldValue('OP')
	let code;
	if (op === 'SUM') {
		const func = generator.provideFunction_('ArraySum', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(arr) {
  sum := 0
  Loop(arr.Length) {
    sum += arr[A_Index]
  }
  return sum
}`)
		code = func + `(${array})`
	} else if (op === 'MIN' || op === 'MAX') {
		const func = generator.provideFunction_('ArrayMinMax', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(arr, MinMax) {
  val := arr[1]
  if (MinMax = "MIN") {
	Loop(arr.Length) {
	  if (val > arr[A_Index])
	    val := arr[A_Index]
	}
  } else if (MinMax = "MAX") {
    Loop(arr.Length) {
      if (val < arr[A_Index])
        val := arr[A_Index]
    }
  }
  return val
}`)
		code = func + `(${array}, ${op})`
	} else if (op === 'AVERAGE') {
		const func = generator.provideFunction_('ArrayAverage', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(arr) {
  val := 0
  Loop(arr.Length) {
	val += arr[A_Index]
  }
  return val /= arr.Length
}`)
		code = func + `(${array})`
	} else if (op === 'MEDIAN') {
		const func = generator.provideFunction_('ArrayMedian', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(arr) {
  str := ""
  for index, item in arr
    str .= item . ","
  arr := StrSplit(Sort(RTrim(str, ","), "ND,"), ",")
  pos := (arr.Length + 1) / 2
  if (pos != Round(pos)) {
    return (arr[Floor(pos)] + arr[Ceil(pos)]) / 2
  }
  return arr[pos]
}`)
		code = func + `(${array})`
	} else if (op === 'MODE') {
		const func = generator.provideFunction_('ArrayMode', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(arr) {
  ; TODO: MODE
}`)
		code = func + `(${array})`
	} else if (op === 'STD_DEV') {
		const func = generator.provideFunction_('ArrayStdDev', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(arr) {
  mean := sd2 := 0
  for val in arr
    mean += val
  
  mean /= arr.Length
  for val in arr
    sd2 += (val - mean) ** 2
  
  return sqrt(sd2 / arr.Length)
}`)
		code = func + `(${array})`
	} else if (op === 'RANDOM') {
		const func = generator.provideFunction_('ArrayRandom', `
${generator.FUNCTION_NAME_PLACEHOLDER_}(arr) {
  return randomItem := arr[Random(1, arr.Length)]
}`)
	code = func + `(${array})`
	}
	return [code, Order.FUNCTION_CALL]
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
		case 'ROUNDUP': round = 'Ceil'; break;
		case 'ROUNDDOWN': round = 'Floor'; break;
		default: round = 'Round'
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
	switch(operator) {
		case 'ROOT': code = `Sqrt(${number})`; break;
		case 'ABS': code = `Abs(${number})`; break;
		case 'NEG': code = `-(${number})`; break; // Works with both positive and negative
		case 'LN': code = `Ln(${number})`; break;
		case 'LOG10': code = `Log(${number})`; break;
		case 'EXP': code = `Exp(${number})`; break;
		case 'POW10': code = `10 ** ${number}`; break;
		case 'SIN': code = `Sin(${number})`; break;
		case 'COS': code = `Cos(${number})`; break;
		case 'TAN': code = `Tan(${number})`; break;
		case 'ASIN': code = `ASin(${number})`; break;
		case 'ACOS': code = `ACos(${number})`; break;
		case 'ATAN': code = `ATan(${number})`
	}
	return [code, Order.ATOMIC];
};

export function msgbox(block, generator) { // TODO (low prio): Fix spacing issue
	const body = generator.valueToCode(block, 'msgbox_body', Order.ATOMIC)
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

export const notrayicon = blockToText

export const persistent = blockToText

export const hash_clipboard_timeout = directive

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

export const msgbox_simple = singleInput
export const send = singleInput
export const setdefaultmousespeed = singleInput
export const sleep = singleInput


export function singleinstance(block, generator) {
	const type = block.getFieldValue('singleinstance_type').replace(/.*_/g, '')
    return `#SingleInstance ${type}`;
};

export function sendmode(block, generator) {
	const mode = block.getFieldValue('sendmode_type');
    return `SendMode("${mode}")`;
};

export function text(block, generator) {
	const textValue = block.getFieldValue('TEXT');
	return [`"${textValue}"`, Order.ATOMIC];
};

export function text_append(block, generator) {
	const varName = generator.getVariableName(block.getFieldValue('VAR'))
	const text = generator.valueToCode(block, 'TEXT', Order.ATOMIC)
	return varName + ' .= ' +  text
}

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
	let at, ranVar;
	if (locType != 'RANDOM') {
		at = generator.valueToCode(block, 'AT', Order.NONE)
	} else {
		ranVar = generator.getVariableName("RandomTemp")
	}
	let code;
	switch(locType) {
		case 'FROM_START': code = `SubStr(${text}, ${at}, 1)`; break;
		case 'FROM_END': code = `SubStr(${text}, ${-Math.abs(at)}, 1)`; break;
		case 'FIRST': code = `SubStr(${text}, 1, 1)`; break;
		case 'LAST': code = `SubStr(${text}, StrLen(${text}), 1)`; break;
		case 'RANDOM': code = `SubStr(${ranVar} := ${text}, Random(StrLen(${ranVar}))), 1)`
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
	const position = block.getFieldValue('END') === 'FIRST' ? '' : ',,, -1'
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
	return [`InputBox(${text}).Value`, Order.ATOMIC] // TODO: Use type
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
  DllCall("msvcrt.dll\\_wcsrev", "Str", &str, "CDECL")
  return str
}
	`)
	const code = func + `(${text})`
	return [code, Order.FUNCTION_CALL]
}

export function text_regexmatch(block, generator) {
	const source_string = generator.valueToCode(block, 'source_string', Order.ATOMIC)
	const regex_body = generator.valueToCode(block, 'regex_body', Order.ATOMIC).replace(/^"(.*)"$/, "$1")
	const regex_options = generator.valueToCode(block, 'regex_options', Order.ATOMIC).replace(/^"(.*)"$/, "$1")
	const fregex_options = regex_options != "" ? regex_options + ')' : ""
	const out_var = generator.valueToCode(block, 'out_var', Order.ATOMIC)
	let fout_var;
	if (out_var != "") {
		if (out_var == out_var.replace(/^"(.*)"$/, "$1")) { // Doesn't appear to be a way to limit a field input to variables
			fout_var = ', &' + out_var						// So this handles both, only text gets a valid name
		} else {
			fout_var = ', &' + generator.getVariableName(out_var.replace(/^"(.*)"$/, "$1"))
		}
	} else {
		fout_var = ""
	}
	let code = `RegExMatch(${source_string}, "${fregex_options}${regex_body}"${fout_var})`
	return [code, Order.ATOMIC]
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
	const varName = generator.getVariableName(block.getFieldValue('VAR'));
    return [varName, Order.ATOMIC]
};


export function variables_set(block, generator) {
	const argument0 = generator.valueToCode(block, 'VALUE', Order.NONE) || '0';
	const varName = generator.getVariableName(block.getFieldValue('VAR'))
	return `${varName} := ${argument0}`;
};

// TODO: For loop?
export const window_activate = window
export const window_activatebottom = window
export const window_active = window
export const window_close = window
export const window_exist = window
export const window_getclass = window
export const window_getclientpos = window
export const window_getcontrols = window
export const window_getcontrolshwnd = window
export const window_getcount = window
export const window_getid = window
export const window_getidlast = window
export const window_getlist = window
export const window_getminmax = window
export const window_getpid = window
export const window_getpos = window
export const window_getprocessname = window
export const window_getprocesspath = window
export const window_getstyle = window
export const window_getexstyle = window
export const window_gettext = window
export const window_gettitle = window
export const window_gettranscolour = window
export const window_gettransparent = window
export const window_hide = window
export const window_kill = window
export const window_maximize = window
export const window_minimize = window
export const window_move = window
export const window_movebottom = window
export const window_movetop = window
export const window_redraw = window
export const window_restore = window
export const window_setalwaysontop = window
export const window_setenabled = window
export const window_setregion = window
export const window_setstyle = window
export const window_setexstyle = window
export const window_show = window
export const window_wait = window
export const window_waitactive = window
export const window_waitnotactive = window
export const window_waitclose = window
function window(block, generator) { // TODO (low-prio): proper capitalisation
	const name = block.type.replace(/window_/, '').toTitleCase()
	const title = generator.valueToCode(block, 'title', Order.ATOMIC)
	const text = generator.valueToCode(block, 'text', Order.ATOMIC)
	const extitle = generator.valueToCode(block, 'ex_title', Order.ATOMIC)
	const extext = generator.valueToCode(block, 'ex_text', Order.ATOMIC)

	let special = '', timeout = ''
	if (name == 'Getclientpos' || name == 'Getpos' || name == 'Move') {
		const x = generator.valueToCode(block, 'x', Order.ATOMIC)
		const y = generator.valueToCode(block, 'y', Order.ATOMIC)
		const w = generator.valueToCode(block, 'w', Order.ATOMIC)
		const h = generator.valueToCode(block, 'h', Order.ATOMIC)
		special = `${x},${y},${w},${h},`

		if (name == 'Getclientpos') {
			special = `${x.addXFix('&')},${y.addXFix('&')},${w.addXFix('&')},${h.addXFix('&')},`
		}
	}

	if (name.slice(0, 3) == 'Set') {
		const setting = generator.valueToCode(block, 'setting', Order.ATOMIC)
		special = setting + ','
	}

	if (name.slice(0, 4) == 'Wait') {
		const timeout = generator.valueToCode(block, 'timeout', Order.ATOMIC)
		timeout = timeout + ','
	}

	//try {
		return [`Win${name}(${title},${text},${extitle},${extext})`, Order.ATOMIC]
	//} catch (error) {
	//	return `Win${name}(${special}${title},${text},${timeout}${extitle},${extext})`
	//}
}

export const window_minimizeall = blockToText
export const window_minimizeallundo = blockToText

function blockToText(block, generator) {
	return generator.getRealName(block.type.replace(/window_/, ''))
}

function singleInput(block, generator) {
	const name = generator.getRealName(block.type.toTitleCase())
	const input = generator.valueToCode(block, 'INPUT', Order.ATOMIC)
	return `${name}(${input})`
}

function directive(block, generator) {
	const name = generator.getRealName(block.type.toTitleCase())
	const input = generator.valueToCode(block, 'INPUT', Order.ATOMIC)
	return `${name} ${input}`
}

/**
 * Adds the specified prefix and suffix to
 * the object's string if it is not empty
 * @param {string} prefix Text that goes before the string
 * @param {string} suffix Text that goes after the string
 * @returns The object's string in between the prefix and suffix
 */
String.prototype.addXFix = function(prefix = '', suffix = '') {
    if (this.valueOf() !== '') {
        return prefix + this.valueOf() + suffix
    } else {
        return ''
    }
}

String.prototype.toTitleCase = function() { // Just to make output look nice 
	return this.valueOf().replace(/\S+/g, function(text) {return text[0].toUpperCase() + text.substring(1).toLowerCase()})
}

/*
TODO:
Make below deal with traling commas
*/

String.prototype.addPreSpace = function(comma) {
	comma = comma === true ? ',' : ''
	if (this.valueOf() === '') {
		return ''
	} else {
		return comma + ' ' + this.valueOf()
	}
}