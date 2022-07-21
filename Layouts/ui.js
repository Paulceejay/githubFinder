class UI {
    constructor (){
        this.profile = document.getElementById('profile');
    }

    // show profile function
    showProfile(user){
       
        this.profile.className = 'w-full my-10 mx-auto'
        this.profile.innerHTML = `
        <div class="border-2 border-gray-400 grid md:grid-cols-2">
        <div class="p-3 w-full">
          <img class="rounded-3xl text-3xl md:text-xl h-auto w-11/12 lg:w-2/3" src="${user.avatar_url}">
          
          <p class="w-full my-5">
            <a href="${user.html_url}" target="_blank" class="px-16 sm:px-20 py-3 outline-none rounded-2xl bg-blue-900 text-gray-100">View Profile</a>
          </p>
        </div>
  
        <!-- container holding my about me and my public figure -->

       <div class="">

         <!-- continer holding my public figure -->

         <div class="grid grid-cols-2 w-full my-0 mx-auto
         md:grid-cols-1 md:mt-5">
          <p class="inline bg-slate-900 text-base rounded-lg m-4 p-2 text-gray-200">Public Repos: <span >${user.public_repos}</span></p>
          <p class="inline bg-slate-900 text-base rounded-lg m-4 p-2 text-gray-200">Public Gists: <span>${user.public_gists}</span></p>
          <p class="inline bg-slate-900 text-base rounded-lg m-4 p-2 text-gray-200">Followers: <span>${user.followers}</span></p>
          <p class="inline bg-slate-900 text-base rounded-lg m-4 p-2 text-gray-200">Following: <span>${user.following}</span></p>
         </div>
  
         <!-- container holding my list items -->

         <div class="w-full my-0 mx-auto">
          <ul class="p-4">
            <li class="border-2 border-gray-500 border-b-0 p-2">Name: ${user.name}</li>
            <li class="border-2 border-gray-500 border-b-0 p-2">Username: ${user.login}</li>
            <li class="border-2 border-gray-500 border-b-0 p-2">Company: ${user.company}</li>
            <li class="border-2 border-gray-500 border-b-0 p-2">Website/Blog: ${user.blog}</li>
            <li class="border-2 border-gray-500 border-b-0 p-2">Location: ${user.location}</li>
             <li class="border-2 border-gray-500 border-b-0 p-2">Twitter: ${user.twitter_username}</li>
            <li class="border-2 border-gray-500 p-2">Member Since: ${user.created_at}</li>
          </ul>
        </div>
       </div>
       </div>
  
       <h3 class="text-2xl text-black my-5">Latest Repos</h3>
  
       <!-- container holding my repos -->

       <div id="repos" class="">
            
       </div>

        `
    }

    // show alert function
    showAlert(message, className){
      // clear the error messsage left
      this.clearAlert();

      // creating a div for error message
      const div = document.createElement('div')
      div.className = className
      div.id = 'errorMsg'

      // adding the textNode
      div.appendChild(document.createTextNode(message))

      // geting my input container
      const container = document.getElementById('search-container')
      
      //my saerch card
      const searchCard = document.getElementById('search-card')

      // appending my textNode before the search card
      container.insertBefore(div, searchCard)

      // clear all message after 3 seconds
      setTimeout(() => {
        this.clearAlert()
      }, 4000)
    }

    // cleaer alert function
    clearAlert(){
        const currentMsg = document.getElementById('errorMsg');

        if (currentMsg) {
          currentMsg.remove()
        }

    }

    // clearfields function
    clearProfile(){
      this.profile.innerHTML = ''
    }
}
