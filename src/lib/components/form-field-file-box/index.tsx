import { Div, Label, Span } from '@stylin.js/elements';
import React, {
  ChangeEventHandler,
  DragEventHandler,
  FC,
  useState,
} from 'react';

import { FolderSVG, ImageCardSVG } from '../../icons';

import type { FormFieldFileBoxProps } from './form-field-file-box.types';

const FormFieldFileBox: FC<FormFieldFileBoxProps> = ({
  dropImageUrl,
  fileName,
  onChangeFile,
  onDropFile,
  onError,
}) => {
  const [dragging, setDragging] = useState(false);

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return onError('Something went wrong');

    if (!file.type.includes('image/'))
      return onError('Make sure that you are sending an image');

    onChangeFile(file);
  };

  const handleDropFile: DragEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault();
    setDragging(false);

    if (e.dataTransfer.items) {
      const item = e.dataTransfer.items[0];

      if (item.kind !== 'file' || !item.type.includes('image/'))
        return onError('Make sure that you are sending an image');

      const file = item.getAsFile();

      if (!file) return onError('Something went wrong');

      onDropFile(file);
      return;
    }

    const file = e.dataTransfer.files[0];

    if (!file) return onError('Something went wrong');

    if (!file.type.includes('image/'))
      return onError('Make sure that you are sending an image');

    onDropFile(file);
  };

  return (
    <Div
      p="1.25rem"
      gap="0.75rem"
      display="flex"
      bg="#9CA3AF1A"
      borderRadius="0.75rem"
      alignItems="center"
      justifyContent="center"
      height="4.59375rem"
      onDrop={handleDropFile}
      outline="2px dashed #BBB9FD99"
      onDragEnter={() => setDragging(true)}
      onDragLeave={() => setDragging(false)}
      onDragOver={(e) => e.preventDefault()}
      outlineStyle={dragging ? 'solid' : 'dashed'}
      outlineColor={dragging ? '#B4C5FF' : '#BBB9FD99'}
    >
      {dropImageUrl ? (
        <Div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          px="0.75rem"
        >
          <Div display="flex" alignItems="center" gap="0.5rem">
            <ImageCardSVG maxWidth="1.4rem" maxHeight="1.4rem" width="100%" />
            <Label
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              htmlFor="file"
              color="#BBB9FD"
              cursor="pointer"
              fontFamily="Satoshi"
              textDecoration="underline"
              fontSize="0.875rem"
              fontWeight="400"
            >
              {fileName || 'Uploaded image'}
            </Label>
          </Div>
          <Div
            width="2.75rem"
            height="2.75rem"
            mixBlendMode="screen"
            backgroundSize="contain"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundImage={`url(${dropImageUrl})`}
          />
        </Div>
      ) : (
        <>
          <FolderSVG maxWidth="1.4rem" maxHeight="1.4rem" width="100%" />

          <Div>
            <Span color="#FFFFFF" fontFamily="Satoshi" fontSize="0.875rem">
              Drop your file here or{' '}
            </Span>
            <Label
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              htmlFor="file"
              color="#B4C5FF"
              cursor="pointer"
              fontFamily="Satoshi"
              textDecoration="underline"
              fontSize="0.875rem"
            >
              upload
            </Label>
          </Div>
        </>
      )}
      <Div display="none">
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={handleChangeFile}
        />
      </Div>
    </Div>
  );
};

export default FormFieldFileBox;
