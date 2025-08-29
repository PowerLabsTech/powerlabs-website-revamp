export const createRouteFromTitle = (text: string) => {
  const newText = text?.split(' ').join('-');
  return newText;
};
