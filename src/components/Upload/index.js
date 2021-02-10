import React from 'react';
import { useDropzone } from 'react-dropzone';

import * as S from './styles';
import Button from '../UI/Button';

export const Upload = (props) => {
  const { setFieldValue } = props;
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*, application/pdf, image/vnd.dwg,.dwg',
    onDrop: (acceptedFiles) => {
      console.log('acceptedFiles', acceptedFiles);
      setFieldValue('files', acceptedFiles);
    }
  });
  return (
    <S.FileWrapper {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      <Button type="button" kind="info" size="large">
        <S.Icon className="fa fa-upload" /> ANEXAR PROJETO
      </Button>
    </S.FileWrapper>
  );
};
