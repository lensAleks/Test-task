import React, {useState } from 'react';

import {ReactComponent as Logo1} from '../svg/1.svg';
import {ReactComponent as Logo3} from '../svg/3.svg';
import {ReactComponent as Logo2} from '../svg/2.svg';
import {ReactComponent as Note } from '../svg/note.svg';
import {ReactComponent  as Sirt} from '../svg/sirt.svg';
import {ReactComponent as Draft} from '../svg/draft.svg';
import {ReactComponent as Avatar} from '../svg/avatar.svg';
import {ReactComponent as Thik} from '../svg/thik.svg';
import {ReactComponent as Nav} from '../svg/nav.svg';
import main from'../svg/img.png';
import small from'../svg/B4.png';
import toggl from'../svg/Toggle.png';
import ToggleSwitchForm from './toogleSwitch';

const AddDetails = () => {
  const [isSHow, setIsSHow] = useState(false)
  const [num, setNum] =useState(0)

  const addProd = () => {
    setNum( (prev) => prev + 1)
    setIsSHow(true)
    
  }
  
    return (
       
          <div className='content'>
            
          <div className='header'> 
           
           <Logo1 className='wh'/>
           <Logo2 className='wh w-70'/>
           <Logo3 className='wh w-100'/>
          
           <div className='button'></div><input className='input' placeholder='названия запроса'/>
           
            <Note className=' mr-2'/>
            <Sirt className=' mr-2'/>
            <div className='dr-ex ps-r'>
              {isSHow && <div className='cr-1 '>{num}</div>}
              <Draft className=' mr-2'/>
               <div className='fs-11'> 122 566 ₽</div>
            </div>
           
           
            <Avatar className='w-54'/> 
               <div className='w-6'>Ermakov E.</div>
               <Thik className='wh'/> 
           
          </div>
          <div className='header d-flex pt-61 fs-1'> 
          <div className='w-11'>Мои заказы</div>
          <div className='w-11'>Сотрудники</div>
          <div className='w-11'>Обращения</div>
         <div className='wl-40 mr-21'>
           <Nav className='ml-30'/>
          <div className='bl-2 pt-6'>Ваш менеджер</div>
         </div>
         
          <div className='bl-2'>%</div>
          <div className='bl-2 pt-6'>Акции</div>
          </div>
          <div className='body'>
            <div className='d-flex'>
            <div className='wh-12'> Каталог/</div>
            <div className='wh-12'>Обувь/</div>
            <div className='wh-12'>Кроссовки/</div>
            <div className='wh-12'>Беговые</div>
            </div>
          
          <div className='title'>
             Кроссовки мужские Skechers Sunny Dale
          </div>
            <div className='par-1'>
             <div className='pic-1'> 
               <img  className='pic'src={main}  alt="skechers"/>
               <img  className='pic d-block'src={small} />
             </div>
             <div className='par-2 mb-none'> 
               <div  className='xc-1'>166 534.00 цена без скидки</div>
               <div className='xc-2'>122 566 ₽ <div className='xc-21'>-15%</div></div>
              <div className='d-flex f-10 pm-1'>
                <div className='sq-1'>12 штук в уп.</div>
                <ToggleSwitchForm  className='pic w-28 m-3'/>
                <div className='c-heg'>Заказ упаковкой</div>
              </div>
              <div className='d-flex f-9 mb-12'>
                <div>
                Завтра
                <div className='c-l'>
                Доставка
                </div>
                </div>
                <div>
                7 шт.
                <div className='c-l'>
                Тарасовка
                </div>
                </div>
                <div>
                7 шт.
                <div className='c-l'>
                Тарасовка
                </div>
                </div>
              </div>
              <div className='d-flex'>
               <div className='bt-d ' onClick={addProd}><div className='mt'>В корзину</div></div>
               <div className='sq-2'><Sirt  className='cd-b'/></div>
              
              </div>
              
              
             </div>
             {/* <div>Описание товара</div>
             <div></div> */}
             
             <div className='par3 pd-6'>
               <div className='text-1 w-12'>Характеристики</div>
               <div className='f-13'> ELC00696</div>
               <div className='c-l w-12 fs-12'>Код поставщика</div>
               <div className='f-13'>ELC00696</div>
               <div className='c-l w-12 fs-12'>Код РАЭК</div>
               <div className='f-13'>Electric used</div>
               <div className='c-l fs-12'>Бренд</div>
               <div className='f-13'>ELC0200000696</div>
               <div className='c-l w-12 fs-12'>Код производителя</div>
             </div>
             <div className='par4 pd-6 pt-20'>
               <div className='f-13'> ELC0200000696</div>
               <div className='c-l fs-12'>Артикул</div>
               <div className='f-13'>ELC00696</div>
               <div className='c-l w-12 fs-12'>Код ЕТМ</div>
               <div className='f-13'>ELC00696</div>
               <div className='c-l w-12 fs-12'>Серия</div>
             </div>
             
            </div>
             
           <div>

           </div>
          </div>
          
          <div className='info'> </div>
           
          </div>
         
          
     
      
    )
}

export default AddDetails























