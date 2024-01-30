import { useEffect } from "react";
export default function usePageTitle(title:string |any){
    useEffect(()=>{
        document.title= title + '|'+ "MCS"
    },[title])
    useEffect(()=>{
        document.title="MCS";
    },[])
}