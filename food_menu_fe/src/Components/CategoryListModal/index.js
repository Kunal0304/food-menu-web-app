import React, { useEffect, useState } from 'react';
import './categoryModal.css'
import CategoriesModal from '../CustomModal'
import { Link } from 'react-router-dom';

const SidebarButton = () => {
    

const style = {
  position: 'absolute',
  top: '50%',
  right: '-20%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
    const [categories, setCategories] = useState([]);
    const [toggleModal, setToggleModal] = useState(false);


    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('http://localhost:1337/api/categories');
                if (!response.ok) {
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
  <>
    <button className="btn btn-link sidebar-mobile-btn ripple-effect menu-btn-home">
    {!toggleModal && (  <span className="menu-img-icon" onClick={()=>setToggleModal((prev) => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48">
          <g id="Group_3" data-name="Group 3" transform="translate(-312 -609)">
            <circle id="Ellipse_11" data-name="Ellipse 11" cx="24" cy="24" r="24" transform="translate(312 609)" fill="#373737"></circle>
            <path id="Path_19674" data-name="Path 19674" d="M2383.649-2161.37v17.566h-.04v5.945a.453.453,0,0,1-.453.453h-.905a.453.453,0,0,1-.453-.453v-5.945h-3.378v-.223a33.531,33.531,0,0,1,1.122-8.634,27.671,27.671,0,0,1,2.865-6.506A23.86,23.86,0,0,1,2383.649-2161.37Z" transform="translate(-2050.22 2782.398)" fill="#fff"></path>
            <path id="Path_19675" data-name="Path 19675" d="M2398.032-2160.947v8.148a.452.452,0,0,1-.453.452h-2.263v14.479a.452.452,0,0,1-.452.453h-.906a.453.453,0,0,1-.452-.453v-14.479h-2.263a.452.452,0,0,1-.453-.452v-8.148a.453.453,0,0,1,.452-.453h.453a.453.453,0,0,1,.452.453v7.25h1.587v-7.243a.453.453,0,0,1,.446-.453h.459a.446.446,0,0,1,.318.133.447.447,0,0,1,.128.32v7.243h1.588v-7.243a.453.453,0,0,1,.453-.453h.453A.452.452,0,0,1,2398.032-2160.947Z" transform="translate(-2054.232 2782.408)" fill="#fff"></path>
          </g>
        </svg>
      </span>)}
    </button>

    {toggleModal &&
    <>
    <CategoriesModal style={style} isOpen={toggleModal} isClose={()=>setToggleModal(false)}  >
    <div className="row">
    <p className="category-item-title">Categories</p>
        <ul className='cross-btn'>
        <li className="" onClick={()=>setToggleModal((prev) => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 28">
            <defs>
              <style>
                {`.rr{fill:#373737;}.ee{fill:#fff;fill-rule:evenodd;}`}
              </style>
            </defs>
            <g transform="translate(-182 -398)">
              <circle className="rr" cx="14" cy="14" r="14" transform="translate(182 398)"></circle>
              <path className="ee" d="M7.212,6l4.537-4.537A.857.857,0,1,0,10.537.251L6,4.788,1.463.251A.857.857,0,0,0,.251,1.463L4.788,6,.251,10.537a.857.857,0,1,0,1.212,1.212L6,7.212l4.537,4.537a.857.857,0,0,0,1.212-1.212L7.212,6" transform="translate(190 406)"></path>
            </g>
          </svg>
        </li>
      </ul>

                    {categories?.map(category => (
                        <div key={category?.id} className="col-12 col-sm-12 mb-3">
                            <Link to= {`/order_menu/${category?.attributes.category}`} onClick={()=>setToggleModal((prev) => !prev)}>
                                <div className="category-svg-box">
                                    <p className="category-item-title">{category?.attributes.category}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
    </div>
    </CategoriesModal> 
    </>
    }
    </>
  );
};

export default SidebarButton;
