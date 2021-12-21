fetch("https://api.github.com/users").then(res => res.json()).then(data => {
    console.log(data)
    printData(data)
}).catch(err => console.log(err))

function printData(data) {
    for (let i = 0; i < data.length; i++) {
        document.getElementById('data').innerHTML += `
        <div class="col-md-2">
            <div class="card">
                <img src="${data[i].avatar_url}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${data[i].login}</h5>
                      </div>
                  </div>
                  </div>
        `
    }
}