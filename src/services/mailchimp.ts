export async function subscribe(email: string, newsLetterType?: string) {
  if (!email) return;
  // Call your API to subscribe the user
  const response = await fetch('/api/services', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, newsLetterType }),
  });

  return response;
}
