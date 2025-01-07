import React from 'react';
import { Link } from 'react-router-dom';

const CakeList = () => {
  const cakes = [
    { id: 1, name: 'Chocolate Cake', price: '$15', description: 'Delicious rich chocolate cake.' },
    { id: 2, name: 'Vanilla Cake', price: '$12', description: 'Smooth and fluffy vanilla cake.' },
    { id: 3, name: 'Red Velvet Cake', price: '$18', description: 'A classic red velvet with cream cheese.' },
  ];

  return (
    <section>
      <h2>Our Cakes</h2>
      <div className="cake-list">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-item">
            <h3>{cake.name}</h3>
            <p>{cake.description}</p>
            <p><strong>{cake.price}</strong></p>
            <Link to={`/cake/${cake.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CakeList;

