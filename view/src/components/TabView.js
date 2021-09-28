import { Tabs } from "antd";
import CommentView from "./comment";
import Video from "./Video";
const { TabPane } = Tabs;

const Demo = ({ data }) => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab={`${1}-dars`} key="1">
        <Video data={data} />
        <CommentView />
      </TabPane>
      <TabPane disabled tab={`${2}-dars`} key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane disabled tab={`${3}-dars`} key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default Demo;
