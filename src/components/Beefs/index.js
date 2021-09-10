import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image

} from 'react-native'

import { styles } from './styles'

import Carne from '../../components/images/Carne.png'
import Frango from '../../components/images/Frango.png'

const Beefs = () => {
    return (
        <View style={styles.container}>
            <View style={styles.between}>
                <View style={styles.box}>
                    <Image
                        source={Carne}
                        style={styles.image}
                    />
                    <View>
                        <Text style={styles.title}>Beef Bone</Text>
                        <Text style={styles.subTitle}>1kg, Priceg</Text>

                        <View style={styles.valueBtn}>
                            <Text style={styles.value}>$4.99</Text>
                            <TouchableOpacity

                                style={styles.btn}>
                                <Text style={styles.btnMais}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Carrinhos de compras */}
                <View style={styles.box}>
                    <Image
                        source={Frango}
                        style={styles.image1}
                    />
                    <View>
                        <Text style={styles.title1}>Broiler Chicken</Text>
                        <Text style={styles.subTitle1}>1kg, Priceg</Text>

                        <View style={styles.valueBtn}>
                            <Text style={styles.value}>$4.99</Text>
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

export default Beefs

