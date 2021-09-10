import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import { styles } from './styles'

import BestSelling from '../../components/BestSelling'
import Search from '../../components/Search'
import SearchImg from '../../components/SearchImg';
import Groceries from '../../components/Groceries'
import Beefs from '../../components/Beefs'
import Routes from '../routes'

import Banana from '../../components/images/banana.png'
import maça from '../../components/images/maça.png'


const HomeScreen = ({ navigation }) => {

  function opress() {
    alert('See All')
  }
  function addCar() {
    alert('Adicionado ao Carrinho')
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}>


      <View style={styles.container}>
        {/* Header */}
        <SearchImg />

        {/* Exclusive Offer - Alimentos */}
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
                source={Banana}
                style={styles.image}
              />
              <View>
                <Text style={styles.title}>Organic Bananas</Text>
                <Text style={styles.subTitle}>7pcs, Priceg</Text>

                <View style={styles.valueBtn}>
                  <Text style={styles.value}>$4.99</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('OrganicBananas')}
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
                    onPress={() => navigation.navigate('ProductDetail')}
                    style={styles.btn}>
                    <Text style={styles.btnMais}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Best Selling - Alimentos */}
        <BestSelling />

        <Groceries />

        {/* Carnes/Beefs - Alimentos */}
        <Beefs />

        <Search />
      </View >
      <View
        style={{
          position: 'relative'}}
      >
      <Routes />
      </View>
    </ScrollView>
  );
}
export default HomeScreen