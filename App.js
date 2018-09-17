import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redBar}>
          <Image
            style={[styles.logoView, { height: 128 }]}
            source={require('./assets/logo.png')}
            resizeMode='contain'
            fadeDuration={0}
          />
        </View>
        <View style={styles.vouchers}>
          <ScrollView style={{ flex: 1 }}>
            <View styles={styles.time}>
              <Text style={styles.today}>Today's offers</Text>
            </View>
            <View style={styles.voucherList}>
              <Image
                style={styles.offers}
                source={require('./assets/deals1.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals2.png')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals3.png')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals4.png')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals5.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals6.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals7.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals9.jpg')}
                resizeMode='cover'
              />
            </View>
            <View styles={styles.time}>
              <Text style={styles.today}>This week's offers</Text>
            </View>
            <View style={styles.voucherList}>
              <Image
                style={styles.offers}
                source={require('./assets/deals1.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals2.png')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals3.png')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals4.png')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals5.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals6.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals7.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals9.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals10.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals11.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals12.jpeg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals13.jpg')}
                resizeMode='cover'
              />
              <Image
                style={styles.offers}
                source={require('./assets/deals14.jpeg')}
                resizeMode='cover'
              />
            </View>



          </ScrollView>

        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  redBar: {
    backgroundColor: '#d43939',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    top: '0%',
    width: '100%'
  },

  vouchers: {
    position: 'absolute',
    top: 128,
    bottom: 0,
    width: '100%',
    //backgroundColor: '#E0E'
  },
  time: {
    position: 'relative',
    top: 128,
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFF'
  },

  today: {
    fontWeight: "bold",
    fontSize: 16,
    //backgroundColor: '#F7E',
    height: 40,
    lineHeight: 40,
    marginTop: 5
  },

  offers: {
    borderRadius: 5,
    width: 75,
    height: 75,
    margin: 5,
  },

  voucherList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    

  },

});
