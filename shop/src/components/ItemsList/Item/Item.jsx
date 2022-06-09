import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Item (props) {
    const {item} = props;
    return (
        <Box sx={{display:"flex", flexDirection:"column",margin:"0.5rem", width:"200px", border:"2px solid purple", borderRadius:"8px"}}>
        <img src={item.image} alt={item.name}/>
        <Box sx={{padding:"1rem"}}>
            <Typography>{item.name}</Typography>
            <Typography>{item.category}</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", marginTop:"0.5rem"}}>
            <Typography>{item.price}$</Typography>
                <IconButton aria-label="buy">
            <AddShoppingCartIcon sx={{cursor:"pointer"}}/>
                </IconButton>
            </Box>
        </Box>
            </Box>
        )}