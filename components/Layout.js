import React from 'react';
import PageHeader  from '../components/PageHeader.js';

class Layout extends React.Component {
    render() {
        return(
            <div>
                <div  className="container">
                <PageHeader></PageHeader>
                {this.props.children}
                </div>
            
                Layout end
            </div>
        )
    }
} 

export default Layout