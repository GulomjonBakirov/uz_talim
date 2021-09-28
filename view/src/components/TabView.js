import { Tabs } from "antd";
const { TabPane } = Tabs;
const data = [{ name: "natural sonlar", video: "video" }];
const Demo = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab={`${1}-dars`} key="1">
        Content of Tab Pane 1
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
