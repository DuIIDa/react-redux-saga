import React from 'react';
import {connect} from 'react-redux'
import Post from './Post'

const Posts = ({syncPosts}) => {
    if(!syncPosts.length){
        return <p>Постов нет!</p>
    }
    return syncPosts.map(post => <Post key={post.id} post={post}></Post>)
}

//Выбираем какие данные пойдут в props и под каким названием
const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)