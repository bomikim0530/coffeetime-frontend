import React from 'react';
import { Form } from "react-bootstrap";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        let name = document.getElementById("name").value;
        let message = document.getElementById("message").value;
        if (name === '' || message === '') {
        }
        else {
            let comment = new Comment(name, message);
            if (localStorage.getItem(this.props.pageid) == null) {
                let commentArray = [comment]
                localStorage.setItem(this.props.pageid, JSON.stringify(commentArray)) //serialization
            }
            else {
                let retrievedObjects = JSON.parse(localStorage.getItem(this.props.pageid)) //deserialization
                console.log(retrievedObjects)		
                retrievedObjects.push(comment)	
                localStorage.setItem(this.props.pageid, JSON.stringify(retrievedObjects)) //serialization 
            }
        }
    }
    
    render() {
        return(
        <div>
            <form onSubmit={this.submit}>
                <Form.Group controlId="name">
                <Form.Control plaintext readOnly defaultValue="User name" />
                </Form.Group>
                <Form.Group controlId="message">
                <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <input type="submit" name="submit" id="submit" value="Submit" className="btn btn-dark"/></form>
        </div>
        )
    }
} 

class Comment {
	constructor(name, message){
		this.name = name;
		this.message = message;
	}
	setName(name){
		this.name = name;
	}
	getName(){
		return this.name;
	}
	setMessage(message){
		this.message = message;
	}
	getMessage(){
		return this.message;
	}
}

export default CommentForm