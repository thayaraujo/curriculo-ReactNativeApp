import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    card_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#191970',
        padding: 10,
        backgroundColor: '#FFF'
    },
    card_title: {
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
      },   
});

export default style;