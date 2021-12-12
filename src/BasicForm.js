import React, {useState, useEffect} from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BasicTable from './BasicTable';
import axios from 'axios';

const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`
})

export default function BasicForm() {
    const [email, setEmail] = React.useState('');
    const [data, setData] = useState([]);

    const [values, setValues] = React.useState({
        name: '',
        months: '',
        kold: ""
      });

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log("Email " + values.name);
        console.log("Months " + values.months);

        api.get("/posts")
        .then(res => {               
            console.log(res.data)
            setData(res.data)
         })
         .catch(error=>{
             console.log("Error")
    });
    }

    //setting state
    function handleTextField(e)
    {
        setEmail(e.target.value);
    }

    const handleTextInputChange = event => {
        setEmail(event.target.value);
    };

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        console.log(event.target.helperText)
      };
    
    //   useEffect(() => { 
    //     api.get("/posts")
    //         .then(res => {               
    //             console.log(res.data)
    //             setData(res.data)
    //          })
    //          .catch(error=>{
    //              console.log("Error")
    //          })
    //   }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* value={email} onChange= {handleTextInputChange} */}
                <TextField id="standard-basic" label="Standard" value={values.name} onChange={handleChange('name')} 
                helperText=""/> 
                <TextField id="filled-basic" label="Filled" variant="filled" value={values.months} onChange={handleChange('months')}/>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField
                    value={values.kold}
                    onChange={handleChange('kold')}
                    error={values.kold === ""}
                    //helperText={values.kold === "" ? 'Empty field!' : ' '}
                    />

                <Button type="submit" >
                Submit
                </Button>
            </form>
            <BasicTable dataFromParent = {data}/>
        </div>
    );
}