import * as Blockly from 'blockly';

export const ahkGen = new Blockly.Generator('AutoHotkey');

const Order = {
	INIT: 0,
	START: 1,
	HOTKEYS: 5,
	FUNCS: 10,
	GUI: 15,
}

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

ahkGen.forBlock['math_number'] = function(block) {
	return [String(block.getFieldValue('NUM')), Order.ATOMIC];
};

ahkGen.forBlock['singleinstance'] = function(block, generator) {
	const type = block.getFieldValue('singleinstance_type').replace(/.*_/g, '')
    return `#SingleInstance ${type}`;
};

ahkGen.forBlock['sleep'] = function(block, generator) {
	const delay = block.getFieldValue('sleep_delay');
	const sanitised = delay.replace(/\D/g, ''); // Only call for non variables
	return `sleep(${sanitised})`;
};

ahkGen.forBlock['text'] = function(block) {
	const textValue = block.getFieldValue('TEXT');
	return [`"${textValue}"`, Order.ATOMIC];
};

ahkGen.scrub_ = function(block, code, thisOnly) {
	const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
	if (nextBlock && !thisOnly) {
	  return code + '\n' + ahkGen.blockToCode(nextBlock);
	}
	return code;
};