// PARENT component

import React, {useState} from 'react';
import './Pies.css';
import {Card} from 'reactstrap';
import Pie from './Pie/Pie';

const Pies = () => {
    const [pies, setPies] = useState([]);

    /*
    const pumpkinPie = {
        nameOfPie: 'Pumpkin',
        baseOfPie: 'Pumpkin Puree',
        crust: 'Pastry',
        timeToBake: 50,
        servings: 8,
        rating: 4
    }
    */
   const hardCodedPies = [
    {
        nameOfPie: 'Pumpkin',
        baseOfPie: 'Pumpkin puree',
        crust: 'Pastry',
        timeToBake: 50,
        servings: 8,
        rating: 4.2
    },
    {
        nameOfPie: 'Apple',
        baseOfPie: 'Jam',
        crust: 'Graham cracker',
        timeToBake: 30,
        servings: 6,
        rating: 4.0
    },
    {
        nameOfPie: 'Chocolate',
        baseOfPie: 'Pudding',
        crust: 'Pastry',
        timeToBake: 20,
        servings: 8,
        rating: 5.0
    }
];

    const pieCards = () => {
        return hardCodedPies.map((pie, index) => {
            return(
                <Card key={index} className="cardName">
                    <Pie passedPie={pie} />
                </Card>
            )
        })
    }

    return(
        // <Card className="cardName">
        //     <Pie  passedPie={hardCodedPies} />
        // </Card>
        <div className="mainDiv">
            {pieCards()}
        </div>
    );
};

export default Pies;