import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const BebidasContext = createContext()

function BebidasProvider({ children }) {
  const [bebidas, setbebidas] = useState([])
  const [modal, setmodal] = useState(false)
  const [bebidaId, setbebidaId] = useState(null)
  const [receta, setreceta] = useState({})

  const consultarBebida = async datos => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
      const { data } = await axios(url)
      setbebidas(data.drinks)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const obtenerReceta = async () => {
      if (!bebidaId) return
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`

        const { data } = await axios(url)
        setreceta(data.drinks[0])

      } catch (error) {
        console.log(error)

      }
    }
    obtenerReceta()
  }, [bebidaId])


  const handleModalClick = () => {
    setmodal(!modal)
  }

  const handleBebidaId = id => {
    setbebidaId(id)
  }

  return (
    <BebidasContext.Provider value={{
      consultarBebida,
      bebidas,
      handleModalClick,
      modal,
      handleBebidaId,
      receta,
      setreceta

    }}>
      {children}
    </BebidasContext.Provider>

  )
}

export default BebidasProvider
