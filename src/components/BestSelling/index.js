import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image

} from 'react-native'

import { styles } from './styles'

import tomate from '../images/tomate.png'
import batata from '../images/batata.png'

function opress(){
    alert('See All')
  }

const BestSelling = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={styles.offer1}>Best Selling</Text>
                <TouchableOpacity onPress={opress}>
                    <Text style={styles.all1}>See All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.between}>
                <View style={styles.box}>
                    <Image
                        source={tomate}
                        style={styles.image}
                    />
                    <View>
                        <Text style={styles.title}>Bell Pepper Red</Text>
                        <Text style={styles.subTitle}>1kg, Priceg</Text>

                        <View style={styles.valueBtn}>
                            <Text style={styles.value}>$4.99</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('BellPepperRed')}
                                style={styles.btn}>
                                <Text style={styles.btnMais}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Carrinhos de compras */}
                <View style={styles.box}>
                    <Image
                        source={batata}
                        style={styles.image1}
                    />
                    <View>
                        <Text style={styles.title1}>Ginger</Text>
                        <Text style={styles.subTitle1}>250gm, Priceg</Text>

                        <View style={styles.valueBtn}>
                            <Text style={styles.value}>$2.99</Text>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btnMais}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BestSelling
