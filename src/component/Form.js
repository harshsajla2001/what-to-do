import { TextField, Box, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import List from './List';
import { useState, useContext, useEffect } from 'react'
import { GlobalInfo } from '../App';



function Form() {
    const { getValues, postTodo, getTodo, editTodo, handleUpdate } = useContext(GlobalInfo)
    const [inputVal, setInputVal] = useState()
    useEffect(() => {
        getValues({ setInputVal: setInputVal, inputVal: inputVal })
    }, [inputVal])

    const handleClick = () => {
        postTodo(inputVal)
        console.log(inputVal)

    }
    useEffect(()=>{
        console.log("test from form",inputVal)
    },[inputVal])
    // const getId = (id) => {
    //     setId(id)
    //     console.log(idEdit)

    // }
    



    return (
        <form>
            <Box sx={{ border: "solid red 2px" }}>
                <Grid m={2} p={4} container gap={2} direction="column" justifyContent="center" alignItems="center" sx={{ border: "solid black 2px" }}>
                    <TextField value={inputVal} onChange={(e) => setInputVal(e.target.value)} id="outlined-basic" label="Enter Here" variant="outlined" required sx={{ minWidth: '30%' }} autoFocus={true} />
                    <Button onClick={handleClick} startIcon={<AddIcon fontSize='small' />} variant="outlined" sx={{ minWidth: '8%' }}>Add</Button>
                    <Button onClick={()=> handleUpdate.handleUpdate()} startIcon={<UpgradeIcon fontSize='small' />} variant="outlined" sx={{ minWidth: '8%' }}>Edit</Button>
                    <List />

                </Grid>
            </Box>
        </form>
    )
}

export default Form