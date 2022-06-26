import { FriendList } from './FriendList/FriendList';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user-info-json/user.json';
import data from '../user-info-json/data.json';
import friends from '../user-info-json/friends';
import transactions from '../user-info-json/transactions.json'

console.log(user);
console.log(data);
console.log(friends);
console.log(transactions);

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
      <FriendList />
      <FriendListItem />
      <TransactionHistory />
    </div>

  );
};


