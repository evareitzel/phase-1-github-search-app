
// Elements
const searchInput = document.getElementById('search');
// console.log(searchInput);
const submitBtn = document.getElementById('github-form');
// getElementsByName('submit')[0];
console.log(submitBtn);
submitBtn.addEventListener('submit', userSearch) 

const userList = document.querySelector('#user-list');
// userListContainer.append(userList);
  
// header: Accept: application/vnd.github.v3+json


function userSearch(event){
  event.preventDefault();
//grab text input
  console.log(searchInput.value);
  fetch(`https://api.github.com/search/users?q=${searchInput.value}`) 
  // console.log(`https://api.github.com/search/users?q=${searchInput}`);// append it to fetch "http://"
  // .then(resp => resp.json())
  .then(resp => resp.json())
  // .then(resp => resp.items[0])
  .then(resp => {
    for (let i = 0; i < 3; i++) {
      const result = document.createElement('li');
      userList.append(result); 
  
      const avatar   = resp.items[i].avatar_url; // avatar.value
      const login    = resp.items[i].login;
      const htmlText = resp.items[i].html_url;
      const html = login.link(htmlText); 

      const avatarImg = document.createElement('img');
      avatarImg.innerHTML = avatar.value;
      userList.append(avatarImg); 

      result.innerText = `${avatarImg} | ${login} | ${html}\n\n`;
    }
  })
}

  // .then(resp=> console.log(resp.items[0])); // slice, map, forEach (appends to DOM)
      
    // option to add helper function here OR put anonymous functon inside 2nd .then

// get responses
// create display element - div container
  // add name, avater, link for ea (top 3...)
// append to DOM


// search by name 

//// Deliverables
  // search GitHub for users by name
  // display results onscreen
  // click on a user => show repos for user
  // submit -take input value, search GitHub for user matches using user search endpoint
  // using search results, display user info
    // username
    // avater
    // profile link

    // click on user 
      // send request to user repos endpoint
      // return data about user repos
      // display user repos w response from User Repos Endpoint  
