import React, { useState } from 'react';

function CreateArea(props) {
	const [inputText, setInput] = useState({});

	function handleChange(event) {
		const { name, value } = event.target;

		setInput({
			...inputText,
			[name]: value,
		});
	}

	function submitNote(e) {
		props.addNote(inputText);
		//set all current properties to empty strings
		const inputToClear = { ...inputText };
		Object.keys(inputToClear).forEach(key => (inputToClear[key] = ''));
		setInput(inputToClear);
		e.preventDefault();
	}

	return (
		<div>
			<form onSubmit={submitNote}>
				<input
					name='title'
					placeholder='Title'
					onChange={handleChange}
					value={
						typeof inputText.title !== 'undefined'
							? inputText.title
							: ''
					}
				/>
				<textarea
					name='content'
					placeholder='Take a note...'
					rows='3'
					onChange={handleChange}
					value={
						inputText.content !== 'undefined'
							? inputText.content
							: ''
					}
				/>
				<button type='submit'>Add</button>
			</form>
		</div>
	);
}

export default CreateArea;
