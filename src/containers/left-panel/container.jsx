import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRegistered} from '@fortawesome/free-solid-svg-icons'
import {faQuestionCircle} from '@fortawesome/free-regular-svg-icons'
import ProgressBar from '../../components/progress-bar/container'
import Dropdown from '../../components/dropdown/container'
import GoalsSelect from '../../components/goals-select/container'

const goals = [
    {title: 'Reserve dinner', selected: false, id: 0},
    {title: 'Plan a vacation', selected: false, id: 1},
    {title: 'Attend a meeting', selected: false, id: 2},
    {title: 'Watch a movie', selected: false, id: 3},
    {title: 'Pay for tickets', selected: false, id: 4},
    {title: 'Watch a match', selected: false, id: 5},
    {title: 'Attend a meeting', selected: false, id: 6},
    {title: 'Watch a movie', selected: false, id: 7},
    {title: 'Pay for tickets', selected: false, id: 8},
]

const goalSelectionType = [
    {title: 'Single goal', type: 'single', selected: true},
    {title: 'Multi goals', type: 'multi', selected: false}
]

class LeftPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goalsList: goals,
            goalSelectionTypeList: goalSelectionType,
            isSingleSelect: true,
        }
        this.selectGoal = this.selectGoal.bind(this)
        this.changeGoalSelectionType = this.changeGoalSelectionType.bind(this)
    }

    selectGoal(goal, idx) {
        let goalsList = this.state.goalsList
        const prevState = goalsList[idx].selected
        if (this.state.isSingleSelect) {
            goalsList = goalsList.map((item) => {
                item.selected = false
                return item
            })
        }
        goalsList[idx].selected = !prevState
        this.setState({
            goalsList
        })
    }
    changeGoalSelectionType(goalSelectionType) {
        let list = this.state.goalSelectionTypeList
        list = list.map((item) => {
            if (item === goalSelectionType) {
                item.selected = true
            } else {
                item.selected = false
            }
            return item
        })

        let goalsList = this.state.goalsList
        goalsList = goalsList.map((item) => {
            item.selected = false
            return item
        })

        this.setState({
            goalsList,
            goalSelectionTypeList: list,
            isSingleSelect: goalSelectionType.type !== 'multi'
        })
    }

    render() {
        return (
            <div className="left-panel">
                <div className="left-panel-conteiner">
                    <div className="left-panel-wrapper">
                        <div className="left-panel-top-section">
                            <div className="left-panel-header">
                                <div className="left-panel-logo">
                                    <FontAwesomeIcon icon={faRegistered} />
                                    <span className="left-panel-header-text">
                                        New request
                                    </span>
                                </div>
                                <div className="help-icon">
                                    <FontAwesomeIcon icon={faQuestionCircle} />
                                </div>
                            </div>
                            <ProgressBar/>
                        </div>
                        <div className="left-panel-body">
                            <h2>
                                What's the goal?
                            </h2>
                            <Dropdown
                                title="Select Goal"
                                list={this.state.goalSelectionTypeList}
                                onChangeHandler={this.changeGoalSelectionType}
                            />
                            <GoalsSelect list={this.state.goalsList} selectGoal={this.selectGoal} />
                        </div>
                        <div className="left-panel-footer">
                            <button className="btn btn-secondary" type="button" >
                                Can't proceed
                            </button>
                            <button className="btn btn-primary" type="button" >
                                Confirm goal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftPanel