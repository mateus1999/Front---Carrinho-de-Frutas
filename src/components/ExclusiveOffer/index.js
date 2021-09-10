import React from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'

import Carne from '../images/Carne.png'
import maça from '../images/maça.png'

import { styles } from './styles'

const ExclusiveOffer = ({ navigation }) => {

    const handleSign = () => {
      
        navigation.navigate('ProductDetail')
      }

    function opress() {
        alert('See All')
    }
    function addCar() {
        alert('Adicionado ao Carrinho')
    }
    return (

        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.offer}>Exclusive Offer</Text>
                <TouchableOpacity onPress={opress}>
                    <Text style={styles.all}>See All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.between}>
                <View style={styles.box}>
                    <Image
                        source={Carne}
                        style={styles.image}
                    />
                    <View>
                        <Text style={styles.title}>Organic Bananas</Text>
                        <Text style={styles.subTitle}>7pcs, Priceg</Text>

                        <View style={styles.valueBtn}>
                            <Text style={styles.value}>$4.99</Text>
                            <TouchableOpacity
                                onPress={addCar}
                                style={styles.btn}>
                                <Text style={styles.btnMais}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Carrinhos de compras */}
                <View style={styles.box}>
                    <Image
                        source={maça}
                        style={styles.image1}
                    />
                    <View>
                        <Text style={styles.title1}>Red Apple</Text>
                        <Text style={styles.subTitle1}>1kg, Priceg</Text>

                        <View style={styles.valueBtn}>
                            <Text style={styles.value}>$4.99</Text>
                            <TouchableOpacity
                                onPress={handleSign}
                                style={styles.btn}>
                                <Text style={styles.btnMais}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ExclusiveOffer


