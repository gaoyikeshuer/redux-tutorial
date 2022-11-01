import React from 'react'
import { useState } from 'react'
import {useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice'
const AddPostForm = () => {
    const dispatch = useDispatch()
    //in terms of temporary state like input, we still need to use traditional ways
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onSavePostClicked = () =>{
        if(title && content){
            dispatch(
                postAdded({id: nanoid(), title, content})
            )
            setTitle('')
            setContent('')
        }
    }
  return (
   <section>
    <h2>Add a New Post</h2>
    <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id='postTitle' name='postTitle' value={title} onChange={onTitleChanged} />
        <label htmlFor="postContent">Content:</label>
        <textarea name="postContent" id="postContent" value={content} onChange={onContentChanged} cols="30" rows="10"></textarea>
        <button type='button' onClick={() => onSavePostClicked()}>Save Post</button>
    </form>
   </section>
  )
}

export default AddPostForm