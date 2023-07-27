import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [],
            isloaded : false
        }
    }

    
    componentDidMount(){
        fetch("https://saasaro.com/blog//wp-json/wp/v2/posts")
        .then(res => res.json())
        .then(json =>{
            this.setState({
                isLoaded : true,
                items: json
            })
        })
    }


  render(props) {
    const[isLoaded , items] = this.state;
    if(!isLoaded){
        return <div>Loading Data...</div>
    }
    else{
        return (
            <div className='App' key={items.id}>
                <ul>
                    {items.map(items=>(
                        <li key={items.id}>
                            <h4>title={items.title}</h4>
                        </li>
                    ))}
                </ul>
            </div>
          )
    }
  }
}




