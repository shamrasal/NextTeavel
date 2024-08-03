import React from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    ScrollView,
    Image,
    Linking,
    TouchableOpacity
} from 'react-native';

const ElevatedCards = () => {
    const openWebSite = (website:string) => {
        Linking.openURL(website)
    }
    return (
        <View>
            <ScrollView horizontal>
                <View style={styles.ElevatedContainer}>
                    <View style={styles.firstElevatedCard}>
                        <Image style={styles.imageCard} source={{
                            uri:'https://upload.wikimedia.org/wikipedia/commons/7/74/Indian_River_Lifesaving_Station_DE1.jpg'
                        }}/>
                    </View>
                    <View style={styles.secondElevatedCard}>
                        <Image style={styles.imageCard} source={{
                            uri:'https://upload.wikimedia.org/wikipedia/commons/7/7c/Princetown_%28AU%29%2C_Port_Campbell_National_Park%2C_Twelve_Apostles_--_2019_--_0930.jpg'
                        }}/>
                    </View>
                    <View style={styles.thirdElevatedCard}>
                        <Image style={styles.imageCard} source={{
                            uri:'https://www.shutterstock.com/shutterstock/photos/725170876/display_1500/stock-photo-devi-jagdambi-temple-dedicated-to-parvati-western-temples-of-khajuraho-it-s-an-unesco-world-725170876.jpg'
                        }}/>
                    </View>
                   
                </View>
            </ScrollView>
            <View>
                <TouchableOpacity onPress={()=>openWebSite('https://www.holidify.com/country/india/places-to-visit.html')}>
                    <Text style={[styles.header,styles.darkTheme]} >Read More...</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ElevatedContainer:{
        flexDirection: 'row',
    },
    firstElevatedCard:{
        flex:1,
        backgroundColor: 'grey',
        width: 150,
        height: 150,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
    },
    imageCard:{
        backgroundColor:'grey',
        padding:5,
        height:'100%',
        width:'100%',
        flex:1,
        alignItems: 'center',
    },
    secondElevatedCard:{
        backgroundColor: 'grey',
        flex:1,
        width: 150,
        height: 150,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
    },
    thirdElevatedCard:{
        backgroundColor: 'grey',
        width: 150,
        height: 150,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        flex:1,
    },
    fourthElevatedCard:{
        backgroundColor: 'green',
        width: 150,
        height: 150,
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        flex:1,
    },
    darkTheme:{
        backgroundColor: '#121212',
        color:'white'
      },
      header:{
        fontSize: 14,
        fontWeight: 'bold',
        padding:5
      },
})

export default ElevatedCards;
