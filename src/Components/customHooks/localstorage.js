export const sendToLocalStorageHook=(key,val)=>{
    if(key && val){
        localStorage.setItem(key,val)
        return true //returing to maintain one acknowledgement
    }
    return false
}