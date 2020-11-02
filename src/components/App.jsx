import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
	const [notes, setNotes] = useState([]);

	function addNote(note) {
		console.log('adding note');
		setNotes(prev => {
			return [...prev, note];
		});
		console.log(notes);
	}

	function deleteNote(id) {
		setNotes([...notes.slice(0, id), ...notes.slice(id + 1, notes.length)]);
	}

	return (
		<div>
			<Header />
			<CreateArea addNote={addNote} />
			<div className='notes-area'>
				{notes.map((note, index) => (
					<Note
						key={index}
						id={index}
						title={note.title}
						content={note.content}
						deleteNote={deleteNote}
					/>
				))}
			</div>

			<Footer />
		</div>
	);
}

export default App;
