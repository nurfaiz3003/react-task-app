import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <>
            <button style={{ backgroundColor: props.color }} className='btn'>{props.text}</button>
        </>
    )
}

Button.defaultProps = {
    color: 'blue'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}

export default Button;