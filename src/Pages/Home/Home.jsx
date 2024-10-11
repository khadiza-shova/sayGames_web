import CardCom from "../../Components/CardCom";
import GameAll from '../../../public/GamesAPI.json';
import NewGamesCard from "../../Components/NewGamesCard";
import AllPuzzleGames from "../../Components/AllPuzzleGames";
import { Link } from "react-router-dom";

const Home = () => {

    const findData =GameAll.filter(game=> game.Game_category == "pizzle");
    const SliceData = findData.slice(3,5);
    // console.log(SliceData);

    return (
        <>
            <div className="grid lg:grid-cols-4">
            <div className="firstGame p-3 lg:p-0 lg:col-span-3">
                <div className="min-w-[60%] max-w-auto relative">
                    <div className="bg-white w-full h-[450px] object-cover rounded-3xl">
                    </div>
                </div>
            </div>

            <div className="lg:col-span-1 px-5 mt-5">
               {
                SliceData.map(game=>
                    <Link to={game.Game_name} key={game.id}>
                      <div className=' card_image rounded-md shadow-md relative '>
            <img src={game.Game_image} alt="image"
                className="object-cover rounded-md" />
        
                <h2 className='poppins-regular '>{game.Game_title}</h2>

        </div>
                    </Link>
                )
               }
                
            </div>
        </div>


        {/* Slider Start  */}
        <div>
         
            <CardCom></CardCom>

            <h2 className="text-xl font-bold mt-16 mb-5">New Games </h2>
            
            <NewGamesCard></NewGamesCard>

            <h2 className="text-xl font-bold my-10">All Puzzle Games </h2> 
            
            <AllPuzzleGames></AllPuzzleGames>
        </div>
        </>
    );
};

export default Home;