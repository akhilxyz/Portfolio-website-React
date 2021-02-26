import React, { Component } from 'react';

class Testimonial extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: './images/testimonial/p1.jpg',
                    alt: 'images',
                    text01: 'Excellent design, great communication, fast turnaround of revisions. I had a ',
                    text02: 'clear vision of what I wanted. Akhil did not just deliver it he',
                    text03: 'aimproved upon it substantially. Recommended!',
                    name: 'Yacapaca',
                    classname: 'testimonial-t1 text-center'
                },
                
                {
                    id: 2,
                    img: './images/testimonial/p2.jpeg',
                    alt: 'images',
                    text01: 'Akhil was a real pleasure to work with and we look forward to working with him again. ',
                    text02: 'He’s definitely the kind of designer you can trust with a project from start to finish.',
                    name: 'Rohan',
                    classname: 'testimonial-t1 text-center'
                },
                {
                    id: 3,
                    img: './images/testimonial/p3.jpg',
                    alt: 'images',
                    text01: 'Without doubt one of the most talented programmers out there. I always go back to Warren',
                    text02: `I'm out of my depth and he's never failed to deliver what I ask for.`,
                    text03: `Smart, trustworthy and professional. You won't be disappointed.`,
                    name: 'Lisa',
                    classname: 'testimonial-t1 text-center'
                }
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <div className="custom-dot dot-t1 dot-s1 none-nav-default mg-dots-s1">
                    <div className="flat-carousel-box data-effect clearfix" data-gap={0} data-column={1} data-column2={1} data-column3={1} data-column4={1} data-column5={1} data-dots="true" data-auto="false" data-nav="false" data-loop="true">
                        <div className="owl-carousel">
                            {
                                this.state.testimonial.map(data => (
                                    
                                    <div className={data.classname} key={data.id}>
                                                    <div className="avatar mg-b29"><img src={data.img} alt={data.alt} /></div>
                                                    <p className="lt-sp03 mg-b25">
                                                        {data.text01}<br /> {data.text02} <br/>{data.text03}
                                                    </p>
                                        <h3 className="name f-w600">{data.name}</h3>
                                    </div> 
                                ))
                            }
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Testimonial;
