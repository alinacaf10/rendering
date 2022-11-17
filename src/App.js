import React from "react";
import "./styles.css";
import { ClientCard } from "./ClientCard";
import { fetchClients } from "./fetchClients";

class App extends React.Component {
  state = {
    client: {}
  };

  componentDidMount = () => {
    fetchClients().then((client) => {
      this.setState({
        client
      });
    });
  };
  render() {
    if (ClientCard === null) {
      return null;
    }

    return (
      <>
        <ClientCard
          name={this.state.client.name}
          phone={this.state.client.phone}
          card={this.state.client.card}
        />
      </>
    );
  }
}

export default App;
