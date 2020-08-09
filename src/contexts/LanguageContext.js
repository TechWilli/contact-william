import React, { useState, createContext, useEffect } from 'react';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {

	const [language, setLanguage] = useState('');
	
	useEffect(() => {
		const storedLang = localStorage.getItem('language');
		setLanguage(JSON.parse(storedLang) || 'PT-BR');

	}, []);

	const translateLanguage = lang => {
		setLanguage(lang);
		localStorage.setItem('language', JSON.stringify(lang));
	}

	return (
		<LanguageContext.Provider value={{ language, translateLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export default LanguageProvider;