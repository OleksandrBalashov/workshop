import { EnvironmentOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./inputLocation.scss";

const InputLocation = ({ input }) => (
  <>
    <label className='labelLocation'>Location</label>
    <Input
      prefix={<EnvironmentOutlined />}
      variant='filled'
      {...input}
      size='large'
      placeholder='City'
    />
  </>
);

export default InputLocation;
