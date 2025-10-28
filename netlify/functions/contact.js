exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);

  console.log('Message received:', body);

  // Simulate saving to a database
  // For demo purposes, we just log it. In real project, could integrate Supabase or Airtable

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Your message has been received!' })
  };
};
