import React from 'react'
import { useEffect,useState } from 'react'
import API from '../../api'
import classes from './Comments.module.css'

function Comments({id}) {
        const [comments,setComments]= useState([])
        useEffect(() => {
            API.get (`${id}/comments`)
            .then( resp =>setComments(resp.data))
        },[])
    return (
        <div className={classes.h5}>
        {comments.map(comments =>
        <div  key={comments.id}>
        <h5> Name: {comments.name}</h5>
        <h5> Number: {comments.id}</h5>
        <h5> Email: {comments.email}</h5>
        </div>)}
        </div>
    )
            }
export default Comments
