import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Box, Button, FormControl, IconButton, TextField} from '@material-ui/core';
import {AddBox} from '@material-ui/icons';



export function AddItemForm(props) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        <TextField variant="outlined"
                   error={!!error}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   label="Title"
                   helperText={error}
        />
        <IconButton color="primary" onClick={addItem}>
            <AddBox />
        </IconButton>
    </div>
}
