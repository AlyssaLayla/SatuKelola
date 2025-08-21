"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Calendar } from "lucide-react";

interface DateRangePickerProps {
  onDateRangeChange?: (startDate: Date | null, endDate: Date | null) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onDateRangeChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getDisplayText = () => {
    if (startDate && endDate) {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    } else if (startDate) {
      return `${formatDate(startDate)} - Pilih akhir`;
    }
    return "Rentang";
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date >= startDate) {
      setEndDate(date);
      onDateRangeChange?.(startDate, date);
      setIsOpen(false);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const isDateInRange = (date: Date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  const isDateSelected = (date: Date) => {
    return (
      (startDate && date.getTime() === startDate.getTime()) ||
      (endDate && date.getTime() === endDate.getTime())
    );
  };

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const days = getDaysInMonth(currentMonth);
  const monthYear = currentMonth.toLocaleDateString("id-ID", {
    month: "long",
    year: "numeric",
  });

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "1rem 1.5rem",
          background: "rgba(255, 255, 255, 0.9)",
          border: "1px solid #e2e8f0",
          borderRadius: "20px",
          fontSize: "1rem",
          color: "#374151",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          letterSpacing: "0.025em",
          boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          minWidth: "200px",
          justifyContent: "space-between",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
          e.currentTarget.style.borderColor = "#FDD741";
          e.currentTarget.style.boxShadow = "0 4px 8px -2px rgba(253, 215, 65, 0.2)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
          e.currentTarget.style.borderColor = "#e2e8f0";
          e.currentTarget.style.boxShadow = "0 2px 4px -1px rgba(0, 0, 0, 0.06)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Calendar size={20} style={{ color: "#6b7280" }} />
          <span>{getDisplayText()}</span>
        </div>
        <ChevronDown
          size={18}
          style={{
            color: "#6b7280",
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            marginTop: "12px",
            right: "0",
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "24px",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            zIndex: 9999,
            padding: "24px",
            width: "360px",
            backdropFilter: "blur(20px)",
            background: "rgba(255, 255, 255, 0.95)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <button
              onClick={previousMonth}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                backgroundColor: "white",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f8fafc";
                e.currentTarget.style.borderColor = "#FDD741";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <ChevronDown size={18} style={{ transform: "rotate(90deg)", color: "#6b7280" }} />
            </button>
            <h3
              style={{
                fontWeight: "700",
                color: "#111827",
                fontSize: "1.125rem",
                margin: "0",
                letterSpacing: "-0.01em",
              }}
            >
              {monthYear}
            </h3>
            <button
              onClick={nextMonth}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                backgroundColor: "white",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f8fafc";
                e.currentTarget.style.borderColor = "#FDD741";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <ChevronDown size={18} style={{ transform: "rotate(-90deg)", color: "#6b7280" }} />
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px",
              marginBottom: "12px",
            }}
          >
            {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
              <div
                key={day}
                style={{
                  textAlign: "center",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  color: "#6b7280",
                  padding: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {day}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "4px",
              marginBottom: "20px",
            }}
          >
            {days.map((date, index) => {
              if (!date) {
                return <div key={index} style={{ padding: "12px" }}></div>;
              }

              const isSelected = isDateSelected(date);
              const isInRange = isDateInRange(date);
              const isToday = date.toDateString() === new Date().toDateString();

              return (
                <button
                  key={index}
                  onClick={() => handleDateClick(date)}
                  style={{
                    padding: "12px",
                    fontSize: "0.875rem",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    backgroundColor: isSelected
                      ? "#FDD741"
                      : isInRange
                      ? "#fef3c7"
                      : isToday
                      ? "#f8fafc"
                      : "transparent",
                    color: isSelected
                      ? "#20273A"
                      : isInRange
                      ? "#92400e"
                      : isToday
                      ? "#111827"
                      : "#374151",
                    fontWeight: isSelected || isToday ? "600" : "500",
                    border: isToday && !isSelected ? "1px solid #e5e7eb" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected && !isInRange) {
                      e.currentTarget.style.backgroundColor = "#f1f5f9";
                      e.currentTarget.style.color = "#111827";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected && !isInRange) {
                      if (isToday) {
                        e.currentTarget.style.backgroundColor = "#f8fafc";
                        e.currentTarget.style.color = "#111827";
                      } else {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#374151";
                      }
                    }
                  }}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            paddingTop: "16px",
            borderTop: "1px solid #f1f5f9",
          }}>
            <button
              onClick={() => {
                setStartDate(null);
                setEndDate(null);
                onDateRangeChange?.(null, null);
              }}
              style={{
                fontSize: "0.875rem",
                color: "#6b7280",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                transition: "color 0.2s ease",
                padding: "8px 12px",
                borderRadius: "8px",
                fontWeight: "500",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ef4444";
                e.currentTarget.style.backgroundColor = "#fef2f2";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#6b7280";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Reset Filter
            </button>

            {startDate && endDate && (
              <div style={{
                fontSize: "0.875rem",
                color: "#059669",
                fontWeight: "600",
                padding: "8px 12px",
                backgroundColor: "#dcfce7",
                borderRadius: "8px",
              }}>
                ✓ Filter Aktif
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;