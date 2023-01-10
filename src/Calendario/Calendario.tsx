
import { Box, Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';

const semana: string[] = ['','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

export const Calendario = () => {
    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
      ];

    const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado', 'Domingo'].map((value, index) => ({ field: `col${index + 2}`, headerName: `${value}`, width: 150 }) );

    const columns = [{ field: 'col1', headerName: 'Hora', width: 150 }, ...dias];

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
        

        <Box sx={{height: '80vh', width: '70vw'  }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            semana.map((dia, index)=>
                                <TableCell sx={{minWidth:'100px'}} key={`dia ${index}`} align='center'>{`${dia}`}</TableCell>
                            )
                        }
                    </TableRow>

                    

                </TableHead>

                <TableBody>
                        <TableRow>
                            <TableCell component='th' scope='row' sx={{margin: '0px', }}>0:00</TableCell>
                            
                            <TableCell sx={{width:'100px',height:'20px',padding:0,margin:0}}>
                                <Card 
                                    sx={{width: '100px',
                                         padding: '0px',
                                         height: '106px',
                                        position: 'absolute',
                                        top: '125px'}}
                                    draggable
                                >
                                    <CardContent sx={{padding:'5px'}}>
                                        <Typography variant='subtitle2' >
                                            Redes de computadoras
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TableCell >
                            <TableCell sx={{width:'100px'}} >
                                <Card>

                                </Card>
                            </TableCell>
                            <TableCell/>
                            <TableCell/>
                            <TableCell/>
                            <TableCell/>
                            <TableCell/>
                            

                        </TableRow>
                        <TableRow>
                            <TableCell component='th' scope='row'>0:00</TableCell>
                            
                        </TableRow>
                    </TableBody>
            </Table>
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
 */