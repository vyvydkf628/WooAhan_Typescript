import React from 'react';

const SessionItem = ({ title }) => (
  <li>{title}</li>
)
const App = (props) => {
  // 아키텍쳐는 작은 코드에서 시작된다.
  const [displayOrder, toggleDisplayOrder] = React.useState('ASC');


  const { sessionList } = props.store;
  const orderedSessionList = sessionList.map((session, i) => ({
    ...session,
    order: i,
  }))

  const onToggleDisplayOrder = () => {
    toggleDisplayOrder(displayOrder === 'ASC' ? 'DESC' : 'ASC');
  }

  return (
    <div>
      <header>
        <h1>React and TypeScript</h1>
      </header>
      <ul>
        {/* 이런 식의 방식은 리더빌리티가 떨어짐 */}
        {/* {
          sessionList.map(session => (
          <li>{session.title}</li>
          ))
        } */}
        {orderedSessionList.map((session) => <SessionItem title={session.title} />)}
      </ul>
    </div>
  )
}

export default App;