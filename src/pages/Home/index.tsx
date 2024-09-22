import { Button, Fab, TextField } from '@mui/material'
import './styles.css'
import { useState } from 'react'
export default function Home() {

    const [addOrder, setAddOrder] = useState(false);

    function handleAddOrder(){
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