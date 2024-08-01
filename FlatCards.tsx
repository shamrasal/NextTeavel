import React from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    Image,
} from 'react-native';

const FlatCards = () => {
    return (
        <View style={styles.container}>
            <View style={styles.firstCard}>
                <Image style={styles.imageCard} source={{
                    uri:'https://www.shutterstock.com/shutterstock/photos/753879010/display_1500/stock-photo--city-palace-and-tourist-boat-on-lake-pichola-udaipur-rajasthan-india-753879010.jpg'
                }}/>
            </View>
            <View style={styles.secondCard}>
                <Image style={styles.imageCard} source={{
                    uri:'https://www.shutterstock.com/shutterstock/photos/2211395199/display_1500/stock-photo-the-india-gate-or-all-india-war-memorial-with-illuminated-in-new-delhi-in-india-2211395199.jpg'
                }}/>
            </View>
            <View style={styles.thirdCard}>
                <Image style={styles.imageCard} source={{
                    uri:'https://www.shutterstock.com/shutterstock/photos/2290430461/display_1500/stock-photo-the-lotus-temple-is-located-in-new-delhi-india-2290430461.jpg'
                }}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        width: '100%',
    },
    firstCard:{
        backgroundColor: 'red',
        width: 100,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        flex:1,
        height: 100,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
    },
    imageCard:{
        backgroundColor:'grey',
        padding:5,
        height:'100%',
        width:'100%',
        flex:1,
        alignItems: 'center',
    },
    secondCard:{
        backgroundColor: 'yellow',
        width: 100,
        height: 100,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        flex:1,
    },
    thirdCard:{
        backgroundColor: 'green',
        width: 100,
        height: 100,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        flex:1,
    }
})

export default FlatCards;
