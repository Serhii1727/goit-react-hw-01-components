import { FriendList } from './FriendList/FriendList';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user.json';
console.log(user);

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <FriendListItem />
      <TransactionHistory />

    </div>

  );
};


