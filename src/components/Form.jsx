import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

const Form = () => {
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
    <>
      <section id="form-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Inserisci un articolo"
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
          />
          <button>+</button>
        </form>

        {articles.length > 0 && <h3 className="subtitle">Articoli:</h3>}

        <ul>
          {articles.map((article, index) => (
            <li key={`article${index}`}>
              <span>{article}</span>
              <div className="cont-icons">
                <FaRegEdit className="editIcon" />
                <MdDeleteForever
                  className="deleteIcon"
                  onClick={() => removeArticle(index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Form;
