import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NotesContainer from './note/NotesContainer.jsx';

function App() {
	return (
		<div>
			<Header />
			<NotesContainer />
			<Footer />
		</div>
	);
}

export default App;
