import * as React from 'react';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {Box, IconButton, Typography} from "@mui/material";

export default function Header(props) {
    return (
        <Box sx={{display: "flex", flexDirection: "row",color:"white", justifyContent:"space-between", background:"purple", p:"1rem", }}>
        <Typography >
            Best Shop Ever
        </Typography>
            <IconButton color="primary" aria-label="cart" >
        <LocalGroceryStoreIcon/>
            </IconButton>

        </Box>
    );
}
