import React, { useState, useEffect } from "react";
import Article from "./article";
require("dotenv").config();

export default function News() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=cnn,associated-press,nbs-news,the-huffington-post,the-washington-post&pageSize=4&apiKey=81cfa25d7eeb4e2f8d25a929c27299f8`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setArticles(result.articles);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  if (error) {
    return (
      <div className="box news" style={{ fontStyle: "italic" }}>
        Error: {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="box news" style={{ fontStyle: "italic" }}>
        <div className="loader"></div>
      </div>
    );
  } else {
    return (
      <div className="box news">
        {articles.map((article) => (
          <Article
            key={article.publishedAt}
            title={
              article.title.length > 38
                ? article.title.substring(0, 35) + "..."
                : article.title
            }
            source={article.source.name}
            content={
              article.description.length > 100
                ? article.description.substring(0, 97) + "..."
                : article.description
            }
            link={article.url}
          />
        ))}
      </div>
    );
  }
}
