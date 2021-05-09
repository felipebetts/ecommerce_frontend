import MuiButton from '@material-ui/core/Button'

const Button = ({ onClick, children, variant = 'contained' }) => {
    return (
        <MuiButton
            onClick={onClick}
            variant={variant}
        >
            { children }
        </MuiButton>
    )
}

export default Button