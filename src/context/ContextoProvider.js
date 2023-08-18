import React, { createContext, useState } from 'react'
import {data} from '../data/data';


export const CvContext= createContext()


export const ContextoProvider = ({children}) => {


    const [idioma, setIdioma]=useState(data.espanol);

    const dataContext={data, idioma, setIdioma}
  return (
    <CvContext.Provider value={dataContext}>
        {children}
    </CvContext.Provider>
  )
}
