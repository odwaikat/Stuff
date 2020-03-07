import React from 'react'
import UserMessages from '../../components/user-messages/container'

const messages = [
    {
        userId: 0,
        userImage: 'user1',
        userType: 'user',
        userMessages: [
            {
                text: `I'm planning a family vacation and would like to reserve dinner at Medieval Times in Buena Park, CA,
                        for July 11, 2020 at an evening show 2 adults, 3 kids below age 12.`,
                sent: 'Herman Woods, 11:42 am (Mobile app)',
                type: 'text'
            },
            {
                text: `Some long text showing a message user sent. Some long text showing a message user sent. Some long 
                        text showing a message user sent. Some long text showing a message user sent. Some long text 
                        showing a message user sent. Some long text showing a message user sent. `,
                sent: 'Herman Woods, 11:42 am (Mobile app)',
                type: 'text'
            }
        ]
    },
    {
        userId: 13,
        userImage: 'user0',
        userType: 'stuff',
        userMessages: [
            {
                text: `Stuff text.`,
                sent: 'Adam (stuff), 11:58 am',
                type: 'text'
            }
        ]
    }
]
class RightPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSendButton: false,
            messages
        }
        this.onTextareaChange = this.onTextareaChange.bind(this)
    }

    onTextareaChange(event) {
        if (event.target.value && event.target.value.length) {
            this.setState({
                showSendButton: true
            })
        } else {
            this.setState({
                showSendButton: false
            })
        }
    }

    render() {
        return (
            <div className="right-panel">
                <div className="right-panel-conteiner">
                    <div className="right-panel-wrapper">
                        <div className="right-panel-body">
                            {this.state.messages.map((message) => {
                                return (
                                    <UserMessages
                                        message={message}
                                    />
                                )
                            })}
                        </div>
                        <div className="right-panel-footer">
                            <textarea className="write-a-message-textarea" placeholder="type a message"
                                onChange={this.onTextareaChange}
                            >

                            </textarea>
                            {this.state.showSendButton &&
                                <button className="btn btn-primary send-btn" type="button" >
                                    Send & wait for the user
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightPanel