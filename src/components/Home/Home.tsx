import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to our web app!</h1>
      <p className="text-lg mb-2">
        This is a simple React web app with navigation.
      </p>
      <p className="text-lg mb-2">
        Use the navigation menu to explore articles and books.
      </p>
    </div>
  );
};

export default Home;
