/* const users = [
  { username: "admin", password: "1234", isBlocked: false },
  { username: "john", password: "qwerty", isBlocked: true },
  { username: "anna", password: "pass", isBlocked: false }
];
let x,y
x = prompt("enter your username","admin")


function login(x) {
    if(x != "admin" && x != "john" && x != "anna" ){
        alert("Օգտատերը չի գտնվել")
        return
        
    }   else {
        y = prompt("enter your password","pas")

    switch( x === "admin" || x === "john" || x === "anna" ){
        
        case (x === "admin" && y === "1234" && !users[0].isBlocked):
             alert(`Բարի գալուստ ${x}`)
             break
        case ( x === "admin" && y!= "1234"):
            alert("Սխալ գաղտնաբառ")
            break
        case (x === "admin" && y === "1234" && users[0].isBlocked ):
            alert("Օգտատերը արգելափակված է")
            break
        
        case (x === "john" && y === "qwerty" && !users[1].isBlocked):
            alert(`Բարի գալուստ ${x}`)  
            break
        case ( x === "john" && y!= "qwerty"):
            alert("Սխալ գաղտնաբառ")
            break
        case (x === "john" && y === "qwerty" && users[1].isBlocked ):
            alert("Օգտատերը արգելափակված է")
            break
        case (x === "anna" && y === "pass" && !users[2].isBlocked):
            alert(`Բարի գալուստ ${x}`)  
            break
        case ( x === "anna" && y!= "pass"):
            alert("Սխալ գաղտնաբառ")
            break
        case (x === "anna" && y === "pass" && users[2].isBlocked ):
            alert("Օգտատերը արգելափակված է")
            break

    } 

        
}
}

login(x)


  */



const users = [
  { username: "admin", password: "1234", isBlocked: false },
  { username: "john", password: "qwerty", isBlocked: true },
  { username: "anna", password: "pass", isBlocked: false }
];
function login(users, username, password) {

  const user = users.find(u => u.username === username);


  if (!user) {
    console.log("Օգտատերը չի գտնվել");
    return;
  }


  if (user.password !== password) {
    console.log("Սխալ գաղտնաբառ");
    return;
  }

  
  if (user.isBlocked) {
    console.log("Օգտատերը արգելափակված է");
    return;
  }


  console.log(`Բարի գալուստ, ${username}`);
}

login(users,"john","qwerty")