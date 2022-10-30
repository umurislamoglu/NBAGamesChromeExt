async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e2862263f7mshf86accb9755af61p138ba9jsn00e93c11701e',
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
    };
    
    const res= await fetch('https://free-nba.p.rapidapi.com/games?page=0&per_page=25', options)
    const record = await res.json()

   document.getElementById('games').innerHTML = record.data.map(item=>`<li>${item.home_team.full_name} - ${item.visitor_team.full_name}</li>`)
}
fetchData()