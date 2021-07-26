import { positions, transitions } from "react-alert";


export const alertOptions = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 3000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

export const AlertMessageTemplate = ({ children }) => (
    <div style={{ textTransform: 'initial' }}>{ children }</div>
)