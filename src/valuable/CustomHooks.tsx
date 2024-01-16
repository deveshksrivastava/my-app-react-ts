import React, { useState, useEffect } from 'react';

const useCountNumber = (num: number, id: string) => {
  const [count, setCount] = useState(num);
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => {
        console.log('calling' + json);
        setData(json);
      });
  }, [id]);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count + 1);
  };

  return { incrementHandler, decrementHandler, count, data };
};

const CustomHooks = () => {
  const [id, setId] = useState('');
  const { incrementHandler, decrementHandler, count, data } = useCountNumber(
    0,
    id,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  console.log('data1', data);
  return (
    <div>
      <h1>Custom Componet</h1>
      <h3>My count is : {count}</h3>
      <input value={id} onChange={handleChange} />
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      {JSON.stringify(data)}
    </div>
  );
};

export default CustomHooks;
