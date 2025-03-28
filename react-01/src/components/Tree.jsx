import React from 'react';

function Tree({ name, description, image }) {
  return (
    <div className="tree">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  );
}

export default Tree;
