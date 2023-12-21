import * as Blockly from 'blockly';

export const ahkGen = new Blockly.Generator('AutoHotkey');

const Order = {
	ATOMIC: 0,
	ORDER_NONE: 99
	// not exactly sure what values are needed
	// START: 1,
	// HOTKEYS: 5,
	// FUNCS: 10,
	// GUI: 15,
}

ahkGen.addReservedWords('and, as, continue, else, false, if, true'); // feel like theres more, could find a list
ahkGen.variableDB_ = new Blockly.Names(ahkGen.RESERVED_WORDS_);

/*
This function was added to try and fix variable name
Didn't fix, but keeping to see if it might be needed
Variables still "work" because the id stays the same
*/
ahkGen.init() == function(workspace) {
    _super.init.call(this, workspace);
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
    // Add developer variables (not created or named by the user).
    var devVarList = Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
        defvars.push(this.nameDB_.getName(devVarList[i], Names.DEVELOPER_VARIABLE_TYPE) +
            ' = None');
    }
    // Add user variables, but only ones that are being used.
    var variables = Variables.allUsedVarModels(workspace);
    for (var i = 0; i < variables.length; i++) {
        defvars.push(this.getVariableName(variables[i].getId()) + ' = None');
    }
    this.definitions_['variables'] = defvars.join('\n');
    this.isInitialized = true;
}
//ahkGen.init()


ahkGen.forBlock['gui_add'] = function(block, generator) {
	return `; TODO: Make this work\n; Likely need separate blocks for each type`
}

ahkGen.forBlock['gui_header'] = function(block, generator) {
	const name = block.getFieldValue('gui_input_name');
	const varName = name.replace(/\W/g, '');
	return `${varName} := Gui(, "${name}")`//[`${varName} := Gui(, "${name}")`, Order.GUI]
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
	return `${key}:: {\n${statement_members}}`;
}

ahkGen.forBlock['math_constant'] = function(block, generator) {
	const constant = block.getFieldValue('CONSTANT')
	if (constant === 'PI') {
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
	return code;
}

ahkGen.forBlock['math_modulo'] = function(block, generator) {
	const dividend = generator.valueToCode(block, 'DIVIDEND', Order.ATOMIC);
    const divisor = generator.valueToCode(block, 'DIVISOR', Order.ATOMIC);
    return `Mod(${dividend}, ${divisor})`;
};

ahkGen.forBlock['math_number'] = function(block, generator) {
	return [String(block.getFieldValue('NUM')), Order.ATOMIC];
};

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
    return `Random(${min}, ${max})`;
};

ahkGen.forBlock['procedures_defnoreturn'] = function(block, generator) { // Unfinished
	const funcName = block.getFieldValue('NAME');
	var args = [];
	var variables = block.getVars();
	for (var i = 0; i < variables.length; i++) {
		args[i] = ahkGen.variableDB_.getName(variables[i], Blockly.VARIABLE_CATEGORY_NAME);
	}
	const statement_members = "nil"//generator.statementToCode(block, 'procedures_defnoreturn_blocks', true);
    return `${funcName}(${args}) {\n${statement_members}\n}`;
};

ahkGen.forBlock['singleinstance'] = function(block, generator) {
	const type = block.getFieldValue('singleinstance_type').replace(/.*_/g, '')
    return `#SingleInstance ${type}`;
};

ahkGen.forBlock['send'] = function(block, generator) {
	try { // Is this the best way?
		var keys = generator.valueToCode(block, 'send_keys', Order.ATOMIC);
	} catch {
		var keys = generator.statementToCode(block, 'send_keys', Order.ATOMIC);
	}
    return `Send(${keys})`;
};

ahkGen.forBlock['sleep'] = function(block, generator) {
	const delay = block.getFieldValue('sleep_delay');
	const sanitised = delay.replace(/\D/g, ''); // Only call for non variables
	return `sleep(${sanitised})`;
};

ahkGen.forBlock['text'] = function(block, generator) {
	const textValue = block.getFieldValue('TEXT');
	return [`"${textValue}"`, Order.ATOMIC];
};

ahkGen.forBlock['text_join'] = function(block, generator) {
	const values = [];
	for (let i = 0; i < block.itemCount_; i++) {
		const valueCode = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC);
		if (valueCode) {
			values.push(valueCode);
		}
	}
	const concat = values.toString().replace(/,/g, ' . ');
    return concat;
};

ahkGen.forBlock['variables_get'] = function(block, generator) {
	const varName = ahkGen.variableDB_.getName(block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
    return `${varName}`;
};


ahkGen.forBlock['variables_set'] = function(block, generator) {
	const argument0 = ahkGen.valueToCode(block, 'VALUE', Order.ORDER_NONE) || '0';
	const varName = ahkGen.variableDB_.getName(block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
	return `${varName} := ${argument0}`; // TODO: Print actual varName
};

ahkGen.scrub_ = function(block, code, thisOnly) {
	const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
	if (nextBlock && !thisOnly) {
	  return code + '\n' + ahkGen.blockToCode(nextBlock);
	}
	return code;
};