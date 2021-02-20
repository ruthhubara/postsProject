import React from 'react'

function setName(Component) {
    return class setText extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                name: '',
            }
        }
        changeName = (name) => {
            debugger;
            this.setState({ name: this.changeTextToUpperCase(name) })
        }

        changeTextToUpperCase(name) {
            return name.toUpperCase()
        }

        render() {
            return (
                <Component name={this.state.name} changeName={this.changeName}></Component>
            )
        }
    }
}

export const User = setName(class UserForm extends React.Component {
    render() {
        const { name, changeName } = this.props

        return (
            <>
                <p>usre: {name}</p>
                <input type='text' placeholder = 'userName' value={name} onChange={(e) => changeName(e.target.value)}></input>
            </>
        )
    }
})

export const Company = setName(class CompanyForm extends React.Component {
    render() {
        return (
            <>
                <p>company: {this.props.name}</p>
                <input type='text' placeholder = 'companyName' value={this.props.name} onChange={(e) => this.props.changeName(e.target.value)}></input>
            </>
        )
    }
})