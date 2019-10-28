import React from 'react';

class Customer extends React.Component {

    render() {
        return (
                <ul> 
                {
                    this.props.name.map((data, i) => {
                      return <li key={i}>{data.name}</li>
                    }
                )} </ul>
        )
    };
}
export default Customer; 
