import styled from "styled-components";

const Button = styled.button`
  background: blue;
  border-radius: 3px;
  border: none;
  color: white;
`;

const ProfilePic = styled.img`
  width: 300px;
`;

function Users() {
  return (
    <div className="nav">
      <h1>Users</h1>
      <p>Here are a list of users</p>
      <div className="userCard">
        <h3>Name</h3>
        <ProfilePic
          src={"profile-pic-default.png"}
          alt={"default profile pic"}
        />
        <p>Dr. Bob Hanki Wanker</p>
        <p>so you trust me yet?</p>
      </div>

      <Button>If I were green I would die</Button>
    </div>
  );
}

export default Users;
