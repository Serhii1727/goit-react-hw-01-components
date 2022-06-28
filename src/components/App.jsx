//import styled from 'styled-components'
import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../user-info-json/user.json';
import data from '../user-info-json/data.json';
import friends from '../user-info-json/friends.json';
import transactions from '../user-info-json/transactions.json'


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
      <Statistics
        title="Upload stats"
        stats={data} />
      <FriendList
        friendsList={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </div>

  );
};


