// 1. fetch from the api
// 2. use the data to update state and use flatlist to render the data
// 3.handle errors and errors state
// 4. Add loading state for better user experience


{/*
  
  Fetching from Api
  
  1. get the api url
  2. using fetch(url) to fetch and then using .then() to get the data
  3. convert the data to json using .json()


  example

 const[products, setProduct]= useState([])
  useEffect(()=>{
      getData
    },[]);

  const getData()=>{
     const URL= API LINK

     fetch(URL)
     .then((res)=>{
       return res.json();  
      })
       .then((data))=>{
        setProduct(data)
        }
    
    }
  

  2. displaying it is done usually with flatlist, where data will be the state variable =, useEffect uses the function we passed to populate the state variable.


  3. handling errors
   chances are you may encounter an error whn fetching from an api. we use error handling to manage instances like that

   inside the fetch method, after the first promise, we do a check
    if(!res.ok){
    
    throw new Error('your own message')
    }


    then after the second then promise we catch the error

    .catch((error)=>{
       console.log(error.message)
      })



  4. loading state

    create a state variable for it

    const[loading, isLoading]=useState(true);

    then add a check in the main screen component

    {
     isLoading?
     <AcitvityIndicator/>: render the data
    
    }

    after that set thr loading state to false in the second promise block

  
  
*/}