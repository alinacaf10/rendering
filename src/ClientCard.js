import React from "react";
let change=true
export class ClientCard extends React.Component {
  render() {
    const { name, phone, card } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Имя клиента: {name||"Anonimous "}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Телефон: {change&&phone}</h6>
          <p className="card-text">Номер карты: {card||"Card is not specified "}</p>
        </div>
      </div>
    );
  }
}
