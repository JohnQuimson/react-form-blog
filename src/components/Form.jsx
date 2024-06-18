import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

const Form = () => {
  const [articles, setArticles] = useState([]);
  const [articleTitle, setArticleTitle] = useState('');

  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      setArticles((array) =>
        array.map((title, i) => (i === editIndex ? articleTitle : title))
      );
      setEditIndex(null);
      setArticleTitle('');
    } else {
      setArticles((array) => [...array, articleTitle]);
      setArticleTitle('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setArticleTitle(articles[index]);
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
          <button className={editIndex !== null ? 'editBtn' : 'addBtn'}>
            {editIndex !== null ? 'editBtn' : '+'}
          </button>
        </form>

        {articles.length > 0 && <h3 className="subtitle">Articoli:</h3>}

        <ul>
          {articles.map((article, index) => (
            <li key={`article${index}`}>
              <span>{article}</span>
              <div className="cont-icons">
                <FaRegEdit
                  className="editIcon"
                  onClick={() => handleEdit(index)}
                />
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
