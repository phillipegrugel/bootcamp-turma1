import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import api from '../../services/api';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            titulo: 'Login teste state'
        }

        this.handleClick = this.handleClick(this);
    }

    componentDidMount() {
        // chamada ao backend usando axios (http)
    }

    async handleClick() {
        let response = await api.post('/autenticar', {
            username: ''
        })
    }

    render() {
        let fontSize = this.props.fontSize;
        let titulo = this.state.titulo;
        return (
            <div style={{
                    height: '100vh',
                    background: '#FAFAFA',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                <div style={{
                    border: '1px solid #e6e6e6',
                    width: 350,
                    borderRadius: 1,
                    background: '#FFF',
                    padding: 30
                }}>
                    <h4>{titulo}</h4>
                    <Form>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                        <Input type="email" style={{marginBottom: 10}} name="email" id="exampleEmail" placeholder="something@idk.cool" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input type="password" style={{marginBottom: 10}} name="password" id="examplePassword" placeholder="don't tell!" />
                    </FormGroup>
                    <Button color="primary" onClick={this.handleClick} style={{
                        width: '100%'
                    }}>Entrar</Button>
                    </Form>
                </div>
            </div>
        );
    }
}