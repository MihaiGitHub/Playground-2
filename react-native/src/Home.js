import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, TextInput, Button } from 'react-native';
import { getPosts } from './apiCore';

const Home = () => {
    const [ posts, setPosts ] = useState([]);
    const [ fname, setFname ] = useState('');

    const init = () => {
        getPosts().then(response => {
            setPosts(response);
        });
    }

    useEffect(() => {
        init();
    }, []);

    const handleButton = () => {
        console.log('handlebutton', fname)
    }

    return (
        <View style={styles.container}>
            <TextInput onChangeText={value => setFname(value)} placeholder="First Name" />
            <Button onPress={handleButton} title="Save User" />

            <FlatList
                ItemSeparatorComponent={
                    Platform.OS !== 'android' &&
                    (({ highlighted }) => (
                    <View
                        style={[
                        style.separator,
                        highlighted && { marginLeft: 0 }
                        ]}
                    />
                    ))
                }
                data={posts}
                renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                    key={index}
                    onPress={() => this._onPress(item)}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                    <View style={{ backgroundColor: 'white' }}>
                        <Text>{item.title}</Text>
                    </View>
                    </TouchableHighlight>
                )}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 55
    },
});

export default Home;