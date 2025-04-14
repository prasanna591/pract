function ProfileCard({ name, bio, profilepic }) {
  return (
    <>
      <h3>name: {name}</h3>
      <h3>age: {bio}</h3>
      <h3>
        profile:
        <img src={profilepic} />
      </h3>
    </>
  );
}

export default ProfileCard;
