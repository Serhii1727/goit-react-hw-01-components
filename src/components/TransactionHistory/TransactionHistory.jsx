import PropTypes from 'prop-types';
import { Table, TheadTable, BodyTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return <Table className='table'>
        <TheadTable className='thead'>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </TheadTable>

        <BodyTable className='table-tbody'>
            {items.map(({ id, type, amount, currency }) => {
                return (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                )

            })}
        </BodyTable>
    </Table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired

    }))
}