//object literals

let user = {
    name: 'lorena',
    age: 20,
    email: 'lorenahernandez947@gmail.com',
    location: 'mexico',
    blogs: ['why mac y cheese rules', '10 things to make with marmite'],
    login (){
        console.log('the user logged in');
    },
    logout (){
        console.log('the user logged out');
    },
    logBlogs (){
        //console.log(this.blogs);
       //this.blogs
       console.log ('this user has written the following blogs:');
       this.blogs.forEach(blog => {
           console.log(blog);
          //forma en flecha
           /*logBlogs: () => {

           console.log(this);*/
    
        });
    }
};

/*user.logBlogs();
user.login();
user.logout();

const name = 'mario';
name.toUpperCase();*/
user.logBlogs();
console.log(this);