import React from "react";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default function HomeLessons() {
  return (
    <div className="HomeAbout">
      <h2 className="title">Darslarimiz</h2>
      <div className="inside">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="/images/2.jpg" />}
          className="lessonCard"
          actions={[
            <Link to="/darsliklar">
              <Button type="link">Ko'proq</Button>
            </Link>,
          ]}
        >
          <Meta title="Pazandachilik asoslari" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="/images/2.jpg" />}
          className="lessonCard"
          actions={[
            <Link to="/darsliklar">
              <Button type="link">Ko'proq</Button>
            </Link>,
          ]}
        >
          <Meta title="Materialalarga ishlov berish  texnalogiyasi" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="/images/2.jpg" />}
          className="lessonCard"
          actions={[
            <Link to="/darsliklar">
              <Button type="link">Ko'proq</Button>
            </Link>,
          ]}
        >
          <Meta title="Roboto texnika" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="/images/2.jpg" />}
          className="lessonCard"
          actions={[
            <Link to="/darsliklar">
              <Button type="link">Ko'proq</Button>
            </Link>,
          ]}
        >
          <Meta title="Ijtimoiy iqtisodiy texnalaogiya asoslar" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="/images/2.jpg" />}
          className="lessonCard"
          actions={[
            <Link to="/darsliklar">
              <Button type="link">Ko'proq</Button>
            </Link>,
          ]}
        >
          <Meta title="Xalq hunarmandchiligi texnalaogiyasi " />
        </Card>
      </div>
    </div>
  );
}
