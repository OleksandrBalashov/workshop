import { Form, Field } from "react-final-form";
import InputLocation from "./InputLocation";
import { Button, Tooltip } from "antd";
import {
  equipmentFilters,
  typeFilters,
} from "./Filters/FilterList/filterButtons";
import Filters from "./Filters";
import { useDispatch } from "react-redux";
import {
  addFilters,
  initialValues,
  resetFilters,
} from "../../../redux/slices/filtersSlice";
import { resetPage } from "../../../redux/slices/pageSlice";
import { RollbackOutlined } from "@ant-design/icons";
import "./sidebarForm.scss";

const SidebarForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    dispatch(resetPage());
    dispatch(addFilters(formValues));
  };

  const render = ({ handleSubmit, form, pristine }) => (
    <form onSubmit={handleSubmit} className='sidebarFormWrapper'>
      <Field name='location' component={InputLocation} />
      <p>Filters</p>
      <Filters
        type='checkbox'
        title='Vehicle equipment'
        filterName='vehicleEquipment'
        filters={equipmentFilters}
      />
      <Filters
        type='radio'
        title='Vehicle type'
        filterName='form'
        filters={typeFilters}
      />
      <div className='buttonWrapper'>
        <Button htmlType='submit' type='primary' size='large'>
          Search
        </Button>
        {!pristine && (
          <Tooltip title='Remove filters'>
            <Button
              type='primary'
              shape='circle'
              icon={<RollbackOutlined />}
              className='removeFilters'
              onClick={() => {
                form.reset();
                dispatch(resetFilters());
              }}
            />
          </Tooltip>
        )}
      </div>
    </form>
  );

  return (
    <Form render={render} onSubmit={onSubmit} initialValues={initialValues} />
  );
};

export default SidebarForm;
