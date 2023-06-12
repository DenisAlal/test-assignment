import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 16px;
`

export const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;
  border-radius:99px;
  
  :before {
    content: '';
    position: absolute;
    background: #f3e7f3;
    height: 8px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-radius:99px;
  }
  :after {
    content: '';
    position: absolute;
    background: #5558FA;
    height: 8px;
    border-radius:99px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`

export const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`

export const StepStyle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white ;
  border: 6px solid ${({ step }) => (step === 'completed' ? '#5558FA' : '#F3E7F3')};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export const StepCount = styled.span`
  font-size: 19px;
  color: #f3e7f3;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  
`

export const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #5558FA;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #f3e7f3;
    color: #000000;
    cursor: not-allowed;
  }
`

export const CheckMark = styled.div`
  font-size:8px;
  font-weight: 600;
  color: #fff;
  border-color: #5558FA;
  background: #5558FA;
  
  border-width: 1.5px;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`
