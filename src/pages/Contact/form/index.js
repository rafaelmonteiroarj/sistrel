import React, { useState } from 'react';
import { mask as masker, unMask } from 'remask';

import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import TextArea from '../../../components/UI/TextArea';

import * as S from './styles';

const InputMask = ({ mask, onChange, ...props }) => {
  const rafa = (ev) => {
    const originalValue = unMask(ev.target.value);
    const maskedValue = masker(originalValue, mask);
    // console.log('>>>>', maskedValue);
    onChange(ev, maskedValue);
  };

  return <Input {...props} onChange={rafa} />;
};

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    mobilePhone: '',
    email: '',
    message: '',
    m2: '',
    typeWork: '',
    productOfInterest: '',
    overload: '',
    file: ''
  });

  const handleChange = (e, maskedValue) => {
    const { target } = e;
    const value = target.value || null;
    const { name } = target;

    setForm({ ...form, [name]: maskedValue || value });

    // console.log('>>>>>', `name: ${name}, value: ${maskedValue || value}`);
  };

  const { name, phone, mobilePhone, email, message } = form;

  return (
    <>
      <S.FormWrapper>
        <S.LineTitle />
        <S.Title>Entre em Contato</S.Title>
        <S.Label>Nome</S.Label>
        <Input
          size="large-100"
          name="name"
          type="text"
          placeholder="Inserir nome"
          value={name}
          onChange={(e) => handleChange(e)}
        />

        <S.TwoFields>
          <S.Left>
            <S.Label>Telefone residencial</S.Label>
            <InputMask
              size="large-100"
              mask="(99) 9999-9999"
              name="phone"
              type="text"
              value={phone}
              onChange={handleChange}
              maxLenght={15}
              placeholder="Inserir número de telefone"
            />
          </S.Left>
          <S.Right>
            <S.Label>Telefone celular</S.Label>
            <InputMask
              size="large-100"
              mask="(99) 99999-9999"
              maxLenght={16}
              name="mobilePhone"
              type="text"
              value={mobilePhone}
              placeholder="Inserir número de telefone"
              onChange={handleChange}
            />
          </S.Right>
        </S.TwoFields>

        <S.Label>Email</S.Label>
        <Input
          size="large-100"
          name="email"
          type="text"
          value={email}
          placeholder="Inserir email"
          onChange={(e) => handleChange(e)}
        />

        <S.Label>Mensagem</S.Label>
        <TextArea
          size="large-100"
          name="message"
          placeholder="Insira uma mensagem ..."
          value={message}
          onChange={(e) => handleChange(e)}
        >
          {message}
        </TextArea>

        <S.ButtonWrapper>
          <Button type="submit" kind="danger" size="large-100">
            ENVIAR
          </Button>
        </S.ButtonWrapper>
      </S.FormWrapper>
    </>
  );
};

export default Form;
