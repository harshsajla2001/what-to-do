import React, { useContext } from 'react';
import { Grid, Box, Typography, Divider, Paper } from '@mui/material';
import { GlobalInfo } from '../App';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function List() {
  const { todos, deletTodo, val } = useContext(GlobalInfo)
  return (
    <Grid minWidth='30%' >
      {todos.map((todos, i) => {
        return (
          <Paper key={i} elevation={4}>
            <Grid m={2} sx={{ display: 'flex', justifyContent: 'space-between' }} >
              <Box sx={{ display: 'flex' }}>
                <Typography p={2} >{i + 1}</Typography><Divider orientation="vertical" flexItem />
                <Typography p={2} sx={{ display: 'flex' }}>{todos.todo}  </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Divider orientation="vertical" flexItem />
                <DeleteIcon onClick={() => {
                  deletTodo(todos.id)
                }} sx={{ marginRight: "2rem", marginLeft: '1rem' }} />
                <EditIcon onClick={() => {
                  val.setEditId(todos.id)
                  val.setInputVal(todos.todo)
                  val.setShowBtn(true)

                }} sx={{ marginRight: "1rem" }} />
              </Box>
            </Grid>
          </Paper>
        )
      })}
    </Grid>
  )
}

export default List