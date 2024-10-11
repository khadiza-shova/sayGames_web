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
            <div className="grid grid-cols-4">
            <div className="firstGame col-span-3">
                <div className="min-w-[60%] max-w-auto relative">
                    <div className="bg-white w-full h-[450px] object-cover rounded-3xl">
                    </div>
                </div>
            </div>

            <div className="col-span-1 w-full h-[430px] px-3">
               {
                SliceData.map(Data=>
                    <Link to={Data.Game_name} key={Data.id}>
                        <div key={Data.id}>
                <img
                        src={Data.Game_image}
                        alt="image"
                        className="h-40 w-full object-cover rounded-3xl mt-4"
                    />
                </div>
                    </Link>
                )
               }
                
            </div>
        </div>


        {/* Slider Start  */}
        <div>
         
            <CardCom></CardCom>

            <h2 className="text-xl my-4">New Games </h2>
            
            <NewGamesCard></NewGamesCard>

            <h2 className="text-xl my-4">All Puzzle Games </h2> 
            
            <AllPuzzleGames></AllPuzzleGames>
        </div>
        </>
    );
};

export default Home;