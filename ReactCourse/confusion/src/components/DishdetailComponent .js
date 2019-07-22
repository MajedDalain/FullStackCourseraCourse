import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';


class Dishdetail extends Component {

    constructor(props) {
        super();
    }


    renderComments = () => {
        return (
            <div>
                <h4>Comments</h4>
                <ListGroup>
                    {
                        this.props.dish.comments.map((comment) => {
                            
                            if (comment) {
                                return (
                                    <ListGroupItem key={comment.id}>
                                        <p>{comment.comment}</p>
                                        <span>{comment.author},</span>
                                        <span> {comment.date}</span>
                                    </ListGroupItem>
                                )
                            }
                            else {
                                return <li></li>
                            }

                        })
                    }
                </ListGroup>
            </div>
        );


    }


    renderDish(dish) {
        return (
            <div>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    render() {
        const selectedDish = this.props.dish;
        if (selectedDish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(selectedDish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments()}
                        </div>
                    </div>
                </div>

            );
        }
        else {
            return (
                <div>
                    <h1>Empty now</h1>
                </div>
            );
        }

    }

}


export default Dishdetail;