import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import InformationCard from './InformationCard'

export default function Information() {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        <InformationCard
            title={'El Poder del Verde'}
            imgUrl={'https://th.bing.com/th/id/OIP.srR_DMp9GoXWFKvSAxAx1AHaHW?pid=ImgDet&rs=1'}
            description={'XD'}
        />
        <InformationCard
            title={'No seas un Agua Sucia!'}
            imgUrl={'https://th.bing.com/th/id/OIP.srR_DMp9GoXWFKvSAxAx1AHaHW?pid=ImgDet&rs=1'}
            description={'XD'}
        />
        <InformationCard
            title={'La Naturaleza es el Filtro Mágico'}
            imgUrl={'https://th.bing.com/th/id/OIP.srR_DMp9GoXWFKvSAxAx1AHaHW?pid=ImgDet&rs=1'}
            description={'XD'}
        />
        <InformationCard
            title={'Ahorrando H2O como un Pro'}
            imgUrl={'https://th.bing.com/th/id/OIP.srR_DMp9GoXWFKvSAxAx1AHaHW?pid=ImgDet&rs=1'}
            description={'XD'}
        />
        <InformationCard
            title={'Misión Agua Consciente'}
            imgUrl={'https://th.bing.com/th/id/OIP.srR_DMp9GoXWFKvSAxAx1AHaHW?pid=ImgDet&rs=1'}
            description={'Description'}
        />
    </ScrollView>
  )
}