import axios from 'axios';
// import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../../shared/components/Button';
import FormInput from '../../shared/components/FormInput';
import s from "./contacts.module.scss"


function TeamRegister() {
 
    const handleSubmit=(e)=> {
        e.preventDefault();
      
        let data = new FormData(e.target);
        const result = Object.fromEntries(data.entries())
        // console.log(Object.fromEntries(data.entries()));
        console.log(result);
  }

    const history = useNavigate();
    
    const addUserData = async(e) => {
        const data = new FormData();
     
        const res = await axios.post("http://localhost:3004/api/team", { data })
            .then(res => {
                console.log(res);
            })
            .catch (err=> {
               console.log(err);
            });

        if (res.data.status === 401 || !res.data) {
            console.log("error");
        }
        
        history("/contacts")
    }
  return (
      <form className={s.form} onSubmit={handleSubmit}>
          <input  name="cover" type="file" enctype="multipart/form-data" />
          <FormInput label="Name:" name="name" placeholder="Name"  />
          <FormInput label="Title:" name="position" placeholder="Title" />
          <input name="about" placeholder="Lorem text"  />
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

export default TeamRegister;
















// function Register() {

// //     const [data, setData] = useState({
// //         name: "",
// //         position: "",
// //         cover: "",
// //         about:"",
// //     });

// //     const handle = (e) => {
// //         const newData = { ...data };
// //         newData[e.target] = e.target.value;
// //         setData(newData);
// //         console.log(newData);
// // }
// //     const history = useNavigate();

// //     const setDataName = (e) => {
// //         const { value } = e.target;
// //         data.name.value;
// //    }
// //     const setDataTitle = (e) => {
// //         const { value } = e.target;
// //         setTitle(value);
// //    }
// //     const setDataText = (e) => {
// //         const { value } = e.target;
// //         console.log(e.target);
// //         setText(value);
// //    }

// //     const setImgFile = (e) => {
// //         setFile(e.target.cover.files[0])
// //     }
    
//     const handleSubmit=(e)=> {
//         e.preventDefault();
      
//         let data = new FormData(e.target);
//         const result = Object.fromEntries(data.entries())
//         // console.log(Object.fromEntries(data.entries()));
//         console.log(result);
//   }

//     const addUserData = async(e) => {
//         // e.preventDefault();
//         const data = new FormData();
        
//         // const { elements } = e.target;
//         // console.log(e.target.value);
//         // const {title, cover,text, name} = elements;
//         // data.append("title", title);
//         // data.append("name", name);
//         // data.append("text", text);
//         // data.append("cover", cover);
//         // data.append("cover", cover.files[0]);

//         // console.log(result);

//         // data.append(result);

        
//         // const config = {
//         //     headers: {
//         //         " Content-Type": "multipart/form-data"
//         //     }
//         // };

//         const res = await axios.patch("https://jsonplaceholder.typicode.com/posts/1", { data })
//             .then(res => {
//                 console.log(res);
//             })
//             .catch (err=> {
//                console.log(err);
//             });

//         if (res.data.status === 401 || !res.data) {
//             console.log("error");
//         }
        
//         // history("/contacts")
//     }
//   return (
//       <form className={s.form} onSubmit={handleSubmit}>
//           <input  name="cover" type="file" enctype="multipart/form-data" />
//           <FormInput label="Name:" name="name" placeholder="Name"  />
//           <FormInput label="Title:" name="title" placeholder="Title" />
//           <input name="text" placeholder="Lorem text"  />
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















