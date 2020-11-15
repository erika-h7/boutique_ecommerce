import React from "react";

// Components
import MenuItem from "../menu-item/menu-item.components.jsx";

// Styles
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections:[{
                title: 'hats',
                imageUrl:'https://www.wellandgood.com/wp-content/uploads/2019/05/GettyImages-905563580.jpg',
                id: 1
            },
            {
                title: 'bags',
                imageUrl: 'https://i.pinimg.com/originals/00/09/fb/0009fb829de5ced795d1ed509e58866b.jpg',
                id: 2
            },
            {
                title:'accesories',
                imageUrl: 'https://assets.vogue.com/photos/5e2b0afa540d7f000847c4a0/master/w_2560%2Cc_limit/VO0220_Minimalism_12.jpg',
                id: 3
            },
            {
                title: 'tops',
                imageUrl: 'https://cdn.cliqueinc.com/posts/236389/minimalist-fashion-blogs-236389-1506027849590-main.700x0c.jpg',
                size: 'large',
                id: 4
            },
            {
                title: 'capsule',
                imageUrl: 'https://i.pinimg.com/originals/bf/8e/41/bf8e41eebc45de8ecf086a944d741acb.jpg',
                size: 'large',
                id: 5
            }
            ]
        };
    }    

    render() {
        return (

            <div className= "directory-menu">
            {
                this.state.sections.map(({title, imageUrl, size, id}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))
            }
            </div>
        )
    }
    
}

export default Directory;