import React from 'react'
import { Badge } from 'antd'

const Location = ({ id, data }) => {
    var location = data.find((i) => i.id === id)

    return (
        location
            ? (
                <>
                    {
                        location.levels.normal
                            ? <div>
                                <Badge count={location.levels.normal}
                                    style={{
                                        backgroundColor: "#EEEEEE",
                                        color: "#999"
                                    }}
                                    title="Normal version, min and max biome's level"
                                ></Badge>
                            </div>
                            : false
                    }
                    {
                        location.levels.tempered
                            ? <div>
                                <Badge count={location.levels.tempered} style={{ backgroundColor: '#722ed1' }}
                                    title="Tempered version, min and max biome's level" />
                            </div>
                            : false
                    }
                </>
            )
            : 'X'
    )
}

export default Location
