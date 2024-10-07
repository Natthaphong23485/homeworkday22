import React, { useState } from 'react';
import './WaterCalculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const WaterCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>("");
  const [waterIntake, setWaterIntake] = useState<number | null>(null);
  const [isDayTheme, setIsDayTheme] = useState(true);

  const calculateWaterIntake = () => {
    const weightNum = parseFloat(weight);

    if (weightNum > 0) {
      const intake = weightNum * 2.2 * 30 / 2; // ใช้คูณ 30 ml ต่อกิโลกรัม
      setWaterIntake(Math.round(intake));
    }
  };

  const toggleTheme = () => {
    setIsDayTheme(!isDayTheme);
  };

  return (
    <div className={isDayTheme ? 'day-theme' : 'night-theme'}>
      <div className='input-con'>
        <div className='input-form'>
          <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>

          {/* ฟอร์มสำหรับกรอกน้ำหนัก */}
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight (kg)"
            style={{ padding: '10px', fontSize: '16px' }}
            inputMode='decimal'
          />
          <button onClick={calculateWaterIntake} style={{ marginLeft: '10px', padding: '10px', border: '1px solid #000' }}>
            คำนวณ
          </button>

          {/* แสดงผลลัพธ์ */}    
            <div className='result'>
            {waterIntake !== null && (
              <p>คุณควรดื่มน้ำประมาณ {waterIntake} มิลลิลิตรต่อวัน</p>
            )}
            </div>
        </div>
        {/* ปุ่มสลับธีม */}
        <button className={isDayTheme ? 'day' : 'night'} onClick={toggleTheme} style={{ padding: '10px' }}>
          <FontAwesomeIcon icon={isDayTheme ? faMoon : faSun} style={{ marginRight: '10px' }} />
          {isDayTheme ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  );
};

export default WaterCalculator;