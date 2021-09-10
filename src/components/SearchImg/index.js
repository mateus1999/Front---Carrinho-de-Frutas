import React from 'react'
import { 
    StyleSheet,
    Text,
    View ,
    TextInput,
    Image

} from 'react-native'

import banner from '../images/banner.png'

import { styles } from './styles'

const SearchImg = () => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Search Store"
            />
            <View>
                <Image
                    source={banner}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

export default SearchImg


