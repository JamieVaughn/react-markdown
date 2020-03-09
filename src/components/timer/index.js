import React, { useState, useEffect, useRef } from 'react'

function Counter () {
    const [count, setCount] = useState(0)
    const [delay, setDelay] = useState(1000)

    // useEffect(() => {
    //     console.log(count)
    //     let timer = setInterval(() => setCount(prev => prev+1), 1000)
    //     return () => timer.clearInterval()
    // }, [])

    UseInterval(() => {
        setCount(count + 1)
    }, delay)

    return (
        <div>
            <h1>Counter <input value={delay} onChange={(e) => setDelay(e.target.value)} /></h1>
            <output>{count}</output>
        </div>
    )
}   

function UseInterval(callback, delay) {
    const savedCallback = useRef()

    // remembers the latest callback
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // creating the interval
    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if(delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

export default Counter