import { NavLink } from 'react-router-dom';
import AllGame from '../../public/GamesAPI.json';

const AllPuzzleGames = () => {

    const allPuzzleGames = AllGame.filter(game => game.Game_category == "puzzle");


    return (
        <div className='flex gap-x-4 gap-y-10 flex-wrap'>
            {
                allPuzzleGames.map(game =>
                    <NavLink to={game.Game_name} key={game.id}>
                        <div className='card_image rounded-md shadow-md relative w-32 h-40'>
                            <img src={game.Game_image} alt="image"
                                className="object-cover rounded-md" />

                            <h2 className='poppins-regular '>{game.Game_title}</h2>

                        </div>
                    </NavLink>
                )
            }
        </div>
    );
};

export default AllPuzzleGames;