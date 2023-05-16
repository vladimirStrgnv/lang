import React from 'react';
import styles from './GameSection.module.css';
import GameCard from "../../../components/GameCard/GameCard";

const GameSection = () => {
  return (
    <div className={styles["games-section-wrapper"]}>
      <h2>Игры</h2>
      <h3>Закрепи новые слова при помощи игр.</h3>
      <div className={styles["images-wrapper"]}>
        <GameCard
          link={"/games/savannah"}
          meaning={"Перевод на скорость"}
          title={"Саванна"}
          descrpt={"Выбери правильный перевод падающего вниз слова."}
          imgLink={
            "https://res.cloudinary.com/travel-app/image/upload/v1617587319/rslang/33.png"
          }
        ></GameCard>
        <GameCard
          link={"/games/audiocall"}
          meaning={"Аудирование"}
          title={"Аудиовызов"}
          descrpt={"Попробуй понять, какое слово было произнесено."}
          imgLink={
            "https://res.cloudinary.com/travel-app/image/upload/v1617587319/rslang/44.png"
          }
        ></GameCard>
      </div>
    </div>
  );
};

export default GameSection;