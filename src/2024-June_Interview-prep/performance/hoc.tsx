import React from 'react';

// Higher Order Components are a pattern in React that allows you to reuse component logic. HOCs are functions that take a component and return a new component with additional props or behavior.

// 1. Send as componet
// 2. return as componet
// 3. use double arrow =>(Componet) = >(prosps)
// const useLogger = (Copm) => (props =>
//     return <Copm {..props} />

type User = {
  city: string;
};

// Example 1
const Child = (props: User) => {
  return <div>Child {props.city}</div>;
};

//Hoc
// eslint-disable-next-line react-hooks/rules-of-hooks
const useLogger = (ChildComp: any) => (props: any) => {
  console.log('my props: ', props);
  return <ChildComp {...props} enhancedProp="I am enhanced!" />; //2. return as componet
};
// eslint-disable-next-line react-hooks/rules-of-hooks
const Parent = useLogger(Child); //1. Send as componet

// Example 2
const Child1 = (props: { name: string; age: string; enhancedProp: string }) => {
  return (
    <div>
      Child Comp {props.name} {props.age} {props.enhancedProp}
    </div>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const Parent1 = useLogger(Child1);

const Hoc = () => {
  return (
    <div>
      <Parent city="Mumbai" />
      <Parent1 name="Mumbai" age="40" />
      <RestaurantPromote city="Mumbai" />
    </div>
  );
};

export default Hoc;

// What is higher order component
// ADIDNG PROMOTOR ON EXISITNG FUNCTION
// here we are not changing the main component behavior because

const RestaurantCard = (props: User) => {
  return <div>RestaurantCard {props.city}</div>;
};

const withPromotedLabel = (RestaurantCard: React.ComponentType<any>) => {
  return (props: any) => {
    return (
      <div className="text-black bg-red rounded-r-lg font-bold m-2 p-2">
        <label className="">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

const RestaurantPromote = withPromotedLabel(RestaurantCard);
