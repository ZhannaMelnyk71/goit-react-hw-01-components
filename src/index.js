import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import user from './user.json'

// ReactDOM.render(<App/>, document.getElementById('root'));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const user = {
//   username: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308
//   }
// }

// function Profile(props) {
//   const { userName, tag, location, avatar, followersQuantity, viewsQuantity, likesQuantity } = props;
//   return (
//     <div class="profile">
//       <div class="description">
//         <img
//           src={avatar}
//           alt="User avatar"
//           class="avatar"
//         />
//         <p class="name">{userName}</p>
//         <p class="tag">{tag}</p>
//         <p class="location">{location}</p>
//       </div>

//       <ul class="stats">
//         <li>
//           <span class="label">Followers</span>
//           <span class="quantity">{followersQuantity}</span>
//         </li>
//         <li>
//           <span class="label">Views</span>
//           <span class="quantity">{viewsQuantity}</span>
//         </li>
//         <li>
//           <span class="label">Likes</span>
//           <span class="quantity">{likesQuantity}</span>
//         </li>
//       </ul>
//   </div>
//   );
// }

// const user = (
//   <div class="profile">
//     <div class="description">
//       <img
//         src={userData.avatar}
//         alt="User avatar"
//         class="avatar"
//       />
//       <p class="name">{userData.username}</p>
//       <p class="tag">{userData.tag}</p>
//       <p class="location">{userData.location}</p>
//     </div>

//     <ul class="stats">
//       <li>
//         <span class="label">Followers</span>
//         <span class="quantity">{userData.stats.followers}</span>
//       </li>
//       <li>
//         <span class="label">Views</span>
//         <span class="quantity">{userData.stats.views}</span>
//       </li>
//       <li>
//         <span class="label">Likes</span>
//         <span class="quantity">{userData.stats.likes}</span>
//       </li>
//     </ul>
//   </div>
// );



// <Profile
//   userName={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   followersQuantity={user.stats.followers}
//   viewsQuantity={user.stats.views}
//   likesQuantity={user.stats.likes}
// />