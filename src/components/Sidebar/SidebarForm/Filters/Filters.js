import { Divider, Space } from "antd";
import "./filters.scss";
import FilterList from "./FilterList/FilterList";

const Filters = ({ title, filters, filterName, type }) => {
  return (
    <div className='filterWrapper'>
      <h4 className='title'>{title}</h4>
      <Divider />
      <Space>
        <FilterList filters={filters} filterName={filterName} type={type} />
      </Space>
    </div>
  );
};

export default Filters;
