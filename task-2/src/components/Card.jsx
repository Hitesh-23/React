import React from 'react'


const Card = (props) => {

    console.log(props)
    return (
        <div className='flex p-4 rounded-2xl bg-gray-200 text-center'>
            <div className='h-[53vh] flex flex-col rounded-2xl overflow-hidden'>
                <div className="img bg-[url('/cloud.jpg')] h-[15vh] bg-center bg-cover rounded-2xl">
                    <div className='flex justify-end'>
                        <h2 className='w-10 h-10 flex items-center justify-center border bg-gray-200 rounded-full mr-4 mt-2 text-2xl'>+</h2>
                    </div>
                </div>
                <div className="profile w-24 h-24 mx-auto">
                    <img className='w-full h-full rounded-full object-cover' src="/profile-2.jpg" alt="" />
                </div>
                <div className="heading flex flex-col items-center mt-3">
                    <h1 className='text-xl font-semibold' >{props.name}</h1>
                    <p className='max-w-[300px] mt-3 text-gray-300 text-center'>{props.bio}</p>
                </div>
                <div className="counts flex justify-around mt-7 bg-gray-300 pt-3 pb-3 rounded-2xl">
                    <div className="likes">
                        <div>{props.likes}</div>
                        <p>Likes</p>
                    </div>
                    <div className="posts">
                        <div>{props.posts}</div>
                        <p>Posts</p>
                    </div>
                    <div className="views">
                        <div>{props.views}</div>
                        <p>Views</p>
                    </div>
                </div>
                <div className="footer flex justify-center gap-10 font-semibold text-xl mt-2">
                    <div className="insta">📷</div>
                    <div className="twitter">𝕏</div>
                    <div className="trends">@</div>
                </div>
            </div>

        </div>
    )
}

export default Card