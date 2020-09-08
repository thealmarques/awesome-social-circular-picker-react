import React, { useState } from 'react';
import './picker.scss';
import social from '../../assets/images/social.png';

interface Props {
    items: string[];
}

const Picker = (props: Props) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div 
        onClick={() => setVisible(!visible)}
        className="picker"
        style={{
            backgroundImage: `url(${social})`,
        }}>
            {renderElements(props.items, visible)}
        </div>
    );
}

const renderElements = (items: string[], visible: boolean) => {
    const angle = 360 / items.length;
    return items.map((item, index) => {
        const currentAngle = angle * index;
        const distanceInPx = 65;
        const x = Math.cos(currentAngle * Math.PI / 180) * distanceInPx;
        const y = Math.sin(currentAngle * Math.PI / 180) * distanceInPx;

        const image = require(`../../assets/images/${item}.png`);
        return <div
            key={index}
            className={`picker__item ${visible ? 'picker__item-active' : 'picker__item-inactive'}`}
            style={{
                top: y + 'px',
                left: x + 'px',
                backgroundImage: `url(${image})`
            }}>
        </div>
    });
}

export default Picker;
