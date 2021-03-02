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
      {/* remove li */}
      {/* fill out simple profile list */}
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
        <li>User 4</li>
        <li>User 5</li>
      </ul>
      <Button>If I were green I would die</Button>
    </div>
  );
};

export default Users;
