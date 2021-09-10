import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles'

import ovo from '../../components/images/ovo.png'
import ovo2 from '../../components/images/ovo2.png'
import feijao from '../../components/images/feijao.png'
import arroz from '../../components/images/arroz.png'

const Search = () => {

  return (

    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.container}>
        <View style={styles.between}>
          <View style={styles.box}>
            <Image
              source={ovo}
              style={styles.image}
            />
            <View style={styles.eggsOne}>
              <Text style={styles.title}>Egg Chicken Red</Text>
              <Text style={styles.subTitle}>4pcs, Price</Text>

              <View style={styles.valueBtn}>
                <Text style={styles.value}>$1.99</Text>
                <TouchableOpacity
                  style={styles.btn}

                >
                  <Text style={styles.btnMais}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Carrinhos de compras */}
          <View style={styles.box}>
            <Image
              source={ovo2}
              style={styles.image1}
            />
            <View>
              <Text style={styles.title1}>Egg Chicken White</Text>
              <Text style={styles.subTitle1}>180pcs, Price</Text>

              <View style={styles.valueBtn}>
                <Text style={styles.value}>$1.50</Text>
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnMais}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Linha 2  */}
        <View style={styles.container}>

          <View style={styles.between}>
            <View style={styles.box}>
              <Image
                source={feijao}
                style={styles.image}
              />
              <View>
                <Text style={styles.title}>Egg Paste</Text>
                <Text style={styles.subTitle}>30gm, Price</Text>

                <View style={styles.valueBtn}>
                  <Text style={styles.value}>$15.99</Text>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnMais}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Carrinhos de compras */}
            <View style={styles.box}>
              <Image
                source={arroz}
                style={styles.image1}
              />
              <View>
                <Text style={styles.title1}>Egg Noodles</Text>
                <Text style={styles.subTitle1}>30gm, Price</Text>

                <View style={styles.valueBtn}>
                  <Text style={styles.value}>$15.50</Text>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnMais}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

      </View>

    </ScrollView>

  );
}

export default Search;
