import { useSelector } from 'react-redux';

function App() {
  const products = useSelector((state) => state.allProducts);
  const { id, title } = products;
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      {id}
      {title}
    </>
  );
}

export default App;
