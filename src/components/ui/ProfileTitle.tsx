import React from "react"

export const ProfileTitle = (props:any) => {

    const {
        title
    } = props

    return <div className="w-full text-left text-[#000000] text-lg font-bold mb-3">
        { title }
    </div>
}