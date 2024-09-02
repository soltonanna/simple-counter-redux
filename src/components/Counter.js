import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter-slice';

import classes from './Counter.module.css';


const Counter = () => {
  const [increaseBy, setIncreaseBy] = useState();
  const [decreaseBy, setDecreaseBy] = useState();

  const counter = useSelector(state => state.counter.counter);
  
  const show = useSelector(state => state.counter.showCounter);

  const increaseToggle = useSelector(state => state.counter.increase);
  const decreaseToggle = useSelector(state => state.counter.decrease);

  const dispatch = useDispatch();


  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  /** INCREASE */
  const increaseByCheckboxHandler = () => {
    dispatch(counterActions.increaseToggle());
  }
  const increaseInputChangeHandler = (e) => {
    setIncreaseBy(e.target.value)
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(+increaseBy));
  };

  /** DECREASE */
  const decreaseByCheckboxHandler = () => {
    dispatch(counterActions.decreaseToggle());
  }
  const decreaseInputChangeHandler = (e) => {
    setDecreaseBy(e.target.value)
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(+decreaseBy));
  };

  /** RESET */
  const resetHandler = () => {
    dispatch(counterActions.reset());
  }

  return (
    <main className={classes.counter}>
      <div className={`${classes.mainBlock} ${!show ? classes.fullWidth : ''}`}>
        {show && <div><span className={classes.value}>{counter}</span></div>}

        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementHandler}>Decrement</button>

          <div className={classes.increaseBy}>
            <div className={classes.row}>
              <input
                type="checkbox"
                id="increaseBy"
                onClick={increaseByCheckboxHandler}
                className={classes.customCheckbox}
              />

              <label htmlFor="increaseBy" className={classes.customLabel}>
               Increase by ...
              </label>

              {increaseToggle && (
                <input
                  type="number"
                  min={1}
                  max={100}
                  placeholder="Number"
                  onChange={increaseInputChangeHandler}
                  className={classes.numberInput}
                />
              )}
            </div>
            {(increaseToggle && increaseBy) && (
              <button className={classes.fullWidthButton} onClick={increaseHandler}>
                Increase by {increaseBy}
              </button>
            )}
          </div>

          <div className={classes.decreaseBy}>
            <div className={classes.row}>
              <input
                type="checkbox"
                id="decreaseBy"
                onClick={decreaseByCheckboxHandler}
                className={classes.customCheckbox}
              />

              <label htmlFor="decreaseBy" className={classes.customLabel}>
               Decrease by ...
              </label>

              {decreaseToggle && (
                <input
                  type="number"
                  min={1}
                  max={100}
                  placeholder="Number"
                  onChange={decreaseInputChangeHandler}
                  className={classes.numberInput}
                />
              )}
            </div>
            {(decreaseToggle && decreaseBy) && (
              <button className={classes.fullWidthButton} onClick={decreaseHandler}>
                Increase by {decreaseBy}
              </button>
            )}
          </div>

          <button onClick={toggleCounterHandler}>Toggle Counter</button>

          <button onClick={resetHandler}>Reset Counter</button>
        </div>
      </div>
    
    </main>
  );
};

export default Counter;
