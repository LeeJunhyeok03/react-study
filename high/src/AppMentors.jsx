import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  
  const handleUpdate = () => {
    const prev_name = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson(prev => ({...prev, 
      mentors: person.mentors.map((menter) => {
      if(menter.name === prev_name){
        return {...menter, name: current};
      }
      return menter
    }),
  }))
  }

  const handleAdd = () => {
    const name = prompt(`이름을 무엇으로 할까요?`);
    const title = prompt(`멘토의 직합은?`);
    setPerson(prev => ({...prev, mentors: [...prev.mentors, {name, title}], }));
  } 

  const handleDelete = () => { 
    const name = prompt(`누구를 삭제 하고 싶은가요?`);
    setPerson(prev => ({...prev, mentors: person.mentors.filter(m=> m.name !== name), }));
  }

  console.log(person);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토의 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}


const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
}