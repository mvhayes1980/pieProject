// CHILD Component

import React from 'react';
import './Pie.css';
import {CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap';

const Pie = (props) => {
    console.log(props);
    console.log(props.passedPie.nameOfPie);
    return(
        <CardBody>
            <CardTitle>{props.passedPie.nameOfPie}</CardTitle>
            <CardText>{props.passedPie.baseOfPie}</CardText>
            <CardText>{props.passedPie.crust}</CardText>
            <CardText>{props.passedPie.timeToBake} minutes to bake</CardText>
            <CardText>{props.passedPie.servings} servings</CardText>
            <CardSubtitle>{props.passedPie.rating} out of 5</CardSubtitle>
        </CardBody>
    );
};

export default Pie;