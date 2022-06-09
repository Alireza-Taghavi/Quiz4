import React from 'react';
import {Box, Slider, TextField, Typography} from "@mui/material";
import Item from "./Item/Item";

export default function ItemsList(props) {


    const {items} = props;
    const [search, setSearch] = React.useState("");


    function valuetext(value) {
        return `${value}$`;
    }

    const minDistance = 5;

    const [value1, setValue1] = React.useState([0, 200]);

    const handleChangeRange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <Box sx={{display: "flex", flexDirection: "column", p: "4rem", width: {xs: "90%", md: "70%"}, gap: "2rem"}}>
            <TextField id="search" label="search" variant="standard" onChange={event => setSearch(event.target.value)}/>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value1}
                onChange={handleChangeRange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={10} max={200}
                disableSwap
            />
            <Box sx={{display: "flex", flexWrap: "wrap"}}>
                {

                    items.filter(post => {
                        if (search === '') {
                            if (post.price >= value1[0] && post.price <= value1[1]) {
                            return post}
                        } else if (post.name.toLowerCase().includes(search.toLowerCase())) {
                            if (post.price >= value1[0] && post.price <= value1[1]) {
                                return post}
                        }

                    }).map((post, index) => (
                        <Item key={index} item={post}/>
                    ))
                }
            </Box>
        </Box>
    );
}
