import React, { useEffect } from "react";



function useLoading(loadingFunction){
const [loading, setLoading] = useState(true);
const [error, setError] = useState();
const [data, setData] = useState();
async function reload(){
    setLoading(true);
    setData(undefined);
    setError(undefined);

    try {
        setData(await loadingFunction)
    } catch (e) {
        setError(e);
    }finally {
        setLoading(false);
    }
}

useEffect(reload, [])

    return{loading, error, data}
}

export function ProfilePage(){
  const {loading, error, data} =  useLoading(()=> fetchJson("/api/profile"));

  if(error){

    return <ErrorView/>
  }
  if (loading  || !data) {
    return
    <LoadingView/>

  }

  const{username} = data;
 
  return

<h1>Hey! This is your profile</h1>

}