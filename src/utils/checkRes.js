export default (res, defaultVal=[]) =>{
    if(!res||res.status !== 200 || !res.data){
        const msg = res && res.data && res.data.errorMsg;
        console.error(msg || 'checkRes Error!');
        return defaultVal;
    }
    return res.data;
}