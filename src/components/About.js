import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle,newStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white' 
    // })

    // const [styletype, newStyleType] = useState('Enable Dark Mode');
    // const darkMode = () =>{
    //     if(myStyle.backgroundColor === 'white'){
    //         newStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         newStyleType('Enable Light Mode');
    //     }
    //     else{
    //         newStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         newStyleType('Enable Dark Mode');
    //     }
    // }

  return (
    <div className='container' style={{backgroundColor: props.mode === 'light'?'white':'grey'}}>
        <h1 className='my-3' style={props.textStyle}>About Us</h1> 
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode === 'light'?'white':'grey'}}>
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode === 'light'?'white':'grey'}}>
                <div className="accordion-body" style={props.textStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={{backgroundColor: props.mode === 'light'?'white':'grey'}}>
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode === 'light'?'white':'grey'}}>
                <div className="accordion-body" style={props.textStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode === 'light'?'white':'grey'}}>
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode === 'light'?'white':'grey'}}>
                <div className="accordion-body" style={props.textStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>

        {/* <button type="button" class="btn btn-primary" onClick={darkMode}>{styletype}</button> */}
    </div>
  )
}
