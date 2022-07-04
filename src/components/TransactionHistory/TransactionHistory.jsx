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
            {items.map(el => {
                return (
                    <tr key={el.id}>
                        <td>{el.type}</td>
                        <td>{el.amount}</td>
                        <td>{el.currency}</td>
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