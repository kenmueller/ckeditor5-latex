import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'

import inlineIcon from '../icons/inline.svg'
import centeredIcon from '../icons/centered.svg'

export default class extends Plugin {
	init() {
		this.addButton('inlineLatex', 'Inline LaTeX', inlineIcon, () => {
			this.execCommand('insertText', `\\(${getSelection()}\\)`)
			this.moveCursor(-2)
		})
		
		this.addButton('centeredLatex', 'Centered LaTeX', centeredIcon, () => {
			this.execCommand('insertText', `$$${getSelection()}$$`)
			this.moveCursor(-2)
		})
	}
	
	addButton(command, label, icon, onClick) {
		this.editor.ui.componentFactory.add(command, locale => {
			const button = new ButtonView(locale)
			
			button.set({ label, icon, tooltip: true })
			button.on('execute', onClick)
			
			return button
		})
	}
	
	execCommand(command, payload = null) {
		document.execCommand(command, false, payload)
	}
	
	moveCursor(characters) {
		const selection = getSelection()
		
		if (selection.rangeCount > 0) {
			const textNode = selection.focusNode
			const newOffset = selection.focusOffset + characters
			
			selection.collapse(textNode, Math.min(textNode.length, newOffset))
		}
	}
}
