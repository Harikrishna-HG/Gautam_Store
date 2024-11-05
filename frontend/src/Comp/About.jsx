import React from 'react';

function About() {
  return (
    <div className="container mx-auto py-16 px-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="text-lg text-gray-700 leading-relaxed">
        <p className="mb-6">
          Welcome to <span className="font-bold text-[#FF7602]">Godam Online Shop</span>, your number one source for all things online shopping. 
          We’re dedicated to giving you the very best of products, with a focus on dependability, customer service, and uniqueness.
        </p>

        <p className="mb-6">
          Founded in [Year], <span className="font-bold text-[#FF7602]">Godam Online Shop</span> has come a long way from its beginnings in [City, Country]. 
          When we first started out, our passion for providing the best products drove us to do tons of research so that 
          <span className="font-bold text-[#FF7602]">Godam Online Shop</span> can offer you the world's most advanced shopping experience. 
          We now serve customers all over [Location], and are thrilled to be a part of the eCommerce industry.
        </p>

        <p className="mb-6">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to 
          contact us.
        </p>

        <p className="font-bold text-[#FF7602]">
          Sincerely,<br />
          The Godam Online Team
        </p>
      </div>
    </div>
  );
}

export default About;
