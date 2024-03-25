import React from 'react';
import { Formik, Form, Field } from 'formik';
import './ToggleSwitch.css'; // Import CSS file for styling the toggle switch



const ToggleSwitchForm = () => {
  return (
    <div>
     
      <Formik
        initialValues={{ toggleSwitch: false }} // Initial value for the toggle switch
        onSubmit={(values) => {
          // Handle form submission
          console.log('Form submitted:', values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            {/* Toggle switch */}
            <div className="toggle-switch-container">
              <label className="toggle-switch">
                <Field
                  type="checkbox"
                  name="toggleSwitch"
                  checked={values.toggleSwitch}
                  onChange={(e) =>
                    setFieldValue('toggleSwitch', e.target.checked)
                  }
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
        
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ToggleSwitchForm;
