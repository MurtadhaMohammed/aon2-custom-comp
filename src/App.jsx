import { useState } from "react";
// import { Drawer, Modal, ModalSheet, Radio, Switch } from "./UI";
import { Switch, Radio } from 'antd';


function App() {
  // const [openModal, setOpenModal] = useState(false);
  // const [openDrawer, setOpenDrawer] = useState(false);
  // const [openPopup, setOpenPopup] = useState(false);
  return (
    <div>
      {/* <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <ModalSheet height={200} isOpen={openModal} onClose={() => setOpenModal(false)}>
      <div style={{ padding: 16 }}>Modal</div>
      </ModalSheet> */}

      {/* <button onClick={() => setOpenDrawer(true)}>Open Drawer</button>
      <Drawer isOpen={openDrawer} onClose={() => setOpenDrawer(false)}>
        as;ldja;sojdasojko
      </Drawer> */}
      {/* <button onClick={() => setOpenPopup(true)}>Open Popup</button>
      <Modal isOpen={openPopup} onClose={() => setOpenPopup(false)}>
        Modal
      </Modal> */}

      {/* <Switch value={false} onChange={(val) => console.log(val)} /> */}

      {/* <Radio value={false} onChange={(val) => console.log(val)} >Choose This</Radio> */}

      {/* <Switch defaultChecked onChange={(val)=> console.log(val)} /> */}
      {/* <Radio>Radio</Radio> */}
    </div>
  );
}

export default App;
