
import { NavLink } from 'react-router-dom';
import GameAllInfo from '../../public/GamesAPI.json';



const CardCom= () => {

  return(
 
         <div className='flex gap-x-4 gap-y-12 flex-wrap mt-10'>
        {
          GameAllInfo.map(game=>
           
            <NavLink to={game.Game_name} key={game.id} >
                 <div className='card_image rounded-md shadow-md relative w-32 h-40'>
                            <img src={game.Game_image} alt="image"
                                className="object-cover rounded-md" />

                            <h2 className=''>{game.Game_title}</h2>

                        </div>
            </NavLink>
          )
        }
       
    </div>
    
   
    
  );

}
  
 
export default CardCom;