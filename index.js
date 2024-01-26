// https://github.com/google/blockly-samples/tree/master/examples/custom-generator-codelab <3
import * as Blockly from 'blockly';
import {setup} from './blocks/setup';
import {script} from './blocks/script';
import {kbAndMouse} from './blocks/kbm';
import {hotkeys} from './blocks/hotkeys';
import {win} from './blocks/window';
import {text} from './blocks/text';
import {math} from './blocks/math';
import {gui} from './blocks/gui';
import {builtInVars} from './blocks/builtInVars';
import {ahkGen} from './codeGen/generator';
import {toolbox} from './toolbox';
import './index.css';

// TODO: Dynamic tooltips
// TODO (Once majority blocks done): Beautify json (Tabs Size 4)
Blockly.common.defineBlocks(setup);
Blockly.common.defineBlocks(script);
Blockly.common.defineBlocks(kbAndMouse);
Blockly.common.defineBlocks(hotkeys);
Blockly.common.defineBlocks(win);
Blockly.common.defineBlocks(text);
Blockly.common.defineBlocks(math);
Blockly.common.defineBlocks(gui);
Blockly.common.defineBlocks(builtInVars);

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