import react from "react"

type Employee = {
  firstName: string,
  lastName: string,
  city: string,
}

export const RegistrationNew: React.FC = () => {  
  const [firstName, setFirstName] = react.useState("");
  const [lastName, setLastName] = react.useState("");
  const [cityName, setCityName] = react.useState("");
  const [addressName, setAdddressName] = react.useState("");
  const [emplyeelist, setEmployeeList] = react.useState<Employee[]>([]);
  const [list, setList] = react.useState(
   [ 
    {name: "rohit",city:"london"},
    {name: "ramesh",city:"delhi"},
    {name: "sudhir",city:"jaipur"}
  ]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(firstName, lastName, cityName);
    alert("Please enter");
    const employee = {
      firstName,
      lastName,
      city: cityName
    };

    setEmployeeList([...emplyeelist, employee]);
  }

  const onChangeCityHandler = (e: react.ChangeEvent<HTMLInputElement>) =>{
      const addrss = e.target.value 
      setAdddressName(addrss)
      console.log("address", addrss)
  }

  console.log(emplyeelist)
  return (
    <div className="flex flex-col  w-2/3 mx-auto rounded-md gap-4">
      <h1 className="text-2xl">Registration</h1>
      <input type="text" placeholder="First Name" className="border-2 border-black" onChange={(e)=>setFirstName(e.target.value)} />
      <input type="text" placeholder="last Name" className="border-2 border-black"  onChange={(e)=>setLastName(e.target.value)} /> 
      <input type="text" placeholder="city Name" className="border-2 border-black"  onChange={(e)=>setCityName(e.target.value)} />
      <div>
        <input type="text" placeholder="Address Name" className="border-2 border-black w-28"  onChange={onChangeCityHandler} />
        {
        list.map((item, index)=>{
          return <div className="w-28 border-2 border-site-color hidden">{item.name}</div>;
        })}

      </div>
      <button className="bg-blue-300" onClick={handleSubmit}>Submit</button>

      {
        emplyeelist.map((item, index)=>{
          return <div className="w-28">{item.lastName}</div>;
        })
      }

      {JSON.stringify(emplyeelist)}
    </div>
  )
}

export default RegistrationNew;