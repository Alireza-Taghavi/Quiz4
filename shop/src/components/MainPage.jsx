import {Box} from "@mui/material";
import Header from "./Header/Header";
import ItemsList from "./ItemsList/ItemsList";
import items from "./items.json";

export default function MainPage() {
    return (
        <Box sx={{display:"flex", flexDirection:"column"}}>
            <Header/>
            <ItemsList items={items}/>
        </Box>
    );
}