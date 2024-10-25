import { Button, Fab, Table, TextField } from '@mui/material'
import './styles.css'
import { useState } from 'react'
import { OrdersRespository } from '../../OrdersRepository';
import { Order } from '../../types/order';
import { v4 as uuidv4 } from 'uuid';
import { Add, Delete, Fastfood, ShoppingCart, TableRestaurant } from '@mui/icons-material';


type Props = {
    ordersRepository: OrdersRespository;
};

export default function Home({ ordersRepository }: Props) {
    const [addOrder, setAddOrder] = useState(false);
    const [table, setTable] = useState(0);
    const [target, setTarget] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [order, setOrder] = useState<Order>({} as Order)

    function handleAddOrder() {
        setOrder(order);
        const id = uuidv4();
        const data: Order = {
            id,
            table,
            target,
            quantity
        }
        ordersRepository.add({ ...order, ...data })
        setAddOrder(false);
    }

    return (
        <div className='mainApp'>
            <header>
                <h1>Gerenciador de pedidos</h1>
            </header>
            <Fab
                color="primary"
                aria-label="add"
                onClick={() => setAddOrder(true)}
            >
                <Add />
            </Fab>
            {addOrder &&
                <div>
                    <TextField
                        value={table}
                        type='number'
                        onChange={(e) => setTable(parseInt(e.target.value))}
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
                    <TextField
                        value={quantity}
                        id="outlined-basic"
                        label="Quantidade"
                        type="number"
                        variant="outlined"
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                    <Button onClick={() => handleAddOrder()}>Adicionar</Button>
                </div>
            }
            <h1>Pedidos já feitos</h1>
            <div className='curentOrders'>
            {ordersRepository.getOrder().map((order) => {
                return (
                    <div className='orderBox'>
                        <p><TableRestaurant /> M: {order.table}</p>
                        <p><Fastfood /> P: {order.target}</p>
                        <p><ShoppingCart /> Q: {order.quantity}</p>
                        <Fab><Delete /></Fab>
                    </div>
                )
            })
            }
            </div>
        </div>
    )
}