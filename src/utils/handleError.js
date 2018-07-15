const handleError = (error) => {
    if(error.response){
        if(error.response.status === 400){
            return error.response.data.error
        }
    } 
    return error
}
export default handleError
