import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'

const distanciaTop  = 135;
const distaciaDerecha = 132;
const distanciaHora = 53;

const hora = 5;
const duracion = 3;

export const CalendarCard = () => {
    
    const [variableTop, setvariableTop] = useState(distanciaTop+hora*distanciaHora);
    const [variableHeight, setvariableHeight] = useState(distanciaHora*duracion);

  return (
    <Card
       sx={{width: '130px',
            padding: '0px',
            height: variableHeight,
            right: distaciaDerecha,
           position: 'absolute',
           top: variableTop}}
       draggable
   >
       <CardContent sx={{padding:'5px'}}>
           <Typography variant='subtitle2' >
               Redes de computadoras
           </Typography>
       </CardContent>
   </Card>
  )
}
