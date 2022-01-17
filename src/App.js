import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import foto from './assets/perfil.jpg';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card';

const App = () => {

  function handleSocialNetwork(rede_social) {
    switch (rede_social) {
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/thayaraujo')
        break;
      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://www.linkedin.com/in/thaynara-araujo/')
        break;
    }
  }
  return (
    <>
      <View style={style.page}>
        <View style={style.container_header}>
          <Image source={foto} style={style.photo} />
          <Text style={style.name}>THAYNARA ARAÚJO</Text>
          <Text style={style.occupation}>Desenvolvedora Mobile</Text>
          <View style={style.social_network}>
            <TouchableOpacity onPress={() => handleSocialNetwork('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialNetwork('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Cursos">
          <Text style={style.card_content}>Bootcamp Eduzz Fullstack Developer #2</Text>
          <Text style={style.card_content}>Bootcamp Localiza Labs</Text>
        </Card>
        <Card titulo="Experiência profissional" style={style.card_title}>
          <Text style={style.card_content}>Desenvolvedora Node.Js - Jr.</Text>
        </Card>

      </View>



    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#B0C4DE',
    flex: 1,
  },
  container_header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderColor: '#191970',
    borderWidth: 4,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#191970',
    marginTop: 10
  },
  occupation: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#191970',
    marginBottom: 10,
  },
  social_network: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    marginTop: 20
  },
  card_content: {
    color: '#191970',
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default App;