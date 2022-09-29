import axios from 'axios'
import { toast } from 'react-toastify'
// import { toast } from 'react-toastify'

const URL = 'https://pcsmapi.herokuapp.com'
// const URL = 'http://localhost:3001'

export const addSubcriber = async (subscriberData) => {
    try {
        const result = await axios.post(`${URL}/subscribe`, subscriberData)        
        if(result){
            toast.success("Subscribed")
            return result
        }else{
            toast.error("Failed to subscribe")
            return false
        }
    } catch (error) {
        console.log('Error while calling add subscriber api ')
    }
}


export const studentEnquery = async (studentEnqueryData) => {
    try{
        const result = await axios.post(`${URL}/studentEnquery`, studentEnqueryData)
        if(result){
            toast.success("Student Enquery successfully")
            return result
        }else{
            toast.error("Failed to get enquery")
            return false
        }
    }catch(error){
        toast.error("Please fill required fields")
        console.log('Error while calling studentEnquery api ')
    }
}

export const franchiseeEnquery = async (franchiseeEnqueryData) => {
    try{
        const result = await axios.post(`${URL}/franchiseeEnquery`, franchiseeEnqueryData)
        if(result){
            toast.success("Franchisee Enquery successfully")
            return result
        }else{
            toast.error("Failed to get enquery")
            return false
        }
    } catch{
        toast.error("Please fill required fields")
        console.log('Error while calling franchiseeEnquery api ')
    }
}