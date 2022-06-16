const searchInput = document.getElementById('search');
const submitBtn = document.getElementById('github-form');
const userList = document.querySelector('#user-list');

submitBtn.addEventListener('submit', fetchInfo);

function fetchInfo(event) {
  event.preventDefault();
  fetch(`https://api.github.com/search/users?q=${searchInput.value}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json'
    }
  })
    .then(resp => resp.json())
    // .then(resp => { console.log(resp.items);
    .then(resp => resp.items.forEach(userSearch));
}

function userSearch(user) {
// console.log(user);

    // Avatar
    const avatar = document.createElement('img');
    avatar.src = user.avatar_url; // make image

    // Name
    const name = document.createElement('h3');
    name.textContent = user.login;

    // Profile link
    const profile = document.createElement('a');
    profile.textContent = "View profile";
    profile.href = user.html_url;
    
    // Append user to DOM
    userList.append(avatar, name, profile,);
  }