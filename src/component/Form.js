import { TextField, Box, Grid, Button, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import List from './List';
import { useState, useContext, useEffect } from 'react'
import { GlobalInfo } from '../App';



function Form() {
    const { getValues, postTodo, editTodo } = useContext(GlobalInfo)
    const [inputVal, setInputVal] = useState("")
    const [editId, setEditId] = useState()
    const [showBtn, setShowBtn] = useState(false)
    // Function to export functions and variables to the parant component
    useEffect(() => {
        getValues({ editId, setEditId, setInputVal, inputVal, setShowBtn, showBtn })
    }, [editId, showBtn, inputVal, getValues])
    return (
        <form>
            <Box>
                <Grid m={1} p={4} pb={1} mb={0} container gap={2} direction="row" justifyContent="center" alignItems="center" >
                    <Paper elevation={3} >
                        <TextField value={inputVal} onChange={(e) => setInputVal(e.target.value)} id="outlined-basic" label="Enter Here" variant="outlined" required sx={{ minWidth: '30%' }} autoFocus={true} />
                    </Paper>
                    <Paper elevation={3} >

                        <Button onClick={() => {
                            postTodo(inputVal)
                            setShowBtn(false)
                            setInputVal('')
                        }} startIcon={<AddIcon fontSize='small' />} variant="outlined" sx={{ minWidth: '8%' }}>Add</Button>
                    </Paper>
                    {showBtn && <Paper elevation={3} > <Button onClick={() => {
                        editTodo(editId, inputVal)
                        setShowBtn(false)
                        setInputVal('')
                    }} startIcon={<SystemUpdateAltIcon fontSize='small' />} variant="outlined" sx={{ minWidth: '8%' }}>Update</Button></Paper>}

                </Grid>
                <Grid m={1} p={4} mt={0} container gap={2} direction="column" justifyContent="center" alignItems="center" ><List /></Grid>
            </Box>
        </form>
    )
}

export default Form