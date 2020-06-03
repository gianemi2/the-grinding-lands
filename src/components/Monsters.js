import React from 'react'
import Monster from './Monster'
import { Affix, Button, Row, Col } from 'antd'

const Monsters = () => {
    const { monsters } = window.globalConfig;
    return (
        <Row>
            {
                monsters.map(item => (
                    <Col xs={12} sm={6} style={{ alignItems: "center" }}>
                        <Monster
                            key={item.id}
                            data={item}
                            monstersList={monsters}
                        />
                    </Col>
                ))
            }
        </Row>
    )
}

export default Monsters
