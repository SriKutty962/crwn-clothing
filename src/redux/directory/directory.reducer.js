const INITIAL_STATE = {
    sections: [{
                title: 'hats',
                imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60',
                id:1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0c3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60',
                id:2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://images.unsplash.com/photo-1570037276498-fd54b859ba63?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNuZWFrZXJzfGVufDB8fDB8&auto=format&fit=crop&w=400&q=60',
                id:3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://images.unsplash.com/photo-1500771471050-fb3ee40b66c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTN8fHdvbWVufGVufDB8fDB8&auto=format&fit=crop&w=400&q=60',
                size: 'large',
                id:4,
                linkUrl: 'shop/womens'
            },
            {
                title: 'mens',
                imageUrl: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60',
                size:'large',
                id:5,
                linkUrl: 'shop/mens'
            }]
};

const directoryReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;