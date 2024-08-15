export const isDarkTheme = () => {
  const url = window.location.href;

  return String(url).includes('theme:dark');
};
