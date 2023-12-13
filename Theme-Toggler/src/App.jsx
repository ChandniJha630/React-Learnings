import React, { useState, useEffect } from 'react';
import Card from './components/card';
import ThemeButton from './components/ThemeButton';
import { ThemeProvider } from './context/theme';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    // Instead of directly manipulating the DOM, manage classes using React state.
    // Add or remove classes in the JSX based on the themeMode.
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className={`theme-${themeMode} w-full h-full`}>
        {/* Rest of your content */}
        <ThemeButton />
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
