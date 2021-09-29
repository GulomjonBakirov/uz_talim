import React from "react";
import CommentView from "../comment";
import moment from "moment";

export default function MaqolaView() {
  return (
    <div className="container">
      <div className="maqola">
        <h2 className="title">Nomi</h2>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nisi optio
          ipsum cum ut praesentium, quam voluptatibus deserunt fugit minima,
          odio corrupti vitae quibusdam labore eveniet placeat beatae, quos
          earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          natus molestias minus unde, magnam recusandae quam ducimus! Ducimus
          optio in aliquam amet sapiente maiores a quisquam quas odit, non
          assumenda, dicta doloribus. Natus nemo soluta blanditiis? Deserunt
          laborum soluta vero.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. A nisi optio ipsum cum ut praesentium, quam
          voluptatibus deserunt fugit minima, odio corrupti vitae quibusdam
          labore eveniet placeat beatae, quos earum. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Modi natus molestias minus unde, magnam
          recusandae quam ducimus! Ducimus optio in aliquam amet sapiente
          maiores a quisquam quas odit, non assumenda, dicta doloribus. Natus
          nemo soluta blanditiis? Deserunt laborum soluta vero.Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. A nisi optio ipsum cum ut
          praesentium, quam voluptatibus deserunt fugit minima, odio corrupti
          vitae quibusdam labore eveniet placeat beatae, quos earum. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Modi natus molestias
          minus unde, magnam recusandae quam ducimus! Ducimus optio in aliquam
          amet sapiente maiores a quisquam quas odit, non assumenda, dicta
          doloribus. Natus nemo soluta blanditiis? Deserunt laborum soluta vero.
        </p>
        <h4 className="author">Author: Ismi</h4>
        <div className="viewer" style={{ textAlign: "right" }}>
          <p className="viewer">
            <span style={{ fontWeight: "bold" }}>View:</span> 29 people
          </p>
          <p className="date">{moment().startOf("hour").fromNow()}</p>
        </div>
      </div>
      <CommentView />
    </div>
  );
}
