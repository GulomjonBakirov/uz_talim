import { Tabs } from "antd";
import Video from "./Video";
const { TabPane } = Tabs;

const Demo = ({ data }) => {
  console.log(data);
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab={`${1}-dars`} key="1">
        <Video data={data} />
      </TabPane>
      <TabPane disabled tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane disabled tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default Demo;
