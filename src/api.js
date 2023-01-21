export const getAllPokemons = async (limit = 50, offset = 0) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        if (response.status === 200)
            return await response.json()
        throw `Api retornou status ${response.status}`
    } catch (error) {
        throw `Erro no getAllPokemons => ${error}`
    }
}

export const getPokemonDetailsByDirectURL = async (url) => {
    try {
        const response = await fetch(url)
        if (response.status === 200)
            return await response.json()
        throw `Api retornou status ${response.status}`
    } catch (error) {
        throw `Erro no getPokemonDetailsByDirectURL => ${error}`
    }
}

export const getPokemonDetailsByNameOrID = async (arg) => {
    let pokemon = arg.toLowerCase();
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (response.status === 404) {
            if (!+arg) {
                return await getPokemonsWithMatchString(pokemon)
                    .then((res) => {
                        return res
                    })
            }
            return [];
        }
        return [await response.json()]
    } catch (error) {
        throw `Erro no getPokemonDetailsByNameOrID => ${error}`
    }
}

export const getPokemonsWithMatchString = async (string) => {
    try {
        return await getAllPokemons(9999)
            .then(async (res) => {
                let result = res.results.filter((pokemon) => {
                    return pokemon.name.indexOf(string) > 0
                })

                const pokemonPromises = result.map(async pokemon => {
                    return await getPokemonDetailsByDirectURL(pokemon.url)
                });

                return await Promise.all(pokemonPromises)
                    .then((data) => {
                        return data
                    })
            })
    } catch (error) {
        throw `Erro no getPokemonsWithMatchString => ${error}`
    }
}