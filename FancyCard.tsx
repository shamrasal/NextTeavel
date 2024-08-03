import React from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    Image,
    Button,
    Linking,
} from 'react-native';

const FancyCard = () => {
    const openWebSite = (website:string) => {
        Linking.openURL(website)
    }
    return (
        <View style={styles.container}>
            <View style={styles.fancyCard}>
                <Image style={styles.imageCard} source={{
                    uri:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Taj_Mahal_Front.JPG'
                }}/>
                <Text style={styles.fancyCardTitle}>TaJ Mahal</Text>
                <Text style={styles.fancyCardDescription}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India...</Text>
            </View>
            <Button onPress={()=>openWebSite('https://en.wikipedia.org/wiki/Taj_Mahal')}  title='Click Me'/>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        width:'100%',
        margin:4,
        padding:5
    },
    fancyCardTitle:{
      fontSize:15,  
      color: 'white',
      fontWeight: 'bold',
      marginTop:5,
      marginBottom:5,
    },
    fancyCardDescription:{
        fontSize:15,  
        fontStyle: 'italic',
        color: 'white',
        marginTop:5,
        marginBottom:5,
    },
    fancyCard:{
        height: '100%',
        width:'100%',
        backgroundColor:'grey',
        padding:5,
        flex:1,
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
        borderRadius: 10,
        marginBottom: 10,
        height: 200,
        width:'100%',
        backgroundColor:'grey',
        padding:5,
        flex:1,
        alignItems: 'center',
    }
})

 
export default FancyCard;
