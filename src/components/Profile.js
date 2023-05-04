export default function Profile(props) {
    const { userName, tag, location, avatar, followersQuantity, viewsQuantity, likesQuantity } = props;
    return (
        <div class="profile">
        <div class="description">
            <img
            src={avatar}
            alt="User avatar"
            class="avatar"
            />
            <p class="name">{userName}</p>
            <p class="tag">{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul class="stats">
            <li>
            <span class="label">Followers</span>
            <span class="quantity">{followersQuantity}</span>
            </li>
            <li>
            <span class="label">Views</span>
            <span class="quantity">{viewsQuantity}</span>
            </li>
            <li>
            <span class="label">Likes</span>
            <span class="quantity">{likesQuantity}</span>
            </li>
        </ul>
    </div>
    );
}