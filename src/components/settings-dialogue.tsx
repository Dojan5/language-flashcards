import React, { FC, useState } from 'react';
import { Button } from './button';
import { Modal } from './modal';

export const SettingsDialogue = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = () => {
        console.log("changed stuff!");
    }

    return(
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 'auto' }}>
            <Button
                icon={<span className="material-symbols-outlined">settings</span>}
                onClick={() => setIsOpen(true)}
                size="large"
            >
                Settings
            </Button>
            <Modal
                title="Settings"
                isOpen={isOpen}
                onProceed={handleChange}
                onClose={() => setIsOpen(false)}
            >
                <p>I'm a modal</p>
            </Modal>
        </div>
    )
}