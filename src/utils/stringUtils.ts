export const createRouteFromTitle = (text: string) => {
  const newText = text?.split(' ').join('-');
  return newText;
};

export const displayFriendlyDate = (date: string) => {
  const formatted = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return formatted;
};
