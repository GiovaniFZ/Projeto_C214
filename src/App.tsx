import Home from './pages/Home'
import './global.css'
import { OrdersRespository } from './OrdersRepository';

type Props = {
  ordersRepository: OrdersRespository;
};

function App({ordersRepository}:Props) {

  return (
    <Home ordersRepository={ordersRepository} />
  )
}

export default App
