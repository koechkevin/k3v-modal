import React, { FC, ReactNode, useState } from 'react';
import classes from './Tabs.module.scss';

export interface Tab {
  tab: ReactNode;
  title: ReactNode | string;
}
interface Props {
  tabs: Tab[];
  className?: string;
  bodyClassName?: string;
  tabBarClassName?: string;
  activeTab?: number;
  style?: any;
  onTabChange?: (index: number) => void;
}

const Tabs: FC<Props> = (props) => {
  const { tabs, className, bodyClassName, tabBarClassName, activeTab, style, onTabChange } = props;
  const initialValue =  activeTab && (activeTab >= 0) && (activeTab < tabs.length) && activeTab;
  const [active, setActive] = useState(() => initialValue || 0);

  const onSwitchTab = (index: number) => {
    setActive(index);
    onTabChange && onTabChange(index);
  };
  return (
    <div style={{padding: 16,...style}} className={className}>
      <div className={[classes.head, tabBarClassName].join(' ')}>
        {tabs.map((tab: Tab, index) => (
          <button
            onClick={() => onSwitchTab(index)}
            className={[classes.button, active === index ? classes.active : ''].join(' ')}
            key={index}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={[classes.body, bodyClassName].join(' ')}>
        {tabs[active]?.tab}
      </div>
    </div>
  );
};

export default Tabs;
