import React from 'react';
import { Field, useField } from 'formik';
import FormInputGroup from './FormInputGroup';


const FormSelect = ({ labelClasses, disabled = false, hasMessage = false, inputClasses, mutedText, groupClass, options, ...props }) => {

    const [field, meta, setFieldValue] = useField(props);
    let setValue = setFieldValue.setValue;
    let setTouched = setFieldValue.setTouched;
    
    return (
        <FormInputGroup
            meta={meta}
            label={props.label}
            labelClasses={labelClasses}
            hasMessage={hasMessage}
            inputClasses={inputClasses}
            mutedText={mutedText}
            groupClass={groupClass}
            id={props.id}
            inputField={
                <Field as="select" name={props.name} disabled={disabled} id={props.id} className={meta.touched && meta.error && hasMessage ? "danger-input-field cursor-pointer" : "input-field cursor-pointer"} {...field} {...props}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={() => setTouched(props.name, true)}
                >
                    <option>Select an option</option>
                    {options}
                </Field>
            }
        />
    );
};

export default FormSelect;
