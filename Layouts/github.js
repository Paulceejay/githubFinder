class Github {
    constructor(){
        this.client_id = '34567898733q';
        this.client_secret = 'oiuysw35466543qazx8974531';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    getUser(user){
        return new Promise( (resolve, reject) => {
            fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .then(res => res.json())
            .then(profile => resolve(profile))
            .catch(err => reject(err))
        })
    }

    getRepos(repos){
        return new Promise( (resolve, reject) => {
            fetch(`https://api.github.com/users/${repos}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
                .then(res => res.json())
                .then( data => resolve(data))
                .catch(err => reject(err))
        })
    }
}