import { useState } from 'react';
import './Tooltip.css'

type TooltipPosition =
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'left-top'
    | 'left-center'
    | 'left-bottom'
    | 'right-top'
    | 'right-center'
    | 'right-bottom'

interface TooltipProps {
    children: React.ReactNode;
    text: string;
    position?: TooltipPosition;
}

function normalizePosition(position: TooltipPosition): string {
    switch (position) {
        case 'top': return 'top-center';
        case 'bottom': return 'bottom-center';
        case 'left': return 'left-center';
        case 'right': return 'right-center';
        default: return position;
    }
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'top' }) => {
    const [visible, setVisible] = useState(false)
    const normalizedPosition = normalizePosition(position)

    const showTooltip = () => setVisible(true)
    const hideTooltip = () => setVisible(false)

    return (
        <div
            className='Tooltip'
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            <div className={`tooltip-text ${normalizedPosition} ${visible ? 'visible' : ''}`}>
                {text}
            </div>
        </div>
    )
}

export default Tooltip
