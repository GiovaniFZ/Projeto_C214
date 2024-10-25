import { Button, Fab, Grid2, TextField } from '@mui/material'
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
    const [order, setOrder] = useState<Order[]>([])

    function handleAddOrder() {
        const id = uuidv4();
        const data: Order = {
            id,
            table,
            target,
            quantity
        }
        ordersRepository.add({ ...order, ...data });
        setOrder(ordersRepository.getOrder());
    }

    function handleDeleteOrder(id: string){
        ordersRepository.removeOrder(id);
        setOrder(ordersRepository.getOrder());
    }

    const gridProps = {
        justifyContent: 'center',
        alignItens: 'center',
        backgroundColor: 'var(--gray-100)',
        borderRadius: '5px',
    }

    const isNotEmpty = ordersRepository.getOrder().length > 0;

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
                <div className='addSection'>
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
                    <Button variant='contained' onClick={() => handleAddOrder()}>Adicionar</Button>
                </div>
            }
            <h1>Pedidos já feitos</h1>
            <Grid2 {...gridProps} spacing={2} container >
            {isNotEmpty ?
                ordersRepository.getOrder().map((order) => {
                return (
                    <div className='orderBox' key={order.id}>
                        <p><TableRestaurant /> M: {order.table}</p>
                        <p><Fastfood /> P: {order.target}</p>
                        <p><ShoppingCart /> Q: {order.quantity}</p>
                        <Fab color="primary" size="small" onClick={() => handleDeleteOrder(order.id)}><Delete /></Fab>
                    </div>
                )
            }) : <p> Não há pedidos!</p>
            }
            </Grid2>
        </div>
    )
}