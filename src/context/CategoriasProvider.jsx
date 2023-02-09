import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const CategoriasContext = createContext()

function CategoriasProvider({ children }) {
  const [categorias, setcategorias] = useState([])
  const obtenerCategorias = async () => {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const { data } = await axios(url)
      setcategorias(data.drinks)

    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    obtenerCategorias()
  }, [])


  return (
    <CategoriasContext.Provider value={{
      categorias
    }}>
      {children}
    </CategoriasContext.Provider>

  )
}

export default CategoriasProvider
