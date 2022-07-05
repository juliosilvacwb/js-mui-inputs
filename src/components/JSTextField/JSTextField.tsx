import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
// import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { FocusEvent, useEffect, useState } from "react";
import { isValidEmail } from 'js-email-validation';
import { JSTextFieldProps } from "./JSTextField.types"

// const function JSTextField({ ...props }) {
const JSTextField: FC<JSTextFieldProps> = ({...props}) => {
    const { 
        id, 
        variant,
        placeholder, 
        size, 
        label, 
        helperText, 
        disabled,
        required,
        email,
        type,
        error,
        emailErrorMessage,
        requiredErrorMessage,
        startAdornment,
        endAdornment,
        adornmentPosition
    } = props;

    const [errors, setErrors] = useState<string[]>([]);
    const [touched, setTouched] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const touch = (e: FocusEvent<HTMLInputElement>) => {
        onChangeWithValidate(e.target.value);
    }
    
    const onChangeWithValidate = (val?: string) => {
        setTouched(true);
        let newValue: string = val ? val : '';
        if (type === 'number') {
            newValue =  !newValue ? '' : newValue.replace(/[^0-9]+/, '')
        }

        let newErrors: string[] = [];

        if (newValue?.length > 0 && email && !isValidEmail(newValue) && emailErrorMessage) newErrors = [...newErrors, emailErrorMessage];
        if (required && !newValue && requiredErrorMessage) newErrors = [...newErrors, requiredErrorMessage];

        if (error && !newErrors.includes(error)) newErrors = [...newErrors, error];

        setErrors(newErrors);
        setValue(newValue);
    }

    useEffect(() => {
        props.onChange(value, errors.length === 0);
    }, [value])

    useEffect(() => {
        if (props.value && props.value !== value) {
            onChangeWithValidate(props.value);
        }
    }, [props.value])
    
    useEffect(() => {
        if (error) {
            onChangeWithValidate(props.value);
        }
    }, [error])

    return  <FormControl fullWidth variant={variant} size={size} error={errors?.length > 0}>
                {
                    label && 
                    <InputLabel htmlFor={id}>{label}</InputLabel>
                }
                <OutlinedInput
                    id={id}
                    type={'text'}
                    value={value || ''}
                    onChange={(e) => onChangeWithValidate(e.target.value)}
                    onBlur={touch}
                    disabled={disabled}
                    label={label}
                    startAdornment={
                        (startAdornment) &&
                        <InputAdornment position={adornmentPosition || 'start'}>
                            { startAdornment }
                        </InputAdornment>
                    }
                    endAdornment={
                        ((endAdornment) &&
                        <InputAdornment position={adornmentPosition || 'end'}>
                            { endAdornment }
                        </InputAdornment>)
                    }
                    placeholder={placeholder}
                />
                { ((!touched && !!helperText) || (errors?.length === 0 && !!helperText)) && <FormHelperText>{helperText}</FormHelperText> }
                { touched && errors?.map((error: string, i) => <FormHelperText key={i}>{ error }</FormHelperText>) }
            </FormControl>
}

JSTextField.defaultProps = {
    variant: 'outlined',
    disabled: false,
    size: 'medium',
    required: false,
    email: false,
    type: 'text',
    emailErrorMessage: "Invalid email",
    requiredErrorMessage: "This field is required",
    adornmentPosition: 'start'
};

export default JSTextField;