import { Div, DivProps, P } from '@stylin.js/elements';
import stylin from '@stylin.js/react';
import React from 'react';
import {
  ChangeEvent,
  FC,
  forwardRef,
  PropsWithRef,
  RefAttributes,
  useId,
  useState,
} from 'react';

import { Button } from '../button';
import { TextFieldElementProps } from '../text-field';
import {
  FormFieldBoxProps,
  TextAreaElementProps,
} from './form-field-box.types';
import InfoSVG from '../../icons/info';

const TextFieldElement = stylin<TextFieldElementProps & RefAttributes<unknown>>(
  'input'
)({
  '&::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
  },
  '&::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
  },
});

const TextAreaElement = stylin<TextAreaElementProps & RefAttributes<unknown>>(
  'textarea'
)({});

const FieldContainer = stylin<DivProps & RefAttributes<unknown>>('div')({
  '&:has(input:focus), &:has(textarea:focus)': {
    borderColor: '#B4C5FF',
  },

  '&:has(input:not(:placeholder-shown):not(:focus)), &:has(textarea:not(:placeholder-shown):not(:focus))':
    {
      borderColor: '#9CA3AF',
    },
});

const FormFieldBox: FC<
  PropsWithRef<Omit<FormFieldBoxProps, 'Prefix' | 'onFocus' | 'onBlur'>>
> = forwardRef(
  (
    {
      label,
      Suffix,
      status,
      disabled,
      fieldProps,
      isTextArea,
      supportingText,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState<string>();
    const id = useId();

    const statusColor = !status
      ? ' #fff'
      : status == 'none'
      ? '#fff'
      : status == 'error'
      ? '#FED7D7'
      : '#BAF6CF';

    const handleBorderStatus = () => {
      const isError = status === 'error';
      const isSuccess = status === 'success';
      const hasStatus = isError || isSuccess;
      if (disabled) return '1px solid red';
      if (hasStatus)
        return `1px solid ${isError ? '#FED7D7' : '#BAF6CF'} !important`;
    };

    const changeValue = (input: string) => setValue(input);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      changeValue(e.target.value);
      props.onChange?.(e);
    };

    const handleTextAreaChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      changeValue(e.target.value);
      props.onChange?.(e as ChangeEvent<HTMLInputElement>);
    };

    return (
      <Div>
        <FieldContainer
          p="0.75rem"
          pb={isTextArea ? '0.75rem' : '1rem'}
          display="flex"
          gap="0.25rem"
          bg="#9CA3AF1A"
          borderRadius="0.75rem"
          transition="0.3s"
          border={handleBorderStatus() || '1px solid #F3F4F61A'}
          nHover={{
            border: '1px solid #B4C5FF',
          }}
          data-status={
            status === 'error' || status === 'success' ? status : undefined
          }
          {...fieldProps}
        >
          <Div width="100%">
            <Div display="flex" mb="0.25rem">
              <P
                display="flex"
                color={
                  status === 'error' || status === 'success'
                    ? statusColor
                    : '#9CA3AF'
                }
                fontWeight="400"
                fontFamily="Satoshi"
                fontSize="0.875rem"
                lineHeight="1.25rem"
                alignItems="center"
              >
                {label}
              </P>
              <Button
                p="unset"
                ml="0.25rem"
                border="none"
                variant="text"
                width="1.25rem"
                color="#6B7280"
                height="1.25rem"
                nHover={{
                  bg: 'unset',
                  color: '#B4C5FF',
                }}
              >
                <InfoSVG maxWidth="100%" maxHeight="100%" width="100%" />
              </Button>
            </Div>
            <Div>
              {isTextArea ? (
                <TextAreaElement
                  id={id}
                  rows={2}
                  ref={ref}
                  all="unset"
                  width="100%"
                  disabled={disabled}
                  color={statusColor}
                  placeholder="Enter pool description here..."
                  onChange={handleTextAreaChange}
                  defaultValue={value || props.defaultValue}
                  nPlaceholder={{
                    color: '#6B7280',
                  }}
                  {...props}
                />
              ) : (
                <TextFieldElement
                  id={id}
                  ref={ref}
                  all="unset"
                  width="100%"
                  fontSize="1rem"
                  bg="transparent"
                  height="1.25rem"
                  fontWeight="400"
                  fontFamily="Satoshi"
                  disabled={disabled}
                  color={statusColor}
                  lineHeight="1.25rem"
                  onChange={handleChange}
                  defaultValue={value || props.defaultValue}
                  nPlaceholder={{
                    color: '#6B7280',
                  }}
                  placeholder="Name"
                  {...props}
                />
              )}
            </Div>
          </Div>
          {Suffix}
        </FieldContainer>
        {supportingText && (
          <P
            px="0.75rem"
            pt="0.25rem"
            hyphens="auto"
            fontSize="0.75rem"
            wordWrap="break-word"
            overflowWrap="break-word"
            color={disabled ? '#6B7280' : statusColor}
          >
            {supportingText}
          </P>
        )}
      </Div>
    );
  }
);

FormFieldBox.displayName = 'FormFieldBox';
export default FormFieldBox;
export * from './form-field-box.types';
