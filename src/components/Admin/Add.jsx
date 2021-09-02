import { IconButton, Paper, makeStyles, TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { productContext } from '../../contexts/ProductsContext';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '40px auto',
        maxWidth: 1000,
        height: 'auto'
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
        }
    }
}))

const Add = () => {
    const classes = useStyles()
    let history = useHistory()
    const [values, setValues] = useState({
        title: '',
        image: '',
        type: '',
        price: 0,
        description: ''
    })

    const { addProduct } = useContext(productContext)

    const handleInp = (e) => {
        if (e.target.name == 'price') {

            let obj = {
                ...values,
                [e.target.name]: Number(e.target.value)
            }
            setValues(obj)

        } else {
            let obj = {
                ...values,
                [e.target.name]: (e.target.value)
            }
            setValues(obj)
        }
    }

    const handleSave = () => {
        if (!values.image) values.image = "https://wecommdigital.com/wp-content/uploads/2020/04/Why-impactful-banding-is-necessary-in-education-sector-WD.jpg"
        addProduct(values)
        history.push('/')
    }
    return (
        <Paper elevation={3} className={classes.paper}>
            <h1 style={{ textAlign: 'center' }}>Add product</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', color: 'black' }}>
                <div>
                    <img style={{ width: '400px' }} src={values.image ? values.image : "https://wecommdigital.com/wp-content/uploads/2020/04/Why-impactful-banding-is-necessary-in-education-sector-WD.jpg"} alt=" image" />
                </div>

                <div
                    style={{
                        width: '450px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                    <form className={classes.root} noValidate autoComplete='off'>
                        <TextField name='title' onChange={handleInp} variant='outlined' label='Title' />
                        <TextField name='image' onChange={handleInp} variant='outlined' label='Image' />
                        <TextField name='type' onChange={handleInp} variant='outlined' label='Type' />
                        <TextField name='price' onChange={handleInp} variant='outlined' label='Price' />
                        <TextField name='description' onChange={handleInp} variant='outlined' label='Description' />
                    </form>
                    {/* <Link to="add"> */}
                    <IconButton aria-label="share" onClick={handleSave}>
                        <Button variant="contained" color="secondary">Add</Button>
                    </IconButton>
                    {/* </Link> */}
                </div>
            </div>
        </Paper>
    );
};

export default Add;