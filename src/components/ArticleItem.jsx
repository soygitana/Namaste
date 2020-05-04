import React from "react";
import { Link } from 'react-router-dom';
import { yoga } from './database';

const ArticleItem = props => (
  <div className="class-page app-container">
    <div className="container-flex">
      <div className="box-flex">
        <h2 className="title">{yoga[props.match.params.id].title}</h2>
        <img className="img-fluid" src={yoga[props.match.params.id].photo} alt="img" />
        <h2 className="title">{yoga[props.match.params.id].title2}</h2>
        <p className="text">{yoga[props.match.params.id].text}</p>
        <p className="quote">“When you listen to yourself, everything comes naturally. It comes from inside, like a kind of will to do something. Try to be sensitive. That is yoga.” </p>
        <p className="text">Apple pie biscuit cotton candy fruitcake jelly beans jujubes marshmallow tart macaroon. Cookie croissant liquorice. Pie ice cream toffee cookie cake topping chocolate cake croissant tiramisu. Biscuit ice cream lollipop soufflé chocolate cake. Powder cupcake cotton candy chocolate cake icing cupcake tiramisu liquorice pudding. Sweet tootsie roll biscuit sugar plum. Chocolate cake cookie sesame snaps toffee sesame snaps oat cake cotton candy pudding sugar plum. Apple pie cake bear claw gummi bears biscuit cotton candy tart bear claw. Icing tootsie roll wafer topping brownie cookie pudding. Ice cream dragée cotton candy lemon drops.</p>
        <p className="text">contraindications</p>
        <ul>
          <li>Fracture</li>
          <li>Unsteady blood pressure and sugar level</li>
          <li>Glaucoma</li>
          <li>Infectious diseases</li>
          <li>Imbalance in the ear fluid</li>
          <li>Heart problems</li>
          <li>Carpal Tunnel Syndrome</li>
          <li>Neck injury</li>
        </ul>
      </div>
      <div className="box-flex">
        {Object.keys(yoga).map(key => (
          <li key={key}>
            <Link className="button" to={`/articles/${key}`}>{yoga[key].title}</Link>
          </li>
        ))}
      </div>
    </div>
  </div>
)

export default ArticleItem;