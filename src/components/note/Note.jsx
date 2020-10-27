import React from 'react';

function Note(props) {
	return (
		<li className='note'>
			<h1 className='note-title'>{props.note.title}</h1>
			<p className='note-content'>{props.note.content}</p>
		</li>
	);
}

export default Note;
