import React, {useState} from 'react'
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView

} from 'react-native'

import { styles } from './styles'

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Banana from '../../images/banana.png'

import Button from '../../Button'

const OrganicBananas = ({ navigation }) => {

    const [contador, setContador] = useState(1)

    return (
        <ScrollView>
            <View style={styles.iconsOn}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons
                        style={styles.goBack}
                        name="chevron-back-outline"
                        size={30} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialIcons
                        style={styles.compartilhar}
                        name="save-alt"
                        size={30}
                        color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <View style={styles.imgBackground}>

                    <ImageBackground
                        source={Banana}
                        style={styles.image} />

                </View>
                <View>

                </View>

                <View style={styles.informs}>
                    <Text style={styles.title}>Organic Bananas</Text>
                    <Text style={styles.subTitle}>1kg, Price</Text>
                </View>

                <View style={styles.states}>

                    <TouchableOpacity style={styles.btnMenos}
                        onPress={() => setContador(contador - 1)}>

                        <Text style={styles.menos}> - </Text>

                    </TouchableOpacity>

                    <View style={styles.box}>

                        <Text style={styles.quantidade}> {contador} </Text>

                    </View>

                    <TouchableOpacity style={styles.btnMais}
                        onPress={() => setContador(contador + 1)}>
                        <Text style={styles.mais}> + </Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.formDetail}>
                    <Text style={styles.detail}> Product Detail</Text>
                    <Text style={styles.subDetail}>
                        Apples are nutritious. Apples may be good for weight loss.{'\n'}
                        apples may be good for your heart. As part of a healtful{'\n'}
                        and varied diet.
                    </Text>

                    <Text style={styles.nutrition}> Nutrition </Text>

                </View>
                <View style={styles.review}>
                    <Text style={styles.titleReview}>Review</Text>
                </View>

                <Button>
                    Add to Basket
                </Button>

            </View>
        </ScrollView>
    )
}

export default OrganicBananas
