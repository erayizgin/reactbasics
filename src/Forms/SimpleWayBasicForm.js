import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function FormStateSample() {
    const [email, setEmail] = React.useState('');

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log("dasdjhfdsf");
        console.log("Email " + email);
    }

    //setting state
    function handleTextField(e)
    {
        setEmail(e.target.value);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Standard" value={email} onChange= {handleTextField}/> 
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button type="submit" >
            Submit
            </Button>
        </form>
    );
}