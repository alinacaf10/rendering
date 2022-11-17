import React from "react";
import "./styles.css";
import { ClientCard } from "./ClientCard";
import { fetchClients } from "./fetchClients";

class App extends React.Component {
    state = {
      client: null,
    }

  componentDidMount = () => {
    fetchClients().then((client) => {
      this.setState({
        client
      });
    });
  };
  render() {
    return(
      <>
      <ClientCard/>
      </>
    )
  }
}

export default App;
