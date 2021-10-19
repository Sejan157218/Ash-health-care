import { useContext } from "react";
import { DataContext } from "../Contexts/DataProvider";

const useServiceData = ()=>{
    return useContext(DataContext);
}

export default useServiceData;