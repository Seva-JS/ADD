import React from 'react';
import NamesForMap from './namesForMap'

export default class Name extends React.Component {
    render() {
        return <div>
            {this.props.names.map((name)=>{
                return <NamesForMap
                    name={name}
                    setUpdate={this.props.setUpdate}
                    delName={this.props.del}
                />
            })}
        </div>

    }
}