import React from 'react';

export const FormErrors = ({formErrors}) =>

  <div>

    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        if(fieldName=='firstName') {
          return (
          //if(fieldName == 'firstName') {this.fieldName="Имя"}
            <p key={i}>Поле <b>Имя</b> {formErrors[fieldName]}</p>
          )
        }
        else if(fieldName=='lastName') {
          return (
          //if(fieldName == 'firstName') {this.fieldName="Имя"}
            <p key={i}>Поле <b>Фамилия</b> {formErrors[fieldName]}</p>
          )
        }
        else if(fieldName=='photo') {
          return (
          //if(fieldName == 'firstName') {this.fieldName="Имя"}
            <p key={i}>Поле <b>Фото</b> {formErrors[fieldName]}</p>
          )
        }

      } else {
        return '';
      }
    })}
  </div>


export default FormErrors;
