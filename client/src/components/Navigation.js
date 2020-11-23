import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navigation = () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h6' style={{flexGrow: 1}}>Travel Pal</Typography>
            </Toolbar>
        </AppBar>
    )
};

export default Navigation