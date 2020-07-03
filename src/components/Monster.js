import React, { useState } from 'react'


import { Button, Dropdown, Menu } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons';


const Monster = ({ data, monstersList }) => {
    const [relations, setRelations] = useState([]);

    const searchByID = (id, haystack) => {
        return id === haystack.id
    }

    const handleUserClick = () => {
        if (data.relations.length > 0) {
            const relationsDetails = data.relations.map((target) => {
                return monstersList.filter((i) => searchByID(target, i))[0]
            })
            setRelations(relationsDetails);
        } else {
            setRelations([{ name: "No lures dropper found." }])
        }
    }


    const menu = (
        <Menu>
            <Menu.ItemGroup title="Lures dropped by:">
                {
                    relations.map(relation => (
                        <Menu.Item key={`${data.id}-${relation.name}`}>
                            {relation.name}
                        </Menu.Item>
                    ))
                }
            </Menu.ItemGroup>
        </Menu>

    )

    return (
        data.relations
            ? <Dropdown onClick={handleUserClick} overlay={menu} trigger={['click']}>
                <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {data.name}<InfoCircleOutlined style={{ marginLeft: 5 }} />
                </Button>
            </Dropdown>
            : <Button type="text">{data.name}</Button>
    )
}

export default Monster
