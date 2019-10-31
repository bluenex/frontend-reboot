import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
  align-items: center;
`;

const StyledAvatar = styled.img`
  height: 80px;
  border-radius: 5px;
`;

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 5px;

  p {
    margin: 5px;
    font-weight: bold;
  }

  p:nth-child(2) {
    font-style: italic;
    color: rgba(200, 10, 10, 0.8);
  }
`;

const UserCard = ({ user }) => (
  <Card>
    <StyledAvatar src={user.avatar} alt=""/>
    <CardContentWrapper>
      <p>{`${user.first_name} ${user.last_name}`}</p>
      <p>{`e: ${user.email}`}</p>
    </CardContentWrapper>
  </Card>
);

const ResultCard = ({ postResult }) => {
  if (!postResult.createdAt) return (
    <Card>
      <p>
        👈🏽 Try sending name and job!
      </p>
    </Card>
  );

  return (
    <Card>
      <CardContentWrapper>
        <p>{`Name: ${postResult.name}`}</p>
        <p>{`Job: ${postResult.job}`}</p>
        <p>{`Created Time: ${postResult.createdAt}`}</p>
      </CardContentWrapper>
    </Card>
  )
}

const Fetch = () => {
  const apiBase = 'https://reqres.in/api';
  const apiMethods = {
    GET: `${apiBase}/users?page=2`,
    POST: `${apiBase}/api/users`,
  }

  const [users, setUsers] = useState({});
  const [postName, setPostName] = useState('');
  const [postJob, setPostJob] = useState('');
  const [postResult, setPostResult] = useState({});

  useEffect(() => {
    fetch(apiMethods.GET)
      .then(res => res.json())
      .then(resJson => setUsers(resJson));
  }, []);

  useEffect(() => console.log(postName), [postName]);

  const getPostBody = () => ({
    name: postName,
    job: postJob,
  })

  if (!users.data) return null;

  return (
    <>
      <Container>
        { users.data.map(user => <UserCard user={user} />) }
      </Container>
      <hr/>
      <Container>
        <Card>
          <label>
            Name:&nbsp;
            <input type="text" onChange={e => setPostName(e.target.value)} />
          </label>
          &nbsp;&nbsp;
          <label>
            Job:&nbsp;
            <input type="text" onChange={e => setPostJob(e.target.value)} />
          </label>
          &nbsp;&nbsp;
          <button
            onClick={() => fetch(apiMethods.POST, {
                method: 'POST',
                body: JSON.stringify(getPostBody()),
              })
                .then(res => res.json())
                .then(resJson => setPostResult(resJson))
            }
          >
            SUBMIT
          </button>
        </Card>
        <ResultCard
          postResult={{
            name: postName,
            job: postJob,
            ...postResult,
          }}
        />
      </Container>
    </>
  );
};

export default Fetch;