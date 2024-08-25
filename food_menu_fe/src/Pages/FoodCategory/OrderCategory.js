import React, { useEffect, useState } from 'react';
import './foodcategory.css'; // If this file contains custom styles
import Header from "../../Components/Header";
import default_category from "../../assets/img/default_category.png";
import { Link } from 'react-router-dom';

function FoodMenu() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('http://localhost:1337/api/categories');
                if (!response.ok) {
                    console.log("categories 1")
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                console.log("categories 2")
                setCategories(data.data);
            } catch (error) {
                console.log("categories 3")
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories();
    }, []);

    return (
        <div>
            <Header/>
            <div>
    </div>
            <div className="container">
                <div className="row">
                    <p>Categories</p>
                </div>
                <div className="row">
                    {categories.map(category => (
                        <div key={category.id} className="col-4 col-sm-4 mb-3">
                            <Link to= {`/order_menu/${category.attributes.category}`}>
                                <div className="category-svg-box">
                                    <div className="category-svg-bg">
                                        <img src={default_category} alt="logo logo-mobile" />
                                    </div>
                                    <p className="category-item-title">{category.attributes.category}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FoodMenu;
