  //avatar
  const avatar = document.createElement('img')
  avatar.src = userInfo.avatar_url


// Elements
const searchInput = document.getElementById('search');
// console.log(searchInput);
const submitBtn = document.getElementById('github-form');
// getElementsByName('submit')[0];
console.log(submitBtn);
submitBtn.addEventListener('submit', userSearch) 
const userList = document.querySelector('#user-list');
  
// header: Accept: application/vnd.github.v3+json


function userSearch(event){
  event.preventDefault();
//grab text input
  console.log(searchInput.value);
  fetch(`https://api.github.com/search/users?q=${searchInput.value}`) 
  // console.log(`https://api.github.com/search/users?q=${searchInput}`);// append it to fetch "http://"
  // .then(resp => resp.json())

  // header {
  //   header: Accept: application/vnd.github.v3+json
  // }

  .then(resp => resp.json())
  // .then(resp => resp.items[0])
  .then(resp => {
    forEach(let i = 0; i < 3; i++) {
      const result = document.createElement('li');
      userList.append(result); 
  
      const avatar   = resp.items[i].avatar_url; // avatar.value
      const login    = resp.items[i].login;
      const htmlText = resp.items[i].html_url;
      const html     = login.link(htmlText); 

      const avatarImg = document.createElement('img');
      avatarImg.innerHTML = avatar.value;

      result.innerText = `${avatarImg} | ${login} | ${html}\n\n`;
    }
  })
}



      //////////////////////////////////////////////////////////
      
// // Elements
// const searchInput = document.getElementById('search');
// // console.log(searchInput);
// const submitBtn = document.getElementById('github-form');
// // getElementsByName('submit')[0];
// console.log(submitBtn);
// submitBtn.addEventListener('submit', userSearch) 
// const userList = document.querySelector('#user-list');
  
// // header: Accept: application/vnd.github.v3+json


// function userSearch(event){
//   event.preventDefault();
// //grab text input
//   console.log(searchInput.value);
//   fetch(`https://api.github.com/search/users?q=${searchInput.value}`) 
//   // console.log(`https://api.github.com/search/users?q=${searchInput}`);// append it to fetch "http://"
//   // .then(resp => resp.json())
//   header {
//     header: Accept: application/vnd.github.v3+json
//   }
//   .then(resp => resp.json())
//   // .then(resp => resp.items[0])
//   .then(resp => {
//     forEach(let i = 0; i < 100; i++) {
//       const result = document.createElement('li');
//       userList.append(result); 
  
//       const avatar   = resp.items[i].avatar_url; // avatar.value
//       const login    = resp.items[i].login;
//       const htmlText = resp.items[i].html_url;
//       const html = login.link(htmlText); 

//       const avatarImg = document.createElement('img');
//       avatarImg.innerHTML = avatar.value;

//       result.innerText = `${avatarImg} | ${login} | ${html}\n\n`;
//     }
//   })
// }

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


////////////////////////////////////////////////

// const form = document.getElementById('github-form')
// form.addEventListener('submit', handleSubmit)

// const button = document.createElement('button')
// button.textContent = 'Search for Users'
// const breakinpage = document.createElement('br')
// document.querySelector('h2').append(breakinpage, button)
// button.addEventListener('click', handleToggleClick)
// function handleSubmit(e) {
//     e.preventDefault()
//     document.querySelector('#user-list').innerHTML = ''
//     document.querySelector('#repos-list').textContent = ''
//     if (button.innerText === 'Search for Users') {
//         fetchInfo(e.target.search.value)
//     }
//     if (button.innerText === 'Search for Repos') {
//         fetchRepoSearch(e.target.search.value)
//     }
// }
// function fetchInfo(searchedName) {
//     fetch(`https://api.github.com/search/users?q=${searchedName}`, {
//         headers: {
//             Accept: 'application/vnd.github.v3+json'
//         }
//     })
//     .then (resp => resp.json())
//     .then (data => {
//         console.log(data)
//         document.querySelector('#user-list').innerHTML = ''
//         data.items.forEach(renderInfo)
//     })
// }

// function renderInfo(userInfo) {
//   document.querySelector('#repos-list').textContent = ''

//   console.log(userInfo)
//   //name
//   const name = document.createElement('h2')
//   name.textContent = userInfo.login
//   name.addEventListener('click', () => fetchRepos(userInfo.login)) // Bonus Repos setup (attn: "Repos")

//   //avatar
//   const avatar = document.createElement('img')
//   avatar.src = userInfo.avatar_url

//   //profile link
//   const profile = document.createElement('a')
//   profile.textContent = "Profile Link"
//   profile.href = userInfo.html_url

//   //break 
//   const breakx = document.createElement('br')


//   document.querySelector('#user-list').append(name, profile, breakx, breakx, avatar)

  
// }