import React, { useState, useEffect } from 'react'
import Monster from './Monster'
import Location from './Location'
import Items from './Items'
import { Table, Input, Select } from 'antd'
const { Option } = Select


const setupTableDatas = (monsters) => {
    return monsters.map(monster => {
        return {
            key: monster.id,
            name: monster,
            items: monster.items,
            forest: monster.locations,
            wildspire: monster.locations,
            coral: monster.locations,
            rotted: monster.locations,
            volcanic: monster.locations,
            tundra: monster.locations,
            _name: monster.name
        }
    })
}

const filterTableDatas = (monsters, text, whatToFilter) => {
    text = text.toLowerCase()
    if (monsters && monsters.length > 0) {
        switch (whatToFilter) {
            case '_name':
                return monsters.filter(m => {
                    return m._name.toLowerCase().indexOf(text) != -1
                })
            case 'items':
                return monsters.filter(m => {
                    if (m.items.normal) {
                        if (m.items.normal.toLowerCase().indexOf(text) != -1) {
                            return m
                        }
                    }
                    if (m.items.tempered) {
                        if (m.items.tempered.toLowerCase().indexOf(text) != -1) {
                            return m
                        }
                    }
                })
            default:
                return monsters
        }
    }
}

const Monsters = () => {
    const dbMonsters = window.globalConfig.monsters
    const backupMonsters = setupTableDatas(dbMonsters)

    const [monsters, setMonsters] = useState(backupMonsters)
    const [text, setText] = useState('')
    const [toFilter, setToFilter] = useState('_name')

    const selectBefore = (
        <Select defaultValue="_name" className="select-before" onChange={val => setToFilter(val)}>
            <Option value="_name">Name</Option>
            <Option value="items">Items</Option>
        </Select>
    );

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (monster) => <Monster data={monster} monstersList={dbMonsters} />
        },
        {
            title: 'Items',
            dataIndex: 'items',
            key: 'items',
            render: (items) => <Items data={items} />
        },
        {
            title: 'Forest',
            dataIndex: 'forest',
            key: 'forest',
            render: (locations) => <Location id={0} data={locations} />
        },
        {
            title: 'Wildspire',
            dataIndex: 'wildspire',
            key: 'wildspire',
            render: (locations) => <Location id={1} data={locations} />
        },
        {
            title: 'Coral',
            dataIndex: 'coral',
            key: 'coral',
            render: (locations) => <Location id={2} data={locations} />
        },
        {
            title: 'Rotted',
            dataIndex: 'rotted',
            key: 'rotted',
            render: (locations) => <Location id={3} data={locations} />
        },
        {
            title: 'Volcanic',
            dataIndex: 'volcanic',
            key: 'volcanic',
            render: (locations) => <Location id={4} data={locations} />
        },
        {
            title: 'Tundra',
            dataIndex: 'tundra',
            key: 'tundra',
            render: (locations) => <Location id={5} data={locations} />
        }
    ]

    useEffect(() => {
        if (text.length > 0) {
            const filteredMonsters = filterTableDatas(monsters, text, toFilter)
            setMonsters(filteredMonsters)
        } else {
            if (monsters) {
                if (backupMonsters.length != monsters.length) {
                    setMonsters(backupMonsters)
                }
            } else {
                setMonsters(backupMonsters)
            }
        }
    }, [text, toFilter])

    return (
        <>
            <Input placeholder="Type to start search. Use the select on the left for change filters." addonBefore={selectBefore} defaultValue="" value={text} onChange={e => { setText(e.target.value) }} />
            <Table style={{ marginTop: 15 }} dataSource={monsters} columns={columns}></Table>
        </>
    )
}

export default Monsters
