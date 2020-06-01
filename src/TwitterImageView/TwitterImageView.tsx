import React, {FC, useEffect, useState} from 'react';
import Props from './TwitterImageView.interface';
import classes from './TwitterImageView.module.scss';

const TwitterImageView: FC<Props> = (props) => {
  const { contents, onClose } = props;
  const [left, setLeft] = useState(0);

  const [bodyRef, setBodyRef] = useState<HTMLImageElement[]>([]);

  const setRef = (index: number, ref: HTMLImageElement) => {
    setBodyRef((val: HTMLImageElement[]) => {
      val[index] = ref;
      return val
    } )
  };

  const onClickOutside = (e: { target: any }) => {
    let isImage = false;
    bodyRef.forEach((ref: HTMLImageElement) => {
      if (e.target === ref) {
        isImage = true;
      }
    });
    if (!isImage) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  });

  const canClickLeft = left < 0;
  const onLeft = () => {
    if (canClickLeft) {
      setLeft((val) => val + 1);
    }
  };

  const canClickRight = left > -(contents.length - 1);
  const onRight = () => {
    if (canClickRight) {
      setLeft((val) => val - 1);
    }
  };

  return (
    <div className={classes.modalBackground}>
      {canClickLeft && (
        <button onClick={onLeft} style={{ left: 0 }} className={classes.navigate}>
          <div className={classes.left} />
        </button>
      )}
      <button onClick={onClose} style={{ left: 0, top: 16, fontSize: '20px' }} className={classes.navigate}>
        &times;
      </button>
      <div style={{ marginLeft: `${left * 100}vw` }} className={classes.holder}>
        {contents.map((each: string, index: number) => (
          <div key={index} className={classes.imageBody}>
            <img ref={(ref: HTMLImageElement) => setRef(index, ref)}  style={{ maxWidth: '96%', maxHeight: '96%'}} alt="" src={each} />
          </div>
        ))}
      </div>
      {canClickRight && (
        <button onClick={onRight} style={{ right: 0 }} className={classes.navigate}>
          <div className={classes.right} />
        </button>
      )}
    </div>
  );
};

export default TwitterImageView;
