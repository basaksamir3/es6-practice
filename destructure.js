// Object desturctruing
const person = {
    name:"samir",
    id:01,
    phone: '01711187984',
    address:"Dhanmondi32",
    job:"nai",
    salary: 25000
  }
  const{name,phone,address} = person;
  console.log(name,phone,address);
  
  const complexObject = {
    names:"abc",
    info:{
      leader:"tiger group",
      addresss:"kolabagan"
    }
  }
  const{addresss,leader}= complexObject.info;
  console.log(addresss,leader);
  
  
  //array desturctruing
  
  const friendsName = ["samir","supta","pranta","joy","anik","niloy","shuvo"]
  
  const[first,second , ...last]= friendsName;
  
  console.log(first,second,last);
  const[ firsts,...lasts]= friendsName;
  console.log(firsts,lasts);