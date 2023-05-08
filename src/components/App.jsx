import { Profile } from 'components/Profile/Profile'
import user from 'user.json'
import data from 'data.json'
import { Statistics } from './Statistics/Statistics';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followersQuantity={user.stats.followers}
        viewsQuantity={user.stats.views}
        likesQuantity={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
