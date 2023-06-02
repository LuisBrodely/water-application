import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function InformationStack() {

    const { params: {
        title,
        imgUrl,
        description
    } } = useRoute()

    return (
        <View>
            <Image
                source={{
                    uri: imgUrl
                }}
                style={styles.img}
            />
            <Text>{title}</Text>
            <Text>{description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 200,
    },
    box: {
        marginHorizontal: 10,
        position: 'absolute',
        bottom: 10,
    },
    title: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600'
    },
    description: {
        color: 'white',
        fontSize: 12,
        fontWeight: '400'
    }
})