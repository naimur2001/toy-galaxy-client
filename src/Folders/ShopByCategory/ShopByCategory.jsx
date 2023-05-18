import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopByCategory = () => {
const [category,setCategory]=useState('SportsCar');
const [datas,setDatas]=useState([])
console.log(category);
useEffect(()=>{
fetch('http://localhost:5000/toycars')
.then(res=>res.json())
.then(data=> {
  console.log(data)
  setDatas(data)
})

},[])
const selectedToyCar=datas.filter(toy=> toy.cate === category);
console.log(selectedToyCar);
  return (
    <div className='my-6'>
       <h2 className="text-2xl text-center font-mono text-lime-400 font-bold mb-2">
    Shop By Category
  </h2>
  <p className="text-lg text-gray-500 text-center font-mono ">
    Explore our wide range of toy categories and find the perfect one for you!
  </p>
  <div className='my-4'>
  <Tabs>
    <TabList>
      <Tab onClick={()=>setCategory('SportsCar')}>Sports Car</Tab>
      <Tab onClick={()=>setCategory('VintageCar')} >Vinatge Car</Tab>
      <Tab onClick={()=>setCategory('Truck')}>Truck</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
  </div>
    </div>
  );
};

export default ShopByCategory;