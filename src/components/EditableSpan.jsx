import React, {useState} from 'react';
import {TextField} from '@material-ui/core';



export function EditableSpan(props) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ?    <TextField variant="outlined"
                        value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
}
