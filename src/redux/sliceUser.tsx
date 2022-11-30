import { createSlice, PayloadAction, } from '@reduxjs/toolkit';

export interface IUserProps {
  login: string,
  admin: boolean,
  deposito: boolean,
  faturamento: boolean,
  recebimento: boolean,
  patrimonio: boolean,
}


// const USER_STATE: IUserProps;

const USER_STATE: IUserProps = {
  login: "",
  admin: false,
  deposito: false,
  faturamento: false,
  recebimento: false,
  patrimonio: false
}


const sliceUser = createSlice({
  name: 'user',
  initialState: USER_STATE,
  reducers: {
    addUser( state, { payload } : PayloadAction<IUserProps>) {

      state.login = payload.login;
      state.admin = payload.admin;
      state.deposito = payload.deposito;
      state.faturamento = payload.faturamento;
      state.recebimento = payload.recebimento;
      state.patrimonio = payload.patrimonio;
      // return state
    }
  }
});

export default sliceUser.reducer;

export const { addUser } = sliceUser.actions;

export const useUser = (state: any) => {
  return state.user as IUserProps
}