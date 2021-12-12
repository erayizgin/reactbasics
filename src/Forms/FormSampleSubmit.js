import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function FormSampleSubmit() {
    const [values, setValues] = React.useState({
        name: '',
        months: ''
      });

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log("dasdjhfdsf");
        console.log("Email " + values.name);
    }

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
    
    return (
        <form onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Standard" value={values.name} onChange={handleChange('name')}/> 
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button type="submit" >
            Submit
            </Button>
        </form>
    );
}