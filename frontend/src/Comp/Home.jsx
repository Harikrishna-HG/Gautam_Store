import React from 'react';
import { cat, products } from './About,jsx/data'; // Fix the import here
import { Link } from 'react-router-dom';

function Home() {
  // Function to handle buy now action
  const handleBuyNow = async (product) => {
    const confirmed = window.confirm(`Are you sure you want to buy ${product.title}?`);
    if (confirmed) {
      try {
        // Send purchase data to the backend
        const response = await fetch('http://localhost:5000/buy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productId: product.id, title: product.title }),
        });

        const data = await response.json();

        if (response.ok) {
          alert(`Successfully purchased: ${data.message}`);
        } else {
          alert(`Error: ${data.error}`);
        }
      } catch (error) {
        alert('Error purchasing the product. Please try again later.');
      }
    }
  };

  return (
    <>
      <section className='my-5'>
        <div className="container mx-auto flex gap-10">
          <div className="w-[30%] shadow h-[480px] overflow-y-auto px- py-4">
            <ul>
              {cat.map((a) => (
                <li key={a} className='uppercase border p-4'>
                  <Link to={`/cat/${a}`}>{a}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[70%] h-[500px]">
            <img className='h-[480px] w-[900px]' src="https://img.freepik.com/premium-photo/ecommerce-banner_1281315-2633.jpg?w=996" alt="" />
          </div>
        </div>
      </section>

      <section className='py-20'>
        <div className="container mx-auto">
          <h2 className='font-semibold text-3xl mt-[-90px]'>Latest Products</h2>
          <div className="flex flex-wrap justify-between">
            {products.map((a) => (
              <div key={a.id} className="w-[30%] border p-3 shadow-2xl pb-3 my-5">
                <img className='w-full h-[250px]' src={a.thumbnail} alt={a.title} />
                <h3 className='font-extrabold	text-xl'>{a.title}</h3>
                <button
                  onClick={() => handleBuyNow(a)} // Add onClick event to buy button
                  className="bg-[#fcbc0e] text-white font-bold py-2 px-6 rounded text-xl mt-2"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
