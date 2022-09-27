import axios from 'axios'

const URL = 'https://pcsmapi.herokuapp.com'
// const URL = 'http://localhost:3001'

export const addSubcriber = async (subscriberData) => {
    try {
        return await axios.post(`${URL}/subscribe`, subscriberData)
    } catch (error) {
        console.log('Error while calling add subscriber api ')
    }
}


export const studentEnquery = async (studentEnqueryData) => {
    try{
        return await axios.post(`${URL}/studentEnquery`, studentEnqueryData)
    }catch{
        console.log('Error while calling studentEnquery api ')
    }
}

export const franchiseeEnquery = async (franchiseeEnqueryData) => {
    try{
        return await axios.post(`${URL}/franchiseeEnquery`, franchiseeEnqueryData)
    } catch{
        console.log('Error while calling franchiseeEnquery api ')
    }
}