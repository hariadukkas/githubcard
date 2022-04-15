import React from 'react';
import  Card from './Card.js'

class CardList extends React.Component {
    render() {
        return <div>
            {this.props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
        </div>
    }
}

export default CardList;
