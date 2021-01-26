import React from 'react';

const Users = (props) => (
  <div>
    <h2> Users </h2>
    <p> {props.match.params.id} this is my awesome Users component </p>
  </div>
);

export default Users;