import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      {isLoading &&  
        <h2>...Cargando</h2>
      }
      <h3>{ category }</h3>
      <div className='card-grid'>
        {
          images.map(img  => (
            <GifItem 
              key={ img.id }
              {... img}
            />
          ))
        }
      </div>
    </>
  )
}
