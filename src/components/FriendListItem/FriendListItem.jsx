import PropTypes from 'prop-types'
import clsx from "clsx";
import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    // console.log(isOnline)
    return (
        <li className={css.item}>
            <span className={clsx(css.status, {[css.isOnline]: isOnline,})}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}