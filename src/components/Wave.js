import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { MotiView } from '@motify/components'
import { Easing } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const _size = 50
const _color = '#2380FB'

export default function Wave({color}) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={[styles.dot, styles.center]}>
                {[...Array(3).keys()].map(index => {
                    return (
                        <MotiView
                            from={{ opacity: 1, scale: 1 }}
                            animate={{ opacity: 0, scale: 6 }}
                            transition={{
                                type: 'timing',
                                duration: 3000,
                                easing: Easing.out(Easing.ease),
                                delay: index * 400,
                                repeatReverse: false,
                                loop: true,
                            }}
                            key={index}
                            style={[StyleSheet.absoluteFillObject, styles.dot, {backgroundColor: color}]}
                        />
                    )
                })}
                <Icon name={'water'} size={35} color={'white'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        width: _size,
        height: _size,
        borderRadius: _size,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})