import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Monsters from './components/Monsters'

import { Typography, Layout } from 'antd'

function App() {

    const { Header, Content, Footer } = Layout
    const { Title } = Typography

    return (
        <Layout className="App">
            <Header style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
            ><Title style={{ color: "#fff", alignItems: "center", marginBottom: 0 }}>Who Drops that Lure?!</Title></Header>
            <Content>
                <Monsters />
            </Content>
            <Footer style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>Who drops that lure is completely free and open source. Feel free to ping me on Discord or open an issue on Github if you're finding some wrong info.</Footer>
        </Layout>
    );
}

export default App;
