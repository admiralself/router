import React, { useState, useEffect  } from 'react';

import CardInfo from './CardInfo'

import { useParams } from 'react-router-dom'


const  Trailer=() => {
    const {id} = useParams()
    const product = CardInfo.find(p=>p._id == id)


    


    return (
         <div className='Tla'>
       
            <h1> {product.titre}</h1>
            <img className='Img' src={product.image} />
            <div className='res'>
            <h2>Synopsis: <br></br> {product.synopsis}</h2>
           
            <iframe className='video' src={product.url} />
            </div>
        </div>
    )

};




export default Trailer 
