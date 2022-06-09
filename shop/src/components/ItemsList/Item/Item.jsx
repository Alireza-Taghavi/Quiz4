import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Item(props) {
    const {item} = props;
    const [amount, setAmount] = React.useState(0);
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            margin: "0.5rem",
            width: "200px",
            border: "2px solid purple",
            borderRadius: "8px",
            padding:"0.2rem"
        }}>
                <img src={item.image} alt={item.name}/>
            <Box sx={{padding: "1rem"}}>
                <Typography>{item.name}</Typography>
                <Typography>{item.category}</Typography>

                <Box sx={{display: "flex", justifyContent: "space-between",alignItems:"center", marginTop: "0.5rem"}}>

                    <Typography sx={{textDecoration:!item.storage ? "line-through" : "none"}}>{item.price}$</Typography>
                    {!item.storage ? <Typography sx={{color:"red", fontSize:"1rem"}}>out of stock</Typography> : null}
                    <IconButton aria-label="buy" disabled={!item.storage}>
                        <AddShoppingCartIcon sx={{cursor: "pointer"}}/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}