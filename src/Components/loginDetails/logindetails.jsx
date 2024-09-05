import { useState } from "react";
import { Modal } from "./modal";
import { CustomImage } from "../image/image";
import Table from "react-bootstrap/Table";
import { FaRegEdit } from "react-icons/fa";

export const ShowLoginDetails = () => {
  const [modal, setModal] = useState(false);
  const [home, setHome] = useState(false);
  const [allUserData, setAllUserData] = useState([]);
  const [table, setTable] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // State to hold the current user data

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setHome(false);
    setTable(true);
    setCurrentUser(null); // Reset current user after closing modal
  };

  const getData = () => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setAllUserData([...allUserData, JSON.parse(storedData)]);
    }
    console.log("All users:", allUserData);
  };

  const homeHandler = () => {
    setHome(true);
  };

  const editHandler = (index) => {
    const userToEdit = allUserData[index];
    setCurrentUser({ ...userToEdit, index }); // Pass index along with data
    showModal();
  };

  const saveData = (updatedUser) => {
    const updatedUsers = [...allUserData];
    updatedUsers[updatedUser.index] = {
      username: updatedUser.username,
      password: updatedUser.password,
      age: updatedUser.age,
      feedback: updatedUser.feedback,
    }; // Update the existing user data
    setAllUserData(updatedUsers);
    closeModal();
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "200px",
          height: "100vh",
          border: "2px solid",
          borderTopRightRadius: "8%",
          position: "fixed",
        }}
      >
        <CustomImage
          width={150}
          height={150}
          source={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2HQ4Dg-lKpde8spteOVR5YuAuQDhhrQlsA&s"
          }
        />

        <div
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <button onClick={homeHandler}>Home</button>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <button>About</button>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <button>Settings</button>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <button>Contact Us</button>
        </div>
      </div>

      <div style={{ flexGrow: 1, marginLeft: "220px", padding: "20px" }}>
        {home && <button onClick={showModal}>Add</button>}

        {modal && (
          <Modal
            closeModal={closeModal}
            getData={getData}
            saveData={saveData}
            currentUser={currentUser} // Pass current user to modal
          />
        )}

        {table && (
          <div>
            <h1>Table showed</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th> Username</th>
                  <th>Password</th>
                  <th>Age</th>
                  <th>About User</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allUserData.map((user, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {index + 1}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {user.username}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {user.password}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {user.age}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {user.feedback}
                    </td>
                    <td>
                      <button onClick={() => editHandler(index)}>
                        <FaRegEdit />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};



// import { useState } from "react";
// import { Modal } from "./modal";
// import { CustomImage } from "../image/image";
// import Table from "react-bootstrap/Table";
// import { FaRegEdit } from "react-icons/fa";

// export const ShowLoginDetails = () => {
//   const [modal, setModal] = useState(false);
//   const [home, setHome] = useState(false);
//   const [allUserData, setAllUserData] = useState([]);
//   const [table, setTable] = useState(false);

//   const showModal = () => {
//     setModal(true);
//   };

//   const closeModal = () => {
//     setModal(false);
//     setHome(false);
//     setTable(true);
//   };

//   const getData = () => {
//     const storedData = localStorage.getItem("userData");
//     if (storedData) {
//       setAllUserData([...allUserData, JSON.parse(storedData)]);
//     }
//     console.log("All users:", allUserData);
//   };

//   const homeHandler = () => {
//     setHome(true);
//   };

//   const editHandler=(id)=>{
//     console.log(id)
//     let filteredItem=allUserData.filter(each=>each.id===id)
//     console.log(filteredItem)
//   }
//   return (
//     <div style={{ display: "flex" }}>
//       <div
//         style={{
//           width: "200px",
//           height: "100vh",
//           border: "2px solid",
//           borderTopRightRadius: "8%",
//           position: "fixed",
//         }}
//       >
//         <CustomImage
//           width={150}
//           height={150}
//           source={
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2HQ4Dg-lKpde8spteOVR5YuAuQDhhrQlsA&s"
//           }
//         />

//         <div
//           style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
//         >
//           <button onClick={homeHandler}>Home</button>
//         </div>
//         <div
//           style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
//         >
//           <button>About</button>
//         </div>
//         <div
//           style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
//         >
//           <button>Settings</button>
//         </div>
//         <div
//           style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
//         >
//           <button>Contact Us</button>
//         </div>
//       </div>

//       <div style={{ flexGrow: 1, marginLeft: "220px", padding: "20px" }}>
//         {home && <button onClick={showModal}>Add</button>}

//         {modal && <Modal closeModal={closeModal} getData={getData} />}

//         {table && (
//           <div>
//             <h1>Table showed</h1>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>id</th>
//                   <th> Username</th>
//                   <th>Password</th>
//                   <th>Age</th>
//                   <th>About User</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {allUserData.map((user, index) => (
//                   <tr key={index}>
//                     <td style={{ border: "1px solid black", padding: "8px" }}>
//                       {index + 1}
//                     </td>
//                     <td style={{ border: "1px solid black", padding: "8px" }}>
//                       {user.username}
//                     </td>
//                     <td style={{ border: "1px solid black", padding: "8px" }}>
//                       {user.password}
//                     </td>
//                     <td style={{ border: "1px solid black", padding: "8px" }}>
//                       {user.age}
//                     </td>
//                     <td style={{ border: "1px solid black", padding: "8px" }}>
//                       {user.feedback}
//                     </td>
//                     <td>
//                       <button
//                         onClick={() => {
//                           editHandler(index);
//                         }}
//                       >
//                         <FaRegEdit />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
