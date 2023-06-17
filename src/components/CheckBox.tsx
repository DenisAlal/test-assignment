import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
    setChecked1,
    setChecked2,
    setChecked3,
} from '../store/slices/twoFormSlice'
import {RootState} from "../store/types"

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxLabel = styled.label`
  margin-left: 8px;
  color: #555555;
`;

const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  background-color: ${(props: { checked: any; }) =>
    props.checked ? '#555555' : 'transparent'};
`;

export const CheckBox = () => {
    const dispatch = useDispatch();
    const { checked1, checked2, checked3 } = useSelector(
        (state: RootState) => state.twoForm
    );

    const handleCheckBox1 = (e: any) => {
        dispatch(setChecked1(e.target.checked))
    };

    const handleCheckBox2 = (e: any) => {
        dispatch(setChecked2(e.target.checked))
    };
    const handleCheckBox3 = (e: any) => {
        dispatch(setChecked3(e.target.checked))
    };

    return (
        <div>
            <CheckBoxWrapper>
                <CheckBoxInput
                    checked={checked1}
                    onChange={handleCheckBox1}
                />
                <CheckBoxLabel>Checkbox 1</CheckBoxLabel>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBoxInput
                    checked={checked2}
                    onChange={handleCheckBox2}
                />
                <CheckBoxLabel>Checkbox 2</CheckBoxLabel>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                <CheckBoxInput
                    checked={checked3}
                    onChange={handleCheckBox3}
                />
                <CheckBoxLabel>Checkbox 3</CheckBoxLabel>
            </CheckBoxWrapper>
        </div>
    )
}