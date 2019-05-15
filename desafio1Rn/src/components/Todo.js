import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

// import { Container } from './styles';
export default function Todo({ title }) {
  return (
    <View>
      <Text>{title} </Text>
    </View>
  );
}

Todo.defaultProps = {
  title: "Todo Padrão"
};
Todo.propTypes = {
  title: PropTypes.string
};

// export default Todo;
