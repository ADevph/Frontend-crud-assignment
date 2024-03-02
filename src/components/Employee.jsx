import React from 'react';

const Employee = ({ employees }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Employees</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Full Name</th>
            <th className="border px-4 py-2">Options</th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.map((employee, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{`${employee.firstName} ${employee.lastName}`}</td>
              <td className="border px-4 py-2">
                <button className="mr-2 bg-blue-500 text-white px-2 py-1 rounded-md">Details</button>
                <button className="mr-2 bg-yellow-500 text-white px-2 py-1 rounded-md">Block</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
