var word = document.getElementById("searchWord")
    word.addEventListener("click", async() => {

    const fetchUrl = await fetch (`https://random-words-api.vercel.app/word`,{method: 'GET'})
    const data = await fetchUrl.json()
    data.forEach(ele =>{
        let tr = document.createElement("tr")
        Object.keys(ele).forEach(key =>{
            let td = document.createElement("td")
            td.innerText = ele[key]
            tr.append(td)
        })
        document.getElementById("tableBody").append(tr)
    })
});

