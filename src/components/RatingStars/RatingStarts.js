import React, {Component} from 'react';
import './ratingstars.css';
export default class RatingStars extends Component {
  
  
    constructor (props) {
        super(props);
        this.state={
            idnum1 : "Star_"+this.props.bookId+"_1",
            idnum2 : "Star_"+this.props.bookId+"_2",
            idnum3 : "Star_"+this.props.bookId+"_3",
            idnum4 : "Star_"+this.props.bookId+"_4",
            idnum5 : "Star_"+this.props.bookId+"_5"
        }
      
        
    }

    
    
    
    handelStarClicked = (e) =>{
        console.log("userId : "+localStorage.getItem("userId")) ;
let rate = 0 ; 
        for(let i=1;i<=5;i++){
            
          
            if(e.target.id >= `Star_${this.props.bookId}_${i}`){
                document.getElementById(`Star_${this.props.bookId}_${i}`).className = "ratingStar filledRatingStar";
                
                this.props.changeRate(this.props.bookId,i) ; 
                rate = i;
                
            }else{
                document.getElementById(`Star_${this.props.bookId}_${i}`).className = "ratingStar emptyRatingStar";
            }
           }
           
           fetch(`http://gomaanodejsapp.herokuapp.com/book/editrate/${this.props.bookId}/${localStorage.getItem("userId")}/${rate}` , {
            method : "GET" 
         })
   
    }

    componentDidMount(){
        for(let i=1;i<=5;i++){
       
          
            if( this.props.rate >= i){
                document.getElementById(`Star_${this.props.bookId}_${i}`).className = "ratingStar filledRatingStar";
            }else{
                document.getElementById(`Star_${this.props.bookId}_${i}`).className = "ratingStar emptyRatingStar";
            }
        
        
     }
    //  alert("Item no"+this.props.rate+" Mounted") ;
    }


    render(){
       
        return (
            <div>
            <span id= {this.state.idnum1} onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id= {this.state.idnum2} onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id= {this.state.idnum3} onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id= {this.state.idnum4} onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            <span id= {this.state.idnum5} onClick={this.handelStarClicked} className="ratingStar emptyRatingStar" style={{float:"left"}}>&nbsp;</span>
            </div>
        );
    }


}