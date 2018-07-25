import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Score from './Round';

export default class Score extends Component {
    render() {
        const {rounds} = this.props;

        return (
            <FlatList
                data={rounds}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({item}) => (
                    <Score
                        item={item}
                    />
                )}
            />
        );
    }
}
