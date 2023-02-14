import React, { useMemo, useState } from 'react'

export default function Showmore({readmore}) {
    const [showMore, setshowMore] = useState(false)

    const a = useMemo(() => {
        return readmore.slice(0, 30).concat('...');
    },[readmore])
    return (
        <div>
            <p onClick={() => { setshowMore(!showMore) }}>
                {showMore ? readmore : a}{ showMore?'Less':'More'}
            </p>
        </div>
    )
}
