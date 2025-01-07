import React from 'react';
import { useParams } from 'react-router-dom';

const CakeDetails = () => {
  const { id } = useParams(); 

  
  const cakes = [
    { id: 1, name: 'Chocolate Cake', price: '$15', description: 'Delicious rich chocolate cake.' },
    { id: 2, name: 'Vanilla Cake', price: '$12', description: 'Smooth and fluffy vanilla cake.' },
    { id: 3, name: 'Red Velvet Cake', price: '$18', description: 'A classic red velvet with cream cheese.' },
  ];

  const cake = cakes.find((cake) => cake.id === parseInt(id));

  if (!cake) {
    return <h2>Cake not found</h2>;
  }

  return (
    <section>
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p><strong>Price: {cake.price}</strong></p>
    </section>
  );
};

export default CakeDetails;
