import React, { useState } from 'react';
import Modal from './Modal';
import Tabs, { Tab } from './Tabs';
import classes from './App.module.scss';
import Drawer from './drawer/Drawer';
import Header from './Header/Header';
import TwitterImageView from './TwitterImageView/TwitterImageView';
import WhatsappStatusView from './WhatsappStatusView/WhatsappStatusView';


const contents = [
  'https://pbs.twimg.com/media/EZWj1bfXQAMuOMA?format=jpg&name=medium',
  'https://pbs.twimg.com/semantic_core_img/1256248283443298310/HdGT-Hww?format=jpg&name=900x900',
];

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
  },{
    title: 'WhatsApp Status',
    tab: <div style={{ height: 600 }}><WhatsappStatusView content={contents}/></div>
  },
];

const App = () => {
  const [open, setOpen] = useState(false);
  const [drawer, setDrawerOpen] = useState(false);
  const [imageView, setImageView] = useState(false);
  const view = {
    title: 'Image View',
    tab: (
      <div>
        <button
          style={{ marginRight: 16, width: '100%' }}
          className={classes.button}
          onClick={() => setImageView(true)}
        >
          View Images the Twitter way
        </button>
        <br />
        <code>{`<TwitterImageView contents={contents} />`}</code>
      </div>
    ),
  };
  return (
    <>
      <Modal title={<h3 style={{ margin: 0 }}>Modal Title</h3>} open={open} onOpenChange={setOpen}>
        <div>This is a body</div>
      </Modal>
      {imageView && <TwitterImageView onClose={() => setImageView(false)} contents={contents} />}
      <div className={classes.app}>
        <Drawer open={drawer} onOpenChange={setDrawerOpen} />
        <div className={classes.sider}>sider</div>
        <div style={{ flex: 1 }}>
          <div style={{ height: '100vh', overflow: 'auto' }}>
            <div>
              <Header>
                <button
                  style={{ marginRight: 16 }}
                  className={[classes.button, classes.drawer].join(' ')}
                  onClick={() => setDrawerOpen(true)}
                >
                  Drawer
                </button>
              </Header>
              <div className={classes.top}>
                <button className={classes.button} onClick={() => setOpen(true)}>
                  Modal
                </button>
              </div>
              <Tabs tabBarClassName={classes.tabBar} activeTab={3} tabs={[...tabs, view]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
