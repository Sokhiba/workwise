import React, {Component} from 'react';
class ProductPage extends Component{
    render(){
        const arrayTest =()=>{
            var numbers=[23, 14, 24, 43, 45, 76];
            // for (var i=0; i<numbers.length; i++){
            //    console.log(numbers[i]) ;
            // }

            numbers.forEach((item)=>{
                console.log(item);
            })

        };
        return(
            <div>
                <button type={"button"} className={"btn btn-success"} onClick={arrayTest}>Click me!</button>
            </div>
        )
    }
}
export default ProductPage;