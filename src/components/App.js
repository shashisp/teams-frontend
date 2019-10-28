import React from 'react';
import UsersList from './UsersList'


const App = () => {
    return (
        <div className="ui container comments">
            <div>
                <div className="comment">
                    <UsersList />
                </div>
            </div>
        </div>
    )
};

export default App;