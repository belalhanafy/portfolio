import React from "react";
import {
    Modal,
    ModalTrigger,
} from "../components/ui/animated-modal";
import { RiMailSendLine } from "react-icons/ri";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";

export function AnimatedModalDemo({className}) {
    return (
        (<div className={`items-center justify-center mt-6 lg:mt-0 ${className}`}>
            <Modal>
                <ModalTrigger
                    className="flex justify-center text-white bg-black dark:bg-white/20 group/modal-btn">
                    <span
                        className="text-center transition duration-500 group-hover/modal-btn:translate-x-40">
                        <ShinyText text="Contact Me!" disabled={false} speed={3} className='custom-class' />

                    </span>
                    <div
                        className="absolute inset-0 z-20 flex items-center justify-center text-white transition duration-500 -translate-x-40 group-hover/modal-btn:translate-x-0">
                        <RiMailSendLine className="text-xl" />
                    </div>
                </ModalTrigger>
            </Modal>
        </div>)
    );
}
