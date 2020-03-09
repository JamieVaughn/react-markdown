import React, { useEffect } from 'react'

function Output (props) {
    console.log(props.md)
    useEffect(() => {
        // console.log(props.md)
    }, [props.md])

    return (
        <output dangerouslySetInnerHTML={props.md}/> 
    )
}

export default Output;