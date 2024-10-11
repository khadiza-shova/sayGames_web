import { NavLink, useParams } from 'react-router-dom';
import GameAll from '../../public/GamesAPI.json';
import { CommentOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { BiLogoPlayStore } from 'react-icons/bi';



const SingleGame = () => {
    const uniqueName = useParams();

    const singleGame = GameAll.find(game => game.Game_name === uniqueName.uniqueName);
    const { Game_title, Rating, Game_features } = singleGame;

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
                        <div className='col-span-1 text-3xl'>
                            <h2>{Rating} Rating</h2>
                        </div>
                    </div>
                    <div className='mt-5 flex gap-4'>

                        <a href="https://play.google.com/store/apps/details?id=com.pd.vehiclemasters&referrer=adjust_reftag%3DcTGpVHp2Q3RGp%26utm_source%3DSayStore%26utm_campaign%3Dpage" target='_blank'>
                        <button
                            className="bg-transparent outline outline-yellow-50 text-white rounded-md py-2 px-3 flex items-center gap-[10px] text-[1rem] ">
                            <img src="https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png" alt="google logo"
                                className="w-[23px]" />
                          Play Store
                        </button>
                        </a>
                       
                        <a href="https://apps.apple.com/us/app/vehicle-masters/id6444705312?mt=8" target='_blank'>
                        <button
                            className="bg-transparent outline outline-yellow-50 text-white rounded-md py-2 px-3 flex items-center gap-[10px] text-[1rem] ">
                            <img src="https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png" alt="google logo"
                                className="w-[23px]" />
                           App Store
                        </button>
                        </a>
                       

                     
                    </div>

                </div>

                {/* More Game Section  */}
                <div className="col-span-2 w-full px-3">
                    <h2 className='font-bold mt-2 text-xl'>More Game Like This</h2>

                    <div className='grid grid-cols-2 gap-2'>

                        {
                            GameAll.map(game =>
                                <NavLink to={game.Game_name} key={game.id}>
                                    <div className='more_card_image rounded-md shadow-md relative mt-5'>
                                        <img src={game.Game_image} alt="image"
                                            className="object-cover rounded-md" />
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