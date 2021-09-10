import React from 'react'
import {
    View,
    ScrollView,
    Image,
    Text,
    TouchableOpacity

} from 'react-native'

import { styles } from './styles'

import Pizza from '../../components/images/Pizza.png'
import Doce from '../../components/images/Doce.png'

const Groceries = () => {
    return (

        <View style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.scroll}>

                <View style={styles.box1}>
                    <TouchableOpacity>
                        <Image
                            source={Pizza}
                            style={styles.pizza}
                        />
                    </TouchableOpacity>
                    <Text style={styles.pulses}>Pulses</Text>
                </View>

                <View style={styles.box2}>
                    <TouchableOpacity>
                        <Image
                            source={Doce}
                            style={styles.doce} />
                    </TouchableOpacity>
                    <Text style={styles.pulses}>Rices</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Groceries

