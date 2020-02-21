import React from 'react';
import aerial_flow from '../assets/aerial_flow.mp4';
import {Player} from 'video-react';


export default props => {
    return (
        <section className="home-video">
               <h2 className="title">Feel the flow</h2>  
               <div className="container-flex">
      <Player>
        <source src={aerial_flow} />
      </Player>
      </div>
          </section>
    );
  };




