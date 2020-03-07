import React from 'react'

class GoalsSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAll: false,
            list: this.props.list
        }
    }

    toggleGoalSelect(listItem, index) {
        this.props.selectGoal && this.props.selectGoal(listItem, index)
    }

    render() {
        const {list, showAll} = this.state
        return (
            <div className="goal-select">
                <div className="goals-list">
                    {list && (showAll ? list : list.slice(0, 3)).map((listItem, idx) => {
                        return (
                            <button key={`goal_${listItem.id}`} className={`btn goal-toggle ${listItem.selected ? 'selected' : 'white'}`} type="button" onClick={() => this.toggleGoalSelect(listItem, idx)}>
                                {listItem.title}
                            </button>
                        )
                    })}
                </div>

                <button className="btn show-more-toggle" type="button" onClick={() => this.setState({showAll: !showAll})}>
                    {!showAll ? 'Show more' : 'Show less'}
                </button>
            </div>
        )
    }
}

export default GoalsSelect