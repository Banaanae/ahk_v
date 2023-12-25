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

ahkGen.addReservedWords('and, as, continue, else, false, if, true'); // TODO: Complete list

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
        defvars.push(this.nameDB_.getName(devVarList[i], Names.DEVELOPER_VARIABLE_TYPE) +
            ' = None');
    }
    // Add user variables, but only ones that are being used.
    var variables = Blockly.Variables.allUsedVarModels(workspace);
    for (var i = 0; i < variables.length; i++) {
        defvars.push(this.getVariableName(variables[i].getId()) + ' = None');
    }
    this.definitions_['variables'] = defvars.join('\n');
    this.isInitialized = true;
}

ahkGen.forBlock['controls_if'] = function(block, generator) { // Unfinished
	const code = "if"
	return code;
}

ahkGen.forBlock['controls_repeat_ext'] = function(block, generator) {
	const times = generator.valueToCode(block, 'TIMES', Order.NONE)
	const statement_members = generator.statementToCode(block, 'DO')
	return `Loop(${times}) {\n${statement_members}\n}`
}

ahkGen.forBlock['gui_add_text'] = function(block, generator) {
	const text = generator.valueToCode(block, 'gui_add_text_text')
	const x = generator.valueToCode(block, 'gui_add_text_x')
	const y = generator.valueToCode(block, 'gui_add_text_y')
	const w = generator.valueToCode(block, 'gui_add_text_w')
	const h = generator.valueToCode(block, 'gui_add_text_h')
	const name = generator.valueToCode(block, 'gui_add_text_name')
	const rName = name !== '' ? `${name} := ` : ''
	return `;TODO: Parse this better`
}

ahkGen.forBlock['gui_header'] = function(block, generator) { // TODO: Make blocks under here inherit gui name
	const name = block.getFieldValue('gui_input_name');
	const varName = name.replace(/\W/g, ''); // TODO: Check against reserved words
	return `${varName} := Gui(, "${name}")`
}

ahkGen.forBlock['gui_show'] = function(block, generator) { //TODO: Fix this mess (use less lines)
	const name = block.getFieldValue('gui_show_name');
    const varName = name.replace(/\W/g, '');
    const x = block.getFieldValue('gui_show_x');
	const nx = (x !== '') ? `x${x} ` : '';
    const y = block.getFieldValue('gui_show_y');
	const ny = (y!== '')? `y${y} ` : '';
    const w = block.getFieldValue('gui_show_w');
	const nw = (w!== '')? `w${w} ` : '';
    const h = block.getFieldValue('gui_show_h');
	const nh = (h!== '')? `h${h} ` : '';
    return `${varName}.Show("${nx}${ny}${nw}${nh}")`;
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

ahkGen.forBlock['math_arithmetic'] = function(block, generator) {
	const arg0 = generator.valueToCode(block, 'A', Order.ATOMIC);
	const arg1 = generator.valueToCode(block, 'B', Order.ATOMIC);
	const operator = block.getFieldValue('OP');
	let op;
	switch(operator) {
		case 'ADD': op = ' + '; break;
		case 'MINUS': op = ' - '; break;
		case 'MULTIPLY': op = ' * '; break;
		case 'DIVIDE': op = ' / '; break;
		case 'POWER': op = ' ** '
	}
	return [`${arg0}${op}${arg1}`, Order.ATOMIC];
}

ahkGen.forBlock['math_constant'] = function(block, generator) {
	const constant = block.getFieldValue('CONSTANT') // TODO: Defines variables at top then use down here
	if (constant === 'PI') { // change to switch
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

ahkGen.forBlock['math_modulo'] = function(block, generator) {
	const dividend = generator.valueToCode(block, 'DIVIDEND', Order.ATOMIC);
    const divisor = generator.valueToCode(block, 'DIVISOR', Order.ATOMIC);
    return [`Mod(${dividend}, ${divisor})`, Order.ATOMIC]
};

ahkGen.forBlock['math_number'] = function(block, generator) {
	return [String(block.getFieldValue('NUM')), Order.ATOMIC];
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
	return [`Round(${number}, ${places})`]
}

ahkGen.forBlock['math_single'] = function(block, generator) { // Unfinished
	const operator = block.getFieldValue('OP');
	if (operator === 'NEG') {
		var code = '-';
	}
	return [code, Order.ATOMIC];
};

ahkGen.forBlock['math_random_int'] = function(block, generator) {
	const min = generator.valueToCode(block, 'FROM', Order.ATOMIC);
    const max = generator.valueToCode(block, 'TO', Order.ATOMIC);
    return [`Random(${min}, ${max})`, Order.ATOMIC]
};

ahkGen.forBlock['msgbox'] = function(block, generator) { // TODO (low prio): Fix spacing issue
	const title = generator.valueToCode(block, 'msgbox_title', Order.ATOMIC)
	const body = generator.valueToCode(block, 'msgbox_body', Order.ATOMIC)
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

ahkGen.forBlock['procedures_defnoreturn'] = function(block, generator) { // Unfinished
	const funcName = block.getFieldValue('NAME');
	var args = [];
	var variables = block.getVars();
	for (var i = 0; i < variables.length; i++) {
		args[i] = ahkGen.variableDB_.getName(variables[i], Order.ATOMIC);
	}
	var params = [];
	const statement_members = generator.statementToCode(block, 'procedures_defnoreturn_blocks', true);
    return `${funcName}(${args}) {\n${statement_members}\n}`;
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
	const sanitised = delay.replace(/\D/g, ''); // Only call for non variables
	return `Sleep(${delay})`;
};

ahkGen.forBlock['text'] = function(block, generator) {
	const textValue = block.getFieldValue('TEXT');
	return [`"${textValue}"`, Order.ATOMIC];
};

ahkGen.forBlock['text_multiline'] = function(block, generator) {
	const text = block.getFieldValue('TEXT').replace(/\n/g, '`n');
	return [`"${text}"`, Order.ATOMIC]
}

ahkGen.forBlock['text_join'] = function(block, generator) {
	const values = [];
	for (let i = 0; i < block.itemCount_; i++) {
		const texts = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC);
		if (texts) {
			values.push(texts);
		}
	}
	const concat = values.toString().replace(/,/g, ' . '); // Doesn't work if , is already in string
	// Potential fix: change arrray separator to " . "
    return [concat, Order.ATOMIC]
};

ahkGen.forBlock['variables_get'] = function(block, generator) {
	const varName = ahkGen.variableDB_.getName(block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
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