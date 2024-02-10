import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

interface Article {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string[];
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: Media[];
  eta_id: number;
}

interface Media {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": MediaMetadata[];
}

interface MediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

const MostPopularComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/mostpopular/v2/emailed/7.json?api-key=${process.env.REACT_APP_API_KEY}`
        );
        const { results } = response.data;
        setArticles(results);
        setLoading(false); // Data fetched, loading is now false
      } catch (error) {
        console.error("Error fetching most popular articles:", error);
      }
    };

    fetchArticles();
  }, []);
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {articles.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-start justify-between"
          >
            <div className="relative w-full">
              {post.media && post.media.length > 0 && (
                <img
                  src={post.media[0]["media-metadata"][2].url}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              )}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={post.published_date} className="text-gray-500">
                  {post.published_date}
                </time>
                <a
                  href={post.url}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.source}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.url}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.abstract}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                {post.media && post.media.length > 0 && (
                  <img
                    src={post.media[0]["media-metadata"][0].url}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                )}
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.byline}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MostPopularComponent;
