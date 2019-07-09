export const fetchPosts = async () => {
  try {
    const res = await fetch('http://localhost:5000/posts');
    const data = await res.json();
    return data;
  } catch (error) {
    const data = error.response.data;
    return data;
  }

}

export const insertPost = async post => {
  const res = await fetch('http://localhost:5000/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  return data;
}