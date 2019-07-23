import React from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';


function RenderComments({ comments }) {
    return (
        <div>
            <h4>Comments</h4>
            <ListGroup>
                {
                    comments.map((comment) => {

                        if (comment) {
                            return (
                                <ListGroupItem key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <br></br>
                                    <p>{comment.author},</p>
                                    <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                    
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


function RenderDish({ dish }) {
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

const Dishdetail = (props) => {
    const selectedDish = props.dish;
    console.log("render is invoked now")
    if (selectedDish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={selectedDish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
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



export default Dishdetail;