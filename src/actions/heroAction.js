export const fetchHero = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/heros")
        .then(resp => resp.json())
        .then(hero => dispatch({type: "FETCH_HERO", payload: hero}))
    }
}

export const addHero = (data) => {
    return (dispatch) => {
        fetch("http://localhost:3000/heros", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({name: data.name, power: data.power})
        })
        .then(resp => resp.json())
        .then(hero => dispatch({type: "ADD_HERO", payload: hero}))
        window.location.href = "http://localhost:3000/heros"
    }
}