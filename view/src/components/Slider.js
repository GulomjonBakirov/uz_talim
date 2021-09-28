import { Carousel } from "3d-react-carousal";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default function Slider() {
  let slides = [
    <Card
      hoverable
      style={{ width: 800 }}
      cover={<img alt="example" src="/images/2.jpg" />}
      className="lessonCard"
      actions={[
        <Link to="/darsliklar">
          <Button type="link">Ko'proq</Button>
        </Link>,
      ]}
    >
      <Meta
        title="Ustoz 1"
        description="Matematika Fanlar Doktori"
        style={{ textAlign: "center" }}
      />
    </Card>,
    <Card
      hoverable
      style={{ width: 800 }}
      cover={<img alt="example" src="/images/2.jpg" />}
      className="lessonCard"
      actions={[
        <Link to="/darsliklar">
          <Button type="link">Ko'proq</Button>
        </Link>,
      ]}
    >
      <Meta
        title="Ustoz 1"
        description="Matematika Fanlar Doktori"
        style={{ textAlign: "center" }}
      />
    </Card>,
    <Card
      hoverable
      style={{ width: 800 }}
      cover={<img alt="example" src="/images/2.jpg" />}
      className="lessonCard"
      actions={[
        <Link to="/darsliklar">
          <Button type="link">Ko'proq</Button>
        </Link>,
      ]}
    >
      <Meta
        title="Ustoz 1"
        description="Matematika Fanlar Doktori"
        style={{ textAlign: "center" }}
      />
    </Card>,
    <Card
      hoverable
      style={{ width: 800 }}
      cover={<img alt="example" src="/images/2.jpg" />}
      className="lessonCard"
      actions={[
        <Link to="/darsliklar">
          <Button type="link">Ko'proq</Button>
        </Link>,
      ]}
    >
      <Meta
        title="Ustoz 1"
        description="Matematika Fanlar Doktori"
        style={{ textAlign: "center" }}
      />
    </Card>,
    <Card
      hoverable
      style={{ width: 800 }}
      cover={<img alt="example" src="/images/2.jpg" />}
      className="lessonCard"
      actions={[
        <Link to="/darsliklar">
          <Button type="link">Ko'proq</Button>
        </Link>,
      ]}
    >
      <Meta
        title="Ustoz 1"
        description="Matematika Fanlar Doktori"
        style={{ textAlign: "center" }}
      />
    </Card>,
  ];
  return <Carousel slides={slides} />;
}
