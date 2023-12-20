import * as Blockly from 'blockly';
import {basicBlocks} from './blocks/basic';
import {guiBlocks} from './blocks/gui';
import {ahkGen} from './codeGen/ahk';
import {toolbox} from './toolbox';
import './index.css';

Blockly.common.defineBlocks(basicBlocks);
Blockly.common.defineBlocks(guiBlocks);

const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('blocklyDiv');
const workspace = Blockly.inject(blocklyDiv, {toolbox});
const storageKey = 'ahk_v'

function save(workspace) {
	const data = Blockly.serialization.workspaces.save(workspace);
	window.localStorage?.setItem(storageKey, JSON.stringify(data));
};

function load(workspace) {
	const data = window.localStorage?.getItem(storageKey);
	if (!data) return;

	Blockly.Events.disable();
	Blockly.serialization.workspaces.load(JSON.parse(data), workspace, false);
	Blockly.Events.enable();
};


const runCode = () => {
	const code = ahkGen.workspaceToCode(workspace);
	codeDiv.innerText = code;
};

load(workspace);
runCode();

workspace.addChangeListener((event) => {
	if (event.isUiEvent) return;
	save(workspace);
});


workspace.addChangeListener((event) => {
	if (event.isUiEvent || event.type == Blockly.Events.FINISHED_LOADING || workspace.isDragging()) {
		return
	}
	runCode();
});
