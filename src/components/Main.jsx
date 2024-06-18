import React, { useState } from 'react';

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [articleTitle, setArticleTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setArticles((array) => [...array, articleTitle]);
    setArticleTitle('');
  };

  const removeArticle = (indexDaEliminare) => {
    setArticles((array) => array.filter((_, i) => i !== indexDaEliminare));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Inserisci un articolo"
          value={articleTitle}
          onChange={(e) => setArticleTitle(e.target.value)}
        />
        <button>+</button>
      </form>
      <p>
        <strong>Ingredienti:</strong>
      </p>
      <ul>
        {articles.map((article, index) => (
          <li key={`article${index}`} onClick={() => removeArticle(index)}>
            {article}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
