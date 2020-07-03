import React, { useState, useEffect } from 'react'
import translateMonsters from '../hooks/translateMonsters'
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

const defaultLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'
const dbMonsters = translateMonsters(defaultLang)
const backupMonsters = setupTableDatas(dbMonsters)

const filterForName = (m, text) => {
    console.log(m);
    return m._name.toLowerCase().indexOf(text) !== -1
}
const filterForItems = (m, text) => {
    if (m.items.normal) {
        if (m.items.normal.toLowerCase().indexOf(text) !== -1) {
            return m
        }
    }
    if (m.items.tempered) {
        if (m.items.tempered.toLowerCase().indexOf(text) !== -1) {
            return m
        }
    }
}

const filterTableDatas = (monsters, text, whatToFilter) => {
    text = text.toLowerCase()
    if (monsters && monsters.length > 0) {
        switch (whatToFilter) {
            case 'all':
                return monsters.filter(m => filterForName(m, text) || filterForItems(m, text))
            case '_name':
                return monsters.filter(m => filterForName(m, text))
            case 'items':
                return monsters.filter(m => filterForItems(m, text))
            default:
                return monsters
        }
    }
}

const Monsters = () => {

    console.log(backupMonsters);

    const [monsters, setMonsters] = useState(backupMonsters)
    const [text, setText] = useState('')
    const [toFilter, setToFilter] = useState('_name')

    const updateLang = (lang) => {
        localStorage.setItem('lang', lang)
        window.location.reload();
    }

    const selectBefore = (
        <Select dropdownMatchSelectWidth={false} defaultValue="_name" className="select-before" onChange={val => setToFilter(val)}>
            <Option value="all">All</Option>
            <Option value="_name">Name</Option>
            <Option value="items">Items</Option>
        </Select>
    );

    const selectAfter = (
        <Select dropdownMatchSelectWidth={false} defaultValue={defaultLang} className="select-before" onChange={val => updateLang(val)}>
            <Option value="en">English</Option>
            <Option value="fr">Français</Option>
        </Select>
    )

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
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
            const filteredMonsters = filterTableDatas(backupMonsters, text, toFilter)
            setMonsters(filteredMonsters)
        } else {
            setMonsters(backupMonsters)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, toFilter])

    return (
        <>
            <Input placeholder="Type to start search. Use the select on the left for change filters." addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="" value={text} onChange={e => { setText(e.target.value) }} />
            <Table
                style={{ marginTop: 15 }}
                dataSource={monsters}
                columns={columns}
            ></Table>
        </>
    )
}

export default Monsters