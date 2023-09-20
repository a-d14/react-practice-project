import styles from './AddUser.module.css';
import Button from '../Button/Button';
import { useState, useRef } from 'react';
import Card from '../Card/Card';

function AddUser(props) {

    // const [username, setUsername] = useState('');
    const nameInputRef = useRef();
    const [age, setAge] = useState('');

    // const usernameHandler = (e) => {
    //     setUsername(e.target.value);
    // }

    const ageHandler = (e) => {
        setAge(e.target.value);
    }

    const reset = () => {
        nameInputRef.current.value = '';
        setAge('');
    }

    const submitForm = (event) => {
        event.preventDefault();

        const username = nameInputRef.current.value;

        if(username.trim().length === 0 || age.trim().length === 0) {
            props.setModalMessage('Fill in all fields');
            props.setShowModal(true);
        } else if(+(age.trim()) <= 0) {
            props.setModalMessage('Enter a valid age ( > 0 )');
            props.setShowModal(true);
        } else {
            // props.setUserInfo((prevData) => {
            //     prevData.push({'username': username, 'age': age});
            //     return prevData;
            // })
            props.setUserInfo((prevData) => {
                return [...prevData, {username: username, age: age, id: Math.random().toString()}];
            });
            // props.setUserInfo(username, age);
        }

        reset();
    }

    return (
        <div className={styles['add-user']}>
            <Card>
                <form onSubmit={submitForm} className={styles.form}>

                    <div className={styles['form-group']}>
                        <label className={styles['form-label']} htmlFor="username"> Username: </label>
                        <input ref={nameInputRef} className={styles['form-input']} id="username" type="text" />
                    </div>
                    
                    <div className={styles['form-group']}>
                        <label className={styles['form-label']} htmlFor="age"> Age (years): </label>
                        <input value={age} onChange={ageHandler} className={styles['form-input']} id="age" type="number" />
                    </div>

                    <Button type="submit" msg="Add User"/>
                </form>
            </Card>
        </div>
    );

}

export default AddUser;