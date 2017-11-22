import React from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'
import { emailChanged, passwordChanged } from '../actions'


class LoginForm extends React.Component {
    onEmailChanged(text) {
        this.props.emailChanged(text)
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text)
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@domain.com"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button
                        onPress={() => null}
                    >
                        Log In
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password,
})

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm)
