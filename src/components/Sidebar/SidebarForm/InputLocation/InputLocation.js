import { EnvironmentOutlined } from "@ant-design/icons";
import { Input } from "antd";

const InputLocation = ({ input }) => (
  <>
    <label>Location</label>
    <Input
      prefix={<EnvironmentOutlined />}
      variant='filled'
      {...input}
      placeholder='City'
    />
  </>
);

export default InputLocation;
