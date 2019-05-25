import React, { Component } from 'react';
import api from '~/services/api';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';

import styles from './styles';

export default class Welcome extends Component {
  state = {
    username: '',
  };

  checkUserExist = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  saveuser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const { username } = this.state;
    try {
      await this.checkUserExist(username);
      await this.saveuser(username);
    } catch (err) {
      console.log('usuário inexistente');
    }
  };

  render() {
    const { username } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.text}>
          Para Continar precisamos que vc informe seu usuario do github
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu Usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>Prossegir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
