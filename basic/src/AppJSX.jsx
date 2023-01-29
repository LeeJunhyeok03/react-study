import './App.css';

function AppJSX() {
  const name = "엘리";
  const list = ['우유', '딸기', '바나나', '바나나', '바나나'];
  return (
    <>
      <h1 className='orange'>{`Hellow! ${name}`} Hello!</h1>
      <h2>Hello!</h2>
      <ul>
        {list.map((item) =>(
          <li>{item}</li>
        ))}
      </ul>
      <img
      style={{ width: '200px', height: '200px'}}
        src='https://images.unsplash.com/photo-1674796941974-9120fdf15205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60'
        alt='img'
      />
    </>
  );
}

export default AppJSX;
