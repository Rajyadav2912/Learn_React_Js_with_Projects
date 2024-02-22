import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UserData = (props) => {
  const users = props.users;
  const API = props.API;

  const editHanlder = () => {
    console.log("edit click hua hai");
  };

  const deleteHanlder = async (id) => {
    try {
      const response = await fetch(API + id, { method: "DELETE" });
      // const result = response.json();
      console.log("delete click hua hai" + response);
      // props.callparent();
    } catch (e) {
      console.error("error");
    }
  };

  return (
    <>
      {users.map((currUser) => {
        const { id, name, age, gender } = currUser;
        // const { street, city, zipcode } = currUser.address;
        return (
          <tr key={id}>
            <td className="min-w-40">{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            {/* <td>
              {street} {city}, {zipcode}
            </td> */}
            <div className="flex items-center justify-around p-10 border-[1px] border-solid border-[#443c68] leading-[1.7]">
              <FaEdit fontSize="3rem" onClick={() => editHanlder(id)} />
              <MdDelete fontSize="3rem" onClick={() => deleteHanlder(id)} />
            </div>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;
