import React, { useState } from 'react';
import s from "./register.module.scss"


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}




// function Register() {
    //  const bookAddForm = document.getElementById("book-add-form");
    //    bookAddForm.addEventListener("submit", function(e){
    //     e.preventDefault();
    //     const {elements} = this;
    //     const {title, cover} = elements;
    //     const data = new FormData();
    //     data.append("title", title.value);
    //     data.append("cover", cover.files[0]);
    //    })


    //  const [name, setName] = useState("");
//     const [inputs, setInputs] = useState("");
//     const [textarea, setTextarea] = useState( "The content of a textarea goes in the value attribute" );


//     const handleChange = (event) => {
//       event.preventDefault();
      
//     const name = event.target.name;
//     // const inputs = event.target.name;
//     const value = event.target.value;
//       setInputs(values => ({ ...values, [name]: value }));
//     }
//     const title = (e) => {
//       e.preventDefault();
//        setInputs(e.target.value)
//     }
//   const handleSubmit = (event) => {
//       event.preventDefault();
//       setTextarea(event.target.value);
      
//     // alert(`The name you entered was: ${name}`);
//       console.log(inputs);
//   }

//   return (
//     <div >
//       <form className={s.form} onSubmit="{handleSubmit}">
//       <label>
//         <input name="cover" type="file" multiple />
//       </label>

//               <label>
//  <input placeholder="Enter your name" type="text" name="username" value="{inputs.username || } onChange={handleChange}"/>
//               </label>
//               <label>
//         <input type="text" placeholder="Title" value="{inputs}" onChange="{title}"/>
                  
//               </label>
//               <textarea value="textarea" onChange="{handleChange}" />
//       <input type="submit" />
//         {/* <button>Добавить</button> */}
//     </form>
//     </div>
//   )
// }

export default Register;
