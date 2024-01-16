import React, { useState, memo, useCallback } from 'react';
//Memorise the function
//this is used in case, when we are passing funcation in child componet
// so even though there is no change the child get render, dispite use of the memo
// fix is to useCallback
//https://www.youtube.com/watch?v=Fp4PlygdV5E&t=980s
interface ChildProps {
  somefun: () => void;
}

const Child: React.FC<ChildProps> = memo(function () {
  console.log('Child is called');
  return <div>Child</div>;
});
//why child gets called as we are not passing any value

export default function TestPage() {
  const [count, setcount] = useState(0);

  const submitHandle = () => {
    console.log('Count', count);
    setcount(count + 1);
  };

  const somefunc = (): void => {
    console.log('Count', count);
  };

  const memoizefunc = useCallback(somefunc, []);
  //excepts 2 aregumer and return new funcation

  return (
    <div>
      <p>Parent Count : {count}</p>
      <button onClick={submitHandle}> Click TestPage</button>
      {/* //part 1 before usecallsback. Child is called for 2 times */}
      {/* <Child somefun={somefunc} /> */}

      {/* //part 2 before usecallsback. Child is called for 2 times */}
      <Child somefun={memoizefunc} />
    </div>
  );
}

// NOte error in type scitp
// User
// fix error Type '{ somefun: () => void; }' is not assignable to type 'IntrinsicAttributes & object'.  Property 'somefun' does not exist on type 'IntrinsicAttributes & object'.

// Fix:
// interface ChildProps {
//   somefun: () => void
// }

// const Child: React.FC<ChildProps>
