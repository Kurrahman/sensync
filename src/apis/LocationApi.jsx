const BASE_URL = 'https://www.emsifa.com/api-wilayah-indonesia/api'

async function fetchData(url, setIsLoading) {
    setIsLoading(true)
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
    } finally {
        setIsLoading(false)
    }
}

async function fetchProvinces(setProvinces, setIsLoading) {
    const url = BASE_URL + '/provinces.json'
    setIsLoading(true)
    try {
        const response = await fetch(url);
        const json = await response.json();
        setProvinces(json);
    } catch (error) {
        console.error(error)
    } finally {
        setIsLoading(false)
    }
}

async function fetchRegencies(id, setRegencies, setIsLoading){
    const url = BASE_URL + `/regencies/${id}.json`
    setIsLoading(true)
    try {
        const response = await fetch(url);
        const json = await response.json();
        setRegencies(json);
    } catch (error) {
        console.error(error)
    } finally {
        setIsLoading(false)
    }
}

async function fetchDistricts(id, setDistricts, setIsLoading){
    const url = BASE_URL + `/districts/${id}.json`
    setIsLoading(true)
    try {
        const response = await fetch(url);
        const json = await response.json();
        setDistricts(json);
    } catch (error) {
        console.error(error)
    } finally {
        setIsLoading(false)
    }
}

export {fetchProvinces, fetchRegencies, fetchDistricts};