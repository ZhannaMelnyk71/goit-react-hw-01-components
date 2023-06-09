import PropTypes from 'prop-types'
// import css from './TransictionHistoryItem.module.css'

export const TransictionHistoryItem = ({type, amount, currency }) => {
    return (
            <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
    )
}

TransictionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}