import PropTypes from 'prop-types'
import css from 'components/TransactionHistory/TransactionHistory.module.css'
import { TransictionHistoryItem } from 'components/TransictionHistoryItem/TransictionHistoryItem'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>{items.map(item => (
                    <TransictionHistoryItem
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
            ) )}
            </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}