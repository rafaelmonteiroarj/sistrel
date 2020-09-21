import React, { useState } from 'react';

import Single from '../../components/Single';
import PaymentsAndCertificates from '../../components/PaymentsAndCertificates';
import Highlights from '../../components/Highlights';

import Button from '../../components/UI/Button';
import Line from '../../components/UI/Line';
import Input from '../../components/UI/Input';
import TextArea from '../../components/UI/TextArea';

import * as S from './styles';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    mobilePhone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { target } = e;
    const value = target.value || null;
    const { name } = target;

    setForm({ ...form, [name]: value });

    console.log('>>>>>', `name: ${name}, value: ${value}`);
  };

  const { name, phone, mobilePhone, email, message } = form;
  return (
    <>
      <Single sectionEnabled={false}>
        <Highlights
          title="TEMOS A SOLUÇÃO IDEAL PARA SUA OBRA"
          description="Entre em contato conosco para que possamos indicar o melhor produto para sua obra."
        />

        <S.ContactWrapper>
          <S.Form>
            <S.LineTitle />
            <S.Title>Tire suas Dúvidas</S.Title>
            <S.Label>Nome</S.Label>
            <Input
              size="regular"
              name="name"
              type="text"
              placeholder="Inserir nome"
              value={name}
              onChange={(e) => handleChange(e)}
            />

            <S.Label>Telefone residencial</S.Label>
            <Input
              size="regular"
              name="phone"
              type="text"
              value={phone}
              placeholder="Inserir número de telefone"
              onChange={(e) => handleChange(e)}
            />

            <S.Label>Telefone celular</S.Label>
            <Input
              size="regular"
              name="mobilePhone"
              type="text"
              value={mobilePhone}
              placeholder="Inserir número de telefone"
              onChange={(e) => handleChange(e)}
            />

            <S.Label>Email</S.Label>
            <Input
              size="regular"
              name="email"
              type="text"
              value={email}
              placeholder="Inserir email"
              onChange={(e) => handleChange(e)}
            />

            <S.Label>Mensagem</S.Label>
            <TextArea
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
          </S.Form>
          <S.Information>
            <S.LineTitle />
            <S.Title>Localização</S.Title>
            <S.IframeWrapper>
              <S.Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.6659847111177!2d-46.82444628461867!3d-23.32787468479923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee1fc03ddc22f%3A0x4ce4539737bd93ae!2sSistrel%20Lajes!5e0!3m2!1spt-BR!2sbr!4v1600723821480!5m2!1spt-BR!2sbr"
                frameBorder="0"
                allowFullScreen=""
                title="test"
              />
            </S.IframeWrapper>
          </S.Information>
        </S.ContactWrapper>
        <Line />
        <PaymentsAndCertificates />
      </Single>
    </>
  );
};

export default Contact;
