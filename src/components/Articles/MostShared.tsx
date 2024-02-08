import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

interface Article {
  title: string;
  abstract: string;
}

const MostSharedComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/mostpopular/v2/shared/7.json?api-key=${process.env.REACT_APP_API_KEY}`
        );
        const { results } = response.data;
        setArticles(results);
        setLoading(false); // Data fetched, loading is now false
      } catch (error) {
        console.error("Error fetching most shared articles:", error);
      }
    };

    fetchArticles();
  }, []);
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    ); // Show loading message while fetching data
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Most Shared Articles</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p>{article.abstract}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostSharedComponent;
