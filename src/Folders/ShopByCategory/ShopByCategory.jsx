import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopByCategoryCard from './ShopByCategoryCard';
const ShopByCategory = () => {
const [category,setCategory]=useState('SportsCar');
const [bool,setBool]=useState(false)
const [datas,setDatas]=useState([])
console.log(category);
useEffect(()=>{
  fetch('https://toy-galaxy-server-five.vercel.app/toycars')
.then(res=>res.json())
.then(data=> {
  console.log(data)
  setDatas(data)
})

},[])
const selectedToyCar=datas.filter(toy=> toy.cate === category);
console.log(selectedToyCar);
// to render loading
useEffect(()=>{
  if (selectedToyCar===null) {
    setBool(true)
  }
  else{
    setBool(false)
  }
},[])
// 
  return (
    <div className='my-8'>
       <h2 className="text-2xl text-center font-mono text-gray-700 font-bold mb-2">
    Shop By Category
  </h2>
  <p className="text-lg text-gray-500 text-center font-mono ">
    Explore our wide range of car toy categories and find the perfect one for you!
  </p>
  <div className='my-4'>
  <Tabs>
    <TabList>
      <Tab onClick={()=>setCategory('SportsCar')}>Sports Car</Tab>
      <Tab onClick={()=>setCategory('VintageCar')} >Vinatge Car</Tab>
      <Tab onClick={()=>setCategory('Truck')}>Truck</Tab>
    </TabList>

    <TabPanel>
<div className='grid lg:grid-cols-3 gap-4 lg:mx-0 mx-8'>
{
  bool ? <div className="radial-progress animate-spin text-red-500" style={{ "--value": "70", "--size": "2rem", "--thickness": "4px" }}></div> : selectedToyCar?.map(data=> <ShopByCategoryCard key={data._id} data={data} ></ShopByCategoryCard> )
  }
</div>
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-4 lg:mx-0 mx-8'>
    {
  bool ? <div className="radial-progress animate-spin text-red-500" style={{ "--value": "70", "--size": "2rem", "--thickness": "4px" }}></div> : selectedToyCar?.map(data=> <ShopByCategoryCard key={data._id} data={data} ></ShopByCategoryCard> )
  }
</div>
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-4 lg:mx-0 mx-8'>
    {
  bool ? <div className="radial-progress animate-spin text-red-500" style={{ "--value": "70", "--size": "2rem", "--thickness": "4px" }}></div> : selectedToyCar?.map(data=> <ShopByCategoryCard key={data._id} data={data} ></ShopByCategoryCard> )
  }
</div>
    </TabPanel>
  </Tabs>
  </div>
    </div>
  );
};

export default ShopByCategory;