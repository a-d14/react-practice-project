import React, {useState} from 'react';
import AddUser from './components/AddUser/AddUser';
import ErrorModal from './components/ErrorModal/ErrorModal';
import UserList from './components/UserList/UserList';

function App() {

  const [userInfo, setUserInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // const changeUserData = (username, age) => {
  //   setUserInfo((prevData) => {
  //     return [...prevData, {username: username, age: age}];
  //   })
  // }

  return (
    <div>
      <AddUser setUserInfo={setUserInfo} setShowModal={setShowModal} setModalMessage={setModalMessage}/>
      <UserList userInfo={userInfo} />
      {showModal && <ErrorModal setShowModal={setShowModal} errorMsg = {modalMessage} />}
    </div>
  );
}

export default App;
