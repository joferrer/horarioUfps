
import { Box, Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { CalendarCard } from './CalendarCard';
import { ComponentCalendarDay } from './Components/ComponentCalendarDay';
import { CalendarDay } from './Models';

const semana: string[] = ['','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

const initCalendar = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado', 'Domingo'].map((value, index) => (new CalendarDay(index,value)) );

export const Calendario = () => {

    const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado', 'Domingo'].map((value, index) => ({ field: `col${index + 2}`, headerName: `${value}`, width: 150 }) );

    const [calendario, setcalendario] = useState(initCalendar);

    console.log('CALENDARIO; '+ calendario[0].name);
    const horas :number[] = new Array(25).fill(0);
    
    const filas =  horas.map((value, index) =>
        ( 
            {   
                id: Number(`${index+1}`), 
                col1: `${index < 10 ? `0${index}`:index }:00`
            }
        ) 
    );

    console.log(filas)
    return (
        <div>
        

            <Box sx={{height: '80vh', width: '80vw'  }}>
                <CalendarCard />
                <Paper  sx={{ width: '100%' ,height:'100%'}}>
                    <TableContainer  sx={{ width: '100%', height:'100%' }}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    {
                                        semana.map((dia, index)=>
                                            <TableCell sx={{minWidth:'100px', borderRight:'1px solid rgba(224, 224, 224, 1)'}} key={`dia ${index}`} align='center'>{`${dia}`}</TableCell>
                                    )
                                    }
                                </TableRow>
                            </TableHead>

                        <TableBody>

                            {
                                semana.map((fila,index)=>
                                    
                                    <ComponentCalendarDay key={`DIA: ${fila}-${index}`} 
                                        calendarDay={index>0 ? calendario[index-1]:new CalendarDay(-1,'')} />
                                        
                                )
                            }
                
                            </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            
        </Box>
    </div>
  )
}


/**
 * <DataGrid 
                sx={{
                    border: 'none',
                    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
                        borderRight: `1px solid `},

                     '.MuiDataGrid-columnSeparator': {
                        display: 'none',}
                }}
                
                columns={columns} 
                rows= {filas} 
            />

                            {
                                filas.map((fila,index)=>
                                    <TableRow>
                                        <TableCell key={`hora:${fila.id}`} component='th' scope='row' sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}>{fila.col1}</TableCell>
                                        <TableCell sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}>
                                            
                                        </TableCell >
                                        <TableCell sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }} >
                                            
                                        </TableCell >
                                        <TableCell sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}/>
                                        <TableCell sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}/>
                                        <TableCell sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}/>
                                        <TableCell sx={{margin: '0px', borderRight:'1px solid rgba(224, 224, 224, 1)' }}/>
                                        <TableCell />
                                    

                                    </TableRow>
                                )
                            }
 */