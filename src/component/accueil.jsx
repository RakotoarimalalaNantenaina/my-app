import React, { Component } from 'react';

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>LISTES DES APPRENANTS</h3>
        <form onSubmit={this.handleSubmit}>
          
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button class="btn btn-success">
            Ajouter {this.state.items.length + 1}
          </button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Prenom</th>
        </tr>
        <tr>
        {this.props.items.map(item => (
          <td key={item.id}>{item.text}</td>
          ))}
        </tr>
      </table>
      </div>
    );
  }
}
export default Accueil;

