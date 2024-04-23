import { Space } from "antd";
import { Field } from "react-final-form";
import Icon from "../../../../Icon/Icon";

import "./filterList.scss";

const FilterList = ({ filters, filterName, type }) => {
  return (
    <Space>
      <ul className='filterList'>
        {filters.map(({ name, id, value, icon }) => (
          <li key={id}>
            <Field
              id={name}
              component='input'
              type={type}
              value={value}
              name={filterName}
            />
            <label htmlFor={name}>
              <Icon icon={icon} />
              <span>{name}</span>
            </label>
          </li>
        ))}
      </ul>
    </Space>
  );
};

export default FilterList;
