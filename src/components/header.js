import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Header() {
    const { firebase } = useContext(FirebaseContext);
    const user = {};
    
    return (
        <header className="h-16 bg-white border-b mb-8">
            <div className="container mx-auto max-width-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <h1>
                            <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                                <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12" />
                            </Link>
                        </h1>
                    </div>
                    <div className="text-gray text-center flex items-center align-items">
                        {user ? (
                            <>
                              <Link to={ROUTES.DASHBOARD} arial-label="Home">
                                    <p>Dashboard</p>
                                </Link>
                                
                                <button
                                    type="button"
                                    title="Sign Out"
                                    onClick={() => firebase.auth().signOut()}
                                    onKeyDown={(e) => {
                                    	if (e.key === 'Enter') {
                                    		firebase.auth().signOut()
                                    	}
                                    }}
                                    >
                                    Sign Out
                                    </button>  
                            </>
                        ) : (
                            <>
                                <Link to={ROUTES.LOGIN}>
                                    <button 
                                        type="button"
                                        className="bg-blue font-bold text-sm rounded w-20 h-8">
                                        Log In
                                    </button>
                                </Link>
                                <Link to={ROUTES.SIGN_UP}>
                                	<button 
                                        type="button"
                                        className="bg-blue font-bold text-sm rounded w-20 h-8">
                                        Sign Up
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>  
    );
}