// import axios from 'axios';
// import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../../shared/components/Button';
import FormInput from '../../shared/components/FormInput';
import s from "./register.module.scss"


function Register() {

    const [data, setData] = useState({
        name: "",
        position: "",
        cover: "",
        about:"",
    });

    const handle = (e) => {
        const newData = { ...data };
        newData[e.target] = e.target.value;
        setData(newData);
        console.log(newData);
}
    const history = useNavigate();

//     const setDataName = (e) => {
//         const { value } = e.target;
//         data.name.value;
//    }
//     const setDataTitle = (e) => {
//         const { value } = e.target;
//         setTitle(value);
//    }
//     const setDataText = (e) => {
//         const { value } = e.target;
//         console.log(e.target);
//         setText(value);
//    }

    // const setImgFile = (e) => {
    //     setFile(e.target.cover.files[0])
    // }
    
    const handleSubmit=(e)=> {
        e.preventDefault();
      
        // const data = new FormData(e.target);
        // const result = Object.fromEntries(data.entries())
        // // console.log(Object.fromEntries(data.entries()));
        // console.log(result);
  }

    const addUserData = async(e) => {
        e.preventDefault();
        const data = new FormData();
        
console.log(data);
        // const { elements } = e.target;
        console.log(e.target.value);
        // const {title, cover,text, name} = elements;
        // data.append("title", title);
        // data.append("name", name);
        // data.append("text", text);
        // data.append("cover", cover);
        // data.append("cover", cover.files[0]);

        // console.log(result);

        // data.append(result);

        
        // const config = {
        //     headers: {
        //         " Content-Type": "multipart/form-data"
        //     }
        // };

        // const res = await axios.post("http://localhost:3004/register", data);
        // console.log(res);

        // if (res.data.status === 401 || res.data) {
        //     console.log("error");
        // }
        
        history("/contacts")
    }
  return (
      <form className={s.form} onSubmit={handleSubmit}>
          <input  name="cover" type="file" enctype="multipart/form-data" onChange={(e)=>handle(e)}/>
          <FormInput label="Name:" name="name" placeholder="Name"   onChange={(e)=>handle(e)}/>
          <FormInput label="Title:" name="title" placeholder="Title" onChange={(e)=>handle(e)}/>
          <input name="text" placeholder="Lorem text"  onChange={(e)=>handle(e)}/>
          <button type='submit' onClick={addUserData}>submit</button>
    {/* <Button
      className={classNames("button", "text", "focus", "top")}
      type="submit"
      text="Submit"
      onClick={addUserData}
    /> */}
      </form>
  )
}

export default Register;



















// function Register() {
//     const [cover, setFile] = useState("");
//     const [name, setName] = useState("");
//     const [position, setPosition] = useState("");
//     const [about, setAbout] = useState("");

//     const history = useNavigate();

//     const setDataName = (e) => {
//         const { value } = e.target;
//         console.log(e.target.value);
//         setName(value);
//    }
//     const setDataTitle = (e) => {
//         const { value } = e.target;
//         console.log(e.target.value);

//         setPosition(value);
//    }
//     const setDataText = (e) => {
//         const { value } = e.target;
//         console.log(e.target.value);

//         setAbout(value);
//    }

//     const setImgFile = (e) => {
//         setFile(e.target.cover.files[0])
//     }
    
  
//     // let formData = new FormData();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };

   
//     const addUserData = async(e) => {
//         e.preventDefault();
        
        
//         // const { elements } = e.target;
        
//         // const {name,position,about} = e.target;
//         console.log(e);

//         const data = new FormData();
//        console.log( data.append("cover", cover.files[0]));
//        console.log( data.append("name", name));
//        console.log( data.append("position", position));
//        console.log( data.append("about", about));
//      console.log(data);

//         //  await axios.post("http://localhost:3004/register", { formData })
//         //     .then(res => {
//         //         console.log(res);
//         //     })
//         //     .catch(err => {
//         //         console.log(err);
//         //     });
        
//         // if (res.data.status === 401 || res.data) {
//         //     console.log("error");
//         // }
        
//         history("/contacts")
        
//     }

//   return (
//       <form className={s.form} onSubmit={handleSubmit}>
//           <input  name="cover" type="file" enctype="multipart/form-data" onChange={setImgFile}/>
//           <FormInput label="Name:" name="name" placeholder="Name"  onChange={setDataName} />
//           <FormInput label="Title:" name="position" placeholder="Title" onChange={setDataTitle}/>
//           <textarea name="about" className={s.item} placeholder="Lorem text"  onChange={setDataText }/>
//           <button type='submit' onClick={addUserData}>submit</button>
//     {/* <Button
//       className={classNames("button", "text", "focus", "top")}
//       type="submit"
//       text="Submit"
//       onClick={addUserData}
//     /> */}
//       </form>
//   )
// }

// export default Register;





