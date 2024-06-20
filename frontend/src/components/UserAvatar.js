import React from 'react';

function UserAvatar({ user }) {
  return (
    <div className="user-avatar w-8 h-8 rounded-full overflow-hidden bg-gray-700 mr-2 ml-2">
      <img src={user.avatar} alt={user.username + "'s avatar"} className="w-full h-full object-cover" />
    </div>
  );
}

export default UserAvatar;