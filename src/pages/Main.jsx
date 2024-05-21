import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material';
import axios from 'axios'
import Carousel from './Carousel'
import Mditem from '../main/Mditem';
import WeeklyBest from '../components/WeeklyBest';
const Main = () => {

  const [activeKey, setActiveKey] = useState('best');  
  const [datas, setDatas] = useState({});

  useEffect(()=>{
     const myData = async () => {
        try{
           const res = await axios.get('./data/data.json');
           setDatas(res.data);
        }catch(error){
            console.error('Error : ', error);
        }
     };
     myData();
  }, []);

  console.table(datas.best);

  return (
    <>
      <Carousel />
      <Container>
         <Mditem datas={datas} activeKey={activeKey} setActiveKey={setActiveKey} />
         <WeeklyBest />
      </Container>
    </>  
  )
}

export default Main