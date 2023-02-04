import React, { useState } from 'react'
import { useEffect } from 'react'
import API from '../../api'
import Comments from '../comments/Comments'
import classes from './PostList.module.css'


function PostList() {
    const [posts,setPosts]= useState([])
    const [show,setShow]=useState()
    useEffect(() => {
        API.get ()
        .then( resp =>
            {
            console.log('useEffect'); 
            setPosts(resp.data)
            }
        )
    },[])
    return (
        <div className={classes.postList}> 
        <ul>
            {posts.map(p => 
                <li className={classes.posts} key={p.id}>
                    {p.title}
                    <button className={classes.button}
                    onClick={(e)=>{
                    if (show){
                        setShow(null)
                    }else{
                        setShow(p.id)
                    }
                    }}>COMMENTS</button>
                    {p.id == show && <Comments id ={p.id}/>}
                </li>
                )}
        </ul>
        </div>
    )
}

export default PostList
