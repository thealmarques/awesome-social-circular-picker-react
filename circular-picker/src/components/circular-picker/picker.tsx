import React, { useEffect, useState } from 'react';
import './picker.scss';

interface Props {
    elements: string[];
}

const Picker = (props: Props) => {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
    }, []);

    return (
        <div onClick={() => setVisible(!visible)} className="picker">
            C
            {renderElements(props.elements, visible)}
        </div>
    );
}

const renderElements = (elements: string[], visible: boolean) => {
    const angle = 360 / elements.length;
    return elements.map((element, index) => {
        const currentAngle = angle * index;
        const distanceInPx = 80;
        const x = Math.cos(currentAngle * Math.PI / 180) * distanceInPx;
        const y = Math.sin(currentAngle * Math.PI / 180) * distanceInPx;

        return <div
            key={index}
            style={{
                top: y + 'px',
                left: x + 'px'
            }}
            className={`picker__item ${visible ? 'picker__item-active' : 'picker__item-inactive'}`}>
            {element}
        </div>
    });
}

export default Picker;
