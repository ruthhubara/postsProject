import React from 'react'

function setText(Component) {
    return class setText extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                text: 'AAA',
                mobile: '000000000'
            }
        }
        changeText = (text) => {
            debugger;
            this.setState({ text: this.changeTextToUpperCase(text) })
        }

        changeMobile = (mobile) => {
            this.setState({ mobile: this.changeMobileToUpperCase(mobile) })
        }

        changeTextToUpperCase(text) {
            return text.toUpperCase()
        }

        changeMobileToUpperCase(mobile) {
            return mobile.toUpperCase()
        }

        render() {
            return (
                <Component text={this.state.text} mobile={this.state.mobile} changeMobile={this.changeMobile} changeText={this.changeText}></Component>
            )
        }
    }
}

export const TextHOC = setText(class UserForm extends React.Component {
    render() {
        const { text, changeText } = this.props

        return (
            <>
                <p>{text}</p>
                <input type='text' value={text} onChange={(e) => changeText(e.target.value)}></input>
            </>
        )
    }
})

export const MobileHOC = setText(class MobileForm extends React.Component {
    render() {
        return (
            <>
                <input type='text' value={this.props.text} onChange={(e) => this.props.changeText(e.target.value)}></input>
                <input type='text' value={this.props.mobile} onChange={(e) => this.props.changeMobile(e.target.value)}></input>
            </>
        )
    }
})