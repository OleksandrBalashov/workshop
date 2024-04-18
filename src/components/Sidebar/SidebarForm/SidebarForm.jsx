import { Form, Field } from "react-final-form";
import InputLocation from "./InputLocation";
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
    console.log(formValues);
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
      <button type='submit'>Search</button>
    </form>
  );

  return <Form render={render} onSubmit={onSubmit} subscription />;
};

export default SidebarForm;
