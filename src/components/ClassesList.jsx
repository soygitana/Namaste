import React, { Component } from "react";
import { yoga } from './database'


class ClassesItem extends Component {
    render() {
        return (
            <div className="container-flex box-flex-yoga">
                <div class="img-hover-zoom">
                    <img className="img-fluid" src={this.props.photo} alt="img" />
                </div>
                <p className="title">{this.props.title}</p>
                <p className="text">{this.props.text}</p>
            </div>
        );
    }
}


const ClassesList = () => [
    <>
        {yoga.map((e, idx) =>
            <ClassesItem
                photo={e.photo}
                title={e.title}
                text={e.description}
                key={idx}
            />
        )}
    </>
];



export default ClassesList;

