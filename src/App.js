import React,{useState} from 'react';
import DetailsCard from './components/DetailsCard';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import locationImg from './assets/images/location.png'
import payImg from './assets/images/payment.png'
import OrderCard from './components/OrderCard';


function App() {
  const[count,setCount]=useState(0);
  return (
    <div class='w-screen h-screen flex items-center justify-center '>
    <div class='w-[414px] h-[896px] bg-[#1F1F1F] rounded-[30px] flex flex-col py-12 px-[30px]'>
      <Header/>
      <ProductCard count={count} setCount={setCount}/>
      <div className='flex flex-col gap-10'>
      <DetailsCard title='Delivery Location' subtitle1='John ' subtitle2='1st Block 1st Street, USA-560016' img={locationImg}/>
      <DetailsCard title='Payment Method' subtitle1='MasterCard' subtitle2='*******01554' img={payImg}/>
      </div>
      <OrderCard count={count} />
      <button className='w-full btn rounded-[10px] py-2 transition-all duration-300 ease-linear'>
        <span className='text-white font-semibold text-lg'>Buy</span>
      </button>
      
    </div>
  </div>
    
  );
}

export default App;
