import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import ReportTable from './components/ReportTable';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Col, Grid, Row} from 'react-flexbox-grid';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
    render() {
        return (
            <MultiThemeProvider>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to React</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Grid fluid>
                        <Row>
                            <Col xs={6}>
                                <Hello name="TypeScript" enthusiasmLevel={10}/>
                            </Col>
                            <Col xs={6}>
                                <Counter/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} xsOffset={3}>
                                <ReportTable/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </MultiThemeProvider>
        );
    }
}

export default App;
