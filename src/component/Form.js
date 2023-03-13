import { TextField, Box, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import List from './List';
import { useState, useContext, useEffect } from 'react'
import { GlobalInfo } from '../App';



function Form() {
    const { getValues, postTodo, editTodo } = useContext(GlobalInfo)
    const [inputVal, setInputVal] = useState("")
    const [editId, setEditId] = useState()
    // Function to export functions and variables to the parant component
    useEffect(() => {
        getValues({ editId, setEditId, setInputVal, inputVal })
    }, [editId])
    return (
        <form>
            <Box sx={{ border: "solid red 2px" }}>
                <Grid m={2} p={4} container gap={2} direction="column" justifyContent="center" alignItems="center" sx={{ border: "solid black 2px" }}>
                    <TextField value={inputVal} onChange={(e) => setInputVal(e.target.value)} id="outlined-basic" label="Enter Here" variant="outlined" required sx={{ minWidth: '30%' }} autoFocus={true} />
                    <Button onClick={() => postTodo(inputVal)} startIcon={<AddIcon fontSize='small' />} variant="outlined" sx={{ minWidth: '8%' }}>Add</Button>
                    <Button onClick={() => editTodo(editId, inputVal)} startIcon={<SystemUpdateAltIcon fontSize='small' />} variant="outlined" sx={{ minWidth: '8%' }}>Update</Button>
                    <List />
                </Grid>
            </Box>
        </form>
    )
}

export default Form