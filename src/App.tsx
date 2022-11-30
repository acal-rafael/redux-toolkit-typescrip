import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { User } from './pages/User';
import { addUser, useUser, IUserProps } from './redux/sliceUser';

function App() {
  const user = useSelector(useUser);
  
  const dispatch = useDispatch();
  
  
  const [ userApi, setUserApi ] = useState<IUserProps>({
    login: "Rafael",
    admin: true,
    deposito: false,
    faturamento: false,
    recebimento: false,
    patrimonio: false
  })

  useEffect(() => {

    dispatch(addUser(userApi))  
  }, [])

  return (
    <div>
      <User loginProp={user.login} />
    </div>
  )
}

export default App
