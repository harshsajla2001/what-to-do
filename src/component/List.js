import React, { useContext, useEffect, useState } from 'react';
import { Grid, Box, Typography, Divider } from '@mui/material';
import { GlobalInfo } from '../App';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

function List() {
  const { todos, getValues, getTodo, deletTodo } = useContext(GlobalInfo)
  // console.log("test2 from list",todos)
  // console.log(todos[2].id)
  // const deletTodo = async (id) => {
  //   axios.delete(`http://localhost:3004/todoList/${id}/`)
  //     .then(() => getTodo()).catch(error => {
  //       console.log(error);
  //     });
  // }

  // const val = todos.map((data)=>{
  //   const da = data
  //   const id = da.map((value)=>{
  //     return value.userId
  //   })
  //   console.log(id)
  // })
  // const val = todos.map((data) => {
  //   return data
  // }
  // )

  // const test = val.map((check) => {
  //   return check
  // })

  // const todoData = test.map(data => data)
  // console.log(todoData, "ye wala")
  return (
    <Grid sx={{ border: "solid orange 2px" }} minWidth='30%' >
      {todos.map((todos, i) => {
        return (<Grid key={i} sx={{ border: "solid purple 2px", display: 'flex', justifyContent: 'space-between' }} >
          <Box sx={{ display: 'flex' }}>
            <Typography p={2} >{todos.id}</Typography><Divider orientation="vertical" flexItem />
            <Typography p={2} sx={{ display: 'flex' }}>{todos.todo}  </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Divider orientation="vertical" flexItem />
            <DeleteIcon onClick={() => {
              deletTodo(todos.id)
              console.log("test delete", todos.id )
            }} sx={{ marginRight: "2rem", marginLeft: '1rem' }} />
            <EditIcon sx={{ marginRight: "1rem" }} />
          </Box>
        </Grid>)
      })}
    </Grid>
  )
}

export default List