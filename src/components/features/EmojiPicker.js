import React, { useEffect, useRef } from 'react'
import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'

export default function EmojiPicker(props) {
    const ref = useRef()

    useEffect(() => {
        new Picker({ ...props, data, ref })
    })

    return (
        <div className="h-full w-full overflow-y-auto overflow-x-auto">
            <div ref={ref} />
        </div>
    )
}
