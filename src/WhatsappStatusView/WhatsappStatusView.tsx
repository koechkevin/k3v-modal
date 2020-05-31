import React, { FC, useEffect, useState } from 'react';
import { Props } from './WhatsappStatusView.interface';
import classes from './WhatsappStatusView.module.scss';

const WhatsappStatusView: FC<Props> = (props) => {
  const { content } = props;
  const [current, setCurrent] = useState<number>(0);
  const [width, setWidth] = useState(0);
  const timeToView = 10; // time in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((v) => {
        if (v >= 100) {
          if (current < content.length - 1) {
            setCurrent((curr) => (curr < content.length - 1 ? curr + 1 : curr));
          }
          if (current === content.length - 1) {
            return 100;
          }
          return 0;
        }
        return v + 100 / (timeToView * 10);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [current, content.length]);

  const canClickLeft = current > 0;
  const canClickRight = current < content.length - 1;

  const onLeft = () => {
    setCurrent((cur) => cur - 1);
    setWidth(0);
  };
  const onRight = () => {
    setCurrent((cur) => cur + 1);
    setWidth(0);
  };

  return (
    <div className={classes.statusImage}>
      {canClickLeft && (
        <button onClick={onLeft} style={{ left: 0 }} className={classes.navigate}>
          <div className={classes.left} />
        </button>
      )}
      <div className={classes.view}>
        <div style={{ display: 'flex' }}>
          {content.map((each: string, index: number) => (
            <div className={[classes.loader, index < current ? classes.viewed : ''].join(' ')} key={index}>
              {index === current && <div className={classes.viewed} style={{ width: `${width}%` }} />}
            </div>
          ))}
        </div>
        <div className={classes.image}>
          <img style={{ maxHeight: '96%', maxWidth: '96%' }} alt="" src={content[current]} />
        </div>
      </div>
      {canClickRight && (
        <button onClick={onRight} style={{ right: 0 }} className={classes.navigate}>
          <div className={classes.right} />
        </button>
      )}
    </div>
  );
};

export default WhatsappStatusView;
