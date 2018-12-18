import React, { Component } from 'react'
import { FaTrashAlt, FaPencilAlt, FaSave } from 'react-icons/fa'  


class Note extends Component {
	constructor(props) {
		super(props)
		this.state = {
			editing: false,
			noteText: "Learn React"
		}
		this.renderForm = this.renderForm.bind(this);
		this.renderNote = this.renderNote.bind(this);
		this.save = this.save.bind(this);
		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
	}
	edit() {
		this.setState( {
			editing: true,
			noteText: this.state.noteText }
		);
		//alert('editing note')
	}
	remove() {
		alert('removing note')
	}

	save() {
		alert(this._newText.value)
		this.setState( {
			editing: false,
			noteText: this._newText.value }
		);
	}

	renderForm() {
		return (
			<div className="note">
			<form>
				<textarea ref={ input => this._newText = input}></textarea>
				<button onClick={this.save}><FaSave /> </button>
			</form>
			</div>
		)
	}

	renderNote() {
		return (
			<div className="note">
				<p>{this.state.noteText}</p>
				<span>
					<button onClick={this.edit} id="edit">
					<FaPencilAlt />
					</button>
					<button onClick={this.remove} id="remove">
					<FaTrashAlt />
					</button>
				</span>
				
			</div>
		)
	}

	render() {
		if(!this.state.editing)
		return this.renderNote();
		else
		return this.renderForm();
	}
}

export default Note