const searchInput = document.getElementById('search');
const submitBtn = document.getElementById('github-form');
const userList = document.querySelector('#user-list');

submitBtn.addEventListener('submit', userSearch);

function userSearch(event){
  event.preventDefault();
  console.log(searchInput.value) //grab textfield input
  fetch(`https://api.github.com/search/users?q=${searchInput.value}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json'
    }
  })
  .then(resp => resp.json())
  // .then(resp => { console.log(resp.items[0]);
  .then(resp => {
    for(let i = 0; i < 1000; i++) {
      const result = document.createElement('li');
      userList.append(result);  
      const avatar   = resp.items[i].avatar_url;
      const name     = resp.items[i].login;
      const htmlText = resp.items[i].html_url;
      // Avatar image
      const avatarImg = document.createElement('img');
      avatarImg.src = avatar; // make image
      // Profile link
      const profile = document.createElement('a');
      profile.textContent = "View profile";
      profile.href = htmlText; 
      userList.append(profile);
      // Append avatar and name to DOM
      result.innerText = `${avatarImg} | ${name}`;
    }
  })
}