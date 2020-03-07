import React from 'react'
import {faUserTie, faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const UserMessages = (props) => {
    const {userType, userMessages} = props.message
    return (
        <div className={`user-messages-panel ${userType}`}>
            <div className="user-image">
                <FontAwesomeIcon icon={userType === 'user' ? faUser : faUserTie} />
            </div>
            <div className="user-messages">
                {userMessages && userMessages.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            {message.type === 'text' ?
                                <div>
                                    {message.text}
                                </div>
                                :
                                <div></div>
                            }
                        </div>
                    )
                })}
                {userMessages &&
                    <div className="user-messages-sent">
                        {userMessages[userMessages.length - 1].sent}
                    </div>
                }
            </div>
        </div>
    )
}

export default UserMessages