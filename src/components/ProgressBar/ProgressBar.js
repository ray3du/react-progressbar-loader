import React, { useState } from 'react'
import './ProgressBarStyle.css'

export const ProgressBar = ({width, height, borderRadius, borderWidth, borderColor, borderTopColor, borderTopWidth}) => {

    const [state] = useState(
        { 
            width: width === "" || width === undefined ? "48px": width,
            height: height === "" || height === undefined ? "48px": height,
            borderRadius: borderRadius === "" || borderRadius === undefined ? "50%": borderRadius, 
            borderWidth: borderWidth === "" || borderWidth === undefined ? "8px": borderWidth, 
            borderColor: borderColor === "" || borderColor === undefined ? "#F3F3F3": borderColor, 
            borderTopWidth: borderTopWidth === "" || borderTopWidth === undefined ? "8px": borderTopWidth, 
            borderTopColor: borderTopColor === "" || borderTopColor === undefined ? "aqua": borderTopColor, 
        } 
    )

    return(
        <div className="loader"
            style={{
                border: `${state.borderWidth} solid ${state.borderColor}`,
                borderTop: `${state.borderTopWidth} solid ${state.borderTopColor}`,
                borderRadius: state.borderRadius,
                width: state.width,
                height: state.height,
            }}
        >      
        </div>
    )
}