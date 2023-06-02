import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { map, text } from 'd3'
import { ScrollView } from '@motify/components'

export default function InformationStack() {

    const { params: {
        title,
        imgUrl,
        description
    } } = useRoute()

    return (
        <ScrollView>
             { description.map( ( texts ) => (
                <View style={ styles.cardBox }>
                    <View style={ styles.content }>
                        <Text style={ styles.title }> { texts.title } </Text>
                        <Text style={ styles.description }> { texts.description }</Text>
                    </View>
                    { (texts.img)  && <Image source={{ uri: texts.img }} style={[ styles.image , { marginTop: 5, borderRadius: 20 }]}/>}
                </View>
             ) ) }
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 200,
    },
    box: {
        marginHorizontal: 10,
        bottom: 10,
    },
    description: {
        color: 'white',
        fontSize: 12,
        fontWeight: '400'
    },
    image: {
        height: 150,
        width: '100%',
        borderRadius: 40,
    },
    content: {

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#888',
    },
    cardBox: {
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        padding: 16,
        marginVertical: 10,
        marginHorizontal: 8
    },
})