import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post'
import {Loader} from './loader'
import {fetchPosts} from '../redux/actions'

export default () => {
    const dispatch = useDispatch() // Позволяется вызывать экшены
    const posts = useSelector(state => state.posts.fetchedPosts) // Берет нужные данные из стора (замена connect(..., ...))
    const loading = useSelector(state => state.app.loading)

    if(loading) {
        return (
           <Loader></Loader>
        )
    }

    if(!posts.length){
        return <button 
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
        >Загрузить?</button>
    }
    return posts.map(post => <Post key={post.id} post={post}></Post>)
}