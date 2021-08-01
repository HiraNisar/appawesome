import React from "react";

import Card from './Card';
import CardData  from "./CardData";
const Services=()=>{
    return(
<>
<div className="container-fluid nav-bg">
 <div className="row">
 <div className="col-10 mx-auto">

<h1 align="center"className="heading2 pt-5">DCORATION PLANS</h1>
{
    CardData.map((val,index)=>{
return(
    <Card
    key={index}
    imgsrc={val.imgSrc}
    text={val.text}
    title={val.title}
    link={val.link}
    />
);
    })
}
</div>
</div>
</div>
</>
    );
}
export default Services;