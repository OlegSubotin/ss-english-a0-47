import React from 'react';
import s from "./WordsImagesList.module.css";
import bag from "../../../db/vocabularyImages/bag.jpg"
import belt from "../../../db/vocabularyImages/belt.jpg"
import bracelet from "../../../db/vocabularyImages/bracelet.jpg"
import cap from "../../../db/vocabularyImages/cap.jpg"
import earrings from "../../../db/vocabularyImages/earrings.jpg"
import glasses from "../../../db/vocabularyImages/glasses.jpg"
import gloves from "../../../db/vocabularyImages/gloves.jpg"
import hat from "../../../db/vocabularyImages/hat.jpg"
import necklace from "../../../db/vocabularyImages/necklace.jpg"
import pocket from "../../../db/vocabularyImages/pocket.jpg"
import rucksack from "../../../db/vocabularyImages/rucksack.jpg"
import scarf from "../../../db/vocabularyImages/scarf.jpg"

const WordsImagesList = () => {
  return (
    <div>
      <ul className={s.list}>
        <li className={s.item}>
          <img src={bag} alt="bag" width='190' />
          <p className={s.text}>bag</p>
        </li>

        <li className={s.item}>
          <img src={belt} alt="belt" width='190' />
          <p className={s.text}>belt</p>
        </li>
        
        <li className={s.item}>
          <img src={bracelet} alt="bracelet" width='190' />
          <p className={s.text}>bracelet</p>
        </li>
        
        <li className={s.item}>
          <img src={cap} alt="cap" width='190' />
          <p className={s.text}>cap</p>
        </li>
        
        <li className={s.item}>
          <img src={earrings} alt="earrings" width='190' />
          <p className={s.text}>earrings</p>
        </li>
        
        <li className={s.item}>
          <img src={glasses} alt="glasses" width='190' />
          <p className={s.text}>glasses</p>
        </li>

        <li className={s.item}>
          <img src={gloves} alt="gloves" width='190' />
          <p className={s.text}>gloves</p>
        </li>

        <li className={s.item}>
          <img src={hat} alt="hat" width='190' />
          <p className={s.text}>hat</p>
        </li>

        <li className={s.item}>
          <img src={necklace} alt="necklace" width='190' />
          <p className={s.text}>necklace</p>
        </li>

        <li className={s.item}>
          <img src={pocket} alt="pocket" width='190' />
          <p className={s.text}>pocket</p>
        </li>

        <li className={s.item}>
          <img src={rucksack} alt="rucksack" width='190' />
          <p className={s.text}>rucksack</p>
        </li>
        
        <li className={s.item}>
          <img src={scarf} alt="scarf" width='190' />
          <p className={s.text}>scarf</p>
        </li>
      </ul>
    </div>
  );
};

export default WordsImagesList