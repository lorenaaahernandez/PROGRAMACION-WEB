//object literals

/*const blogs = [
    { tittle: 'why mac y cheese rules', likes: 30},
    {tittle: '10 things to make with marmite',likes: 50}
];

console.log(blogs);*/

let user = {
    name: 'lorena',
    age: 20,
    email: 'lorenahernandez947@gmail.com',
    location: 'mexico',
    blogs: [
        { tittle: 'why mac y cheese rules', likes: 30},

        {tittle: '10 things to make with marmite',likes: 50}
    ],
    login (){
        console.log('the user logged in');
    },
    logout (){
        console.log('the user logged out');
    },
    logBlogs (){
       console.log ('this user has written the following blogs:');
       this.blogs.forEach(blog => {
           console.log(blog.tittle, blog.likes);

        });
    }
};

user.logBlogs();
//console.log(this);