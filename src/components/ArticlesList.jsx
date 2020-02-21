import React from "react";
import { Link } from 'react-router-dom';
import { yoga } from './database'

const ArticleList = () => [
  <ul className="container-flex container-flex-classes">
    {Object.keys(yoga).map(key => (
      <li key={key}>
        <Link className="button" to={`/articles/${key}`}>{yoga[key].title}</Link>
      </li>
    ))}
  </ul>
];

export default ArticleList;