import { Form, Field } from "react-final-form";
import { Input, DatePicker, Button } from "antd";
import "./bookForm.scss";

const { TextArea } = Input;

const BookForm = () => {
  const onSubmit = (valuesForm) => {
    console.log(valuesForm);
  };

  const render = ({ handleSubmit }) => (
    <div className='bookFormWrapper'>
      <h2 className='title'>Book your campervan now</h2>
      <p className='discription'>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit}>
        <Field name='name'>
          {({ input }) => (
            <Input
              {...input}
              className='input'
              variant='filled'
              placeholder='Name'
              size='large'
            />
          )}
        </Field>
        <Field name='email'>
          {({ input }) => (
            <Input
              {...input}
              className='input'
              variant='filled'
              placeholder='Email'
              type='email'
              size='large'
            />
          )}
        </Field>
        <Field name='date'>
          {({ input }) => (
            <DatePicker
              {...input}
              className='input'
              variant='filled'
              placeholder='Booking date'
              format='YYYY/MM/DD'
              size='large'
            />
          )}
        </Field>
        <Field name='comment'>
          {({ input }) => (
            <TextArea
              {...input}
              className='input'
              variant='filled'
              rows={4}
              placeholder='Comment'
              size='large'
            />
          )}
        </Field>

        <Button htmlType='submit' type='primary'>
          Send
        </Button>
      </form>
    </div>
  );

  return <Form render={render} onSubmit={onSubmit} />;
};

export default BookForm;
