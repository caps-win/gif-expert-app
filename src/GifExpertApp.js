import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GiftExpertApp = () => {
    //const categories = ['One punch','kimetsu no yaiba','Dragon Ball']

    const [categories, setCategories] = useState(['One punch man'])

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories= {setCategories}/>
            <hr/>
            {categories.map(category => (
                <GifGrid 
                    key= { category }
                    category={ category }
                />
            ))
            }
   
        </>
    )
}