import React from 'react';
import { useMutation } from '@apollo/client';
import { mask as masker, unMask } from 'remask';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import TextArea from '../../../components/UI/TextArea';
import { ADD_BUDGET } from '../../../services/graphQL/mutations';
import { Upload } from '../../../components/Upload';

import * as S from './styles';

const Form = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('nome é obrigatório.'),
    phoneNumber: Yup.string()
      .required('telefone é obrigatório.')
      .min(14, 'telefone inválido.'),
    mobileNumber: Yup.string()
      .required('celular é obrigatório.')
      .min(15, 'celular inválido.'),
    email: Yup.string()
      .email('e-mail inválido.')
      .required('e-mail é obrigatório.'),
    message: Yup.string().required('mensagem é obrigatório.'),
    m2: Yup.string().required('M2 é obrigatório.'),
    typeOfWork: Yup.string().required('tipo obra é obrigatório.'),
    productOfInterest: Yup.string().required(
      'produto de interrese é obrigatório.'
    ),
    vao: Yup.string().required('vao e sobre carga é obrigatório.')
  });

  const [createBudget] = useMutation(ADD_BUDGET, {
    onError: () => {
      toast.error(
        `Não foi possível enviar informações. Serviço indisponível!`,
        {
          position: toast.POSITION.TOP_RIGHT
        }
      );
    }
  });

  const {
    values,
    handleSubmit,
    resetForm,
    errors,
    handleChange,
    touched,
    setFieldValue
  } = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      mobileNumber: '',
      email: '',
      message: '',
      m2: '',
      typeOfWork: '',
      productOfInterest: '',
      vao: '',
      files: []
    },
    validationSchema,
    onSubmit: (values) => {
      const makeRequest = {
        name: values.name,
        email: values.email,
        message: values.message,
        m2: values.m2,
        typeOfWork: values.typeOfWork,
        productOfInterest: values.productOfInterest,
        vao: values.vao,
        phoneNumber: values.phoneNumber.replace(/[^\d]+/g, ''),
        mobileNumber: values.mobileNumber.replace(/[^\d]+/g, '')
      };

      createBudget({
        update: () => {
          toast.success(`Informações de Orçamento enviado com sucesso!`, {
            position: toast.POSITION.TOP_RIGHT
          });

          resetForm();
        },
        variables: {
          data: makeRequest,
          files: values.files
        }
      });
    }
  });
  return (
    <>
      <S.FormWrapper>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <S.LineTitle />
          <S.Title>Faça seu Orçamento</S.Title>
          <S.Label>Nome</S.Label>
          <Input
            size="large-100"
            name="name"
            type="text"
            placeholder="Inserir nome"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name ? (
            <S.Error>{errors.name}</S.Error>
          ) : null}
          <S.TwoFields>
            <S.Left>
              <S.Label>Telefone residencial</S.Label>
              <Input
                size="large-100"
                name="phoneNumber"
                type="text"
                value={values.phoneNumber}
                onChange={(e) => {
                  const originalValue = unMask(e.target.value);
                  const handValue = masker(originalValue, '(99) 9999-9999');
                  setFieldValue('phoneNumber', handValue);
                }}
                placeholder="Inserir número de telefone"
              />
              {errors.phoneNumber && touched.phoneNumber ? (
                <S.Error>{errors.phoneNumber}</S.Error>
              ) : null}
            </S.Left>
            <S.Right>
              <S.Label>Telefone celular</S.Label>
              <Input
                size="large-100"
                name="mobileNumber"
                type="text"
                value={values.mobileNumber}
                onChange={(e) => {
                  const originalValue = unMask(e.target.value);
                  const handValue = masker(originalValue, '(99) 99999-9999');
                  setFieldValue('mobileNumber', handValue);
                }}
                placeholder="Inserir número de celular"
              />
              {errors.mobileNumber && touched.mobileNumber ? (
                <S.Error>{errors.mobileNumber}</S.Error>
              ) : null}
            </S.Right>
          </S.TwoFields>

          <S.Label>Email</S.Label>
          <Input
            size="large-100"
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            placeholder="Inserir email"
          />
          {errors.email && touched.email ? (
            <S.Error>{errors.email}</S.Error>
          ) : null}
          <S.TwoFields>
            <S.Left>
              <S.Label>M2</S.Label>
              <Input
                size="large-100"
                name="m2"
                type="text"
                value={values.m2}
                placeholder="Inserir M2"
                onChange={handleChange}
              />
              {errors.m2 && touched.m2 ? <S.Error>{errors.m2}</S.Error> : null}
            </S.Left>
            <S.Right>
              <S.Label>Tipo Obra</S.Label>
              <Input
                size="large-100"
                name="typeOfWork"
                type="text"
                value={values.typeOfWork}
                placeholder="Inserir tipo de obra"
                onChange={handleChange}
              />
              {errors.typeOfWork && touched.typeOfWork ? (
                <S.Error>{errors.typeOfWork}</S.Error>
              ) : null}
            </S.Right>
          </S.TwoFields>

          <S.TwoFields>
            <S.Left>
              <S.Label>Produto de Interrese</S.Label>
              <Input
                size="large-100"
                name="productOfInterest"
                type="text"
                value={values.productOfInterest}
                placeholder="Inserir produto de interrese"
                onChange={handleChange}
              />
              {errors.productOfInterest && touched.productOfInterest ? (
                <S.Error>{errors.productOfInterest}</S.Error>
              ) : null}
            </S.Left>
            <S.Right>
              <S.Label>Vao e Sobre Carga</S.Label>
              <Input
                size="large-100"
                name="vao"
                type="text"
                value={values.vao}
                placeholder="Inserir vao e sobre carga"
                onChange={handleChange}
              />
              {errors.vao && touched.vao ? (
                <S.Error>{errors.vao}</S.Error>
              ) : null}
            </S.Right>
          </S.TwoFields>

          <S.Label>Mensagem</S.Label>
          <TextArea
            size="large-100"
            name="message"
            placeholder="Insira uma mensagem ..."
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && touched.message ? (
            <S.Error>{errors.message}</S.Error>
          ) : null}
          <Upload setFieldValue={setFieldValue} />
          <S.FileWrapper>
            {values.files &&
              values.files.map((file, i) => (
                <S.File key={i}>
                  <S.Desc>arquivo:</S.Desc> {file.name}
                  <S.Desc1>{` ==> `}</S.Desc1>
                  <S.Desc>tamanho:</S.Desc>
                  {file.size} bytes
                </S.File>
              ))}
          </S.FileWrapper>
          <S.ButtonWrapper>
            <Button type="submit" kind="danger" size="large-100">
              ENVIAR
            </Button>
          </S.ButtonWrapper>
        </form>
      </S.FormWrapper>
    </>
  );
};

export default Form;
