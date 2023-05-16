import PropTypes from 'prop-types'
import css from './FriendList.module.css'
import { FriendListItem } from 'components/FriendListItem/FriendListItem'

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(friend => (
                    <FriendListItem
                        key={friend.id}
                        name={friend.name}
                        avatar={friend.avatar}
                        isOnline={friend.isOnline}
                    />
            ) )}

        </ul>
    )
}

// FriendList.propTypes = {
//     friends: PropTypes.arrayOf(PropTypes.exact({
//         name: PropTypes.string.isRequired,
//         avatar: PropTypes.string.isRequired,
//         isOnline: PropTypes.bool.isRequired,
//   }))
// }