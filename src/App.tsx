import React, { useState } from 'react';
import Modal from './Modal';
import Tabs, { Tab } from './Tabs';
import classes from './App.module.scss';
import Drawer from './drawer/Drawer';
import Header from './Header/Header';

const tabs: Tab[] = [
  {
    title: 'Tabs',
    tab: (
      <code style={{ whiteSpace: 'pre-wrap' }}>{`
  <Tabs tabBarClassName={classes.tabBar} activeTab={2} tabs={tabs} />
  `}</code>
    ),
  },
  {
    title: 'Modal',
    tab: (
      <code style={{ whiteSpace: 'pre-wrap' }}>{`
         <Modal title={<h3 style={{ margin: 0 }}>Modal Title</h3>} open={open} onOpenChange={setOpen}>
          <div>This is a body</div>
        </Modal>
  `}</code>
    ),
  },
  {
    title: 'Drawer',
    tab: <code>{`<Drawer open={drawer} onOpenChange={setDrawerOpen} />`}</code>,
  },
];
const App = () => {
  const [open, setOpen] = useState(false);
  const [drawer, setDrawerOpen] = useState(false);
  return (
    <div className={classes.app}>
      <Drawer open={drawer} onOpenChange={setDrawerOpen} />
      <div className={classes.sider}>sider</div>
      <div style={{ flex: 1 }}>
        <Modal title={<h3 style={{ margin: 0 }}>Modal Title</h3>} open={open} onOpenChange={setOpen}>
          <div>This is a body</div>
        </Modal>
        <div style={{ height: '100vh', overflow: 'auto' }}>
          <div style={{ height: 4000 }}>
            <Header>
              <button style={{ marginRight: 16 }} className={[classes.button, classes.drawer].join(' ')} onClick={() => setDrawerOpen(true)}>
                Drawer
              </button>
            </Header>
            <div className={classes.top}>
              <button className={classes.button} onClick={() => setOpen(true)}>
                Modal
              </button>
            </div>
            <Tabs tabBarClassName={classes.tabBar} activeTab={2} tabs={tabs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
