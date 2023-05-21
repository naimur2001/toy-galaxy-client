import { useEffect } from "react";



  const useTitle=title=>{
    useEffect(()=>{
     document.title=`Toy Galaxy | ${title}`
  },[title])
  }


export default useTitle;