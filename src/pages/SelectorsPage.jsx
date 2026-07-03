/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import PageHeading from '../components/PageHeading';
import MonthSelector from '../components/MonthSelector';
import SearchDropdownSelector from '../components/SearchDropdownSelector';
import DateSelector from '../components/DateSelector';

const SelectorsPage = () => {
    useEffect(() => {
        document.title = 'Selectors — Components | Lusi Design';
    }, []);

    // Local states to make selectors interactive
    const [monthRange, setMonthRange] = useState('This month');
    const [selectedCrop, setSelectedCrop] = useState('');
    const [selectedDate, setSelectedDate] = useState('2026-07-02');

    const cropOptions = [
        { value: 'wheat', label: 'Wheat (Soft Red Winter)' },
        { value: 'corn', label: 'Yellow Corn (Grade #2)' },
        { value: 'soybeans', label: 'Soybeans (Organic)' },
        { value: 'rice', label: 'Long Grain Rice' },
        { value: 'cocoa', label: 'Cocoa Beans (Ghanaian)' },
        { value: 'coffee', label: 'Arabica Coffee Beans' },
        { value: 'sugar', label: 'Refined Sugar Cane' },
        { value: 'cotton', label: 'Upland Cotton' },
    ];

    return (
        <div id="selectorsPage" className="SelectorsPage">
            <PageHeading title="Selectors" />

            <div className="Page__container">
                <div className="Page__section-container">
                    <section className="Page__section">
                        <h2>Range / Month Selector</h2>
                        <p>Used to select predefined time intervals or months. Features a calendar icon and automatic closure on outside click.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1em', minHeight: '120px' }}>
                            <MonthSelector selected={monthRange} onChange={setMonthRange} />
                            <div style={{ fontSize: '13.5px', color: 'var(--grey-600)' }}>
                                Selected Range: <strong>{monthRange}</strong>
                            </div>
                        </div>
                    </section>

                    <section className="Page__section">
                        <h2>Date Selector (Calendar Datepicker)</h2>
                        <p>
                            A custom calendar dropdown picker enabling calendar navigation and date selection in <code>YYYY-MM-DD</code> format.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1em', minHeight: '260px' }}>
                            <DateSelector selected={selectedDate} onChange={setSelectedDate} />
                            <div style={{ fontSize: '13.5px', color: 'var(--grey-600)' }}>
                                Selected Date: <strong>{selectedDate || 'None'}</strong>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="Page__section-container">
                    <section className="Page__section">
                        <h2>Searchable Dropdown Selector</h2>
                        <p>A searchable dropdown suitable for large datasets. Allows real-time filtering of listed options using a text input.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1em', minHeight: '220px' }}>
                            <SearchDropdownSelector selected={selectedCrop} onChange={setSelectedCrop} options={cropOptions} placeholder="Select a commodity..." />
                            <div style={{ fontSize: '13.5px', color: 'var(--grey-600)' }}>
                                Selected Commodity: <strong>{selectedCrop || 'None'}</strong>
                            </div>
                        </div>
                    </section>

                    <section className="Page__section">
                        <h2>Component Summary</h2>
                        <p>Selectors are critical for forms and data tables. Lusi selectors offer clean layouts, micro-animations, and full keyboard/click interaction accessibility.</p>
                        <ul style={{ listStyle: 'inside', fontSize: '13.5px', color: 'var(--clr-text-grey)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>Encapsulated layout, style, and states.</li>
                            <li>Integrated with bootstrap icons.</li>
                            <li>Highly accessible with outside click dismissal.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SelectorsPage;
