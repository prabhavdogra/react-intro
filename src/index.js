import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const item_db = [
  {
    key: 1,
    img: "https://rukminim1.flixcart.com/image/612/612/jph83gw0/book/1/2/3/ignited-minds-original-imafbp29rhhbvzeh.jpeg?q=70",
    book: "Ignited Minds",
    author: "A P J Abdul Kalam"
  },
  {
    key: 2,
    img: "https://rukminim1.flixcart.com/image/612/612/kjhgzgw0-0/book/m/m/u/alchemist-original-imafzfhzefg8etxh.jpeg?q=70",
    book: "The Alchemist",
    author: "Paulo Coelho"
  },
  {
    key: 3,
    img: "https://rukminim1.flixcart.com/image/612/612/jph83gw0/book/1/2/3/ignited-minds-original-imafbp29rhhbvzeh.jpeg?q=70",
    book: "One Arranged Murder",
    author: "Chetan Bhagat"
  },
  {
    key: 4,
    img: "https://rukminim1.flixcart.com/image/612/612/jph83gw0/book/1/2/3/ignited-minds-original-imafbp29rhhbvzeh.jpeg?q=70",
    book: "Ignited Minds",
    author: "A P J Abdul Kalam"
  },
  {
    key: 5,
    img: "https://rukminim1.flixcart.com/image/612/612/kjhgzgw0-0/book/m/m/u/alchemist-original-imafzfhzefg8etxh.jpeg?q=70",
    book: "The Alchemist",
    author: "Paulo Coelho"
  },
  {
    key: 6,
    img: "https://rukminim1.flixcart.com/image/612/612/jph83gw0/book/1/2/3/ignited-minds-original-imafbp29rhhbvzeh.jpeg?q=70",
    book: "One Arranged Murder",
    author: "Chetan Bhagat"
  },
  {
    key: 7,
    img: "https://rukminim1.flixcart.com/image/612/612/jph83gw0/book/1/2/3/ignited-minds-original-imafbp29rhhbvzeh.jpeg?q=70",
    book: "One Arranged Murder",
    author: "Chetan Bhagat"
  },
];

const Book = (props) => {
  const { book, img, author } = props.item;
  return (
    <>
      <div className="item-structure">
        <div className="item-info">
          <img src={img} alt="" className="item-img" />
        </div>
        <div className="item-info">
          <span className="format-name">{book}</span>
        </div>
        <div className="item-info">
          <span className="format-author">By - {author}</span>
        </div>
      </div>
    </>
  );
};

const AllItems = item_db.map((item_info) => {
  console.log("here");
  return (
    <div className="card">
      <Book item={item_info} />
    </div>
  );
});

function Items() {
  return (
    <>
      <div className="flexbox">
          {AllItems}
      </div>
    </>
  );
}

ReactDom.render(<Items></Items>, document.getElementById("itemList"));
