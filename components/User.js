const User = ({ user }) => {
  return (
    <article className='flex gap-2'>
      <div>
        <img
          className=' rounded-md'
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
        />
      </div>
      <div>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <p>Email: {user.email}</p>
        <p>User ID: {user.id}</p>
      </div>
    </article>
  )
}

export default User
