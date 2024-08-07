📦 **modal-react-vite-ts**

A modal component for React and TypeScript applications.

## The link to the npm library 📦: https://www.npmjs.com/package/modal-react-vite-ts


## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: v14.0.0 or higher

- **Text Editor**: It is recommended to use Visual Studio Code or another code editor of your choice.

## 🚀Installation
 

Via npm:
```bash
npm install modal-react-vite-ts 
```

Or via yarn:

```bash
yarn add modal-react-vite-ts
```

## ⚙️ Modal Props

 

The Modal component accepts the following props:

closeModalFunction: () => void - Function to close the modal.

message: string | null - Message to display inside the modal.

confirmBtn: string | null - Text for the close button.

xBtn: string | null - Text for the "X" close button.

handleConfirmClick () => void - Function to execute when the close button is clicked.


## 📝 Example Usage

Here is an example usage of the Modal component directly:

```bash


import React, { useState } from 'react';

import {Modal} from 'modal-react-vite-ts';


const Example: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>Show Modal</button>
      {isModalOpen && (
        <Modal
          closeModalFunction={closeModal}
          message="This is a modal message"
          confirmBtn="close"
          xBtn="X"
          handleConfirmClick={closeModal}
        />
      )}
    </div>
  );
};

export default Example;

```
## Author

Name: Imene Ikhlef Yahiaoui

Email: ikhlefyahiaoui.imene@gmail.com


## License
This project is licensed under the MIT License. See the LICENSE file for details.
 
