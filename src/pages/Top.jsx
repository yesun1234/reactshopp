import React, {useState} from 'react'
import { Stack } from '@mui/material'
import styled from 'styled-components'
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill, RiFacebookCircleFill,RiGoogleFill,RiInstagramFill } from "react-icons/ri";

const DivLeftbox = styled.div`
   width:30%;
   display:flex;
   justify-content:flex-start;
   padding:8px 30px;
   font-size:14px;
   align-items:center;
   position:relative;
`;
const DivRightBox = styled.div`
   width:30%;
   display:flex;
   justify-content:flex-end;
   align-items:center;
   padding:8px 30px;
   font-size:14px;
`;
const DivPop = styled.div`
   position:absolute;
   left:120px;
   top:0;
   background:#f9f9f9;
   font-size:14px;
   padding:8px 30px;
`;
const AIcon = styled.a`
   display:inline-block;
   margin-left:10px;
   margin-right:10px;
   color:#777;
   text-decoration:none;
   &:hover{
      color:#555;
   }
`;
const SpanBar = styled.span`
   display:inline-block;
   width:1px;
   height:12px;
   background-color:#999;
   margin-left:30px;
   margin-right:40px;
`;
const SpanBar2 = styled.span`
   display:inline-block;
   width:1px;
   height:12px;
   background-color:#999;
   margin-left:10px;
   margin-right:10px;
`;
const Top = () => {
  const [showPop, setShowPop] = useState(false);
  const bookMark = (e) => {
     e.preventDefault();
     setShowPop(!showPop);
  }
  return (
    <Stack 
     direction="row"
     justifyContent="space-between"
     alignItems="center"
     style={{
               "backgroundColor":"#f9f9f9", 
               "borderBottom":"1px solid #ddd"
           }}
     >
       <DivLeftbox className="en">
          <AIcon href="#" onClick={bookMark}>BOOKMARK</AIcon>
          {showPop && (
            <DivPop>Ctrl+D를 눌러 페이지를 북마크하세요!</DivPop>
          )}
          <SpanBar />
          <AIcon href="#" style={{"fontSize":"11px"}}><SiNaver /></AIcon>
          <AIcon href="#"><RiKakaoTalkFill /></AIcon>
          <AIcon href="#"><RiFacebookCircleFill /></AIcon>
          <AIcon href="#"><RiGoogleFill /></AIcon>
          <AIcon href="#"><RiInstagramFill /></AIcon>
       </DivLeftbox>
       <DivRightBox>
          <AIcon href="#">로그인</AIcon>
          <SpanBar2 />
          <AIcon href="#">회원가입</AIcon>
          <SpanBar2 />
          <AIcon href="#">주문조회</AIcon>
          <SpanBar2 />
          <AIcon href="#">고객센터</AIcon>
       </DivRightBox>
    </Stack>  
  )
}

export default Top