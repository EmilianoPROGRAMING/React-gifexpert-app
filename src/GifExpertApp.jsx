import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch man']);

    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
        if (categories.includes(newCategory)) return;
            
        
        setCategories ([ newCategory, ...categories ]);
            

    }

  return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={ value => onAddCategory(value)} 
            />

        {/* input */}

        {/* list de gif */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        
         { 
            categories.map( ( category ) => (
                 <GifGrid 
                     key={ category } 
                     category={ category } />
             ))
         }
        
            {/* gif item */}
    </>
  )
}
