import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Facere nihil corrupti fugiat nobis esse aliquid in eaque ex sit. Provident 
                    officiis ab eaque. Molestias sequi perferendis, totam voluptatem debitis dolore?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora exercitationem facere alias pariatur cupiditate expedita adipisci magni asperiores. Perferendis unde nisi sunt aliquid eaque ea libero exercitationem itaque vitae?</p>

            </div>
        </div>;
};

export default DescriptionBox;
