import { Form, Field } from "react-final-form";
import InputLocation from "./InputLocation";
import { Button } from "antd";
import {
  equipmentFilters,
  typeFilters,
} from "./Filters/FilterList/filterButtons";
import Filters from "./Filters";
import { useDispatch } from "react-redux";
import { addFilters } from "../../../redux/slices/filtersSlice";
import { resetPage } from "../../../redux/slices/pageSlice";

const SidebarForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    dispatch(resetPage());
    dispatch(addFilters(formValues));
  };

  const render = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
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
      <Button htmlType='submit' type='primary'>
        Search
      </Button>
    </form>
  );

  return <Form render={render} onSubmit={onSubmit} subscription />;
};

export default SidebarForm;
