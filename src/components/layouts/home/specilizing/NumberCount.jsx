import React, { Component } from 'react';

class NumberCount extends Component {
    constructor(props){
        super(props);
        this.state={
            colleft: [
                {
                    id: 1,
                    item: 'f-item color-s1 counter mg-f-item1',
                    datato: '50+',
                    text: 'Hapy Client'
                },
                {
                    id: 2,
                    item: 'f-item color-s1 counter mg-f-item2',
                    datato: '30+',
                    text: 'Review'
                }
            ],
            colright: [
                {
                    id: 3,
                    item: 'f-item color-s1 counter mg-f-item3',
                    datato: '45+',
                    text: 'Project Complate'
                }
            ]
        }
    }
    render() {
        return (
            
                <div className="d-md-flex mg-b40">
                    <div className="col-left">
                        {
                            this.state.colleft.map(data => (
                                <div className={data.item} key={data.id}>
                                    <div className="counter-box bg-s1 d-flex justify-content-center align-items-center">
                                        <div className="inner">
                                            <span className="numb-count" data-from={0} data-to={data.datato} data-speed={2000} data-inviewport="yes">{data.datato}</span>
                                            <p>{data.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>  
                    <div className="col-right">
                        {
                            this.state.colright.map(data => (
                                <div className={data.item} key={data.id}>
                                    <div className="counter-box bg-s1 d-flex justify-content-center align-items-center">
                                        <div className="inner">
                                            <span className="numb-count" data-from={0} data-to={data.datato} data-speed={2000} data-inviewport="yes">{data.datato}</span>
                                            <p>{data.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
        );
    }
}

export default NumberCount;
