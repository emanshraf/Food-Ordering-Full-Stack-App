import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Slider.module.css";
const Slider = () => {
    const [index, setIndex] = useState(0);

    const sliderItems = [
        {
          id: 1,
          img: "/img/p9.png",
          title: "20% OFF PARTY AND BIRTHDAY CAKES  ",
          desc: " order now.",
        },
        {
          id: 2,
          img: "/img/p3.png",
          title: "BUY THREE GET FOUR",
          desc: " order now.",
        },
        {
          id: 3,
          img: "/img/p4.png",
          title: "THE BEST  CHEESE CAKE",
          desc: " order now.",
        },
      ];
  
    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
  
    return (
      <div className={styles.container}>
        <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
          <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
          {sliderItems.map((item) => (
            <div className={styles.slide}   key={item.id}>
            <div className={styles.imgContainer}>
              <img className={styles.image} src={item.img}    />
            </div>
            <div className={styles.infoContainer}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
          ))}
        </div>
        <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
          <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
        </div>
      </div>
    );
  };
  
  export default Slider;