import React from 'react';
import { useMutation } from '@apollo/client';
import { mask as masker, unMask } from 'remask';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import TextArea from '../../../components/UI/TextArea';
import { ADD_PROVIDER } from '../../../services/graphQL/mutations';

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
    companyName: Yup.string().required('nome da empresa é obrigatório.'),
    companyPhoneNumber: Yup.string()
      .required('telefone da empresa é obrigatório.')
      .min(14, 'telefone inválido.'),
    companyCnpj: Yup.string()
      .required('cnpj da empresa é obrigatório.')
      .min(18, 'cnpj inválido.'),
    typeOfService: Yup.string().required('tipo de serviço é obrigatório.'),
    message: Yup.string().required('mensagem é obrigatório.')
  });

  const [createProvider] = useMutation(ADD_PROVIDER, {
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
      companyName: '',
      companyPhoneNumber: '',
      companyCnpj: '',
      typeOfService: ''
    },
    validationSchema,
    onSubmit: (values) => {
      const makeRequest = {
        ...values,
        phoneNumber: values.phoneNumber.replace(/[^\d]+/g, ''),
        mobileNumber: values.mobileNumber.replace(/[^\d]+/g, ''),
        companyPhoneNumber: values.companyPhoneNumber.replace(/[^\d]+/g, ''),
        companyCnpj: values.companyCnpj.replace(/[^\d]+/g, '')
      };

      createProvider({
        update: () => {
          toast.success(`Informações de Fornecedor enviado com sucesso!`, {
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
          <S.Title>Dados Pessoais</S.Title>
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

          <S.Company>
            <S.LineTitle />
            <S.Title>Dados da empresa</S.Title>

            <S.Label>Nome da empresa</S.Label>
            <Input
              size="large-100"
              name="companyName"
              type="text"
              placeholder="Inserir nome da empresa"
              value={values.companyName}
              onChange={handleChange}
            />
            {errors.companyName && touched.companyName ? (
              <S.Error>{errors.companyName}</S.Error>
            ) : null}

            <S.TwoFields>
              <S.Left>
                <S.Label>CNPJ</S.Label>
                <Input
                  size="large-100"
                  name="companyCnpj"
                  type="text"
                  value={values.companyCnpj}
                  onChange={(e) => {
                    const originalValue = unMask(e.target.value);
                    const handValue = masker(
                      originalValue,
                      '99.999.999/9999-99'
                    );
                    setFieldValue('companyCnpj', handValue);
                  }}
                  placeholder="Inserir número de cnpj"
                />
                {errors.companyCnpj && touched.companyCnpj ? (
                  <S.Error>{errors.companyCnpj}</S.Error>
                ) : null}
              </S.Left>
              <S.Right>
                <S.Label>Telefone</S.Label>
                <Input
                  size="large-100"
                  name="companyPhoneNumber"
                  type="text"
                  value={values.companyPhoneNumber}
                  onChange={(e) => {
                    const originalValue = unMask(e.target.value);
                    const handValue = masker(originalValue, '(99) 9999-9999');
                    setFieldValue('companyPhoneNumber', handValue);
                  }}
                  placeholder="Inserir número de telefone"
                />
                {errors.companyPhoneNumber && touched.companyPhoneNumber ? (
                  <S.Error>{errors.companyPhoneNumber}</S.Error>
                ) : null}
              </S.Right>
            </S.TwoFields>

            <S.Label>Tipo de Serviço</S.Label>
            <Input
              size="large-100"
              name="typeOfService"
              type="text"
              placeholder="Inserir tipo de serviço"
              value={values.typeOfService}
              onChange={handleChange}
            />
            {errors.typeOfService && touched.typeOfService ? (
              <S.Error>{errors.typeOfService}</S.Error>
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
          </S.Company>

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
