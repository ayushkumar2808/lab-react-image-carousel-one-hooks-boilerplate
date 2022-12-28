import React, { forwardRef, useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


// complete the function below:
function Carousel() {
    const [number,setNumber]= useState(0)
    
    
    const back =()=>{
        if(number>0){
        setNumber(number-1)
        }
        else if(number===0){
            setNumber(2)
        }
    }
const forward = ()=>{
    if(number<2){
    setNumber(number+1)
    }
    else if(number===2){
        setNumber(0)
    }
}

    return(
        <>
        <div id="display-flex">
        <ArrowBackIosIcon onClick={back}/>
        <div>
            <img src={images[number].img} alt="" />
        </div>
        <ArrowForwardIosIcon onClick={forward}/>
        </div>
        </>
    )
}

export default Carousel;