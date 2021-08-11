import React, { useState, useEffect } from 'react';
import userUser from '../../hooks/use-user';
import Skeleton from 'react-loading-skeleton';

export default function Header({
	photosCount,
	followerCount,
	setFollowerCount,
	username,
	profile: { docId: profileDocId, userId: profileUserId, fullName, following = [] }
	}) {
	const { user } = userUser();
	const [isFollowingProfile, setIsFollowingProfile] = useState(false);
	const activeBtnFollowState = user.username && user.username !== username;

	return (
		<div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
			<div className=" flex container justify-center">
				<img
					className="rounded-full h-40 w-40 flex"
					alt={`${username} profile picture`}
					src={`/images/avatars/${username}.jpg`}
				/>
			</div>
			<div className="flex items-center justify-center flex-col col-span-2">
				<div className="container flex items-center">
					<p className="text-2xl mr-4">{username}</p>
					{activeBtnFollowState && (
						<button
							className="bg-blue-500 font-bold text-sm rounded text-white w-20 h-8"
							type="button"
							onClick={() => console.log('i am a button')}
						>
							{isFollowingProfile ? 'Unfollow' : 'Follow'}
						</button>
					)}
				</div>
				<div className="container flex mt-4">
					{followerCount === undefined || following === undefined ? (
                        <Skeleton count={1} width={677} height={24} />
                    ) : (
                        <>
                        	<p className="mr-10">
                        		<span className="font-bold">{photosCount}</span> {' '}
                        		{photosCount === 1 ? 'photo' : 'photos'}
                        	</p>
                        	<p className="mr-10">
                                <span className="font-bold">{followerCount}</span> {' '}
                                {followerCount === 1 ? 'follower' : 'followers'}
                            </p>
                            <p className="mr-10">
                                <span className="font-bold">{following.length}</span> following
                            </p>
                        </>
                    )} 
				</div>
				<div className="container mt-4">
					<p className="font-mediumn">{!fullName ? <Skeleton count={1} height={24} /> : 
					fullName} </p>
				</div>
			</div>
		</div>
	)
}