import { ChangeEventHandler } from 'react'

export interface JSTextFieldProps {
    id?: string,
    variant?: 'outlined' | 'filled' | 'standard',
    label?: string,
    size?: 'small' | 'medium',
    value?: string,
    error?: string,
    placeholder?: string,
    helperText?: string,
    disabled?: boolean,
    adornmentPosition?: 'start' | 'end',
    required?: boolean,
    onChange: (value: string, error: boolean) => void,
    type?: 'text' | 'number',
    email?: boolean,
    emailErrorMessage?: string,
    requiredErrorMessage?: string,
    startAdornment?: React.ReactNode,
    endAdornment?: React.ReactNode
}