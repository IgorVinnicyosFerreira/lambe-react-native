const posts =  [
    {
        id: Math.random(),
        nickname: 'Igor Vinnicyos',
        email: 'vinicyosferreira@gmail.com',
        image: require('./imgs/boat.jpg'),
        comments: [
            {
                nickname: 'John Ray Sheldon',
                comment: 'Stunning!'
            },
            {
                nickname: 'Ana Julia',
                comment: 'OMG! This picture is sooo pretty cool !!!'
            }
        ]
    },
    {
        id: Math.random(),
        nickname: 'Carlos Santana',
        email: 'carlos@outlook.com',
        image: require('./imgs/bw.jpg'),
        comments:[
            {
                nickname: "Zoe Saldana",
                comment: "Incredible! It's so deep."
            }
        ]
    },
    {
        id: Math.random(),
        nickname: 'Camila Mendes',
        email: 'camila_mender@gmail.com',
        image: require('./imgs/fence.jpg'),
        comments:[
            {
                nickname: 'John Ray Sheldon',
                comment: 'I love this picture!'
            },
            {
                nickname: 'Jennifer Maria',
                comment: 'This reminded me of my childhood <3'
            }
        ]
    },
    {
        id: Math.random(),
        nickname: 'Jennifer Maria',
        email: 'jennifermaria@outlook.com',
        image: require('./imgs/gate.jpg'),
        comments:[
            {
                nickname: "Zoe Saldana",
                comment: "I love this kind of picture."
            }
        ]
    }
];

export default posts;