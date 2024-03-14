import React from 'react';
import HomeClient from './client';

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
	return (
		<HomeClient />
	);
};

export default Home;
