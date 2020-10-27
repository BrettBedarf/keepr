import React from 'react';
import NotesList from './NotesList';
import notes from './notes';

export default function NotesContainer() {
	return <NotesList notes={notes} />;
}
