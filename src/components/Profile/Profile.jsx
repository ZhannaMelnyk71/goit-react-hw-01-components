import css from './Profile.module.css'

export const Profile = ({ userName, tag, location, avatar, followersQuantity, viewsQuantity, likesQuantity }) => {
    // const { userName, tag, location, avatar, followersQuantity, viewsQuantity, likesQuantity } = props;
    return (
        <div className={css.profile}>
        <div className={css.description}>
            <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar}
            />
                <p className={css.name}>{userName}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
        </div>

            <ul className={css.stats}>
            <li>
            <span className={css.label}>Followers </span>
            <span className={css.quantity}>{followersQuantity}</span>
            </li>
            <li>
            <span className={css.label}>Views </span>
            <span className={css.quantity}>{viewsQuantity}</span>
            </li>
            <li>
            <span className={css.label}>Likes </span>
            <span className={css.quantity}>{likesQuantity}</span>
            </li>
        </ul>
    </div>
    );
}