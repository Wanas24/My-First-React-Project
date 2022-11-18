import React, { Component } from "react";
import item1 from "../img/cabin.png";
import item2 from "../img/cake.png";
import item3 from "../img/circus.png";
import item4 from "../img/game.png";
import item5 from "../img/safe.png";
import item6 from "../img/submarine.png";

export default class Portfolio extends Component {
  state = {
    itemsContainer: [
      {
        id: "test1",
        name: "LOG CABIN",
        x: <img src={item1} alt="" srcset="" />,
      },
      {
        id: "test2",
        name: "TASTY CAKE",
        x: <img src={item2} alt="" srcset="" />,
      },
      {
        id: "test3",
        name: "CIRCUS TENT",
        x: <img src={item3} alt="" srcset="" />,
      },
      {
        id: "test4",
        name: "CONTROLLER",
        x: <img src={item4} alt="" srcset="" />,
      },
      {
        id: "test5",
        name: "LOCKED SAFE",
        x: <img src={item5} alt="" srcset="" />,
      },
      {
        id: "test6",
        name: "SUBMARINE",
        x: <img src={item6} alt="" srcset="" />,
      },
    ],
  };

 

  render() {
    let ui = this.state.itemsContainer.map((item) => {
      return (
        <div className="col-3 portitem">
          <div className="inner">
            <div class="layer">
              <div
                class="itemtext"
                data-bs-toggle="modal"
                data-bs-target= {`#${item.id}`}
              >
                +
              </div>
            </div>
            {item.x}
            
          </div>

          <div
            className="modal fade "
            id={item.id}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
              <div className="modal-content">
              <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>

              <div className="text-center">
                    <h1 className="heading headingdark">{item.name}</h1>
                    <div className="dashdark"></div>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <div className="dashdark"></div>
                  </div>


                <div className="modal-header ">
                  
                
                </div>
                <div>{item.x}</div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary closeBtn align-self-center"
                    data-bs-dismiss="modal"
                  >
                   X Close Window
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
      );
    }
    
   
    
    );


   


    return (
      <div className="port">
        <div className="text-center">
          <h1 className="heading headingdark">Portfolio</h1>
          <div>
            <div className="dashdark"></div>
            <i class="fa fa-star headingdark" aria-hidden="true"></i>
            <div className="dashdark"></div>
          </div>

          <div className="container portitems ">
            <div className="row justify-content-around mt-5 mb-5 gy-5">
              {ui}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
