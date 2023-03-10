import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useBebidas } from '../hooks/useBebidas'

const Bebida = ({ bebida }) => {

  const { handleModalClick, handleBebidaId } = useBebidas()
  return (

    <Col md={6} lg={3} className='mt-3'>
      <Card classname='mb-4'>
        <Card.Img
          variant='top'
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Card.Text>Algo mas</Card.Text>
          <Button
            variant={'warning'}
            classname='w-100 text-uppercase mt-2'
            onClick={() => {
              handleModalClick()
              handleBebidaId(bebida.idDrink)

            }}
          >Ver Receta</Button>
        </Card.Body>

      </Card>

    </Col>

  )
}

export default Bebida
