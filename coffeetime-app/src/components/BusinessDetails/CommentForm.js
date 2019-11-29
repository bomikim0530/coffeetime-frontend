import React from 'react';
import { Form } from "react-bootstrap";

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
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
                let latestComments = JSON.parse(localStorage.getItem(this.props.pageid)) //deserialization
                latestComments.push(comment)
                localStorage.setItem(this.props.pageid, JSON.stringify(latestComments)) //serialization 
            }
        }
        this.props.refreshCommentsView();
    }

    render() {
        return (
            <div className="my-2">
                <form onSubmit={(e) => this.submit(e)}>
                    <Form.Group controlId="name" className="d-none">
                        <Form.Control plaintext readOnly defaultValue={this.props.username} />
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <input type="submit" name="submit" id="submit" value="Submit" className="btn btn-dark float-right" /></form>
            </div>
        )
    }
}

class Comment {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setMessage(message) {
        this.message = message;
    }
    getMessage() {
        return this.message;
    }
}

export default CommentForm