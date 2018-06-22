import React from 'react';
import { Button, Form, Message } from 'semantic-ui-react'

export const FormErrors = ({formErrors}) =>

  <div>



    <Form error>
      {Object.keys(formErrors).map((fieldName, i) => {
        if(formErrors[fieldName].length > 0){
          if(fieldName=='firstName') {
            return (
              <div>
                <Message
                  key={i}
                  error
                >Field <strong>Name</strong> {formErrors[fieldName]}</Message>
              </div>
            )
          }
          else if(fieldName=='lastName') {
            return (
              <div>
                <Message
                  key={i}
                  error
                >Field <strong>Last Name</strong> {formErrors[fieldName]}</Message>
              </div>

            )
          }
          else if(fieldName=='photo') {
            return (
              <div>
                <Message
                  key={i}
                  error
                >Field <strong>Photo</strong> {formErrors[fieldName]}</Message>
              </div>
            )
          }
          else if(fieldName=='tel') {
            return (
              <div>
                <Message
                  key={i}
                  error
                >Field <strong>Tel.</strong> {formErrors[fieldName]}</Message>
              </div>
            )
          }
          else if(fieldName=='company') {
            return (
              <div>
                <Message
                  key={i}
                  error
                >Field <strong>Company</strong> {formErrors[fieldName]}</Message>
              </div>
            )
          }
          else if(fieldName=='email') {
            return (
              <div>
                <Message
                  key={i}
                  error
                >Field <strong>Email</strong> {formErrors[fieldName]}</Message>
              </div>
            )
          }

        } else {
          return '';
        }
      })}

    </Form>
    </div>


export default FormErrors;
