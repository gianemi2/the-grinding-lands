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

const filterTableDatas = (monsters, text) => {
    text = text.toLowerCase()
    if (monsters && monsters.length > 0) {
        return monsters.filter(m => filterForName(m, text) || filterForItems(m, text))
    }
}

const Monsters = () => {

    console.log(backupMonsters);

    const [monsters, setMonsters] = useState(backupMonsters)
    const [text, setText] = useState('')

    const updateLang = (lang) => {
        localStorage.setItem('lang', lang)
        window.location.reload();
    }

    const selectAfter = (
        <Select dropdownMatchSelectWidth={false} defaultValue={defaultLang} className="select-before" onChange={val => updateLang(val)}>
            <Option value="en">English <span role="img" aria-label="english flag">🇬🇧</span></Option>
            <Option value="fr">Français <span role="img" aria-label="french flag">🇫🇷</span></Option>
            <Option value="es">Español <span role="img" aria-label="spanish flag">🇪🇸</span></Option>
            <Option value="it">Italiano <span role="img" aria-label="italian flag">🇮🇹</span></Option>
            <Option value="de">Deutsche <span role="img" aria-label="deutsche flag">🇩🇪</span></Option>
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
            const filteredMonsters = filterTableDatas(backupMonsters, text)
            setMonsters(filteredMonsters)
        } else {
            setMonsters(backupMonsters)
        }
    }, [text])

    return (
        <>
            <Input placeholder="Type to start search..." addonAfter={selectAfter} defaultValue="" value={text} onChange={e => { setText(e.target.value) }} />
            <Table
                style={{ marginTop: 15 }}
                dataSource={monsters}
                columns={columns}
            ></Table>
        </>
    )
}

export default Monsters