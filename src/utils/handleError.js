const handleError = (error) => {
    if(error.response){
        if(error.response.status === 400 || 404){
            return error.response.data.error
        }
    } 
    return error
}
export default handleError
