import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60',
                id:1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60',
                id:2,
                linkUrl: ''
            },
            {
                title: 'sneakers',
                imageUrl: 'https://images.unsplash.com/photo-1570037276498-fd54b859ba63?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNuZWFrZXJzfGVufDB8fDB8&auto=format&fit=crop&w=400&q=60',
                id:3,
                linkUrl: ''
            },
            {
                title: 'womens',
                imageUrl: 'https://images.unsplash.com/photo-1500771471050-fb3ee40b66c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTN8fHdvbWVufGVufDB8fDB8&auto=format&fit=crop&w=400&q=60',
                size: 'large',
                id:4,
                linkUrl: ''
            },
            {
                title: 'mens',
                imageUrl: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60',
                size:'large',
                id:5,
                linkUrl: ''
            }]
        }
    }

    render(){
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        );
    }
}

export default Directory;