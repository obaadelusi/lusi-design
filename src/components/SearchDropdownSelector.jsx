/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, XLg } from 'react-bootstrap-icons';
import './SearchDropdownSelector.scss';

const SearchDropdownSelector = ({ selected, onChange, options = [], placeholder = 'Select option...' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const containerRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const filteredOptions = options.filter((opt) => {
        const label = typeof opt === 'string' ? opt : opt.label;
        return label.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const getSelectedLabel = () => {
        if (!selected) return placeholder;
        const found = options.find((opt) => (typeof opt === 'string' ? opt === selected : opt.value === selected));
        if (found) {
            return typeof found === 'string' ? found : found.label;
        }
        return placeholder;
    };

    return (
        <div className="SearchDropdownSelector" ref={containerRef}>
            <button
                type="button"
                className={`Selector-trigger ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`trigger-text ${!selected ? 'placeholder' : ''}`}>
                    {getSelectedLabel()}
                </span>
                <ChevronDown size={14} className={`chevron-icon ${isOpen ? 'open' : ''}`} />
            </button>

            {isOpen && (
                <div className="Selector-dropdown-menu">
                    <div className="Search-input-wrapper">
                        <Search size={14} className="search-icon" />
                        <input
                            type="text"
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            autoFocus
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                className="clear-btn"
                                onClick={() => setSearchQuery('')}
                            >
                                <XLg size={10} />
                            </button>
                        )}
                    </div>
                    <ul className="options-list">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((opt) => {
                                const val = typeof opt === 'string' ? opt : opt.value;
                                const lbl = typeof opt === 'string' ? opt : opt.label;
                                const isSelected = selected === val;
                                return (
                                    <li
                                        key={val}
                                        className={`option-item ${isSelected ? 'active' : ''}`}
                                        onClick={() => {
                                            onChange(val);
                                            setIsOpen(false);
                                            setSearchQuery('');
                                        }}
                                    >
                                        {lbl}
                                    </li>
                                );
                            })
                        ) : (
                            <li className="no-options">No results found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchDropdownSelector;
