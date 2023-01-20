import { TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react'
import { CalendarCard } from '../CalendarCard';
import { CalendarDay } from '../Models';


const horas :number[] = new Array(25).fill(0);
    
    const filas =  horas.map((value, index) =>
        ( 
            {   
                id: Number(`${index+1}`), 
                col1: `${index < 10 ? `0${index}`:index }:00`
            }
        ) 
    );


interface Props {

    calendarDay: CalendarDay
}

export const ComponentCalendarDay: React.FC<Props> = ({calendarDay}) => {


    const [hours, sethours] = useState(calendarDay);
   
    console.log(JSON.stringify(hours.day))
    const thereAreEvent =  (time:number):boolean => {
        if(hours.events.length != 0 ){
            return hours.events.find(e => e.time == time) == undefined ? false:true;
        }
        return false;
    }

    return (
        <>
            {
                filas.map((fila,index)=>
                    <TableRow key={`Fila-${fila.col1}-${index}`}>
                        <TableCell 
                            key ={`hora:${fila.id}`} 
                            component ='th' scope='row' 
                            sx ={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}>
                                                {fila.col1}
                        </TableCell>
                        <TableCell key={'Lunes'} sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}>{
                            hours.day == 0 ? thereAreEvent(fila.id) ? <CalendarCard />: <></>
                            :<></>
                        }</TableCell>
                        <TableCell key ={'Martes'} sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}>{
                            hours.day == 1 ? thereAreEvent(fila.id) ? <CalendarCard />: <></>
                            :<></>
                        }</TableCell>
                        <TableCell key ={'Miercoles'} sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}>{
                            hours.day == 2 ? thereAreEvent(fila.id) ? <CalendarCard />: <></>
                            :<></>
                        }</TableCell>
                        <TableCell key ={'Jueves'} sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}>{
                            hours.day == 3 ? thereAreEvent(fila.id) ? <CalendarCard />: <></>
                            :<></>
                        }</TableCell>
                        <TableCell key ={'Viernes'} sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}>{
                            hours.day == 4 ? thereAreEvent(fila.id) ? <CalendarCard />: <></>
                            :<></>
                        }</TableCell>
                        <TableCell key ={'Sabado'} sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}>{
                            hours.day == 5 ? thereAreEvent(fila.id) ? <CalendarCard />: <></>
                            :<></>
                        }</TableCell>
                        <TableCell key ={'Domingo'}> {
                            hours.day == 6 ? thereAreEvent(fila.id) ? <CalendarCard />: <></>
                            :<></>}
                        </TableCell>                                    
                    </TableRow>
                                    
                    )
            }        
        </>        
    )
}
