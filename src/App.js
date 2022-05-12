import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import formatCurrency from './components/utils'
import TextField from "@mui/material/TextField";
import List from "./components/List"
import "./App.css";
import Forms from './routes/Forms'
import favorites from './Actions'; //action that needs to be dispatch
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const App = () => {

  const [userInput, setUserInput] = useState("");

  const [inputText, setInputText] = useState("");


  const dispatch = useDispatch()
  
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  const [stockData, setStockData] = useState([])
  
  useEffect(() => {
    fetchData(userInput)
  
  }, [userInput])
  


  const fetchData = async(symbol) =>{

  let results = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=7O5M8M3Z0QX3P5WX`)
  
  let stockData = await results.json();

  // console.log(stockData['Time Series (Daily)'])
  let arr= []
  
  for (const key in stockData['Time Series (Daily)']) {
  let stockObj = {
    date: key,
    data: stockData['Time Series (Daily)'][key]
  }



    // console.log(`${key}: ${stockData['Time Series (Daily)'][key]}`);
    arr.push(stockObj)
    
  }
  // console.log(arr)  
  setStockData(arr)

  }
  
// console.log(stockData)

console.log(userInput)


// const object = { a: 1, b: 2, c: 3, d: 4 };

return (
  //ternary operator
  //condition ? if condition true : if condition false
  
    <div>
      <div>
        {/* date: {stockData[0].date} */}
        {/* *condition ? if condition true : if condition false */}
        {stockData.length === 0
        ?
        ""
        :
        <div>
          
        <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title> Stock: {userInput}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">open: {formatCurrency(stockData[0].data["1. open"])}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">high: {formatCurrency(stockData[0].data["2. high"])}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">low:  {formatCurrency(stockData[0].data["3. low"])}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">close:  {formatCurrency(stockData[0].data["4. close"])}</Card.Subtitle>
              <Card.Text>
              date: {stockData[0].date}
              </Card.Text>
              <Button variant="success" onClick={()=>dispatch(favorites({symbol: userInput, ...stockData[0]}))}>Add to Favorites</Button>{' '}
            </Card.Body>
          </Card>
        </div>
      
        }
            {/* <div className="main">
        <h1>React Search</h1>
        <div className="search">
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            />
        </div>
        <List />
      </div> */}
      </div>
    {/* *condition ? if condition true : if condition false */}
      {stockData.length === 0 ? "Enter Desired Stock Symbol": "Either Add this stock to your favorites or search again for a new stock"} 
      <Forms setUserInput={setUserInput}/>
    </div>
          
    
    )
    
  }

export default App