import styled from "styled-components";

const Button = styled.button`
  background: blue;
  border-radius: 3px;
  border: none;
  color: white;
`;

const Users = () => {
  return (
    <div className="nav">
      <h1>Users</h1>
      <p>Here are a list of users</p>
      <div className="userCard">
        <h3>Name</h3>
        <p>I like bagels</p>
      </div>

      <Button>If I were green I would die</Button>
    </div>
  );
};

export default Users;
