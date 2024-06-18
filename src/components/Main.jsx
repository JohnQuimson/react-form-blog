import React, { useState } from 'react';

const Main = () => {
  const [article, setArticle] = useState([]);
  const [articleTitle, setArticleTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setArticle((array) => [...array, articleTitle]);
    setArticleTitle('');
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
        {article.map((article, index) => (
          <li key={`article${index}`}>{article}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
