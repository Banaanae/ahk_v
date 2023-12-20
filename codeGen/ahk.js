import * as Blockly from 'blockly';

export const ahkGen = new Blockly.Generator('AutoHotkey');

const Order = {
	ATOMIC: 0,
}

ahkGen.forBlock['gui_header'] = function(block, generator) {
	const name = block.getFieldValue('gui_input_name');
	const varName = name.replace(/\W/g, '');
	return `${varName} := Gui(, "${name}")`;
}

ahkGen.forBlock['hotkey'] = function(block, generator) {
	const key = block.getFieldValue('hotkey_key');
	const statement_members = generator.statementToCode(block, 'hotkey_blocks');
	return `${key}:: {\n${statement_members}}`;
}

ahkGen.forBlock['math_number'] = function(block) {
	return [String(block.getFieldValue('NUM')), Order.ATOMIC];
};

ahkGen.forBlock['sleep'] = function(block, generator) {
	const delay = block.getFieldValue('sleep_delay');
	return `sleep(${delay})\n`;
};

ahkGen.forBlock['text'] = function(block) {
	const textValue = block.getFieldValue('TEXT');
	return [`"${textValue}"`, Order.ATOMIC];
};