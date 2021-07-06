import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ContainerLeft extends Component {
    render() {
        return (
            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                <div className="flat-title t1">
                    <h4 className="sub-title mb-2">Website Designs</h4>
                    <h2 className="title-section color-d12 mg-b34">landing page</h2>
                    <div className="description">
                        <p className="lt-sp01">
                        My clients where mostly start-ups or small and mid sized companies, where I was being challenged to build the right features for the right users. 
                        I grow as designer, by collaboration, research, advice, managing people and lead teams to bring their product into reality.

                        </p>
                        <p className="lt-sp01">
                        By focusing on providing solution to a problem or a business need and creating a seamless user experience,
                        the is desirable, unique, sticky and covetable.
                        </p>
                    </div>
                    <div className="fl-btn btn-general btn-hv-border">
                        {/* <Link to="#" className="f-w500 text-one color-1 lt-sp1 border-corner2">View Case Study</Link> */}
                    </div>
                </div>
          </div>
        );
    }
}

export default ContainerLeft;

