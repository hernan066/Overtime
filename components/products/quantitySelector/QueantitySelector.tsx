import { FC } from "react";

interface Props {
  currentValue: number;
  maxValue: number;
  updatedQuantity: (newValue: number) => void;
}

export const QueantitySelector: FC<Props> = ({
  currentValue,
  maxValue,
  updatedQuantity,
}) => {
  const addOrRemove = (value: number) => {
    console.log('clicked')
    
   if(currentValue + value >= 1) {
     updatedQuantity(currentValue + value);
   }
   
   
   
   
    /*  if (value === -1) {
      if (currentValue === 1) return;

      return updatedQuantity(currentValue - 1);
    }

    if (currentValue >= maxValue) return;

    updatedQuantity(currentValue + 1); */
  };

  return (
    <div className="quantity-selector">
      <button
        className="quantity-selector__btn"
        onClick={() => addOrRemove(-1)}
      >
        -
      </button>
      <div className="quantity-selector__number">{currentValue}</div>
      <button
        className="quantity-selector__btn"
        onClick={() => addOrRemove(+1)}
      >
        +
      </button>
    </div>
  );
};
