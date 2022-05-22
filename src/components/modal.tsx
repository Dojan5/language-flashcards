import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';
import { Button } from './button';

export interface IModal {
    title: string;
    isOpen: boolean;
    onProceed: () => void;
    onClose: () => void;
    children?: ReactNode;
}

export const Modal: FC<IModal> = ({ title, isOpen, onProceed, onClose, children }) => {
    const dialogueRef: any = useRef(null);

    useEffect(() => {
        if (isOpen) { dialogueRef.current?.showModal(); }
        else { dialogueRef.current?.close(); }
    }, [isOpen]);

    const proceedAndClose = () => {
        onProceed();
        onClose();
    }

    const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation();

    return (
        <dialog
            ref={dialogueRef}
            onCancel={onClose}
            onClick={onClose}
        >
            <div className="content" onClick={preventAutoClose}>
                <h3 className="title">{title}</h3>
                <div className="body">
                    {children}
                </div>
                <div className="controls">
                    <Button onClick={proceedAndClose}>Proceed</Button>
                    <Button onClick={onClose}>Close</Button>
                </div>
            </div>
        </dialog>
    )
}