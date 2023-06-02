import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function InformationCard({ title, imgUrl, description }) {

    const navigation = useNavigation()
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('InformationStack', {
                title,
                imgUrl,
                description
            })}
        >
            <Image
                source={{
                    uri: imgUrl
                }}
                style={styles.img}
            />
            <View style={styles.box}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 4,
        position: 'relative',
    },
    img: {
        width: 150,
        height: 100,
        borderRadius: 5
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