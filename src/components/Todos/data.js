/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React from 'react'

const todos = [
    {
        Title: 'Make React Tutorial',
        DateandTime: '20/04/2018'
    },
    {
        Title: 'Lunch',
        DateandTime: '20/04/2018'
    },
    {
        Title: 'Dinner',
        DateandTime: '20/04/2018'
    },
    {
        Title: 'Sleep',
        DateandTime: '20/04/2018'
    }
];

export default class Data extends React.Component {
    static getData() {
        return (
            todos
        );
    }

    static setData(todos) {
        this.setState({
            todos
        });
    }
}
