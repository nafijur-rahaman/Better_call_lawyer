export const getData =()=>{
   const data= localStorage.getItem('appointments')
   if(data){
       return JSON.parse(data);
   }
   return [];
}

export const setData=(id)=>{
    const storeData=getData();

    if(storeData.includes(id)){
        return false;
    }else{
        storeData.push(id);
        localStorage.setItem('appointments',JSON.stringify(storeData));
    }
    

}


export const removeData=(id)=>{
    const storeData=getData();
    const remaining=storeData.filter(data=>data!==id);
    localStorage.setItem('appointments',JSON.stringify(remaining));
}