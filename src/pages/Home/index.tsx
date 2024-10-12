import { Button, Fab, TextField } from '@mui/material'
import './styles.css'
import { useState } from 'react'
import { OrdersRespository } from '../../OrdersRepository';
import { Order } from '../../types/order';
import { v4 as uuidv4 } from 'uuid';


type Props = {
    ordersRepository: OrdersRespository;
  };

export default function Home({ordersRepository}: Props) {
    const [addOrder, setAddOrder] = useState(false);
    const [table, setTable] = useState('');
    const [target, setTarget] = useState('');
    const [order, setOrder] = useState<Order>({} as Order)

    function handleAddOrder(){
        setOrder(order);
        const id = uuidv4();
        const data = {
            id,
            table,
            target
        }
        ordersRepository.add({...order, ...data})
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
                <TextField 
                value={table}
                type='number'
                onChange={(e) => setTable(e.target.value)} 
                id="outlined-basic" 
                label="Numero da mesa" 
                variant="outlined" 
                />
                <TextField 
                value={target} 
                id="outlined-basic" 
                label="Pedido" 
                variant="outlined" 
                onChange={(e) => setTarget(e.target.value)}
                />
                <Button onClick={() => handleAddOrder()}>Adicionar</Button>
            </div>
            }
            <h1>Pedidos já feitos</h1>
            {ordersRepository.getOrder().map((order) => {
                return (
                    <div>
                        <p>Mesa: {order.table}</p>
                        <p>Pedido: {order.target}</p>
                    </div>

                )
            })
            }
        </>
    )
}