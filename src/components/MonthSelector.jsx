/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Calendar3, ChevronDown } from 'react-bootstrap-icons';
import './MonthSelector.scss';

const MonthSelector = ({ selected, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const defaultOptions = [
        'Today',
        'Yesterday',
        'Last 7 days',
        'Last 30 days',
        'This month',
        'Last month',
        'Last year'
    ];

    const displayOptions = options || defaultOptions;

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.MonthSelector')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div className="MonthSelector">
            <button className="Selector-btn" onClick={() => setIsOpen(!isOpen)}>
                <Calendar3 size={16} />
                <span>{selected}</span>
                <ChevronDown size={14} className={`chevron-icon ${isOpen ? 'open' : ''}`} />
            </button>
            {isOpen && (
                <ul className="Selector-dropdown">
                    {displayOptions.map((option) => (
                        <li
                            key={option}
                            className={selected === option ? 'active' : ''}
                            onClick={() => {
                                onChange(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MonthSelector;
