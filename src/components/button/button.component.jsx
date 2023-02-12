import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',

}

const Button = ({children, ButtonType, ...otherprops }) => {
    return (
        <button className=
            {`button-container ${BUTTON_TYPE_CLASSES[ButtonType]}`} 
            {...otherprops}
        >
            {children}
        </button>
    )
}

export default Button;