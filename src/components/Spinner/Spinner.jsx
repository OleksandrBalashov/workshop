import { Oval } from "react-loader-spinner";
import "./spinner.scss";

const Spinner = () => (
  <Oval
    wrapperClass='spinner'
    visible={true}
    height='40'
    width='40'
    color='#4e59ef'
    ariaLabel='oval-loading'
  />
);

export default Spinner;
