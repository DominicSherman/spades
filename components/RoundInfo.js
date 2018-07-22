import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Round from './Round';
import {styles} from '../constants/styles';

export default class RoundInfo extends Component {
    render() {
        const {rounds} = this.props;

        return (
            <FlatList
                data={rounds}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({item}) => (
                    <Round
                        item={item}
                    />
                )}
            />
        );
    }
}
