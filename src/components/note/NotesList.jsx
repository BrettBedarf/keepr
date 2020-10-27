import React from 'react';
import Note from './Note';

export default function NotesList(props) {
	return (
		<ul className='notes-list'>
			{props.notes.map(note => {
				return <Note key={note.key} note={note} />;
			})}
		</ul>
	);
}
