import React from "react";
import { NavLink } from "react-router-dom";
const Card=(props)=>{
    return(
        <>
        <div className="card mt-5 col-md-6 col-10" style={{width:'300px',height:'300hv', float:'left', marginLeft:'3%'}}>
  <img src={props.imgsrc} className="imgHeight card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <NavLink to="" className="btn btn-primary position">
{props.link}
    </NavLink>
  </div>
</div>
        </>
    );
}
export default Card;