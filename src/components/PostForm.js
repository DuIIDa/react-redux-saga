import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createPost, showAlert} from './../redux/actions'
import {Alert} from './alert'

class PostForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const {title} = this.state

        if(!title.trim()) {
            return this.props.showAlert('Error!!!You don\' know how to write?')
        }

        const newPost = {
            title, id: Date.now().toString()
        }
        
        this.props.createPost(newPost)
        this.setState({title: ''})
    }

    changeinputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))   
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>

                {this.props.alert && <Alert text={this.props.alert}></Alert>}
                
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input  
                        type="text" 
                        className="form-control" 
                        id="title" 
                        value={this.state.title}
                        name="title"  
                        onChange={this.changeinputHandler}
                    ></input>
                </div>
                <button type="submit" className="btn btn-success">Создать пост</button>
            </form>
        )
    }
}

//Выбираем какие функция пойдут в props
const mapDispatchToProps = {
    createPost,
    showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)