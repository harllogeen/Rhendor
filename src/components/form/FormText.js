import React, { useEffect } from 'react';
import { useField } from 'formik';
import FormInputGroup from './FormInputGroup';

const FormText = ({ label, labelClasses, hasMessage, inputClasses, mutedText, groupClass, id, ...props }) => {
    const [field, meta, setFieldValue] = useField(props);

    useEffect(() => {
        if (props.type && props.type === 'hidden' && props.value && (props.value !== field.value))
            setFieldValue.setValue(props.value)
    });

    return (
        <>
            <FormInputGroup
                meta={meta}
                label={label}
                labelClasses={labelClasses}
                hasMessage={hasMessage}
                inputClasses={inputClasses}
                mutedText={mutedText}
                groupClass={groupClass}
                id={id}
                inputField={
                    <input id={id} className={(meta.touched && meta.error ? "danger-input-field " : "input-field ") + inputClasses} {...field} {...props} />
                }
            />
        </>
    );
};

export default FormText;
