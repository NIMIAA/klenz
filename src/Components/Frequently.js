import React, { useState } from 'react';
import Close from '../Assets/uparrow.png';
import Open from '../Assets/downarrow.png';

const Frequently = () => {
    const [selected1, setSelected1] = useState(null);
    const [selected2, setSelected2] = useState(null);

    const toggle = (index, setFunction) => {
        setFunction(prevState => prevState === index ? null : index);
    };

    const frequentlyAsked = [
        {
            question: 'WHAT TYPE OF PHOTOGRAPHY DO YOU SPECIALIZE IN?',
            answer:  'I specialize in [Portait, Landscape, Event etc.] photography, capturing moments that tell unique stories.',
        },
        {
            question: 'HOW CAN I BOOK A PHOTOGRAPHY SESSION WITH YOU?',
            answer:  'I specialize in [Portait, Landscape, Event etc.] photography, capturing moments that tell unique stories.',
        },
        {
            question: 'WHAT EQUIPMENT DO YOU USE FOR YOUR PHOTOGRAPHY?',
            answer:  'I specialize in [Portait, Landscape, Event etc.] photography, capturing moments that tell unique stories.',
        },
        {
            question: 'CAN I REQUEST A SPECIFIC LOCATION FOR A SHOOT?',
            answer:  'I specialize in [Portait, Landscape, Event etc.] photography, capturing moments that tell unique stories.',
        },
    ];

    const frequentlyAsked2 = [
        {
            question2: 'WHAT IS YOUR EDITING PROCESS LIKE?',
            answer2:  'I specialize in [Portait, Landscape, Event etc.] photography, capturing moments that tell unique stories.',
        },
        {
            question2: 'ARE DIGITAL FILES INCLUDED IN YOUR PHOTOGRAPHY PACKAGES?',
            answer2:  'I specialize in [Portait, Landscape, Event etc.] photography, capturing moments that tell unique stories.',
        },
        {
            question2: 'DO YOU OFFER PRINTS OF YOUR PHOTOGRAPHS?',
            answer2:  'Yes, prints are available for purchase. Explore the Prints section for more details on sizes and pricing.',
        },
        {
            question2: 'HOW LONG DOES IT TAKE TO RECEIVE THE EDITED PHOTOS AFTER A SESSION?',
            answer2:  'I specialize in [Portait, Landscape, Event etc.] photography, capturing moments that tell unique stories.',
        },
    ];

    return (
        <div className='frequentlyAsked-container'>
            <div className="frequentlyAsked-head">
                <div className="frequentlyAsked-head-text">
                    <p className='grey-text'>FAQ'S</p>
                    <h2 className='subheading'>FREQUENTLY ASKED QUESTIONS</h2>
                </div>
            </div>
        
            <div className="frequentlyAsked-info">
                <div className="question-on-left">
                    {frequentlyAsked.map((data, i) => (
                        <div className="question-container" key={i}>
                            <div className="question" onClick={() => toggle(i, setSelected1)}>
                                <h4>{data.question}</h4>
                                <span>{selected1 === i ? <img src={Close} alt="Open"/> : <img src={Open} alt="Close"/>}</span>
                            </div>
                            <div className={selected1 === i ? 'answer show' : 'answer'}>
                                {data.answer}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="question-on-right">
                    {frequentlyAsked2.map((item, j) => (
                        <div className="question-container2" key={j}>
                            <div className="question" onClick={() => toggle(j, setSelected2)}>
                                <h4>{item.question2}</h4>
                                <span>{selected2 === j ? <img src={Close} alt="Open"/> : <img src={Open} alt="Close"/>}</span>
                            </div>
                            <div className={selected2 === j ? 'answer show' : 'answer'}>
                                {item.answer2}
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

export default Frequently;
