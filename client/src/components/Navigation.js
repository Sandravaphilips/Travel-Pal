import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const Navigation = () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h6' style={{flexGrow: 1}}>Travel Pal</Typography>
                <Link to='/login' className='logout'>Login</Link>
            </Toolbar>
        </AppBar>
    )
};

export default Navigation