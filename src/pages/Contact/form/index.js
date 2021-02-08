import React from 'react';
import { useMutation } from '@apollo/client';
import { mask as masker, unMask } from 'remask';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import TextArea from '../../../components/UI/TextArea';
import { ADD_CONTACT } from '../../../services/graphQL/mutations';

import * as S from './styles';

const Form = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('nome é obrigatório.').min(3, 'nome inválido.'),
    phoneNumber: Yup.string()
      .required('telefone é obrigatório.')
      .min(14, 'telefone inválido.'),
    mobileNumber: Yup.string()
      .required('celular é obrigatório.')
      .min(15, 'celular inválido.'),
    email: Yup.string()
      .email('e-mail inválido.')
      .required('e-mail é obrigatório.'),
    message: Yup.string().required('mensagem é obrigatório.')
  });

  const [createContact] = useMutation(ADD_CONTACT, {
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
      message: ''
    },
    validationSchema,
    onSubmit: (values) => {
      const makeRequest = {
        ...values,
        phoneNumber: values.phoneNumber.replace(/[^\d]+/g, ''),
        mobileNumber: values.mobileNumber.replace(/[^\d]+/g, '')
      };

      createContact({
        update: () => {
          toast.success(`Informações de Contato enviado com sucesso!`, {
            position: toast.POSITION.TOP_RIGHT
          });

          resetForm();
        },
        variables: {
          data: makeRequest
        }
      });
    }
  });

  return (
    <>
      <S.FormWrapper>
        <form onSubmit={handleSubmit}>
          <S.LineTitle />
          <S.Title>Entre em Contato</S.Title>
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
