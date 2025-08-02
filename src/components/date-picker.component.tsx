'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';

interface DateRangePickerProps {
  onDateRangeChange?: (startDate: Date | null, endDate: Date | null) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onDateRangeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getDisplayText = () => {
    if (startDate && endDate) {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    } else if (startDate) {
      return `${formatDate(startDate)} - Pilih akhir`;
    }
    return 'Rentang';
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      // First selection or reset
      setStartDate(date);
      setEndDate(null);
    } else if (date >= startDate) {
      // Second selection
      setEndDate(date);
      onDateRangeChange?.(startDate, date);
      setIsOpen(false);
    } else {
      // If second date is before first, make it the new start
      setStartDate(date);
      setEndDate(null);
    }
  };

  const isDateInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  const isDateSelected = (date: Date) => {
    return (startDate && date.getTime() === startDate.getTime()) ||
           (endDate && date.getTime() === endDate.getTime());
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const days = getDaysInMonth(currentMonth);
  const monthYear = currentMonth.toLocaleDateString('id-ID', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "8px 12px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          backgroundColor: "white",
          fontSize: "14px",
          fontWeight: "500",
          color: "#374151",
          cursor: "pointer",
          transition: "background-color 0.2s ease",
          minWidth: "160px"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#f9fafb";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "white";
        }}
      >
        <Calendar size={16} />
        <span>{getDisplayText()}</span>
        <ChevronDown 
          size={16} 
          style={{
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
          }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            marginTop: "8px",
            right: "0",
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            zIndex: 50,
            padding: "16px",
            width: "320px"
          }}
        >
          {/* Calendar Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px"
            }}
          >
            <button
              onClick={previousMonth}
              style={{
                padding: "4px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                transition: "background-color 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f3f4f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <ChevronDown size={16} style={{ transform: "rotate(90deg)" }} />
            </button>
            <h3
              style={{
                fontWeight: "600",
                color: "#111827",
                fontSize: "16px",
                margin: "0"
              }}
            >
              {monthYear}
            </h3>
            <button
              onClick={nextMonth}
              style={{
                padding: "4px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                transition: "background-color 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f3f4f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <ChevronDown size={16} style={{ transform: "rotate(-90deg)" }} />
            </button>
          </div>

          {/* Days of week */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px",
              marginBottom: "8px"
            }}
          >
            {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map(day => (
              <div
                key={day}
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#6b7280",
                  padding: "8px"
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px"
            }}
          >
            {days.map((date, index) => {
              if (!date) {
                return <div key={index} style={{ padding: "8px" }}></div>;
              }

              const isSelected = isDateSelected(date);
              const isInRange = isDateInRange(date);
              const isToday = date.toDateString() === new Date().toDateString();

              return (
                <button
                  key={index}
                  onClick={() => handleDateClick(date)}
                  style={{
                    padding: "8px",
                    fontSize: "14px",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    backgroundColor: isSelected 
                      ? "#fbbf24" 
                      : isInRange 
                        ? "#fef3c7"
                        : isToday
                          ? "#f3f4f6"
                          : "transparent",
                    color: isSelected 
                      ? "white" 
                      : isInRange 
                        ? "#92400e"
                        : isToday
                          ? "#111827"
                          : "#374151",
                    fontWeight: isToday ? "600" : "normal"
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected && !isInRange) {
                      e.currentTarget.style.backgroundColor = "#f3f4f6";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected && !isInRange && !isToday) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    } else if (isToday && !isSelected && !isInRange) {
                      e.currentTarget.style.backgroundColor = "#f3f4f6";
                    }
                  }}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          {/* Quick actions */}
          <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
            <button
              onClick={() => {
                setStartDate(null);
                setEndDate(null);
                onDateRangeChange?.(null, null);
              }}
              style={{
                fontSize: "14px",
                color: "#6b7280",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#111827";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#6b7280";
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;