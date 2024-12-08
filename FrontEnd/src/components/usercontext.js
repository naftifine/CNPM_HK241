import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for user data
const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        student_id: null,
        name: null,
    });

    // Function to set user data and save to localStorage
    const updateUser = (student_id, name) => {
        setUser({ student_id, name });
        // Save to localStorage for persistence
        localStorage.setItem('student_id', student_id);
        localStorage.setItem('name', name);
    };

    // Function to logout (clear user data)
    const logoutUser = () => {
        setUser({ student_id: null, name: null });
        // Remove from localStorage
        localStorage.removeItem('student_id');
        localStorage.removeItem('name');
    };

    // Check for stored user data when the app loads (on mount)
    useEffect(() => {
        const storedStudentId = localStorage.getItem('student_id');
        const storedName = localStorage.getItem('name');

        if (storedStudentId && storedName) {
            setUser({
                student_id: storedStudentId,
                name: storedName,
            });
        }
    }, []); // Only run on mount (i.e., once when the component is first rendered)

    return (
        <UserContext.Provider value={{ user, setUser: updateUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
