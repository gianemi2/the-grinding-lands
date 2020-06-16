import React from 'react'

import { Typography } from 'antd'

const Items = ({ data }) => {
    const { normal, tempered } = data
    const Text = Typography
    return (
        <>
            {normal ? <Text>{normal}</Text> : false}
            {tempered ? <Text style={{ color: "#722ed1" }}>{tempered}</Text> : false}
        </>
    )
}

export default Items
