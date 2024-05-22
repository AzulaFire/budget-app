/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import GraphBar from './GraphBar';

/* eslint-disable react/prop-types */
const BarGraph = ({ expenseList, total }) => {
  const [foodTotal, setFoodTotal] = useState(0);
  const [funTotal, setFunTotal] = useState(0);
  const [healthTotal, setHealthTotal] = useState(0);
  const [householdTotal, setHouseholdTotal] = useState(0);
  const [insuranceTotal, setInsuranceTotal] = useState(0);
  const [miscTotal, setMiscTotal] = useState(0);
  const [savingsTotal, setSavingsTotal] = useState(0);
  const [housingTotal, setHousingTotal] = useState(0);
  const [transportationTotal, setTransportationTotal] = useState(0);
  const [utilitiesTotal, setUtilitiesTotal] = useState(0);

  useEffect(() => {
    const getValues = () => {
      setFoodTotal(0);
      setFunTotal(0);
      setHealthTotal(0);
      setHouseholdTotal(0);
      setInsuranceTotal(0);
      setMiscTotal(0);
      setSavingsTotal(0);
      setHousingTotal(0);
      setTransportationTotal(0);
      setUtilitiesTotal(0);

      for (let x = 0; x < expenseList.length; x++) {
        switch (expenseList[x].category) {
          case 'Food':
            // code block
            setFoodTotal((prev) => prev + parseFloat(expenseList[x].amount));
            break;
          case 'Fun and Entertainment':
            // code block
            setFunTotal((prev) => prev + parseFloat(expenseList[x].amount));
            break;
          case 'Health and Fitness':
            // code block
            setHealthTotal((prev) => prev + parseFloat(expenseList[x].amount));
            break;
          case 'Household Items':
            // code block
            setHouseholdTotal(
              (prev) => prev + parseFloat(expenseList[x].amount)
            );
            break;
          case 'Insurance':
            // code block
            setInsuranceTotal(
              (prev) => prev + parseFloat(expenseList[x].amount)
            );
            break;
          case 'Miscellaneous':
            // code block
            setMiscTotal((prev) => prev + parseFloat(expenseList[x].amount));
            break;
          case 'Saving (or Debt Payoff)':
            // code block
            setSavingsTotal((prev) => prev + parseFloat(expenseList[x].amount));
            break;
          case 'Shelter/Housing':
            // code block
            setHousingTotal((prev) => prev + parseFloat(expenseList[x].amount));
            break;
          case 'Transportation':
            // code block
            setTransportationTotal(
              (prev) => prev + parseFloat(expenseList[x].amount)
            );
            break;
          case 'Utilities':
            // code block
            setUtilitiesTotal(
              (prev) => prev + parseFloat(expenseList[x].amount)
            );
            break;
        }
      }
    };

    getValues();
  }, [expenseList]);

  return (
    <>
      <section>
        <div className='flex flex-row bar-graph bar-graph-horizontal'>
          <div className='year'>Food</div>
          <div className=' bar-graph-one' style={{ marginBottom: '10px' }}>
            <div className='bar-one'>
              <GraphBar
                value={((foodTotal / total) * 100).toFixed(1)}
                color='#68d4cd'
                duration='1.2s'
                delay='0.1s'
                className='bar'
                data-percentage={((foodTotal / total) * 100).toFixed(1) + '%'}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row bar-graph bar-graph-horizontal'>
          <div className='year'>Fun and Entertainment</div>
          <div className=' bar-graph-one'>
            <div className='bar-two'>
              <GraphBar
                value={((funTotal / total) * 100).toFixed(1)}
                color='#cff67b'
                duration='1.2s'
                delay='0.2s'
                className='bar'
                data-percentage={((funTotal / total) * 100).toFixed(1) + '%'}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row bar-graph bar-graph-horizontal'>
          <div className='year'>Health and Fitness</div>
          <div className=' bar-graph-one'>
            <div className='bar-three'>
              <GraphBar
                value={((healthTotal / total) * 100).toFixed(1)}
                color='#94dafb'
                duration='1.2s'
                delay='0.3s'
                className='bar'
                data-percentage={((healthTotal / total) * 100).toFixed(1) + '%'}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row bar-graph bar-graph-horizontal'>
          <div className='year'>Household Items</div>
          <div className=' bar-graph-one'>
            <div className='bar-four'>
              <GraphBar
                value={((householdTotal / total) * 100).toFixed(1)}
                color='#fd8080'
                duration='1.2s'
                delay='0.4s'
                className='bar'
                data-percentage={
                  ((householdTotal / total) * 100).toFixed(1) + '%'
                }
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row bar-graph bar-graph-horizontal'>
          <div className='year'>Insurance</div>
          <div className=' bar-graph-one'>
            <div className='bar-five'>
              <GraphBar
                value={((insuranceTotal / total) * 100).toFixed(1)}
                color='#6d848e'
                duration='1.2s'
                delay='0.5s'
                className='bar'
                data-percentage={
                  ((insuranceTotal / total) * 100).toFixed(1) + '%'
                }
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row bar-graph bar-graph-horizontal'>
          <div className='year'>Miscellaneous</div>
          <div className=' bar-graph-one'>
            <div className='bar-six'>
              <GraphBar
                value={((miscTotal / total) * 100).toFixed(1)}
                color='#26a0fc'
                duration='1.2s'
                delay='0.6s'
                className='bar'
                data-percentage={((miscTotal / total) * 100).toFixed(1) + '%'}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row bar-graph bar-graph-horizontal'>
          <div className='year'>Savings</div>
          <div className=' bar-graph-one'>
            <div className='bar-seven'>
              <GraphBar
                value={((savingsTotal / total) * 100).toFixed(1)}
                color='#26e7a6'
                duration='1.2s'
                delay='0.7s'
                className='bar'
                data-percentage={
                  ((savingsTotal / total) * 100).toFixed(1) + '%'
                }
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row bar-graph bar-graph-horizontal'>
          <div className='year'>Shelter/Housing</div>
          <div className=' bar-graph-one'>
            <div className='bar-eight'>
              <GraphBar
                value={((housingTotal / total) * 100).toFixed(1)}
                color='#fdbb3a'
                duration='1.2s'
                delay='0.8s'
                className='bar'
                data-percentage={
                  ((housingTotal / total) * 100).toFixed(1) + '%'
                }
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row bar-graph bar-graph-horizontal'>
          <div className='year'>Transportation</div>
          <div className=' bar-graph-one'>
            <div className='bar-nine'>
              <GraphBar
                value={((transportationTotal / total) * 100).toFixed(1)}
                color='#fab1b2'
                duration='1.2s'
                delay='0.9s'
                className='bar'
                data-percentage={
                  ((transportationTotal / total) * 100).toFixed(1) + '%'
                }
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row bar-graph bar-graph-horizontal'>
          <div className='year'>Utilities</div>
          <div className=' bar-graph-one'>
            <div className='bar-ten'>
              <GraphBar
                value={((utilitiesTotal / total) * 100).toFixed(1)}
                color='#8b75d7'
                duration='1.2s'
                delay='1s'
                className='bar'
                data-percentage={
                  ((utilitiesTotal / total) * 100).toFixed(1) + '%'
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BarGraph;
