import { useState } from 'react';
import styles from './Dropdown.module.scss';

const Dropdown = (props) => {
  const [listOpen, setListOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const { list, defaultTitle, resetThenSet } = props;

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const selectItem = (item) => {
    const { title, key } = item;

    setTitle(title);
    resetThenSet(key, title);
    toggleList();
  };

  return (
    <div className={styles.dropdown}>
      <button
        type="button"
        className={styles.dropdown__header}
        onClick={toggleList}
      >
        <h2 className={styles.dropdown__header__title}>
          {title ?? defaultTitle}
        </h2>
      </button>
      {listOpen && (
        <div role="list" className={styles.dropdown__content}>
          {list.map((item) => (
            <button
              type="button"
              className={styles.dropdown__content__item}
              key={item.id}
              onClick={() => selectItem(item)}
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
