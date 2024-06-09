import React from 'react';
type Props = {
  fname:string,
  city:string,
  count:number
}

class UserClass extends React.Component<Props> {
  constructor(props:Props) {
    super(props)

    this.state = {
      fname:props.fname,
      city:props.city, 
      country:"India", 
      age:20,
      count:0
    }
    console.log(props)
  }

  render(){
    console.log(this.props)
    const {fname,city} = this.props
    const {age, country} = this.state as { age:string,  country: string } // Add type declaration for 'country'
    return (
      <div>
        <h1>This is class </h1>
        <div>Name :  {this.props.fname}   </div>
        <div>city :  {city}   </div>
        {/* <div>count :  {this.state.count}   </div> */}
        <div>Country with State :  {country}   </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae explicabo itaque modi ratione facere rem, 
          error ex iste est distinctio qui provident ut quidem sit quod animi, possimus optio quaerat.</div>

          <input  type='text'  placeholder='First Name'    className='border-2 border-black mt-2' /><br/>
          <button onClick={()=> {
            this.setState((prevState) => ({
              count: (prevState as { count: number }).count + 1,
            }));
            }}>Increase</button>
        
      </div>
    )
  }

}


export default UserClass;
