import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
const MditemDetail = ({datas}) => {
  if(!datas || !datas.length){
    return <div>로딩중...</div>
  }
  return (
    <div>
        <Row horizontal>
          {
            datas.map((data, index) =>(
               <Col key={index}>
                  <Card>
                    <Card.Img src={data.imgs} className="imghover"/>
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>
                        <p>{data.size}</p>
                        <p>{data.price}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
               </Col> 
            ))
          } 
       </Row>
    </div>
  )
}

export default MditemDetail