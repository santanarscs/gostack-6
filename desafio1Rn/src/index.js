import './config/ReactotronConfig';
import './config/DevToolsConfig';
import React, { Component } from 'react';
import {
  Text, StyleSheet, View, Button,
} from 'react-native';
import Todo from './components/Todo';

export default class App extends Component {
  state = {
    todos: [
      { id: Math.random(), title: 'Fazer café' },
      { id: Math.random(), title: 'Estudar GoReactNative' },
    ],
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), title: 'Novo Todo' }],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.title} />
        ))}
        <Button title="Adicionar Todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
