import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class EducationRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            skill: [
                {
                    id: 1,
                    timeline: 'timeline-inverted color1',
                    info: 'Universite of Himachal Pradesh',
                    title: 'Masters in Computer Applications',
                    text: 'Post-graduate degree course for computer application development. '
                },
                {
                    id: 2,
                    timeline: 'timeline-inverted color2',
                    info: 'Stanford Online',
                    title: 'Machine Learning',
                    text: 'Machine learning is the science of getting computers to act without being explicitly programmed. . '
                },
                {
                    id: 3,
                    timeline: 'timeline-inverted color3',
                    info: 'IBM Developer Skills Network',
                    title: 'Blockchain',
                    text: 'Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network.  '
                }
            ]
        }
    }
    render() {
        return (
            <div className="col-right">
                <div className="flat-spacer" data-desktop={0} data-mobile={70} data-smobile={70} />
                <div className="flat-title t1 animate-element wow delay5 fadeInDown">
                    <h4 className="sub-title mg-b13">Educational qualification</h4>
                    <h2 className="title-section color-d12">My Education</h2>
                </div>
                <div className="timelines position-relative animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                    <ul className="timeline">
                        {
                            this.state.skill.map(data => (
                                <li className={data.timeline} key={data.id}>
                                    <div className="timeline-badge" />
                                    <div className="timeline-panel">
                                        <h3 className="f-info">{data.info}</h3>
                                        <div className="s-info">{data.title}</div>
                                        <p>
                                            {data.text}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                    <div className="fl-btn btn-general btn-hv-border">
                    <a href="https://drive.google.com/file/d/1MGVwHGSZ8qc5D6P6hKvMedrw8b7Fo_Nu/view?usp=sharing" className="f-w500 lt-sp1 border-corner2 text-one" target="_blank">Download Resume</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationRight;
