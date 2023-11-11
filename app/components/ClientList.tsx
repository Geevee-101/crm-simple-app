import React from "react";

const ClientList = () => {
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Malcolm Lockyer</td>
          <td>Active</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ClientList;
