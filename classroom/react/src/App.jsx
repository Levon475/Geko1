import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './features/ui/uiSlice';
import { useGetUsersQuery } from './features/api/apiSlice';

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);
  const { data: users, error, isLoading } = useGetUsersQuery();

  return (
    <div style={{ 
      background: darkMode ? '#222' : '#fff', 
      color: darkMode ? '#fff' : '#000',
      padding: '30px',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      transition: 'all 0.3s ease'
    }}>
      <h1>Redux Toolkit + RTK Query Setup</h1>
      
      <button 
        onClick={() => dispatch(toggleTheme())}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: darkMode ? '#fff' : '#222',
          color: darkMode ? '#222' : '#fff',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {darkMode ? 'Անջատել Dark Mode-ը' : 'Միացնել Dark Mode-ը'}
      </button>

      <hr style={{ margin: '30px 0', borderColor: darkMode ? '#444' : '#ddd' }} />

      <h2>Օգտատերեր (API-ից)</h2>
      
      {isLoading && <p>Տվյալները բեռնվում են...</p>}
      {error && <p style={{ color: 'red' }}>Սխալ տեղի ունեցավ տվյալները ներբեռնելիս։</p>}
      
      {users && (
        <ul style={{ lineHeight: '2' }}>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;