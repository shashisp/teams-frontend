import React from 'react';
import UsersList from './UsersList'


const App = () => {
    return (
        <div>
            <h1>Contacts</h1>
            <div>
            <div className="row">
                <div>
                <UsersList />
                </div>
            </div>
            </div>
        </div>
    )
};

export default App;