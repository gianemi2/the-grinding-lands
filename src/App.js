import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Monsters from './components/Monsters'

import { PageHeader, Typography, Layout } from 'antd'

function App() {

    const { Header, Content, Footer } = Layout
    const { Title } = Typography

    return (
        <Layout className="App" style={{ position: "relative" }}>
            <PageHeader
                className="site-page-header"
                onBack={false}
                title="Who drops that lure?!"
                subTitle="You'll know!"
                style={{ backgroundColor: "#fafafa" }}
            />
            <Content style={{ padding: 40, marginBottom: 40, minHeight: "calc(100vh - 104px)" }}>
                <Monsters />
            </Content>
            <Footer style={{ borderTop: "1px solid rgba(0, 0, 0, 0.2)", position: "absolute", bottom: 0, left: 0, right: 0 }}>Who drops that lure is completely free and open source. Feel free to <a href="">ping me on Discord</a> or <a href="">open an issue on Github</a> if you found some wrong info.</Footer>
        </Layout>
    );
}

export default App;
