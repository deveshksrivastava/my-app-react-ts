import React from 'react';

// How to remember
// 1. fucntion component send render and return render()
// 2. Pass as redner = (()=> <DisplayCoponet />)

type CarProps = {
  render: () => React.ReactNode;
};

// Whsy we use FC ?????
const Cat: React.FC<CarProps> = ({ render }) => {
  return <div>{render()}</div>;
};

const Meow = () => {
  return <div>Meow!</div>;
};

const RenderProps = () => {
  return (
    <div>
      <h2>Render Props</h2>
      <Cat render={() => <Meow />} />
    </div>
  );
};

export default RenderProps;

// **********************************************
// COmplex with passing value

type CarPropsComplex = {
  render: (name: string, city: string) => React.ReactNode;
  name: string;
  city: string;
};

//reusable component
const CatComplex: React.FC<CarPropsComplex> = ({ render, name, city }) => {
  return <div>{render(name, city)}</div>;
};

const MeowComplex = (props: { name: string; city: string }) => {
  return (
    <div>
      Meow! My name is {props.name}
      and I live in {props.city}
    </div>
  );
};

const RenderPropsComplex = () => {
  return (
    <div>
      <h2>Render Props</h2>
      <CatComplex name="Whiskers" city="Catland" render={(name, city) => <MeowComplex name={name} city={city} />} />
    </div>
  );
};
