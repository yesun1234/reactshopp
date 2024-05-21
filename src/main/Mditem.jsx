import React from 'react'
import {Nav} from 'react-bootstrap'
import MditemDetail from '../components/MditemDetail'


const Mditem = ({ datas, activeKey, setActiveKey }) => {

  const getContents = () => {
    switch(activeKey) {
       case 'new' : 
          return <MditemDetail datas = {datas.new} />;
       case 'discount' :
          return <MditemDetail datas = {datas.discount} />;
       default:
          return <MditemDetail datas = {datas.best} />;      
    }
 }

  return (
    <>
       <h1 className="en text-center mt-5">MD IT ITEM</h1>
       <p className="text-center mb-5 pb-5">MD가 추천하는 인기있는 상품을 확인해보세요.</p>
       <Nav variant="tabs" 
            activeKey={activeKey} 
            onSelect={(selectedKey) => setActiveKey(selectedKey)}>
          <Nav.Item>
             <Nav.Link eventKey="best">Best Item</Nav.Link>  
          </Nav.Item>
          <Nav.Item>   
             <Nav.Link eventKey="new">New Item</Nav.Link>
          </Nav.Item>
          <Nav.Item>   
             <Nav.Link eventKey="discount">Big Discount</Nav.Link>
          </Nav.Item>        
       </Nav>
       <div className="activeBox">
          {getContents()}
       </div>
    </>
  )
}

export default Mditem