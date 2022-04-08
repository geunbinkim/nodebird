export const initalState = {
    mainPosts: [{
        id : 1,
        User : {
            id : 1,
            nickname: '테리'
        },
        content : '첫번째 게시글',
        Images: [{
            src: 'https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_262/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
        }],
        Comments: [{
            User : {
                nickname : '제이크',
            },
            content : 'xpfalxpf'
        }]
    }],
    imagePaths: [],
    postAdded: false
}

const dummyPost = {
    mainPosts: [{
        id : 2,
        User : {
            id : 2,
            nickname: '제이크'
        },
        content : '두번째 게시글',
        Images: [{
            src: 'https://images.mypetlife.co.kr/content/uploads/2021/10/19151330/corgi-g1a1774f95_1280-1024x682.jpg',
        }],
        Comments: [{
            User : {
                nickname : '테리',
            },
            content : 'xpfalxpf'
        }]
    }],
    imagePaths: [],
    postAdded: false
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST
}

const reducer = (state = initalState, action) => {
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost.mainPosts, ...state.mainPosts],
                postAdded: true
            }
        default :
            return state;
    }
};

export default reducer;