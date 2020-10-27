import React from 'react';

const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
	return (
		<footer>
			<p className='copywrite'>&copy; {currentYear} Brett Bedarf</p>
		</footer>
	);
}

export default Footer;
