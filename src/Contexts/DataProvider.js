import React, { createContext } from 'react';
import useData from '../hooks/useData';



export const DataContext = createContext()
const DataProvider = ({children}) => {
const allData=useData();
    return (
        <DataContext.Provider value = {allData}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;