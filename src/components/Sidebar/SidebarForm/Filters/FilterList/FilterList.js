import { Space } from "antd";
import { Field } from "react-final-form";

import "./filterList.scss";

const FilterList = ({ filters, filterName, type }) => {
  return (
    <Space>
      <ul className='filterList'>
        {filters.map(({ name, id, value }) => (
          <li key={id}>
            <Field
              id={name}
              component='input'
              type={type}
              value={value}
              name={filterName}
            />
            <label htmlFor={name} style={{ marginLeft: 5 }}>
              {name}
            </label>
          </li>
        ))}
      </ul>
    </Space>
  );
};

export default FilterList;
