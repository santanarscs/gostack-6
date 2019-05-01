import React, { Component } from "react";
import api from "../../services/api";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";

export default class Main extends Component {
  state = {
    repositoryInput: "",
    repositories: []
  };
  handleAddRepository = async e => {
    e.preventDefault();
    try {
      const { data: repository } = await api.get(
        `/repos/${this.state.repositoryInput}`
      );
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, repository]
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuario/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">OK</button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
