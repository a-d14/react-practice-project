import styles from './UserList.module.css';
import Card from "../Card/Card";

function UserList(props) {
    return (
        <div className={styles['user-list']}>
            <Card>
                {
                    props.userInfo.length > 0 && <ul>
                    {props.userInfo.map(info => {
                        return (
                            <li key={info.id}>{info.username} ({info.age} years old)</li>
                        )
                    })}
                    </ul>
                }
                {
                    props.userInfo.length === 0 && <p>There is no data to display.</p>
                }
            </Card>
        </div>
    )
}

export default UserList;