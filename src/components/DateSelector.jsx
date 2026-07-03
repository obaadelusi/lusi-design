/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { Calendar3, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import './DateSelector.scss';

const DateSelector = ({ selected, onChange, placeholder = 'Select date...' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    // Initial state for calendar view (year and month)
    const [viewDate, setViewDate] = useState(() => {
        return selected ? new Date(selected) : new Date();
    });

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const viewYear = viewDate.getFullYear();
    const viewMonth = viewDate.getMonth(); // 0-11

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay(); // 0 = Sunday, 1 = Monday, etc.

    const handleMonthChange = (direction) => {
        setViewDate(new Date(viewYear, viewMonth + direction, 1));
    };

    const handleDaySelect = (day) => {
        const selectedDate = new Date(viewYear, viewMonth, day);
        // Format as YYYY-MM-DD
        const yyyy = selectedDate.getFullYear();
        const mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const dd = String(selectedDate.getDate()).padStart(2, '0');
        const dateString = `${yyyy}-${mm}-${dd}`;
        onChange(dateString);
        setIsOpen(false);
    };

    const isToday = (day) => {
        const today = new Date();
        return today.getDate() === day && today.getMonth() === viewMonth && today.getFullYear() === viewYear;
    };

    const isSelected = (day) => {
        if (!selected) return false;
        // Parse date string carefully to avoid offset errors
        const parts = selected.split('-');
        if (parts.length === 3) {
            const selYear = parseInt(parts[0], 10);
            const selMonth = parseInt(parts[1], 10) - 1;
            const selDay = parseInt(parts[2], 10);
            return selDay === day && selMonth === viewMonth && selYear === viewYear;
        }
        return false;
    };

    // Render calendar grid days
    const calendarDays = [];
    // Padding for empty days of previous month
    for (let i = 0; i < firstDayIndex; i++) {
        calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(
            <button
                key={`day-${day}`}
                type="button"
                className={`calendar-day day-btn ${isSelected(day) ? 'selected' : ''} ${isToday(day) ? 'today' : ''}`}
                onClick={() => handleDaySelect(day)}
            >
                {day}
            </button>
        );
    }

    return (
        <div className="DateSelector" ref={containerRef}>
            <button
                type="button"
                className={`Selector-trigger ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Calendar3 size={16} className="calendar-icon" />
                <span className={`trigger-text ${!selected ? 'placeholder' : ''}`}>
                    {selected ? selected : placeholder}
                </span>
            </button>

            {isOpen && (
                <div className="DateSelector-dropdown">
                    <div className="calendar-header">
                        <button type="button" className="nav-btn" onClick={() => handleMonthChange(-1)}>
                            <ChevronLeft size={14} />
                        </button>
                        <span className="month-year-label">
                            {monthNames[viewMonth]} {viewYear}
                        </span>
                        <button type="button" className="nav-btn" onClick={() => handleMonthChange(1)}>
                            <ChevronRight size={14} />
                        </button>
                    </div>

                    <div className="weekdays-grid">
                        <span>Su</span>
                        <span>Mo</span>
                        <span>Tu</span>
                        <span>We</span>
                        <span>Th</span>
                        <span>Fr</span>
                        <span>Sa</span>
                    </div>

                    <div className="days-grid">
                        {calendarDays}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DateSelector;
