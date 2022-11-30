import React from 'react';
import { useSelector } from 'react-redux';
import { useUser } from '../../redux/sliceUser';

interface IUserProps {
  loginProp: string;
}

export const User = ({ loginProp }: IUserProps) => {

  const { 
    login, 
    admin, 
    deposito, 
    faturamento,
    recebimento,
    patrimonio 
  } = useSelector(useUser);

  return (
    <>
      <div>Login: {login}</div>
      <div>Admin: {String(admin)}</div>
      <div>Desposito: {String(deposito)}</div>
      <div>Faturamento: {String(faturamento)}</div>
      <div>Recebimento: {String(recebimento)}</div>
      <div>Patrimônio: {String(patrimonio)}</div>
    </>
  )
}
