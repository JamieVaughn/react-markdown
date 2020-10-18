import React, { useState, useEffect } from 'react'
import Output from '../output/output'
import './preview.css'
import marked from 'marked'

function Preview () {
    const [text, setText] = useState('')
    const [markdown, setMarkdown] = useState({__html: ''})

    const handleChange = (e) => {
        setText(e.target.value)
        setMarkdown(prev => {
            // console.log(text, prev)
           return {__html: marked(text)}
        })

    }
    useEffect(() => {
        setMarkdown({__html: marked(text)})
    }, [text])

    return (
        <div className='container'> 
        {console.log(text)}
            <h1>Previewer</h1> 
            <h3>Type some markdown in the left box.</h3>
            <div className='previewer'>
                <textarea 
                value={text}
                onChange={e => handleChange(e)}
                className='input' />
                <Output md={markdown} />
            </div>
        </div>
    )
}

export default Preview