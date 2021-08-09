import React, { useEffect } from 'react';
import Header from './header';
import Photos from './photos';

export default function profile({ username }) {
	return (
		<>
			<Header />
			<Photos />
		</>
	)
}