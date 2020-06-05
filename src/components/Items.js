import React from 'react'

import { Typography } from 'antd'

const Items = ({ data }) => {
    const { normal, tempered } = data
    const Text = Typography
    return (
        <>
            <Text>{normal}</Text>
            <Text style={{ color: "#722ed1" }}>{tempered}</Text>
        </>
    )
}

export default Items
