import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Inputt = () => (
  <Space direction="vertical">
    <Search
      placeholder="enter your email address..."
      enterButton="Join"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
);
export default Inputt;
