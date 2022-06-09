import React from 'react';
import {Box, TextField, Typography} from "@mui/material";
import Item from "./Item/Item";

export default function ItemsList(props) {
    const {items} = props;
    const [search, setSearch] = React.useState("");

    return (
        <Box sx={{display:"flex", flexDirection:"column", p:"4rem", width:{xs:"90%", md:"70%"}, gap:"2rem"}}>
            <TextField id="search" label="search" variant="standard" onChange={event => setSearch(event.target.value)}/>
        <Box sx={{display: "flex", flexWrap:"wrap"}}>
            {
                items.filter(post => {
                    if (search === '') {
                        return (
                            <Typography>No items found</Typography>
                        );
                    } else if (post.name.toLowerCase().includes(search.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) => (
                    <Item key={index} item={post}/>
                ))
            }
        </Box>
        </Box>
            )}
