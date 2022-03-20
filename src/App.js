import React from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';


function App() {
  return (
    <div class='w-screen h-screen flex items-center justify-center'>
    <div class='w-[414px] h-[896px] bg-[#1F1F1F] rounded-[30px] flex flex-col py-12 px-[30px]'>
      <Header/>
      <ProductCard/>
      
      
    </div>
  </div>
    
  );
}

export default App;
