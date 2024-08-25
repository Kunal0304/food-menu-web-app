import React from 'react';
import {useNavigate} from 'react-router-dom'
import './backBtn.css';

const BackButton = () => {
    const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  };

  return (
    <p className="back-btn" style={{ cursor: 'pointer' }} onClick={handleClick}>
      <svg className="me-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19" height="19" viewBox="0 0 19 19">
        <defs>
          <style>
            {`
              .cls-1 {
                fill: #373737;
              }
              .cls-2 {
                fill: #fff;
              }
              .cls-3 {
                clip-path: url(#clip-path);
              }
            `}
          </style>
          <clipPath id="clip-path">
            <rect id="Rectangle_1092" dataName="Rectangle 1092" className="cls-1" width="14" height="14" transform="translate(1.957 1)"></rect>
          </clipPath>
        </defs>
        <g id="Group_6825" dataName="Group 6825" transform="translate(-315 -177)">
          <circle id="Ellipse_91" dataName="Ellipse 91" className="cls-2" cx="9.5" cy="9.5" r="9.5" transform="translate(315 177)"></circle>
          <g id="arrow" transform="translate(333 178.043) rotate(90)">
            <g id="Group_646" dataName="Group 646" className="cls-3">
              <path id="Path_18151" dataName="Path 18151" className="cls-1" d="M4.528,4.616a.415.415,0,0,1-.281-.109L.134.719A.414.414,0,0,1,.7.11L4.524,3.635,8.243.113a.415.415,0,0,1,.57.6l-4,3.787a.415.415,0,0,1-.285.113" transform="translate(4.507 6.671)"></path>
            </g>
          </g>
        </g>
        </svg>
      Back
    </p>
  );
};

export default BackButton;
