//import styled from 'styled-components'
import { FriendList } from './FriendList/FriendList';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user-info-json/user.json';
import friends from '../user-info-json/friends';
import transactions from '../user-info-json/transactions.json'

console.log(friends);
console.log(transactions);

export default function App() {

  return (
    <div>
      <Profile
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userAvatar={user.avatar}
        userStats={user.stats}
      />
      <Statistics title="Upload stats" />

      <FriendList />
      <FriendListItem />
      <TransactionHistory />
    </div>

  );
};


