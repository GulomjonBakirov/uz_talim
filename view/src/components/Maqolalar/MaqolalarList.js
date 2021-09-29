import { List, Avatar, Button, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import reqwest from "reqwest";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
const Data = [
  {
    name: "Abbos",
    img: "/images/default.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nisi optio ipsum cum ut praesentium, quam voluptatibus deserunt fugit minima, odio corrupti vitae quibusdam labore eveniet placeat beatae, quos earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi natus molestias minus unde, magnam recusandae quam ducimus! Ducimus optio in aliquam amet sapiente maiores a quisquam quas odit, non assumenda, dicta doloribus. Natus nemo soluta blanditiis? Deserunt laborum soluta vero.",
  },
  {
    name: "Abbos",

    img: "/images/1.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nisi optio ipsum cum ut praesentium, quam voluptatibus deserunt fugit minima, odio corrupti vitae quibusdam labore eveniet placeat beatae, quos earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi natus molestias minus unde, magnam recusandae quam ducimus! Ducimus optio in aliquam amet sapiente maiores a quisquam quas odit, non assumenda, dicta doloribus. Natus nemo soluta blanditiis? Deserunt laborum soluta vero.",
  },
];

export default function MaqolalarList() {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  const getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: (res) => {
        callback(res);
      },
    });
  };

  useEffect(() => {
    getData((res) => {
      setInitLoading(false);
      setData(res.results);
      setList(res.results);
      console.log(res.results);
    });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {} }))
      )
    );
    getData((res) => {
      const data2 = data.concat(res.results);
      setData(data2);
      setList(data2);
      setLoading(false);
    });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          margin: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  const desc = Data[1].description.slice(0, 250).concat("...");
  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Link to="/maqola/:id" key="list-loadmore-more">
              Ko'proq
            </Link>,
          ]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={Data[1].img} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={desc}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
}

// class MaqolalarList2 extends React.Component {
//   state = {
//     initLoading: true,
//     loading: false,
//     data: Data,
//     list: [],
//   };

//   componentDidMount() {
//     this.getData((res) => {
//       this.setState({
//         initLoading: false,
//         data: res.results,
//         list: res.results,
//       });
//     });
//   }

//   getData = (callback) => {
//     reqwest({
//       url: fakeDataUrl,
//       type: "json",
//       method: "get",
//       contentType: "application/json",
//       success: (res) => {
//         callback(res);
//       },
//     });
//   };

//   render() {

//     return (

//     );
//   }
// }
