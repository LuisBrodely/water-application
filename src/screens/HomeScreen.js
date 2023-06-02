import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import Information from '../components/Information/Information'
import Wave from '../components/Wave'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react'

const categories = [
    { key: '1', value: '2023' },
    { key: '2', value: '2022' },
    { key: '3', value: '2019' },
    { key: '4', value: '2018' },
    { key: '5', value: '2017' },
    { key: '6', value: '2016' },
    { key: '7', value: '2015' },
]

const years = [
    { key: '1', value: 'Rios' },
    { key: '2', value: 'Lagos' },
    { key: '3', value: 'Mar' },
    { key: '4', value: 'Computers' },
    { key: '5', value: 'Vegetables' },
    { key: '6', value: 'Diary Products' },
    { key: '7', value: 'Drinks' },
]

export default function HomeScreen({ navigation }) {
    const [selected, setSelected] = useState('')
    const [selected2, setSelected2] = useState('')

    return (
        <ScrollView
        contentContainerStyle={{
            paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Text style={{ ...styles.margins, fontSize: 32, fontWeight: '800' }}>Do you already know where to travel?</Text>
                <View style={{ ...styles.margins, marginVertical: 10 }}>
                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={categories}
                        save="value"
                        search={false}
                        defaultOption={categories[0]}
                    />
                </View>
                <View style={{ ...styles.margins, marginVertical: 10 }}>
                    <SelectList
                        setSelected={(val) => setSelected2(val)}
                        data={years}
                        save="value"
                        search={false}
                        defaultOption={years[0]}
                    />
                </View>

                <View style={styles.margins}>
                    <Text style={{ ...styles.texts, marginTop: 20 }}>Calidad del agua</Text>
                </View>

                <View style={{ marginVertical: 105 }}>
                    <Wave color={'#0459C6'} />
                </View>

                <View style={styles.margins}>
                    <Text style={styles.texts}>Formas de cuidar el agua</Text>
                </View>
                <Information />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight + 12,
    },
    margins: {
        marginHorizontal: 20
    },
    texts: {
        fontSize: 14,
        fontWeight: '700'
    }
})
