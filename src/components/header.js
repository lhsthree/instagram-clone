import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';

export default function Header(){
	const { firebase } = useContext(FirebaseContext);
	const user = true;

	return(
		<header className="h-16 bg-white border-b mb-8">
			<div className="container mx-auto max-width-lg h-full">
				<div className="flex justify-between h-full">
					<div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                    	<h1>
                    		<Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                    			<img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12" />
                    		</Link>

                    		{user ? (
                    			<div className="">
                    			<button className="bg-blue-500 text-white w-full rounded h-8 font-bold">sign in</button>
                    			<Link to={ROUTES.SIGN_UP} className="font-bold">
	                    	Sign Up
	                    </Link>
	                    </div>
	                    ):(
                    			<button>sign off</button>
                    			)}
                    	</h1>
                	</div>
				</div>
			</div>
		</header>
	)
}