import React from "react";
import "./Index.scss";
import { BiHomeAlt } from "react-icons/bi";
import { AiFillDollarCircle, AiFillHeart } from "react-icons/ai";
import { FaHandPaper } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { GiPistolGun } from "react-icons/gi";
import { FaPlane } from "react-icons/fa";
import { MdDone } from "react-icons/md";

import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";


function Index() {
    let [cards, setCards] = useState([])
    useEffect(()=>{
        getData()
        console.log(cards);
    },[])

    function getData(){
        axios.get('http://localhost:2002/api/workers').then((res)=>{setCards(res.data)})
    }
  return (
    <>
      <section className="notaryPublic__section">
        <div className="notaryPublic__section__desc">
          <div className="notaryPublic__section__desc__header">
            Notary Public <br /> Legal Solutions
          </div>
          <br />
          <div className="notaryPublic__section__desc__title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quaerat veniam ipsam aliquam dolor numquam!
          </div>
        </div>
      </section>

      <section className="practiseAreas__section">
        <div className="header">
          <h4>Practice Areas</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia
            inventore maiores nobis fugiat mollitia!
          </p>
        </div>
        <div className="staticCards__container">
          <div className="staticCard">
            <AiFillBank style={{ fontSize: "50px" }} />
            <h5>Bankrupty Law</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, quo!
            </p>
          </div>
          <div className="staticCard">
            <AiFillDollarCircle style={{ fontSize: "50px" }} />
            <h5>Business Law</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, quo!
            </p>
          </div>
          <div className="staticCard">
            <FaHandPaper style={{ fontSize: "50px" }} />
            <h5>Civil Rights Law</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, quo!
            </p>
          </div>
          <div className="staticCard">
            <BiHomeAlt style={{ fontSize: "50px" }} />
            <h5>Family Low</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, quo!
            </p>
          </div>
          <div className="staticCard">
            <GiPistolGun style={{ fontSize: "50px" }} />
            <h5>Criminal Law</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, quo!
            </p>
          </div>
          <div className="staticCard">
            <FaPlane style={{ fontSize: "50px" }} />
            <h5>Immigration Law</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, quo!
            </p>
          </div>
        </div>
      </section>

      <section className="effectiveSolutions__section">
        <div className="effectiveSolutions__section__container">
          <div className="effectiveSolutions__section__container__left">
            <img
              src="https://assets.scif.com/Content/Images/MOrder2.jpg"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/8488019/pexels-photo-8488019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="effectiveSolutions__section__container__right">
            <div className="effectiveSolutions__section__container__right__content">
              <h3>
                We Provide Highly <b>Reliable & Effective</b> Legal Solutions{" "}
              </h3>{" "}
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                cupiditate pariatur ab veniam eos asperiores nisi dolores et
                consequuntur, obcaecati dolore. Beatae possimus adipisci, est
                expedita harum nesciunt a eveniet excepturi sit consequatur
                recusandae assumenda, voluptatum veniam consequuntur doloremque
                ut, blanditiis dolorum sequi quasi. Officiis quas iste sit
                itaque est!
              </p>
              <br />
              <button>Book an appointment</button>
            </div>
          </div>
        </div>
      </section>

      <section className="happyCustomers__section">
        <div className="happyCustomers__section__container">
          <h3>Happy Customers</h3>
          <br />
          <div className="cardsContainer">
            {cards.map((card)=>{
                return(
<div className="happyCustomers__section__card">
            <div className="happyCustomers__section__card__header">
              <div className="happyCustomers__section__card__header__img">
                <img src={`${card.image}`} alt="" />
              </div>
              <div className="happyCustomers__section__card__header__text">
                <div className="happyCustomers__section__card__header__text__nameSurname">
                 {card.name}{card.surname}
                </div>
                <div className="happyCustomers__section__card__header__text__position">
                  {card.position}
                </div>
              </div>
            </div>
            <div className="happyCustomers__section__card__desc">
              {card.description}
            </div>
            <button onClick={()=>{
                axios.delete(`http://localhost:2002/api/workers/${card._id}`).then((res)=>getData())
            }}>Delete</button>
            <button>Details</button>
          </div>
                )
            })}
          
         
          </div>
          
        </div>
      </section>

      <section className="legalSolutions__section">
        <div className="legalSolutions__section__container">
            <div className="legalSolutions__section__container__left">
                <img src="https://assets.scif.com/Content/Images/MOrder2.jpg" alt="" />
            </div>
            <div className="legalSolutions__section__container__mid">
                <div className="legalSolutions__section__container__mid__header">
                    <h2>We Have Legal Solutions</h2>
                </div>
                <div className="legalSolutions__section__container__mid__desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quisquam esse mollitia quidem blanditiis possimus obcaecati ipsum beatae nesciunt omnis! <br /> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quaerat pariatur eaque perspiciatis sed earum ullam eius doloremque rerum provident.
                </div>
                <div className="legalSolutions__section__container__mid__choose">
                    <ul>
                        <li> <MdDone/> salam</li>
                        <li> <MdDone/> salam2</li>
                        <li><MdDone/> salam3</li>
                    </ul>
                </div>
            </div>
            <div className="legalSolutions__section__container__right">
                <div className="legalSolutions__section__container__right__header">
                    How to download and register?
                </div>
                <div className="legalSolutions__section__container__right__mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae molestias iusto beatae tempora minima sequi facilis quo est mollitia.</div>
                <div className="legalSolutions__section__container__right__end">
                    <p>How to create your paypal account?</p>
                </div>
                <div className="legalSolutions__section__container__right__end">
                    <p>How to create your paypal account?</p>
                </div>
            </div>
        </div>

      </section>

      <section className="footer">
        <div className="footer__container">
            <hr />
            <p>Copyright 2023 All rights reserved | This template is made with <AiFillHeart/> by Colorlib  </p>
        </div>
      </section>
    </>
  );
}

export default Index;
