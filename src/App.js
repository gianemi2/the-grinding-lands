import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Monsters from './components/Monsters'

import { PageHeader, Typography, Layout, Descriptions } from 'antd'

function App() {

    const { Header, Content, Footer } = Layout
    const { Title } = Typography

    return (
        <Layout className="App" style={{ position: "relative" }}>
            <PageHeader
                className="site-page-header"
                onBack={false}
                title="The Grinding Lands"
                style={{ backgroundColor: "#fafafa" }}
            >
                <Descriptions size="small" column={1}>
                    <Descriptions.Item>
                        Developed with ❤️ from Livorno
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
            <Content style={{ padding: 40, marginBottom: 40, minHeight: "calc(100vh - 104px)" }}>
                <Monsters />
            </Content>
            <Footer style={{ borderTop: "1px solid rgba(0, 0, 0, 0.2)", position: "absolute", bottom: 0, left: 0, right: 0 }}>thegrindinglands is completely free and open source. If you found some wrong info feel free to <a href="https://www.reddit.com/r/MonsterHunterMeta/comments/gvvnc7/icerborne_a_little_web_app_for_find_out_who_drops" target="_blank">post a comment on reddit</a> or <a href="https://github.com/gianemi2/who-drop-that-lure/issues/new" target="_blank">open an issue on Github</a> </Footer>
        </Layout>
    );
}

export default App;
