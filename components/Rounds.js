import React, {Component} from 'react';
import {FlatList} from 'react-native';
import SingleRound from './SingleRound';

export default class Rounds extends Component {
    render() {
        const {rounds} = this.props;

        return (
            <FlatList
                data={rounds}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({item}) => (
                    <SingleRound
                        item={item}
                    />
                )}
            />
        );
    }
}
