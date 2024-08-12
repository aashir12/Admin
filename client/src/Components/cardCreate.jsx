import React from 'react';
import {Card} from 'antd'

const {Meta}=Card;

const CardCreate = ({ title,clickable=''}) => {
  return (
    <>
      <Card style={{width:'300px',height:'200px'}} className={clickable!==''?clickable:null} cover={<img src="/images/new.PNG" alt='new.png'/>}>
        <Meta title={title}></Meta>
      </Card>
    </>
  );
};

export default CardCreate;
