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
    className?: string;
    style?: React.CSSProperties;
}

const validPositions: TooltipPosition[] = [
  'top', 'bottom', 'left', 'right',
  'top-left', 'top-center', 'top-right',
  'bottom-left', 'bottom-center', 'bottom-right',
  'left-top', 'left-center', 'left-bottom',
  'right-top', 'right-center', 'right-bottom'
]

function isValidPosition(pos: string): pos is TooltipPosition {
  return validPositions.includes(pos as TooltipPosition)
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

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'top', className = '', style }) => {
    const [visible, setVisible] = useState(false)

    if (!isValidPosition(position)) {
        throw new Error(`Invalid tooltip position: "${position}". Valid values are: ${validPositions.join(', ')}`)
    }

    const normalizedPosition = normalizePosition(position)

    const showTooltip = () => setVisible(true)
    const hideTooltip = () => setVisible(false)

    return (
        <div
            className={`Tooltip ${className ?? ''}`}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            <div
                className={`tooltip-text ${normalizedPosition} ${visible ? 'visible' : ''}`}
                style={style}
            >
                {text}
            </div>
        </div>
    )
}

export default Tooltip
