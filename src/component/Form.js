import { TextField, Box, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import List from './List';
import {useState,useContext, useEffect} from 'react'
import { GlobalInfo } from '../App';



function Form() {
    const {getValues,postTodo,getTodo} = useContext(GlobalInfo)
    const [inputVal,setInputVal] = useState()
    // useEffect(() => {
    //   console.log(getValues(inputVal))
    // }, [inputVal])
    const handleClick = ()=> {
        postTodo(inputVal)
        console.log(inputVal)

    }
   
    return (
        <form>
            <Box sx={{ border: "solid red 2px" }}>
                <Grid m={2} p={4} container gap={2} direction="column" justifyContent="center" alignItems="center" sx={{ border: "solid black 2px" }}>
                    <TextField  onChange={(e)=> setInputVal( e.target.value)} id="outlined-basic" label="Enter Here" variant="outlined" required sx={{minWidth:'30%'}} autoFocus={true}/>
                    <Button onClick={handleClick} startIcon={<AddIcon fontSize='small' />} variant="outlined" sx={{minWidth:'8%'}}>Add</Button>
                    <List />

                </Grid>
            </Box>
        </form>
    )
}

export default Form