import React, { useState } from 'react'
import MonsterInfo from './MonsterInfo'

import { Avatar, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons';


const Monster = ({ data, monstersList }) => {
    const [relations, setRelations] = useState([]);

    const searchByID = (id, haystack) => {
        return id == haystack.id
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
            <Menu.ItemGroup title="Lures dropper">
                {
                    relations.map(relation => (
                        <Menu.Item key="0">
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

                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {data.name} <DownOutlined />
                </a>
            </Dropdown>
            : false
    )
}

export default Monster
