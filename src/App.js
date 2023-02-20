import './App.css';

function App() {

  let time=new Date().getHours()
  const sstyle={
    backgroundColor:'lightgreen',
    textAlign:'center',
  }
  let message=""
  if(time>6 && time<=11){
    message='Good Morning'
    sstyle.color='orange'
  }else if(time>11 && time<=17){
    message='GooD Afternoon'
    sstyle.color='Yellow'
  }else if(time>17 && time<=20){
    message='Good Evening'
    sstyle.color='lightcoral'
  }else{
    message='Good Night'
    sstyle.color='purple'
  }


  return (
    <>
    <div style={sstyle}>
    <h1>Hello Sir 😎, {message}</h1>
    </div>
    </>
  );
}

export default App;
