import { useState, useEffect, use } from 'react';

function App() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let fetchUsers = async () => {
        try {
            const usersRequest = await fetch('https://127.0.0.1:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(),
            });
            if (!usersRequest.ok) {
                throw new Error('Network response was not ok');
            }
            const usersResponse = await usersRequest.json();
            setUsers(usersResponse.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    if (!users) {
        return <div>No users found</div>;
    }

    return (
        <>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <h2>{user.name}</h2>
                        <p>Academic Title: {user.academicTitle}</p>
                        <p>Designation: {user.designation}</p>
                    </li>
                ))}
            </ul>



        </>
    );









}
export default App;