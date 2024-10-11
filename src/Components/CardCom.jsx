
import { NavLink } from 'react-router-dom';
import GameAllInfo from '../../public/GamesAPI.json';



const CardCom= () => {

  return(
 
         <div className='flex gap-3 flex-wrap mt-10'>
        {
          GameAllInfo.map(game=>
           
         

            <NavLink to={game.Game_name} key={game.id} >
                <div className="bg-white rounded-md shadow-md relative w-32 h-34 min-w-[50px]">

            <img
                src={game.Game_image}
                alt="image"
                className="w-full h-[130px] object-cover rounded-t-md"
            />

            <div className="p-2">
                <h1 className="text-[14px] font-bold text-black leading-[24px] ">{game.Game_title}</h1>
            </div>
        </div>
            </NavLink>
          )
        }
       
    </div>
    
   
    
  );

}
  
 
export default CardCom;