import { NavLink, useParams } from 'react-router-dom';
import GameAll from '../../public/GamesAPI.json';
import { CommentOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { BiLogoPlayStore } from 'react-icons/bi';



const SingleGame = () => {
    const uniqueName = useParams();

    const singleGame = GameAll.find(game => game.Game_name === uniqueName.uniqueName);
    const { Game_title,Rating,Game_features } = singleGame;

    return (
        <>
            <div className="grid grid-cols-6">
                <div className="firstGame col-span-4">
                    <div className="min-w-[60%] max-w-auto relative">
                        <div className="bg-white w-full h-[450px] object-cover rounded-3xl">
                        </div>

                        <div className='grid grid-cols-4 mt-2'>

                            <div className='col-span-2 font-bold text-lg'>{Game_title}</div>

                            <div className='col-span-2'>
                                <div className='text-base flex justify-between items-center cursor-pointer'>

                                    <div><LikeOutlined /><span className='ml-2'>Like</span></div>

                                    <div><CommentOutlined></CommentOutlined><span className='ml-2 '>Comment</span>
                                    </div>

                                    <div><ShareAltOutlined></ShareAltOutlined><span className='ml-2'>Share</span></div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Game About and Rating  */}
                    <div className='grid grid-cols-4  mt-3'>
                        <div className='col-span-3'>
                            <h2 className='text-base'>About The Game</h2>
                            <p className='mt-2 text-xs'>{Game_features}</p>
                        </div>
                        <div className='col-span-1 text-xl'>
                            <h2>{Rating} Rating</h2>
                        </div>
                    </div>
                    <button className='google_playBtn'>
                      Google Play
                    </button>
                    <button className='google_playBtn'>
                      App Store
                    </button>
                 
                </div>

                {/* More Game Section  */}
                <div className="col-span-2 w-full px-3">
                    <h2 className='font-bold mt-2 text-xl'>More Game Like This</h2>
                    
                    <div className='grid grid-cols-2 gap-2'>

                        {
                            GameAll.map(Data =>
                               <NavLink to={Data.Game_name} key={Data.id}>
                                     <div key={Data.id}>
                                    <img
                                        src={Data.Game_image}
                                        alt="image"
                                        className="h-40 object-cover rounded-3xl mt-4"
                                    />
                                </div>
                               </NavLink>
                            )
                        }
                    </div>

                   


                </div>

               
            </div>
        </>
    );
};

export default SingleGame;