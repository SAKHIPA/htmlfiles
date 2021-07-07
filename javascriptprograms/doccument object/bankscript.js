var user={userName:"user1",passWord:"pw1",name:"ram",balance:2000}
var user={userName:"user2",passWord:"pw2",name:"sam",balance:4000}
var user={userName:"user3",passWord:"pw3",name:"rim",balance:3000}
localStorage.setItem(user.userName,JSON.stringify(user))
