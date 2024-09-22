import { Button, Fab, TextField } from '@mui/material'
import './styles.css'
import { useState } from 'react'
import { OrdersRespository } from '../../OrdersRepository';
import { Order } from '../../types/Order';
import { v4 as uuidv4 } from 'uuid';


type Props = {
    ordersRepository: OrdersRespository;
  };

export default function Home({ordersRepository}: Props) {
    const [addOrder, setAddOrder] = useState(false);
    const [order, setOrder] = useState<Order>({} as Order)

    function handleAddOrder(){
        const id = uuidv4();
        ordersRepository.add({...order, id})
        setAddOrder(false);
    }

    return (
        <>
            <header>
                <h1>Gerenciador de pedidos</h1>
            </header>
            <p>Pedidos</p>
            <Fab 
            color="primary" 
            aria-label="add"
            onClick={() => setAddOrder(true)}
            >
                +
            </Fab>
            {addOrder &&
            <div>
                <TextField id="outlined-basic" label="Numero da mesa" variant="outlined" />
                <TextField id="outlined-basic" label="Pedido" variant="outlined" />
                <Button onClick={() => handleAddOrder()}>Adicionar</Button>
            </div>
            }
        </>
    )
}