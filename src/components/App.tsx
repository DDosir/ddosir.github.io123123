import React, {useState} from "react";
import {Button, TextField, Paper} from "@material-ui/core";
import {withStyles} from "@material-ui/core";
import styles from "./style";



const App = () => {
    const [access, setAccess] = useState(false);
    const [password, setPassword] = useState('');

    const handleChangeInput = (e: any) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {

        if(password.toLowerCase() === 'teruha'){
            setAccess(true);
        }
        setPassword('');
    }



    return (
        <Paper variant={"outlined"} elevation={3}>
            <TextField type="password"
                       label="пароль для тусовки"
                       variant="outlined"
                       value={password}
                       size={"small"}
                       onChange={handleChangeInput}
            />
            <Button variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    size="medium"
            >
                Primary
            </Button>
        </Paper>
    )
};

export default withStyles(styles)(App);
