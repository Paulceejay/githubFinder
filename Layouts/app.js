// instantiate github class
const github = new Github;

// instantiate UI class
const ui = new UI;

// get the ipnut
const searchUser = document.getElementById('search-user');

// add an event listener to the input
searchUser.addEventListener('keyup', (e) => {
    e.preventDefault();

    // get the input text
    const userText = e.target.value;

    if(userText !== ''){
        // make a http call for get user
        github.getUser(userText)
               .then(data => {
                    if (data.message === 'Not Found') {
                         // show error message
                          ui.showAlert('User Not Found' , 'bg-red-700 p-4 mt-5 text-white')
  
                          ui.clearProfile()
                        
                    }else {
                        // show profile when resolved
                        ui.showProfile(data)
                        // ui.showRepos(data)
                    }
               })
               .catch(err => {
                  // show error message
                  ui.showAlert('User Not Found' , 'bg-red-700 p-4 mt-5 text-white')
               })

     } else{
        // clear profile
        ui.clearProfile()
     }

     github.getRepos(userText)
            .then(data => {
              
                if (data.message === 'Not Found'){
                      // show error message
                    //   ui.showAlert('User Not Found' , 'bg-red-700 p-4 mt-5 text-white')
  
                      ui.clearProfile()
                } else{
                    let output = ''
                data.forEach((repo) => {
                    output += `
                          
                  <div class="sm:flex border-2 border-gray-500 my-2">
                  <div class="w-1/2 p-2 py-3">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                  </div>
          
                  <div class="flex w-1/2">
                    <p class="inline bg-slate-900 m-2 p-2 text-gray-200 rounded-md">Stars: <span>${repo.stargazers_count}</span></p>
                    <p class="inline bg-slate-900 m-2 p-2 text-gray-200 rounded-md">Watchers:: <span> ${repo.watchers_count}</span></p>
                    <p class="inline bg-slate-900 m-2 p-2 text-gray-200 rounded-md">Forks:  <span>${repo.forks_count}</span></p>
                  </div>
                  </div>
                  `;
                  });
                  document.getElementById('repos').innerHTML = output
                }
            })
})

