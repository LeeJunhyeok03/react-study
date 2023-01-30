import './App.css';
import Profile from './components/Profile'
import Avatar from './components/Avatar'

function AppProfile() {

  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨");
  };

  return (
    <>
    <button onClick={handleClick}>버튼</button>  
    <Avatar image="https://images.unsplash.com/photo-1674925271211-cef66b0db2f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" type="new" />
    <Profile 
        image="https://images.unsplash.com/photo-1674925271211-cef66b0db2f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
        name="NameName1"
        type="new"
        title="프론트 엔드 개발자"
      />
    <Profile 
        image="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
        name="NameName2"
        title="노트북"
      />
    <Profile 
        image="https://images.unsplash.com/photo-1674948936181-2deb7eb82c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        name="NameName3"
        title="그림"
      />
    </>
  );
}

export default AppProfile;
