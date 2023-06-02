import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import Information from '../components/Information/Information'
import Wave from '../components/Wave'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={{...styles.margins, flexDirection: 'row', alignItems: 'center', marginBottom: 14}}>
                <Icon name={'water'} size={50} color={'#2380FB'} />
                <View>
                    <Text style={{fontWeight: '600', fontSize: 24}}>Overview</Text>
                    <Text style={{fontWeight: '600', fontSize: 14, color: '#727272'}}>SEMARNAT Y CONAGUA</Text>
                </View>
            </View>

            <View style={styles.margins}>
                <Text style={{ ...styles.texts, marginTop: 20 }}>Calidad del agua</Text>
            </View>

            <View style={{ marginVertical: 150 }}>
                <Wave color={'#554348'} />
            </View>

            <View style={styles.margins}>
                <Text style={styles.texts}>¿Cómo cuidar el agua?</Text>
            </View>
            <Information />

            <View style={styles.margins}>
                <Text style={{ ...styles.texts, marginTop: 20 }}>Graficas</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight + 20,
    },
    margins: {
        marginHorizontal: 20
    },
    texts: {
        fontSize: 24,
        fontWeight: '700'
    }
})
