import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false,
            headerTitle: this.props.title,
            list: this.props.list
        }
        this.toggleList = this.toggleList.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.onClickListItem = this.onClickListItem.bind(this)
    }

    handleClickOutside(event) {
        if (this.dropdownMenuRef && !this.dropdownMenuRef.contains(event.target)) {
            this.setState({
                listOpen: false
            })
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    onClickListItem(listItem, index) {
        this.setState({
            listOpen: false
        })
        this.props.onChangeHandler && this.props.onChangeHandler(listItem, index)
    }

    render() {
        const {list, listOpen} = this.state
        const selectedItem = this.state.list.filter((item) => item.selected)[0]
        const headerTitle = (selectedItem && selectedItem.title) || this.state.headerTitle
        return (
            <div className="dropdown">
                <button className="dropdown-toggle" type="button" onClick={this.toggleList}>
                    {headerTitle}
                    <FontAwesomeIcon className="dropdown-toggle-icon" icon={listOpen ? faChevronUp : faChevronDown} />
                </button>
                {listOpen &&
                    <div className="dropdown-menu" ref={(node) => this.dropdownMenuRef = node}>
                        {list && list.map((listItem, index) => {
                            return (
                                <span
                                    key={index}
                                    className={`dropdown-item ${listItem.selected ? 'selected' : ''}`}
                                    onClick={() => this.onClickListItem(listItem, index)}
                                >
                                    {listItem.title}
                                </span>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default Dropdown