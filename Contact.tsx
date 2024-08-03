import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Contact = () => {
    return (
        <View style={styles.container}>
            {
                contactNumber.map((contact) => {
                    return (
                        <View key={contact.id} style={styles.firstElevatedCard}>
                            <Image style={styles.imageCard} source={{
                                uri:contact.imageURL
                            }}/>
                            <Text style={[styles.header,styles.darkTheme]} >{contact.name}</Text>
                        </View>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        width: '100%',
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
    imageCard:{
        backgroundColor:'grey',
        padding:5,
        height:'100%',
        width:'100%',
        flex:1,
        alignItems: 'center',
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
})

const contactNumber = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "imageURL": "https://previews.123rf.com/images/stockyimages/stockyimages1603/stockyimages160300965/54434005-smiling-young-confident-corporate-employee.jpg"
    },
    {
      "id": 2,
      "name": "Priya Smith",
      "imageURL": "https://media.gettyimages.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=gi&k=20&c=TWakDzE5LVcAGztV1fGQ8-Ca3EHk8m9lAaAeBW_HVUc="
    },
    {
      "id": 3,
      "name": "Carol Williams",
      "imageURL": "https://st3.depositphotos.com/11585370/19184/i/1600/depositphotos_191841416-stock-photo-yong-business-man-or-corporate.jpg"
    },
    {
      "id": 4,
      "name": "Mia Brown",
      "imageURL": "https://www.shutterstock.com/shutterstock/photos/2177147503/display_1500/stock-photo-smiling-young-asian-business-woman-leader-entrepreneur-professional-manager-holding-digital-tablet-2177147503.jpg"
    }
]
 
export default Contact;
