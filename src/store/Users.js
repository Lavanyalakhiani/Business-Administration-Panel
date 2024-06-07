import { create } from "zustand";

// Sample user data
const userData = [
  { id: 202133, name: 'John Doe', designation: 'Assiatant', email: 'john907@dsm.in' },
  { id: 202149, name: 'Jane Smith', designation: 'Human Resources Manager' , email: 'jane@dsm.in' },
  { id: 202193, name: 'Bob Johnson', designation: 'Operations Manager', email: 'ob@dsm.in' },
  { id: 202208, name: 'Emily Davis', designation: 'Marketing Coordinator', email: 'emily@dsm.in' },
{ id: 202221, name: 'Michael Brown', designation: 'IT Specialist', email: 'michael@dsm.in' },
{ id: 202247, name: 'Sarah Wilson', designation: 'Customer Service Representative', email: 'sarah@dsm.in' },
{ id: 202265, name: 'David Martinez', designation: 'Sales Representative', email: 'david@dsm.in' },
{ id: 202281, name: 'Lisa Thompson', designation: 'Accountant', email: 'lisa@dsm.in' },

  // Add more users as needed
];

// Create a Zustand store for managing users
const useUsers = create((set) => ({
  users: userData,
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (userId) => set((state) => ({ users: state.users.filter(user => user.id !== userId) })),
  updateUser: (userId, updatedUserData) => set((state) => ({
    users: state.users.map(user => (user.id === userId ? { ...user, ...updatedUserData } : user))
  })),
}));

// Adding more users
useUsers.getState().addUser({ id: 202171, name: 'Alice Johnson', designation: 'Secretary',email: 'alice@dsm.in' });
useUsers.getState().addUser({ id: 202109, name: 'Charlie Brown', designation: 'IT Specialist',email: 'charlie@dsm.in' });

export default useUsers;
