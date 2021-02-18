import React from 'react';
import {Card, CardHeader,CardBody,CardFooter,Button }from "reactstrap";


const CardItem = (props) => {

    console.log(props);

    return (
        <Card>
            <CardHeader>
<h3>{props.title}</h3>
            </CardHeader>
            <CardBody>
                <p>{props.description}</p>
            </CardBody>
            <CardFooter>
                <Button color={props.color}>Click me!</Button>
            </CardFooter>
        </Card>
    );
};

export default CardItem;