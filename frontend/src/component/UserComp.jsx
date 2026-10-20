import  { useState, useEffect} from 'react'

const UserComp = () => {
  const [users, setUsers] = useState([]);



  useEffect(() => {
      const fetchUsers = async () => {
                try {
                const response = await fetch('http://localhost:8000/users');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                const data = await response.json();
                console.log('Fetched users:', data);
                setUsers(data);
                } catch (error) {
                console.error('Error fetching users:', error);
                }
      };
    fetchUsers()
  }, []);

  return (
    <>
        <h1>UserComp</h1>
        <table>
            <thead>
                <tr>                    
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Phone no</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                { users && users.map((user) => (
                    <tr key={user.id}>                       
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.department}</td>
                        <td>{user.phone_no}</td>
                        <td>{user.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
  )
}



export default UserComp;