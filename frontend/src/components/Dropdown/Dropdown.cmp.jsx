import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import styles from './Dropdown.module.scss';

const Dropdown = (props) => {
  const { list, defaultTitle, resetThenSet, stateValue } = props;
  const [listOpen, setListOpen] = useState(false);
  const node = useRef();

  const selectItem = (item) => {
    resetThenSet(item.key, item.title);
    setListOpen(false);
  };

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setListOpen(false);
  };

  useEffect(() => {
    if (listOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [listOpen]);

  return (
    <div className={styles.dropdown} ref={node}>
      <button
        type="button"
        className={classnames(styles.dropdown__header, {
          [styles.empty]: !stateValue,
        })}
        onClick={() => setListOpen(!listOpen)}
      >
        <h2 className={styles.dropdown__header__title}>
          {stateValue ?? defaultTitle}
        </h2>
      </button>
      {listOpen && (
        <div
          role="list"
          className={classnames(styles.dropdown__content, {
            [styles.long_list]: list.length > 5,
          })}
        >
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
