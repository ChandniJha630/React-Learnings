import React from 'react';
import useTheme from '../context/theme';

function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
   
      <input
        type="checkbox"
        id="themeToggle"
        onChange={onChangeBtn}
      />
     
  );
}

export default ThemeButton;
