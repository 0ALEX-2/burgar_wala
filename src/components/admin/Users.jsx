import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import userImage from "../../assets/sakil.jpg";

const Users = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((elm, i) => (
              <tr key={i}>
                <td>#jdhhh809ghd</td>
                <td>Shakil</td>
                <td>
                  <img src={userImage} alt="User" />
                </td>
                <td>{"24-10-2023"}</td>
                <td>COD</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
