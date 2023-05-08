import React from 'react';
import styles from './Advantages.module.css';
import cardsInfo from '../../constants/Greeting';
import AdvantagesItem from './AdvantagesItem';

const Advantages = () => {
  return (
    <section>
        <div className={`${styles.wrapper} ${styles.advantages__wrapper}`}>
            <h2 className={styles.advantages__title}>Оцените преимущества <br/>приложения.</h2>
            <h3 className={styles.advantages__subtitle}>Зарегистрируйтесь, чтобы использовать все возможности.</h3>
            <ul className={styles.advantages__list}>
                {cardsInfo.map((cardsInfo, index) => 
                <AdvantagesItem
                    key={index}
                    img={cardsInfo.img}
                    title={cardsInfo.title}
                    text={cardsInfo.text}
                ></AdvantagesItem>)}
            </ul>
        </div>
    </section>
  )
}

export default Advantages