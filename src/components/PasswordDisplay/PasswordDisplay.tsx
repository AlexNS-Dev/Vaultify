import Tooltip from '../Tooltip/Tooltip';
import './PasswordDisplay.css'
import { TbCopy, TbReload } from 'react-icons/tb'

interface PasswordDisplayProps {
    length: number;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ length }) => {

    const mockPassword = `zWK?w{k02n%{M3-z|AlLX"PfQ,V=)zzz\`0>HY7GWGe\`qd%;iTQ`

    return (
        <div className="PasswordDisplay card">
            <span className='password-text'>{mockPassword.substring(0, length) || mockPassword.substring(0, mockPassword.length - 1)}</span>
            <div className="button-section">
                <Tooltip text='Copy'>
                    <TbCopy className='btn-copy' />
                </Tooltip>
                <Tooltip text='Reset'>
                    <TbReload className='btn-reset' />
                </Tooltip>
            </div>
        </div>
    )
}

export default PasswordDisplay
