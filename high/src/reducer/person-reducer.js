export default function personReducer(person, action) {
    switch(action.type) {
        case 'updated': {
            const { prev, current } = action;
            return {...person, 
                mentors: person.mentors.map((menter) => {
                if(menter.name === prev){
                  return {...menter, name: current};
                }
                return menter
                }),
            };
        }
        case 'added': {
            const { name, title } = action;
            return {...person, mentors: [...person.mentors, {name, title}], }
        }
        case 'deleted': {
            const { name } = action;
            return {...person, mentors: person.mentors.filter((m) => m.name !== name), }
        }
        default: {
            throw Error(`알수없는 에러입니다: ${action.type}`);
        }
    }
}