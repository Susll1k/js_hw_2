let username = '';
const loginSection = document.getElementById('login-section');
const postSection = document.getElementById('post-section');
const postsContainer = document.getElementById('posts');

function login() {
  const nameInput = document.getElementById('username');
  if (nameInput.value.trim()) {
    username = nameInput.value.trim();
    alert(`Welcome, ${username}!`);
    loginSection.style.display = 'none';
    postSection.style.display = 'block';
  }
}

function createPost() {
  const title = document.getElementById('post-title').value.trim();
  const content = document.getElementById('post-content').value.trim();

  if (title && content) {
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `
      <h3>${title}</h3>
      <p>${content}</p>
      <small>Posted by ${username}</small>
    `;
    postsContainer.appendChild(post);

    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
  }
}